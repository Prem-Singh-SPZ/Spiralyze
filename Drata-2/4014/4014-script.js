//create json object to change hero copy
const heroCopy = {
    "gdpr": {
        "heroTitle": `<span>Simplify</span> and <span>Fast-Track</span> GDPR Compliance`,
        "herolist1": `Cut compliance work by 80%.<span class="ls-desc"> Drata collects evidence for you via integrations - no spreadsheets or screenshots required.</span>`,
        "herolist2": `Ace your audits.<span class="ls-desc"> Get complete audit confidence with full visibility into your compliance status and auditor-preferred files.</span>`,
        "herolist3": `Unblock sales with unmatched security.<span class="ls-desc"> Quickly publish and share compliance documents to speed through security reviews.</span>`,
    },
    "hipaa": {
        "heroTitle": `<span>Simplify</span> and <span>Fast-Track</span> HIPAA Compliance`,
        "herolist1": `Cut compliance work by 80%.<span class="ls-desc"> Drata collects evidence for you via integrations - no spreadsheets or screenshots required.</span>`,
        "herolist2": `Ace your audits.<span class="ls-desc"> Get complete audit confidence with full visibility into your compliance status and auditor-preferred files.</span>`,
        "herolist3": `Unblock sales with unmatched security.<span class="ls-desc"> Quickly publish and share compliance documents to speed through security reviews.</span>`,
    },
    "soc2": {
        "heroTitle": `<span>Simplify</span> and <span>Fast-Track</span> SOC 2 Compliance`,
        "herolist1": `Cut compliance work by 80%.<span class="ls-desc"> Drata collects evidence for you via integrations - no spreadsheets or screenshots required.</span>`,
        "herolist2": `Ace your audits.<span class="ls-desc"> Get complete audit confidence with full visibility into your compliance status and auditor-preferred files.</span>`,
        "herolist3": `Unblock sales with unmatched security.<span class="ls-desc"> Quickly publish and share compliance documents to speed through security reviews.</span>`,
    },
    "iso27001": {
        "heroTitle": `<span>Simplify</span> and <span>Fast-Track</span> ISO 27001 Compliance`,
        "herolist1": `Cut compliance work by 80%.<span class="ls-desc"> Drata collects evidence for you via integrations - no spreadsheets or screenshots required.</span>`,
        "herolist2": `Ace your audits.<span class="ls-desc"> Get complete audit confidence with full visibility into your compliance status and auditor-preferred files.</span>`,
        "herolist3": `Unblock sales with unmatched security.<span class="ls-desc"> Quickly publish and share compliance documents to speed through security reviews.</span>`,
    }
}

//create a style tag and append in head 
const style = document.createElement('style');
style.innerHTML = `@media (min-width: 767.98px){.spz-4014 .hero-section .hero-content .hc-title{font-size: 52px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: -1.04px;}}`;
document.head.appendChild(style);


// Set test class
document.body.classList.add("spz-4014");

waitForElm('.hero-content h1.hc-title').then(function () {
    loadTest()
});

function loadTest() {
    const heroTitle = document.querySelector('.hero-content h1.hc-title');
    const heroList1 = document.querySelector('.list-grp-wrapper .list-group li:nth-child(1) .ls-title');
    const heroList2 = document.querySelector('.list-grp-wrapper .list-group li:nth-child(2) .ls-title');
    const heroList3 = document.querySelector('.list-grp-wrapper .list-group li:nth-child(3) .ls-title');

    heroTitle.innerHTML = heroCopy[page].heroTitle;
    heroList1.innerHTML = heroCopy[page].herolist1;
    heroList2.innerHTML = heroCopy[page].herolist2;
    heroList3.innerHTML = heroCopy[page].herolist3;

    // setHiddenFields();

}

function setHiddenFields() {
    waitForElm('form.hs-form-private .hs_cro_test_1 .input .hs-input').then(function () {
        let setValue = setInterval(() => {
            if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == 'Variant_4014') {
                clearInterval(setValue);
            }
            document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', 'Variant_4014');
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
