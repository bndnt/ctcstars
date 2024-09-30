document.addEventListener("DOMContentLoaded",function(){function o(e){return e.getBoundingClientRect().top>=0}function n(){document.querySelectorAll(".new-hero-item.bear").forEach(t=>{o(t)&&t.classList.add("animate")})}window.addEventListener("scroll",n),n()});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".js-forms-popup"),n=document.querySelector(".js-header__button-block"),e=document.querySelector(".js-login-bg");n.addEventListener("click",function(t){t.preventDefault(),o.forEach(function(s){s.classList.add("active")}),e.classList.add("active")}),o.forEach(function(t){t.querySelector(".js-login-btn-close").addEventListener("click",function(){t.classList.remove("active"),[...o].some(l=>l.classList.contains("active"))||e.classList.remove("active")})}),e.addEventListener("click",function(){o.forEach(function(t){t.classList.remove("active")}),e.classList.remove("active")})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".js-forms-popup"),n=document.querySelector(".js-header__button-block-mob"),e=document.querySelector(".js-login-bg");n.addEventListener("click",function(t){t.preventDefault(),o.forEach(function(s){s.classList.add("active")}),document.querySelector("#mobile_menu_toggle").classList.toggle("active"),document.querySelector(".mobile__menu").classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),e.classList.add("active")}),o.forEach(function(t){t.querySelector(".js-login-btn-close").addEventListener("click",function(){t.classList.remove("active"),[...o].some(l=>l.classList.contains("active"))||e.classList.remove("active")})}),e.addEventListener("click",function(){o.forEach(function(t){t.classList.remove("active")}),e.classList.remove("active")})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".songs-show-more__button"),n=document.querySelector(".songs-show-more__span"),e=document.querySelector(".songs__list"),t=document.querySelector(".songs-show-more"),s=()=>window.innerWidth<=650?"600px":"955px",l=()=>{e.classList.contains("expanded")?(e.classList.remove("expanded"),t.classList.remove("active"),e.style.maxHeight=s(),n.textContent="Показать ещё"):(e.classList.add("expanded"),t.classList.add("active"),e.style.maxHeight=`${e.scrollHeight}px`,n.textContent="Скрыть")};o.addEventListener("click",l),e.style.maxHeight=s(),window.addEventListener("resize",function(){e.classList.contains("expanded")||(e.style.maxHeight=s())})});new Accordion(".accordion-container",{duration:400,showMultiple:!0});document.querySelector("#mobile_menu_toggle").addEventListener("click",function(o){o.preventDefault(),this.classList.toggle("active"),document.querySelector(".mobile__menu").classList.toggle("active"),document.querySelector(".js-login-bg").classList.toggle("active"),document.querySelector(".top__hamburger").classList.toggle("active"),document.body.classList.toggle("hidden")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href").substring(1),s=document.getElementById(t);if(s){const i=s.getBoundingClientRect().top+window.pageYOffset-window.innerHeight/3.5;window.scrollTo({top:i,behavior:"smooth"})}})})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".js-phone-input");o.addEventListener("focus",function(){o.value===""&&(o.value="+7 (___) ___-__-__",o.setSelectionRange(4,4))}),o.addEventListener("input",function(n){let e=o.value.replace(/\D/g,"");if(e.length===0)o.value="+7 (___) ___-__-__",o.setSelectionRange(4,4);else{e=e.substring(1,11);let t="+7 (";e.length>0&&(t+=e.substring(0,3)),e.length>=4&&(t+=") "+e.substring(3,6)),e.length>=7&&(t+="-"+e.substring(6,8)),e.length>=9&&(t+="-"+e.substring(8,10)),e.length<10&&(t+="_".repeat(10-e.length)),o.value=t,o.value.length<4&&(o.value="+7 (")}}),o.addEventListener("blur",function(){o.value==="+7 (___) ___-__-__"&&(o.value="")}),o.addEventListener("keydown",function(n){!/[0-9]/.test(n.key)&&n.key!=="Backspace"&&n.key!=="ArrowLeft"&&n.key!=="ArrowRight"&&n.preventDefault()})});const c=`
    <button type="button" class="real-winners-play-btn plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>

<div class="plyr__controls">
    
        <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div style="display: flex" class="player-flex-block">
    <button type="button" class="plyr__control account-btn-play-small" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation" width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.57373 1L1.57373 11" stroke="#FF0199" stroke-width="1.6" stroke-linecap="round" />
  <path d="M7.57373 1L7.57373 11" stroke="#FF0199" stroke-width="1.6" stroke-linecap="round" />
</svg>
        <svg class="icon--not-pressed" role="presentation" width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.1798 10.0247C20.1197 10.5674 20.1197 11.9241 19.1798 12.4668L2.40958 22.1491C1.46962 22.6918 0.294679 22.0134 0.294679 20.9281L0.294679 1.56351C0.29468 0.478141 1.46962 -0.200213 2.40958 0.34247L19.1798 10.0247Z" fill="#FF0199" />
</svg>
        
    </button>
    
<div style="display: flex"><div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div></div>
   </div>
<div style="display: flex">

    <button type="button" id="volume-button" class="plyr__control" aria-label="Mute" data-plyr="mute">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
      
    </button>
    <div class="plyr__volume js-plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>
   
    <button type="button" class="plyr__control" data-plyr="fullscreen">
        <svg class="icon--pressed" role="presentation" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0059 6.49396V12.744H3.75586M20.0059 6.49396V12.744H26.2559M3.75586 17.744H10.0059V23.994M20.0059 23.994V17.744H26.2559" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        <svg class="icon--not-pressed" role="presentation" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.66675 6.00002V3.73335C2.66675 3.35999 2.66675 3.1733 2.73941 3.0307C2.80333 2.90525 2.90531 2.80327 3.03075 2.73935C3.17336 2.66669 3.36005 2.66669 3.73341 2.66669L6.00008 2.66669M2.66675 10V12.2667C2.66675 12.6401 2.66675 12.8267 2.73941 12.9693C2.80333 13.0948 2.90531 13.1968 3.03075 13.2607C3.17336 13.3334 3.36005 13.3334 3.73341 13.3334L6.00008 13.3334M10.0001 2.66669H12.2667C12.6401 2.66669 12.8268 2.66669 12.9694 2.73935C13.0949 2.80326 13.1968 2.90525 13.2608 3.03069C13.3334 3.1733 13.3334 3.35999 13.3334 3.73335V6.00002M13.3334 10V12.2667C13.3334 12.6401 13.3334 12.8267 13.2608 12.9693C13.1968 13.0948 13.0949 13.1968 12.9694 13.2607C12.8268 13.3334 12.6401 13.3334 12.2667 13.3334H10.0001" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Свернуть</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">На весь экран </span>
    </button>
    </div>
</div>
`;Array.from(document.querySelectorAll(".js-wonners-player")).map(o=>new Plyr(o,{controls:c}));document.addEventListener("DOMContentLoaded",function(){function o(t){const s=t.querySelector(".plyr"),l=t.querySelector(".videos-result__info");s&&l&&(s.classList.contains("plyr--stopped")?l.classList.add("up"):l.classList.remove("up"))}function n(t){const s=t.querySelector(".plyr");s&&new MutationObserver(function(i){i.forEach(r=>{r.type==="attributes"&&r.attributeName==="class"&&o(t)})}).observe(s,{attributes:!0})}document.querySelectorAll(".videos-result__item").forEach(t=>{o(t),n(t)})});
//# sourceMappingURL=index-DzwVcsi_.js.map
