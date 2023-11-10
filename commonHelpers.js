import{a as d}from"./assets/vendor-26fe51b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const b="live_ZRgbBHJqgNMula4MM0iCWTzXUjzZl2DkCaQ88DwD6Vsb5qyd5uxrl2YpDd75X6oV";d.defaults.baseURL="https://api.thecatapi.com/v1/";d.defaults.headers.common["x-api-key"]=b;async function B(){const e="breeds";try{return(await d.get(e)).data}catch(t){throw t.code==="ERR_BAD_REQUEST"&&console.log("Error","Bad request!"),new Error(t)}}async function T(e){const t=`images/search?breed_ids=${e}`;try{return(await d.get(t)).data}catch(o){throw o.code==="ERR_BAD_REQUEST"&&console.log("Error","Bad request!"),new Error(o)}}const h=document.querySelector(".breed-select"),i=document.querySelector(".loader"),a=document.querySelector(".error"),w=document.querySelector(".cat-info"),p="display: none;",l="display: block;";h.addEventListener("click",k);i.style.cssText=p;a.style.cssText=p;async function E(){try{i.style.cssText=l;const e=await B();return console.log("getBreeds: ",e),e}catch(e){console.log(e),a.style.cssText=l}finally{i.style.cssText=p}}E().then(e=>e.map(t=>{const o=`<option value=${t.id} key=${t.id}>${t.name}</option>`;h.insertAdjacentHTML("beforeend",o)}).join("")).catch(e=>{console.log(e),a.style.cssText=l});async function v(e){try{return i.style.cssText=l,await T(e)}catch(t){console.log(t),a.style.cssText=l}finally{i.style.cssText=p}}function k(e){e.preventDefault();const t=e.target.value;v(t).then(o=>{var r,s,n,u,y,f,g,x,m;console.log("Cat by breed: ",o[0]);const c=`<div style="display: flex; flex-direction: row">
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
            src=${(r=o[0])==null?void 0:r.url}
            alt=${(n=(s=o[0])==null?void 0:s.breeds[0])==null?void 0:n.name}
            style="
              display: block;
              width: 100%;
            "
          />
        </div>
        <div style="display: block; margin-top: 30px">
          <h1 style="font-size: x-large; font-weight: 700; margin-bottom: 16px">
            ${(y=(u=o[0])==null?void 0:u.breeds[0])==null?void 0:y.name}
          </h1>
          <p style="margin-bottom: 12px">${(g=(f=o[0])==null?void 0:f.breeds[0])==null?void 0:g.description}</p>
          <p>
            <span style="font-weight: 700; padding-right: 8px">Temperament:</span>${(m=(x=o[0])==null?void 0:x.breeds[0])==null?void 0:m.temperament}
          </p>
        </div>
      </div>`;w.innerHTML=c}).catch(o=>{console.log(o),a.style.cssText=l})}
//# sourceMappingURL=commonHelpers.js.map
