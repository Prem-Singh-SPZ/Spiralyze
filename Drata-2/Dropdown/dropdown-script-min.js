!function(){function e(){const e=document.createElement("script");e.src="//js.hsforms.net/forms/embed/v2.js",e.type="text/javascript",e.setAttribute("charset","utf-8"),document.head.appendChild(e),document.body.classList.add("spz_custom_dropdown"),e.onload=function(){!function(){const e=document.createElement("script");e.innerHTML='hbspt.forms.create({region: "na1", portalId: "7817592", formId: "a6043509-2a53-4a93-8c05-b64cb53299e8", cssClass: "hs-form-spz", css: "", submitText: "Schedule Demo", onFormReady: ($form) => { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });',0==document.querySelectorAll(".mui-12ive4l-Form-formContainer .hbspt-form").length&&(document.querySelector(".mui-12ive4l-Form-formContainer").appendChild(e),n(".spz_custom_dropdown .hs-form-spz .hs-form-checkbox").then((function(e){let t=0;document.querySelectorAll(".hs-form-checkbox").forEach((function(e,s){e.querySelector(".hs-input").addEventListener("click",(function(){var s=e.querySelector("span").textContent;if(e.querySelector('input[type="checkbox"]').checked){var o='<span title="'+s+'">'+s+"</span>";0==document.querySelectorAll('span[title="'+s+'"]').length&&(document.querySelector(".spz-btn .value-container").insertAdjacentHTML("beforeend",o),t++)}else document.querySelector('span[title="'+s+'"]').remove(),t--;1==t?(document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.add("single-value"),document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("multiple-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("multiple-value")):0==t?(document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("single-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("single-value"),document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("multiple-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("multiple-value")):(document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.add("multiple-value"),document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("single-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("single-value"))}))}))})))}()},n("form.hs-form-private.hs-form-spz .hs-form-field").then((function(e){document.querySelectorAll(".hs-form-field:not(.smart-field)").forEach((function(e){e.querySelector("label").classList.add("hs-label-spz")})),document.querySelectorAll(".hs-input").forEach((function(e){e.addEventListener("focus",(function(){e.closest(".field").classList.add("field-focus")})),e.addEventListener("blur",(function(){e.closest(".field").classList.remove("field-focus"),l()})),e.addEventListener("keypress",(()=>{l(),c()})),e.addEventListener("keydown",(()=>{l(),c()})),e.addEventListener("keyup",(()=>{l(),c()}))})),document.head.insertAdjacentHTML("beforeend",'<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1707981595/drata/Access-Page-Custom-Dropdown/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1708060676/drata/Access-Page-Custom-Dropdown/Arrow-active.svg" as="image">'),0==document.querySelectorAll(".spz-btn.custom-input-btn").length&&document.querySelector("form.hs-form-private .hs-fieldtype-checkbox.field.hs-form-field legend.hs-field-desc").insertAdjacentHTML("afterend",' <button class="spz-btn custom-input-btn" type="button"><span class="value-container"></span><span class="label">Select which framework(s) you\'d like access to:</span></button>');var t=setInterval((function(){"undefined"!=typeof jQuery&&(clearInterval(t),jQuery("body").click((function(e){jQuery(e.target).hasClass("hs_capability_types")||0!=jQuery(e.target).closest(".hs-fieldtype-checkbox.field.hs-form-field").length||jQuery(".hs-fieldtype-checkbox.field.hs-form-field").hasClass("field-focus")&&(jQuery(".hs-fieldtype-checkbox.field.hs-form-field").removeClass("field-focus"),c())})))}))}))}var t;window.addEventListener("click",(function(e){e.target.classList.contains("spz-btn")&&(e.target.parentElement.classList.toggle("field-focus"),c()),e.target.closest("ul")&&e.target.closest("ul").classList.contains("hs-error-msgs")&&l()})),history.pushState=(t=history.pushState,function(){var e=t.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),e}),history.replaceState=function(e){return function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t}}(history.replaceState),window.addEventListener("popstate",(function(){window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){o(s=location.href)}));var s=location.href;function o(t){!function(e,t,s){e=e.includes("#")?e.slice(0,e.indexOf("#")):e,t=t.includes("#")?t.slice(0,t.indexOf("#")):t,s&&(e=e.includes("?")?e.slice(0,e.indexOf("?")):e);return e===t||e===t+"/"}(t,"https://drata.com/access",!0)?setTimeout((()=>{document.body.classList.remove("spz_custom_dropdown")}),500):n(".mui-12ive4l-Form-formContainer").then((function(t){e()}))}function c(){document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.contains("field-focus")||(document.querySelector(".spz-btn > .value-container > span")?document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.add("input-filled"):document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.remove("input-filled")),null!=document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .error")?document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.add("field-error"):document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.remove("field-error")}function n(e){return new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));const s=new MutationObserver((function(o){document.querySelector(e)&&(t(document.querySelector(e)),s.disconnect())}));s.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}function l(){let e=setInterval((()=>{document.querySelectorAll(".hs-input").forEach((function(e){null!=e.closest(".field").querySelector(".error")?e.closest(".field").classList.add("field-error"):e.closest(".field").classList.remove("field-error")})),document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach((function(e){e&&e.value?e.closest(".field").classList.add("input-filled"):e.closest(".field").classList.remove("input-filled")}))}));setTimeout((()=>{clearInterval(e)}),1e3)}o(s)}();