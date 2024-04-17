//append and preload three image in head tag
document.head.insertAdjacentHTML('beforeend', `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8005/bg-card-hover-1440_1.webp" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8005/bg-card-hover-768_1.webp" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8005/bg-card-hover-360_1.webp" as="image">`);


if (!document.body.classList.contains('spz-8005')) {
    document.body.classList.add('spz-8005');

    waitForElm('.spz-8005 .gated-content__top .gated-content__banner').then(function () {

        //Form internal code
        waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
            formModify();
            setHiddenFields();
        });

        /*Truecontrolclass*/
        var BodyClasses = {
            "delivering-on-the-promise-of-100-legacy-vpn-retirement": "resources_whitepapers",
            "why-you-should-and-how-you-can-move-away-from-existing-dlp-programs": "resources_dlp",
            "ebooks/the-6-most-compelling-use-cases-for-complete-legacy-vpn-replacement": "spz-mos",
            "ebooks/security-service-edge-sse-for-dummies": "spz-cur",
            "ebooks/modern-data-loss-prevention-dlp-for-dummies": "spz-str"

        };
        var currentUrl = window.location.href;
        for (var key in BodyClasses) {
            if (currentUrl.includes(key)) {
                document.body.classList.add(BodyClasses[key]);
            }
        }

        // Right section content relocation
        document.querySelector('.gated-content__container .gated-content__right').insertAdjacentElement('afterbegin', document.querySelector('.gated-content__top .breadcrumbs'));
        document.querySelector('.gated-content__container .gated-content__right').insertAdjacentElement('afterbegin', document.querySelector('#wrapper .header.has-promo-banner'));
        document.querySelector('.gated-content__container .gated-content__left').insertAdjacentElement('afterbegin', document.querySelector('.gated-content__top .gated-content__banner'));

        waitForElm('#components__content .related-resources-cards').then(function () {
            let changePosition = setInterval(() => {
                if (document.querySelector('.gated-content__container .gated-content__left .related-resources-cards')) {
                    clearInterval(changePosition);

                    //Footer addition
                    let facebookHref = document.querySelector('.v3-social-icons__icon--facebook a').getAttribute('href');
                    let twitterHref = document.querySelector('.v3-social-icons__icon--twitter a').getAttribute('href');
                    let linkedinHref = document.querySelector('.v3-social-icons__icon--linkedin a').getAttribute('href');

                    document.querySelector('.gated-content__container .gated-content__left').insertAdjacentHTML('beforeend', `<div class="spz-footer-section"><div class="footer-container"><div class="u-footer"><div class="nmobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1706077616/netskope/9001/Call-icon.svg" alt="phone"> USA: +1 (800) 979-6988</div><div class="social-icons"><div class="social-icon icon--facebook"> <a href="` + facebookHref + `"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708099742/netskope/8005/facebook_logo.svg" class="s-icon" alt="facebook icon"></a></div><div class="social-icon icon--twitter"> <a href="` + twitterHref + `"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708099742/netskope/8005/x_logo.svg" class="s-icon" alt="twitter icon"></a></div><div class="social-icon icon--linkedin"> <a href="` + linkedinHref + `"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1708099742/netskope/8005/linkedin_logo.svg" class="s-icon" alt="twitter icon"></a></div></div></div><div class="l-footer"><ul class="navbar-nav"><li class="menu-item"><a href="https://www.netskope.com/privacy-policy">Privacy Policy</a></li><li class="menu-item"><a href="https://www.netskope.com/vulnerability-disclosure-policy">Vulnerability Disclosure Policy</a></li><li class="menu-item"><a href="https://www.netskope.com/terms-of-use">Terms of Use</a></li><li class="menu-item"><a href="https://www.netskope.com/netskope-technical-support">Support</a></li></ul><div class="v3-footer__date">© 2024, All rights reserved.</div></div></div></div>`);
                }
                else {
                    document.querySelector('.gated-content__container .gated-content__left').insertAdjacentElement('beforeend', document.querySelector('#components__content .related-resources-cards'));
                }
            }, 100);
        });

        //on window resize run the function
        iconUpdate();
        window.addEventListener('resize', function () {
            iconUpdate();
        });

        //header menu changes
        document.querySelector('.header__mobile-nav .header__mobile-nav-list').insertAdjacentHTML('beforeend', `<li class="header__mobile-nav-item"><a href="/netskope-technical-support" class="header__mobile-nav-item-link">Support</a></li>`);
    });

    // on click of .header_mobile__navbar-toggler add class in parent
    document.querySelector('.header_mobile__navbar-toggler').addEventListener('click', function () {
        checkMenuIsOpen();
    });

    //on window resize run the function
    window.addEventListener('resize', function () {
        checkMenuIsOpen();
    });

    //click event listener for document
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('header__search-input')) {
            if (this.document.getElementById('spz-8005')) {
                document.getElementById('spz-8005').remove();
            }
            let width = document.querySelector('.header__top.has-promo-banner').offsetWidth - 64 + 'px';
            let left = document.querySelector('.header__top.has-promo-banner').getBoundingClientRect().left + 32 + 'px';
            let top = document.querySelector('.header__top.has-promo-banner').getBoundingClientRect().top + 80 + 'px';

            if ((window.innerWidth > 767) && (window.innerWidth < 1024)) {
                width = 600 + 'px';
                top = 73 + 'px';
                left = (this.window.innerWidth - 736) + 'px';
            }

            if ((window.innerWidth < 768)) {
                width = document.querySelector('.header__top.has-promo-banner').offsetWidth - 48 + 'px';
                top = document.querySelector('.header__top.has-promo-banner').getBoundingClientRect().top + 67 + 'px';
                left = document.querySelector('.header__top.has-promo-banner').getBoundingClientRect().left + 24 + 'px';
            }

            document.querySelector('.algolia-autocomplete').insertAdjacentHTML('afterend', `<style id="spz-8005">.spz-8005 .algolia-autocomplete{width: ${width}!important; left: ${left}!important; top: ${top}!important;}</style>`);
        }
    });

}

function checkMenuIsOpen() {
    setTimeout(() => {
        if (document.querySelector('#header__mobile-nav-container[style*="display: block;"]')) {
            document.querySelector('.header__mobile-toggle').classList.add('active');
        }
        else if (document.querySelector('#header__mobile-nav-container[style*="display: none;"]')) {
            document.querySelector('.header__mobile-toggle').classList.remove('active');
        }
    }, 50);
}

function iconUpdate() {
    if (window.innerWidth < 1024) {
        //Darker Icons
        document.querySelector('.header__mobile-toggle img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711975524/netskope/8005/menu-light.svg';
        document.querySelector('.header__top-menu-link-language img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711975619/netskope/8005/chevron-down-light.svg';
        document.querySelector('.header__top-menu-link--search-mobile img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711975525/netskope/8005/search-light.svg';
        document.querySelector('.header__logo-image--white img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711975525/netskope/8005/logo-light.svg';
        if (document.querySelector('.related-resources-cards .filters__content .filters__wrapper')) {
            document.querySelector('.related-resources-cards .filters__content .filters__wrapper').classList.add('filters__wrapper--list');
        }
        document.querySelector('.header__search-container-mobile .header__search-close-mobile').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1712038573/netskope/8005/ross-circle-light.svg');

        if (window.innerWidth < 768) {
            if (document.querySelector('.related-resources-cards .filters__content .filters__wrapper') && document.querySelector('.related-resources-cards .filters__content .filters__wrapper').classList.contains('filters__wrapper--list')) {
                document.querySelector('.related-resources-cards .filters__content .filters__wrapper').classList.remove('filters__wrapper--list');
            }
        }
    }

    else {
        //white Icons
        document.querySelector('.header__mobile-toggle img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711975525/netskope/8005/menu-dark.svg';
        document.querySelector('.header__top-menu-link-language img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711354290/netskope/8005/chevron-down.svg';
        document.querySelector('.header__top-menu-link--search-mobile img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711975524/netskope/8005/search-dark.svg';
        document.querySelector('.header__logo-image--white img').src = '//res.cloudinary.com/spiralyze/image/upload/v1711975524/netskope/8005/logo-dark.svg';
        if (document.querySelector('.related-resources-cards .filters__content .filters__wrapper')) {
            document.querySelector('.related-resources-cards .filters__content .filters__wrapper').classList.add('filters__wrapper--list');
        }
        document.querySelector('.header__search-container-mobile .header__search-close-mobile').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1712038573/netskope/8005/ross-circle-dark.svg');
    }

    changeChevron('.header__mobile-nav-item .header__mobile-nav-item-link img');
    changeChevron('.header__mobile-nav-item-subgroup-link img');
    changeChevron('.header__mobile-nav-item-subgroup-sublinks-link img');

    waitForElm('.gated-content__container .gated-content__left .related-resources-cards .container .filters__content .filters__wrapper .card .card__content .card__content__link img').then(function () {
        let arrowElem = setInterval(() => {
            document.querySelectorAll('.gated-content__container .gated-content__left .related-resources-cards .container .filters__content .filters__wrapper .card .card__content .card__content__link img').forEach(function (elem) {
                elem.setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1712641137/netskope/8005/Search_circle.svg');
            });
        }, 100);

        setTimeout(() => {
            clearInterval(arrowElem);
        }, 5000);
    });
}

function changeChevron(params) {
    document.querySelectorAll(params).forEach(function (elem) {
        elem.src = '//res.cloudinary.com/spiralyze/image/upload/v1712038573/netskope/8005/chevron-down-big.svg';
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
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#8005_spz_variant") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#8005_spz_variant');
            }
        }, 100);
    });
}