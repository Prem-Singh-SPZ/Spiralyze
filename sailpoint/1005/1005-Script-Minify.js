!function(){function e(){let e=setInterval((function(){const r=document.querySelector("body");if(r)if(clearInterval(e),r.classList.contains("SPZ-1005")){if(r.classList.contains("SPZ-1005")){t("SPZ-1005","SPZ_1005_truecontrol"),o("SPZ-1005","SPZ_1005_variant");let s=setInterval((()=>{n()}),500);setTimeout((()=>{clearInterval(s)}),1e4)}}else{r.classList.add("SPZ-1005");const l="footer",c="beforebegin",d="#mktoForm_1018",u={siteLogo:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo__colored.svg",siteLogoAlt:"SailPoint",contentSuperHeading:"Unified identity security",contentHeading:"Discover, manage, and secure all identities",features:[{checkmarkImage:"//res.cloudinary.com/spiralyze/image/upload/v1730978649/sailpoint/1001/check.svg",featureItemContent:"<b>Access management.</b> Monitor user access. Auto-implement roles. Streamline access approval or removal."},{checkmarkImage:"//res.cloudinary.com/spiralyze/image/upload/v1730978649/sailpoint/1001/check.svg",featureItemContent:"<b>Complete coverage.</b> Manage non-employee or privileged access, machine identities, entitlements across clouds, passwords, risk, etc. Detect threats."},{checkmarkImage:"//res.cloudinary.com/spiralyze/image/upload/v1730978649/sailpoint/1001/check.svg",featureItemContent:"<b>Compliance.</b> Demonstrate compliance with audit trails. GDPR, HIPAA, PCI, CCPA, FISMA, PCPD, PDPA, and more."}],formArrow:"//res.cloudinary.com/spiralyze/image/upload/v1730978717/sailpoint/1001/arrow.svg",formHeading:"Get live demo"},f={socialProofLogos:{socialProofHeading:"50% of the Fortune 500 and 25% of the Forbes Global 2000",socialProofImages:[{url:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_01.svg",imgAlt:"GM"},{url:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_02.svg",imgAlt:"Hershey"},{url:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_03.svg",imgAlt:"Paccar"},{url:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_04.svg",imgAlt:"Philips"},{url:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_05.svg",imgAlt:"RWE"},{url:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_06.svg",imgAlt:"T Mobile"},{url:"//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_07.svg",imgAlt:"The Home Depot"},{url:"//res.cloudinary.com/spiralyze/image/upload/v1737472368/sailpoint/1005/salvation_army-logo.svg",imgAlt:"The Salvation Army"}]}};function a(e,t,o,r,a){const n=`<section class="spz-hero">\n              <div class="spz-wrapper">\n                <div class="spz-form-wrap">\n                  <div class="content-section">\n                    ${0!==e.siteLogo.length?`<a class="site-logo" data-sentry-element="NextLink" data-sentry-source-file="MainLargeNavigation.tsx" href="/">\n                      <img src="${e.siteLogo}" alt="${e.siteLogoAlt}" />\n                    </a>`:""}\n                    ${0!==e.contentSuperHeading.replace(/\s/g,"").length?`<div class="content-superheading">${e.contentSuperHeading}</div>`:""}\n                    ${0!==e.contentHeading.replace(/\s/g,"").length?`<div class="content-heading">${e.contentHeading}</div>`:""}\n                    <div class="spz-features-wrap">\n                      ${e.features.length>0?e.features.map((e=>`<div class="feature-item">\n                          <img src="${e.checkmarkImage}" alt="checkmark" />\n                          <span>${e.featureItemContent}</span>\n                        </div>`)).join(""):""}\n                    </div>\n                    ${0!==e.formArrow.length?`<img src="${e.formArrow}" class="form-arrow" alt="Arrow" />`:""}\n                  </div>\n                  <div class="spz-form-section">\n                    ${0!==e.formHeading.replace(/\s/g,"").length?`<div class="form-heading">${e.formHeading}</div>`:""}\n                    <div class="the-form"></div>\n                  </div>\n                </div>\n              </div>\n              ${void 0!==a.socialProofLogos?`<div class="social-proof-logos">\n                <div class="social-proof-heading">${a.socialProofLogos.socialProofHeading}</div>\n                <div class="social-proof-images">\n                  ${a.socialProofLogos.socialProofImages.length>0?a.socialProofLogos.socialProofImages.map(((e,t)=>`<img src="${e.url}" alt="${e.imgAlt}">`)).join("")+a.socialProofLogos.socialProofImages.map(((e,t)=>`<img src="${e.url}" class="repeat-img" alt="${e.imgAlt}">`)).join(""):""}\n                </div>\n              </div>`:""}\n            </section>`;m(r).then((()=>{document.querySelector(r).insertAdjacentHTML(t,n)}));let s=setInterval((()=>{document.querySelector(".SPZ-1005 .spz-form-wrap .the-form")&&document.querySelector(o)&&document.querySelectorAll(`${o} input`).length>0&&(clearInterval(s),document.querySelector(".SPZ-1005 .spz-form-wrap .the-form").appendChild(document.querySelector(o)),m(".SPZ-1005 .mkto-wrap + .disclaimer").then((()=>{document.querySelector(".SPZ-1005 .spz-form-wrap .the-form").insertAdjacentElement("afterend",document.querySelector(".SPZ-1005 .mkto-wrap + .disclaimer"))})),function(){for(var e=document.querySelectorAll(".SPZ-1005 .spz-form-section form.mktoForm .mktoFormRow"),t=0;t<e.length;t++){var o="field-"+(t+1);e[t].classList.add(o)}["#LblCountry:Country","#LblState:State","#LblNumber_of_Employees__c:Number of employees"].forEach((e=>{const[t,o]=e.split(":");m(`.SPZ-1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${t}`).then((e=>{e.innerHTML=(e.querySelector(".mktoAsterix")?.outerHTML||"")+o}))}));var r=document.querySelector(".SPZ-1005 form.mktoForm .field-6"),a=document.querySelector(".SPZ-1005 form.mktoForm .field-4");r.after(a);var n=document.querySelector(".SPZ-1005 form.mktoForm .field-5");document.querySelector(".SPZ-1005 form.mktoForm .field-7").after(n);var s=document.querySelector(".SPZ-1005 form.mktoForm .field-8");function l(){const e=document.querySelector(".SPZ-1005 form.mktoForm");function t(){const e=document.querySelector(".SPZ-1005 form.mktoForm .mktoFieldWrap .mktoField#State");e&&(e.addEventListener("focus",(function(){e.closest(".mktoFieldWrap").classList.add("active","typing"),c()})),e.addEventListener("blur",(function(){e.closest(".mktoFieldWrap").classList.remove("active","typing"),c()})),e.addEventListener("input",(function(){c()})),e.addEventListener("change",(function(){c()})))}e.addEventListener("focus",(function(e){const t=e.target;t.classList.contains("mktoField")&&(t.closest(".mktoFieldWrap").classList.add("active","typing"),c());var o=document.querySelector('.SPZ-1005 .spz-form-section form.mktoForm input[name="Email"]');if(""===o.value.trim()&&o.closest(".mktoFieldWrap").classList.remove("emailerror"),"Email"===t.getAttribute("name")&&!document.body.classList.contains("form-expand"))var r=setInterval((function(){null!==t.closest(".mktoFieldWrap")&&(clearInterval(r),null!==t.closest(".mktoFieldWrap").querySelector(".mktoError:not(.customError)")&&"none"!=t.closest(".mktoFieldWrap").querySelector(".mktoError:not(.customError)").style.display&&(t.closest(".mktoFieldWrap").classList.add("emailerror"),i()))}))}),!0),e.addEventListener("keyup",(function(e){if(!document.body.classList.contains("form-expand")){const t=e.target,o=t.getAttribute("name");if("Email"===o){const e=t.value.trim();""!=e&&/^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/.test(e)?t.closest(".mktoFieldWrap").classList.remove("emailerror"):t.closest(".mktoFieldWrap").classList.add("emailerror")}const r=document.querySelector('input[name="FirstName"]').value.trim(),a=document.querySelector('input[name="LastName"]').value.trim(),n=document.querySelector('input[name="Email"]').value.trim(),i=document.querySelector('input[name="Company"]').value.trim(),s=/^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;["FirstName","LastName","Email","Company"].includes(o)&&r&&a&&i&&s.test(n)&&document.body.classList.add("form-expand")}}),!0),e.addEventListener("blur",(function(e){const t=e.target;if(t.classList.contains("mktoField")&&(t.closest(".mktoFieldWrap").classList.remove("active","typing"),c()),!document.body.classList.contains("form-expand")){const t=e.target,o=t.getAttribute("name");if("Email"===o){const e=t.value.trim();""!=e&&/^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/.test(e)?t.closest(".mktoFieldWrap").classList.remove("emailerror"):(t.closest(".mktoFieldWrap").classList.add("emailerror"),i())}const r=document.querySelector('input[name="FirstName"]').value.trim(),a=document.querySelector('input[name="LastName"]').value.trim(),n=document.querySelector('input[name="Email"]').value.trim(),s=document.querySelector('input[name="Company"]').value.trim(),l=/^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;["FirstName","LastName","Email","Company"].includes(o)&&r&&a&&s&&l.test(n)&&document.body.classList.add("form-expand")}}),!0),e.addEventListener("input",(function(e){e.target.classList.contains("mktoField")&&c()})),e.addEventListener("change",(function(e){e.target.classList.contains("mktoField")&&c()}));const o=new MutationObserver((()=>{t()})),r=document.querySelector(".SPZ-1005 form.mktoForm");r&&o.observe(r,{childList:!0,subtree:!0})}function c(){const e=document.querySelectorAll(".SPZ-1005 form.mktoForm .mktoField"),t=setInterval((()=>{e.forEach((e=>{const t=e.closest(".mktoFieldWrap");if(t){const o=t.querySelector(".mktoError:not(.customError)");o&&"none"!==o.style.display?t.classList.add("error"):t.classList.remove("error"),e.value&&""!==e.value.trim()?t.classList.add("filled"):t.classList.remove("filled")}}))}),200);setTimeout((()=>{clearInterval(t)}),1e3)}document.querySelector(".SPZ-1005 form.mktoForm .field-10").after(s),m(".SPZ-1005 form.mktoForm .disclaimer").then((e=>{var t=document.querySelector(".SPZ-1005 form.mktoForm .mktoCaptchaDisclaimer");const o=document.querySelector(".SPZ-1005 form.mktoForm .disclaimer");var r=document.querySelector(".SPZ-1005 form.mktoForm .mktoButtonRow");r.before(t),r.after(o)})),document.querySelector(".SPZ-1005 form.mktoForm .field-11 .mktoField").value="Get live demo",m(".SPZ-1005 .spz-form-section form.mktoForm .mktoFieldWrap select#Country").then((e=>{setTimeout((()=>{document.querySelectorAll(".SPZ-1005 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField").forEach((function(e){e&&e.value&&""!=e.value&&e.closest(".mktoFieldWrap").classList.add("filled")}))}),1e3)})),l(),document.querySelector("select#Country").addEventListener("change",(()=>{const e=document.querySelector(".SPZ-1005 .spz-form-section form.mktoForm .mktoFormRow.field-10"),t=(document.querySelector(".SPZ-1005 .spz-form-section form.mktoForm .mktoFormRow.field-31"),document.querySelector(".SPZ-1005 .spz-form-section form.mktoForm .mktoFormRow.field-8"));document.querySelector("select#State")?(document.querySelector("label#LblState").textContent="State",e.classList.remove("hidden"),t.classList.remove("spz-half")):(e.classList.add("hidden"),t.classList.add("spz-half"))})),MktoForms2.whenReady((function(e){e.onSuccess((function(e,t){document.body.classList.add("form-submit")}))}))}())}))}let p=setInterval((()=>{0==document.querySelectorAll(".spz-hero").length&&"/demo"===window.location.pathname?(a(u,c,d,l,f),t("SPZ-1005","SPZ_1005_truecontrol"),o("SPZ-1005","SPZ_1005_variant"),n()):-1==window.location.pathname.indexOf("/demo")&&document.querySelectorAll(".spz-hero").length>0&&document.querySelectorAll(".spz-hero").forEach((e=>{e.remove()}))}),1e3);setTimeout((function(){clearInterval(p)}),1e4)}}))}function t(e,t){["HiddenFieldName","HiddenFieldValue"].forEach(((o,n)=>{var i=a(o)?.split(",").filter((o=>o!==(n?t:e))).join(",");r(o,i||"",1)}))}function o(e,t){var o=a("HiddenFieldNameDemo"),i=a("HiddenFieldValueDemo");o?!o||o.includes(e)||i.includes(t)||(r("HiddenFieldNameDemo",o+","+e,1),r("HiddenFieldValueDemo",i+","+t,1)):(r("HiddenFieldNameDemo",e,1),r("HiddenFieldValueDemo",t,1)),n()}function r(e,t,o){var r="";if(o){var a=new Date;a.setTime(a.getTime()+24*o*60*60*1e3),r="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+r+"; path=/; domain=sailpoint.com;"}function a(e){for(var t=e+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var a=o[r];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null}function n(){var e=setInterval((function(){var t=document.querySelector('form.mktoForm#mktoForm_1018 input[name="intellimize1"]');if(t){clearInterval(e);var o=a("HiddenFieldValueDemo");""==t.value?t.value=o:t.value.includes(o)||(t.value=t.value+","+o)}}));setTimeout((function(){clearInterval(e)}),15e3)}function i(){const e=document.querySelector('.SPZ-1005 .spz-form-section form.mktoForm input[name="Email"]'),t=/^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;e&&(""!==e.value.trim()&&t.test(e.value.trim())||e.parentElement.querySelector(".customError")||0==e.closest(".mktoFieldWrap").querySelectorAll(".customError").length&&e.insertAdjacentHTML("afterend",'<div class="mktoError_1 customError"><div class="mktoErrorMsg">Valid email required.</div></div>'))}var s;document.addEventListener("click",(function(e){if(e.target.closest(".mktoForm .mktoButton")){const r=document.querySelectorAll(".SPZ-1005 form.mktoForm .mktoField"),a=setInterval((()=>{r.forEach((e=>{const t=e.closest(".mktoFieldWrap");if(t){const o=t.querySelector(".mktoError:not(.customError)");o&&"none"!==o.style.display?t.classList.add("error"):t.classList.remove("error"),e.value&&""!==e.value.trim()&&"checkbox"!==e.type?t.classList.add("filled"):t.classList.remove("filled")}}))}),200);if(setTimeout((()=>{clearInterval(a)}),1e3),!document.body.classList.contains("form-expand")){const e=document.querySelector('input[name="Email"]'),t=e.getAttribute("name");if("Email"===t){const t=e.value.trim();""!=t&&/^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/.test(t)?e.closest(".mktoFieldWrap").classList.remove("emailerror"):(e.closest(".mktoFieldWrap").classList.add("emailerror"),i())}const o=document.querySelector('input[name="FirstName"]').value.trim(),r=document.querySelector('input[name="LastName"]').value.trim(),a=document.querySelector('input[name="Email"]').value.trim(),n=document.querySelector('input[name="Company"]').value.trim(),s=/^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;["FirstName","LastName","Email","Company"].includes(t)&&o&&r&&n&&s.test(a)&&document.body.classList.add("form-expand")}var t=(new Date).toLocaleString("en-US",{timeZone:"America/New_York"}),o=e.target.closest(".mktoForm").querySelector('input[name="intellimize2"]');o&&(o.value=t)}})),history.pushState=(s=history.pushState,function(){var e=s.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),e}),history.replaceState=function(e){return function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t}}(history.replaceState),window.addEventListener("popstate",(function(){window.dispatchEvent(new Event("locationchange"))}));var l=location.href;function c(t){let o="";"/demo"===window.location.pathname&&(o=window.location.href),!function(e,t,o){e=e.includes("#")?e.slice(0,e.indexOf("#")):e,t=t.includes("#")?t.slice(0,t.indexOf("#")):t,o||(e=e.includes("?")?e.slice(0,e.indexOf("?")):e);return e===t||e===t+"/"}(t,o,!0)?setTimeout((()=>{document.querySelector(".SPZ-1005")&&document.body.classList.remove("SPZ-1005"),document.querySelector(".form-submit")&&document.body.classList.remove("form-submit")}),1e3):e()}function m(e){return new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));const o=new MutationObserver((function(r){document.querySelector(e)&&(t(document.querySelector(e)),o.disconnect())}));o.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}c(l),window.addEventListener("locationchange",(function(){c(l=location.href)}))}();