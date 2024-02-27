let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    loadTest();
  }
});

function loadTest() {
  // Set test class
  document.body.classList.add('spz-7002');

  waitForElm('.subscribe_form_outer .hs-form.hs-custom-form').then(function (elm) {

    // Set focus on input
    focusFields();
    appendInputLabel();


    //update innerHTMl of disclaimer text
    document.querySelector('main.body-wrapper--blog-post article.blog-post .widget-type-blog_subscribe .insights-subscribe .blog_subscribe_disclaimer').innerHTML = 'By providing your email address, you agree to receive marketing communications from Komodo Health.<br>For more information on how we process personal information, please refer to our published <a href="https://www.komodohealth.com/privacy-notice" rel="noopener" target="_blank">Privacy Notice</a>.';
  });
}

// Generic

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
}

// On input focus add class on closest parent .field class
function focusFields() {
  document.querySelectorAll(".hs-input").forEach(function (el) {
    // On input focus add .field-focus class on closest parent .field class
    el.addEventListener("focus", function () {
      el.closest(".field").classList.add("field-focus");
      setTimeout(function () {
        el.closest(".field").classList.remove("field-error");
        // el.closest(".field").classList.remove("field-untouched");
      }, 100);
    });

    // On input blur remove .field-focus class on closest parent .field class
    el.addEventListener("blur", function () {
      el.closest(".field").classList.remove("field-focus");
      setTimeout(function () {
        checkError();
      }, 100);
    });

    // On select element change remove .field-error class on closest parent .field class
    if (el.tagName == "SELECT") {
      el.addEventListener("change", function () {
        el.closest(".field").classList.remove("field-error");
        // moveDependentField();
        updateFormStyling();
      });
    }
  });
}

// Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
  document.querySelectorAll(".hs-input").forEach(function (el) {
    if (el.closest(".field").querySelector(".error") != null) {
      el.closest(".field").classList.add("field-error");
    } else {
      el.closest(".field").classList.remove("field-error");
    }

    if (!el.getAttribute("value")) {
      el.classList.add("no-value");
    } else {
      el.classList.remove("no-value");
    }
  });
}
function removeTest() {
  document.body.classList.remove('spz-7002');
}

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

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
  document.body.classList.add('safari')
}