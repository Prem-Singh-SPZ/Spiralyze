function createTest3002(){document.body.classList.add("spz-3002-drataverse"),waitForElm("#__next .hs-form-private").then((function(){insertStickySection()})),waitForElm("#__next .spz-sticky-footer").then((function(){window.onload=checkScrollPosition(),window.onscroll=function(){checkScrollPosition()}}))}function insertStickySection(){0==document.querySelectorAll("#__next .spz-sticky-footer").length&&document.querySelector("#__next").insertAdjacentHTML("beforeend",'<div class="spz-sticky-footer"><div class="sticky-footer">\n        <div class="sticky-container">\n            <div class="left-content">\n                <img class="left-arrow" src="https://res.cloudinary.com/spiralyze/image/upload/v1690987004/drata/3002/decoration-arrow.svg" alt="Arrow" />\n                <span>Witness our biggest product updates yet at Drataverse Digital</span>\n            </div>\n            <div class="right-content">\n                <a href="/demo" target="_blank" class="hs-cta-primary trigger-demo-btn">Register Now <img src="https://res.cloudinary.com/spiralyze/image/upload/v1690987050/drata/3002/cta_arrow.svg" alt="Arrow" /></a>\n            </div>\n            </div>\n            <div class="close-sticky">\n            <a href="javascript:void(0)" class="sticky-close-btn"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690986863/drata/3002/close.svg" alt="Close" /></a>\n            </div>\n        </div>\n    </div>\n    ')}function checkScrollPosition(){waitForElm("#__next header.MuiAppBar-positionFixed").then((function(){let e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=document.querySelector("#__next header.MuiAppBar-positionFixed").offsetHeight+506;if(document.querySelector("body .spz-sticky-footer")){let o=document.querySelector("#__next .spz-sticky-footer").offsetHeight;e>t?(document.querySelector("body .spz-sticky-footer").classList.add("show-sticky"),document.querySelector("#__next").style.paddingBottom=o+"px"):document.querySelector("body .spz-sticky-footer").classList.contains("show-sticky")&&(document.querySelector("body .spz-sticky-footer").classList.remove("show-sticky"),document.querySelector("#__next").style.paddingBottom="0px")}}))}function removeTest(){document.querySelector(".spz-sticky-footer")&&(document.querySelector(".spz-sticky-footer").remove(),document.querySelector("#__next").style.paddingBottom="0px"),document.body.classList.remove("spz-3002-drataverse")}window.addEventListener("click",(function(e){e.target.classList.contains("sticky-close-btn")&&(this.document.querySelector(".spz-sticky-footer").remove(),document.querySelector("#__next").style.paddingBottom="0px")})),history.pushState=function(e){return function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t}}(history.pushState),history.replaceState=function(e){return function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t}}(history.replaceState),window.addEventListener("popstate",(function(){window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){removeTest(),urlCheck(url=location.href)}));var url=location.href;function urlCheck(e){let t="";window.location.href.indexOf("/blog")>-1&&(t=window.location.href),isSameUrl(e,t,!1)?createTest3002():removeTest()}function isSameUrl(e,t,o){return e=e.includes("#")?e.slice(0,e.indexOf("#")):e,t=t.includes("#")?t.slice(0,t.indexOf("#")):t,o&&(e=e.includes("?")?e.slice(0,e.indexOf("?")):e),e===t||e===t+"/"}function waitForElm(e){return new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));const o=new MutationObserver((function(n){document.querySelector(e)&&(t(document.querySelector(e)),o.disconnect())}));o.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}urlCheck(url);