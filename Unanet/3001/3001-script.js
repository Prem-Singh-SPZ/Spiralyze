const hubSpotJS = document.createElement("script");
hubSpotJS.src = "//js.hsforms.net/forms/embed/v2.js", hubSpotJS.type = "text/javascript", hubSpotJS.setAttribute("charset", "utf-8"), document.head.appendChild(hubSpotJS);

const swiperJS = document.createElement('script');
swiperJS.src = '//cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.js';
swiperJS.type = 'text/javascript';
document.head.appendChild(swiperJS);

appendPreload()
function appendPreload() {
  document.querySelector('head').insertAdjacentHTML("afterbegin", `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.css">`
  );
}

const formInt = setInterval((() => {
  if (document.querySelectorAll('.hbspt-form form.hs-form-spz').length > 0) {
    clearInterval(formInt);
    document.body.classList.add('spz-3001_v1');

    // Add class in fieldset using count
    var parentDiv = document.querySelector('.hero-content .form-wrapper form.hs-form-spz');
    var childElements = parentDiv.children;
    for (var i = 0; i < childElements.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      childElements[i].classList.add(dynamicClass);
    }
    // Change Field Position
    let email_el = document.querySelector('form.hs-form-spz fieldset.field-1');
    let company_el = document.querySelector('form.hs-form-spz fieldset.field-5');
    company_el.before(email_el);

    let phone_el = document.querySelector('form.hs-form-spz fieldset.field-4');
    company_el.after(phone_el);
    // Set input label
    document.querySelector("form.hs-form-spz fieldset.field-5 label span:not(.hs-form-required)").textContent = 'Company';
    document.querySelector("form.hs-form-spz fieldset.field-4 label span:not(.hs-form-required)").textContent = 'Phone';
    document.querySelector("form.hs-form-spz fieldset.field-8 label span:not(.hs-form-required)").textContent = 'Industry';
    document.querySelector("form.hs-form-spz fieldset.field-9 label span:not(.hs-form-required)").textContent = 'Select product';
    document.querySelector("form.hs-form-spz fieldset.field-10 label span:not(.hs-form-required)").textContent = 'Location';
    document.querySelector("form.hs-form-spz fieldset.field-11 label span:not(.hs-form-required)").innerHTML = 'Comment <span>(Optional)</span>';
    document.querySelector('input.hs-input[name="cro1"]').setAttribute('value', '#2001 variant');
    var hiddenFields = document.querySelectorAll('input.hs-input[type="hidden"]');
    hiddenFields.forEach(function (hiddenField) {
      if (hiddenField.closest('fieldset')) {
        hiddenField.closest('fieldset').classList.add('hdField');
      }
    });

    //appending support link
    document.querySelector('.form-wrapper').insertAdjacentHTML('beforeend', `<div class="spz-privacy-policy"><p>Existing customer? Go to <a href="https://unanet.com/support/customer-support">support</a>.</p></div>`);

    var checkBox = document.querySelector('input[name="LEGAL_CONSENT.subscription_type_3203618"]');
    checkBox.closest('fieldset').classList.add('checkBox');
    // Comment Toggle
    document.querySelector('form.hs-form-spz fieldset.field-11').insertAdjacentHTML('afterbegin', `<div class="frm-commt">
      <div class="commt-text">Comment <span>(Optional)</span></div>
    </div>`);
    document.querySelector('form.hs-form-spz fieldset.field-11 .frm-commt').addEventListener('click', function () {
      this.remove();
      document.querySelector('form.hs-form-spz fieldset.field-11 .field').style.display = 'block';
      document.querySelector('form.hs-form-spz fieldset.field-11 .field .hs-input').focus();
    });
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

  // Progressive starts
  document.querySelector('.field-4').classList.add('hidden-spz');
  document.querySelector('.field-6').classList.add('hidden-spz');
  document.querySelector('.field-7').classList.add('hidden-spz');
  document.querySelector('.field-8').classList.add('hidden-spz');
  document.querySelector('.field-9').classList.add('hidden-spz');
  document.querySelector('.field-10').classList.add('hidden-spz');
  document.querySelector('.field-11').classList.add('hidden-spz');
  document.querySelector('.field-24').classList.add('hidden-spz');
  // Progressive ends
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
  document.body.classList.add('spz-3001_v1');
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
          <h2 class="form-heading">Contact sales</h2>
        </div>
      </div>
    </div>
  </section>
  <section class="trusted-partners-section">
    <div class="spz-container">
      <div class="three-card-slider swiper-container ">
        <div class="three-card-title">
          <h4 class="section-heading">Trusted by <strong>3,700+</strong> government contractor, architecture, engineer, and construction firms </h4>
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
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="notice"><p>*Image changed for privacy.</p></div>
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

function appendHubspotScript() {
  const e = document.createElement("script");
  e.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "2955669", formId: "923e76c8-f718-4993-b05d-f6022ba2ffa9", inlineMessage: "Thanks for submitting the form. A member of our team will be in touch shortly.", rawInlineMessage: "Thanks for submitting the form. A member of our team will be in touch shortly.", cssClass: "hs-form-spz hs-form stacked hs-custom-form", css: "", submitText: "Get started", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });', document.querySelector(".spz-wrapper .form-wrapper").appendChild(e)
}

document.querySelector(".body-wrapper").insertAdjacentHTML("afterbegin", pageContent()), hubSpotJS.onload = function () {
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
          if (event.type == 'textarea') {
            document.querySelector('form.hs-form-spz fieldset.field-11 .frm-commt').click();
          }
          if (event.type == 'checkbox') {
            event.checked = true;
          }
        }
      });
    }
  }, 100);
}

swiperJS.onload = function () {
  if (window.innerWidth < 991) {
    let intSlider = setInterval(() => {
      if (document.querySelector('.three-card-slider.swiper-container.swiper-container-horizontal')) {
        clearInterval(intSlider);
      }
      init_Slider();
    }, 100);
  }
  window.addEventListener('resize', function (event) {
    init_Slider();
  }, true);
}

function init_Slider() {
  var Swipes = new Swiper('.swiper-container', {
    // loop: true,
    // autoplay: true,
    centeredSlides: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  if (window.innerWidth > 990) {
    if (Swipes !== undefined) {
      Swipes.destroy(true, true);
    }
  }
}