var url = location.href;
urlCheck(url);

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

window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
});
function urlCheck(url) {
    var allblogsurlstring = "https://proxyclick.com";
    if (window.location.pathname.indexOf("/demo-request") > -1) {
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        createTest6002();
    }
}
/* pageshow */
window.onpageshow = function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if (historyTraversal) {
        window.location.reload();
    }
};


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

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function createTest6002() {
    var bodyInterval = setInterval(function () {
        var bodyElement = document.querySelector('body');
        if (!bodyElement.classList.contains('spz-eptura-6002')) {
            bodyElement.classList.add('spz-eptura-6002');
            clearInterval(bodyInterval);
            formConfig();
        }
    });
}

function formConfig() {
    var mktoFormInterval = setInterval(function () {
        var mktoForm = document.querySelector('form#mktoForm_1002');
        mutationObserver();

        /* Field Hide Checker */
        var firstNameInterval = setInterval(function () {
            var firstName = document.querySelector('#mktoForm_1002 #FirstName');
            if (firstName && firstName.offsetHeight > 0) {
                document.querySelector('#mktoForm_1002').classList.add('showAdditionalFields');
                document.querySelector('body').classList.add('formExpanded');
                firstNameIntervalfn();
            }
            else {
                clearInterval(firstNameInterval);
                document.querySelector('#mktoForm_1002').classList.remove('showAdditionalFields');
                document.querySelector('body').classList.remove('formExpanded');
            }
        });


        if (mktoForm.offsetHeight > 0) {
            clearInterval(mktoFormInterval);
            var inputFields = mktoForm.querySelectorAll('input, select, textarea');
            inputFields.forEach(function (inputField) {
                var fieldType = inputField.getAttribute('type');
                if (fieldType !== 'hidden') {
                    fieldEventsInit(inputField);
                }
            });

            /* Before Form Elements */
            var beforeFormHTML = `
      <div class="logo_image">
        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1701447807/eptura/6001/endorsed_logos_2.svg" alt="Proxyclick Logo">
      </div>
      <div class="form_heading">
        <h3>Get a demo</h3>
      </div>`;
            mktoForm.insertAdjacentHTML('beforebegin', beforeFormHTML);

            var mktoHTML = document.querySelector('.spz-eptura-6002 #mktoForm_1002 .spz_row_Single_Opt_In__c ~ .mktoFormRow');
            var mktobutton = document.querySelector('.spz-eptura-6002 #mktoForm_1002 .mktoButtonRow');
            mktobutton.after(mktoHTML);

            commentFieldInit();

            /* I am selection change event */
            var I_amField = document.querySelector('select#I_am__c');
            I_amField.addEventListener('change', function () {
                var I_amFieldValue = I_amField.value;
                var commentFieldCC = document.querySelector('.spz_row_Lead_Notes__c textarea');

                var commentFieldControl = document.querySelector('.spz_row_Lead_Notes__c');
                if (commentFieldControl && commentFieldControl.querySelector('.spz-anchor') != null) {
                    commentFieldControl.querySelector('.spz-anchor').remove();
                }
                fieldEventsInit(commentFieldCC);

                var LblLead_Notes__c = document.querySelector('label[for="Lead_Notes__c"]').textContent;
                LblLead_Notes__c = LblLead_Notes__c.replace('*', '');
                if (LblLead_Notes__c == 'Additional Comments') {
                    LblLead_Notes__c = 'Comment';
                }
                commentFieldInit(LblLead_Notes__c);

                if (I_amFieldValue == 'Interested in speaking to a sales team representative') {
                    var Solution_Type__c = document.querySelector('select#Solution_Type__c');
                    fieldEventsInit(Solution_Type__c);
                }

            });


            document.querySelector('#mktoForm_1002 .mktoButtonRow button[type="submit"].mktoButton').addEventListener('click', function () {
                setTimeout(() => {
                    if (!document.querySelector('body').classList.contains('formExpanded')) {
                        var eventclick = new Event('focus');
                        var inpEmail = document.querySelector('.mktoEmailField');
                        var inpIam = document.querySelector('#I_am__c');

                        if (inpEmail.value == '') {
                            var eml = MktoForms2.allForms()[0].getFormElem().find("#Email")
                            MktoForms2.allForms()[0].showErrorMessage('Must be valid email. example@yourdomain.com', eml)
                            inpEmail.dispatchEvent(eventclick);
                            inpEmail.closest('.mktoFormCol').classList.add('error')
                        } else {
                            if (inpIam.value == '') {
                                var emlIam = MktoForms2.allForms()[0].getFormElem().find("#I_am__c")
                                MktoForms2.allForms()[0].showErrorMessage('This field is required.', emlIam)
                                inpIam.dispatchEvent(eventclick);
                                inpIam.closest('.mktoFormCol').classList.add('error')
                            }
                        }
                    }
                }, 200)
            });
            labelupdates();
            rightSideContent();

        }
    });
}

function labelupdates() {
    var LblI_am__c = document.querySelector('label[for="I_am__c"]');
    LblI_am__c.textContent = 'I am...*';
}

function rightSideContent() {
    var targetDiv = document.querySelector('.spz-eptura-6002 .body-container-wrapper .body-container .row-number-1 > .row-fluid > .span12 .row-number-3 > .row-fluid > .span4 .hs_cos_wrapper .jenga-c-rich-text');
    var newContentHTML = `
    <p class="contentDescription">Visitor Management Software</p>
    <h4 class="contentHeading">Make the visitor check-in experience 50% faster while improving security. </h4>
    <div class="contentBulletPoints">
      <div class="list-item">
        <h5>Visitor check-in.</h5>
        <p>Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.</p>
      </div>
      <div class="list-item">
        <h5>Security & compliance.</h5>
        <p>Include identity verification, NDAs, safety briefings, or health screens. Log compliance.</p>
      </div>
      <div class="list-item">
        <h5>Integrations.</h5>
        <p>Sync data with internal access and security systems. Automated email or Slack notifications.</p>
      </div>
    </div>
    <div class="linedivider"></div>
    <h4 class="sliderHeading">Visitors, employees, and contractors check in to more than 10,000 locations with Proxyclick.</h4>
    <div class="clientLogoSlider">
      <div class="item airbnb_logo">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1701447767/eptura/6001/airbnb_2.svg" alt="Airbnb Logo">
      </div>
      <div class="item dimension_data_logo">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1701447767/eptura/6001/dimension-data_2.svg" alt="Dimension Data Logo">
      </div>
      <div class="item loreal_logo">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1701447767/eptura/6001/loreal_2.svg" alt="Loreal Logo">
      </div>
      <div class="item pepsico_logo">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1701447767/eptura/6001/pepsico_2.svg" alt="Pepsico Logo">
      </div>
      <div class="item audi_logo">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1701447767/eptura/6001/audi_2.svg" alt="Audi Logo">
      </div>
      <div class="item acer_logo">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1701447767/eptura/6001/acer_2.svg" alt="Acer Logo">
      </div>
    </div>`;
    targetDiv.innerHTML = newContentHTML;
    loadSlider();
}

function loadSlider() {
    var jQuerySlickInterval = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQuerySlickInterval);

            var slickScript = document.createElement('script');
            slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
            slickScript.type = 'text/javascript';
            document.getElementsByTagName('body')[0].appendChild(slickScript);

            var slickLink = document.createElement('link');
            slickLink.rel = 'stylesheet';
            slickLink.type = 'text/css';
            slickLink.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
            document.getElementsByTagName('head')[0].appendChild(slickLink);

            var jQuerySlickInitInterval = setInterval(function () {
                var htmlTag = document.querySelector('html');
                if (typeof jQuery.fn.slick != 'undefined' && !htmlTag.classList.contains('async-hide')) {
                    clearInterval(jQuerySlickInitInterval);
                    jQuery('.clientLogoSlider').slick({
                        dots: false,
                        infinite: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        variableWidth: true,
                        draggable: false,
                        swipe: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        focusOnSelect: false,
                        accessibility: false,
                        touchMove: false,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        pauseOnSwipe: false
                    });
                }
            });
        }
    });
}

function validateField(field) {
    var mktoFormCol = field.closest('.mktoFormCol');
    if (field.value != '') {
        mktoFormCol.classList.remove('error');
        mktoFormCol.classList.add('filled');
        controlErrorCheck(field);
    } else {
        mktoFormCol.classList.remove('filled');
        controlErrorCheck(field);
    }
}

function controlErrorCheck(field) {
    var mktoFormCol = field.closest('.mktoFormCol');
    if (mktoFormCol.querySelector('.mktoFieldWrap .mktoError') && mktoFormCol.querySelector('.mktoFieldWrap .mktoError').offsetHeight > 0) {
        mktoFormCol.classList.add('error');
    } else {
        mktoFormCol.classList.remove('error');
    }
}

function fieldEventsInit(inputField) {
    var mktoFormCol = inputField.closest('.mktoFormCol');

    var fieldName = inputField.getAttribute('name');
    var mktoFormRow = inputField.closest('.mktoFormRow');
    var mktoFormCol = inputField.closest('.mktoFormCol');
    mktoFormCol.classList.add('spz_input_' + fieldName);
    mktoFormRow.classList.add('spz_row_' + fieldName);

    inputField.addEventListener('focus', function () {
        mktoFormCol.classList.add('focus');
        validateField(inputField);
    });
    inputField.addEventListener('blur', function () {
        if (inputField.value == '') {
            mktoFormCol.classList.remove('focus');
        }
        setTimeout(() => {
            controlErrorCheck(inputField);
        }, 500);
    });
    inputField.addEventListener('keyup', function () {
        setTimeout(() => {
            controlErrorCheck(inputField);
        }, 500);
    });
    inputField.addEventListener('change', function () {
        setTimeout(() => {
            controlErrorCheck(inputField);
        }, 1000);
    });
}

function commentFieldInit(labelC = 'Comment') {
    var commentFieldControl = document.querySelector('.spz_input_Lead_Notes__c');

    var commentFieldTrigger = `
  <div class="spz-anchor">
    <a href="javascript:void(0);" class="show-comment-dynamic">
      + ${labelC}
    </a>
  </div>
  `;
    commentFieldControl.insertAdjacentHTML('afterbegin', commentFieldTrigger);

    var showComment = document.querySelector('.show-comment-dynamic');
    showComment.addEventListener('click', function () {
        showComment.closest('.spz_input_Lead_Notes__c').classList.add('showCommentField');
        document.querySelector('#Lead_Notes__c').focus();
    });
}

function mutationObserver() {
    new MutationObserver((mutationList) => {
        for (var mutation of mutationList) {
            if (mutation.target == document.querySelector('.spz_input_Single_Opt_In__c .mktoFieldWrap')) {
                var checkboxError = document.querySelector('.spz_input_Single_Opt_In__c .mktoFieldWrap .mktoError');
                if (checkboxError && checkboxError.offsetHeight > 0) {
                    checkboxError.closest('.spz_input_Single_Opt_In__c').classList.add('spz_error');
                } else {
                    checkboxError.closest('.spz_input_Single_Opt_In__c').classList.remove('spz_error');
                }
            }
        }
    }).observe(document, { subtree: true, childList: true });
}

function firstNameIntervalfn() {
    var firstNameInterval2 = setInterval(function () {
        var firstName = document.querySelector('#mktoForm_1002 .spz_input_FirstName');
        if (firstName && firstName.offsetHeight > 0) {
            clearInterval(firstNameInterval2);
            document.querySelector('#mktoForm_1002').classList.add('showAdditionalFields');
            document.querySelector('body').classList.add('formExpanded');
        }
    });
}