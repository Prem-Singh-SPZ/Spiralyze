(function () {
  function createTest() {
    document.body.classList.add('spz-8001');
    waitForElm('.resource-form-row .mktoForm#mktoForm_1016 input').then((elm) => {

      //check if form is already submitted then hide the form and show the content
      if (getCookie('spz_8001_form_submit') === 'true') {
        // document.querySelector('.spz-8001 .page-transition #contact-us').classList.add('hidden');
      } else {
        formModify();
      }

      hiddenValue('SPZ_8001', 'SPZ_8001_variant');
    });
  }

  function formModify() {
    // hide section on initial load
    document.querySelector('.spz-8001 .page-transition #product-features').classList.add('spz-sec-hide');
    document.querySelector('.spz-8001 .page-transition main > .filter-element').classList.add('spz-sec-hide');
    document.querySelector('.spz-8001 .page-transition #contact-us').classList.add('spz-sec-hide');
    document.querySelector('.spz-8001 .page-transition main > .resource-form-row').classList.remove('hidden');

    if (document.querySelector('#page-container .page-transition main .resource-form-row .row__inner > .column:last-child .column__inner') && !document.querySelector('.spz-form-title-wrapper')) {
      document.querySelector('#page-container .page-transition main .resource-form-row .row__inner > .column:last-child .column__inner').insertAdjacentHTML('afterbegin', `<div class="spz-form-title-wrapper"><h6 class="f-title">See how SailPoint's identity security platform works</h6></div>`);
    }

    document.querySelectorAll('.mktoForm#mktoForm_1016 .mktoFormRow').forEach(function (elm) {
      if (elm.querySelector('.mktoField[name]:not([type="hidden"]):not([type="checkbox"])')) {
        elm.classList.add('row_' + elm.querySelector('.mktoField').getAttribute('name'));
      }
    });


    waitForElm('.resource-form-row .mktoForm#mktoForm_1016 #LblCountry').then(function (elm) {
      // document.querySelector('.mktoForm#mktoForm_1016 .mktoCheckboxList').closest('.mktoFormRow').classList.add('row_mktoCheckboxList');
      // document.querySelector('.mktoForm#mktoForm_1016 .mktoPlaceholderGlobal_Opt_in__c').closest('.mktoFormRow').classList.add('row_mktoPlaceholderGlobal_Opt_in__c');
      document.querySelector('.mkto-wrap .mktoForm#mktoForm_1016 .mktoButtonRow .mktoButtonWrap .mktoButton').textContent = 'Unlock all product tours';
      document.querySelector('.mkto-wrap .mktoForm#mktoForm_1016 .mktoFormRow #LblTitle').innerHTML = '<div class="mktoAsterix">*</div>Job title';
      document.querySelector('.mkto-wrap .mktoForm#mktoForm_1016 .mktoFormRow #LblCountry').innerHTML = '<div class="mktoAsterix">*</div>Country';
    });

    checkStateField();

    //on change of country field change state field to select
    document.querySelector('.mktoForm#mktoForm_1016 #Country').addEventListener('change', function () {
      checkStateField();
    });

    waitForElm('.spz-8001 .resource-form-row .mkto-wrap.w-full #contact_us_submit').then(() => {
      document.querySelectorAll('.spz-8001 .page-transition main > .spz-sec-hide').forEach(function (elm) {
        elm.classList.remove('spz-sec-hide');
      });
      document.querySelector('.spz-8001 .page-transition main > .resource-form-row').classList.add('spz-sec-hide');

      //on form submit set the cookie  for a year
      setCookie('spz_8001_form_submit', 'true', 365);
    });
  }

  function checkStateField() {
    // waitForElm('.mktoForm#mktoForm_1016 #LblState').then(function (elm) {
    let stateLabel = setInterval(() => {
      if (document.querySelector('.mktoForm#mktoForm_1016 #LblState')) {
        document.querySelector('.mktoForm#mktoForm_1016 #LblState').innerHTML = '<div class="mktoAsterix">*</div>State';
        document.querySelector('.mktoForm#mktoForm_1016 #State').closest('.mktoFormRow').classList.add('row_State');
        // document.querySelector('.mktoForm#mktoForm_1016 .mktoFormRow.row_Phone').classList.add('spz-full-width');
      }
      else {
        if (document.querySelector('.mktoFormRow.row_State')) {
          document.querySelector('.mktoFormRow.row_State').classList.remove('row_State')
        }
      }
    },);

    setTimeout(() => {
      clearInterval(stateLabel);
    }, 2000);
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
    var targetTestURL = '';
    if (window.location.pathname === "/demo/interactive") {
      targetTestURL = window.location.href;
    }
    if (isSameUrl(url, targetTestURL, true)) {
      createTest();
    } else {
      removeTest();
    }
  }

  //Generic code
  function removeTest() {
    if (document.body.classList.contains('spz-8001')) {
      document.body.classList.remove('spz-8001');
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

  // Do not touch below hidden field code for any Experiment Start
  function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName1016');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue1016');

    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldName1016', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue1016', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldName1016', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue1016', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
    }

    let callHF = setInterval(() => {
      setHiddenFieldValue();
    }, 100);

    setTimeout(() => {
      clearInterval(callHF);
    }, 10000);
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function setHiddenFieldValue() {
    var spz_cro_Interval = setInterval(function () {
      var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1016 input[name="intellimize1"]');
      if (intellimize1) {
        clearInterval(spz_cro_Interval);
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue1016');
        //check if hidden field value is empty then only set the value else set the value with , seperated
        if (intellimize1.value == '') {
          intellimize1.value = ExistingHiddenFieldValue;
        }
        else {
          if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
            intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
          }
        }
      }
    });
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('#mktoForm_1016 .mktoButton')) {

      let checkButtonCopy = setInterval(() => {
        if (document.querySelector('.mkto-wrap .mktoForm#mktoForm_1016 .mktoButtonRow .mktoButtonWrap .mktoButton').textContent !== 'Unlock all product tours') {
          document.querySelector('.mkto-wrap .mktoForm#mktoForm_1016 .mktoButtonRow .mktoButtonWrap .mktoButton').textContent = 'Unlock all product tours';
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkButtonCopy);
      }, 2000);

      //inject current time and date in EST timezone into .intellimize2 hidden field
      var d = new Date();
      var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
      var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
      if (int2)
        int2.value = n;
    }
  });
  // Do not touch below hidden field code for any Experiment over
})();