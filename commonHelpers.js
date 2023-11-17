import{a as c}from"./assets/vendor-26fe51b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const u="live_ZRgbBHJqgNMula4MM0iCWTzXUjzZl2DkCaQ88DwD6Vsb5qyd5uxrl2YpDd75X6oV";c.defaults.baseURL="https://api.thecatapi.com/v1/";c.defaults.headers.common["x-api-key"]=u;async function f(){const e="breeds",{data:t}=await c.get(e);return t}async function m(e){const t=`images/search?breed_ids=${e}`,{data:o}=await c.get(t);return o}const n=document.querySelector(".breed-select"),l=document.querySelector(".loader"),d=document.querySelector(".error"),i=document.querySelector(".cat-info");n.addEventListener("change",y);async function h(){try{n.classList.add("hidden"),l.classList.remove("hidden");const e=await f();return console.log("getBreeds: ",e),e&&n.classList.remove("hidden"),e}catch(e){console.log(e),d.classList.remove("hidden")}finally{l.classList.add("hidden")}}h().then(e=>e.map(t=>{const o=`<option value=${t.id} key=${t.id}>${t.name}</option>`;n.insertAdjacentHTML("beforeend",o)}).join("")).catch(e=>{console.log(e),d.classList.remove("hidden")});async function g(e){try{n.classList.add("hidden"),i.classList.add("hidden"),d.classList.add("hidden"),l.classList.remove("hidden");const t=await m(e);return t&&(n.classList.remove("hidden"),i.classList.remove("hidden")),t}catch(t){console.log(t),d.classList.remove("hidden")}finally{l.classList.add("hidden")}}function y(e){e.preventDefault();const t=e.target.value;g(t).then(o=>{var r,s;i.innerHTML="",console.log("Cat by breed: ",o[0]);const a=`<div style="display: flex; flex-direction: row">
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
            src=${o[0].url}
            alt=${o[0].breeds[0].name}
            style="
              display: block;
              width: 100%;
            "
          />
        </div>
        <div style="display: block; margin-top: 30px">
          <h1 style="font-size: x-large; font-weight: 700; margin-bottom: 16px">
            ${o[0].breeds[0].name}
          </h1>
          <p style="margin-bottom: 12px">${o[0].breeds[0].description}</p>
          <p>
            <span style="font-weight: 700; padding-right: 8px">Temperament:</span>${(s=(r=o[0])==null?void 0:r.breeds[0])==null?void 0:s.temperament}
          </p>
        </div>
      </div>`;o&&i.classList.remove("hidden"),i.innerHTML=a}).catch(o=>{console.log(o),d.classList.remove("hidden")})}
//# sourceMappingURL=commonHelpers.js.map
