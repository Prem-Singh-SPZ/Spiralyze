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
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1694522988/drata/6012/checkbox_check.svg" as="image">`
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