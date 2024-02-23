(function () {
  function createTest() {
    waitForElm(
      ".MuiModal-root div[class*=Modal-modalContentContainer] div[class*=Form-formContainer] form.hs-form .hs_demo_product_of_interest p.MuiTypography-body1"
    ).then(function () {
      document.querySelector("body").classList.add("spz-1014");

      appendInputLabel();
      focusFields();
      setHiddenFields();
      appendImages();

      // Add field-untouched class on select element
      document.querySelectorAll("select.hs-input").forEach(function (el) {
        if (el.options.length > 0) {
          el.closest(".field").classList.add("field-untouched");
        }
      });

      // let updateLabel = setInterval(() => {
      document.querySelector(
        ".MuiModal-root div[class*=Modal-modalContentContainer] div[class*=Form-formContainer] form.hs-form .actions button"
      ).textContent = "Get Started";

      document.querySelector(
        ".hs_source__inbound_demo_ .input .hs-label-spz"
      ).textContent = "How did you hear about us?*";

      // move .MuiTypography-body1 after .hs_submit
      document
        .querySelector(
          ".MuiModal-root div[class*=Modal-modalContentContainer] div[class*=Form-formContainer] form.hs-form .hs_submit"
        )
        .insertAdjacentElement(
          "afterend",
          document.querySelector(
            ".MuiModal-root div[class*=Modal-modalContentContainer] div[class*=Form-formContainer] form.hs-form .hs_demo_product_of_interest p.MuiTypography-body1"
          )
        );
      // }, 50);

      // setTimeout(() => {
      //   clearInterval(updateLabel);
      // }, 1000);
    });
  }

  function appendImages() {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1708413855/drata/1014/Checkbox_filled.svg" as="image">`
    );
  }

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("MuiButton-ctaModule")) {
      const err = setInterval(() => {
        checkError();
        clearInterval(err);
      }, 100);
    }
  });

  // Create input label with placeholder text
  function appendInputLabel() {
    document.querySelectorAll(".hs-input").forEach(function (el) {
      const label = document.createElement("label");
      label.innerHTML = el.placeholder;
      if (!el.hasAttribute("type") && el.options.length > 0) {
        label.innerHTML = el.options[0].text;
      }
      label.setAttribute("for", el.id);
      label.classList.add("hs-label-spz");
      if (el.parentElement.querySelectorAll(".hs-label-spz").length == 0) {
        el.parentNode.insertBefore(label, el.nextSibling);
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
          el.closest(".field").classList.remove("field-untouched");
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
        });
      }
    });
  }

  function removeTest() {
    document.body.classList.remove("spz-1014");
  }

  function setHiddenFields() {
    // waitForElm('form.hs-form-private .hs_cro_test_1 .input .hs-input').then(function () {
    //     let setValue = setInterval(() => {
    //         if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == '#1010_variant') {
    //             clearInterval(setValue);
    //         }
    //         document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '#1010_variant');
    //     }, 100);
    // });
  }

  history.pushState = (function (f) {
    return function pushState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
  })(history.pushState);
  history.replaceState = (function (f) {
    return function replaceState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
  })(history.replaceState);
  window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("locationchange"));
  });
  var url = location.href;
  urlCheck(url);
  window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
  });

  function urlCheck(url) {
    let testURL = "";
    if (window.location.pathname.indexOf("demo") !== -1) {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      createTest();
    } else {
      removeTest();
    }
  }

  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#")
      ? currentUrl.slice(0, currentUrl.indexOf("#"))
      : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
      ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
      : specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?")
        ? currentUrl.slice(0, currentUrl.indexOf("?"))
        : currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
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
      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });
    });
  }
})();
