let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        if (!body.classList.contains('spz-8001')) {
            body.classList.add('spz-8001');

            waitForElm('body .gated-content__top .gated-content__banner').then(function () {
                var heading = document.querySelector("body .gated-content__banner .page-intro__resource-title").textContent;

                document.querySelector('body .gated-content__container .gated-content__left').insertAdjacentHTML("afterbegin", `<h2 class="form-content-heading">` + heading + `</h2>`);

                var hero_book_image_html = `<div class="gated-content__image">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/whitepaper_image_desktop.webp" class="hero-book-img" alt="`+ heading + `" title="` + heading + `">
        </div>`;

                document.querySelector('body .gated-content__container .gated-content__left .rte').insertAdjacentHTML("afterbegin", hero_book_image_html);
                document.querySelector('body .gated-content.js-hero-banner').insertAdjacentHTML("beforeend", hero_book_image_html);

                var BodyClasses = {
                    "delivering-on-the-promise-of-100-legacy-vpn-retirement": "resources_whitepapers",
                    "why-you-should-and-how-you-can-move-away-from-existing-dlp-programs": "resources_whitepapers",
                };
                var currentUrl = window.location.href;
                for (var key in BodyClasses) {
                    if (currentUrl.includes(key)) {
                        body.classList.add(BodyClasses[key]);
                    }
                }

                if (currentUrl.includes('why-you-should-and-how-you-can-move-away-from-existing-dlp-programs')) {
                    document.querySelector('.gated-content__right').classList.add('arrow-position');
                }

                var imageUrls = {
                    "the-6-most-compelling-use-cases-for-complete-legacy-vpn-replacement": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/the_6_most_compelling_image.webp",
                    "why-you-should-and-how-you-can-move-away-from-existing-dlp-programs": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/why_you_should_image.webp",
                    "modern-data-loss-prevention-dlp-for-dummies": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/modern_data_loss_image.webp",
                    "security-service-edge-sse-for-dummies": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/security_service_image.webp"
                };
                for (var key in imageUrls) {
                    if (currentUrl.includes(key)) {
                        var imageUrl = imageUrls[key];
                        document.querySelectorAll('body img.hero-book-img').forEach(element => {
                            element.src = imageUrl;
                        });
                    }
                }

                //Form internal code
                waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                    formModify();
                    setHiddenFields();
                });
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
    var parentDiv = document.querySelector('body .gated-content__container .mktoForm');
    var childElements = parentDiv.children;
    for (var i = 0; i < childElements.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        childElements[i].classList.add(dynamicClass);
    }

    var formDiv = document.querySelector('body .gated-content__container .mktoForm');
    var sub_heading = document.querySelector("body .gated-content__banner .gated-content__type");
    var sub_heading_textContent = sub_heading.textContent || sub_heading.innerText;

    if (sub_heading_textContent == 'eBooks' || sub_heading_textContent == 'eBook') {
        // var processedText = sub_heading_textContent.replace('s', '');
        var processedText = 'ebook';
    }
    else if (sub_heading_textContent == 'White Papers') {
        var processedText = 'whitepaper';
    }
    else {
        var processedText = sub_heading_textContent;
    }

    //Hiding extra fields
    document.querySelector('.mktoFormRow.field-7').classList.add('spz-hidden');
    document.querySelector('.mktoFormRow.field-8').classList.add('spz-hidden');
    document.querySelector('.mktoFormRow.field-9').classList.add('spz-hidden');
   
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<h2 class="form_title">Download ` + processedText + `</h2>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
        var textChng = document.querySelector('body .gated-content__container .mktoForm .mktoButtonRow .mktoButton');
        if (textChng) {
            textChng.innerText = 'Download Now';
            clearInterval(form_button);
        }
    }, 100);

    // Updating Form Labels
    document.querySelector('#LblFirstName').textContent = "First Name";
    document.querySelector('#LblLastName').textContent = "Last Name";
    document.querySelector('#LblEmail').textContent = "Business Email";
    document.querySelector('#LblCompany').textContent = "Company";
    document.querySelector('#LblTitle').textContent = "Job title";
    document.querySelector('#LblPhone').textContent = "Phone";
    document.querySelector('#Country option:first-child').textContent = "";
    document.querySelector('#LblCountry').textContent = "Country";

    // Change Field Position
    var email_field = document.querySelector('body .gated-content__container .mktoForm .mktoFormRow.field-3');
    var lastname_field = document.querySelector('body .gated-content__container .mktoForm .mktoFormRow.field-5');
    lastname_field.after(email_field);

    var zip_row = document.createElement("div");
    zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
    zip_row.classList.add('mktoFormRow');
    zip_row.classList.add('mktoZipRow');

    var extraRow = document.querySelectorAll("body .gated-content__container .mktoForm .mktoFormRow")[7];
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
        checkValidFields();

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
        checkValidFields();
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
        checkValidFields();

    }, true);
}

function checkValidFields() {
    let validFields = document.querySelectorAll('.mktoRequiredField.filled').length;
    if (validFields >= 4) {
        document.querySelectorAll('.spz-hidden').forEach(function (elem) {
            elem.classList.remove('spz-hidden');
        })

        document.querySelector('.gated-content__form.js-gated-form').classList.add('spz-full-form');
    }
}

function setHiddenFields() {
    waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#8003_spz_variant") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#8003_spz_variant');
            }
        }, 100);
    });
}