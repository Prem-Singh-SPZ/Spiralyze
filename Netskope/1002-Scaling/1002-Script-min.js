function formModify(){document.querySelectorAll(".netskope-component--request-demo-form form.mktoForm .mktoFormRow").forEach((function(e){const t=e.querySelector(".mktoField");t&&"hidden"==t.getAttribute("type")?e.classList.add("hideField"):e.querySelectorAll(".mktoFieldDescriptor.mktoFormCol").forEach((function(e){e.classList.add(e.querySelector(".mktoField").getAttribute("id")+"-row"),document.querySelector(".mktoForm").insertAdjacentElement("beforeend",e),e.querySelector(".mktoField").setAttribute("placeholder","")}))}));var e=document.querySelector(".landing-page__form-container .landing-page__form .landing-page__form-content .mktoForm");e&&0==document.querySelectorAll(".form_title").length&&e.insertAdjacentHTML("beforebegin",'<div class="ns-logo"><a class="logo" href="https://www.netskope.com"><picture>\n        <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1710134238/netskope/1002-Scaling/NS_Logo.svg">\n        <img src="//res.cloudinary.com/spiralyze/image/upload/v1710134422/netskope/1002-Scaling/NS_logo_Mobile.svg" alt="Netskope logo" class="">\n      </picture></a></div><div class="form_title">Request a Demo</div>');var t=document.querySelector(".landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton");waitForElm(".mktoFormRow.hideField").then((function(){let e=setInterval((()=>{t.textContent="Submit",document.querySelector("#numEmployeesRange option:first-child").textContent="",document.querySelector("#LblEmail").textContent="Business Email",document.querySelector("#LblCompany").textContent="Company",document.querySelector("#LblTitle").textContent="Job Title",document.querySelector("#LblnumEmployeesRange").textContent="Number of Employees",document.querySelector("#LblPhone").textContent="Phone",document.querySelector("#Country option:first-child").textContent="",document.querySelector("#LblCountry").textContent="Country",document.querySelector("#LblFirstName").textContent="First Name",document.querySelector("#LblLastName").textContent="Last Name",document.querySelector(".mktoButton").setAttribute("tabindex","14"),setHiddenFields()}),10);setTimeout((()=>{clearInterval(e)}),100),document.querySelector('.mktoFormCol[class*="mktoCheckbox_"]').classList.add("spz-hidden"),document.querySelector(".mktoFormCol.Country-row").classList.add("spz-hidden","select-wrap"),document.querySelector(".mktoFormCol.Phone-row").classList.add("spz-hidden"),document.querySelector(".mktoFormCol.numEmployeesRange-row").classList.add("spz-hidden","select-wrap"),document.querySelector(".mktoFormCol.Title-row").classList.add("spz-hidden"),document.querySelector(".LastName-row").insertAdjacentElement("afterend",document.querySelector(".Email-row")),document.querySelector(".customInput1 .hintText").textContent="Topics of Interest (Select all that apply)",document.querySelectorAll("#Country option").forEach((function(e){e.textContent.includes("-------")&&(e.setAttribute("disabled","disabled"),e.setAttribute("style","color: #ccc"))})),waitForElm("body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").then((function(){0==document.querySelectorAll(".frm-commt").length&&document.querySelector("body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").insertAdjacentHTML("beforebegin",'<div class="frm-commt">\n                    <div class="commt-text">Comment</div>\n                    </div>'),document.querySelector("body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .frm-commt").addEventListener("click",(function(){this.classList.toggle("close-cmnt"),document.querySelectorAll("body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap").forEach((function(e){e.classList.toggle("visible")}))}))}))})),document.getElementById("FirstName").setAttribute("tabindex","2"),document.getElementById("LastName").setAttribute("tabindex","3"),document.getElementById("Email").setAttribute("tabindex","4"),document.getElementById("Company").setAttribute("tabindex","5"),document.getElementById("Title").setAttribute("tabindex","6"),document.getElementById("numEmployeesRange").setAttribute("tabindex","7"),document.getElementById("Phone").setAttribute("tabindex","8"),document.getElementById("Country").setAttribute("tabindex","9");var o="body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select";document.addEventListener("focus",(function(e){e.target.matches(o)&&e.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active","typing"),checkValidFields(),checkState()}),!0),document.addEventListener("focusout",(function(e){document.querySelectorAll("body form.mktoForm .mktoFormCol .mktoFieldWrap.typing").forEach((function(e){e.classList.remove("typing")})),checkState()}),!0);for(s_event of["blur","keyup","change"])document.addEventListener(s_event,(function(e){e.target.matches(o)&&checkError(e.target)}))}function checkError(e){let t=setInterval((()=>{null==e.value||""==e.value?e.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("active","filled"):e.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active","filled"),checkValidFields()}),100);checkState(),setTimeout((()=>{clearInterval(t)}),1e3)}function setHiddenFields(){document.querySelector('.mktoFormRow [name="utm_location__c"]')&&document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute("value","#1002_spzaa_variant")}function checkValidFields(){document.querySelectorAll(".mktoFormCol:not(.spz-hidden) .mktoRequiredField.filled").length>=4&&(document.querySelectorAll(".spz-hidden").forEach((function(e){e.classList.remove("spz-hidden")})),document.querySelector(".netskope-component--request-demo-form").classList.add("spz-full-form"),setTimeout((()=>{adjustDropdownHeight()}),200),window.addEventListener("resize",(function(){adjustDropdownHeight()})))}function adjustDropdownHeight(){if(window.innerWidth>767&&window.innerHeight>601){let e=document.querySelector(".customInput1").getBoundingClientRect().top-window.innerHeight;document.querySelector(".mktoLogicalField.mktoCheckboxList ").style.maxHeight=Math.abs(e+60)+"px"}}function waitForElm(e){return new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));const o=new MutationObserver((function(r){document.querySelector(e)&&(t(document.querySelector(e)),o.disconnect())}));o.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}function checkState(){waitForElm("#PostalCode").then((function(){document.querySelector("#PostalCode").closest(".mktoFormRow").classList.add("row-PostalCode"),document.querySelector("#PostalCode").setAttribute("tabindex","12"),document.querySelector("#PostalCode").setAttribute("placeholder",""),document.querySelector("#LblPostalCode").textContent="Postal Code",document.querySelector(".mktoFormCol.Country-row.spz-hidden")&&document.querySelector("#PostalCode").closest(".mktoFormRow").classList.add("spz-hidden")})),waitForElm(".single_checkbox").then((function(){document.querySelector(".single_checkbox").closest(".mktoFormRow").classList.add("row-single_checkbox"),document.querySelector(".mktoFormCol.Country-row.spz-hidden")&&document.querySelector(".single_checkbox").closest(".mktoFormRow").classList.add("spz-hidden"),document.querySelector("#LblConsent_to_Processing__c .p11 a").setAttribute("tabindex","12")}))}document.body.classList.add("spz-1002"),document.querySelector("head").insertAdjacentHTML("afterbegin",'<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image">'),waitForElm("body form.mktoForm .mktoFormCol .mktoFieldWrap").then((function(){formModify()}));