const imgUrl = '//res.cloudinary.com/spiralyze/image/upload';

// Form Container (Parent Element)
let triageData = [
    //Question 1 start
    {
        titleQues: "What is your organization type?",
        answers: [
            {
                formVal: 'Nonprofit',
                copy: 'Nonprofit',
                image: imgUrl + '/v1724679709/bonterra/1002/icon-leaf.svg',
                isSelected: false
            },
            {
                formVal: 'Government',
                copy: 'Public Sector',
                image: imgUrl + '/v1724679709/bonterra/1002/icon-buildings.svg'
            },
            {
                formVal: 'Foundations',
                copy: 'Grantmaker',
                image: imgUrl + '/v1724679709/bonterra/1002/icon-grant.svg'
            },
            {
                formVal: 'Corporation',
                copy: 'Corporation',
                image: imgUrl + '/v1724679709/bonterra/1002/icon-briefcase.svg'
            },
        ]
    },
    {
        answers: [
            {
                titleQues: "What product(s) are you interested in?",
                title: 'Nonprofit',
                childAns: [
                    {
                        formVal: 'Fundraising and Engagement',
                        copy: 'Fundraising and Engagement',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-hand.svg'
                    },
                    {
                        formVal: 'Volunteer Management',
                        copy: 'Volunteer Management',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-people.svg'
                    },
                    {
                        formVal: 'Giving Days',
                        copy: 'Giving Days',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-money.svg'
                    },
                    {
                        formVal: 'Customer Relationship Management',
                        copy: 'Customer Relationship Management',
                        image: imgUrl + '/v1727688286/bonterra/7002/clipboard-list-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Payment Solutions',
                        copy: 'Payment Solutions',
                        image: imgUrl + '/v1727688286/bonterra/7002/dollar-minimalistic-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Other',
                        copy: 'Other',
                        image: imgUrl + '/v1727688287/bonterra/7002/menu-dots-circle-svgrepo-com_1.svg'
                    }
                ]
            },
            {
                titleQues: "What product(s) are you interested in?",
                title: 'Government',
                childAns: [
                    {
                        formVal: 'Fundraising & Engagement',
                        copy: 'Fundraising & Engagement',
                        image: imgUrl + '/v1727688286/bonterra/7002/money-bag-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Grant Programs',
                        copy: 'Grant Programs',
                        image: imgUrl + '/v1727688286/bonterra/7002/notes-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Case Management',
                        copy: 'Case Management',
                        image: imgUrl + '/v1727688286/bonterra/7002/icon-briefcase.svg'
                    },
                    {
                        formVal: 'Giving Days',
                        copy: 'Giving Days',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-money.svg'
                    },
                    {
                        formVal: 'Payment Solutions',
                        copy: 'Payment Solutions',
                        image: imgUrl + '/v1727688286/bonterra/7002/hand-money-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Other',
                        copy: 'Other',
                        image: imgUrl + '/v1727688287/bonterra/7002/menu-dots-circle-svgrepo-com_1.svg'
                    }
                ]
            },
            {
                titleQues: "What product(s) are you interested in?",
                title: 'Foundations',
                childAns: [
                    {
                        formVal: 'Grant Programs',
                        copy: 'Grant Programs',
                        image: imgUrl + '/v1727688286/bonterra/7002/notes-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Payment Solutions',
                        copy: 'Payment Solutions',
                        image: imgUrl + '/v1727688286/bonterra/7002/hand-money-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Volunteer Management',
                        copy: 'Volunteer Management',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-people.svg'
                    },
                    {
                        formVal: 'Giving Days',
                        copy: 'Giving Days',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-money.svg'
                    },
                    {
                        formVal: 'Fundraising & Engagement',
                        copy: 'Fundraising & Engagement',
                        image: imgUrl + '/v1727688286/bonterra/7002/money-bag-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Other',
                        copy: 'Other',
                        image: imgUrl + '/v1727688287/bonterra/7002/menu-dots-circle-svgrepo-com_1.svg'
                    }
                ]
            },
            {
                titleQues: "What product(s) are you interested in?",
                title: 'Corporation',
                childAns: [
                    {
                        formVal: 'Volunteer Management',
                        copy: 'Volunteer Management',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-people.svg'
                    },
                    {
                        formVal: 'Grant Programs',
                        copy: 'Grant Programs',
                        image: imgUrl + '/v1727688286/bonterra/7002/notes-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Giving Management',
                        copy: 'Giving Management',
                        image: imgUrl + '/v1724679709/bonterra/1002/icon-money.svg'
                    },
                    {
                        formVal: 'Fundraising & Engagement',
                        copy: 'Fundraising & Engagement',
                        image: imgUrl + '/v1727688286/bonterra/7002/money-bag-svgrepo-com_1.svg'
                    },

                    {
                        formVal: 'Payment Solutions',
                        copy: 'Payment Solutions',
                        image: imgUrl + '/v1727688286/bonterra/7002/hand-money-svgrepo-com_1.svg'
                    },
                    {
                        formVal: 'Other',
                        copy: 'Other',
                        image: imgUrl + '/v1727688287/bonterra/7002/menu-dots-circle-svgrepo-com_1.svg'
                    }
                ]
            },
        ]
    }
    //Question 1 end
];

const sectionSelector = `#HERO .container .block-wrapper .block-3 > .mktoForm .lpeCElement.Bonterra__Demo_Request__FE`;
const formUniqueSelector = `body.spz-7002 #HERO .container .block-wrapper .block-3 > .mktoForm .formSpan`;
//store triageData json in session storage
let sesData = sessionStorage.getItem('triageData');
if (sesData) {
    triageData = JSON.parse(sesData);
}

let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        if (!body.classList.contains('spz-7002')) {
            body.classList.add('spz-7002');
            createTest();

            //add url pathname to body class
            let url = window.location.pathname;
            let urlArr = url.split('/');
            let urlPath = urlArr[urlArr.length - 1].split('.')[0];
            document.body.classList.add(urlPath);
        }
    }
});

function createTest() {
    waitForElm('#HERO form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').then(function () {
        formModify();

        waitForElm('.question-form').then(function () {
            document.querySelector('.question-form').appendChild(document.querySelector(formUniqueSelector));
            prefillSelectFields();
        });

        document.querySelector('#HERO .container .block-wrapper .block-2 > .mktoText > div .stats .stats__item:last-child .stats__item-footer img').setAttribute('src', 'https://488-ILM-190.mktoweb.com/rs/488-ILM-190/images/handshake-icon-periwinkle.webp');
    });

    addTriage();

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

    MktoForms2.whenReady(function (form) {
        form.onSuccess(function (values, followUpUrl) {
            // This code runs after a successful form submission
            localStorage.setItem('formSubmitted', 'true');
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
}

function addTriage() {
    //Append triage section
    waitForElm(sectionSelector).then(function () {
        document.querySelector(sectionSelector).insertAdjacentHTML('beforeend', `<div class="spz-triage-wrap">
          <div class="questions-progress">
              ${triageData.length !== 0 && triageData.map((item, index) => `<div class="progress-item ${index === 0 ? 'active' : ''}"></div>`).join('')}
              <div class="progress-item"></div>
          </div>
          <h2 class="form-heading">Get a Demo</h2>
          <div class="questions-wrap">
              ${triageData.length !== 0 && triageData.map((item, index) => {
            return `${index == 0 ? `<div class="question-item question-${index + 1} ">
                          <div class="question-heading">${item.titleQues}</div>
                          <div class="answers-wrap">
                                  ${item.answers && item.answers.map((itemm, indexx) => {
                const sanitizedtitleQues = item.titleQues.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
                return `<div class="answer-item">
                                                  <input type="radio" name="${sanitizedtitleQues}" value="${itemm.formVal}" ${itemm.isSelected && itemm.isSelected == true ? `checked` : ``}>
                                                  <div class="answer-content">
                                                          <div class="answer-radio"><span></span></div>
                                                          ${itemm.image && itemm.image.length !== 0 ? `<img src="${itemm.image}" class="answer-image" alt="${itemm.copy}"/>` : ``}
                                                          <div class="answer-text">${itemm.copy}</div>
                                                          ${itemm.answerDesc && itemm.answerDesc.length !== 0 ? `<div class="answer-desc">${itemm.answerDesc}</div>` : ``}
                                                  </div>
                                          </div>`;
            }).join('')}
                                  <div class="step-error"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1724831150/bonterra/1002/Helper_container.svg" alt="Error Icon">Please select an option.</div>
                          </div>
                          <div class="next-question step-1-go">Next</div>
                  </div>` : `${item.answers && item.answers.map((ans, ind) => {
                return `
                  <div class="question-item question-${ind + 2} ${ans.title} spz-hidden">
                                                            <div class="question-heading">${ans.titleQues}</div>
                                                            <div class="answers-wrap">
                                                                    ${ans.childAns && ans.childAns.map((itemm, indexx) => {
                    const sanitizedtitleQues = ans.titleQues.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
                    return `<div class="answer-item">
                                <input type="checkbox" name="${sanitizedtitleQues}" value="${itemm.formVal}" ${itemm.isSelected && itemm.isSelected == true ? `checked` : ``}>
                                <div class="answer-content">
                                        <div class="answer-checkbox"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8047 3.52876C14.0651 3.78911 14.0651 4.21122 13.8047 4.47157L6.4714 11.8049C6.21106 12.0653 5.78894 12.0653 5.5286 11.8049L2.19526 8.47157C1.93491 8.21122 1.93491 7.78911 2.19526 7.52876C2.45561 7.26841 2.87772 7.26841 3.13807 7.52876L6 10.3907L12.8619 3.52876C13.1223 3.26841 13.5444 3.26841 13.8047 3.52876Z" fill="white"/>
</svg></span></div>
                                        ${itemm.image && itemm.image.length !== 0 ? `<img src="${itemm.image}" class="answer-image" alt="${itemm.copy}"/>` : ``}
                                        <div class="answer-text">${itemm.copy}</div>
                                        ${itemm.answerDesc && itemm.answerDesc.length !== 0 ? `<div class="answer-desc">${itemm.answerDesc}</div>` : ``}
                                </div>
                        </div>`;
                }).join('')}
                                                            </div>
                                                            <div class="next-question step-2-go">Next</div>
                                                    </div> `;
            }).join('')}
                                                    
                                                    `}`;
        }).join('')}
              <div class="question-form spz-hidden spz-form-wrap"></div>
          </div>
      </div>`);
    });

    waitForElm('.answer-item input[name="What-is-your-organization-type"]').then(function () {
        // Pre-check options for step 1 and step 2
        ['What-is-your-organization-type', 'What-products-are-you-interested-in'].forEach(name => {
            //get the selected values from the triageData stored in session storage
            triageData.forEach((item, index) => {
                item.answers.forEach((ans, ind) => {
                    if (ans.isSelected) {
                        document.querySelectorAll(`.answer-item input[name="${name}"][value="${ans.formVal}"]`).forEach(input => input.checked = true);
                    }
                });
            });
        });

        // Store selected values in local storage and handle error state removal
        ['What-is-your-organization-type', 'What-products-are-you-interested-in'].forEach(name => {
            document.querySelectorAll(`.answer-item input[name="${name}"]`).forEach(item => {
                item.addEventListener('click', e => {
                    console.log('e.target.value ' + e.target.value);
                    //set the selected values isSelected to true in the triageData stored in session storage
                    triageData.forEach((item, index) => {
                        item.answers.forEach((ans, ind) => {
                            if (ans.formVal == e.target.value) {
                                ans.isSelected = e.target.checked;
                                //set false to all other options
                                if (ans.isSelected) {
                                    item.answers.forEach((anss, indd) => {
                                        if (anss.formVal != e.target.value) {
                                            anss.isSelected = false;
                                            sessionStorage.setItem('triageData', JSON.stringify(triageData));
                                        }
                                    });
                                }
                                //store the updated triageData in session storage
                            }

                            if (ans.childAns) {
                                ans.childAns.forEach((subans, ind) => {
                                    if (subans.formVal == e.target.value) {
                                        subans.isSelected = e.target.checked;
                                        //store the updated triageData in session storage
                                        sessionStorage.setItem('triageData', JSON.stringify(triageData));
                                    }
                                });
                            }
                        });
                    });

                    const stepContent = e.target.closest('.answers-wrap');
                    if (stepContent?.classList.contains('error')) stepContent.classList.remove('error');
                });
            });
        });
    });
}

// Function to pre-fill form select fields based on stored values
const prefillSelectFields = () => {
    ['Industry', 'capability'].forEach(field => {
        const value = localStorage.getItem(field === 'Industry' ? 'What-is-your-organization-type' : 'What-products-are-you-interested-in');
        if (value) {
            const select = document.querySelector(`select[name = "${field}"]`);
            if (select) select.value = value;
        }
    });
};

//Handle next question navigation and validation
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("step-1-go")) {
        const stepContent = e.target.closest('.question-item').querySelector('.answers-wrap');
        if (Array.from(stepContent.querySelectorAll('input')).some(checkbox => checkbox.checked)) {
            e.target.parentElement.classList.add('spz-hidden');
            const active = document.querySelector('.progress-item.active');
            active.classList.replace('active', 'completed');
            active.nextElementSibling.classList.add('active');

            //get the selected radio value
            const next = e.target.parentElement.querySelector('input[type="radio"]:checked').value;
            this.document.querySelector(`.questions-wrap  .` + next + ``).classList.remove('spz-hidden');

            // Call prefill function to ensure form fields are filled when step is visible
            prefillSelectFields();
        } else {
            stepContent.classList.add('error');
        }
    }

    if (e.target.classList.contains("step-2-go")) {
        e.target.parentElement.classList.add('spz-hidden');
        const active = document.querySelector('.progress-item.active');
        active.classList.replace('active', 'completed');
        active.nextElementSibling.classList.add('active');
        this.document.querySelector('.question-form').classList.remove('spz-hidden');
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