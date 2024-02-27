let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    loadTest();
  }
});

function loadTest() {
  // Set test class
  document.body.classList.add('spz-7002');

  waitForElm('.subscribe_form_outer .hs-form.hs-custom-form').then(function (elm) {

  });
}

// Generic
function removeTest() {
  document.body.classList.remove('spz-7002');
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

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
  document.body.classList.add('safari')
}