import{S as m,i as l}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const p="https://pixabay.com/api/",f="42800800-86f7251243bc7e4391903d90a",d=document.querySelector(".loader");function h(t,o=1,r=12){const c=`${p}?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${r}
  `;return d.style.display="block",fetch(c).then(e=>{if(d.style.display="none",e.ok)return e.json();throw new Error("Error fetching data")}).catch(e=>console.error("Error:",e))}function u(){const t=document.querySelector(".gallery");t.innerHTML=""}function y(){new m(".gallery a",{captions:!0,captionDelay:250}).refresh()}function g(t){const o=document.querySelector(".gallery");u(),t.forEach(r=>{const c=L(r);o.appendChild(c)}),y()}function L(t){const o=document.createElement("div");o.classList.add("card");const r=document.createElement("a");r.href=t.largeImageURL,r.classList.add("simplelightbox"),r.setAttribute("data-lightbox","gallery");const c=document.createElement("img");c.src=t.webformatURL,c.alt=t.tags,c.classList.add("card-img-top"),r.appendChild(c),o.appendChild(r);const e=document.createElement("div");e.classList.add("card-body");const n=document.createElement("p");n.classList.add("card-text"),n.textContent=`Likes: ${t.likes}`;const s=document.createElement("p");s.classList.add("card-text"),s.textContent=`Views: ${t.views}`;const a=document.createElement("p");a.classList.add("card-text"),a.textContent=`Comments: ${t.comments}`;const i=document.createElement("p");return i.classList.add("card-text"),i.textContent=`Downloads: ${t.downloads}`,e.appendChild(n),e.appendChild(s),e.appendChild(a),e.appendChild(i),o.appendChild(e),o}const E=document.querySelector(".search-form"),b=document.querySelector(".search-input");E.addEventListener("submit",x);function x(t){t.preventDefault();const o=b.value.trim();if(o===""){l.error({title:"Error",message:"Please enter a search query"});return}u(),h(o).then(r=>{r.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.hits)}).catch(r=>{console.error("Error fetching images:",r)})}
//# sourceMappingURL=commonHelpers.js.map