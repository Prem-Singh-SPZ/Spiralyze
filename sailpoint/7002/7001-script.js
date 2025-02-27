(function () {

    if (!document.getElementById('spz-7001')) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var css = `input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus,
select:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 50px white inset !important;
    -webkit-text-fill-color: #415364 !important;
}

.SPZ_7001 #contact-us {
    padding-bottom: 96px;
}

.SPZ_7001 #contact-us .mkto-wrap,
.SPZ_7001 #get-started .mkto-wrap {
    min-height: unset;
}

.SPZ_7001 #mktoForm_1017.mktoForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100% !important;
    max-width: 520px;
    margin: 21px auto 0;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.spz-full-width {
    width: 100%;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-2,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-3,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-4,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-6,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-7,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-9,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-10,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-11 {
    width: calc(50% - 8px);
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.spz-full-width {
    width: 100%;
}

.SPZ_7001 #mktoForm_1017.mktoForm>div:not([class]):not([id]) {
    display: none;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormCol {
    margin: 0 !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap {
    position: relative;
    margin-bottom: 16px;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap label.mktoLabel {
    color: #415364 !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 17px;
    left: 17px;
    background: #FFF;
    width: auto !important;
    height: auto;
    pointer-events: none;
    transition: color .3s ease-in-out, top .3s ease-in-out, font-size .3s ease-in-out;
    z-index: 9;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap label.mktoLabel .mktoAsterix {
    display: none !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .field-12 .mktoFieldWrap label.mktoLabel {
    top: 14px;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap:hover label.mktoLabel,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap:hover label.mktoLabel .mktoAsterix {
    color: #415364 !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.filled:not(.active):not(.error) label.mktoLabel,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.filled:not(.active):not(.error) label.mktoLabel .mktoAsterix {
    color: #415364 !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.active.typing label.mktoLabel,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.filled label.mktoLabel {
    width: auto !important;
    top: 7px;
    color: #0071CE !important;
    font-size: 12px;
    font-weight: 600;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.active.typing label.mktoLabel#LblcontactFormComments,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.filled label.mktoLabel#LblcontactFormComments {
    padding-top: 7px;
    top: 0.5px;
    padding-right: 2px;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.active.typing label.mktoLabel .mktoAsterix,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.active.typing label.mktoLabel .mktoAsterix {
    color: #0071CE !important;
}

/* .SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.error label.mktoLabel,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.error label.mktoLabel .mktoAsterix {
    color: #E6241E !important;
} */

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoField:not([type=checkbox]) {
    width: 100% !important;
    height: 56px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 23px 16px 8px;
    margin: 0 !important;
    border: 1px solid #FFF;
    border-radius: 4px;
    outline: none;
    background: #FFF;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    transition: all .3s ease-in-out;
    color: #415364 !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap textarea.mktoField:not([type=checkbox]) {
    height: 112px !important;
    overflow-y: auto !important;
    white-space: normal !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap:not(.active):not(.typing):not(.filled) select.mktoField {
    color: transparent !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap select.mktoField {
    padding-right: 37px !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap select.mktoField option:first-child {
    display: none !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap:hover .mktoField:not([type="checkbox"]) {
    border-color: #0071CE;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.active.typing .mktoField:not([type="checkbox"]) {
    border-color: #FFF;
}

/* .SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap.error .mktoField:not([type="checkbox"]) {
    border-color: #E6241E;
} */

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoError {
    position: relative;
    top: unset !important;
    bottom: unset !important;
    left: unset !important;
    right: unset !important;
    margin: 10px 0 0 !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg {
    /* color: #FFF; */
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6;
    position: relative;
    /* padding-left: 16px; */
}

/* .SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg::before {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    top: 4px;
    left: 0;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#E6241E"><g clip-path="url(%23clip0_24110_1049)"><path d="M6 0C2.6934 0 0 2.6934 0 6C0 9.3066 2.6934 12 6 12C9.3066 12 12 9.3066 12 6C12 2.6934 9.3066 0 6 0ZM6 1.2C8.65808 1.2 10.8 3.34191 10.8 6C10.8 8.65808 8.65808 10.8 6 10.8C3.34191 10.8 1.2 8.65808 1.2 6C1.2 3.34191 3.34191 1.2 6 1.2ZM6 2.4C5.6676 2.4 5.4 2.6676 5.4 3V7.2C5.4 7.5324 5.6676 7.8 6 7.8C6.3324 7.8 6.6 7.5324 6.6 7.2V3C6.6 2.6676 6.3324 2.4 6 2.4ZM6 8.4C5.6676 8.4 5.4 8.6676 5.4 9C5.4 9.3324 5.6676 9.6 6 9.6C6.3324 9.6 6.6 9.3324 6.6 9C6.6 8.6676 6.3324 8.4 6 8.4Z" fill="white"/></g><defs><clipPath id="clip0_24110_1049"><rect width="12" height="12" fill="#E6241E"/></clipPath></defs></svg>');
    background-size: contain;
    background-repeat: no-repeat;
} */

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .select-wrapper {
    margin: 0 !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList {
    margin: 8px 0 0 !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .select-wrapper::after {
    position: absolute;
    content: "";
    background-image: url("https://res.cloudinary.com/spiralyze/image/upload/v1730978539/sailpoint/1001/icons__system.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 18px;
    height: 10px;
    top: 23px;
    right: 16px;
    pointer-events: none;
    z-index: 9;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .select-wrapper .select-dropdown {
    display: none;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoError .mktoErrorArrowWrap {
    display: none !important;
}

.SPZ_7001 #mktoForm_1017.mktoForm .field-30 .mktoFieldWrap label.mktoLabel {
    position: relative;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    background: transparent;
    color: #fff !important;
    top: unset;
    left: unset;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList label {
    position: relative;
    color: #FFF !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    padding-right: 0;
    cursor: pointer;
    display: inline-flex;
    width: auto;
}

/* .SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList label::before {
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    top: 3px;
    left: 0;
    border-radius: 2px;
    border: 1.5px solid #FFF;
    z-index: 2;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList label:hover::before {
    border-color: rgba(255, 255, 255, 0.8);
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList label::after {
    position: absolute;
    content: "";
    width: 12px;
    height: 10px;
    top: 6px;
    left: 2px;
    background-image: url(//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/7001/Check_Vector.png);
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 9;
    opacity: 0;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList input:checked+label:before {
    background-color: #FFF;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList input:checked+label:after {
    opacity: 1;
} */

.SPZ_7001 #mktoForm_1017.mktoForm .mktoButtonRow {
    width: 100%;
    margin-top: 24px;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoButtonRow .mktoButton {
    width: 100%;
    height: 48px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.00);
    background: #FFF;
    color: #0071CE;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.6;
    transition: all 0.5s ease-in-out;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoButtonRow .mktoButton:hover {
    border-color: #005DAA;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoButtonRow .mktoButton:active {
    border-color: #FFF;
    outline: 1.5px solid #0071CE;
    outline-offset: 2.5px;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer,
.SPZ_7001 #contact-us .disclaimer,
.SPZ_7001 #get-started .disclaimer {
    margin: 8px auto 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    max-width: 65%;
}

.SPZ_7001 #contact-us .disclaimer,
.SPZ_7001 #get-started .disclaimer {
    max-width: 520px;
    margin-top: 31px;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer a,
.SPZ_7001 #contact-us .disclaimer a,
.SPZ_7001 #get-started .disclaimer a {
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    text-decoration-line: underline;
    transition: all 0.1s ease-in-out;
}

.SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer a:hover,
.SPZ_7001 #contact-us .disclaimer a:hover,
.SPZ_7001 #get-started .disclaimer a:hover,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer a:active,
.SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer a:focus-visible,
.SPZ_7001 #contact-us .disclaimer a:active,
.SPZ_7001 #contact-us .disclaimer a:focus-visible,
.SPZ_7001 #get-started .disclaimer a:active,
.SPZ_7001 #get-started .disclaimer a:focus-visible {
    text-decoration: none;
}

@media(max-width: 1023.98px) {
    .SPZ_7001 #contact-us {
        padding-bottom: 39px;
    }

    .SPZ_7001 #contact-us .row__inner.container {
        gap: 64px;
    }

    .SPZ_7001 #contact-us .row__inner.container>.column:first-child {
        padding-top: 4px;
    }

    .SPZ_7001 #contact-us .row__inner.container>.column:nth-child(02) {
        width: 362px;
    }

    .SPZ_7001 #contact-us .row__inner.container>.column:nth-child(03) {
        display: none;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm {
        margin: 2px auto 0;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow {
        width: 100% !important;
    }

    /* .SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList label:before {
        top: 14px;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm .mktoCheckboxList label:after {
        top: 17px;
    } */

    .SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-31 .mktoCheckboxList label::before {
        top: 3px;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-31 .mktoCheckboxList label::after {
        top: 6px;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer {
        max-width: unset;
        padding: 0 5px;
    }

    .SPZ_7001 #contact-us .disclaimer,
    .SPZ_7001 #get-started .disclaimer {
        max-width: unset;
    }
}

@media(max-width: 767.98px) and (min-width: 481px) {
    .SPZ_7001 #mktoForm_1017.mktoForm .field-32 .mktoCheckboxList label:before {
        top: 3px;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm .field-32 .mktoCheckboxList label:after {
        top: 6px;
    }
}

@media(max-width: 767.98px) {
    .SPZ_7001 #contact-us {
        padding-bottom: 63px;
    }

    .SPZ_7001 #contact-us .row__inner.container {
        gap: 46px;
        padding: 0 20px;
    }

    .SPZ_7001 #contact-us .row__inner.container>.column:first-child {
        padding-top: 0;
    }

    .SPZ_7001 #contact-us .row__inner.container>.column:nth-child(02) {
        width: 100%;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm {
        margin: 0 auto;
        max-width: unset;
    }

    .SPZ_7001 #mktoForm_1017.mktoForm .mktoButtonRow {
        margin-top: 23px;
    }
}`;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'spz-7001';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }

    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!document.body.classList.contains('SPZ_7001')) {
                    document.body.classList.add('SPZ_7001');
                    hiddenValue('SPZ_7002', 'SPZ_7002_truecontrol');
                    waitForElm('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow input').then(() => {
                        let spzFormInterval = setInterval(() => {
                            if (document.querySelectorAll('#mktoForm_1017.mktoForm .mktoFormRow.field-1').length == 0) {
                                formModify();
                                setHiddenFieldValue();
                            }
                        }, 100);
                        setTimeout(function () {
                            clearInterval(spzFormInterval);
                        }, 15000);
                    });
                } else {
                    if (document.body.classList.contains('SPZ_7001')) {
                        hiddenValue('SPZ_7002', 'SPZ_7002_truecontrol');
                        setHiddenFieldValue();
                    }
                }
            }
        });
    }

    function formModify() {
        // Add class in mktoFormRow using count
        var form_fields = document.querySelectorAll('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow');
        for (var i = 0; i < form_fields.length; i++) {
            var dynamicClass = 'field-' + (i + 1);
            form_fields[i].classList.add(dynamicClass);
        }

        // Change Label Text
        ['#LblCountry:Country', '#LblState:State', '#LblreasonforInquiry:Reason for inquiry'].forEach(item => {
            const [id, text] = item.split(':');
            waitForElm(`.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
            });
        });

        // waitForElm('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-32 .mktoCheckboxList label').then(label => {
        //     label.textContent = "Uncheck to stop receiving SailPoint email communications.";
        // });

        // Change Field Position
        var compnay_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .field-7');
        var last_name_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .field-4');
        var inquiry_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .field-11');

        if (compnay_field && inquiry_field) {
            compnay_field.after(inquiry_field);
        }
        if (last_name_field && inquiry_field) {
            last_name_field.after(inquiry_field);
        }

        var disclaimer_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer');
        var button = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoButtonRow');

        if (disclaimer_field && button) {
            button.after(disclaimer_field);
        }

        waitForElm(`.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
            setTimeout(() => {
                document.querySelectorAll(`.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                    if (el && el.value && (el.value != '')) {
                        el.closest('.mktoFieldWrap').classList.add('filled');
                    }
                });
            }, 1000);
        });

        // On input focus add class on closest parent field class
        function focusFields() {
            // Attach events using event delegation
            const form = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm');

            if (form) {
                form.addEventListener('focus', function (event) {
                    const el = event.target;
                    if (el.classList.contains('mktoField')) {
                        el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                        checkAllFields();
                    }
                }, true);

                form.addEventListener('blur', function (event) {
                    const el = event.target;
                    if (el.classList.contains('mktoField')) {
                        el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                        checkAllFields();
                    }
                }, true);

                form.addEventListener('input', function (event) {
                    const el = event.target;
                    if (el.classList.contains('mktoField')) {
                        checkAllFields();
                    }
                });

                form.addEventListener('change', function (event) {
                    const el = event.target;
                    if (el.classList.contains('mktoField')) {
                        checkAllFields();
                    }
                });
            }

            // Function to reapply functionality for dynamic fields
            function reapplyStateFieldListeners() {
                const stateField = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoField#State');
                if (stateField) {
                    stateField.addEventListener('focus', function () {
                        stateField.closest('.mktoFieldWrap').classList.add('active', 'typing');
                        checkAllFields();
                    });
                    stateField.addEventListener('blur', function () {
                        stateField.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                        checkAllFields();
                    });
                    stateField.addEventListener('input', function () {
                        checkAllFields();
                    });
                    stateField.addEventListener('change', function () {
                        checkAllFields();
                    });
                }
            }

            // Reapply listeners whenever the state field is dynamically updated
            const observer = new MutationObserver(() => {
                reapplyStateFieldListeners();
            });

            const container = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm');
            if (container) {
                observer.observe(container, { childList: true, subtree: true });
            }
        }
        focusFields();
        function checkAllFields() {
            const fields = document.querySelectorAll('.SPZ_7001 #mktoForm_1017.mktoForm .mktoField');
            const timeBuffer = setInterval(() => {
                fields.forEach(field => {
                    const fieldWrap = field.closest('.mktoFieldWrap');
                    if (fieldWrap) {
                        // Check for error
                        const errorElement = fieldWrap.querySelector('.mktoError');
                        if (errorElement && errorElement.style.display !== 'none') {
                            fieldWrap.classList.add('error');
                        } else {
                            fieldWrap.classList.remove('error');
                        }

                        // Check if the field is filled
                        if (field.value && field.value.trim() !== '') {
                            fieldWrap.classList.add('filled');
                        } else {
                            fieldWrap.classList.remove('filled');
                        }
                    }
                });
            }, 100);

            setTimeout(() => {
                clearInterval(timeBuffer);
            }, 1000);
        }
        function checkError(elem) {
            let timeBuffer = setInterval(() => {
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
                clearInterval(timeBuffer);
            }, 1000);
        }

        if (document.querySelector('select#Country')) {
            document.querySelector('select#Country').addEventListener('change', () => {
                const stateRow = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-10');
                const optOutRow = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-32');
                const countryRow = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-9');

                document.querySelector('select#State') ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full-width')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full-width'));
                //document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-32 .mktoCheckboxList label') ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.") : '';
            });
        }

        //check mktoforms2 library is loaded or not
        if (typeof MktoForms2 !== 'undefined') {
            MktoForms2.whenReady(function (form) {
                form.onSuccess(function (values, followUpUrl) {
                    document.body.classList.add('form-submit');
                });

                if (document.body.classList.contains('spz-form-loaded')) {
                    document.body.classList.remove('spz-form-loaded');
                }
            });
        }
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.SPZ_7001')) {
                document.body.classList.remove("SPZ_7001");
            }
        }, 2000);
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldNameContact');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldNameContact', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldNameContact', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
        }

        setHiddenFieldValue();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1017 input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');
                //check if hidden field value is empty then only set the value else set the value with , seperated
                if (intellimize1.value == '') {
                    intellimize1.value = ExistingHiddenFieldValue;
                }
                else {
                    if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
                        intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
                    }
                }
            }
        });

        //click event listener
        document.addEventListener('click', function (e) {
            if (e.target.closest('#mktoForm_1017 .mktoButton')) {
                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
                if (int2)
                    int2.value = n;
            }
        });
    }
    // Do not touch below hidden field code for any Experiment over

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("replacestate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
    });


    // List of URLs
    const urls = [
        "https://www.sailpoint.com/",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/suites",
        "https://www.sailpoint.com/products/identity-security-software/identity-iq",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/cloud-infrastructure-entitlement-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/non-employee-risk-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/data-access-security",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/password-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/access-risk-management",
        "https://www.sailpoint.com/demo/interactive",
        "https://www.sailpoint.com/products/connectivity/application-onboarding",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas",
        "https://www.sailpoint.com/solutions/mitigate-cyber-risk",
        "https://www.sailpoint.com/solutions/zero-trust",
        "https://www.sailpoint.com/solutions/improve-it-efficiency",
        "https://www.sailpoint.com/solutions/onboarding-offboarding",
        "https://www.sailpoint.com/solutions/maintain-compliance",
        "https://www.sailpoint.com/solutions/industries/higher-education",
        "https://www.sailpoint.com/solutions/industries/financial-services",
        "https://www.sailpoint.com/solutions/industries/government",
        "https://www.sailpoint.com/solutions/industries/healthcare",
        "https://www.sailpoint.com/solutions/industries/manufacturing",
        "https://www.sailpoint.com/why-us",
        "https://www.sailpoint.com/why-us/diversity-inclusion-belonging",
        "https://www.sailpoint.com/why-us/leadership"
    ];


    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.SPZ_7001')) {
            document.body.classList.remove("SPZ_7001");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (urls.includes(url)) {
            createTest();
        } else {
            removeTest();
        }
    }

    // function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    //     currentUrl = currentUrl.includes("#")
    //         ? currentUrl.slice(0, currentUrl.indexOf("#"))
    //         : currentUrl;
    //     specifiedUrl = specifiedUrl.includes("#")
    //         ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
    //         : specifiedUrl;
    //     if (!includeQueryParams)
    //         currentUrl = currentUrl.includes("?")
    //             ? currentUrl.slice(0, currentUrl.indexOf("?"))
    //             : currentUrl;
    //     if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
    //         return true;
    //     return false;
    // }

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
})();