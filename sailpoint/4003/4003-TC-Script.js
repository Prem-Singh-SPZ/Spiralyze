(function () {
  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!document.body.classList.contains('SPZ_4003_TC')) {
          removeSpecificCookieValue('SPZ_4003', 'SPZ_4003_variant');
          document.body.classList.add('SPZ_4003_TC');
          hiddenValue('SPZ_4003', 'SPZ_4003_truecontrol');
          waitForElm('.SPZ_4003_TC #mktoForm_1016.mktoForm .mktoFormRow input').then(() => {

          });
        } else {
          if (document.body.classList.contains('SPZ_4003_TC')) {
            removeSpecificCookieValue('SPZ_4003', 'SPZ_4003_variant');
            hiddenValue('SPZ_4003', 'SPZ_4003_truecontrol');
            setHiddenFieldValue();
          }
        }
      }
    });
  }

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.SPZ_4003_TC')) {
        document.body.classList.remove("SPZ_4003_TC");
      }
    }, 2000);
  }

  function removeSpecificCookieValue(targetName, targetValue) {
    ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
      var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
      setCookie(key, values || '', 1);
    });
  }

  // Do not touch below hidden field code for any Experiment Start
  function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldName', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
    }

    setHiddenFieldValue();
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
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
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
  // Do not touch below hidden field code for any Experiment over

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


  // List of URLs
  const urls = [
    "https://www.sailpoint.com/identity-library/identity-governance-administration",
    "https://www.sailpoint.com/identity-library/dora-compliance",
    "https://www.sailpoint.com/identity-library/iga-gartner",
    "https://www.sailpoint.com/identity-library/identity-first-security"
  ];

  window.addEventListener("locationchange", function () {
    const url = getBaseUrl(location.href);
    urlCheck(url);
    if (document.querySelector('.SPZ_7001_TC')) {
      document.body.classList.remove("SPZ_7001_TC");
    }
  });
  let url = getBaseUrl(location.href);
  urlCheck(url);

  function urlCheck(url) {
    if (urls.includes(url)) {
      createTest();
    } else {
      removeTest();
    }
  }

  function getBaseUrl(url) {
    return url.split('?')[0];
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
      observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
    });
  }
})();