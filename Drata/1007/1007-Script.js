(function () {
  function loadTest() {
    // Load Hubspot libs
    const hubSpotJS = document.createElement('script');
    hubSpotJS.src = '//js.hsforms.net/forms/embed/v2.js';
    hubSpotJS.type = 'text/javascript';
    hubSpotJS.setAttribute('charset', 'utf-8');
    document.head.appendChild(hubSpotJS);

    document.body.insertAdjacentHTML("afterbegin", pageContent());
    document.body.classList.add('spz-1007');

    hubSpotJS.onload = function () {
      appendHubspotScript();
    }

    const formInt = setInterval(() => {
      if (document.querySelectorAll('.hbspt-form form').length > 0 && document.querySelectorAll('.hs-form').length == 2) {
        clearInterval(formInt);


        document.querySelector('.hero-content').style.opacity = 1;
        // document.querySelector('#__next > main').remove();
        // document.querySelector('#__next > header').remove();

        appendInputLabel();

        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';
        document.querySelector('[name="source__inbound_demo_"]').setAttribute('placeholder', 'How did you hear about us?*');
        document.querySelector('[name="number_of_employees"] + .hs-label-spz').innerHTML = 'No. of Employees*';
        document.querySelector('[name="number_of_employees"] option:first-child').innerHTML = 'No. of Employees*';
        document.querySelector('label#label-demo_product_of_interest-429140d2-bd90-4a8b-a561-5d732c9bd514 + .hs-field-desc').innerHTML = 'What product(s) are you interested in?';
        // Set SOC-2 checkbox checked
        // document.querySelector('[name="demo_product_of_interest"]').setAttribute('checked', 'checked');

        // Set button label
        document.querySelector('.hs-button.primary').innerHTML = 'Get Started';
        document.querySelector('.hs-button.primary').setAttribute('value', 'Get Started');
        // hs-button
        document.querySelector('.hs-button').addEventListener('click', function () {
          const err = setInterval(() => {
            checkError();
            clearInterval(err);
          }, 100);
        });

        // Add field-untouched class on select element
        document.querySelectorAll('select.hs-input').forEach(function (el) {
          if (el.options.length > 0) {
            el.closest('.field').classList.add('field-untouched');
          }
        });

        document.querySelector('#header-logo-url').addEventListener('click', function () {
          document.querySelector('header > .MuiContainer-root > .MuiToolbar-root > .MuiTypography-root.MuiTypography-link').click();
        });

        // moveElement('.hs_source__inbound_demo_', '.hbspt-form .form-columns-1:nth-child(2)');
        moveElement('.form-wrapper-spz .hbspt-form .form-columns-0', '.form-wrapper-spz .hbspt-form');

        // Set focus on input
        focusFields();
        hideReviewBadges();
        // removeStyleTags();
        submitTestDetails();

        document.body.classList.add('spz-1007');
      }
    }, 100);

    function hideReviewBadges() {
      waitForElm('.form-wrapper-spz .hbspt-form .submitted-message').then(function () {
        document.querySelector('.form-wrapper-spz fieldset.form-columns-0').style.display = 'none';
      });
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

    function forClearBitForms() {
      document.querySelectorAll('.form-wrapper-spz .hs-input').forEach(function (el) {
        if (el.closest('.hs-form-field[style*="display: none"]')) {
          el.closest('fieldset').classList.add('field-hidden');
        } else {
          el.closest('fieldset').classList.remove('field-hidden');
        }

        // Make 'How did you hear about us?' field full width if hidden fields count is odd
        const hiddenFields = document.querySelectorAll('fieldset:not(.form-columns-3).field-hidden').length;
        if (hiddenFields % 2 == 0) {
          document.querySelector('.hs_source__inbound_demo_').closest('fieldset').classList.add('full-width');
        } else {
          document.querySelector('.hs_source__inbound_demo_').closest('fieldset').classList.remove('full-width');
        }
      });
    }

    setInterval(function () {
      // if (document.querySelectorAll('fieldset:not(.form-columns-3) .hs-form-field[style*="display: none"]').length > 0) {
      // clearInterval(cbInt);
      forClearBitForms();
      // }
    }, 500);

    // on user type in .hs-input run forClearBitForms() function
    document.addEventListener('keyup', function (e) {
      if (e.target.classList.contains('hs-input')) {
        forClearBitForms();
      }
    });
  }


  function appendFavicon() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
        <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1681388733/drata/4001/System_Icons_open.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1686657672/drata/1005/Checkbox.svg" as="image">`
    );
  }

  function appendGTM() {
    document.body.insertAdjacentHTML("afterbegin", `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K4ZZ96"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`);
  }
  // appendGTM();
  appendFavicon();


  // Remove all style tags without id in header
  function removeStyleTags() {
    document.querySelectorAll('style:not([id])').forEach(function (el) {
      el.remove();
    });

    // Remove link tag which contains main.min.css or Social_follow.min.css in href attribute
    document.querySelectorAll('link').forEach(function (el) {
      if (el.href.indexOf('main.min.css') > -1 || el.href.indexOf('Social_follow.min.css') > -1) {
        el.remove();
      }
    });
  }


  // Create input label with placeholder text
  function appendInputLabel() {
    document.querySelectorAll('.hbspt-form form .hs-input').forEach(function (el) {
      const label = document.createElement("label");
      label.innerHTML = el.placeholder;
      if (!el.hasAttribute('type') && el.options.length > 0) {
        label.innerHTML = el.options[0].text;
      }
      label.setAttribute('for', el.id);
      label.classList.add('hs-label-spz');
      if (label.innerHTML != '') {
        el.parentNode.insertBefore(label, el.nextSibling);
      }
    });
  }

  //Passing test details to hidden fields
  function submitTestDetails() {
    if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input')) {
      document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '#1007__Demo(Internal)_Form_Over_UI_Left');
      document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', 'Variant');
    }
  }

  // On input focus add class on closest parent .field class
  function focusFields() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
      // On input focus add .field-focus class on closest parent .field class
      el.addEventListener('focus', function () {
        el.closest('.field').classList.add('field-focus');
        setTimeout(function () {
          el.closest('.field').classList.remove('field-error');
          el.closest('.field').classList.remove('field-untouched');
        }, 100);
      });

      // On input blur remove .field-focus class on closest parent .field class
      el.addEventListener('blur', function () {
        el.closest('.field').classList.remove('field-focus');
        setTimeout(function () {
          checkError();
        }, 100);
      });

      // On select element change remove .field-error class on closest parent .field class
      if (el.tagName == 'SELECT') {
        el.addEventListener('change', function () {
          el.closest('.field').classList.remove('field-error');
        });

        // el.addEventListener('focus', function () {
        //     el.closest('.field').classList.add('field-focus');
        //     setTimeout(function () {
        //         el.closest('.field').classList.remove('field-untouched');
        //     }, 100);
        // });
      }
    });
  }

  // Click on 'did you know email address' link in error message
  document.addEventListener("click", function (e) {
    const target = e.target.closest(".inputs-list label a");

    if (target) {
      checkError();
    }
  });

  // Generic
  history.pushState = (function (f) {
    return function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('pushstate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.pushState);
  history.replaceState = (function (f) {
    return function replaceState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.replaceState);

  window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
  });
  window.addEventListener('locationchange', function () {
    url = location.href;
    urlCheck(url);
  });

  let url = location.href;
  urlCheck(url);
  function urlCheck(url) {
    let testURL = '';
    if (window.location.href.indexOf('https://drata.com/demo') > -1) {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      if (document.querySelectorAll('.hero-section').length == 0) {
        loadTest();
      }
    } else {
      removeTest();
    }
  }

  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
      currentUrl.slice(0, currentUrl.indexOf("#")) :
      currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
      specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
      specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?") ?
        currentUrl.slice(0, currentUrl.indexOf("?")) :
        currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
  }

  function removeTest() {
    if (document.body.classList.contains('spz-1007')) {
      document.body.classList.remove('spz-1007');
    }
    if (document.querySelectorAll('.hero-section').length > 0) {
      document.querySelector('.hero-section').remove();
    }
  }

  // Add .field-error class on closest parent .field class if .error is exist on .hs-input
  function checkError() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
      if (el.closest('.field').querySelector('.error') != null) {
        el.closest('.field').classList.add('field-error');
      } else {
        el.closest('.field').classList.remove('field-error');
      }
    });
  }

  // Move element
  // sourceElm: Element which we have to move
  // targetLoc: New location of an element 
  function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
      f.appendChild(document.querySelector(sourceElm));
      document.querySelector(targetLoc).appendChild(f);
    }
  }

  // Add class 'safari' on body if browser is safari
  if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari');
  }

  function pageContent() {
    return `<section class="hero-section">
    <div class="hero-content container dis-flex">
    <div class="spz-header"><a href="Javascript:void(0);" id="header-logo-url"
     class="drata-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1690373470/drata/1007/drata-wordmark.svg" alt="Drata"></a></div>
      <div class="hero-right-section">
        <div class="form-wrapper-spz">
          <h2 class="form-title-spz">Get a Demo</h2>
          <script
            type="text/javascript"
            src="//js.hsforms.net/forms/embed/v2.js"
            charset="utf-8"
          ></script>
          <script>
            hbspt.forms.create({
              region: "na1",
              portalId: "7817592",
              formId: "429140d2-bd90-4a8b-a561-5d732c9bd514",
              cssClass: "hs-form-spz",
              css: "",
              submitText: "Get Started",
              onFormReady: function ($form) {},
              onFormSubmit: function ($form) {},
              onFormSubmitted: function ($form) {},
            });
          </script>
        </div>
      </div>
      </div>
      <div class="analytics-bg-section"></div>
  </section>
  `;
  }

  // Append hubspot script in '.form-wrapper-spz' div
  function appendHubspotScript() {
    const script = document.createElement('script');

    script.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "7817592", formId: "429140d2-bd90-4a8b-a561-5d732c9bd514", cssClass: "hs-form-spz", css: "", submitText: "Get a Demo", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });';
    if (document.querySelector('.form-wrapper-spz')) {
      document.querySelector('.form-wrapper-spz').appendChild(script);
    }
  }

})();
