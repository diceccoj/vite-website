(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=document.querySelector(".primary-header"),i=document.querySelector(".mobile-nav-toggle"),s=document.querySelector(".primary-navigation");i.addEventListener("click",()=>{s.hasAttribute("data-visible")?i.setAttribute("aria-expanded",!1):i.setAttribute("aria-expanded",!0),s.classList.toggleAttribute("data-visible"),a.toggleAttribute("data-overlay")});new A11YSlider(document.querySelector(".slider"),{adaptiveHeight:!1,dots:!0,centerMode:!0,arrows:!1});
