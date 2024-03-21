let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        if (!body.classList.contains('spz-8003-v1')) {
            body.classList.add('spz-8003-v1');

            waitForElm('.spz-8003-v1 .gated-content__top .gated-content__banner').then(function () {
                footerFields();
                waitForElm('.spz-8003-v1 .gated-content__content').then(function () { handFields(); });
                waitForElm('.spz-8003-v1 .gated-content__form').then(function () {
                    sucessFields();
                    document.querySelector('.gated-content__right').insertAdjacentHTML('afterbegin', `<div class="progress"> 
                    <div class="progress__bar"></div>
                  </div>`);
                });
                //Form internal code
                waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                    formModify();
                    setHiddenFields();
                });
                /*Right section */
                var heading = document.querySelector(".spz-8003-v1 .gated-content__banner .page-intro__resource-title").textContent; document.querySelector('.spz-8003-v1 .gated-content__container .gated-content__left').insertAdjacentHTML("afterbegin", `<div id="ninnerwrapper"><h2 class="form-content-heading">` + heading + `</h2></div>`);
                document.querySelectorAll('.spz-8003-v1 .gated-content__container .rte').forEach((item) => {
                    document.querySelector('.form-content-heading').insertAdjacentElement('afterend', item);
                });
                document.querySelectorAll('.spz-8003-v1 .gated-content__container .gated-content__content').forEach((item) => {
                    document.querySelector('.rte').insertAdjacentElement('afterend', item);
                });

                /*Navbar image*/
                document.querySelector(".header__top-menu-link-language img").src = "//res.cloudinary.com/spiralyze/image/upload/v1708355794/netskope/8004/Chevron.svg";
                document.querySelector(".header__top-menu-link--search-button img").src = "//res.cloudinary.com/spiralyze/image/upload/v1708360616/netskope/8004/search.svg";
                document.querySelector(".header__top-menu-link--search-mobile .header__top-menu-link--search-button img").src = "//res.cloudinary.com/spiralyze/image/upload/v1708360616/netskope/8004/search.svg";
                document.querySelector(".header__mobile-toggle img").src = "//res.cloudinary.com/spiralyze/image/upload/v1708374028/netskope/8004/menu.svg";
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
                var BodysClasses = {
                    "why-you-should-and-how-you-can-move-away-from-existing-dlp-programs": "spz-disp",
                };
                var currentsUrl = window.location.href;
                for (var key in BodysClasses) {
                    if (currentsUrl.includes(key)) {
                        body.classList.add(BodysClasses[key]);
                    }
                }

            });
        }

    }
});
function footerFields() {
    waitForElm('.spz-8003-v1 footer.v3-footer.netskope-footer').then(function () {
        var footer_html = `<div class="spz-Nfooter"><div class="footer-container">\
        <div class="footer-Nlinks">\
            <div class="ncopyright"> © 2024, All rights reserved.</div>\
            <div class="sec-policy"><div class="sec-policyinner"><div class="p-nanchor"><a href="https://www.netskope.com/privacy-policy">Privacy Policy</a></div>\
            <div class="p-nanchor"><a href="https://www.netskope.com/vulnerability-disclosure-policy">Vulnerability Disclosure Policy</a></div>\
            <div class="p-nanchor"><a href="https://www.netskope.com/terms-of-use">Terms of Use</a></div>\
            <div class="p-nanchor"><a href="https://www.netskope.com/netskope-technical-support">Support</a></div></div></div>\
            <div class="socialicon">\
            <div class="nmobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1706077616/netskope/9001/Call-icon.svg" alt="phone"> USA: +1 (800) 979-6988</div>\
            <div class="socialicon-warp"><div class="nscos"><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.netskope.com/resources/white-papers/delivering-on-the-promise-of-100-legacy-vpn-retirement"><img src="//res.cloudinary.com/spiralyze/image/upload/v1710782028/netskope/8003/facebook.svg" class="no-lazyload social-icons__ficon--off" alt="facebook icon"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1710782028/netskope/8003/facebook_1.svg" class="no-lazyload social-icons__ficon--on" alt="facebook icon"> </a></div><div class="nscos"><a href="https://twitter.com/share?text= Delivering on the Promise of 100% Legacy VPN Retirement @Netskope&amp;url=https%3A%2F%2Fwww.netskope.com%2Fresources%2Fwhite-papers%2Fdelivering-on-the-promise-of-100-legacy-vpn-retirement"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1710782028/netskope/8003/twitter.svg" class="no-lazyload social-icons__ticon--off" alt="twitter icon"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1710782028/netskope/8003/twitter_1.svg" class="no-lazyload social-icons__ticon--on" alt="twitter icon"> </a></div></div><div class="nscos"><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.netskope.com/resources/white-papers/delivering-on-the-promise-of-100-legacy-vpn-retirement"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1710782028/netskope/8003/linkedin.svg" class="no-lazyload social-icons__licon--off" alt="linkedin icon"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1710782028/netskope/8003/linkedin_1.svg" class="no-lazyload social-icons__licon--on" alt="linkedin icon"> </a></div>\
                </div></div>\
               <div class="footer-Nlinks tab-mob">\
                <div class="socialicon">\
                    <div class="nmobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1706077616/netskope/9001/Call-icon.svg" alt="phone"> USA: +1 (800) 979-6988</div>\
                    <div class="socialicon-warp"><div class="nscos"><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.netskope.com/resources/white-papers/delivering-on-the-promise-of-100-legacy-vpn-retirement"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708096753/netskope/8004/facebook.svg" class="no-lazyload social-icons__ficon--off" alt="facebook icon"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708369722/netskope/8004/Facebook-icon.svg" class="no-lazyload social-icons__ficon--on" alt="facebook icon"> </a></div>\
                     <div class="nscos"><a href="https://twitter.com/share?text= Delivering on the Promise of 100% Legacy VPN Retirement @Netskope&amp;url=https%3A%2F%2Fwww.netskope.com%2Fresources%2Fwhite-papers%2Fdelivering-on-the-promise-of-100-legacy-vpn-retirement"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708096754/netskope/8004/twitter.svg" class="no-lazyload social-icons__ticon--off" alt="twitter icon"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708370609/netskope/8004/Twitter-icon.svg" class="no-lazyload social-icons__ticon--on" alt="twitter icon"> </a></div>\
                        <div class="nscos"><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.netskope.com/resources/white-papers/delivering-on-the-promise-of-100-legacy-vpn-retirement"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708096753/netskope/8004/linkedin.svg" class="no-lazyload social-icons__licon--off" alt="linkedin icon"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708370608/netskope/8004/Linkedin-icon.svg" class="no-lazyload social-icons__licon--on" alt="linkedin icon"> </a></div>\
                       </div></div>\
                       <div class="copiright">\
                <div class="sec-policy"><div class="sec-policyinner"><div class="p-nanchor"><a href="https://www.netskope.com/privacy-policy">Privacy Policy</a></div>\
                <div class="p-nanchor"><a href="https://www.netskope.com/vulnerability-disclosure-policy">Vulnerability Disclosure Policy</a></div>\
                <div class="p-nanchor"><a href="https://www.netskope.com/terms-of-use">Terms of Use</a></div>\
                <div class="p-nanchor"><a href="https://www.netskope.com/netskope-technical-support">Support</a></div></div>\
                 <div class="ncopyright"> © 2024, All rights reserved.</div>\
                </div>\
                </div></div></div></div>`;
        document.querySelector('.spz-8003-v1 footer.v3-footer.netskope-footer').insertAdjacentHTML("afterbegin", footer_html);
    });
}
function sucessFields() {
    /*sucess setcion*/
    document.querySelectorAll('.spz-8003-v1 .gated-content__content .gated-content__action').forEach((item) => {
        document.querySelector('.spz-8003-v1 .gated-content__form').insertAdjacentElement('beforeend', item);
    });
}
function handFields() {
    /*tag setcion*/
    list = document.querySelectorAll(".gated-content__content .gated-content__label");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add("holder" + (i + 1));
    }
    list = document.querySelectorAll(".gated-content__content .gated-content__tags");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add("holder" + (i + 4));
    }


    //move element .gated-content__label inside sibling .gated-content__tags
    var labels = document.querySelectorAll('.gated-content__content .gated-content__label');
    labels.forEach(function (label) {
        var nextSibling = label.nextElementSibling;
        if (nextSibling && nextSibling.classList.contains('gated-content__tags')) {
            nextSibling.insertAdjacentElement('afterbegin', label);
        }
    });
}
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
    var parentDiv = document.querySelector('.spz-8003-v1 .gated-content__container .mktoForm');
    var childElements = parentDiv.children;
    for (var i = 0; i < childElements.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        childElements[i].classList.add(dynamicClass);
    }
    /*formtotles*/
    var formDiv = document.querySelector('.spz-8003-v1 .gated-content__container .mktoForm');
    var sub_heading = document.querySelector(".spz-8003-v1 .gated-content__banner .gated-content__type");
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
            formDiv.insertAdjacentHTML('beforebegin', `<div class="frm-logo"><h2 class="form_title">Get Gartner report</h2></div>`);
            // formDiv.insertAdjacentHTML('beforebegin', `<div class="frm-logo">\n<div class="frm-logoimgt"><img src="//res.cloudinary.com/spiralyze/image/upload/v1707850827/netskope/8004/Netskope-Logo.svg" alt="Netskope Logo"></div>\n<h2 class="form_title">Download ` + processedText + `</h2></div>`);
        }
        // form CTA Update
        var form_button = setInterval(() => {
            var textChng = document.querySelector('.spz-8003-v1 .gated-content__container .mktoForm .mktoButtonRow .mktoButton');
            if (textChng) {
                textChng.innerText = 'Instant access';
                clearInterval(form_button);
            }
        }, 100);

        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            document.querySelector('body').classList.add('safari');
        }

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
        var email_field = document.querySelector('.spz-8003-v1 .gated-content__container .mktoForm .mktoFormRow.field-3');
        var lastname_field = document.querySelector('.spz-8003-v1 .gated-content__container .mktoForm .mktoFormRow.field-5');
        lastname_field.after(email_field);

        //Hiding extra fields
        document.querySelector('.mktoFormRow.field-7').classList.add('spz-hidden');
        document.querySelector('.mktoFormRow.field-8').classList.add('spz-hidden');
        document.querySelector('.mktoFormRow.field-9').classList.add('spz-hidden');
        document.querySelector('.mktoFormRow.field-10').classList.add('spz-hidden');
        document.querySelector('.mktoFormRow.field-11').classList.add('spz-hidden');
    });


    var zip_row = document.createElement("div");
    zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
    zip_row.classList.add('mktoFormRow');
    zip_row.classList.add('mktoZipRow');

    var extraRow = document.querySelectorAll(".spz-8003-v1 .gated-content__container .mktoForm .mktoFormRow")[7];
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
        document.querySelectorAll('.spz-hidden:not(.field-9):not(.field-10):not(.field-11)').forEach(function (elem) {
            elem.classList.remove('spz-hidden');
        })
        document.querySelector('.gated-content__right').classList.add('spz-partial-form');
    }

    if (validFields >= 6) {
        document.querySelectorAll('.spz-hidden').forEach(function (elem) {
            elem.classList.remove('spz-hidden');
        })
        document.querySelector('.gated-content__right').classList.replace('spz-partial-form', 'spz-full-form');
    }
}

function setHiddenFields() {
    waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#8003_SPZ_Variant_1") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#8003_SPZ_Variant_1');
            }
        }, 100);
    });
}

