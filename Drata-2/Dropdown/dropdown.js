(function () {
  var bodyInterval = setInterval(function () {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-2001')) {
      clearInterval(bodyInterval);

      const hubSpotJS = document.createElement('script');
      hubSpotJS.src = '//js.hsforms.net/forms/embed/v2.js';
      hubSpotJS.type = 'text/javascript';
      hubSpotJS.setAttribute('charset', 'utf-8');
      document.head.appendChild(hubSpotJS);

      bodyEle.classList.add('spz-2001');

      //Hero section content feeding
      waitForElm('.css-1tsiji8-Form-root form.hs-form-private .hs-form-field').then(function (elm) {
        appendInputLabel();
        focusFields();
        checkboxDropdown();

        document.querySelector('form.hs-form-private .hs-fieldtype-checkbox.field.hs-form-field legend.hs-field-desc').insertAdjacentHTML('afterend', ` <button class="spz-btn custom-input-btn" type="button"><span class="value-container"></span></button>`);

        window.addEventListener("click", function (e) {
          if (e.target.classList.contains("spz-btn")) {
            e.target.parentElement.classList.toggle('field-focus');
            dropdownFunctionality();
          }
          if (e.target.classList.contains("hs-button")) {
            checkError();
          }
          if (e.target.closest('ul')) {
            if (e.target.closest('ul').classList.contains('hs-error-msgs')) {
              checkError();
            }
          }
        });

        var jQueryInterval = setInterval(function () {
          if (typeof jQuery != 'undefined') {
            clearInterval(jQueryInterval);

            jQuery('body').click(function (evt) {
              if (!jQuery(evt.target).hasClass("hs_capability_types") && jQuery(evt.target).closest('.hs-fieldtype-checkbox.field.hs-form-field').length == 0) {
                if (jQuery(".hs-fieldtype-checkbox.field.hs-form-field").hasClass('field-focus')) {
                  jQuery(".hs-fieldtype-checkbox.field.hs-form-field").removeClass('field-focus');
                  dropdownFunctionality();
                }
              }
            });
          }
        });
      });

      hubSpotJS.onload = function () {
        appendHubspotScript();
      }
    }
  });

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

  // Append hubspot script in '.form-wrapper-spz' div
  function appendHubspotScript() {
    const scriptSPZ = document.createElement('script');

    scriptSPZ.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "7817592", formId: "a6043509-2a53-4a93-8c05-b64cb53299e8", cssClass: "hs-form-spz", css: "", submitText: "Schedule Demo", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });';
    if (document.querySelector('.css-12ive4l-Form-formContainer')) {
      document.querySelector('.css-12ive4l-Form-formContainer').appendChild(scriptSPZ);
    }
  }

  // Generic Code
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

  // Create input label with placeholder text
  function appendInputLabel() {
    document.querySelectorAll('.hs-form-field:not(.smart-field)').forEach(function (el) {
      el.querySelector('label').classList.add('hs-label-spz');
    });
  }

  // On input focus add class on closest parent .field class
  function focusFields() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
      el.addEventListener('focus', function () {
        el.closest('.field').classList.add('field-focus');
      });
      el.addEventListener('blur', function () {
        el.closest('.field').classList.remove('field-focus');
        checkError();
      });

      // add event listeners to the input element
      el.addEventListener('keypress', () => {
        checkError();
        dropdownFunctionality();
      });

      el.addEventListener('keydown', () => {
        checkError();
        dropdownFunctionality();
      });

      el.addEventListener('keyup', () => {
        checkError();
        dropdownFunctionality();
      });
    });
  }

  // Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
  function checkError() {
    let timeBuffer = setInterval(() => {
      document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.field').querySelector('.error') != null) {
          el.closest('.field').classList.add('field-error');
        } else {
          el.closest('.field').classList.remove('field-error');
        }
      });
      document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
        if (el && el.value) {
          el.closest('.field').classList.add('input-filled');
        } else {
          el.closest('.field').classList.remove('input-filled');
        }
      });
    },);

    setTimeout(() => {
      clearInterval(timeBuffer);
    }, 1000);
  }
})();