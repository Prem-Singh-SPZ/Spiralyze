(function () {
  function loadTest() {
    document.body.classList.add('spz-25003');

    waitForElm('.spz-25003 div[class*="MuiGrid-root-Section-gridContainer"] div[class*="Block-contentWrapper"] [class$=Block-content]').then(function () {
      let changeText = setInterval(() => {
        document.querySelector('.spz-25003 div[class*="MuiGrid-root-Section-gridContainer"] div[class*="Block-contentWrapper"] [class$=Block-content]').innerHTML = `<div class="hero-content">
        <h1 class="hc-title">Guide to <span>Cybersecurity</span> Risk Management</h1>
        <div class="hc-tag dis-flex"><span>SOC 2</span> <span>ISO 27001</span> <span>HIPAA</span> <span>GDPR</span> <span>PCI</span> <span> More</span></div>
        <div class="star-rating dis-flex align-items-center"><img src="//res.cloudinary.com/spiralyze/image/upload/v1694156756/drata/6012/hero_logo-g2_1.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1698673988/drata/4012/custom/4.9_Star_rating.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"> <span class="sr-number"><strong>4.9</strong> (700+ reviews)</span></div>
        <p class="hc-sub-title">Access our guide to learn how to kickstart your risk management program, and find out: </p>
        <div class="list-grp-wrapper">
            <ul class="list-group">
              <li class="list-item">
                  <div class="ls-title">An overview of IT and cybersecurity risk management.</div>
              </li>
              <li class="list-item">
                  <div class="ls-title">Why you need risk management.</div>
              </li>
              <li class="list-item">
                  <div class="ls-title">How to make risk management work for your organization.</div>
              </li>
            </ul>
        </div>
      </div>`;
      }, 100);

      setTimeout(() => {
        clearInterval(changeText);
      }, 5000);
    });


    waitForElm('.spz-25003 [class*=MuiGrid-root-Section-gridItem]:last-child > [class*=Form-root] [class*=Form-formOuterContainer] form .actions [class*=MuiButton-root-Form-darkSubmitButton]').then(function () {
      if (document.querySelectorAll('div[class*="Form-formContainer"] form.hs-form').length > 0) {

        if (document.querySelectorAll('div[class*="Form-formContainer"] div[id*="reactHubspotForm"] .form-title').length == 0) {
          // add form title div here
          const formTitle = document.createElement('div');
          formTitle.classList.add('form-title');
          formTitle.innerHTML = 'Download the Guide';
          document.querySelector('div[class*="Form-formContainer"] div[id*="reactHubspotForm"]  form.hs-form').insertAdjacentElement('beforebegin', formTitle);
          document.querySelector('div[class*="Form-formContainer"] div[id*="reactHubspotForm"]  form.hs-form .hs_submit').insertAdjacentHTML('beforebegin', `<p class="form-note">For partnership inquiries, please contact partnerships@drata.com</p>`);
        }

        appendInputLabel();

        // Set button label
        document.querySelector('.spz-25003 [class*=MuiGrid-root-Section-gridItem]:last-child > [class*=Form-root] [class*=Form-formOuterContainer] form .actions [class*=MuiButton-root-Form-darkSubmitButton]').innerHTML = 'Download <span class="cta-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></span>';

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
    document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1694603081/drata/6012/select-focus.svg" as="image">`
    );
  }

  appendFavicon();

  // Create input label with placeholder text
  function appendInputLabel() {
    document.querySelectorAll('.spz-25003 [class*=MuiGrid-root-Section-gridItem]:last-child > [class*=Form-root] [class*=Form-formOuterContainer] form.hs-form .hs-input').forEach(function (el) {
      const label = document.createElement("label");
      const oldLabel = el.closest('.field').querySelector('label[id]').textContent;
      console.log(oldLabel);
      label.innerHTML = oldLabel || el.placeholder;
      // if (!el.hasAttribute('type') && el.options.length > 0) {
      //   label.innerHTML = el.options[0].text;
      // }
      label.setAttribute('for', el.id);
      label.classList.add('hs-label-spz');
      if (label.innerHTML != '' && !el.closest('.field').querySelector('.input label.hs-label-spz')) {
        el.parentNode.insertBefore(label, el.nextSibling);
      }
    });
  }

  // On input focus add class on closest parent .field class
  function focusFields() {
    document.querySelectorAll('.spz-25003 [class*=MuiGrid-root-Section-gridItem]:last-child > [class*=Form-root] [class*=Form-formOuterContainer] .hs-input').forEach(function (el) {
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
    if (window.location.href.indexOf('https://drata.com/resources/complete-guide-risk-management') > -1) {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true) && window.innerWidth > 1024) {
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
    if (document.body.classList.contains('spz-25003')) {
      document.body.classList.remove('spz-25003');
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
