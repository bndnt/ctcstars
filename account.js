import"./assets/styles-CvjqNFjB.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".select-button"),n=document.querySelector(".select-dropdown"),o=document.querySelector(".selected-value");e.addEventListener("click",function(t){t.preventDefault();const s=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!s),n.classList.toggle("active"),e.classList.toggle("active")}),n.addEventListener("click",function(t){t.preventDefault();const s=t.target.closest("li");if(s){const l=s.querySelector(".account__select-content").cloneNode(!0);o.innerHTML="",o.appendChild(l),n.classList.remove("active"),e.setAttribute("aria-expanded","false"),e.classList.remove("active")}}),document.addEventListener("click",function(t){!e.contains(t.target)&&!n.contains(t.target)&&(n.classList.remove("active"),e.setAttribute("aria-expanded","false"),e.classList.remove("active"))})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".account__form-labels input");function n(){e.forEach(o=>{o.value.trim()!==""?o.classList.add("active"):o.classList.remove("active")})}n(),e.forEach(o=>{o.addEventListener("input",n)})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-account__form-input");function n(o){let t=o.replace(/\D/g,""),s="+7 (";return t.length>1&&(s+=t.substring(1,4)),t.length>=5&&(s+=") "+t.substring(4,7)),t.length>=8&&(s+="-"+t.substring(7,9)),t.length>=10&&(s+="-"+t.substring(9,11)),s}e.addEventListener("focus",function(){e.value.trim()===""&&(e.value="+7 (",e.classList.add("active"))}),e.addEventListener("input",function(){e.value=n(e.value)}),e.addEventListener("keydown",function(o){const t=o.key;!/[0-9]/.test(t)&&t!=="Backspace"&&t!=="ArrowLeft"&&t!=="ArrowRight"&&o.preventDefault()})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("application-approved-button"),n=document.getElementById("application-approved-myTooltip"),o=document.getElementById("application-approved-myInput");e.addEventListener("click",function(){o.select(),o.setSelectionRange(0,99999),navigator.clipboard.writeText(o.value),n.innerHTML="Скопировано: "+o.value}),e.addEventListener("mouseout",function(){n.innerHTML="Копировать ссылку"})});const a=`
    <button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>

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
`;new Plyr("#player",{controls:a});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("volume-button"),n=document.querySelector(".plyr__volume");e.addEventListener("mouseover",function(){n.style.display="flex"}),e.addEventListener("mouseout",function(){const o=t=>{n.contains(t.relatedTarget)||(n.style.display="none")};n.addEventListener("mouseout",o,{once:!0})}),n.addEventListener("mouseout",function(o){e.contains(o.relatedTarget)||(n.style.display="none")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".support__block"),n=document.querySelector(".support__telegram");function o(){e.classList.toggle("active"),n.classList.toggle("active")}function t(s){!e.contains(s.target)&&!n.contains(s.target)&&(e.classList.remove("active"),n.classList.remove("active"))}e.addEventListener("click",o),document.addEventListener("click",t)});
//# sourceMappingURL=account.js.map
