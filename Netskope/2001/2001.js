document.body.classList.add("spz-2001");

document
  .querySelector("head")
  .insertAdjacentHTML(
    "afterbegin",
    `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image">`
  );

//Form internal code
waitForElm("body form.mktoForm .mktoFormCol .mktoFieldWrap").then(function () {
  formModify();
});

function formModify() {
  document.querySelector("button.mktoButton").addEventListener("click", function (event) {
    setTimeout(function () {
      event.target.innerHTML = "Submit";
    }, 100);
  });

  const mktoFormRowElements = document.querySelectorAll(
    ".netskope-component--request-demo-form form.mktoForm .mktoFormRow"
  );
  mktoFormRowElements.forEach(function (element) {
    const mktoField = element.querySelector(".mktoField");

    if (mktoField && mktoField.getAttribute("type") == "hidden") {
      element.classList.add("hideField");
    } else {
      element.querySelectorAll(".mktoFieldDescriptor.mktoFormCol").forEach(function (elm) {
        elm.classList.add(elm.querySelector(".mktoField").getAttribute("id") + "-row");
        document.querySelector(".mktoForm").insertAdjacentElement("beforeend", elm);
      });
    }
  });

  //form title update
  var formDiv = document.querySelector(
    ".landing-page__form-container .landing-page__form .landing-page__form-content .mktoForm"
  );
  if (formDiv && document.querySelectorAll(".form_title").length == 0) {
    formDiv.insertAdjacentHTML("beforebegin", `<div class="ns-logo"><a class="logo" href="https://www.netskope.com"> <img src="https://www.netskope.com/wp-content/themes/netskope/images/logo-dark.svg" alt="Netskope logo" class="">  </a></div><div class="form_title">Get Started</div>`);
  }
  //insert content
  document
    .querySelector(
      "body.spz-2001 .get-started-form__container .landing-page__container-inner .landing-page__form-container .landing-page__form"
    )
    .insertAdjacentHTML(
      "afterend",
      `
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/1003/form_background_step_2_desktop.webp" alt="background" width="0" height="0" style="display:none" />
    <div class="content-wrapper">
      <div class="wrapper">
        <div class="title">
        Protect and accelerate<br />
        everything to everywhere
        </div>
        <div class="list">
          <div class="child">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1704885513/netskope/1003/check-logo.svg" alt="Check Icon" width="24" height="25"/>
            <div class="text"><strong>The Power of One </strong>- Reduce cost and complexity through one platform, one client, one gateway, and one private security cloud.</div>
          </div>
          <div class="child">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1704885513/netskope/1003/check-logo.svg" alt="Check Icon" width="24" height="25"/>
            <div class="text"><strong>Ultimate visibility & protection </strong>- Decode cloud and SaaS user activity with AI & Zero Trust Engine to stop data loss and threats.</div>
          </div>
          <div class="child">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1704885513/netskope/1003/check-logo.svg" alt="Check Icon" width="24" height="25"/>
            <div class="text"><strong>A phenomenal user experience </strong>- Accelerate your enterprise on our private security cloud & manage the experience end-to-end.</div>
          </div>
        </div>
        <div class="desc">
          We partner with leaders across the security industry
        </div>
        <picture>
          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/1003/Logos-mobile.png">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/1003/Logos-desktop.png" alt="Company Icons" width="536" height="32" class="icons">
        </picture>
      </div>
    </div>
    `
    );

  //form Cta update
  var textChng = document.querySelector(
    ".landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton"
  );

  textChng.addEventListener("click", function () {
    const txtInt = setInterval(() => {
      if (
        document
          .querySelector(
            ".landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton"
          )
          .textContent.includes("REQUEST")
      ) {
        textChng.textContent = "Submit";
        clearInterval(txtInt);
      }
    }, 20);

    setTimeout(function () {
      clearInterval(txtInt);
    }, 500);
  });

  waitForElm(".mktoFormRow.hideField").then(function () {
    let changeLabels = setInterval(() => {
      document.querySelector(".spz-2001 .hintText").innerHTML = "I&#8217;m interested in ... (Select all that apply.)";

      textChng.textContent = "Submit";
      // document.querySelector("#mOICustomField11 option:first-child").textContent = "";
      // document.querySelector("#LblmOICustomField11").textContent = "I would like to";
      document.querySelector("#numEmployeesRange option:first-child").textContent = "";
      document.querySelector("#LblnumEmployeesRange").textContent = "Number of Employees";

      document.querySelector("#Country option:first-child").textContent = "";
      document.querySelector("#LblCountry").textContent = "Country";
      document.querySelector("#LblFirstName").textContent = "First Name";
      document.querySelector("#LblLastName").textContent = "Last Name";
      if (
        !document
          .querySelectorAll(
            "body.spz-2001 .netskope-component--request-demo-form form.mktoForm#mktoForm_1767 .mktoFieldDescriptor.mktoFormCol select.mktoField"
          )[0]
          .parentElement.querySelector(".arrow")
      ) {
        document
          .querySelectorAll(
            "body.spz-2001 .netskope-component--request-demo-form form.mktoForm#mktoForm_1767 .mktoFieldDescriptor.mktoFormCol select.mktoField"
          )[0]
          .insertAdjacentHTML("afterend", `<div class="arrow"></div>`);
      }
      if (
        !document
          .querySelectorAll(
            "body.spz-2001 .netskope-component--request-demo-form form.mktoForm#mktoForm_1767 .mktoFieldDescriptor.mktoFormCol select.mktoField"
          )[1]
          .parentElement.querySelector(".arrow")
      ) {
        document
          .querySelectorAll(
            "body.spz-2001 .netskope-component--request-demo-form form.mktoForm#mktoForm_1767 .mktoFieldDescriptor.mktoFormCol select.mktoField"
          )[1]
          .insertAdjacentHTML("afterend", `<div class="arrow"></div>`);
      }
      // if (
      //   !document
      //     .querySelectorAll(
      //       "body.spz-2001 .netskope-component--request-demo-form form.mktoForm#mktoForm_1767 .mktoFieldDescriptor.mktoFormCol select.mktoField"
      //     )[2]
      //     .parentElement.querySelector(".arrow")
      // ) {
      //   document
      //     .querySelectorAll(
      //       "body.spz-2001 .netskope-component--request-demo-form form.mktoForm#mktoForm_1767 .mktoFieldDescriptor.mktoFormCol select.mktoField"
      //     )[2]
      //     .insertAdjacentHTML("afterend", `<div class="arrow"></div>`);
      // }

      document.querySelector(".mktoButton").setAttribute("tabindex", "14");
      setHiddenFields();
    }, 10);
    setTimeout(() => {
      clearInterval(changeLabels);
    }, 100);
    // document.querySelector(".mktoFormCol.Contact_Us_Form_Entry__c-row").classList.add("spz-hidden");
    document.querySelector(".mktoFormCol.mktoFormCol[class*=mktoCheckbox_]").classList.add("spz-hidden");
    document.querySelector(".mktoFormCol.Country-row").classList.add("spz-hidden");
    document.querySelector(".mktoFormCol.Phone-row").classList.add("spz-hidden");
    document.querySelector(".mktoFormCol.numEmployeesRange-row").classList.add("spz-hidden");
    document.querySelector(".mktoFormCol.Title-row").classList.add("spz-hidden");

    document.querySelector(".LastName-row").insertAdjacentElement("afterend", document.querySelector(".Email-row"));

    waitForElm(
      "body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap"
    ).then(function () {
      if (document.querySelectorAll(".frm-commt").length == 0) {
        document
          .querySelector(
            "body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap"
          )
          .insertAdjacentHTML(
            "beforebegin",
            `<div class="frm-commt">
                    <div class="commt-text">Comment</div>
                    </div>`
          );
      }
      document
        .querySelector("body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .frm-commt")
        .addEventListener("click", function () {
          this.classList.toggle("close-cmnt");
          var mktoFieldWrapList = document.querySelectorAll(
            "body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap"
          );
          mktoFieldWrapList.forEach(function (element) {
            element.classList.toggle("visible");
          });
        });
    });
  });

  // document.getElementById("mOICustomField11").setAttribute("tabindex", "1");
  document.getElementById("FirstName").setAttribute("tabindex", "2");
  document.getElementById("LastName").setAttribute("tabindex", "3");
  document.getElementById("Email").setAttribute("tabindex", "4");
  document.getElementById("Company").setAttribute("tabindex", "5");
  document.getElementById("Title").setAttribute("tabindex", "6");
  document.getElementById("numEmployeesRange").setAttribute("tabindex", "7");
  document.getElementById("Phone").setAttribute("tabindex", "8");
  document.getElementById("Country").setAttribute("tabindex", "9");

  // CODE FOR 2001
  document.getElementById("LblFirstName").classList.add("labelUP");
  document.getElementById("LblLastName").classList.add("labelUP");

  document.getElementById("LblEmail").classList.add("labelUP");
  document.getElementById("LblEmail").textContent = "Business Email";

  document.getElementById("LblCompany").classList.add("labelUP");
  document.getElementById("LblCompany").textContent = "Company";

  document.getElementById("LblTitle").classList.add("labelUP");
  document.getElementById("LblTitle").textContent = "Job Title";

  document.getElementById("LblnumEmployeesRange").classList.add("labelUP");

  document.getElementById("LblPhone").classList.add("labelUP");
  document.getElementById("LblPhone").textContent = "Phone";

  document.getElementById("LblCountry").classList.add("labelUP");

  // REMOVE ALL PALCEHOLDER TEXT
  var inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.setAttribute("Placeholder", "");
  });

  document.querySelectorAll("#Country option")[2].setAttribute("disabled", true);

  // CODE FOR 2001

  // document.getElementById("Contact_Us_Form_Entry__c").setAttribute("tabindex", "11");
  window.addEventListener("resize", function () {
    heightCalculation();
  });

  const targetNode = document.querySelector("body.spz-2001 .get-started-form__container");
  const config = { attributes: true, childList: true, subtree: true };
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (document.body.scrollHeight > window.innerHeight && document.querySelector(".customInput.openBox")) {
        document.querySelector("body.spz-2001").setAttribute("style", "height:" + document.body.scrollHeight + "px");
      } else {
        document.querySelector("body.spz-2001").removeAttribute("style");
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);

  // form state
  var selector =
    "body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select";

  // document.addEventListener(
  //   "focus",
  //   function (event) {
  //     if (event.target.matches(selector)) {
  //       event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active", "typing");
  //     }
  //     checkValidFields();
  //     checkState();
  //   },
  //   true
  // );

  var eventList = ["blur", "focusout", "keyup", "change"];
  for (s_event of eventList) {
    document.addEventListener(s_event, function (event) {
      if (event.target.matches(selector)) {
        if (event.target.value == null || event.target.value == "") {
          event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("active");
          event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("filled");
        } else {
          event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active");
          event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("filled");
          checkValidFields();
          checkState();
        }
      }
    });
  }

  // document.addEventListener(
  //   "focusout",
  //   function (event) {
  //     document.querySelectorAll("body form.mktoForm .mktoFormCol .mktoFieldWrap.typing").forEach(function (elem) {
  //       elem.classList.remove("typing");
  //     });
  //     checkState();
  //   },
  //   true
  // );
  heightCalculation();
}

//Add hidden fields
function setHiddenFields() {
  if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
    document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute("value", "#2001_spz_variant");
  }
}

function checkValidFields() {
  let validFields = document.querySelectorAll(".mktoFormCol:not(.spz-hidden) .mktoRequiredField.filled").length;
  if (validFields >= 4) {
    document.querySelectorAll(".spz-hidden").forEach(function (elem) {
      elem.classList.remove("spz-hidden");
    });

    document.querySelector(".get-started-form__container").classList.add("spz-full-form");
  }
}

// Generic Code
function waitForElm(selector) {
  return new Promise(function (resolve) {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(function (mutations) {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
  });
}
function heightCalculation() {
  document.querySelector("body.spz-2001 .get-started-form__container").style.minHeight = window.innerHeight + "px";
}
function checkState() {
  waitForElm("#PostalCode").then(function () {
    document.querySelector("#PostalCode").closest(".mktoFormRow").classList.add("row-PostalCode");
    // document.querySelector('.Country-row').insertAdjacentElement('afterend', document.querySelector('#PostalCode').closest('.mktoFormRow'));
    document.querySelector("#PostalCode").setAttribute("tabindex", "12");
    if (document.querySelector(".mktoFormCol.Country-row.spz-hidden")) {
      document.querySelector("#PostalCode").closest(".mktoFormRow").classList.add("spz-hidden");
    }
    // COMMING ONLY ON CONTROL
    document.getElementById("LblPostalCode").classList.add("labelUP");
    document.getElementById("LblPostalCode").textContent = "Postal Code";
    document.getElementById("PostalCode").setAttribute("Placeholder", "");
  });
  waitForElm(".netskope-fm").then(function () {
    document.querySelector(".netskope-fm").closest(".mktoFormRow").classList.add("row-netskope-fm");
    if (document.querySelector(".mktoFormCol.Country-row.spz-hidden")) {
      document.querySelector(".netskope-fm").closest(".mktoFormRow").classList.add("spz-hidden");
    }
    document.querySelector(".netskope-fm a").setAttribute("tabindex", "13");
  });
  waitForElm(".single_checkbox").then(function () {
    document.querySelector(".single_checkbox").closest(".mktoFormRow").classList.add("row-single_checkbox");
    if (document.querySelector(".mktoFormCol.Country-row.spz-hidden")) {
      document.querySelector(".single_checkbox").closest(".mktoFormRow").classList.add("spz-hidden");
    }
    document.querySelector("#LblConsent_to_Processing__c .p11 a").setAttribute("tabindex", "12");
  });
}

waitForElm(".landing-page__container").then(function () {
  document.querySelector(".landing-page__container").classList.add("get-started-form__container");
  document.querySelector(".landing-page__form-container").classList.add("get-started-form__container");
});