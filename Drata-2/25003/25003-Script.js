(function () {
  function loadTest() {
    document.body.insertAdjacentHTML("afterbegin", pageContent());
    document.body.classList.add('spz-25003');

    waitForElm('div[class*="Form-formContainer"] #reactHubspotForm0 form.hs-form').then(function () {
      if (document.querySelectorAll('div[class*="Form-formContainer"] form.hs-form').length > 0) {

        console.log('Form loaded');
        appendInputLabel();

        // Set input label
        document.querySelector('[name="number_of_employees"] + .hs-label-spz').innerHTML = 'No. of Employees*';
        document.querySelector('[name="number_of_employees"] option:first-child').innerHTML = 'No. of Employees*';

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

        // moveElement('.hs_source__inbound_demo_', '.hbspt-form .form-columns-1:nth-child(2)');
        // moveElement(' .hbspt-form .form-columns-0', ' .hbspt-form');

        // Set focus on input
        focusFields();
        hideReviewBadges();
        submitTestDetails();

        document.body.classList.add('spz-25003');
      }
    });

    function hideReviewBadges() {
      waitForElm(' .hbspt-form .submitted-message').then(function () {
        document.querySelector(' fieldset.form-columns-0').style.display = 'none';
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

  appendFavicon();

  // Create input label with placeholder text
  function appendInputLabel() {
    document.querySelectorAll('div[class*="Form-formContainer"] form.hs-form .hs-input').forEach(function (el) {
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
    if (document.querySelector('div[class*="Form-formContainer"] form.hs-form .hs_cro_test_1 .input .hs-input')) {
      document.querySelector('div[class*="Form-formContainer"] form.hs-form .hs_cro_test_1 .input .hs-input').setAttribute('value', '#1007__Demo(Internal)_Form_Over_UI_Left');
      document.querySelector('div[class*="Form-formContainer"] form.hs-form .hs_cro_test_2 .input .hs-input').setAttribute('value', 'Variant');
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
    if (window.location.href.indexOf('https://drata.com/resources/complete-guide-risk-management') > -1) {
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
    if (document.body.classList.contains('spz-25003')) {
      document.body.classList.remove('spz-25003');
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
})();
