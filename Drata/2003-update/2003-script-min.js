function createTest2002(){"/"===window.location.pathname?(document.body.classList.add("spz-2003"),waitForElm(".css-1pj9xab-HeroHomepage-actions").then((function(){appendHomeHeroContent(),-1==navigator.userAgent.toLowerCase().indexOf("chrome/")&&navigator.userAgent.toLowerCase().indexOf("safari/")>-1&&document.body.classList.add("safari")}))):(document.body.classList.add("spz-2003"),waitForElm(".hs-form-private").then((function(){insertEmailInField()})))}function appendHomeHeroContent(){waitForElm(".MuiTypography-root.MuiTypography-heroTitle.css-aclrcr-MuiTypography-root-HeroHomepage-title").then((function(){document.querySelector(".MuiBox-root.css-vab0dl-Link-root-HeroHomepage-cTA")&&document.querySelector(".MuiBox-root.css-vab0dl-Link-root-HeroHomepage-cTA").remove(),0==document.querySelectorAll(".review-sum-wrapper").length&&(document.querySelector(".MuiTypography-root.MuiTypography-heroTitle.css-aclrcr-MuiTypography-root-HeroHomepage-title").insertAdjacentHTML("beforebegin",'\n                <div class="review-sum-wrapper">\n                    <a href="#" class="htw-link g2-rvw">\n                        <div class="htw-img-wrap">\n                            <picture>\n                                <source media="(min-width:1280px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856847/drata/2002/g2_rating-desktop_2.svg">\n                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856847/drata/2002/g2_rating-tablet_2.svg">\n                                <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_rating-mobile_2.svg">\n                                <img class="htw-img" draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1687856847/drata/2002/g2_rating-desktop_2.svg" alt="G2 Reviews">\n                            </picture>\n                        </div>\n                    </a>\n                    <a href="https://drata.com/blog/g2-summer-2023-report" target="_blank" class="htw-link lead-spring">\n                        <div class="htw-img-wrap">\n                            <picture>\n                                <source media="(min-width:1280px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-desktop_3.svg">\n                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-tablet_3.svg">\n                                <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-mobile_3.svg">\n                                <img class="htw-img default" draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-desktop_3.svg" alt="Leader Summer 2023">\n                            </picture>\n\n                            <picture>\n                                <source media="(min-width:1280px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-desktop_hover_3.svg">\n                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-tablet_hover_3.svg">\n                                <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-mobile_hover_3.svg">\n                                <img class="htw-img hover" draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-desktop_hover_3.svg" alt="Leader Summer 2023">\n                            </picture>\n                        </div>\n                    </a>\n                </div>'),document.querySelector(".MuiBox-root.css-1pj9xab-HeroHomepage-actions").insertAdjacentHTML("afterbegin",'\n                    <div class="form-group-spz">\n                        <input type="email" name="email" class="form-field-spz email-hero-spz" placeholder=" " />\n                        <label class="form-label-spz">Work Email</label>\n                    </div>\n                '),storeEmail()),0==document.querySelectorAll(".hero-interface-wrapper").length&&document.querySelector(".MuiBox-root.css-1vsa5xp-HeroHomepage-content").insertAdjacentHTML("afterend",'<div class="hero-interface-wrapper"></div>')}))}function storeEmail(){const e=document.querySelector(".email-hero-spz"),t=document.querySelector(".MuiBox-root.css-1pj9xab-HeroHomepage-actions .MuiButton-ctaModule");try{t.addEventListener("click",(function(){e.value&&createEmailCookie(e.value)}))}catch(e){console.warn(e),console.warn("Email field or get started button not found")}}function insertEmailInField(){const e=setInterval((()=>{const t=document.querySelector('main [name="email"]'),a=document.querySelector('.form-wrapper-spz [name="email"]'),o=getEmailCookie("userEmail");a&&""!==o?(clearInterval(e),a.value=getEmailCookie("userEmail"),a.focus(),deleteEmailCookie("userEmail")):t&&""!==o&&(clearInterval(e),t.value=getEmailCookie("userEmail"),t.focus(),deleteEmailCookie("userEmail"))}),1e3)}function removeTest(){document.body.classList.remove("spz-2003")}history.pushState=function(e){return function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t}}(history.pushState),history.replaceState=function(e){return function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t}}(history.replaceState),window.addEventListener("popstate",(function(){window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){removeTest(),urlCheck(url=location.href)}));var url=location.href;function urlCheck(e){var t="https://drata.com/";"/demo"!==window.location.pathname&&"/"!==window.location.pathname||(t=window.location.href),isSameUrl(e,t,!0)||isSameUrl(e,t+"demo",!0)?createTest2002():removeTest()}function isSameUrl(e,t,a){return e=e.includes("#")?e.slice(0,e.indexOf("#")):e,t=t.includes("#")?t.slice(0,t.indexOf("#")):t,a&&(e=e.includes("?")?e.slice(0,e.indexOf("?")):e),e===t||e===t+"/"}function createEmailCookie(e){today=new Date;var t=new Date;t.setTime(today.getTime()+6e4),document.cookie="userEmail="+e+";path=/;expires="+t.toUTCString()}function getEmailCookie(e){let t=e+"=",a=decodeURIComponent(document.cookie).split(";");for(let e=0;e<a.length;e++){let o=a[e];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}function deleteEmailCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function waitForElm(e){return new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));const a=new MutationObserver((function(o){document.querySelector(e)&&(t(document.querySelector(e)),a.disconnect())}));a.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}urlCheck(url);