//DEV 1/6. Put your asana task URL here
const asana_URL = `https://app.asana.com/0/1202434538289854/1209285828853568`
//DEV 2/6. Add content inside the box
const template_formElements = {
  customHTMLBefore: `
	${ /*This html goes is inserted before the form */'' }
    <div class="spz-form-heading">Show me Demo</div>
  `,
  customHTMLAfter: ``,
};

//DEV 3/6.  Adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_formUniqueSelector = "#signup-form" 

//DEV 4/6. Find the class or ID of the control inputs and place it below e.g. "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
const template_inputsSelectors = ["#signup_first_name", "#signup_last_name", "#signup_email", "#signup_company_name", "#signup_job_function"]

//DEV 5/6. Add Form labels below
const template_labelValues = ["First Name", "Last Name", "Work Email", "Organization", "Role"] 

const formLoaded = setInterval(() => {
  if(document.querySelector(template_formUniqueSelector) && document.querySelectorAll(`${template_formUniqueSelector} input`).length > 0){
    clearInterval(formLoaded);
    addForm(template_formElements, template_formUniqueSelector);
    animateLabels(template_inputsSelectors, template_labelValues)
  }
})

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to add input listeners like focus, blur and add class to parent div
function addInputListener(input) {
  input.placeholder = "";
  input.addEventListener("focus", function () {
    input.closest(".spz-input-wrap").classList.remove("has-value");
    input.closest(".spz-input-wrap").classList.add("focused");
  });
  input.addEventListener("blur", function () {
    if (input.value.length > 0) {
      input.closest(".spz-input-wrap").classList.remove("focused");
      input.closest(".spz-input-wrap").classList.add("has-value");
    } else {
      input.closest(".spz-input-wrap").classList.remove("focused");
    }
  });
}
//Helper function to animate labels for inputs
function animateLabels(inputs, template_labelValues) {
  inputs.forEach((item, index) => {
    const parentDiv = findParent(item);
    if (!parentDiv) return; // Skip if we can't find a suitable parent

    let input = document.querySelector(item);

    // Check if the input is wrapped in another div (e.g., for error states)
    if (input.parentElement !== parentDiv) {
      input = input.parentElement; // Use the wrapper as our insertion point
    }

    // Check if we've already added our custom label
    if (parentDiv.querySelector('.label-spz')) return;

    const existingLabel = parentDiv.querySelector('label:not(.label-spz)');
    if (existingLabel) existingLabel.style.display = 'none';

    const label = document.createElement('label');
    label.innerText = template_labelValues[index];
    label.classList.add('label-spz');
    label.classList.add(`label-spz-${item.replace(/[^a-zA-Z0-9]/g, '')}`);
    label.style.width = '';
    parentDiv.classList.add('spz-input-wrap');

    // Check if the input is a select and the first option has an empty value
    if (input.tagName === 'SELECT' && input.options[0].value === '') {
      parentDiv.classList.add('has-value');
    } else if (input.value) {
      parentDiv.classList.add('has-value');
    }

    label.addEventListener('click', function (e) {
      const actualInput = parentDiv.querySelector('input, select, textarea');
      if (actualInput) actualInput.focus();
    });

    parentDiv.insertBefore(label, input);

    addInputListener(document.querySelector(item));
    document.querySelector(item).setAttribute('placeholder', '');
  });
}
function findParent(inputSelector) {
  const input = document.querySelector(inputSelector);
  if (!input) return null;

  let currentElement = input;

  while (currentElement && currentElement.tagName !== 'BODY') {
    // Check if this element contains a label (including hidden ones)
    const label = currentElement.querySelector('label');

    // Check if this element contains the input or its wrapper
    const containsInput = currentElement.contains(input);

    // If we have both a label and the input, this is likely our target
    if (label && containsInput) {
      return currentElement;
    }

    currentElement = currentElement.parentElement;
  }

  // If no suitable parent is found, return the immediate parent
  return input.parentElement;
}

// This is the code to generate the form over UI section do no edit it
function addForm(formData, formSelector) {
  const formTemplate = `
        <div class="spz-form-wrap">
          <div class="form-section">
            ${
              formData.customHTMLBefore.replace(/\s/g, "").length !== 0
                ? formData.customHTMLBefore
                : ""
            }
            </div>
            <div class="the-form"></div>
            ${
              formData.customHTMLAfter.replace(/\s/g, "").length !== 0
                ? formData.customHTMLAfter
                : ""
            }
          </div>
        </div>
        `;
  document.body.insertAdjacentHTML(
    "beforeend",
    formTemplate
  ); /*Insert spz-form-wrap before closing body tag*/
  if (!document.querySelector(formSelector)) {
    document
      .querySelector(".spz-form-wrap .the-form")
      .insertAdjacentHTML(
        "beforeend",
        "<div style='color:red;'>Add proper form selector in code to load form</div>"
      );
  } else {
    const formLoaded = setInterval(() => {
      if (
        document.querySelector(formSelector) &&
        document.querySelectorAll(`${formSelector} input`).length > 0
      ) {
        clearInterval(formLoaded);
        document
          .querySelector(".spz-form-wrap .the-form")
          .appendChild(
            document.querySelector(formSelector)
          ); /*Apply form to spz form wrapper*/
      }
    });
  }
}