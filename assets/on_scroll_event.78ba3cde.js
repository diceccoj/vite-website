(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function g(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=g(r);fetch(r.href,o)}})();const m=document.querySelector(".primary-header"),s=document.querySelector(".mobile-nav-toggle"),d=document.querySelector(".primary-navigation"),f=document.querySelector(".slider");s!=null&&s.addEventListener("click",()=>{d.hasAttribute("data-visible")?s.setAttribute("aria-expanded",!1):s.setAttribute("aria-expanded",!0),d.classList.toggleAttribute("data-visible"),m.toggleAttribute("data-overlay")});f!=null&&new A11YSlider(f,{adaptiveHeight:!1,dots:!0,centerMode:!0,arrows:!1});const l=document.querySelectorAll(".left"),n=document.querySelectorAll(".right"),u=document.querySelector(".top_image"),a=document.querySelectorAll(".fade-in"),h=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?e.target.classList.add("fade-from-left"):e.target.classList.remove("fade-from-left")})},{threshold:.5}),p=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?e.target.classList.add("fade-from-right"):e.target.classList.remove("fade-from-right")})},{threshold:.5}),v=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?e.target.classList.add("top_img"):e.target.classList.remove("top_img")})},{threshold:.5}),b=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?e.target.classList.add("fade-in-anim"):e.target.classList.remove("fade-in-anim")})},{threshold:.5});if(l!=null)for(let t=0;t<l.length;t++){const e=l[t];h.observe(e)}if(n!=null)for(let t=0;t<n.length;t++){const e=n[t];p.observe(e)}u!=null&&v.observe(u);if(a!=null)for(let t=0;t<a.length;t++){const e=a[t];b.observe(e)}
