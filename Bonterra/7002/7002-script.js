const imgUrl = '//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/7002/';

// Form Container (Parent Element)
const triageData = [
    //Question 1 start
    {
        questionHeading: "What is your organization type?",
        answers: [
            {
                answerFormValue: 'Nonprofit',
                answerText: 'Nonprofit',
                answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-leaf.svg'
            },
            {
                answerFormValue: 'Corporation',
                answerText: 'Corporation',
                answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-briefcase.svg'
            },
            {
                answerFormValue: 'Foundations',
                answerText: 'Foundation/Grant maker',
                answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-grant.svg'
            },
            {
                answerFormValue: 'Government',
                answerText: 'Public Agency',
                answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-buildings.svg'
            }
        ]
    },
    //Question 1 end
]

const step2Data = {
    answers: [
        {
            questionHeading: "What product(s) are you interested in?",
            title: 'Nonprofit',
            subAnswers: [
                {
                    answerFormValue: 'Fundraising and Engagement',
                    answerText: 'Fundraising and Engagement',
                    answerDesc: 'Automate donor and supporter outreach',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-hand.svg'
                },
                {
                    answerFormValue: 'Impact Management',
                    answerText: 'Case Management',
                    answerDesc: 'Optimize case management & demonstrate impact',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-people.svg'
                },
                {
                    answerFormValue: 'Strategic Philanthropy',
                    answerText: 'Corporate Philanthropy',
                    answerDesc: 'Manage grants, budgets, and employee giving',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-money.svg'
                }
            ]
        },
        {
            questionHeading: "What product(s) are you interested in?",
            title: 'Nonprofit',
            subAnswers: [
                {
                    answerFormValue: 'Fundraising and Engagement',
                    answerText: 'Fundraising and Engagement',
                    answerDesc: 'Automate donor and supporter outreach',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-hand.svg'
                },
                {
                    answerFormValue: 'Impact Management',
                    answerText: 'Case Management',
                    answerDesc: 'Optimize case management & demonstrate impact',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-people.svg'
                },
                {
                    answerFormValue: 'Strategic Philanthropy',
                    answerText: 'Corporate Philanthropy',
                    answerDesc: 'Manage grants, budgets, and employee giving',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-money.svg'
                }
            ]
        },
    ]
}


const sectionSelector = `#HERO .container .block-wrapper .block-3 > .mktoForm .lpeCElement.Bonterra__Demo_Request__FE`;
const position = "beforeend";
const formUniqueSelector = `body.spz-7002 #HERO .container .block-wrapper .block-3 > .mktoForm .formSpan`;
const leadingLogoposition = "afterend";

let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        preloadImages();

        if (!body.classList.contains('spz-7002')) {
            body.classList.add('spz-7002');
            createTest();
        }
    }
});

function createTest() {
    waitForElm('#HERO form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').then(function () {
        formModify();

        waitForElm('.question-form').then(function () {
            document.querySelector('.question-form').appendChild(document.querySelector(formUniqueSelector));
        });
        prefillSelectFields();
    });

    //add url pathname to body class
    let url = window.location.pathname;
    let urlArr = url.split('/');
    let urlPath = urlArr[urlArr.length - 1].split('.')[0];
    document.body.classList.add(urlPath);

    addTriage(triageData, step2Data);

    // Check if the user has already submitted the form in this session
    if (localStorage.getItem('formSubmitted')) {
        document.body.classList.add('repeat-user');
        const items = document.querySelectorAll('.progress-item');
        items.forEach((item, i) => {
            item.classList.remove('active'); // Remove default active class
            item.classList.add(i < items.length - 1 ? 'completed' : 'active');
        });
    }
}

function formModify() {
    document.querySelector('#HERO form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').textContent = "Submit";

    addUniqueClass();

    // Change Label Text
    document.querySelector('label#LblFirstName').textContent = "First Name";
    document.querySelector('label#LblLastName').textContent = "Last Name";
    document.querySelector('label#LblCompany').textContent = "Organization Name";
    document.querySelector('label#LblEmail').textContent = "Email Address";
    document.querySelector('label#LblPhone').textContent = "Phone Number";
    document.querySelector('label#LblIndustry').textContent = "Organization Type";
    document.querySelector('label#LblList_Size__c').textContent = "Supporter/Donor List Size";
    document.querySelector('label#LblProduct_Interest__c').textContent = "Product Interest";

    // Change Field Positions
    const email_field = document.querySelector('.spz-7002 #HERO form.mktoForm .Email-row');
    const orgname_field = document.querySelector('.spz-7002 #HERO form.mktoForm .Company-row');
    email_field.before(orgname_field);

    const donor_field = document.querySelector('.spz-7002 #HERO form.mktoForm .List_Size__c-row');
    const orgtype_field = document.querySelector('.spz-7002 #HERO form.mktoForm .Industry-row');
    orgtype_field.after(donor_field);


    focusFields();

    document.querySelector('.spz-7002 #HERO form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
        document.querySelectorAll(`.spz-7002 #HERO form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
            let Buffertime = setInterval(() => {
                if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none') {
                    elem.closest('.mktoFieldWrap').classList.add('error');
                } else {
                    elem.closest('.mktoFieldWrap').classList.remove('error');
                }
                if (elem && elem.value && (elem.value != '')) {
                    elem.closest('.mktoFieldWrap').classList.add('filled');
                } else {
                    elem.closest('.mktoFieldWrap').classList.remove('filled');
                }
            }, 100);

            setTimeout(() => {
                clearInterval(Buffertime);
            }, 1000);
        });
    });
}

function addUniqueClass() {
    document.querySelectorAll('.spz-7002 #HERO form.mktoForm .mktoFormRow').forEach(function (element) {
        const mktoField = element.querySelector('.mktoField');

        if (mktoField && mktoField.getAttribute('type') == 'hidden') {
            element.classList.add('hideField');
        }
        else {
            element.classList.add(element.querySelector('.mktoField').getAttribute('id') + '-row');
            element.querySelector('.mktoField').setAttribute('placeholder', '');
        }
    });
}

// On input focus add class on closest parent field class
function focusFields() {
    document.querySelectorAll(`.spz-7002 #HERO form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
        el.addEventListener('focus', function () {
            el.closest('.mktoFieldWrap').classList.add('active', 'typing');
            checkError(el);
        });
        el.addEventListener('blur', function () {
            el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
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

        //on mouse over add class on closest parent field class and remove on mouse out
        el.addEventListener('mouseover', function () {
            el.closest('.mktoFieldWrap').classList.add('hover');
        });
        el.addEventListener('mouseout', function () {
            el.closest('.mktoFieldWrap').classList.remove('hover');
        });
    });
}

// Function to add .field-error class on closest parent .field class if .error is exist on input
function checkError(elem) {
    let timeBuffer = setInterval(() => {
        if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none' && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
            elem.closest('.mktoFieldWrap').classList.add('error');
        } else {
            elem.closest('.mktoFieldWrap').classList.remove('error');
        }
        if (elem && elem.value && (elem.value != '')) {
            elem.closest('.mktoFieldWrap').classList.add('filled');
        } else {
            elem.closest('.mktoFieldWrap').classList.remove('filled');
        }
    }, 100);

    setTimeout(() => {
        clearInterval(timeBuffer);
    }, 1000);

    checkValidFields();
}

function addTriage(triageData, step2Data) {
    //Append triage section
    waitForElm(sectionSelector).then(function () {
        document.querySelector(sectionSelector).insertAdjacentHTML(position, `<div class="spz-triage-wrap">
          <div class="questions-progress">
              ${triageData.length !== 0 && triageData.map((item, index) => `<div class="progress-item ${index === 0 ? 'active' : ''}"></div>`).join('')}
              <div class="progress-item"></div>
          </div>
          <h2 class="form-heading">Get a Demo</h2>
          <div class="questions-wrap">
              ${triageData.length !== 0 && triageData.map((item, index) => {
            return `${index == 0 ? `<div class="question-item question-${index + 1} ">
                          <div class="question-heading">${item.questionHeading}</div>
                          <div class="answers-wrap">
                                  ${item.answers && item.answers.map((itemm, indexx) => {
                const sanitizedQuestionHeading = item.questionHeading.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
                return `<div class="answer-item">
                                                  <input type="radio" name="${sanitizedQuestionHeading}" value="${itemm.answerFormValue}">
                                                  <div class="answer-content">
                                                          <div class="answer-checkbox"><span></span></div>
                                                          ${itemm.answerImage && itemm.answerImage.length !== 0 ? `<img src="${itemm.answerImage}" class="answer-image" alt="${itemm.answerText}"/>` : ``}
                                                          <div class="answer-text">${itemm.answerText}</div>
                                                          ${itemm.answerDesc && itemm.answerDesc.length !== 0 ? `<div class="answer-desc">${itemm.answerDesc}</div>` : ``}
                                                  </div>
                                          </div>`;
            }).join('')}
                                  <div class="step-error"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1724831150/bonterra/1002/Helper_container.svg" alt="Error Icon">Please select an option.</div>
                          </div>
                          <div class="next-question">Next</div>
                  </div>` : ``}`;
        }).join('')}

         ${step2Data.answers.length !== 0 && step2Data.answers.map((item, index) => {
            console.log(item);
            return `${index !== -1 ? `<div class="question-item question-${index + 2} ${item.title}">
                          <div class="question-heading">${item.questionHeading}</div>
                          <div class="answers-wrap">
                                  ${item.subAnswers && item.subAnswers.map((itemm, indexx) => {
                const sanitizedQuestionHeading = item.questionHeading.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
                return `<div class="answer-item">
                                                  <input type="checkbox" name="${sanitizedQuestionHeading}" value="${itemm.answerFormValue}">
                                                  <div class="answer-content">
                                                          <div class="answer-checkbox"><span></span></div>
                                                          ${itemm.answerImage && itemm.answerImage.length !== 0 ? `<img src="${itemm.answerImage}" class="answer-image" alt="${itemm.answerText}"/>` : ``}
                                                          <div class="answer-text">${itemm.answerText}</div>
                                                          ${itemm.answerDesc && itemm.answerDesc.length !== 0 ? `<div class="answer-desc">${itemm.answerDesc}</div>` : ``}
                                                  </div>
                                          </div>`;
            }).join('')}
                          </div>
                          <div class="next-question">Next</div>
                  </div>` : ``}`;
        }).join('')}
              <div class="question-form spz-hidden spz-form-wrap"></div>
          </div>
      </div>`);
    });


    // Pre-check options for step 1 and step 2
    ['Which-best-describes-you', 'How-we-can-help'].forEach(name => {
        const savedValue = localStorage.getItem(name);
        if (savedValue) {
            const inputToCheck = document.querySelector(`.answer-item input[name="${name}"][value="${savedValue}"]`);
            if (inputToCheck) inputToCheck.checked = true;
        }
    });

    // Store selected values in local storage and handle error state removal
    ['Which-best-describes-you', 'How-we-can-help'].forEach(name => {
        document.querySelectorAll(`.answer-item input[name="${name}"]`).forEach(item => {
            item.addEventListener('change', e => {
                localStorage.setItem(name, e.target.value);
                const stepContent = e.target.closest('.answers-wrap');
                if (stepContent?.classList.contains('error')) stepContent.classList.remove('error');
            });
        });
    });
}

//create and return HTML template for triage section
function step1Html(triageData) {
    let htmlis = `${triageData.length !== 0 && triageData.forEach(element, index => {
        `<div class="question-item question-${index + 1} ">
                          <div class="question-heading">${item.questionHeading}</div>
                          <div class="answers-wrap">
                          `+ element.array.forEach(element => {
            `<div class="answer-item">
                                                  <input type="radio" name="${sanitizedQuestionHeading}" value="${itemm.answerFormValue}">
                                                  <div class="answer-content">
                                                          <div class="answer-checkbox"><span></span></div>
                                                          ${itemm.answerImage && itemm.answerImage.length !== 0 ? `<img src="${itemm.answerImage}" class="answer-image" alt="${itemm.answerText}"/>` : ``}
                                                          <div class="answer-text">${itemm.answerText}</div>
                                                          ${itemm.answerDesc && itemm.answerDesc.length !== 0 ? `<div class="answer-desc">${itemm.answerDesc}</div>` : ``}
                                                  </div>
                                          </div>`
        }); +`
                          <div class="step-error"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1724831150/bonterra/1002/Helper_container.svg" alt="Error Icon">Please select an option.</div>
                          </div>
                          <div class="next-question">Next</div>
                  </div>`
    })}`;
    return htmlis;
}


// Function to pre-fill form select fields based on stored values
const prefillSelectFields = () => {
    ['Industry', 'capability'].forEach(field => {
        const value = localStorage.getItem(field === 'Industry' ? 'Which-best-describes-you' : 'How-we-can-help');
        if (value) {
            const select = document.querySelector(`select[name = "${field}"]`);
            if (select) select.value = value;
        }
    });
};

//Handle next question navigation and validation
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("next-question")) {
        const stepContent = e.target.closest('.question-item').querySelector('.answers-wrap');
        if (Array.from(stepContent.querySelectorAll('input')).some(checkbox => checkbox.checked)) {
            e.target.parentElement.classList.add('spz-hidden');
            e.target.parentElement.nextElementSibling.classList.remove('spz-hidden');
            const active = document.querySelector('.progress-item.active');
            active.classList.replace('active', 'completed');
            active.nextElementSibling.classList.add('active');
            // Call prefill function to ensure form fields are filled when step is visible
            prefillSelectFields();
        } else {
            stepContent.classList.add('error');
        }
    }
});

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

function preloadImages() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        < link rel = "preload" href = "${imgUrl}radio-check.svg" as="image" >
            <link rel="preload" href="${imgUrl}checkbox-un.svg" as="image">
                <link rel="preload" href="${imgUrl}checkbox-check.svg" as="image">
                    <link rel="preload" href="${imgUrl}radio-hover.svg" as="image">
                        <link rel="preload" href="${imgUrl}checkbox-hover.svg" as="image">
                            `
    );
}