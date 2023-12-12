const hubSpotJS = document.createElement("script");
hubSpotJS.src = "//js.hsforms.net/forms/embed/v2.js", hubSpotJS.type = "text/javascript", hubSpotJS.setAttribute("charset", "utf-8"), document.head.appendChild(hubSpotJS);


const formInt = setInterval((() => {
  if (document.querySelectorAll('.hbspt-form form.hs-form-spz').length > 0) {
    clearInterval(formInt);
    document.body.classList.add('spz-custom-dropdown');

    // hs-button
    document.querySelector('.hs-button').addEventListener('click', function () {
      const err = setInterval(() => {
        checkError();
        clearInterval(err);
      }, 100);
    });
    // Set focus on input
    focusFields();
    // Set filled class on input
    checkvalue();

    document.querySelector('form .hs-fieldtype-checkbox.field.hs-form-field legend.hs-field-desc').insertAdjacentHTML('afterend', ` <button class="spz-btn custom-input-btn" type="button"><span class="value-container"></span></button>`);

    window.addEventListener("click", function (e) {
      if (e.target.classList.contains("spz-btn")) {
        e.target.parentElement.classList.toggle('field-focus');
        dropdownFunctionality();
      }

    });
  }
}), 10);

function focusFields() {
  document.querySelectorAll(".hs-input").forEach((function (e) {
    e.addEventListener("focus", (function () {
      e.closest(".field").classList.add("field-focus"), setTimeout((function () {
        e.closest(".field").classList.remove("field-error"), e.closest(".field").classList.remove("field-untouched");
      }), 100);
    })), e.addEventListener("blur", (function () {
      e.closest(".field").classList.remove("field-focus"), setTimeout((function () {
        checkError()
      }), 100);
    })), e.addEventListener("change", (function () {
      e.closest(".field").classList.remove("field-focus"), setTimeout((function () {
        checkError()
      }), 100);
    })), "SELECT" == e.tagName && e.addEventListener("change", (function () {
      e.closest(".field").classList.remove("field-error")
    }));
  }));
}

function checkvalue() {
  var selector = 'form.hs-form-spz .field .input > .hs-input';
  var eventList = ["blur", "focusout", "keyup", "change"];
  for (s_event of eventList) {
    document.addEventListener(s_event, function (event) {
      if (event.target.matches(selector)) {
        if (event.target.value == null || event.target.value == '') {
          event.target.closest('.field').classList.remove('field-filled');
        } else {
          event.target.closest('.field').classList.add('field-filled');
        }
      }
    });
  }
}

function checkError() {
  document.querySelectorAll(".hs-input").forEach((function (e) {
    null != e.closest(".field").querySelector(".error") ? e.closest(".field").classList.add("field-error") : e.closest(".field").classList.remove("field-error");
  }));
  if (document.querySelectorAll('.form-columns-1:not(.hdField) .field-filled:not(.field-error)').length >= 4) {
    document.querySelectorAll('.hidden-spz').forEach(function (el) {
      el.classList.remove('hidden-spz');
    });
  }
}

function pageContent() {
  document.body.classList.add('spz-custom-dropdown');
  return `<div class="spz-wrapper">
  <section class="hero-section">
    <div class="spz-container">
      <div class="spz-header">
        <a href="//unanet.com/" class="site-logo">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1699888668/unanet/2001/logo.svg" alt="Unanet Logo" title="Unanet Logo">
        </a>
      </div>
      <div class="hero-content">
        <div class="form-wrapper">
          <h2 class="form-heading">Get a demo</h2>
        </div>
      </div>
    </div>
  </section>
  <section class="trusted-partners-section">
    <div class="spz-container">
      <div class="three-card-slider swiper-container ">
        <div class="three-card-title">
          <h4 class="section-heading">Trusted by <strong>3,700+</strong> government contractor, architecture, engineering, and construction firms </h4>
          <div class="ratings-container"><img class="capterra-logo" alt="Capterra Logo" src="//res.cloudinary.com/spiralyze/image/upload/v1702300351/unanet/3001/full_logo_svg.svg"><img class="star-rating" alt="Star Rating" src="//res.cloudinary.com/spiralyze/image/upload/v1702300351/unanet/3001/big_stars_svg.svg"><span>4.3</span></div>
        </div>
        <div class="testimonials swiper-wrapper">
          <div class="testimonials_card swiper-slide">
            <div>
              <div class="testimonial-inner">
                <div class="header-img">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1702300231/unanet/3001/stars_svg.svg" alt="Star Rating">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1702300275/unanet/3001/logo_svg.svg" alt="Capterra Logo">
                </div>
                <div class="review-content">
                    <h6 class="card-title">"Essential capability for government contractors. Unanet has been key to our success."</h6>
                    <p class="card-text">Integration. Unanet combines time/expense, project management, billing, and financials all in one system. No import/export of data between systems. DCAA Compliance. Calculates indirect rates and applies to billing.</p>
                </div>
              </div>
              <div class="author">
                <div class="author-img">
                    <img  alt="Ed H." src="//res.cloudinary.com/spiralyze/image/upload/v1702024742/unanet/3001/avatar1.webp">
                </div>
                <div class="author-name">
                  <h6>Ed H.</h6>
                  <p>President</p>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonials_card swiper-slide">
          <div>
            <div class="testimonial-inner">
              <div class="header-img">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1702300231/unanet/3001/stars_svg.svg" alt="Star Rating">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1702300275/unanet/3001/logo_svg.svg" alt="Capterra Logo">
              </div>
              <div class="review-content">
                  <h6 class="card-title">"Unanet is a total project based accounting solution"</h6>
                  <p class="card-text">Unanet's ease of use and flexibility has allowed me to be much more productive and timely in delivering reports, processing monthly billings, accounting reviews, month end close, and many more activities!</p>
              </div>
            </div>
            <div class="author">
              <div class="author-img">
                  <img  alt="Lynn W" src="//res.cloudinary.com/spiralyze/image/upload/v1702024742/unanet/3001/avatar_2.webp">
              </div>
              <div class="author-name">
                <h6>Lynn W</h6>
                <p>Director of Business Resources</p>
              </div>
            </div>
          </div>
        </div>
          <div class="testimonials_card swiper-slide">
            <div>
            <div class="testimonial-inner">
            <div class="header-img">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1702300231/unanet/3001/stars_svg.svg" alt="Star Rating">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1702300275/unanet/3001/logo_svg.svg" alt="Capterra Logo">
            </div>
            <div class="review-content">
                <h6 class="card-title">"Unanet is an innovative tool that looks like the future of financial softwares"</h6>
                <p class="card-text">Unanet is an amazingly powerful software that is way ahead of its competitors in its user-friendliness and its intuitiveness.</p>
            </div>
          </div>
          <div class="author">
            <div class="author-img">
                <img  alt="Nabeel C." src="//res.cloudinary.com/spiralyze/image/upload/v1702024742/unanet/3001/avatar_3.webp">
            </div>
            <div class="author-name">
              <h6>Nabeel C.</h6>
              <p>Finance Manager</p>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="notice"><i>*Image changed for privacy.</i></div>
    </div>
  </section>
  <section class="spz-footer">
    <div class="spz-container">
      <div class="footer-wrapper">
        <p class="copyright-content">© 2023 Unanet. All rights reserved.</p>
        <ul class="footer-links">
          <li>
            <a rel="noopener" href="/website-terms">Terms</a>
          </li>
          <li>
            <a rel="noopener" href="/copyright-policy">DMCA</a>
          </li>
          <li>
            <a rel="noopener" href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a rel="noopener" onclick="(function(){ var _hsp = window._hsp = window._hsp || []; _hsp.push(['showBanner']); })()">Your Privacy Choices</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
          </div>`;

}

// Append hubspot script in '.form-wrapper-spz' div
function appendHubspotScript() {
  const script = document.createElement('script');

  script.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "7817592", formId: "a6043509-2a53-4a93-8c05-b64cb53299e8", cssClass: "hs-form-spz", css: "", submitText: "Schedule Demo", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });';
  if (document.querySelector('.css-1tsiji8-Form-root')) {
    document.querySelector('.css-1tsiji8-Form-root .css-12ive4l-Form-formContainer').appendChild(script);
  }
}

hubSpotJS.onload = function () {
  appendHubspotScript()
};

window.addEventListener('pageshow', function (event) {
  if (event.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
    checkdata();
  }
});

checkdata();

function checkdata() {
  var checkform = setInterval(() => {
    if (document.querySelector("form.hs-form-spz .field .input .hs-input")) {
      clearInterval(checkform)
      // Set filled class on input
      document.querySelectorAll("form.hs-form-spz .field .input .hs-input").forEach(function (event) {
        if (event.value == null || event.value == '') {
          event.closest('.field').classList.remove('field-filled');
        } else {
          event.closest('.field').classList.add('field-filled');

          if (event.type == 'checkbox') {
            event.checked = true;
          }
        }
      });
    }
  }, 100);
}

checkboxDropdown();

function checkboxDropdown() {
  let counter = 0;
  document.querySelectorAll('.hs-form-checkbox').forEach(function (elem, i) {
    elem.querySelector('.hs-input').addEventListener("click", function () {
      var title = elem.querySelector('span').textContent;

      if (elem.querySelector('input[type="checkbox"]').checked) {
        var html = '<span title="' + title + '">' + title + '</span>';
        document.querySelector('.spz-btn .value-container').insertAdjacentHTML('beforeend', html);
        counter++;
      }
      else {
        document.querySelector('span[title="' + title + '"]').remove();
        counter--;
      }

      if (counter == 1) {
        document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.add('single-value');
        if (document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.contains('multiple-value')) {
          document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.remove('multiple-value');
        }
      }
      else if (counter == 0) {
        if (document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.contains('single-value')) {
          document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.remove('single-value');
        }
        if (document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.contains('multiple-value')) {
          document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.remove('multiple-value');
        }
      }
      else {
        document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.add('multiple-value');
        if (document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.contains('single-value')) {
          document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .spz-btn').classList.remove('single-value');
        }
      }
    });
  })
}

function dropdownFunctionality() {
  if (!document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field').classList.contains('field-focus')) {
    if (document.querySelector(".spz-btn > .value-container > span")) {
      document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field').classList.add('input-filled');
    }
    else {
      document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field').classList.remove('input-filled');
    }
  }
  if (document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .error') != null) {
    document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field').classList.add('field-error');
  } else {
    document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field').classList.remove('field-error');
  }
}