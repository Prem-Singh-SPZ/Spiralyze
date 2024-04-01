let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        if (!body.classList.contains('spz-8005')) {
            body.classList.add('spz-8005');

            waitForElm('.spz-8005 .gated-content__top .gated-content__banner').then(function () {

                //Form internal code
                waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                    formModify();
                    setHiddenFields();
                });

                /*Truecontrolclass*/
                var BodyClasses = {
                    "delivering-on-the-promise-of-100-legacy-vpn-retirement": "resources_whitepapers",
                    "why-you-should-and-how-you-can-move-away-from-existing-dlp-programs": "resources_whitepapers",
                    "ebooks/the-6-most-compelling-use-cases-for-complete-legacy-vpn-replacement": "spz-mos",
                    "ebooks/security-service-edge-sse-for-dummies": "spz-cur",
                    "ebooks/modern-data-loss-prevention-dlp-for-dummies": "spz-str"

                };
                var currentUrl = window.location.href;
                for (var key in BodyClasses) {
                    if (currentUrl.includes(key)) {
                        body.classList.add(BodyClasses[key]);
                    }
                }

                // Right section content relocation
                document.querySelector('.gated-content__container .gated-content__right').insertAdjacentElement('afterbegin', document.querySelector('.gated-content__top .breadcrumbs'));
                document.querySelector('.gated-content__container .gated-content__right').insertAdjacentElement('afterbegin', document.querySelector('#wrapper .header.has-promo-banner'));
                document.querySelector('.gated-content__container .gated-content__left').insertAdjacentElement('afterbegin', document.querySelector('.gated-content__top .gated-content__banner'));
                document.querySelector('.gated-content__container .gated-content__left').insertAdjacentElement('beforeend', document.querySelector('#components__content .related-resources-cards'));

                //Content update
            });
        }

    }
});

// Generic Code
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
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

function formModify() {
    // Add class in mktoFormRow using count
    var parentDiv = document.querySelector('.spz-8005 .gated-content__container .mktoForm');
    var childElements = parentDiv.children;
    for (var i = 0; i < childElements.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        childElements[i].classList.add(dynamicClass);
    }
    /*formtotles*/
    var formDiv = document.querySelector('.spz-8005 .gated-content__container .mktoForm');
    var sub_heading = document.querySelector(".spz-8005 .gated-content__banner .gated-content__type");
    var sub_heading_textContent = sub_heading.textContent || sub_heading.innerText;
    if (sub_heading_textContent == 'eBooks') {
        var processedText = sub_heading_textContent.replace('eBooks', 'ebook');
    } else if (sub_heading_textContent == 'eBook') {
        var processedText = sub_heading_textContent.replace('eBook', 'ebook');
    } else {
        var processedText = sub_heading_textContent.replace('White Papers', 'White Paper');
    }

    // Form Extra Titles

    waitForElm('#mktoForm_8949').then(function () {
        if (formDiv && document.querySelectorAll('.form_title').length == 0) {
            formDiv.insertAdjacentHTML('beforebegin', `<div class="frm-logo"><h2 class="form_title">Download ` + processedText + `</h2></div>`);
        }
        // form CTA Update
        var form_button = setInterval(() => {
            var textChng = document.querySelector('.spz-8005 .gated-content__container .mktoForm .mktoButtonRow .mktoButton');
            if (textChng) {
                textChng.innerText = 'Instant access';
                clearInterval(form_button);
            }
        }, 100);

        // Updating Form Labels
        document.querySelector('#LblFirstName').textContent = "First Name";
        document.querySelector('#LblLastName').textContent = "Last Name";
        document.querySelector('#LblEmail').textContent = "Business Email";
        document.querySelector('#LblCompany').textContent = "Company";
        document.querySelector('#LblTitle').textContent = "Job Title";
        document.querySelector('#LblPhone').textContent = "Phone";
        document.querySelector('#Country option:first-child').textContent = "";
        document.querySelector('#LblCountry').textContent = "Country";

        // Change Field Position
        var email_field = document.querySelector('.spz-8005 .gated-content__container .mktoForm .mktoFormRow.field-3');
        var lastname_field = document.querySelector('.spz-8005 .gated-content__container .mktoForm .mktoFormRow.field-5');
        lastname_field.after(email_field);
    });


    var zip_row = document.createElement("div");
    zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
    zip_row.classList.add('mktoFormRow');
    zip_row.classList.add('mktoZipRow');

    var extraRow = document.querySelectorAll(".spz-8005 .gated-content__container .mktoForm .mktoFormRow")[7];
    insertAfter(extraRow, zip_row);

    const zip_row_old = document.querySelector(".mktoPlaceholderPostalCode");
    const zip_row_new = document.querySelector(".mktoZipRow");
    zip_row_new.appendChild(zip_row_old);

    // form state
    var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select';

    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);

    var eventList = ["blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('filled');
                }
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);
}

function setHiddenFields() {
    waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#8004_SPZ_Variant_1") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#8004_SPZ_Variant_1');
            }
        }, 100);
    });
}