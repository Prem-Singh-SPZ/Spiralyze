const testClass = `spz-6003`;
const heroSelector = `.zy-hero-text-and-image`;
const position = "afterend"
const formSelector = `#mktoForm_1031`;
const heroContent = {
  customHTMLBefore: `<h2 class="form heading">Get a demo</h2>`,
  contentSuperHeading: "Sales Cloud for Personal Lines",
  contentHeading: `<span class="highlight-text">Streamline sales</span> from prospecting to renewals.`,
  features: [
    {
      checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1720109308/zywave/6003/frame_1171275209.svg",
      checkmarkImageAlt: `Lead generation`,
      featureItemContent: `<span class="highlight-feature">Lead generation.</span> Access our database of millions of insured and uninsured households. Get in-depth property details. Contact ideal clients.`,
    },
    {
      checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1720109312/zywave/6003/frame_1171275211.svg",
      checkmarkImageAlt: `Quoting and proposals`,
      featureItemContent: `<span class="highlight-feature">Quoting and proposals.</span> Automatically generate quotes across multiple carriers at once. Instantly compare. 200+ carriers for auto, home, renters, and more.`,
    },
    {
      checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1721907493/zywave/6003/frame_1171275664.svg",
      checkmarkImageAlt: `Management`,
      featureItemContent: `<span class="highlight-feature">Management.</span> Centralize contact info. Automate new client account creation, reminders, email campaigns, and reporting. All from one platform.`,
    },
  ],
  socialProofImage: [
    {
      breakPoint: 992,
      url: "//res.cloudinary.com/spiralyze/image/upload/v1719934894/zywave/6003/frame_1000003341.svg",
    },
    {
      breakPoint: 768,
      url: "//res.cloudinary.com/spiralyze/image/upload/v1719934896/zywave/6003/frame_1000003342.svg",
    },
    {
      breakPoint: 320,
      url: "//res.cloudinary.com/spiralyze/image/upload/v1719934897/zywave/6003/frame_1000003343.svg",
    },
  ],
};

//Add hidden fields
function setHiddenFields() {
  if (document.querySelector('.mktoFormRow [name="cR02"]')) {
      document.querySelector('.mktoFormRow [name="cR02"]').setAttribute('value', '#6003_variant');
  }
}
waitForElm('.spz-6003 .spz-hero-section form.mktoForm .mktoFormRow .mktoField[name="cR02"]').then(function (elm) {
  setHiddenFields();
});

function form_modify() {
  // Add class in mktoFormRow using count
  var form_fields = document.querySelectorAll('.spz-6003 .spz-hero-section .spz-form-section form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
    var dynamicClass = 'field-' + (i + 1);
    form_fields[i].classList.add(dynamicClass);
  }

  // form CTA Update
  var form_button = setInterval(() => {
    var textChng = document.querySelector('.spz-6003 .spz-hero-section .spz-form-section form.mktoForm .mktoButtonRow .mktoButton');
    if (textChng) {
      textChng.innerText = 'Submit';
      clearInterval(form_button);
    }
  }, 100);

  // Updating Form Labels
  document.querySelector('#LblFirstName').textContent = "First name";
  document.querySelector('#LblLastName').textContent = "Last name";
  document.querySelector('#LblwebsiteFormJobDescription').textContent = "Job category";
  document.querySelector('select#websiteFormJobDescription').options[0].textContent = 'Job category';
  document.querySelector('#LblCompany').textContent = "Company";
  document.querySelector('#LblEmail').textContent = "Business email";
  document.querySelector('#LblPhone').textContent = "Phone";
  document.querySelector('#Lblringdna100__ProductInterest__c').textContent = "I want to discuss";
  document.querySelector('select#ringdna100__ProductInterest__c').options[0].textContent = 'I want to discuss';

  // Change Field Position
  document.querySelector('.mktoFormRow.field-7').after(document.querySelector('.mktoFormRow.field-6'));

  var all_inputs = document.querySelectorAll('.spz-6003 .spz-hero-section .spz-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-6003 .spz-hero-section .spz-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
  all_inputs.forEach(function(element) {
    element.removeAttribute('placeholder');
  });
  // form state
  var selector = '.spz-6003 .spz-hero-section .spz-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-6003 .spz-hero-section .spz-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
  document.addEventListener('focus', function (event) {
    if (event.target.matches(selector)) {
      event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
    }
  }, true);
  var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
  for (s_event of eventList) {
    document.addEventListener(s_event, function (event) {
      if (event.target.matches(selector)) {
        if (event.target.value == null || event.target.value == '') {
          event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
        } else {
          event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
        }
        if (event.type == "change") {
          if (event.target.value == "") {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
          } else {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
            event.target.parentNode.querySelector('.mktoError').style.display = 'none';
          }
        } else {
          if (event.target.classList.contains('mktoInvalid')) {
            var closestError = event.target.parentNode.querySelector('.mktoError');
            if (closestError && closestError.style.display == '') {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
            } else {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
            }
          } else {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
          }
        }
      }
    });
  }
    
  document.addEventListener('focusout', function (event) {
    document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
      elem.classList.remove('active', 'typing');
    })
  }, true);
}

function addBaseline(testClass, formData, whereToPut, formSelector, heroSelector) {
  document.body.classList.add(testClass);
  const formTemplate = `<div class="spz-hero-section">
    <div class="spz-hero-wrapper">
      <div class="spz-hero-content">
        <div class="content-section">
          ${
            formData.contentSuperHeading.replace(/\s/g, "").length !== 0
              ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
              : ""
          }
          ${
            formData.contentHeading.replace(/\s/g, "").length !== 0
              ? `<h2 class="content-heading">${formData.contentHeading}</h2>`
              : ""
          }
          <div class="spz-features-wrap">
            ${
              formData.features.length > 0
                ? formData.features
                  .map((item) => {
                    return `<div class="feature-item">
                      <img src="${item.checkmarkImage}" alt="${item.checkmarkImageAlt}" />
                      <span>${item.featureItemContent}</span>
                    </div>`;
                  })
                  .join("")
                : ""
            }
          </div>
        </div>
        <div class="spz-form-section">
          ${
            formData.customHTMLBefore.replace(/\s/g, "").length !== 0
              ? formData.customHTMLBefore
              : ""
          }
          <div class="the-form"></div>
        </div>
      </div>
      <div class="social-proof-image">
        <picture>
          ${formData.socialProofImage.map(
            (item) => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
          ).join("")}
          <img src="${formData.socialProofImage[0].url}" alt="Social proof">
        </picture>
      </div>
    </div>
  </div>`;
  document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
  let formLoaded = setInterval(()=>{
  	if(document.querySelector(formSelector)){
  		clearInterval(formLoaded)
  		document.querySelector(".spz-hero-section .the-form").appendChild(document.querySelector(formSelector));
      waitForElm('.spz-6003 .spz-hero-section .spz-form-section form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFieldWrap input').then(function () {
        form_modify();
      });
  	}
  })
  
}
addBaseline(testClass,heroContent,position,formSelector,heroSelector);

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
