(function () {
  function createTest() {
    waitForElm(".MuiModal-root div[class*=Modal-modalContentContainer] div[class*=Form-formContainer] form.hs-form fieldset .field.hs-form-field .input .hs-input").then(function () {
      document.querySelector("body").classList.add("spz-1014");

      appendInputLabel();
      focusFields();
      setHiddenFields();
    });
  }

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
      el.parentNode.insertBefore(label, el.nextSibling);
    });
  }

  // On input focus add class on closest parent .field class
  function focusFields() {
    document.querySelectorAll(".hs-input").forEach(function (el) {
      // On input focus add .field-focus class on closest parent .field class
      el.addEventListener("focus", function () {
        el.closest(".field").classList.add("field-focus");
      });

      // On input blur remove .field-focus class on closest parent .field class
      el.addEventListener("blur", function () {
        el.closest(".field").classList.remove("field-focus");
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
