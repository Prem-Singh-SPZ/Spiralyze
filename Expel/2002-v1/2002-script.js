(function () {

  const testDetails = {
    test_num: '2002',
    formSelector: "#mktoForm_2231",

    cardContent: {
      formHeading: `Get a Demo`,
    },

    useCustomFormLabels: true,
    formFields: [
      {
        inputSel: "#Email", // input element selector
        labelSel: "#LblEmail", // label element selector
        labelText: "Business Email", // label text/value
      },
      {
        inputSel: "#FirstName",
        labelSel: "#LblFirstName",
        labelText: "First Name",
      },
      {
        inputSel: "#LastName",
        labelSel: "#LblLastName",
        labelText: "Last Name",
      },
      {
        inputSel: "#Company",
        labelSel: "#LblCompany",
        labelText: "Company Name",
      },
      {
        inputSel: "#Company_Size__c",
        labelSel: "#LblCompany_Size__c",
        labelText: "Company Size",
      },
      {
        inputSel: "#Phone",
        labelSel: "#LblPhone",
        labelText: "Phone Number",
      },
      {
        inputSel: "#Person_Country__c",
        labelSel: "#LblPerson_Country__c",
        labelText: "Country",
      },
    ],


    // spzHiddenFields: [
    //   {
    //     inputSel: "#CPC__c",
    //     value: `variant_${this.test_num}`,
    //   },
    // ],
  };

  waitForElm(`${testDetails.formSelector} .mktoFormRow .mktoFieldWrap .mktoField`).then(function (elm) {
    restructureForm();
    addForm(testDetails.cardContent);
  });


  // function will accept json which will contain inputSel, labelSel and labelText
  function animateLabels(data) {
    data.formFields.map((item) => {
      const label = document.querySelector(item.labelSel);
      const parentDiv = findParent(item.inputSel);

      // If default labels are used then no need to change the label text
      if (data.useCustomFormLabels && parentDiv) {
        label.innerText = item.labelText;
      }
      // label.classList.add(`label-spz-${item.labelSel.replace("#", "")}`);
      if (label) {
        label.style.width = "";
        document.querySelector(item.inputSel).placeholder = "";
      }

      if (parentDiv) {
        parentDiv.classList.add("spz-input-wrap");
      }
    });
    focusFields();
  }

  //Helper function to find parent div of input or select element
  function findParent(elementSelector) {
    try {
      let element = document.querySelector(elementSelector);
      let wrapper = element.closest("div"); //define parent's tag name

      // Check if parent div contains input or select element and label
      if ((wrapper.innerHTML.includes("<input") || wrapper.innerHTML.includes("<select") || wrapper.innerHTML.includes("<textarea")) && wrapper.innerHTML.includes("<label")) {
        return wrapper;
      } else if (wrapper.parentElement.innerHTML.includes("<input") && wrapper.parentElement.innerHTML.includes("<label")) {
        return wrapper.parentElement;
      } else {
        console.log("Something is wrong");
      }
    } catch (error) {
      console.error("Please check if selector is correct: ", elementSelector);
    }
  }

  // This is the code to generate the form over UI section do no edit it
  function addForm(formData) {
    const formSelector = testDetails.formSelector;

    // Added id to formSelector (Used in CSS to override control styles)
    const formTemplate = `
        <div class="spz-form-container">
          <div class="spz-form-wrap" id="spz-form-wrap">
              <div class="form-section">
                ${formData.formHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.formHeading}</div>` : ""}
                <div class="the-form"></div>
              </div>
            </div>
        </div> `;

    // Remove existing spz-form-wrap if exist (avoiding duplicate)
    if (document.querySelector('.spz-form-wrap')) {
      document.querySelector('.spz-form-wrap').remove();
    }

    document.body.insertAdjacentHTML("beforeend", formTemplate); /*Insert spz-form-wrap before closing body tag*/

    if (!document.querySelector(formSelector)) {
      document.querySelector(".spz-form-wrap .the-form").insertAdjacentHTML("beforeend", "<div style='color:red;'>Please add proper form selector in code to load form correctly.</div>");
    } else {
      const formLoaded = setInterval(() => {
        if (document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
          clearInterval(formLoaded);
          document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(formSelector)); /*Apply form to spz form wrapper*/
        }
      });
    }

    animateLabels(testDetails);

    // Add class to body based on test number
    document.body.classList.add(`spz-${testDetails.test_num}`)
  }


  // On input focus add class on closest parent field class
  function focusFields() {
    document.querySelectorAll(`${testDetails.formSelector} .form-fields-row .mktoField:not([type="checkbox"]):not([type="hidden"]):not([type="checkbox"])`).forEach(function (el) {
      el.addEventListener('focus', function () {
        el.closest('.spz-input-wrap').classList.add('focused');
        checkError(el);
      });
      el.addEventListener('blur', function () {
        el.closest('.spz-input-wrap').classList.remove('focused');
        checkError(el);
      });

      // add event listeners to the input element
      el.addEventListener('keypress', () => {
        checkError(el);
      });

      el.addEventListener('change', () => {
        checkError(el);
      });

      el.addEventListener('keydown', () => {
        checkError(el);
      });

      el.addEventListener('keyup', () => {
        checkError(el);
      });
    });
  }

  // Function to add .field-error class on closest parent .field class if .error is exist on input
  function checkError(elem) {
    let timeBuffer = setInterval(() => {
      if (elem.closest('.spz-input-wrap').querySelector('.mktoError') && elem.closest('.spz-input-wrap').querySelector('.mktoInvalid')) {
        elem.closest('.spz-input-wrap').classList.add('field-error');
      } else {
        elem.closest('.spz-input-wrap').classList.remove('field-error');
      }
      if (elem && elem.value && (elem.value != '')) {
        elem.closest('.spz-input-wrap').classList.add('filled');
        // elem.closest('.spz-input-wrap').classList.remove('field-error');
      } else {
        elem.closest('.spz-input-wrap').classList.remove('filled');
        // elem.closest('.spz-input-wrap').classList.add('field-error');
      }

      // checkVisibleInputs();
    }, 100);

    setTimeout(() => {
      clearInterval(timeBuffer);
    }, 1000);
  }

  // Why? - To make it in 2 columns properly
  // Add new 'div.form-fields-row' inside formSelector and move all '.mktoFormCol' in '.mktoFormRow'
  function restructureForm() {
    let formSelector = testDetails.formSelector;

    // Insert new 'div.form-fields-row' inside formSelector
    document.querySelector(formSelector).insertAdjacentHTML('afterbegin', '<div class="form-fields-row"></div>');

    // Move all '.mktoFormCol' to '.form-fields-row'
    document.querySelectorAll(`${formSelector} .mktoFormCol:not(.mktoButtonRow)`).forEach(function (col) {
      if (col.querySelector('.mktoField:not(#honeypot)')) {
        // Append each '.mktoFormCol' to '.form-fields-row'
        document.querySelector('.form-fields-row').appendChild(col);

        // Removing inline styles from mktoFormCol
        col.removeAttribute('style');

        // Remove inline styles from .mktoField
        col.querySelector('.mktoField').removeAttribute('style');

        // Add unique class to each field group, take input name and add it as class
        col.classList.add('spz-' + col.querySelector('.mktoField').name.toLowerCase());

        // Remove all width from .mktoHasWidth in all columns
        if (col.querySelectorAll('.mktoHasWidth').length > 0) {
          col.querySelectorAll('.mktoHasWidth').forEach(function (el) {
            el.removeAttribute('style');
          });
        }

        // If .mktoLogicalField is present then add class to parent .mktoFormCol
        if (col.querySelector('.mktoLogicalField')) {
          col.classList.add('checkbox-group');
        }

      }
    });

    waitForElm(`.spz-ispartner`).then(function (elm) {
      document.querySelector('body.spz-2002 .mktoFormCol.spz-ispartner').insertAdjacentElement('beforebegin', document.querySelector('body.spz-2002 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoHtmlText'));
      document.querySelector('body.spz-2002 form.mktoForm .mktoButtonRow').insertAdjacentElement('afterend', document.querySelector('body.spz-2002 form.mktoForm .mktoCaptchaDisclaimer'));

      document.querySelector('body.spz-2002 #Company_Size__c option[value=""]').textContent = 'Company Size';
    });

  }


  // Wait for element to load
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
})();