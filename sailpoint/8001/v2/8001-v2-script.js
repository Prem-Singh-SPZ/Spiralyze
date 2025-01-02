//inject css code for the test with id 'spz-8001' and not to repeat every time
if (!document.getElementById('spz-8001')) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var css = `body.spz-8001 #page-container .page-transition main > .hero {
  background: linear-gradient(91deg, rgba(84, 192, 232, 0.2) 45.76%, rgba(84, 192, 232, 0.5) 78.55%), #fff;
}
body.spz-8001 #page-container .page-transition main > .hero .hero__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 16px;
}
@media (max-width: 767.98px) {
  body.spz-8001 #page-container .page-transition main > .hero .hero__container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}
body.spz-8001 #page-container .page-transition main > .hero .hero__container .hero__content-wrap {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  padding: 0;
  margin: 0;
}
body.spz-8001 #page-container .page-transition main > .hero .hero__container .hero__content-wrap .hero__eyebrow {
  color: #415364;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
body.spz-8001 #page-container .page-transition main > .hero .hero__container .hero__content-wrap .hero__heading {
  color: #0033a1;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
}
body.spz-8001 #page-container .page-transition main > .hero .hero__container .hero__content-wrap .hero__content {
  color: #415364;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 16px;
}
body.spz-8001 #page-container .page-transition main > .hero .hero__container .hero__image-wrapper {
  max-width: 374px;
}
body.spz-8001 #page-container .page-transition main > #product-features {
  display: none !important;
}
body.spz-8001 #page-container .page-transition main > #product-features + .filter-element {
  display: none;
}
body.spz-8001 #page-container .page-transition main #contact-us {
  background: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/8001/bg_image_3.webp") no-repeat top left;
  background-size: cover;
  clip-path: none !important;
  padding: 0 !important;
  scroll-margin-top: 0;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:first-child {
  display: none;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child {
  width: 100%;
  max-width: 640px;
  margin: 80px auto;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner {
  max-width: 640px;
  padding: 40px 48px;
  border-radius: 16px;
  background: linear-gradient(144deg, rgba(84, 192, 232, 0.5) 12.96%, rgba(84, 192, 232, 0.2) 77.09%), #fff;
}
@media (max-width: 767.98px) {
  body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner {
    padding: 40px 16px;
  }
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .spz-form-title-wrapper {
  margin: 0 0 13px;
  position: relative;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .spz-form-title-wrapper .f-title {
  color: #0033a1;
  text-align: center;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin: 0 0 16px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .spz-form-title-wrapper .f-desc {
  color: #415364;
  text-align: center;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap {
  min-height: auto;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100% !important;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow {
  width: 100%;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_FirstName, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_LastName, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Company, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Title, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Phone, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Number_of_Employees__c, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Country, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Country + .mktoFormRow {
  width: calc(50% - 12px);
}
@media screen and (max-width: 767.98px) {
  body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_FirstName, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_LastName, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Company, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Title, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Phone, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Number_of_Employees__c, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Country, body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow.row_Country + .mktoFormRow {
    width: 100%;
  }
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldDescriptor.mktoFormCol {
  margin-bottom: 0 !important;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap > .mktoLabel {
  color: #415364 !important;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 0.5px;
  height: initial;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap > .mktoLabel .mktoAsterix {
  color: #c02b0a !important;
  margin-left: 3.5px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap .select-wrapper {
  margin: 0 !important;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap .select-dropdown {
  top: 28px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap .mktoField:not([type=checkbox]) {
  border-radius: 4px;
  border: 1px solid #dae1e9;
  background: #fff;
  height: 56px;
  margin-bottom: 13px !important;
  outline: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  padding: 14px 16px;
  color: #415364;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  width: 100% !important;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap .mktoField:not([type=checkbox]):hover {
  border-color: #415364;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap .mktoField:not([type=checkbox]):focus {
  border-color: #0071ce;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap textarea {
  overflow: auto;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap .mktoError {
  bottom: -4px !important;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap .mktoError .mktoErrorMsg {
  color: #e6241e !important;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  margin-top: 2px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoFormRow .mktoFieldWrap:has(.mktoError:not([style*="display: none"])) .mktoField:not([type=checkbox]) {
  border-color: #e6241e;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoCheckboxList {
  margin-top: -3px;
  margin-bottom: 23px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoCheckboxList input.mktoField {
  width: 17px;
  height: 16px;
  outline: none;
  border-radius: 0;
  margin-top: 1px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoCheckboxList label {
  color: #415364 !important;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  padding-left: 12px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoCheckboxList label a {
  color: #415364;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-decoration-line: underline;
  text-decoration-style: solid;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoCheckboxList label a:hover {
  text-decoration: none;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoCaptchaDisclaimer {
  display: none !important;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoButtonRow {
  width: 100%;
  text-align: center;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoButtonRow .mktoButtonWrap .mktoButton {
  border-radius: 4px;
  background: #cc27b0;
  width: 274px;
  height: 48px;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
}
@media (max-width: 767.98px) {
  body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoButtonRow .mktoButtonWrap .mktoButton {
    width: 100%;
  }
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mkto-wrap .mktoForm .mktoButtonRow .mktoButtonWrap .mktoButton:hover {
  border: 1px solid var(--Border, rgba(255, 255, 255, 0));
  background: #b50d98;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .disclaimer,
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mktoCaptchaDisclaimer {
  color: #415364;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .disclaimer a,
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mktoCaptchaDisclaimer a {
  color: #415364;
  font-family: var(--font-poppins), Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-decoration-line: underline;
  text-decoration-style: solid;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .disclaimer a:hover,
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mktoCaptchaDisclaimer a:hover {
  text-decoration: none;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .disclaimer {
  margin-bottom: 12px;
  margin-top: 23.5px;
}
body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mktoCaptchaDisclaimer {
  max-width: 70%;
}
@media (max-width: 600.98px) {
  body.spz-8001 #page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner .mktoCaptchaDisclaimer {
    max-width: 100%;
  }
}`;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'spz-8001';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

function createTest() {
    document.body.classList.add('spz-8001');
    waitForElm('#contact-us .mktoForm input').then(function (elm) {
        formModify();
    });
}

function formModify() {
    if (document.querySelector('#page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner') && !document.querySelector('.spz-form-title-wrapper')) {
        document.querySelector('#page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner').insertAdjacentHTML('afterbegin', `<div class="spz-form-title-wrapper"><h6 class="f-title">See how SailPoint's identity security platform works</h6></div>`);
    }

    document.querySelectorAll('#mktoForm_1018.mktoForm .mktoFormRow').forEach(function (elm) {
        if (elm.querySelector('.mktoField[name]:not([type="hidden"]):not([type="checkbox"])')) {
            elm.classList.add('row_' + elm.querySelector('.mktoField').getAttribute('name'));
        }
    });

    document.querySelector('.row_FirstName').insertAdjacentElement('beforebegin', document.querySelector('.row_Email'));
    document.querySelector('.mkto-wrap .mktoForm .mktoButtonRow .mktoButtonWrap .mktoButton').textContent = 'Unlock all product tours';

    waitForElm('#contact-us .mktoForm .mktoCaptchaDisclaimer').then(function (elm) {
        if (document.querySelectorAll('.page-transition main #contact-us .row__inner > .column:last-child .column__inner > .mktoCaptchaDisclaimer').length === 0) {
            document.querySelector('.page-transition main #contact-us .row__inner > .column:last-child .column__inner .disclaimer').insertAdjacentHTML('afterend', document.querySelector('.mkto-wrap .mktoForm .mktoCaptchaDisclaimer').outerHTML);
        }

        document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblNumber_of_Employees__c').innerHTML = '<div class="mktoAsterix">*</div>Number of employees';
        document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblCountry').innerHTML = '<div class="mktoAsterix">*</div>Country';
        document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblcontactFormComments').innerHTML = `<div class="mktoAsterix">*</div>I'd like to discuss`;
    });

    checkStateField();

    //on change of country field change state field to select
    document.querySelector('.mktoForm #Country').addEventListener('change', function () {
        checkStateField();
    });
}

function checkStateField() {
    waitForElm('.mktoForm #LblState').then(function (elm) {
        let stateLabel = setInterval(() => {
            if (document.querySelector('.mktoForm #LblState')) {
                document.querySelector('.mktoForm #LblState').innerHTML = '<div class="mktoAsterix">*</div>State';
                if (document.querySelector('.mkto-wrap .mktoForm .mktoFormRow.full-width')) {
                    document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblCountry').closest('.mktoFormRow').classList.remove('full-width');
                }
            }
            else {
                document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblCountry').closest('.mktoFormRow').classList.add('full-width');
            }
        }, 100);

        setTimeout(() => {
            clearInterval(stateLabel);
        }, 5000);
    });
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
