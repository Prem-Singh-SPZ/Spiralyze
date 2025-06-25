// CSS injection
var css = `
    .SPZ-2011-TC header.site-header,
    .SPZ-2011-TC #startchange,
    .SPZ-2011-TC main.site-main>*:not(#hero-section):not(.spz-testimonials),
    .SPZ-2011-TC #hero-section .row.hero .col.content,
    .SPZ-2011-TC footer#expel-footer .container-custom>*:not(.links-container) {
        display: none !important;
    }

    .SPZ-2011-TC {
        background-color: #031263;
    }

    .SPZ-2011-TC #hero-section {
        min-height: calc(100vh - 107px);
        background-image: url(//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/2005/bg_pattern.webp);
        background-size: cover;
        background-position: right top;
        padding: 64px 0 55.5px !important;
        background-repeat: no-repeat;
    }

    .SPZ-2011-TC .container-custom,
    .SPZ-2011-TC #hero-section .hero-client-logos .container {
        max-width: 1206px !important;
        padding: 0 18px;
    }

    .SPZ-2011-TC #hero-section .row.hero {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: unset;
        flex-direction: unset;
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
        margin: 0;
        gap: 0 !important;
    }

    .SPZ-2011-TC #hero-section .hero>.site-logo-link {
        display: none;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content {
        width: 46.93%;
        max-width: 549px;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .site-logo-link {
        display: inline-block;
        width: auto;
        height: auto;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .site-logo-img {
        width: 100%;
        max-width: 96px;
        -o-object-fit: contain;
        object-fit: contain;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .section-label {
        color: #00a85d;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: 24px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 41px 0 10px;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .section-heading {
        color: #fff;
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        line-height: 56px;
        margin-bottom: 30px;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .info-text {
        color: #FFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .info-text strong {
        font-weight: 700;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .section-highlight-point {
        margin: 20px 0;
        padding: 0;
        list-style: none;
        position: relative;
    }

    .SPZ-2011-TC #hero-section .hero .ex-form::after {
        position: absolute;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1729074107/expel/2007/Form-Arrow.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 205px;
        height: 162px;
        bottom: -125px;
        right: 59px;
    }

    .SPZ-2011-TC.form-expand #hero-section .hero .spz-content .section-highlight-point::after {
        content: "";
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .section-highlight-point .list-item {
        color: #fff;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        padding-left: 32px;
        margin: 16px 0 0;
        position: relative;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .section-highlight-point .list-item .highlight-text {
        font-weight: 700;
        color: #fff;
    }

    .SPZ-2011-TC #hero-section .hero .spz-content .section-highlight-point .list-item::before {
        position: absolute;
        content: "";
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/checkcircle.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 24px;
        height: 28px;
        top: 0;
        left: 0;
    }

    .SPZ-2011-TC #hero-section .hero .col.form {
        width: 49%;
        max-width: 573px;
        position: relative;
    }
    .SPZ-2011-TC #hero-section .hero .col.form .edition-badge {
        position: absolute;
        top: -16px;
        left: 50%;
        transform: translateX(-50%);
        width: auto;
        z-index: 1;
        display: flex;
    }
    .SPZ-2011-TC #hero-section .hero .col.form .edition-badge::before {
        position: absolute;
        content: "";
        width: 195px;
        height: 16px;
        top: 0;
        left: -15.5px;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1744000820/expel/2012/Vector.svg");
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 0;
    }
    .SPZ-2011-TC #hero-section .hero .col.form .edition-badge span {
        border-radius: 4px;
        background: #00A85D;
        box-shadow: 0px 3px 29.9px 0px rgba(0, 0, 0, 0.15);
        padding: 4px 16px;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5;
        position: relative;
}

    .SPZ-2011-TC #hero-section .hero .ex-form {
        width: 100%;
        background: #ffffff;
        border-radius: 16px;
        padding: 40px 36px;
        position: relative;
    }

    .SPZ-2011-TC:not(.form-expand) #hero-section .hero .ex-form::after {
        content: "";
        left: auto;
        right: -30px;
        bottom: -201px;
    }

    .SPZ-2011-TC #hero-section .hero .ex-form .form-title {
        color: #131416;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 40px;
        margin-bottom: 18px;
    }

    .SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoClear,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoOffset,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoLabel .mktoAsterix,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-9 ~ .mktoFormCol,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-2[style*="display: none;"] ~ .mktoFormCol.field-6,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-2[style*="display: none;"] ~ .mktoFormCol.field-7,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-2[style*="display: none;"] ~ .mktoFormCol.field-8 {
        display: none !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol {
        width: calc(50% - 6px) !important;
        margin-bottom: 12px !important;
    }

    /* hiding honeypot field */
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="honeypot"] {
        display: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-8 {
        margin: 6px 0 12px !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-3:has(+ .mktoFormCol[style*="display: none;"])~.mktoFormCol.field-7,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-3:has(+ .mktoFormCol[style*="display: none;"])~.mktoFormCol.field-8 {
        display: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-9,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-10 {
        margin-bottom: 18px !important;
    }

    /* Changing field-8 to field-7 and updated new privacy compliance selector because of form change */
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-1,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-7,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-6,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_27626_0 Privacy_Compliance_Explicit_Opt_In__c"],
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_33829_0 Privacy_Compliance_Explicit_Opt_In__c"],
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_34540_0 Privacy_Compliance_Explicit_Opt_In__c"],
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_35411_0 Privacy_Compliance_Explicit_Opt_In__c"],
    .SPZ-2011-TC #hero-section form.mktoForm .mktoPlaceholderPrivacy_Compliance_Explicit_Opt_In__c,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-6 ~ .mktoFormCol {
        width: 100% !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap {
        position: relative;
        width: 100% !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoHtmlText {
        color: #747474 !important;
        font-size: 14px;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 22px;
        width: 100% !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoHtmlText a {
        color: #131416;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
        text-underline-offset: 3px;
        padding: 0;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoHtmlText a:hover {
        color: #0E4C8A;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoLabel {
        width: auto !important;
        padding: 1px 6px;
        color: #747474 !important;
        font-size: 16px !important;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 24px !important;
        pointer-events: none;
        background: #fff;
        position: absolute;
        top: 13px;
        left: 10px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.filled .mktoLabel,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.active.typing .mktoLabel {
        font-size: 14px !important;
        font-weight: 600 !important;
        line-height: 22px !important;
        top: -11.5px;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.filled .mktoLabel {
        color: #000000 !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.active.typing .mktoLabel {
        color: #1762e6 !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.error.filled .mktoLabel,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.error.active.typing .mktoLabel {
        color: #e51b00 !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField {
        width: 100% !important;
        height: 52px;
        background-color: #FFF;
        border: 1px solid #b4b3b9 !important;
        border-radius: 12px !important;
        outline: none;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        padding: 13px 15px !important;
        margin: 0 !important;
        color: #000 !important;
        font-size: 16px !important;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 24px !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill:hover,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill:focus,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 52px #fff inset !important;
        -webkit-text-fill-color: #000 !important;
    }

    /* removing field-7 dropdown icon and adding field-5 dropdown icon */
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-5 .mktoFieldWrap::after,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-6 .mktoFieldWrap::after {
        position: absolute;
        content: "";
        top: 20px;
        right: 16px;
        width: 12px;
        height: 12px;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1717757061/expel/2003/dropdown_icon.svg");
        background-size: contain;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap select.mktoField {
        padding-right: 37px !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        background-image: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap textarea.mktoField {
        height: 91px;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.filled .mktoField {
        border-color: #747474 !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.active.typing .mktoField {
        border-color: #1762e6 !important;
        caret-color: #1762e6;
    }

    body.SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.error .mktoField,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap.error.active.typing .mktoField {
        border-color: #e51b00 !important;
        caret-color: #e51b00;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError {
        position: relative;
        right: initial !important;
        bottom: initial !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError .mktoErrorArrowWrap {
        display: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError .mktoErrorMsg {
        max-width: unset;
        background: transparent;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1717661831/expel/2003/frame_1.svg");
        background-size: 22px;
        background-repeat: no-repeat;
        background-position: 0 7px;
        -webkit-box-shadow: none;
        box-shadow: none;
        text-shadow: none;
        margin: 0;
        padding: 7px 0 7px 12px;
        height: auto;
        border: none;
        border-radius: 0;
        color: #e51b00;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        padding-left: 26px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError #ValidMsgEmail.mktoErrorMsg span.mktoErrorDetail {
        padding-left: 3px;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_27626_0 Privacy_Compliance_Explicit_Opt_In__c"] .mktoLabel {
        display: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_31706_0 Privacy_Compliance_Explicit_Opt_In__c"] {
        width: 525px !important;
        padding: 0;
        position: relative;
        padding-right: 20px;
    }

    @media(max-width: 1160.98px) {
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_31706_0 Privacy_Compliance_Explicit_Opt_In__c"] {
            width: 440px !important;
        }
    }

    @media(max-width: 1023.98px) {
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_31706_0 Privacy_Compliance_Explicit_Opt_In__c"] {
            width: 620px !important;
        }
    }

    @media(max-width: 767.98px) {
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_31706_0 Privacy_Compliance_Explicit_Opt_In__c"] {
            width: 100% !important;
        }
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoCheckboxList input {
        position: absolute;
        opacity: 0;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoCheckboxList label {
        margin: 0 !important;
        padding-left: 28px !important;
        color: #747474 !important;
        font-size: 14px !important;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 22px !important;
        position: relative;
        cursor: pointer;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoCheckboxList label::before {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background: #fff;
        border: 1px solid #747474;
        border-radius: 5px;
        top: 2px;
        left: 0;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoCheckboxList input:checked+label::before {
        background: #1762e6;
        border-color: #1762e6;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoCheckboxList label::after {
        position: absolute;
        content: "";
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1717664127/expel/2003/check.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 14px;
        height: 14px;
        top: 5px;
        left: 3px;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .comment-toggler {
        display: inline-block;
        color: #1762e6;
        font-family: proxima-nova, Arial, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .comment-toggler:hover {
        color: #0e4c8a;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-9 .comment-toggler.show-field,
    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-9 .comment-toggler:not(.show-field)+.mktoFieldWrap {
        display: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol[data-wrapper-for*=optin] .mktoFieldWrap .mktoLabel {
        pointer-events: all;
        padding: 0;
        color: #000 !important;
        font-size: 14px !important;
        line-height: 22px !important;
        font-weight: 600 !important;
        margin-block: 9px 13px;
        position: relative;
        top: unset !important;
        left: unset !important;
        }
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoRadioList {
        width: 100% !important;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 32px;
        }
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoRadioList input {
        display: none;
        }
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoRadioList label {
        color: #333 !important;
        font-size: 14px;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 22px;
        margin: 0;
        padding-left: 28px;
        cursor: pointer;
        position: relative;
        }
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoRadioList label::before {
        position: absolute;
        content: "";
        top: 0;
        left: 1px;
        width: 20px;
        height: 20px;
        border: 1px solid #333333;
        border-radius: 100px;
        }
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoRadioList label::after {
        position: absolute;
        content: "";
        width: 12px;
        height: 12px;
        top: 4px;
        left: 5px;
        background: #1762E6;
        border-radius: 100px;
        opacity: 0;
        }
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoRadioList input:checked + label::before {
            border-color: #1762E6;
        }
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoRadioList input:checked + label::after {
            opacity: 1;
        }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow {
        width: 100%;
        margin: 6px auto 18px;
        position: relative;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow .button-text {
        position: absolute;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        pointer-events: none;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow .button-text svg {
        margin-right: 8px;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow .mktoButtonWrap {
        display: block;
        width: auto;
        height: auto;
        margin: 0 !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow .mktoButton {
        width: 100%;
        max-width: unset;
        height: 48px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border: none;
        background: #1762e6;
        background-image: none !important;
        font-size: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow .mktoButton[disabled="disabled"] {
        font-size: 16px !important;
        color: #fff !important;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow .mktoButton:hover {
        background: #0e4c8a;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoCaptchaDisclaimer,
    .SPZ-2011-TC .mktoForm .field-10 .mktoHtmlText {
        width: 70% !important;
        margin: 0 auto !important;
        color: #747474 !important;
        text-align: center;
        font-family: "proxima-nova", Arial, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 22px;
    }

    .SPZ-2011-TC .mktoForm .field-10 .mktoHtmlText {
        width: 100% !important;
        text-align: left;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoCaptchaDisclaimer a,
    .SPZ-2011-TC .mktoForm .field-10 .mktoHtmlText a {
        color: #131416;
        text-decoration: underline;
        text-underline-offset: 3px;
        padding: 0;
    }

    .SPZ-2011-TC #hero-section form.mktoForm .mktoCaptchaDisclaimer a:hover,
    .SPZ-2011-TC .mktoForm .field-10 .mktoHtmlText a:hover {
        color: #0e4c8a;
    }

    /* Hero Client Logo CSS Start Here */
    .SPZ-2011-TC #hero-section .hero-client-logos {
        margin-top: 80px;
    }

    .SPZ-2011-TC.form-expand #hero-section .hero-client-logos {
        margin-top: 189px;
        margin-bottom: 19px;
    }

    .SPZ-2011-TC #hero-section .hero-client-logos .container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0;
    }

    .SPZ-2011-TC #hero-section .hero-client-logos .client-logo {
        width: auto;
        height: 35px;
        -o-object-fit: contain;
        object-fit: contain;
    }

    .SPZ-2011-TC footer#expel-footer {
        border: none;
        padding: 22px 0 24px;
        background: #fff;
    }

    .SPZ-2011-TC footer#expel-footer .links-container {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-flow: row-reverse;
        flex-flow: row-reverse;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        gap: 0;
    }

    .SPZ-2011-TC footer#expel-footer .links-container .col {
        width: auto;
        max-width: unset;
    }

    .SPZ-2011-TC footer#expel-footer .links-container .rights p {
        color: #031263;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        padding-top: 1px;
    }

    .SPZ-2011-TC footer#expel-footer .links-container .links span {
        display: none;
    }

    .SPZ-2011-TC footer#expel-footer .links-container .links p {
        margin: 0 -16px;
    }

    .SPZ-2011-TC footer#expel-footer .links-container .links a {
        color: #031263;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        margin: 0 14px;
        text-decoration: none;
    }

    .SPZ-2011-TC footer#expel-footer .links-container .links a:hover {
        color: #0e4c8a;
    }

    /* Hero Client Logo CSS End Here */

    .SPZ-2011-TC footer#expel-footer .links-container__text--SPZ-2011-TC {
        margin-bottom: 14px;
    }

    @media(max-width: 1199.98px) {
        .SPZ-2011-TC.form-expand #hero-section .hero .spz-content .section-highlight-point::after {
            bottom: -125px;
        }
    }

    @media(min-width: 1200px) {
        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError .mktoErrorMsg span.mktoErrorDetail {
            padding-left: 3px;
        }
    }

    @media(max-width: 1023.98px) {
        .SPZ-2011-TC.form-expand #hero-section .hero-client-logos {
            margin-top: 63px;
            margin-bottom: 2px;
        }

        .SPZ-2011-TC #hero-section {
            min-height: calc(100vh - 104px);
            padding: 32px 20px 28px !important;
        }

        .SPZ-2011-TC footer#expel-footer .links-container__text--SPZ-2011-TC {
            margin-bottom: 1px;
        }

        .SPZ-2011-TC #hero-section .hero .spz-content .section-heading {
            font-size: 56px;
            line-height: 64px;
        }

        .SPZ-2011-TC #hero-section .hero>.site-logo-link {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            order: 1;
        }

        .SPZ-2011-TC #hero-section .row.hero>.col.spz-content {
            order: 2;
        }

        .SPZ-2011-TC #hero-section .row.hero>.col {
            width: 100%;
            max-width: unset;
            order: 3;
        }

        .SPZ-2011-TC #hero-section .hero .col.form {
            margin-top: 56px;
        }

        .SPZ-2011-TC #hero-section .hero .spz-content .site-logo-link {
            display: none;
        }

        .SPZ-2011-TC #hero-section .hero .ex-form::after {
            content: none !important;
        }

        .SPZ-2011-TC #hero-section .hero .spz-content .section-highlight-point {
            margin: 4px 0 20px;
        }

        .SPZ-2011-TC #hero-section .hero .spz-content .section-label {
            margin: 55px 0 12px;
        }

        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoCheckboxList label {
            padding-top: 1px !important;
        }

        .SPZ-2011-TC #hero-section form.mktoForm .mktoCaptchaDisclaimer,
        .SPZ-2011-TC .mktoForm .field-10 .mktoHtmlText {
            width: 55% !important;
        }

        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-8 {
            margin: 6px 0 14px !important;
        }

        .SPZ-2011-TC.form-expand #hero-section form.mktoForm .mktoButtonRow {
            margin-top: 4px;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper:last-child {
            display: none;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos {
            margin-top: 39px;
        }

        .SPZ-2011-TC footer#expel-footer {
            padding: 23px 0 24px;
        }

        .SPZ-2011-TC footer#expel-footer .links-container {
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-flow: column-reverse;
            flex-flow: column-reverse;
            align-items: flex-start !important;
        }

        .SPZ-2011-TC footer#expel-footer .links-container .col.rights {
            margin-bottom: 10px;
        }
    }

    @media(max-width: 767.98px) {
        .SPZ-2011-TC.form-expand #hero-section .hero-client-logos {
            margin-top: 51px;
            margin-bottom: 2px;
        }

        .SPZ-2011-TC #hero-section .hero .spz-content .section-label {
            margin: 39px 0 12px;
        }

        .SPZ-2011-TC #hero-section {
            min-height: calc(100vh - 240px);
            padding: 40px 0 22px !important;
        }

        .SPZ-2011-TC #expel-footer .container-custom .links-container .rights p {
            text-align: center;
        }

        .SPZ-2011-TC #hero-section .hero .spz-content .section-heading {
            max-width: 100%;
            font-size: 36px;
            line-height: 44px;
            margin-bottom: 33px;
        }

        .SPZ-2011-TC #hero-section .hero .col.form {
            margin-top: 40px;
        }

        .SPZ-2011-TC #hero-section .hero .col.form .edition-badge::before {
            width: 174px;
            background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1744001533/expel/2012/Vector-Mobile.svg");
        }

        .SPZ-2011-TC #hero-section .hero .col.form .edition-badge span {
            font-size: 14px;
            line-height: 22px;
        }

        .SPZ-2011-TC #hero-section .hero .ex-form {
            padding: 28px 20px;
        }

        .SPZ-2011-TC #hero-section .hero .ex-form .form-title {
            font-size: 24px;
            line-height: 32px;
        }

        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol {
            width: 100% !important;
        }

        .SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap select.mktoField {
            background-position: calc(100% - 15px) 19px;
        }

        .SPZ-2011-TC #hero-section form.mktoForm .mktoCaptchaDisclaimer,
        .SPZ-2011-TC .mktoForm .field-10 .mktoHtmlText {
            width: 100% !important;
        }

        .SPZ-2011-TC .mktoForm,
        .SPZ-2011-TC .mktoForm * {
            padding: initial;
        }

        .SPZ-2011-TC.form-expand #hero-section form.mktoForm .mktoButtonRow {
            margin-top: 5px;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos {
            margin-top: 54px;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .container {
            max-width: 360px !important;
            margin-left: auto;
            margin-right: auto;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper {
            margin: 11px 0;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper:nth-child(1) {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper:nth-child(2) {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper:nth-child(3) {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper:nth-child(4) {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
        }

        .SPZ-2011-TC footer#expel-footer {
            padding: 24px 0px 13px;
        }

        .SPZ-2011-TC footer#expel-footer .links-container {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            align-items: center !important;
        }

        .SPZ-2011-TC footer#expel-footer .links-container .links a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin: 0 0 12px;
        }
    }

    @media(max-width: 619.98px) {
        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper {
            width: 48%;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper:nth-child(3) {
            text-align: right;
            width: 52%;
        }

        .SPZ-2011-TC #hero-section .hero-client-logos .img-wrapper:nth-child(4) {
            text-align: right;
            width: 52%;
        }
    }
`;
head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('SPZ-2011-TC')) {
            body.classList.add('SPZ-2011-TC');
            waitForElm('.SPZ-2011-TC #hero-section').then(function () {
                document.querySelector('.SPZ-2011-TC #hero-section .row.hero').insertAdjacentHTML('afterbegin', `<a href="https://expel.com/" class="site-logo-link" rel="home">
          <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
        </a>`);

                document.querySelector('.SPZ-2011-TC #hero-section .row.hero .col.form').insertAdjacentHTML('afterbegin', `<div class="edition-badge"><span>Updated for 2025</span></div>`);

                document.querySelector('.SPZ-2011-TC #hero-section .row.hero .col.form').insertAdjacentHTML('afterend', `<div class="col spz-content">
          <a href="https://expel.com/" class="site-logo-link" rel="home">
            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
          </a>
          <h6 class="section-label">Managed Detection and Response Services</h6>
          <h2 class="section-heading">90% improvement in security risk detection*</h2>
          <p class="info-text"><strong>With Expel you get:</strong></p>
          <ul class="section-highlight-point">
            <li class="list-item"><span class="highlight-text">24x7 SOC services</span> with threat detection, alert triage, remediation recommendations, automated responses & a 17-minute MTTR.</li>
            <li class="list-item"><span class="highlight-text">Extensive protection</span> across cloud workloads, control planes, identity management, SaaS, endpoints, and networks.</li>
            <li class="list-item"><span class="highlight-text">130+ integrations</span> including AWS, CrowdStrike, Google, Microsoft, Okta, Palo Alto, SentinelOne, Splunk, Salesforce, Wiz, and more.</li>
          </ul>
          <p class="info-text">See Expel in action!</p>
        </div>`);

                document.querySelector('.SPZ-2011-TC #hero-section .row.hero').insertAdjacentHTML('afterend', `<div class="hero-client-logos">
          <div class="container">
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275521.svg" alt="Visa" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275522.svg" alt="Uber" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275523.svg" alt="Markel" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2006/frame_1171275524.svg" alt="Carter's" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1750317727/expel/4008/doordash_logo.svg" alt="FiscalNote" class="client-logo" />
            </div>
          </div>  
        </div>`);

                document.querySelector('.SPZ-2011-TC #hero-section .hero .ex-form .form-title').textContent = "Watch demo";

                //Form internal code
                waitForElm('.SPZ-2011-TC #hero-section .ex-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                    formModify();
                });
                // footer text addition
                waitForElm('.SPZ-2011-TC #expel-footer').then(function () {
                    document.querySelector('.SPZ-2011-TC #expel-footer .row.links-container').insertAdjacentHTML('beforebegin', `<div class="row links-container links-container--SPZ-2011-TC">
            <div class="col links"></div>
            <div class="col rights">
              <p class="links-container__text--SPZ-2011-TC">*Expel customer surveys, Verified by UserEvidence June-December 2023</p>
            </div>
          </div>`);
                });
            });
            // Use this and change value according to the experiment
            removeSpecificCookieValue('#2011 | Expel | Demo | Split Screen', ['variant_#2011']);
            hiddenValue('#2011 | Expel | Demo | Split Screen', 'truecontrol_#2011');
        }
    }
});

function formModify() {
    // Unwrap all child elemnts of mktoFormRow
    var mktoForm = document.querySelector('.mktoForm');
    var mktoFormRows = document.querySelectorAll('.mktoFormRow');
    mktoFormRows.forEach(function (row) {
        while (row.firstChild) {
            mktoForm.insertBefore(row.firstChild, row);
        }
        row.remove();
    });
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm .mktoFormCol');
    for (var i = 0; i < form_fields.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        form_fields[i].classList.add(dynamicClass);
    }

    // start checking for form fields render, then add display none explicitly (fix to resolve Safari Non Progressive Form issue - https://app.asana.com/1/77217210692853/project/1208736341602818/task/1209664131182445)
    let fieldWrappers = ['FirstName', 'LastName', 'Phone', 'Company', 'Company_Size__c', 'Person_Country__c'];
    let checkEmailField = setInterval(() => {
        const emailField = document.querySelector('.SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm .mktoFormCol[data-wrapper-for="Email"]');

        // if (emailField) {
        //     clearInterval(checkEmailField);

        //     // loop all target fields wrappers
        //     fieldWrappers.forEach( (item) => {
        //         let checkField = setInterval(() => {
        //             const field = document.querySelector(`.SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm .mktoFormCol[data-wrapper-for="${item}"]`);

        //             if (field) {
        //                 field.dataset.matched = true;
        //                 // field.style.display = 'none';

        //                 clearInterval(checkField);
        //             }
        //         });
        //     } );
        // }
    });

    // Updating Form Labels
    document.querySelector('#LblCompany_Size__c').textContent = "Company Size";
    document.querySelector('#Company_Size__c').options[0].textContent = 'Select';
    document.querySelector('#LblPerson_Country__c').textContent = "Country";

    /* changing field-8 to field-7 due to change in form (previous selector '.SPZ-2011-TC .mktoForm .field-8 .mktoHtmlText') */
    document.querySelector('.SPZ-2011-TC .mktoForm .field-7 .mktoHtmlText').innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`;
    // form CTA Update
    let form_CTA = setInterval(() => {
        let textChng = document.querySelector('.SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm .mktoButtonRow');
        if (textChng && !textChng.classList.contains('text-updated')) {
            textChng.insertAdjacentHTML('afterbegin', `<span class="button-text"><svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.745 8.188L4.958 2.362a.738.738 0 00-.383-.112.701.701 0 00-.696.703h-.004v12.094h.004c0 .387.312.703.696.703.144 0 .263-.05.393-.12l9.777-5.818a1.06 1.06 0 000-1.624z" fill="#fff"></path></svg> Instant access</span>`);
            textChng.classList.add('text-updated');
            clearInterval(form_CTA);
        }
    }, 100);
    // Change Field Position (not changing because of form update right now, uncomment if needed)
    var phone_field = document.querySelector('.SPZ-2011-TC .mktoForm .field-2');
    var lname_field = document.querySelector('.SPZ-2011-TC .mktoForm .field-4');
    //lname_field.after(phone_field);

    var disclaimer_field = document.querySelector('.SPZ-2011-TC .mktoForm .mktoCaptchaDisclaimer');
    var form_button = document.querySelector('.SPZ-2011-TC .mktoForm .mktoButtonRow');
    form_button.after(disclaimer_field);

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll(`.SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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
        });
    }

    focusFields();

    // Function to add .field-error class on closest parent .field class if .error is exist on input
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


        if (elem.name == 'Email') {
            let counterA = 0;
            const intervalIdA = setInterval(() => {
                if (document.querySelector('.SPZ-2011-TC #hero-section form.mktoForm .mktoFormCol.field-2').style.display !== "none") {
                    document.body.classList.add('form-expand');
                }
                counterA++;
                if (counterA >= 20) {
                    clearInterval(intervalIdA);
                }
            }, 500);
        }
        if (elem.name == 'Person_Country__c') {
            waitForElm('form.mktoForm .mktoFormCol.spz-privacy-policy').then(function (elm) {
                document.querySelector('[data-wrapper-for="Person_Country__c"]').after(elm);
            });
        }
    }

    document.querySelector('.SPZ-2011-TC #hero-section form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
        waitForElm('.SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm .mktoError').then(function (elm) {
            if (elm.parentNode.querySelector('#ValidMsgEmail')) {
                const targetNode = elm.parentNode;
                const config = {
                    attributes: true,
                    childList: true,
                    subtree: true
                };
                const callback = (mutationList, observer) => {
                    for (const mutation of mutationList) {
                        if (mutation.type === "childList") {
                            if (elm.parentNode === null && elm.style.display != 'none') {
                                targetNode.classList.add('error');
                            } else {
                                elm.parentNode.classList.add('error');
                            }
                            observer.disconnect();
                        } else if (mutation.type === "attributes") {
                            if (elm.parentNode === null) {
                                targetNode.classList.add('error');
                            } else {
                                elm.parentNode.classList.add('error');
                            }
                            observer.disconnect();
                        }
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            } else {
                let counterA = 0;
                const intervalIdA = setInterval(() => {
                    if (document.querySelector('.SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail') !== null) {
                        document.querySelector('.SPZ-2011-TC #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
                    }
                    counterA++;
                    if (counterA >= 10) {
                        clearInterval(intervalIdA);
                    }
                }, 500);
            }
        });
    })

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
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        });
    });
}

// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
function hiddenValue(currentExperimentName, currentExperimentValue) {
    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');

    if (!ExistingExperimentName) {

        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;

        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

function removeSpecificCookieValue(name, values) {
    ['ExperimentName', 'ExperimentValue'].forEach((key, i) => {
        const updatedValues = getCookie(key)?.split(',').filter(v => !((i ? values : [name]).includes(v))).join(',');
        setCookie(key, updatedValues || '', 1);
    });
}
// Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)
