!function(){var e=setInterval((function(){var o,l=document.querySelector("body");if(!l.classList.contains("spz_custom_dropdown")){clearInterval(e);const c=document.createElement("script");c.src="//js.hsforms.net/forms/embed/v2.js",c.type="text/javascript",c.setAttribute("charset","utf-8"),document.head.appendChild(c),l.classList.add("spz_custom_dropdown"),(o="form.hs-form-private.hs-form-spz .hs-form-field",new Promise((function(e){if(document.querySelector(o))return e(document.querySelector(o));const t=new MutationObserver((function(s){document.querySelector(o)&&(e(document.querySelector(o)),t.disconnect())}));t.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))).then((function(e){document.querySelectorAll(".hs-form-field:not(.smart-field)").forEach((function(e){e.querySelector("label").classList.add("hs-label-spz")})),document.querySelectorAll(".hs-input").forEach((function(e){e.addEventListener("focus",(function(){e.closest(".field").classList.add("field-focus")})),e.addEventListener("blur",(function(){e.closest(".field").classList.remove("field-focus"),s()})),e.addEventListener("keypress",(()=>{s(),t()})),e.addEventListener("keydown",(()=>{s(),t()})),e.addEventListener("keyup",(()=>{s(),t()}))})),function(){let e=0;document.querySelectorAll(".hs-form-checkbox").forEach((function(t,s){t.querySelector(".hs-input").addEventListener("click",(function(){var s=t.querySelector("span").textContent;if(t.querySelector('input[type="checkbox"]').checked){var o='<span title="'+s+'">'+s+"</span>";document.querySelector(".spz-btn .value-container").insertAdjacentHTML("beforeend",o),e++}else document.querySelector('span[title="'+s+'"]').remove(),e--;1==e?(document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.add("single-value"),document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("multiple-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("multiple-value")):0==e?(document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("single-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("single-value"),document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("multiple-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("multiple-value")):(document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.add("multiple-value"),document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.contains("single-value")&&document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .spz-btn").classList.remove("single-value"))}))}))}(),document.head.insertAdjacentHTML("beforeend",'<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1707981595/drata/Access-Page-Custom-Dropdown/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1708060676/drata/Access-Page-Custom-Dropdown/Arrow-active.svg" as="image">'),document.querySelector("form.hs-form-private .hs-fieldtype-checkbox.field.hs-form-field legend.hs-field-desc").insertAdjacentHTML("afterend",' <button class="spz-btn custom-input-btn" type="button"><span class="value-container"></span><span class="label">Select which framework(s) you\'d like access to:</span></button>'),window.addEventListener("click",(function(e){e.target.classList.contains("spz-btn")&&(e.target.parentElement.classList.toggle("field-focus"),t()),e.target.classList.contains("hs-button")&&s(),e.target.closest("ul")&&e.target.closest("ul").classList.contains("hs-error-msgs")&&s()}));var o=setInterval((function(){"undefined"!=typeof jQuery&&(clearInterval(o),jQuery("body").click((function(e){jQuery(e.target).hasClass("hs_capability_types")||0!=jQuery(e.target).closest(".hs-fieldtype-checkbox.field.hs-form-field").length||jQuery(".hs-fieldtype-checkbox.field.hs-form-field").hasClass("field-focus")&&(jQuery(".hs-fieldtype-checkbox.field.hs-form-field").removeClass("field-focus"),t())})))}))})),c.onload=function(){!function(){const e=document.createElement("script");e.innerHTML='hbspt.forms.create({region: "na1", portalId: "7817592", formId: "a6043509-2a53-4a93-8c05-b64cb53299e8", cssClass: "hs-form-spz", css: "", submitText: "Schedule Demo", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });',document.querySelector(".mui-12ive4l-Form-formContainer")&&document.querySelector(".mui-12ive4l-Form-formContainer").appendChild(e)}()}}}));function t(){document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.contains("field-focus")||(document.querySelector(".spz-btn > .value-container > span")?document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.add("input-filled"):document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.remove("input-filled")),null!=document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field .error")?document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.add("field-error"):document.querySelector(".hs-fieldtype-checkbox.field.hs-form-field").classList.remove("field-error")}function s(){let e=setInterval((()=>{document.querySelectorAll(".hs-input").forEach((function(e){null!=e.closest(".field").querySelector(".error")?e.closest(".field").classList.add("field-error"):e.closest(".field").classList.remove("field-error")})),document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach((function(e){e&&e.value?e.closest(".field").classList.add("input-filled"):e.closest(".field").classList.remove("input-filled")}))}));setTimeout((()=>{clearInterval(e)}),1e3)}}();