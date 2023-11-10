import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const textLoader = document.querySelector('.loader');
const textError = document.querySelector('.error');
const containerInfo = document.querySelector('.cat-info');

const hiddenStyle = 'display: none;';
const visibleStyle = 'display: block;';

selectEl.addEventListener('click', handleOption);

textLoader.style.cssText = hiddenStyle;
textError.style.cssText = hiddenStyle;

async function getBreeds() {
  try {
    textLoader.style.cssText = visibleStyle;
    const result = await fetchBreeds();
    console.log('getBreeds: ', result);
    return result;
  } catch (error) {
    console.log(error);
    textError.style.cssText = visibleStyle;
  } finally {
    textLoader.style.cssText = hiddenStyle;
  }
}

getBreeds()
  .then(data => {
    return data
      .map(cat => {
        const markup = `<option value=${cat.id} key=${cat.id}>${cat.name}</option>`;
        selectEl.insertAdjacentHTML('beforeend', markup);
      })
      .join('');
  })
  .catch(error => {
    console.log(error);
    textError.style.cssText = visibleStyle;
  });

async function getCatByBreed(breedId) {
  try {
    textLoader.style.cssText = visibleStyle;
    const result = await fetchCatByBreed(breedId);
    return result;
  } catch (error) {
    console.log(error);
    textError.style.cssText = visibleStyle;
  } finally {
    textLoader.style.cssText = hiddenStyle;
  }
}

function handleOption(evt) {
  evt.preventDefault();
  const breedId = evt.target.value;
  getCatByBreed(breedId)
    .then(cat => {
      console.log('Cat by breed: ', cat[0]);
      const markup = `<div style="display: flex; flex-direction: row">
        <div
          style="
            margin-top: 30px;
            margin-right: 30px;
            width: 350px;
            background-color: grey;
            border-radius: 4px 4px 4px 4px;
            box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
              0px 1px 1px 0px rgba(46, 47, 66, 0.16),
              0px 1px 6px 0px rgba(46, 47, 66, 0.08);
              overflow: hidden;
          "
        >
          <img
            src=${cat[0]?.url}
            alt=${cat[0]?.breeds[0]?.name}
            style="
              display: block;
              width: 100%;
            "
          />
        </div>
        <div style="display: block; margin-top: 30px">
          <h1 style="font-size: x-large; font-weight: 700; margin-bottom: 16px">
            ${cat[0]?.breeds[0]?.name}
          </h1>
          <p style="margin-bottom: 12px">${cat[0]?.breeds[0]?.description}</p>
          <p>
            <span style="font-weight: 700; padding-right: 8px">Temperament:</span>${cat[0]?.breeds[0]?.temperament}
          </p>
        </div>
      </div>`;
      containerInfo.innerHTML = markup;
    })
    .catch(error => {
      console.log(error);
      textError.style.cssText = visibleStyle;
    });
}
