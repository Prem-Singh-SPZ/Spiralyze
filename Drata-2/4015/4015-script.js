// Set test class
document.body.classList.add("spz-4015");

waitForElm('.hero-section .list-grp-wrapper .list-group .list-item .ls-desc').then(function () {
    loadTest()
});

function loadTest() {
    document.querySelector('.hero-section .list-grp-wrapper .list-group .list-item:nth-child(2) .ls-desc').textContent = 'Automate compliance for 18+ frameworks including ISO 27001, SOC 2, GDPR, Cyber Essentials, and more.';
    document.querySelector('.hero-section .list-grp-wrapper .list-group .list-item:nth-child(3) .ls-desc').textContent = '20+ customisable, auditor-approved policies. Streamlined employee signing & documentation.';

    document.querySelector('.features-section .work-step-item:first-child .step-info').textContent = `Automated compliance for 18+ products and frameworks including ISO 27001, SOC 2, Cyber Essentials, GDPR, HIPAA, & PCI.`;
    document.querySelector('.features-section .work-step-item:nth-child(3) .step-info').textContent = `20+ customisable, auditor-approved policies. Streamline employee signing & documentation.`;

    waitForElm('.form-wrapper-spz .hbspt-form form fieldset .field.hs-fieldtype-checkbox>.input ul li>label>span').then(function () {
        document.querySelector('.form-wrapper-spz .hbspt-form form fieldset .field.hs-fieldtype-checkbox>.input ul li:nth-child(3)>label>span').textContent = 'Cyber Essentials';
    });

    // setHiddenFields();
}

function setHiddenFields() {
    waitForElm('form.hs-form-private .hs_cro_test_1 .input .hs-input').then(function () {
        let setValue = setInterval(() => {
            if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == 'Variant_4015') {
                clearInterval(setValue);
            }
            document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', 'Variant_4015');
        }, 100);
    });
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
