var content = document.createElement("script");
content.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.min.js";
document.head.appendChild(content);

content.onload = function () {
    initSlider();
};

const formInt = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt);

        appendInputLabel();

        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';

        // Set checkbox label
        document.querySelector('label#label-demo_product_of_interest-429140d2-bd90-4a8b-a561-5d732c9bd514 + .hs-field-desc').innerHTML = 'What product(s) are you interested in?';

        // hs-button
        document.querySelector('.hs-button').addEventListener('click', function () {
            const err = setInterval(() => {
                checkError();
                clearInterval(err);
            }, 100);
        });

        // Add field-untouched class on select element
        document.querySelectorAll('select.hs-input').forEach(function (el) {
            if (el.options.length > 0) {
                el.closest('.field').classList.add('field-untouched');
            }
        });

        // Set focus on input
        focusFields();
        document.body.classList.add('spz-6012');
        removeStyleTags();

        //6006 changes
        document.querySelector('.hbspt-form .hs-form-spz').insertAdjacentHTML('beforebegin', `
        <div class="form-step-1 active">
            <div class="sub-desc">What compliance frameworks are you interested in?</div>
            <div class="framework-wrapper-spz"></div>
            <div class="actions">
                <button class="hs-button-spz primary large" type="button">Next</button>
            </div>
        </div>`);

        // Add class '.form-step-2' on '.hbspt-form .hs-form-spz'
        document.querySelector('.hbspt-form .hs-form-spz').classList.add('form-step-2');

        // Append 'PCI DSS' after second '.hs_demo_product_of_interest .inputs-list.multi-container label'
        // FYI, this is added because the 'PCI DSS' checkbox is not available in the form
        document.querySelector('.hs_demo_product_of_interest .inputs-list.multi-container li:nth-child(2)').insertAdjacentHTML('afterend', `
        <li class="hs-form-checkbox" role="checkbox">
            <label class="hs-form-checkbox-display" for="demo_product_of_interest6-pci-dss-1">
                <input class="hs-input" type="checkbox" name="demo_product_of_interest" value="PCI DSS">
                <span>PCI DSS</span>
            </label>
        </li>
    `);

        // Hide '.hs_demo_product_of_interest' and its parent 'fieldset'
        document.querySelector('.hs_demo_product_of_interest').parentElement.style.display = 'none';


        stepOneCheckboxes();
        openNextStep();
        // initSlider();
    }
}, 100);


function appendFavicon() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
          <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
          <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
          <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
          <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">
          <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1694603081/drata/6012/select-focus.svg" as="image">
          <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1694522987/drata/6012/Checkbox_hover.svg" as="image">
          <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1694522988/drata/6012/checkbox_check.svg" as="image"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.css" /><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1701245204/drata/6006/cta_arrow.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1690976787/drata/6009/checked_mark.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1695303590/drata/6009/Checkmark-checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1695303591/drata/6009/Checkmark-hover.svg" as="image">`
    );
}

function appendGTM() {
    document.body.insertAdjacentHTML("afterbegin", `
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K4ZZ96"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->`);
}
appendGTM();
appendFavicon();

// Remove all style tags without id in header
function removeStyleTags() {
    // document.querySelectorAll('style:not([id])').forEach(function (el) {
    //   el.remove();
    // });

    // Remove style tag which is after 'main.min.css' link
    document.querySelectorAll('link').forEach(function (el) {
        if (el.href.indexOf('main.min.css') > -1) {
            el.nextElementSibling.remove();
        }
    });

    // Remove link tag which contains main.min.css or Social_follow.min.css in href attribute
    document.querySelectorAll('link').forEach(function (el) {
        if (el.href.indexOf('main.min.css') > -1 || el.href.indexOf('Social_follow.min.css') > -1) {
            el.remove();
        }
    });
}

// Create input label with placeholder text
function appendInputLabel() {
    document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
        const label = document.createElement("label");
        label.innerHTML = el.placeholder;
        if (!el.hasAttribute('type') && el.options.length > 0) {
            label.innerHTML = el.options[0].text;
        }
        label.setAttribute('for', el.id);
        label.classList.add('hs-label-spz');

        forClearBitForms();
        el.parentNode.insertBefore(label, el.nextSibling);
    });
}

function initSlider() {
    if (document.querySelectorAll('.review-slider-container.swiper').length > 0) {
        var mySwiper = new Swiper('.review-slider-container.swiper', {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 24,
            allowTouchMove: false,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
        });
    }
}

function stepOneCheckboxes() {
    // Get all the text from '.hs_demo_product_of_interest .inputs-list.multi-container label span' and append to '.framework-wrapper-spz'
    const checkboxes = document.querySelectorAll('.hs_demo_product_of_interest .inputs-list.multi-container label');
    let checkboxesArr = Array.from(checkboxes);
    let checkboxesText = checkboxesArr.map((item) => {
        return { label: item.textContent, for: item.getAttribute('for') };
    });
    let checkboxesTextArr = checkboxesText.filter((item) => {
        return item != '';
    });
    let checkboxesTextArrUnique = [...new Set(checkboxesTextArr)];
    checkboxesTextArrUnique.forEach((item) => {
        // Convert to lowercase and replace space with underscore
        const lbl = item.label.trim();
        const lci = lbl.toLowerCase().replace(/\s/g, '_');

        document.querySelector('.form-step-1 .framework-wrapper-spz').insertAdjacentHTML('beforeend', `
            <label class="custom-checkbox-spz with-icons" for="${item.for}" data-for="${item.for}">
                <div class="ccs-icon-wrap">
                    <img src="${getIconByLabel(lbl)}" alt="${lbl}" class="ccs-icon">
                </div>
                <div class="ccs-wrap">
                    <div class="ccs-label">
                        <div class="ccs-checkbox">
                            <input type="checkbox" id="${lci}" name="${lci}">
                            <span class="ccs-box"></span>
                        </div>
                        ${lbl}
                    </div>
                </div>
            </label>`);
    });

    checkboxEvents()
}

function getIconByLabel(label) {
    const baseURl = 'https://res.cloudinary.com/spiralyze/image/upload/';
    const icons = [
        {
            ico: 'v1690459033/drata/6009/soc_2.svg',
            label: 'SOC 2'
        },
        {
            ico: 'v1690459081/drata/6009/iso_webp_1.webp',
            label: 'ISO 27001'
        },
        {
            ico: 'v1690971738/drata/6009/pci_1.svg',
            label: 'PCI DSS'
        },
        {
            ico: 'v1690459033/drata/6009/hipaa.svg',
            label: 'HIPAA'
        },
        {
            ico: 'v1690459033/drata/6009/gdpr.svg',
            label: 'GDPR'
        },
        {
            ico: 'v1690459079/drata/6009/custom_frameworks_1.svg',
            label: 'Other'
        }
    ];

    let icon = icons.find((item) => {
        return item.label == label;
    });

    if (icon == undefined) {
        return false;
    }

    return baseURl + icon.ico;
}

function checkboxEvents() {
    document.querySelectorAll('.form-step-1 .custom-checkbox-spz').forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            // Add active class and checked attribute to clicked checkbox
            if (!checkbox.classList.contains('active') && checkbox.getAttribute('for')) {
                checkbox.querySelector('input').setAttribute('checked', true);
                document.querySelector(`[data-for='${checkbox.getAttribute('for')}']`).classList.toggle('active');
            } else {
                // Remove active class and checked attribute from clicked checkbox
                checkbox.classList.remove('active');
                checkbox.querySelector('input').removeAttribute('checked');
            }
        });
    });
}

function openNextStep() {
    // on click of '.hs-button-spz' button open next step
    document.querySelector('.hs-button-spz').addEventListener('click', () => {
        document.querySelector('.form-step-1').classList.remove('active');
        document.querySelector('.form-step-2').classList.add('active');

        // smooth scroll to .contact-form-section
        document.querySelector('.hero-right-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Check if nearest parent .hs-form-field has style attribute with display: none (for ClearBit)
function forClearBitForms() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.hs-form-field[style*="display: none"]')) {
            el.closest('fieldset').classList.add('field-hidden');
        } else {
            el.closest('fieldset').classList.remove('field-hidden');
        }

        // Make 'How did you hear about us?' field full width if hidden fields count is odd
        const hiddenFields = document.querySelectorAll('fieldset:not(.form-columns-3).field-hidden').length;
        if (hiddenFields % 2 == 0) {
            document.querySelector('.hs_source__inbound_demo_').closest('fieldset').classList.remove('full-width');
        } else {
            document.querySelector('.hs_source__inbound_demo_').closest('fieldset').classList.add('full-width');
        }
    });
}

// Scroll to element on click
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("get-started-btn")) {
        let scrollOffset = window.innerWidth > 1199 ? 100 : 120;
        if (window.innerWidth > 1199) {
            scrollToElement('.form-wrapper-spz', scrollOffset);
        } else {
            document.querySelector('.form-wrapper-spz').scrollIntoView({ behavior: "smooth" });
        }
    }
});

// On input focus add class on closest parent .field class
function focusFields() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        // On input focus add .field-focus class on closest parent .field class
        el.addEventListener('focus', function () {
            el.closest('.field').classList.add('field-focus');
            setTimeout(function () {
                el.closest('.field').classList.remove('field-error');
                el.closest('.field').classList.remove('field-untouched');
            }, 100);
        });

        // On input blur remove .field-focus class on closest parent .field class
        el.addEventListener('blur', function () {
            el.closest('.field').classList.remove('field-focus');
            setTimeout(function () {
                checkError();
            }, 100);
        });

        // On select element change remove .field-error class on closest parent .field class
        if (el.tagName == 'SELECT') {
            el.addEventListener('change', function () {
                el.closest('.field').classList.remove('field-error');
            });

            // el.addEventListener('focus', function () {
            //     el.closest('.field').classList.add('field-focus');
            //     setTimeout(function () {
            //         el.closest('.field').classList.remove('field-untouched');
            //     }, 100);
            // });
        }
    });
}

// Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.field').querySelector('.error') != null) {
            el.closest('.field').classList.add('field-error');
        } else {
            el.closest('.field').classList.remove('field-error');
        }
    });

    addNoShadow();
    forClearBitForms();
}

// function to add 'no-shadow' class on .form-wrapper-spz and remove it after 200ms
function addNoShadow() {
    if (document.querySelector('.safari .form-wrapper-spz')) {
        document.querySelector('.safari .form-wrapper-spz').classList.add('no-shadow');
        setTimeout(function () {
            document.querySelector('.safari .form-wrapper-spz').classList.remove('no-shadow');
        }, 200);
    }
}

// Scroll to element on click
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("goto-hero-form")) {
        let scrollOffset = window.innerWidth > 992 ? 80 : 25;
        scrollToElement('.hero-right-section', scrollOffset);
    }

    if (e.target.classList.contains("cookie-preferences-button")) {
        if (document.querySelectorAll('.osano-cm-widget').length > 0) {
            document.querySelector('.osano-cm-widget').click();
        }
    }
});

// Function to Scroll to position using smooth scroll vanilla JS
// target: Element to scroll to
// offset: Offset from the top of the element
function scrollToElement(target, offset) {
    const targetElm = document.querySelector(target);
    const targetElmOffset = targetElm.offsetTop - offset;
    window.scrollTo({
        top: targetElmOffset,
        behavior: 'smooth'
    });
}

setInterval(function () {
    // if (document.querySelectorAll('fieldset:not(.form-columns-3) .hs-form-field[style*="display: none"]').length > 0) {
    forClearBitForms();
    // }
}, 500);

// on user type in .hs-input run forClearBitForms() function
document.addEventListener('keyup', function (e) {
    if (e.target.classList.contains('hs-input')) {
        forClearBitForms();

        const nInt = setInterval(() => {
            addNoShadow();
        }, 250);

        setTimeout(function () {
            clearInterval(nInt);
        }, 1000);
    }
});

// Add class 'safari' on body if browser is safari
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari');
}