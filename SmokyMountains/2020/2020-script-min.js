!function(){var e;(e="#main .vl-main .vl-book",new Promise((function(i){if(document.querySelector(e))return i(document.querySelector(e));const n=new MutationObserver((function(t){document.querySelector(e)&&(i(document.querySelector(e)),n.disconnect())}));n.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))).then((function(){0==document.querySelectorAll("#main .vl-main .vl-book .spz-2020-content").length&&(document.body.classList.add("spz-2020"),window.innerWidth>=1024?document.querySelector("#main .vl-main aside.vl-main__sidebar .vl-book").insertAdjacentHTML("afterend",'<div class="spz-2020-content desktop-only"><div class="content-section"><div class="content-parent"><h6>Why book with us? </h6></div><ul class="content-list"><li class="list-item"><span>Free personalized gift —</span> choose your reward after booking. Gift cards, dining, activities, and more.</li> <li class="list-item"><span>Professionally cleaned —</span> all properties are thoroughly cleaned and sanitized.</li><li class="list-item"><span>Exclusive properties —</span> find cabins not listed on other sites.</li> </ul></div></div>'):document.querySelector("#main .vl-main  .vl-book").insertAdjacentHTML("afterend",'<div class="spz-2020-content mobile-only"><div class="content-section"><div class="content-parent"><h6>Why book with us? </h6></div><ul class="content-list"><li class="list-item"><span>Free personalized gift —</span> choose your reward after booking. Gift cards, dining, activities, and more.</li> <li class="list-item"><span>Professionally cleaned —</span> all properties are thoroughly cleaned and sanitized.</li><li class="list-item"><span>Exclusive properties —</span> find cabins not listed on other sites.</li> </ul></div></div>'))}))}();