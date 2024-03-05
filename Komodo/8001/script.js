updateFormStyling();

function updateFormStyling() {
  const formInt = setInterval(() => {
    if (document.querySelectorAll(".hbspt-form form").length > 0) {
      clearInterval(formInt);

      appendInputLabel();

      // hs-button
      document
        .querySelector(".hs-button")
        .addEventListener("click", function () {
          const err = setInterval(() => {
            checkError();
            clearInterval(err);
          }, 100);
        });

      // Set focus on input
      focusFields();
      // moveDependentField();
      if (document.querySelector('.hs_consent_countries select')) {
        document.querySelector('.hs_consent_countries select').setAttribute('autocomplete', 'none');
      }

    }
  }, 100);
}

// function moveDependentField() {
//   if (
//     document.querySelectorAll(".hs-form-spz fieldset.spz-custom-field")
//       .length == 0
//   ) {
//     document
//       .querySelector(".hs-form-spz fieldset.form-columns-0")
//       .insertAdjacentHTML(
//         "beforebegin",
//         `<fieldset class="form-columns-0 spz-custom-field"></fieldset>`
//       );
//   }

//   waitForElm(".hs-fieldtype-booleancheckbox").then(function () {
//     document.querySelector('.hs-input[type="checkbox"]').checked = false;
//     moveElement(".hs-fieldtype-booleancheckbox", "fieldset.spz-custom-field");
//     if (document.querySelector('.hs-form-spz .hs_consent_to_communicate')) {
//       document.querySelector('.hs-form-spz .hs_consent_to_communicate').closest('fieldset').classList.add('spz-hidden');
//     }
//   });
// }

function appendFavicon() {
  document.querySelector("head").insertAdjacentHTML(
    "afterbegin",
    `
          <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1707797422/KomodoHealth/8001/src/Checkbox_base.svg" as="image">
          <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1707745302/KomodoHealth/8001/src/Checkbox_checked.svg" as="image">
          <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1707797996/KomodoHealth/8001/src/Arrow_Pointing_Above.svg" as="image">`
  );
}

// Create input label with placeholder text
function appendInputLabel() {
  document
    .querySelectorAll('.hs-input:not([type="checkbox"])')
    .forEach(function (el) {
      const label = document.createElement("label");
      label.innerHTML = el
        .closest(".hs-form-field")
        .querySelector("label > span:first-child").textContent;
      // if (!el.hasAttribute('type') && el.options.length > 0) {
      //     label.innerHTML = el.options[0].text;
      // }
      label.setAttribute("for", el.id);
      label.classList.add("hs-label-spz");

      if (el.parentNode.querySelectorAll("label.hs-label-spz").length == 0) {
        el.parentNode.insertBefore(label, el.nextSibling);
      }
    });

  document
    .querySelectorAll('input.hs-input:not([type="hidden"])')
    .forEach(function (el) {
      el.setAttribute("placeholder", " ");
    });

  document.querySelector(`.hs-form-spz fieldset:nth-child(5)`).classList.add('spz-hidden');
  document.querySelector(`.hs-form-spz fieldset:nth-child(6)`).classList.add('spz-hidden');

}

// On input focus add class on closest parent .field class
function focusFields() {
  document.querySelectorAll(".hs-input").forEach(function (el) {
    // On input focus add .field-focus class on closest parent .field class
    el.addEventListener("focus", function () {
      el.closest(".field").classList.add("field-focus");
      setTimeout(function () {
        el.closest(".field").classList.remove("field-error");
        checkError();
      }, 100);
    });

    // On input blur remove .field-focus class on closest parent .field class
    el.addEventListener("blur", function () {
      el.closest(".field").classList.remove("field-focus");
      setTimeout(function () {
        // checkError();
      }, 100);
    });

    // On select element change remove .field-error class on closest parent .field class
    if (el.tagName == "SELECT") {
      el.addEventListener("change", function (e) {
        el.closest(".field").classList.remove("field-error");
        el.closest(".hs-dependent-field").classList.add("field-active");
        console.log("moveDependentField");
      });
    }
  });
}

// Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
  document.querySelectorAll(`.hs-input:not([type="hidden"]):not([type="checkbox"])`).forEach(function (el) {
    if (el.closest(".field").querySelector(".error") != null) {
      el.closest(".field").classList.add("field-error");
    } else {
      el.closest(".field").classList.remove("field-error");
    }

    if (el.getAttribute("value") && el.getAttribute("value") != '') {
      el.classList.add("value-filled");
      if (el.classList.contains("no-value"))
        el.classList.remove("no-value");
    } else {
      if (el.classList.contains("value-filled"))
        el.classList.remove("value-filled");
      el.classList.add("no-value");
    }
  });

  if (document.querySelectorAll('.value-filled').length >= 3) {
    document.querySelector('.hs-form-spz fieldset:nth-child(5)').classList.remove('spz-hidden');
    document.querySelector('.hs-form-spz fieldset:nth-child(6)').classList.remove('spz-hidden');
    // if (document.querySelector('.hs-form-spz .hs_consent_to_communicate') && document.querySelector('.hs-form-spz .hs_consent_to_communicate').closest('fieldset').classList.hasClass('spz-hidden')) {
    //   document.querySelector('.hs-form-spz .hs_consent_to_communicate').closest('fieldset').classList.remove('spz-hidden');
    // }
  }
}

// Add class 'safari' on body if browser is safari
if (
  navigator.userAgent.toLowerCase().indexOf("chrome/") == -1 &&
  navigator.userAgent.toLowerCase().indexOf("safari/") > -1
) {
  document.body.classList.add("safari");
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
    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    });
  });
}

function moveElement(sourceElm, targetLoc) {
  const f = document.createDocumentFragment();
  if (document.querySelector(sourceElm) != null) {
    f.appendChild(document.querySelector(sourceElm));
    document.querySelector(targetLoc).appendChild(f);
  }
}
