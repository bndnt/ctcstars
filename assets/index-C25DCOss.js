document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".js-forms-popup"),o=document.querySelector(".js-header__button-block"),e=document.querySelector(".js-login-bg");o.addEventListener("click",function(n){n.preventDefault(),t.forEach(function(s){s.classList.add("active")}),e.classList.add("active")}),t.forEach(function(n){n.querySelector(".js-login-btn-close").addEventListener("click",function(){n.classList.remove("active"),[...t].some(c=>c.classList.contains("active"))||e.classList.remove("active")})}),e.addEventListener("click",function(){t.forEach(function(n){n.classList.remove("active")}),e.classList.remove("active")})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".js-forms-popup"),o=document.querySelector(".js-header__button-block-mob"),e=document.querySelector(".js-login-bg");o.addEventListener("click",function(n){n.preventDefault(),t.forEach(function(s){s.classList.add("active")}),document.querySelector("#mobile_menu_toggle").classList.toggle("active"),document.querySelector(".mobile__menu").classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),e.classList.add("active")}),t.forEach(function(n){n.querySelector(".js-login-btn-close").addEventListener("click",function(){n.classList.remove("active"),[...t].some(c=>c.classList.contains("active"))||e.classList.remove("active")})}),e.addEventListener("click",function(){t.forEach(function(n){n.classList.remove("active")}),e.classList.remove("active")})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".songs-show-more__button"),o=document.querySelector(".songs-show-more__span"),e=document.querySelector(".songs__list"),n=document.querySelector(".songs-show-more"),s=()=>window.innerWidth<=650?"600px":"955px",c=()=>{e.classList.contains("expanded")?(e.classList.remove("expanded"),n.classList.remove("active"),e.style.maxHeight=s(),o.textContent="Показать ещё"):(e.classList.add("expanded"),n.classList.add("active"),e.style.maxHeight=`${e.scrollHeight}px`,o.textContent="Скрыть")};t.addEventListener("click",c),e.style.maxHeight=s(),window.addEventListener("resize",function(){e.classList.contains("expanded")||(e.style.maxHeight=s())})});new Accordion(".accordion-container",{duration:400,showMultiple:!0});document.querySelector("#mobile_menu_toggle").addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("active"),document.querySelector(".mobile__menu").classList.toggle("active"),document.querySelector(".js-login-bg").classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),document.body.classList.toggle("hidden")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(e){e.preventDefault();const n=this.getAttribute("href").substring(1),s=document.getElementById(n);s&&window.scrollTo({top:s.offsetTop,behavior:"smooth"})})})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".js-phone-input");t.addEventListener("focus",function(){t.value===""&&(t.value="+7 (___) ___-__-__",t.setSelectionRange(4,4))}),t.addEventListener("input",function(o){let e=t.value.replace(/\D/g,"");if(e.length===0)t.value="+7 (___) ___-__-__",t.setSelectionRange(4,4);else{e=e.substring(1,11);let n="+7 (";e.length>0&&(n+=e.substring(0,3)),e.length>=4&&(n+=") "+e.substring(3,6)),e.length>=7&&(n+="-"+e.substring(6,8)),e.length>=9&&(n+="-"+e.substring(8,10)),e.length<10&&(n+="_".repeat(10-e.length)),t.value=n,t.value.length<4&&(t.value="+7 (")}}),t.addEventListener("blur",function(){t.value==="+7 (___) ___-__-__"&&(t.value="")}),t.addEventListener("keydown",function(o){!/[0-9]/.test(o.key)&&o.key!=="Backspace"&&o.key!=="ArrowLeft"&&o.key!=="ArrowRight"&&o.preventDefault()})});
//# sourceMappingURL=index-C25DCOss.js.map
