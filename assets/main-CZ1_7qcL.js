document.querySelector(".header__search-input").addEventListener("input",function(){const s=document.querySelector(".header__search-load"),e=document.querySelector(".header__search-close"),t=document.querySelector(".header-search__result-list");this.value.length>0?(s.style.display="block",e.style.display="none",t.style.display="none",setTimeout(()=>{s.style.display="none",e.style.display="block",t.style.display="block"},500)):(s.style.display="none",e.style.display="none",t.style.display="none")});document.querySelector(".header__search-close").addEventListener("click",function(){const s=document.querySelector(".header__search-input"),e=document.querySelector(".header__search-close"),t=document.querySelector(".header-search__result-list");s.value="",e.style.display="none",t.style.display="none"});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".video-main__video");function e(){s.forEach(t=>{const o=t.getBoundingClientRect();o.top>=0&&o.bottom<=window.innerHeight?t.play():t.pause()})}e(),window.addEventListener("scroll",e)});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".video-main__item").forEach(e=>{const t=e.querySelector(".video__btn"),o=e.querySelector(".video__btn-span-text"),i=e.querySelector(".video__likes"),n=e.querySelector(".video__hearts");t.addEventListener("click",()=>{const c=e.querySelectorAll(".video-heart");e.classList.contains("liked")?(e.classList.remove("liked"),i.classList.remove("active"),o.textContent="Голосовать",c.forEach(l=>{l.style.animation="none"}),n.style.display="none"):(e.classList.add("liked"),i.classList.add("active"),o.textContent="Голос принят",n.style.display="flex",c.forEach((l,a)=>{const r=Math.random()*100-10;l.style.setProperty("--offset-x",`${r}px`),l.style.animation="heartAnimation 3s forwards",l.style.animationDelay=`${a*.3}s`}))})})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".js-video__share"),e=document.querySelectorAll(".js-share-popup");function t(o,i,n,c){o.preventDefault(),window.innerWidth>991?(n.classList.toggle("active"),i.classList.toggle("active"),e.forEach((a,r)=>{r!==c&&a.classList.contains("active")&&(a.classList.remove("active"),s[r].classList.remove("active"))})):window.open("https://your-share-url.com","_blank")}s.forEach((o,i)=>{const n=e[i];o.addEventListener("click",c=>t(c,o,n,i))}),document.addEventListener("click",o=>{window.innerWidth>991&&!o.target.closest(".js-video__share")&&!o.target.closest(".js-share-popup")&&e.forEach((n,c)=>{n.classList.contains("active")&&(n.classList.remove("active"),s[c].classList.remove("active"))})}),window.addEventListener("resize",()=>{e.forEach(o=>o.classList.remove("active")),s.forEach(o=>o.classList.remove("active"))})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js-copy-btn").forEach(e=>{e.addEventListener("click",function(){const t=this.closest(".share-popup").querySelector(".js-share-popup-input");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value);const o=this.querySelector(".tooltiptext");o.textContent="Скопировано: "+t.value,o.classList.add("active")}),e.addEventListener("mouseout",function(){const t=this.querySelector(".tooltiptext");t.textContent="Копировать ссылку",t.classList.remove("active")})})});Array.from(document.querySelectorAll(".js-player")).map(s=>new Plyr(s));document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".plyr").forEach(e=>{const t=e.closest(".video-main__item-cover").querySelector(".video__bottom"),o=new MutationObserver(function(i){i.forEach(n=>{n.type==="attributes"&&n.attributeName==="class"&&(e.classList.contains("plyr--hide-controls")?t.classList.remove("up"):t.classList.add("up"))})});o.observe(e,{attributes:!0}),window.addEventListener("unload",function(){o.disconnect()})})});
//# sourceMappingURL=main-CZ1_7qcL.js.map
