(function () {
  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('SPZ-2020')) {
          body.classList.add('SPZ-2020');
          removeSpecificCookieValue('SPZ-2020', 'SPZ_2020_truecontrol');
          hiddenValue('SPZ-2020', 'SPZ_2020_variant');         

          // Track session count
          function updateSessionCount() {
            let sessionCount = parseInt(getCookie("spz_session_count") || "0", 10);
            sessionCount++;
            console.log("Session Count: ", sessionCount);
            setCookie("spz_session_count", sessionCount, 7); // cookie lasts 7 days
            return sessionCount;
          }

          // Check if we should show CTA
          function shouldAddCTA() {
            const sessionCount = updateSessionCount();
            console.log("Current Session Count: ", sessionCount);
            const alreadyTagged = localStorage.getItem("spz_return_user");
            return sessionCount > 2 && !alreadyTagged;
          }

          console.log(shouldAddCTA());
          // Add CTA class if eligible
          if (shouldAddCTA()) {
            waitForElm('.hero--homepage .hero__buttons').then(() => {
              const hero = document.querySelector('.SPZ-2020 .hero--homepage');
              if (!hero.classList.contains('spz_high_intent_CTA')) {
                hero.classList.add('spz_high_intent_CTA');
                localStorage.setItem("spz_return_user", "true");
                document.querySelector('.SPZ-2020 .hero--homepage .hero__buttons').insertAdjacentHTML("afterend", `<div class="high_intent_CTA">
                  <a class="btn btn--blue-alt" href="/contact-us">Contact us</button>
                  <a class="btn btn--arrow-alt" href="/demo">Get a demo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 11" class="aspect-[16/11] w-4"><path fill="currentColor" d="M15.759 4.726 11.49.252a.787.787 0 0 0-1.155 0 .893.893 0 0 0 0 1.216l2.865 3.003H.81a.862.862 0 0 0 0 1.72h12.393L10.343 9.2a.893.893 0 0 0 0 1.216.789.789 0 0 0 1.154 0l4.268-4.474a.894.894 0 0 0-.006-1.215Z"></path></svg>
                  </a>
                </div>`);

                waitForElm('nav.navigation .btn.btn--outline').then(() => {
                  document.querySelector('.SPZ-2020 .hero--homepage .high_intent_CTA .btn--blue-alt')?.addEventListener('click', function (event) {
                    event.preventDefault();
                    document.querySelector('nav.navigation .btn.btn--outline')?.click();
                  });
                });
              }
            });
          }
        } else {
          if (body.classList.contains('SPZ-2020')) {
            removeSpecificCookieValue('SPZ-2020', 'SPZ_2020_truecontrol');
            hiddenValue('SPZ-2020', 'SPZ_2020_variant');
          }
        }
      }
    });
  }

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.SPZ-2020')) {
        document.body.classList.remove("SPZ-2020");
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

  waitForElm('.SPZ-2020 #mktoForm_1017.mktoForm .mktoButton').then(() => {
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