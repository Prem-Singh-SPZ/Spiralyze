function loadTest() {
  // Set test class
  document.body.classList.add("spz-1001");

  if (location.href.includes("/neos")) {
    let element =
      '#___gatsby div[data-testid="hero-banner__container"] .e1i2i95w4';
    waitForElm(element).then(function () {
      let addField = setInterval(() => {
        appendEmailField(element);
      }, 100);
      setTimeout(() => {
        clearInterval(addField);
      }, 1000);
    });
  } else {
    let element =
      '#___gatsby div[data-testid="hero-banner__container"] .elpe6hc1';
    waitForElm(element).then(function () {
      let addField = setInterval(() => {
        appendEmailField(element);
      }, 10);
      setTimeout(() => {
        clearInterval(addField);
      }, 100);
    });
  }
}

function appendEmailField(selector) {
  if (document.querySelectorAll(selector + " .hero-section-CTA").length == 0) {
    document.querySelector(selector).insertAdjacentHTML(
      "beforeend",
      ` <div class="hero-section-CTA">
      <form class="form-spz" id="mktoForm_1001" method="GET">
        <div class="header__get-started">
        <div class="spz-1001-email">
          <input class="spz-email" type="email" placeholder="Email">
  
          <div class="mktoError">
            <div class="mktoErrorMsg">Please complete this required field.</div>
          </div>
        </div>
        <button type="submit" class="get-started-cta css-mqxvzn">Get Started</button>
      </div>
    </form>
  </div>`
    );
  }
}

//All click events
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("get-started-cta")) {
    validateEmailField();
  }
});

// Validate email field
function validateEmailField(redirect = true) {
  // Get email value
  const email = document.querySelector(
    ".hero-section-CTA .form-spz .spz-email"
  );
  // Check if email is valid
  if (!validateEmail(email.value)) {
    // Add class 'input-error' to '.header__get-started' on error
    email.closest(".header__get-started").classList.add("input-error");
    return false;
  } else {
    setCookieForEmail("userEmailSPZ", email.value);
    email.closest(".header__get-started").classList.remove("input-error");
    if (redirect) {
      location.href = "https://assemblysoftware.com/get-a-demo";
    }
    return true;
  }
}

// Email validation to block email domains like gmail, yahoo, etc.\
function validateEmail(email) {
  var emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    emailRegex.test(email)
  ) {
    return true;
  }
  return false;
}

// Generic
history.pushState = (function (f) {
  return function pushState() {
    let ret = f.apply(this, arguments);
    window.dispatchEvent(new Event("pushstate"));
    window.dispatchEvent(new Event("locationchange"));
    return ret;
  };
})(history.pushState);
history.replaceState = (function (f) {
  return function replaceState() {
    let ret = f.apply(this, arguments);
    window.dispatchEvent(new Event("replacestate"));
    window.dispatchEvent(new Event("locationchange"));
    return ret;
  };
})(history.replaceState);

window.addEventListener("popstate", function () {
  window.dispatchEvent(new Event("locationchange"));
});
window.addEventListener("locationchange", function () {
  url = location.href;
  urlCheck(url);
});

let url = location.href;
urlCheck(url);
function urlCheck(url) {
  let testURL = "";
  if (
    window.location.pathname.indexOf("/neos") > -1 ||
    window.location.href == "https://assemblysoftware.com/"
  ) {
    testURL = window.location.href;
  }
  if (isSameUrl(url, testURL, true)) {
    loadTest();
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

function removeTest() {
  document.body.classList.remove("spz-1001");
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

// Add class 'safari' (used for cart scrollbar)
if (
  navigator.userAgent.toLowerCase().indexOf("chrome/") == -1 &&
  navigator.userAgent.toLowerCase().indexOf("safari/") > -1
) {
  document.body.classList.add("safari");
}

// Set a Cookie
function setCookieForEmail(cName, cValue) {
  document.cookie = cName + "=" + cValue + "; path=/";
}

//Get a cookie
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}