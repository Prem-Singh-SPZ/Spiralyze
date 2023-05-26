const hubSpotJS = document.createElement("script");
hubSpotJS.src = "//js.hsforms.net/forms/embed/v2.js", hubSpotJS.type = "text/javascript", hubSpotJS.setAttribute("charset", "utf-8"), document.head.appendChild(hubSpotJS);
const formInt = setInterval((() => {

    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt);
        appendInputLabel();
        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';
        document.querySelector('[name="source__inbound_demo_"]').setAttribute('placeholder', 'How did you hear about us?*');
        // Change Email Field Position
        let email_el = document.querySelector('.hs_email');
        let company_el = document.querySelector('.hs_company_name');
        company_el.before(email_el);
        // Set button label
        document.querySelector('.hs-button.primary').innerHTML = 'Get Started';
        document.querySelector('.hs-button.primary').setAttribute('value', 'Get Started');
        // hs-button
        document.querySelector('.hs-button').addEventListener('click', function () {
            const err = setInterval(() => {
                checkError();
                clearInterval(err);
            }, 100);
        });
        // Set focus on input
        focusFields();
        removeStyleTags();
        document.body.classList.add('spz-10002');
    }
}), 100);

function removeStyleTags() {
    document.querySelectorAll("style:not([id])").forEach((function (e) {
        e.remove()
    })), document.querySelectorAll("link").forEach((function (e) {
        (e.href.indexOf("main.min.css") > -1 || e.href.indexOf("Social_follow.min.css") > -1) && e.remove()
    }))
}

function appendInputLabel() {
    document.querySelectorAll(".hs-input").forEach((function (e) {
        const t = document.createElement("label");
        t.innerHTML = e.placeholder, !e.hasAttribute("type") && e.options.length > 0 && (t.innerHTML = e.options[0].text), t.setAttribute("for", e.id), t.classList.add("hs-label-spz"), e.parentNode.insertBefore(t, e.nextSibling)
    }))
}

function focusFields() {
    document.querySelectorAll(".hs-input").forEach((function (e) {
        e.addEventListener("focus", (function () {
            e.closest(".field").classList.add("field-focus"), setTimeout((function () {
                e.closest(".field").classList.remove("field-error"), e.closest(".field").classList.remove("field-untouched")
            }), 100)
        })), e.addEventListener("blur", (function () {
            e.closest(".field").classList.remove("field-focus"), setTimeout((function () {
                checkError()
            }), 100)
        })), "SELECT" == e.tagName && e.addEventListener("change", (function () {
            e.closest(".field").classList.remove("field-error")
        }))
    }))
}

function checkError() {
    document.querySelectorAll(".hs-input").forEach((function (e) {
        null != e.closest(".field").querySelector(".error") ? e.closest(".field").classList.add("field-error") : e.closest(".field").classList.remove("field-error")
    }))
}

function pageContent() {
    return '<div class="spz-content">\
  <section class="hero-section">\
  <div class="header-nav">\
  <div class="nav-section container"><a href="https://drata.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1683713454/drata/10002/drata-full-wordmark.svg" class="brand-logo" alt="Drata" title="Drata" draggable="false"></a></div>\
  </div>\
  <div class="hero-content container dis-flex flex-wrap justify-content-between">\
  <div class="hero-left-section">\
  <h1 class="hc-title">Risk Management, Automated</h1>\
  <div class="star-rating dis-flex align-items-center"><img src="//res.cloudinary.com/spiralyze/image/upload/v1683713454/drata/10002/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false"><img src="//res.cloudinary.com/spiralyze/image/upload/v1683713454/drata/10002/rating-4_9.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.9</strong> (398 reviews)</span></div>\
  <div class="list-grp-wrapper">\
  <ul class="list-group">\
  <li class="list-item"><strong>Pre-Built Controls</strong>Over 150 pre-configured controls for all the most common issues. Plus add your own custom controls.</li>\
  <li class="list-item"><strong>Automated Testing</strong>Automate testing for your controls. Get alerts, create a treatment plan, and track progress.</li>\
  <li class="list-item"><strong>Reporting</strong>Create management reports to outline key risks, score threats, and treatment progress. Live updates.</li>\
  </ul>\
  </div>\
  </div>\
  <div class="hero-right-section">\
  <div class="form-wrapper-spz">\
  <h2 class="form-title-spz">Get a Demo</h2>\
  </div>\
  </div>\
  </div>\
  </section>\
  <section class="logo-section">\
  <div class="container">\
  <h2 class="sec-title border-title">Join Over <span>2,500</span> Companies Using Drata to Reduce Risk</h2>\
  <div class="ls-logo-group dis-flex flex-wrap justify-content-between">\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/abnormal.svg" class="ls-img" alt="Abnormal" title="Abnormal"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/aribase.svg" class="ls-img" alt="Airbase" title="Airbase"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/big_id.svg" class="ls-img" alt="BigID" title="BigID"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/clearbit.svg" class="ls-img" alt="Clearbit" title="Clearbit"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/baboor_hr.svg" class="ls-img" alt="bamboo HR" title="bamboo HR"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/notion.svg" class="ls-img" alt="Notion" title="Notion"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678535/drata/6001/postman.svg" class="ls-img" alt="Postman" title="Postman"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/vercel.svg" class="ls-img" alt="Vercel" title="Vercel"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/lemonade.svg" class="ls-img" alt="Lemonade" title="Lemonade"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/fivetran.svg" class="ls-img" alt="Fivetran" title="Fivetran"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/w_vip.svg" class="ls-img" alt="Wvip" title="Wvip"></div>\
  <div class="ls-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678537/drata/6001/clearco.svg" class="ls-img" alt="Clearco" title="Clearco"></div>\
  </div>\
  </div>\
  </section>\
  <section class="footer">\
  <div class="container">\
  <div class="footer-copyrights">© 2023 Drata Inc. All rights reserved.</div>\
  <div class="footer-flex">\
  <div class="footer-links"><a href="https://drata.com/terms" class="fl-link">Terms and Conditions</a> <a href="https://drata.com/privacy" class="fl-link">Privacy Policy</a></div>\
  <a href="https://drata.com/" class="footer-logo"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1683864068/drata/7001/drata-logo-footer.svg" alt="Drata" title="Drata"> </a></div>\
  </div>\
  </section>\
  </div>'
}

function appendHubspotScript() {
    const e = document.createElement("script");
    e.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "7817592", formId: "429140d2-bd90-4a8b-a561-5d732c9bd514", cssClass: "hs-form-spz", css: "", submitText: "Get a Demo", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });', document.querySelector(".form-wrapper-spz").appendChild(e)
}
document.addEventListener("click", (function (e) {
    e.target.closest(".inputs-list label a") && checkError()
})), -1 == navigator.userAgent.toLowerCase().indexOf("chrome/") && navigator.userAgent.toLowerCase().indexOf("safari/") > -1 && document.body.classList.add("safari"), document.body.insertAdjacentHTML("afterbegin", pageContent()), hubSpotJS.onload = function () {
    appendHubspotScript()
};