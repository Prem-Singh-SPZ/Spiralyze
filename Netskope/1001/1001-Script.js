let bodyLoad = setInterval(function () {
    const body = document.createElement('body');
    if (body) {
        document.body.classList.add('netskope-1001-spz');
        clearInterval(bodyLoad);

        //Updating left hero copy here
        var formContain = document.querySelector('body .landing-page__form-container');
        formContain.insertAdjacentHTML('beforebegin', `<div class="hero_left">
              <div class="hero-wrap">
                  <div class="hero-title"><h1>Secure your entire <span>multi-cloud</span> environment</h1></div>
                  <ul>
                      <li><strong>Visibility.</strong> Get complete visibility into your cloud network. Web, SaaS, cloud, public and private apps, and more.</li>
                      <li><strong>Security.</strong> Manage security in one place. Granular web and cloud policy controls. Advanced access control. Threat protection.</li>
                      <li><strong>Network.</strong> Deliver fast, high-performing connectivity between users, devices, and locations, complete with zero-trust security.</li>
                  </ul>
                  <div class="logo-sec">
                      <img alt="Get Started Logos" width="300" height="84" data-srcset="https://www.netskope.com/wp-content/uploads/2022/05/logos-credentials-300x84.png 300w, 
                      https://www.netskope.com/wp-content/uploads/2022/05/logos-credentials.png 500w" data-src="https://www.netskope.com/wp-content/uploads/2022/05/logos-credentials-300x84.png" 
                      data-sizes="(max-width: 300px) 100vw, 300px" class="alignnone size-medium wp-image-39648 ls-is-cached lazyloaded" src="https://www.netskope.com/wp-content/uploads/2022/05/logos-credentials-300x84.png" 
                      sizes="(max-width: 300px) 100vw, 300px" srcset="https://www.netskope.com/wp-content/uploads/2022/05/logos-credentials-300x84.png 300w, 
                      https://www.netskope.com/wp-content/uploads/2022/05/logos-credentials.png 500w">
                  </div>
              </div>
          </div>`);

        //updating footer phon number here
        var footeRow = document.querySelector('body .v3-footer .v3-footer__social-icons-container .v3-social-icons');
        if (footeRow) {
            footeRow.insertAdjacentHTML('beforebegin', `<div class="contact">
                  <div class="contact-in">
                      <div class="cont-icon"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698924244/netskope/1001/call_1.svg" alt="Call Icon"></div>
                      <div class="cont-detail">USA: +1 (800) 979-6988</div>
                  </div>
              </div>`);
        }

        //Form internal code
        var check_Form = setInterval(() => {
            const form_Elem = document.querySelector('.landing-page__container-inner .landing-page__form-container .landing-page__form-content .mktoForm');
            if (form_Elem !== null) {
                formModify();
                clearInterval(check_Form);
            }
        }, 100);

        function formModify() {

            //form title update
            var formDiv = document.querySelector('.landing-page__form-container .landing-page__form .landing-page__form-content .mktoForm');
            if (formDiv) {
                formDiv.insertAdjacentHTML('beforebegin', `<div class="form_title">Get Started</div>`);
            }

            //form Cta update
            var textChng = document.querySelector('.landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton');
            if (textChng) {
                textChng.innerText = 'Submit';
            }

            document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image">`
            );

            const mktoFormColElements = document.querySelectorAll('.netskope-component--request-demo-form form.mktoForm .mktoFormRow .mktoFormCol');
            mktoFormColElements.forEach(function (element) {
                const mktoField = element.querySelector('.mktoField');
                if (mktoField) {
                    element.classList.add(mktoField.getAttribute('id') + '-row');
                }
            });

            const mktoFormRowElements = document.querySelectorAll('.netskope-component--request-demo-form form.mktoForm .mktoFormRow');
            mktoFormRowElements.forEach(function (element) {
                const mktoField = element.querySelector('.mktoField');

                if (mktoField && mktoField.getAttribute('type') == 'hidden') {
                    element.classList.add('hideField');
                }
            });

            waitForElm('.mktoFormRow.hideField').then(function () {
                document.querySelectorAll('.netskope-component--request-demo-form form.mktoForm .mktoFormRow:not(.hideField)').forEach(function (elem) {

                    elem.querySelectorAll('.mktoFieldDescriptor.mktoFormCol').forEach(function (elm) {
                            document.querySelector('.mktoForm').insertAdjacentElement('beforeend', elm);
                    });

                    let changeLabels = setInterval(() => {
                        textChng.innerText = 'Submit';

                        document.querySelector('#mOICustomField11 option:first-child').textContent = "";
                        document.querySelector('#LblmOICustomField11').textContent = "I would like to";

                        document.querySelector('#numEmployeesRange option:first-child').textContent = "";
                        document.querySelector('#LblnumEmployeesRange').textContent = "# of Employees";

                        document.querySelector('#Country option:first-child').textContent = "";


                        document.querySelector('#LblCountry').textContent = "Country";

                        document.querySelector('#LblFirstName').textContent = "First Name";

                        document.querySelector('#LblLastName').textContent = "Last Name";

                        waitForElm('.netskope-fm').then(function () {
                            document.querySelector('.netskope-fm').closest('.mktoFormRow').classList.add('row-netskope-fm');
                        });
                        waitForElm('.single_checkbox').then(function () {
                            document.querySelector('.single_checkbox').closest('.mktoFormRow').classList.add('row-single_checkbox');
                        });


                        document.querySelector('.mktoFormCol.Contact_Us_Form_Entry__c-row').classList.add('spz-hidden');
                        document.querySelector('.mktoFormCol.mktoCheckbox_151456_0-row').classList.add('spz-hidden');
                        document.querySelector('.mktoFormCol.Country-row').classList.add('spz-hidden');
                        document.querySelector('.mktoFormCol.Phone-row').classList.add('spz-hidden');
                        document.querySelector('.mktoFormCol.numEmployeesRange-row').classList.add('spz-hidden');
                        document.querySelector('.mktoFormCol.Title-row').classList.add('spz-hidden');
                    }, 50);

                    setTimeout(() => {
                        clearInterval(changeLabels);
                    }, 500);
                });

                document.querySelector('.landing-page__form-container.get-started-form__form').insertAdjacentHTML('afterbegin', `<div class="hero-title-tablet"><h1>Secure your entire <span>multi-cloud</span> environment</h1></div>`);
            });

            document.querySelector('body .netskope-component--request-demo-form form.mktoForm  .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap').insertAdjacentHTML('beforebegin', `<div class="frm-commt">
                  <div class="commt-text">Comment</div>
              </div>`);

            document.querySelector('body form.mktoForm  .mktoFormCol.Contact_Us_Form_Entry__c-row .frm-commt').addEventListener('click', function () {
                this.classList.toggle("close-cmnt");
                var mktoFieldWrapList = document.querySelectorAll('body form.mktoForm  .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap');
                mktoFieldWrapList.forEach(function (element) {
                    element.classList.toggle("visible");
                });
            });

            document.getElementById("mOICustomField11").setAttribute('tabindex', '1');
            document.getElementById("FirstName").setAttribute('tabindex', '2');
            document.getElementById("LastName").setAttribute('tabindex', '3');
            document.getElementById("Email").setAttribute('tabindex', '4');
            document.getElementById("Company").setAttribute('tabindex', '5');
            document.getElementById("Title").setAttribute('tabindex', '6');
            document.getElementById("numEmployeesRange").setAttribute('tabindex', '7');
            document.getElementById("Phone").setAttribute('tabindex', '8');
            document.getElementById("Country").setAttribute('tabindex', '9');
            document.getElementById("Contact_Us_Form_Entry__c").setAttribute('tabindex', '11');

            // form state
            var selector = 'body form.mktoForm  .mktoFormCol .mktoFieldWrap input, body form.mktoForm  .mktoFormCol .mktoFieldWrap select';

            document.addEventListener('focus', function (event) {
                if (event.target.matches(selector)) {
                    event.target.closest('body form.mktoForm  .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
                }
                checkValidFields();
                checkState();
            }, true);

            var eventList = ["blur", "focusout", "keyup"];
            for (s_event of eventList) {
                document.addEventListener(s_event, function (event) {
                    if (event.target.matches(selector)) {
                        if (event.target.value == null || event.target.value == '') {
                            event.target.closest('body form.mktoForm  .mktoFormCol .mktoFieldWrap').classList.remove('active');
                            event.target.closest('body form.mktoForm  .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                        } else {
                            event.target.closest('body form.mktoForm  .mktoFormCol .mktoFieldWrap').classList.add('active');
                            event.target.closest('body form.mktoForm  .mktoFormCol .mktoFieldWrap').classList.add('filled');
                            // event.target.closest('body form.mktoForm  .mktoFormCol .mktoFieldWrap').classList.remove('typing');
                        }
                    }
                    checkState();
                });
            }

            document.addEventListener('focusout', function (event) {
                // if (event.target.matches(selector)) {
                //     event.target.closest('body form.mktoForm  .mktoFormCol .mktoFieldWrap').classList.remove('typing');
                // }
                document.querySelectorAll('body form.mktoForm  .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
                    elem.classList.remove('typing');
                })
                checkState();
            }, true);
        };
    }

    function checkValidFields() {
        let validFields = document.querySelectorAll('.mktoRequiredField.filled').length;
        if (validFields >= 4) {
            document.querySelectorAll('.mktoFormCol.spz-hidden').forEach(function (elem) {
                elem.classList.remove('spz-hidden');
            })

            document.querySelector('.get-started-form__container').classList.add('spz-full-form');
        }
    }

    // Generic Code
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

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

    function checkState() {
        waitForElm('#PostalCode').then(function () {
            document.querySelector('#PostalCode').closest('.mktoFormRow').classList.add('row-PostalCode');
        });
    }
});