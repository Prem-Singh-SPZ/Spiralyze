(function () {
  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('SPZ-2020-TC')) {
          body.classList.add('SPZ-2020-TC');
          removeSpecificCookieValue('SPZ-2020', 'SPZ_2020_variant');
          hiddenValue('SPZ-2020', 'SPZ_2020_truecontrol');
        } else {
          if (body.classList.contains('SPZ-2020-TC')) {
            removeSpecificCookieValue('SPZ-2020', 'SPZ_2020_variant');
            hiddenValue('SPZ-2020', 'SPZ_2020_truecontrol');
          }
        }
      }
    });
  }

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.SPZ-2020-TC')) {
        document.body.classList.remove("SPZ-2020-TC");
      }
    }, 1000);
  }

  function removeSpecificCookieValue(targetName, targetValue) {
    ['HiddenFieldNameContactUs', 'HiddenFieldValueContactUs'].forEach((key, i) => {
      var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
      setCookie(key, values || '', 1);
    });
  }

  // Do not touch below hidden field code for any Experiment Start
  function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldNameContactUs');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContactUs');

    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldNameContactUs', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueContactUs', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldNameContactUs', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueContactUs', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
      var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1017 input[name="intellimize1"]');
      if (intellimize1) {
        clearInterval(spz_cro_Interval);
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContactUs');
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

    setTimeout(function () {
      clearInterval(spz_cro_Interval);
    }, 15000);
  }

  waitForElm('.SPZ-2020-TC #mktoForm_1017.mktoForm .mktoButton').then(() => {
    document.querySelector('#mktoForm_1017.mktoForm .mktoButton').addEventListener('click', (event) => {
      //inject current time and date in EST timezone into .intellimize2 hidden field
      var d = new Date();
      var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
      var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
      if (int2)
        int2.value = n;
    });
  });
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
  var url = location.href;
  urlCheck(url);
  window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
  });

  function urlCheck(url) {
    let testURL = "";
    if (window.location.pathname === '/') {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      createTest();
    } else if (window.location.pathname === "/contact-us") {
      setHiddenFieldValue();
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