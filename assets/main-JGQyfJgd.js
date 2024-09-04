document.querySelector(".header__search-input").addEventListener("input",function(){const o=document.querySelector(".header__search-load"),e=document.querySelector(".header__search-close"),t=document.querySelector(".header-search__result-list");this.value.length>0?(o.style.display="block",e.style.display="none",t.style.display="none",setTimeout(()=>{o.style.display="none",e.style.display="block",t.style.display="block"},500)):(o.style.display="none",e.style.display="none",t.style.display="none")});document.querySelector(".header__search-close").addEventListener("click",function(){const o=document.querySelector(".header__search-input"),e=document.querySelector(".header__search-close"),t=document.querySelector(".header-search__result-list");o.value="",e.style.display="none",t.style.display="none"});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".video-main__video");function e(){o.forEach(t=>{const s=t.getBoundingClientRect();s.top>=0&&s.bottom<=window.innerHeight?t.play():t.pause()})}e(),window.addEventListener("scroll",e)});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".video-main__item").forEach(e=>{const t=e.querySelector(".video__btn"),s=e.querySelector(".video__btn-span-text"),n=e.querySelector(".video__likes"),l=e.querySelector(".video__hearts");t.addEventListener("click",()=>{const i=e.querySelectorAll(".video-heart");e.classList.contains("liked")?(e.classList.remove("liked"),n.classList.remove("active"),s.textContent="голосовать",i.forEach(a=>{a.style.animation="none"}),l.style.display="none"):(e.classList.add("liked"),n.classList.add("active"),s.textContent="ГОЛОС ПРИНЯТ",l.style.display="flex",i.forEach((a,r)=>{const c=Math.random()*100-10;a.style.setProperty("--offset-x",`${c}px`),a.style.animation="heartAnimation 3s forwards",a.style.animationDelay=`${r*.3}s`}))})})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".js-video__share"),e=document.querySelectorAll(".js-share-popup");function t(s,n,l,i){s.preventDefault(),window.innerWidth>991?(l.classList.toggle("active"),n.classList.toggle("active"),e.forEach((r,c)=>{c!==i&&r.classList.contains("active")&&(r.classList.remove("active"),o[c].classList.remove("active"))})):window.open("https://your-share-url.com","_blank")}o.forEach((s,n)=>{const l=e[n];s.addEventListener("click",i=>t(i,s,l,n))}),document.addEventListener("click",s=>{window.innerWidth>991&&!s.target.closest(".js-video__share")&&!s.target.closest(".js-share-popup")&&e.forEach((l,i)=>{l.classList.contains("active")&&(l.classList.remove("active"),o[i].classList.remove("active"))})}),window.addEventListener("resize",()=>{e.forEach(s=>s.classList.remove("active")),o.forEach(s=>s.classList.remove("active"))})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js-copy-btn").forEach(e=>{e.addEventListener("click",function(){const t=this.closest(".share-popup").querySelector(".js-share-popup-input");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value);const s=this.querySelector(".tooltiptext");s.textContent="Скопировано: "+t.value,s.classList.add("active")}),e.addEventListener("mouseout",function(){const t=this.querySelector(".tooltiptext");t.textContent="Копировать ссылку",t.classList.remove("active")})})});const d=`
    <button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>

<div class="plyr__controls">
    
        <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div style="display: flex" class="player-flex-block">
    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
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

</div>
`;new Plyr("#player",{controls:d});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".plyr"),e=document.querySelector(".video__bottom"),t=new MutationObserver(function(s){for(let n of s)n.type==="attributes"&&n.attributeName==="class"&&(o.classList.contains("plyr--hide-controls")?e.classList.remove("up"):e.classList.add("up"))});t.observe(o,{attributes:!0}),window.addEventListener("unload",function(){t.disconnect()})});
//# sourceMappingURL=main-JGQyfJgd.js.map
