document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".js-forms-popup"),c=document.querySelector(".js-header__button-block"),e=document.querySelector(".js-login-bg");c.addEventListener("click",function(t){t.preventDefault(),o.forEach(function(n){n.classList.add("active")}),e.classList.add("active")}),o.forEach(function(t){t.querySelector(".js-login-btn-close").addEventListener("click",function(){t.classList.remove("active"),[...o].some(s=>s.classList.contains("active"))||e.classList.remove("active")})}),e.addEventListener("click",function(){o.forEach(function(t){t.classList.remove("active")}),e.classList.remove("active")})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".js-forms-popup"),c=document.querySelector(".js-header__button-block-mob"),e=document.querySelector(".js-login-bg");c.addEventListener("click",function(t){t.preventDefault(),o.forEach(function(n){n.classList.add("active")}),document.querySelector("#mobile_menu_toggle").classList.toggle("active"),document.querySelector(".mobile__menu").classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),e.classList.add("active")}),o.forEach(function(t){t.querySelector(".js-login-btn-close").addEventListener("click",function(){t.classList.remove("active"),[...o].some(s=>s.classList.contains("active"))||e.classList.remove("active")})}),e.addEventListener("click",function(){o.forEach(function(t){t.classList.remove("active")}),e.classList.remove("active")})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".songs-show-more__button"),c=document.querySelector(".songs-show-more__span"),e=document.querySelector(".songs__list"),t=document.querySelector(".songs-show-more"),n=()=>window.innerWidth<=650?"600px":"955px",s=()=>{e.classList.contains("expanded")?(e.classList.remove("expanded"),t.classList.remove("active"),e.style.maxHeight=n(),c.textContent="Показать ещё"):(e.classList.add("expanded"),t.classList.add("active"),e.style.maxHeight=`${e.scrollHeight}px`,c.textContent="Скрыть")};o.addEventListener("click",s),e.style.maxHeight=n(),window.addEventListener("resize",function(){e.classList.contains("expanded")||(e.style.maxHeight=n())})});new Accordion(".accordion-container",{duration:400,showMultiple:!0});document.querySelector("#mobile_menu_toggle").addEventListener("click",function(o){o.preventDefault(),this.classList.toggle("active"),document.querySelector(".mobile__menu").classList.toggle("active"),document.querySelector(".js-login-bg").classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),document.body.classList.toggle("hidden")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(c=>{c.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href").substring(1),n=document.getElementById(t);n&&window.scrollTo({top:n.offsetTop,behavior:"smooth"})})})});
//# sourceMappingURL=index-DrvjtPNc.js.map
