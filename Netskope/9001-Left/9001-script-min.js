function copyModify(){waitForElm(".landing-page__content-container .landing-page__content ul li").then((function(){0==document.querySelectorAll(".landing-page__content-container .landing-page__content .content_3").length&&(document.querySelector(".landing-page__content-container .landing-page__title").innerHTML="Protect and accelerate<br>everything to everywhere",document.querySelector(".landing-page__content-container .landing-page__content").innerHTML='<p class="content_1">Get in touch with a Netskope representative to see a demo or simply learn more about our products.</p><ul><li><span>The Power of One </span>- Reduce cost and complexity through one platform, one client, one gateway, and one private security cloud.</li><li><span>Ultimate visibility & protection </span>- Decode cloud and SaaS user activity with AI & Zero Trust Engine to stop data loss and threats.</li><li><span>A phenomenal user experience </span>- Accelerate your enterprise on our private security cloud & manage the experience end-to-end.</li></ul><p class="content_2">To contact us by phone, please call: USA: +1 (800) 979-6988</p><p class="content_3">Requesting support? Contact us <a href="https://www.netskope.com/netskope-technical-support" target="_blank">here</a></p>',document.querySelector("#components__content").insertAdjacentHTML("beforeend",'<div class="spz-trusted-section"><div class="section-container"><div class="section-title"><p>We partner with leaders across the security industry</p></div><div class="section-content"><picture>\n        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Desktop.svg">\n        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Tablet.svg">\n        <img src="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Mobile.svg" alt="Trusted Partners">\n        </picture></div></div></div><div class="spz-footer"><div class="footer-container"><div class="footer-badges"><picture>\n        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-desktop.png">\n        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-tablet.png">\n        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-mobile.png" alt="Badges">\n        </picture></div><div class="footer-links"><div class="phone"><div class="phone-text">To contact us by phone, please call:</div><div class="mobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1706077616/netskope/9001/Call-icon.svg" alt="phone"> USA: +1 (800) 979-6988</div></div><div class="privacy-policy"><div class="p-anchor"><a href="https://www.netskope.com/privacy-policy">Privacy Policy</a></div><div class="copyright"> © 2024, All rights reserved.</div></div></div></div></div>'))}))}function rearrangeFields(){document.querySelectorAll(".netskope-component--request-demo-form form.mktoForm .mktoFormRow").forEach((function(e){const t=e.querySelector(".mktoField");t&&"hidden"==t.getAttribute("type")?e.classList.add("hideField"):e.querySelectorAll(".mktoFieldDescriptor.mktoFormCol").forEach((function(e){e.classList.add(e.querySelector(".mktoField").getAttribute("id")+"-row"),document.querySelector(".mktoForm").insertAdjacentElement("beforeend",e),e.querySelector(".mktoField").setAttribute("placeholder","")}))}))}function formModify(){rearrangeFields();var e=document.querySelector(".landing-page__form-container .landing-page__form .landing-page__form-content .mktoForm");e&&0==document.querySelectorAll(".form_title").length&&(e.insertAdjacentHTML("beforebegin",'<div class="form_title">Contact us</div>'),document.querySelector(".landing-page__form-container").insertAdjacentHTML("afterbegin",'<div class="tablet-title"><h1 class="landing-page__title">Protect and accelerate<br>everything to everywhere</h1></div>'));var t=document.querySelector(".landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton");waitForElm(".mktoFormRow.hideField").then((function(){let e=setInterval((()=>{t.textContent="Submit",document.querySelector("#LblEmail").textContent="Business Email",document.querySelector("#LblCompany").textContent="Company",document.querySelector("#LblTitle").textContent="Job Title",document.querySelector("#LblPhone").textContent="Phone",document.querySelector("#LblCountry").textContent="Country",document.querySelector("#Country option:first-child").textContent="",document.querySelector("#LblFirstName").textContent="First Name",document.querySelector("#LblLastName").textContent="Last Name",document.querySelector("#LblContact_Us_Form_Entry__c").textContent="Give us a brief description why you are contacting us.",document.querySelector(".mktoButton").setAttribute("tabindex","14")}),10);setTimeout((()=>{clearInterval(e)}),100),MktoForms2.whenReady((function(e){document.querySelector(".LastName-row").insertAdjacentElement("afterend",document.querySelector(".Email-row")),document.querySelector(".Email-row").insertAdjacentElement("afterend",document.querySelector(".Phone-row")),document.querySelector(".Phone-row").insertAdjacentElement("afterend",document.querySelector(".Company-row")),document.querySelector(".mktoPlaceholderConsent_to_Processing__c").parentElement.classList.add("consent-check-spz"),setHiddenFields(),document.querySelectorAll("#Country option").forEach((function(e){e.textContent.includes("-------")&&(e.setAttribute("disabled","disabled"),e.setAttribute("style","color: #ccc"))}))})),waitForElm("body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").then((function(){0==document.querySelectorAll(".frm-commt").length&&document.querySelector("body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").insertAdjacentHTML("beforebegin",'<div class="frm-commt">\n                    <div class="commt-text">Comment</div>\n                    </div>'),document.querySelector("body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .frm-commt .commt-text").addEventListener("click",(function(){this.parentElement.classList.toggle("close-cmnt"),document.querySelectorAll("body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").forEach((function(e){e.classList.toggle("visible")}))}))}))})),document.getElementById("FirstName").setAttribute("tabindex","1"),document.getElementById("LastName").setAttribute("tabindex","2"),document.getElementById("Email").setAttribute("tabindex","3"),document.getElementById("Phone").setAttribute("tabindex","4"),document.getElementById("Company").setAttribute("tabindex","5"),document.getElementById("Title").setAttribute("tabindex","6"),document.getElementById("Country").setAttribute("tabindex","7"),document.getElementById("Contact_Us_Form_Entry__c").setAttribute("tabindex","10");var o="body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField";document.addEventListener("click",(function(e){e.target.matches(o)&&e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active","typing")}),!0),document.addEventListener("focus",(function(e){e.target.matches(o)&&e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active","typing")}),!0);for(s_event of["blur","focusout","keyup"])document.addEventListener(s_event,(function(e){e.target.matches(o)&&(null==e.target.value||""==e.target.value?(e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("active"),e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("filled")):(e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active"),e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("filled")))}));document.addEventListener("focusout",(function(e){document.querySelectorAll("body form.mktoForm .mktoFormCol .mktoFieldWrap.typing").forEach((function(e){e.classList.remove("typing")}))}),!0),document.querySelector("#Country").addEventListener("change",(function(){waitForElm("#LblPostalCode").then((function(){document.querySelector("#LblPostalCode").textContent="Zip/Postal Code",document.getElementById("PostalCode").setAttribute("tabindex","9"),document.getElementById("PostalCode").setAttribute("placeholder",""),document.getElementById("PostalCode").closest(".mktoFormCol").classList.add("row-PostalCode"),rearrangeFields()})),document.querySelector(".consent-check-spz .mktoFormCol")&&document.querySelector(".consent-check-spz .mktoFormCol").classList.add("consent-check-oo-spz")}))}function setHiddenFields(){document.querySelector('.mktoFormRow [name="utm_location__c"]')?document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute("value","#9001_spz_variant"):0==document.querySelectorAll('#mktoForm_1169 .mktoFormRow [name="utm_location__c"]').length&&document.querySelector("#mktoForm_1169").insertAdjacentHTML("beforeend",'<input type="hidden" name="utm_location__c" value="#9001_spz_variant">')}function waitForElm(e){return new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));const o=new MutationObserver((function(n){document.querySelector(e)&&(t(document.querySelector(e)),o.disconnect())}));o.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}document.body.classList.add("spz-9001"),document.querySelector("head").insertAdjacentHTML("afterbegin",'<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1709197595/netskope/9001/Checkbox_checked.svg" as="image">'),waitForElm("body form.mktoForm .mktoFormCol .mktoFieldWrap").then((function(){formModify()})),copyModify();