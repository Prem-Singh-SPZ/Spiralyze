function copyModify(){waitForElm(".landing-page__content-container .landing-page__content ul li").then((function(){document.querySelector(".landing-page__content-container .landing-page__title").textContent="Secure your entire multi-cloud environment",document.querySelector(".landing-page__content-container .landing-page__content").innerHTML="<ul><li><span>Network. </span>Deliver fast, secure network connectivity. One cloud-based solution.</li><li><span>Visibility.</span> Get full visibility into your multi-cloud network. Web, SaaS, cloud, and more.</li><li><span>Security.</span> Monitor & verify network activities 24/7. Only allow access to required tasks.</li></ul>",document.querySelector("#components__content").insertAdjacentHTML("beforeend",'<div class="spz-trusted-section"><div class="section-container"><div class="section-title"><p>We partner with leaders across the security industry</p></div><div class="section-content"><picture>\n<source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Desktop.svg">\n<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Tablet.svg">\n<img src="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Mobile.svg" alt="Trusted Partners">\n</picture></div></div></div><div class="spz-footer"><div class="footer-container"><div class="footer-badges"><picture>\n<source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-desktop.png">\n<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-tablet.png">\n<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-mobile.png" alt="Badges">\n</picture></div><div class="footer-links"><div class="phone"><div class="phone-text">To contact us by phone, please call:</div><div class="mobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1706077616/netskope/9001/Call-icon.svg" alt="phone"> USA: +1 (800) 979-6988</div></div><div class="privacy-policy"><div class="p-anchor"><a href="https://www.netskope.com/privacy-policy">Privacy Policy</a></div><div class="copyright"> © 2024, All rights reserved.</div></div></div></div></div>')}))}function formModify(){document.querySelectorAll(".netskope-component--request-demo-form form.mktoForm .mktoFormRow").forEach((function(e){const t=e.querySelector(".mktoField");t&&"hidden"==t.getAttribute("type")?e.classList.add("hideField"):e.querySelectorAll(".mktoFieldDescriptor.mktoFormCol").forEach((function(e){e.classList.add(e.querySelector(".mktoField").getAttribute("id")+"-row"),document.querySelector(".mktoForm").insertAdjacentElement("beforeend",e),e.querySelector(".mktoField").setAttribute("placeholder","")}))}));var e=document.querySelector(".landing-page__form-container .landing-page__form .landing-page__form-content .mktoForm");e&&0==document.querySelectorAll(".form_title").length&&(e.insertAdjacentHTML("beforebegin",'<div class="form_title">Contact us</div>'),document.querySelector(".landing-page__form-container").insertAdjacentHTML("afterbegin",'<div class="tablet-title"><h1 class="landing-page__title">Secure your entire multi-cloud environment</h1></div>'));var t=document.querySelector(".landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton");waitForElm(".mktoFormRow.hideField").then((function(){let e=setInterval((()=>{t.textContent="Submit",document.querySelector("#LblPostalCode").textContent="Zip/Postal Code",document.querySelector("#LblEmail").textContent="Business Email",document.querySelector("#LblCompany").textContent="Company",document.querySelector("#LblTitle").textContent="Job Title",document.querySelector("#LblPhone").textContent="Phone",document.querySelector("#LblCountry").textContent="Country",document.querySelector("#Country option:first-child").textContent="",document.querySelector("#LblFirstName").textContent="First Name",document.querySelector("#LblLastName").textContent="Last Name",document.querySelector("#LblContact_Us_Form_Entry__c").textContent="Give us a brief description why you are contacting us.",document.querySelector(".mktoButton").setAttribute("tabindex","14")}),10);setTimeout((()=>{clearInterval(e)}),100),waitForElm("body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").then((function(){0==document.querySelectorAll(".frm-commt").length&&document.querySelector("body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").insertAdjacentHTML("beforebegin",'<div class="frm-commt">\n<div class="commt-text">Comment</div>\n</div>'),document.querySelector("body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .frm-commt").addEventListener("click",(function(){this.classList.toggle("close-cmnt"),document.querySelectorAll("body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").forEach((function(e){e.classList.toggle("visible")}))}))}))})),document.getElementById("FirstName").setAttribute("tabindex","1"),document.getElementById("LastName").setAttribute("tabindex","2"),document.getElementById("Email").setAttribute("tabindex","3"),document.getElementById("Phone").setAttribute("tabindex","4"),document.getElementById("Company").setAttribute("tabindex","5"),document.getElementById("Title").setAttribute("tabindex","6"),document.getElementById("Country").setAttribute("tabindex","7"),document.getElementById("PostalCode").setAttribute("tabindex","9"),document.getElementById("Contact_Us_Form_Entry__c").setAttribute("tabindex","10");var o="body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField";document.addEventListener("focus",(function(e){e.target.matches(o)&&e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active","typing")}),!0);for(s_event of["blur","focusout","keyup"])document.addEventListener(s_event,(function(e){e.target.matches(o)&&(null==e.target.value||""==e.target.value?(e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("active"),e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("filled")):(e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active"),e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("filled")))}));document.addEventListener("focusout",(function(e){document.querySelectorAll("body form.mktoForm .mktoFormCol .mktoFieldWrap.typing").forEach((function(e){e.classList.remove("typing")}))}),!0)}function waitForElm(e){return new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));const o=new MutationObserver((function(n){document.querySelector(e)&&(t(document.querySelector(e)),o.disconnect())}));o.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}document.body.classList.add("spz-9001"),document.querySelector("head").insertAdjacentHTML("afterbegin",'<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image">'),waitForElm("body form.mktoForm .mktoFormCol .mktoFieldWrap").then((function(){formModify()})),copyModify();