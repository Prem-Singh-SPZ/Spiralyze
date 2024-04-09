
// let bodyLoad = setInterval(function () {
//     const bodyEle = document.querySelector('body');

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

// if (bodyEle) {
//     clearInterval(bodyLoad);

// Set test class
document.body.classList.add("spz-4011");

waitForElm('.hero-content h1.hc-title').then(function () {
    if (window.location.href.indexOf('try.drata.com/product/gdpr') > -1) {
        loadTest('gdpr');
    }

    else if (window.location.href.indexOf('try.drata.com/product/hipaa') > -1) {
        loadTest('hipaa');
    }

    else if (window.location.href.indexOf('try.drata.com/product/soc-2') > -1) {
        loadTest('soc2');
    }

    else if (window.location.href.indexOf('try.drata.com/product/iso-27001') > -1) {
        loadTest('iso27001');
    }
});

function loadTest(page) {
    const heroTitle = document.querySelector('.hero-content h1.hc-title');
    const heroList1 = document.querySelector('.list-grp-wrapper .list-group li:nth-child(1) .ls-title');
    const heroList2 = document.querySelector('.list-grp-wrapper .list-group li:nth-child(2) .ls-title');
    const heroList3 = document.querySelector('.list-grp-wrapper .list-group li:nth-child(3) .ls-title');

    heroTitle.innerHTML = heroCopy[page].heroTitle;
    heroList1.innerHTML = heroCopy[page].herolist1;
    heroList2.innerHTML = heroCopy[page].herolist2;
    heroList3.innerHTML = heroCopy[page].herolist3;
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
// }
// });

