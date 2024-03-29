// Load Hubspot libs
const hubSpotJS = document.createElement('script');
hubSpotJS.src = '//js.hsforms.net/forms/embed/v2.js';
hubSpotJS.type = 'text/javascript';
hubSpotJS.setAttribute('charset', 'utf-8');
document.head.appendChild(hubSpotJS);

const formInt = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt);

        appendInputLabel();

        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about Drata?*';
        document.querySelector('[name="source__inbound_demo_"]').setAttribute('placeholder','How did you hear about Drata?*');

        // Set SOC-2 checkbox checked
        document.querySelector('[name="demo_product_of_interest"]').setAttribute('checked', 'checked');

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

        // moveElement('.hs_source__inbound_demo_', '.hbspt-form .form-columns-1');

        // Set focus on input
        focusFields();

        removeStyleTags();

        document.body.classList.add('spz-4001');
    }
}, 100);

function appendFavicon() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
        <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1681388733/drata/4001/System_Icons_open.svg" as="image">`
    );
}

function appendGTM() {
    document.body.insertAdjacentHTML("afterbegin", `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K4ZZ96"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`);
}
// appendGTM();
appendFavicon();


// Remove all style tags without id in header
function removeStyleTags() {
    document.querySelectorAll('style:not([id])').forEach(function (el) {
        el.remove();
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
    document.querySelectorAll('.hs-input').forEach(function (el) {
        const label = document.createElement("label");
        label.innerHTML = el.placeholder;
        if (!el.hasAttribute('type') && el.options.length > 0) {
            label.innerHTML = el.options[0].text;
        }
        label.setAttribute('for', el.id);
        label.classList.add('hs-label-spz');
        el.parentNode.insertBefore(label, el.nextSibling);
    });
}


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

// Click on 'did you know email address' link in error message
document.addEventListener("click", function (e) {
    const target = e.target.closest(".inputs-list label a");

    if (target) {
        checkError();
    }
});


// Add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.field').querySelector('.error') != null) {
            el.closest('.field').classList.add('field-error');
        } else {
            el.closest('.field').classList.remove('field-error');
        }
    });
}

// Move element
// sourceElm: Element which we have to move
// targetLoc: New location of an element 
function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
        f.appendChild(document.querySelector(sourceElm));
        document.querySelector(targetLoc).appendChild(f);
    }
}

// Add class 'safari' on body if browser is safari
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}


function pageContent() {
    return ` <section class="hero-section">
    <div class="header-nav">
      <div class="nav-section container">
        <a href="https://drata.com/"
          ><img
            src="//res.cloudinary.com/spiralyze/image/upload/v1683720973/drata/9001/drata-wordmark-black_2.svg"
            class="brand-logo"
            alt="Drata"
            title="Drata"
            draggable="false"
        /></a>
      </div>
    </div>
    <div
      class="hero-content container dis-flex flex-wrap justify-content-between"
    >
      <div class="hero-left-section">
        <h1 class="hc-title">
          <span>Automate</span> and <span>Accelerate</span> SOC 2 Compliance
        </h1>
        <div class="star-rating dis-flex align-items-center">
          <img
            src="//res.cloudinary.com/spiralyze/image/upload/v1683720717/drata/8001/hero_logo-g2.svg"
            class="g2-img"
            alt="G2 Logo"
            title="G2 Logo"
            draggable="false"
          /><img
            src="//res.cloudinary.com/spiralyze/image/upload/v1683720717/drata/8001/rating-4_9.svg"
            class="sr-img"
            alt="Ratings"
            title="Ratings"
            draggable="false"
          /><span class="sr-number"><strong>4.9</strong> (398 reviews)</span>
        </div>
        <div class="list-grp-wrapper">
        <ul class="list-group">
        <li class="list-item">
          <strong>Reduce Time Up to 80%</strong>Automate evidence
          collection with a comprehensive suite of 75+ integrations.
        </li>
        <li class="list-item">
          <strong>Robust Pre-Mapped Controls</strong>Save time and take
          advantage of existing pre-mapped controls to comply with
          multiple frameworks.
        </li>
        <li class="list-item">
          <strong>Continuous Control Monitoring</strong>Gain full
          visibility into your security posture and maintain compliance as
          your business and tech stack expand.
        </li>
      </ul>
        </div>
      </div>
      <div class="hero-right-section">
        <div class="form-wrapper-spz">
          <h2 class="form-title-spz">
            Get SOC 2 Compliant Fast at a Fraction of the Cost
          </h2>
          <script
            type="text/javascript"
            src="//js.hsforms.net/forms/embed/v2.js"
            charset="utf-8"
          ></script>
          <script>
            hbspt.forms.create({
              region: "na1",
              portalId: "7817592",
              formId: "429140d2-bd90-4a8b-a561-5d732c9bd514",
              cssClass: "hs-form-spz",
              css: "",
              submitText: "Get Started",
              onFormReady: function ($form) {},
              onFormSubmit: function ($form) {},
              onFormSubmitted: function ($form) {},
            });
          </script>
        </div>
      </div>
    </div>
  </section>
  <section class="logo-section">
    <div class="container">
      <h2 class="sec-title border-title">
        Join over <span>2,500</span> Companies Using Drata to Automate
        Compliance
      </h2>
      <div class="ls-logo-group dis-flex flex-wrap justify-content-between">
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/abnormal.svg"
            class="ls-img"
            alt="Abnormal"
            title="Abnormal"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/aribase.svg"
            class="ls-img"
            alt="Airbase"
            title="Airbase"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/4001/custom_assets/superhuman.png"
            class="ls-img"
            alt="Superhuman"
            title="Superhuman"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/clearbit.svg"
            class="ls-img"
            alt="Clearbit"
            title="Clearbit"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/baboor_hr.svg"
            class="ls-img"
            alt="bamboo HR"
            title="bamboo HR"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/notion.svg"
            class="ls-img"
            alt="Notion"
            title="Notion"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678535/drata/6001/postman.svg"
            class="ls-img"
            alt="Postman"
            title="Postman"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/vercel.svg"
            class="ls-img"
            alt="Vercel"
            title="Vercel"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/lemonade.svg"
            class="ls-img"
            alt="Lemonade"
            title="Lemonade"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/fivetran.svg"
            class="ls-img"
            alt="Fivetran"
            title="Fivetran"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/w_vip.svg"
            class="ls-img"
            alt="Wvip"
            title="Wvip"
          />
        </div>
        <div class="ls-logo-item">
          <img
            src="https://res.cloudinary.com/spiralyze/image/upload/v1680678537/drata/6001/clearco.svg"
            class="ls-img"
            alt="Clearco"
            title="Clearco"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="footer">
    <div class="container">
      <div class="footer-copyrights">
        © 2023 Drata Inc. All rights reserved.
      </div>
      <div class="footer-flex">
        <div class="footer-links">
          <a href="https://drata.com/terms" class="fl-link"
            >Terms and Conditions</a
          >
          <a href="https://drata.com/privacy" class="fl-link"
            >Privacy Policy</a
          >
        </div>
        <a href="https://drata.com/" class="footer-logo">
          <img
            src="//res.cloudinary.com/spiralyze/image/upload/v1683864068/drata/7001/drata-logo-footer.svg"
            alt="Drata"
            title="Drata"
          />
        </a>
      </div>
    </div>
  </section>`;
}

document.body.insertAdjacentHTML("afterbegin", pageContent());

// append pageContent() in body without using insertAdjacentHTML
// function appendPageContent() {
//     const div = document.createElement('div');
//     div.innerHTML = pageContent();
//     document.body.appendChild(div);
// }
// appendPageContent()


// Append hubspot script in '.form-wrapper-spz' div
function appendHubspotScript() {
    const script = document.createElement('script');
    // script.setAttribute('charset', 'utf-8');
    // script.setAttribute('type', 'text/javascript');
    // script.setAttribute('src', '//js.hsforms.net/forms/embed/v2.js');

    script.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "7817592", formId: "429140d2-bd90-4a8b-a561-5d732c9bd514", cssClass: "hs-form-spz", css: "", submitText: "Get Started", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });';

    document.querySelector('.form-wrapper-spz').appendChild(script);
}

hubSpotJS.onload = function () {
    appendHubspotScript();
}
