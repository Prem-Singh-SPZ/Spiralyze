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
      }, 100);
      setTimeout(() => {
        clearInterval(addField);
      }, 1000);
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
          <input class="spz-email" type="email" placeholder="Business email">
  
          <div class="mktoError">
            <div class="mktoErrorMsg">Must be valid email. <span class="mktoErrorDetail">example@yourdomain.com</span></div>
          </div>
        </div>
        <button type="submit" class="get-started-cta btn">Get Started</button>
      </div>
    </form>
  </div>`
    );
  }
}

//All click events
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("header__get-started-button")) {
    let emailValue =
      this.document.querySelector(".spz-email").value ||
      this.document.querySelector(".spz-email.mobile").value;
    setCookieForEmail("userEmailSPZ", emailValue);
  }
});

//on focus of .spz-email addClass to .header__get-started
waitForElm(".spz-email").then(function (elm) {
  document.querySelectorAll(".spz-email").forEach((element) => {
    element.addEventListener("focus", function (event) {
      element.closest(".header__get-started").classList.add("i-focused");
    });

    element.addEventListener("blur", function (event) {
      element.closest(".header__get-started").classList.remove("i-focused");
    });

    // On enter key pressed in 'spz-email' field click on 'header__get-started-button'
    element.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".header__get-started-button").click();
      }

      validateEmailField(false);
    });
  });

  // Validate email input present in '.hero-section-CTA' on '.get-started-cta' click
  document
    .querySelector(".get-started-cta")
    .addEventListener("click", function (e) {
      e.preventDefault();
      validateEmailField();
    });
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
      location.href = "https://www.netskope.com/get-started";
    }
    return true;
  }
}

// Email validation to block email domains like gmail, yahoo, etc.\
function validateEmail(email) {
  var emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const disallowDomains = [
    "gmail",
    "yahoo",
    "hotmail",
    "outlook",
    "aol",
    "icloud",
    "msn",
    "live",
    "me",
    "inbox",
    "zoho",
    "yandex",
    "protonmail",
    "gmx",
    "mail",
    "aol",
    "icloud",
    "msn",
    "live",
    "me",
    "inbox",
    "zoho",
    "yandex",
    "protonmail",
    "gmx",
    "mail",
    "test",
    "sample",
  ];
  const domain = email.split("@")[1];
  if (
    emailRegex.test(email) &&
    !disallowDomains.includes(domain.split(".")[0])
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
