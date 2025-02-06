if (location.href.indexOf('/signup/maxio-billing-sandbox') > -1) {
  createTest();
}

function createTest() {
  var mainbodyInterval = setInterval(function () {
    var mainbodyEle = document.querySelector('body');
    if (mainbodyEle) {
      clearInterval(mainbodyInterval);
      mainbodyEle.classList.add('spz_14001');

      waitForElm('.spz_14001 form#signup-form input#signup_cro_primary').then(function (cro_primary) {
        if (document.querySelectorAll('.spz_14001 .spz_form_title').length == 0) {
          document.querySelector('.spz_14001 form#signup-form').insertAdjacentHTML('beforebegin', '<div class="spz_form_title">Maxio Billing Sandbox</div>');
        }
      });
    }
  });
}

function hiddenValue() {
  var spz_cro_Interval = setInterval(function () {
    var cro_primary = document.querySelector('form#pardot-form .form-field.cro_primary input');
    if (cro_primary) {
      clearInterval(spz_cro_Interval);
      var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
      cro_primary.value = ExistingHiddenFieldValue;
    }
  });
}

function cookieValue(currentHiddenFieldName, currentHiddenFieldValue) {
  var ExistingHiddenFieldName = getCookie('HiddenFieldName');
  var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

  if (!ExistingHiddenFieldName) {
    setCookie('HiddenFieldName', currentHiddenFieldName, 1);
    setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
  } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
    setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
    setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
  }
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=maxio.com;";
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

// Delete cookie
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=maxio.com;';
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