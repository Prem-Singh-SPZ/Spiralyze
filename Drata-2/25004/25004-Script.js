(function () {
  function loadTest() {
    document.body.classList.add('spz-25004');

    waitForElm('div[class*="MuiGrid-root-Section-gridContainer"] div[class*="Block-contentWrapper"] [class$=Block-content]').then(function () {
      document.querySelector('div[class*="MuiGrid-root-Section-gridContainer"] div[class*="Block-contentWrapper"] [class$=Block-content]').innerHTML = `<div class="hero-content">
        <h1 class="hc-title">Drata's <span>Risk Trends</span> Report</h1>
        <div class="hc-tag dis-flex"><span>SOC 2</span> <span>ISO 27001</span> <span>HIPAA</span> <span>GDPR</span> <span>PCI</span> <span> More</span></div>
        <div class="star-rating dis-flex align-items-center"><img src="//res.cloudinary.com/spiralyze/image/upload/v1694156756/drata/6012/hero_logo-g2_1.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1698673988/drata/4012/custom/4.9_Star_rating.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"> <span class="sr-number"><strong>4.9</strong> (700+ reviews)</span></div>
        <div class="list-grp-wrapper">
            <ul class="list-group">
              <li class="list-item">
                  <div class="ls-title">Understand the scope of third-party risks: <span class="ls-desc"> Why 80% of companies fear they lack full visibility into their third parties&#8217; security postures. </span></div>
              </li>
              <li class="list-item">
                  <div class="ls-title">Access vital data and trends: <span class="ls-desc"> Get insights from a survey of 300 organisations on the challenges and opportunities in third-party risk management.</span></div>
              </li>
              <li class="list-item">
                  <div class="ls-title">Learn proactive risk management strategies: <span class="ls-desc"> How to address the gaps in TPRM processes and moving towards more automated risk and compliance solutions</span></div>
              </li>
            </ul>
        </div>
      </div>`;
    });

    waitForElm('div[class*="Form-formOuterContainer"] > [class*="MuiTypography-root-Form-formMessage"]').then(function () {
      document.querySelector('div[class*="Form-formOuterContainer"] > [class*="MuiTypography-root-Form-formMessage"]').textContent = "Download the Report";
    });

    waitForElm('div[class*="Form-formContainer"] #reactHubspotForm0 form.hs-form').then(function () {
      if (document.querySelectorAll('div[class*="Form-formContainer"] form.hs-form').length > 0) {

        if (document.querySelectorAll('div[class*="Form-formContainer"] #reactHubspotForm0 .form-note').length == 0) {
          document.querySelector('div[class*="Form-formContainer"] #reactHubspotForm0  form.hs-form .hs_submit').insertAdjacentHTML('beforebegin', `<p class="form-note">For partnership inquiries, please contact partnerships@drata.com</p>`);
        }

        appendInputLabel();

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

        // Set focus on input
        focusFields();
        // submitTestDetails();
      }
    });

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
      let oldLabel = el.closest('.field').querySelector('label[id]').textContent;
      const label = document.createElement("label");
      label.innerHTML = oldLabel || el.placeholder;
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
    if (window.location.href.indexOf('https://drata.com/resources/risk-trends') > -1) {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      loadTest();
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
    if (document.body.classList.contains('spz-25004')) {
      document.body.classList.remove('spz-25004');
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

  // Add class 'safari' on body if browser is safari
  if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari');
  }
})();
