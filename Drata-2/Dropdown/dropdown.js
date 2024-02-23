(function () {
  // var bodyInterval = setInterval(function () {
  //   var bodyEle = document.querySelector("body");
  //   if (!bodyEle.classList.contains("spz_custom_dropdown")) {
  //     clearInterval(bodyInterval);

  function loadTest() {
    const hubSpotJS = document.createElement("script");
    hubSpotJS.src = "//js.hsforms.net/forms/embed/v2.js";
    hubSpotJS.type = "text/javascript";
    hubSpotJS.setAttribute("charset", "utf-8");
    document.head.appendChild(hubSpotJS);
    document.body.classList.add("spz_custom_dropdown");

    hubSpotJS.onload = function () {
      appendHubspotScript();
    };

    //Hero section content feeding
    waitForElm("form.hs-form-private.hs-form-spz .hs-form-field").then(
      function (elm) {
        if (
          document.querySelector(
            '#__next main section div[class*="Form-formOuterContainer"] .hs-form-iframe'
          )
        ) {
          document
            .querySelector(
              '#__next main section div[class*="Form-formOuterContainer"] .hs-form-iframe'
            )
            .remove();
        }
        appendInputLabel();
        focusFields();

        appendImages();

        if (
          document.querySelectorAll(".spz-btn.custom-input-btn").length == 0
        ) {
          document
            .querySelector(
              "form.hs-form-private .hs-fieldtype-checkbox.field.hs-form-field legend.hs-field-desc"
            )
            .insertAdjacentHTML(
              "afterend",
              ` <button class="spz-btn custom-input-btn" type="button"><span class="value-container"></span><span class="label">Select which framework(s) you'd like access to:*</span></button>`
            );
        }

        var jQueryInterval = setInterval(function () {
          if (typeof jQuery != "undefined") {
            clearInterval(jQueryInterval);

            jQuery("body").click(function (evt) {
              if (
                !jQuery(evt.target).hasClass("hs_capability_types") &&
                jQuery(evt.target).closest(
                  ".hs-fieldtype-checkbox.field.hs-form-field"
                ).length == 0
              ) {
                if (
                  jQuery(".hs-fieldtype-checkbox.field.hs-form-field").hasClass(
                    "field-focus"
                  )
                ) {
                  jQuery(
                    ".hs-fieldtype-checkbox.field.hs-form-field"
                  ).removeClass("field-focus");
                  dropdownFunctionality();
                }
              }
            });
          }
        });
      }
    );
  }

  //   }
  // });

  window.addEventListener("click", function (e) {
    if (e.target.classList.contains("spz-btn")) {
      // console.log('I am batman')
      e.target.parentElement.classList.toggle("field-focus");
      dropdownFunctionality();
    }
    if (e.target.classList.contains("hs-button")) {
      checkError();
      dropdownFunctionality();
    }
    if (e.target.closest("ul")) {
      if (e.target.closest("ul").classList.contains("hs-error-msgs")) {
        checkError();
      }
    }
  });

  function removeTest() {
    setTimeout(() => {
      document.body.classList.remove("spz_custom_dropdown");
    }, 500);
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
  window.addEventListener("locationchange", function () {
    // removeTest();

    url = location.href;
    urlNewCheck(url);
  });

  var url = location.href;
  urlNewCheck(url);

  function urlNewCheck(url) {
    var targetTestURL = "https://drata.com/access";
    if (isSameUrl(url, targetTestURL, true)) {
      waitForElm(".mui-12ive4l-Form-formContainer").then(function (elm) {
        loadTest();
      });
    } else {
      removeTest();
    }
  }

  // isSameUrl Parameters
  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#")
      ? currentUrl.slice(0, currentUrl.indexOf("#"))
      : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
      ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
      : specifiedUrl;
    if (includeQueryParams)
      currentUrl = currentUrl.includes("?")
        ? currentUrl.slice(0, currentUrl.indexOf("?"))
        : currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
  }

  function appendImages() {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1707981595/drata/Access-Page-Custom-Dropdown/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1708060676/drata/Access-Page-Custom-Dropdown/Arrow-active.svg" as="image">`
    );
  }

  function checkboxDropdown() {
    waitForElm(".spz_custom_dropdown .hs-form-spz .hs-form-checkbox").then(
      function (elm) {
        // let counter = 0;
        document
          .querySelectorAll(".hs-form-checkbox")
          .forEach(function (elem, i) {
            elem
              .querySelector(".hs-input")
              .addEventListener("click", function () {
                var title = elem.querySelector("span").textContent;

                if (elem.querySelector('input[type="checkbox"]').checked) {
                  var html = '<span title="' + title + '">' + title + "</span>";

                  if (
                    document.querySelectorAll('span[title="' + title + '"]')
                      .length == 0
                  ) {
                    document
                      .querySelector(".spz-btn .value-container")
                      .insertAdjacentHTML("beforeend", html);
                    // counter++;
                  }
                } else {
                  document
                    .querySelector('span[title="' + title + '"]')
                    .remove();
                  // counter--;
                }

                if (
                  document.querySelectorAll(
                    ".spz-btn .value-container span[title]"
                  ).length > 0
                ) {
                  document
                    .querySelector(
                      ".hs-fieldtype-checkbox.field.hs-form-field .spz-btn"
                    )
                    .classList.add("single-value");
                } else {
                  if (
                    document
                      .querySelector(
                        ".hs-fieldtype-checkbox.field.hs-form-field .spz-btn"
                      )
                      .classList.contains("single-value")
                  ) {
                    document
                      .querySelector(
                        ".hs-fieldtype-checkbox.field.hs-form-field .spz-btn"
                      )
                      .classList.remove("single-value");
                  }
                }
              });
          });
      }
    );
  }

  function dropdownFunctionality() {
    if (
      !document
        .querySelector(".hs-fieldtype-checkbox.field.hs-form-field")
        .classList.contains("field-focus")
    ) {
      if (document.querySelector(".spz-btn > .value-container > span")) {
        document
          .querySelector(".hs-fieldtype-checkbox.field.hs-form-field")
          .classList.add("input-filled");
      } else {
        document
          .querySelector(".hs-fieldtype-checkbox.field.hs-form-field")
          .classList.remove("input-filled");
      }
    }
    if (
      document.querySelector(
        ".hs-fieldtype-checkbox.field.hs-form-field .error"
      ) != null
    ) {
      document
        .querySelector(".hs-fieldtype-checkbox.field.hs-form-field")
        .classList.add("field-error");
    } else {
      document
        .querySelector(".hs-fieldtype-checkbox.field.hs-form-field")
        .classList.remove("field-error");
    }
  }

  // Hubspot form script
  function appendHubspotScript() {
    const scriptSPZ = document.createElement("script");

    scriptSPZ.innerHTML = `hbspt.forms.create({region: "na1", portalId: "7817592", formId: "a6043509-2a53-4a93-8c05-b64cb53299e8", cssClass: "hs-form-spz", css: "", submitText: "Schedule Demo", onFormReady: ($form) => { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });`;

    if (
      document.querySelectorAll(".mui-12ive4l-Form-formContainer .hbspt-form")
        .length == 0
    ) {
      document
        .querySelector(".mui-12ive4l-Form-formContainer")
        .appendChild(scriptSPZ);
      checkboxDropdown();
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
      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });
    });
  }

  // Create input label with placeholder text
  function appendInputLabel() {
    document
      .querySelectorAll(".hs-form-field:not(.smart-field)")
      .forEach(function (el) {
        el.querySelector("label").classList.add("hs-label-spz");
      });
  }

  // On input focus add class on closest parent .field class
  function focusFields() {
    document.querySelectorAll(".hs-input").forEach(function (el) {
      el.addEventListener("focus", function () {
        el.closest(".field").classList.add("field-focus");
      });
      el.addEventListener("blur", function () {
        el.closest(".field").classList.remove("field-focus");
        checkError();
      });

      // add event listeners to the input element
      el.addEventListener("keypress", () => {
        checkError();
        dropdownFunctionality();
      });

      el.addEventListener("keydown", () => {
        checkError();
        dropdownFunctionality();
      });

      el.addEventListener("keyup", () => {
        checkError();
        dropdownFunctionality();
      });
    });
  }

  // Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
  function checkError() {
    let timeBuffer = setInterval(() => {
      document.querySelectorAll(".hs-input").forEach(function (el) {
        if (el.closest(".field").querySelector(".error") != null) {
          el.closest(".field").classList.add("field-error");
        } else {
          el.closest(".field").classList.remove("field-error");
        }
      });
      document
        .querySelectorAll('.hs-input:not([type="checkbox"])')
        .forEach(function (el) {
          if (el && el.value) {
            el.closest(".field").classList.add("input-filled");
          } else {
            el.closest(".field").classList.remove("input-filled");
          }
        });
    });

    setTimeout(() => {
      clearInterval(timeBuffer);
    }, 1000);
  }
})();
