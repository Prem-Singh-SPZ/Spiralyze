(function () {

  if (!document.getElementById('spz-1001')) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var css = `.spz_1001 .announcement-banner,
    .spz_1001 nav.navigation,
    .spz_1001 .page-transition,
    .spz_1001 footer .container.grid {
        display: none;
    }

    .spz_1001 #__next .font-sans>.flex-col {
        position: relative;
    }

    .spz_1001 .spz-hero {
        position: relative;
        padding: 64px 0 81px;
        margin-bottom: 82px;
        overflow: hidden;
    }

    .spz_1001 .spz-hero::before {
      position: absolute;
      content: "";
      background-image: url("https://res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1001/illustrator.webp");
      background-size: contain;
      background-repeat: no-repeat;
      width: 672px;
      height: 480px;
      top: 22px;
      right: -161px;
    }

    .spz_1001 .spz-hero::after {
        position: absolute;
        content: "";
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1001/frame_1171275822_webp.webp");
        background-size: contain;
        background-repeat: no-repeat;
        width: 528px;
        height: 136px;
        left: -328px;
        bottom: 209px;
    }

    .spz_1001 .spz-hero .spz-wrapper {
        width: 100%;
        max-width: 1330px;
        padding: 0 20px;
        margin: 0 auto;
        z-index: 99;
        position: relative;
    }

    .spz_1001 .spz-hero .spz-form-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    .spz_1001.form-submit .spz-hero .spz-form-wrap {
        align-items: center;
    }

    .spz_1001 .spz-hero .spz-form-wrap .content-section {
      width: 49.77%;      
      max-width: 642px;
    }
    .spz_1001 .spz-hero .spz-form-wrap .spz-form-section {
        width: 46.52%;
        max-width: 600px;
    }

    .spz_1001 .spz-form-wrap .site-logo {
        display: inline-flex;
        flex-wrap: wrap;
        width: auto;
        height: auto;
    }

    .spz_1001 .spz-form-wrap .site-logo img {
        width: 100%;
        max-width: 150px;
        height: auto;
    }

    .spz_1001 .spz-form-wrap .content-superheading {
        color: #415364;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 57px 0 13px;
    }

    .spz_1001 .spz-form-wrap .content-heading {
        color: #0033A1;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.2;
    }

    .spz_1001 .spz-form-wrap .spz-features-wrap {
        display: flex;
        flex-wrap: wrap;
        margin-top: 32px;
        position: relative;
    }

    .spz_1001 .spz-form-wrap .spz-features-wrap .feature-item {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 29px;
        padding-left: 34px;
        position: relative;
    }

    .spz_1001 .spz-form-wrap .spz-features-wrap .feature-item:last-child {
        margin: 0;
    }

    .spz_1001 .spz-form-wrap .spz-features-wrap img {
      position: absolute;
      width: 24px;
      height: 24px;
      top: -1px;
      left: 0px;
    }

    .spz_1001 .spz-form-wrap .spz-features-wrap span {
        color: #415364;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
    }

    .spz_1001 .spz-form-wrap .spz-features-wrap span b {
        font-weight: 600;
    }

    .spz_1001 .spz-form-wrap .form-arrow {
      margin: 44px 42px 0 auto;
      width: 176.83px;
      height: 116px;
      object-fit: contain;
    }

    .spz_1001 .spz-hero .spz-form-wrap .spz-form-section {
        border-radius: 24px;
        background: #FFF;
        box-shadow: 0px 8px 40px 0px rgba(65, 83, 100, 0.16);
        padding: 41px 40px 39px;
    }

    .spz_1001 .spz-form-section .form-heading {
        color: #415364;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 23px;
    }

    .spz_1001.form-submit .spz-form-section .form-heading {
        display: none;
    }

    .spz_1001 .spz-hero .social-proof-logos {
        margin-top: 57px;
        width: 100%;
        max-width: 1330px;
        padding: 0 20px;
        margin: 63px auto 0;
    }

    .spz_1001 .spz-hero .social-proof-logos .social-proof-heading {
        color: #415364;
        text-align: center;
        font-size: 21px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 25px;
    }

    .spz_1001 .spz-hero .social-proof-logos .social-proof-images {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .spz_1001 .social-proof-logos .social-proof-images img {
        width: auto;
        height: 58px;
        object-fit: contain;
    }

    .spz_1001 .social-proof-logos .social-proof-images img.repeat-img {
        display: none;
    }

    .spz_1001 footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px 0;
        margin-top: 0;
    }

    .spz_1001 footer .container.flex {
        border: none;
        width: 100%;
        max-width: 1330px;
        padding: 0 20px;
    }

    @media(min-width: 1601px) {
        .spz_1001 .spz-hero:before {
            right: 0;
            width: 672px;
            height: 480px;
            top: 43px;
        }

        .spz_1001 .spz-hero:after {
            width: 1056px;
            height: 272px;
            left: -593px;
            bottom: 150px;
            background-image: url("https://res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1001/illustration_-_2_webp.webp");
        }

        /* .spz_1001 .spz-form-wrap .form-arrow {
        margin: 36px 4px 0 auto;
        width: 125px;
        height: 82px;
      } */
        .spz_1001 .spz-hero .social-proof-logos {
            margin: 64px auto 0;
        }
    }

    @media(max-width: 1399.98px) {
        .spz_1001 .spz-hero:before {
            right: -30%;
        }
    }

    @media(max-width: 1199.98px) {
        .spz_1001 .spz-hero:before {
            right: -50%;
        }
    }

    @media(max-width: 1023.98px) {
        .spz_1001 .spz-hero {
            padding: 32px 0 81px;
            margin-bottom: 134px;
        }

        .spz_1001 .spz-hero:before {
          top: 537px;
          right: -138px;
        }

        .spz_1001 .spz-hero:after {
            width: 388.24px;
            height: 100px;
            left: -228px;
            bottom: 199px;
        }

        .spz_1001 .spz-hero .spz-wrapper {
            max-width: 640px;
        }

        .spz_1001 .spz-hero .spz-form-wrap {
            flex-direction: column;
        }

        .spz_1001 .spz-hero .spz-form-wrap .content-section,
        .spz_1001 .spz-hero .spz-form-wrap .spz-form-section {
            width: 100%;
            max-width: unset;
        }

        .spz_1001 .spz-form-wrap .content-superheading {
            margin: 41px 0 13px;
        }

        .spz_1001 .spz-form-wrap .form-arrow {
            display: none;
        }

        .spz_1001 .spz-hero .spz-form-wrap .spz-form-section {
            margin-top: 48px;
            padding-bottom: 40px;
            min-height: 400px;
            align-content: center;
        }

        .spz_1001 .spz-form-section .form-heading {
          margin-bottom: 22px;
        }

        .spz_1001 .spz-hero .social-proof-logos {
            max-width: unset;
            padding: 0;
            margin: 64px auto 0;
            position: relative;
        }

        .spz_1001 .spz-hero .social-proof-logos::before,
        .spz_1001 .spz-hero .social-proof-logos::after {
            position: absolute;
            content: "";
            width: 122px;
            height: 60px;
            bottom: 0;
            left: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
            transform: rotate(180deg);
            z-index: 9;
        }

        .spz_1001 .spz-hero .social-proof-logos::after {
            left: unset;
            right: 0;
            transform: none;
        }

        .spz_1001 .spz-hero .social-proof-logos .social-proof-images {
            display: flex;
            flex-wrap: unset;
            align-items: unset;
            justify-content: unset;
            position: relative;
            width: 2368px;
            gap: 0 32px;
            -webkit-animation: scroll 25s linear infinite;
            animation: scroll 25s linear infinite;
        }

        .spz_1001 .social-proof-logos .social-proof-images img {
            width: 100%;
            max-width: 120px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
        }

        .spz_1001 .social-proof-logos .social-proof-images img.repeat-img {
            display: block;
        }

        .spz_1001 footer .container.flex {
            padding: 16px 20px;
        }
    }

    @media(max-width: 767.98px) {
        .spz_1001 .spz-hero {
            padding: 16px 0 64px;
            margin-bottom: 0;
        }

        .spz_1001 .spz-hero:before {
            width: 336px;
            height: 240px;
            top: 620px;
            right: -70px;
        }

        .spz_1001 .spz-hero:after {
            bottom: 299px;
        }

        .spz_1001 .spz-hero .spz-wrapper {
            max-width: unset;
        }

        .spz_1001 .spz-form-wrap .content-heading {
            font-size: 30px;
        }

        .spz_1001 .spz-form-wrap .spz-features-wrap {
            margin-top: 24px;
        }

        .spz_1001 .spz-form-wrap .spz-features-wrap .feature-item {
            margin-bottom: 30px;
        }

        .spz_1001 .spz-hero .spz-form-wrap .spz-form-section {
            margin-top: 32px;
            border-radius: 16px;
            padding: 33px 20px 39px;
        }

        .spz_1001 .spz-form-section .form-heading {
            font-size: 28px;
            margin-bottom: 24px;
        }

        .spz_1001 .spz-hero .social-proof-logos {
            margin: 63px auto 0;
        }

        .spz_1001 .spz-hero .social-proof-logos .social-proof-heading {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 23px;
        }

        .spz_1001 .spz-hero .social-proof-logos:before,
        .spz_1001 .spz-hero .social-proof-logos:after {
            height: 48px;
        }

        .spz_1001 .spz-hero .social-proof-logos .social-proof-images {
            gap: 0 16px;
        }

        .spz_1001 .social-proof-logos .social-proof-images img {
            max-width: 99.31px;
            height: 48px;
        }

        .spz_1001 footer {
            position: relative;
        }

        .spz_1001 footer .container.flex {
            padding: 10px 20px;
        }
    }

    @keyframes scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            -webkit-transform: translateX(-1184px);
            transform: translateX(-1184px);
        }
    }

    /* Form Styling CSS Start */
    input:-webkit-autofill,
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

    .spz_1001 .spz-form-section form.mktoForm {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100% !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow {
        width: 100%;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-2,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-3,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-4,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-5,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-6,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-7,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-8.spz-half,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-9,
    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-10 {
        width: calc(50% - 8px);
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-11,
    .spz_1001 .spz-form-section form.mktoForm>div:not([class]):not([id]) {
        display: none;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFormCol {
        margin: 0 !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap {
        position: relative;
        margin-bottom: 16px;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel {
        color: #415364;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        margin: 0;
        padding: 2px 4px;
        position: absolute;
        top: 12px;
        left: 12px;
        background: #FFF;
        width: auto !important;
        height: auto;
        pointer-events: none;
        transition: color .3s ease-in-out, top .3s ease-in-out, font-size .3s ease-in-out;
        z-index: 9;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel#LblreceivingAdvertisingInformation {
        position: relative;
        top: unset;
        left: unset;
        padding: 0;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel .mktoAsterix {
        display: none !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap:hover label.mktoLabel,
    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap:hover label.mktoLabel .mktoAsterix {
        color: #415364;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.filled:not(.active):not(.error) label.mktoLabel,
    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.filled:not(.active):not(.error) label.mktoLabel .mktoAsterix {
        color: #415364 !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing label.mktoLabel,
    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.filled label.mktoLabel {
        width: auto !important;
        top: -12px;
        color: #0071CE;
        font-size: 12px;
        font-weight: 600;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing label.mktoLabel .mktoAsterix,
    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing label.mktoLabel .mktoAsterix {
        color: #0071CE;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.error label.mktoLabel,
    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.error label.mktoLabel .mktoAsterix {
        color: #E6241E;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .mktoField:not([type=checkbox]) {
        width: 100% !important;
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 13px 15px;
        margin: 0 !important;
        border: 1px solid #DAE1E9;
        outline: none;
        background: #FFF;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all .3s ease-in-out;
        color: #415364 !important;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap:not(.active):not(.typing):not(.filled) select.mktoField {
        color: transparent !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap select.mktoField {
        padding-right: 37px !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap:hover .mktoField:not([type="checkbox"]) {
        border-color: #415364;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing .mktoField:not([type="checkbox"]) {
        border-color: #0071CE;
        box-shadow: 0 0 0 1px #0071CE;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap.error .mktoField:not([type="checkbox"]) {
        border-color: #E6241E;
        box-shadow: none;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError {
        position: relative;
        top: unset !important;
        bottom: unset !important;
        left: unset !important;
        right: unset !important;
        margin: 4px 0 0 !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg {
        color: #E6241E;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 1.6;
        position: relative;
        padding-left: 16px;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg::before {
        position: absolute;
        content: "";
        width: 12px;
        height: 12px;
        top: 4px;
        left: 0;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1730889945/sailpoint/1001/error-icon.svg");
        background-size: contain;
        background-repeat: no-repeat;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper

    /* ,.spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList */
        {
        margin: 0 !important;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper::after {
        position: absolute;
        content: "";
        background-image: url("https://res.cloudinary.com/spiralyze/image/upload/v1730978539/sailpoint/1001/icons__system.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 18px;
        height: 10px;
        top: 20px;
        right: 16px;
        pointer-events: none;
        z-index: 9;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper .select-dropdown {
        display: none;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorArrowWrap
    /* ,.spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList input[type=checkbox]  */
    {
        display: none !important;
    }

    /* .spz_1001 .mktoForm input[type=checkbox] {
        width: 16px;
        height: 16px;
        margin: 0;
    }  */

    /* .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList~input[type=checkbox] {
        width: 16px !important;
        height: 16px !important;
        margin: 0 !important;
        top: 3px !important;
        position: absolute;
        top: 0px;
        left: 0px;
    } */

    @media (max-width: 767.98px) {
        /* .spz_1001 .mktoCheckboxList input[type=checkbox] {
            width: 20px;
            height: 20px;
        } */

        /* .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList~input[type=checkbox] {
            width: 20px !important;
            height: 20px !important;
            margin: 0 !important;
            top: 0px !important;
            position: absolute;
            top: 0px;
            left: 0px;
        } */
    } 

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList {
      margin-bottom: 0;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label {
        position: relative;
        color: #415364;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        padding-left: 12px;
        padding-right: 0;
        cursor: pointer;
        display: inline-flex;
        width: auto;
    }

    /* .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label::before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        top: 3px;
        left: 0;
        border-radius: 2px;
        border: 1.5px solid #415364;
        z-index: 2;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label:hover::before {
        border-color: #0071CE;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList input:checked+label:before {
        border: none;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1001/checkboxes.png");
        background-size: 16px;
        background-repeat: no-repeat;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList input:checked+label:hover:before {
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1001/checkboxes-hover.png");
    } */

    /* .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label::after {
        position: absolute;
        content: "";
        width: 32px;
        height: 32px;
        top: -5px;
        left: -8px;
        border-radius: 50px;
        pointer-events: none;
        z-index: 1;
        opacity: 0;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label:active::after {
        background: #415364;
        opacity: 0.1;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label:focus::after {
        background: #415364;
        opacity: 0.3;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList input:checked+label:active::after {
        background: #0071CE;
        opacity: 0.1;
    } */

    /* .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList input:checked+label:focus::after {
        background: #0071CE;
        opacity: 0.3;
    } */

    .spz_1001 .spz-form-section form.mktoForm .mktoButtonRow {
        width: 100%;
        margin-top: 7px;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton {
        width: 100%;
        height: 48px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: none;
        background: #0071CE;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.6;
        transition: all 0.5s ease-in-out;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton:hover {
        background: #005DAA;
    }

    .spz_1001 .spz-form-section form.mktoForm .mktoCaptchaDisclaimer,
    .spz_1001 .spz-form-section .disclaimer {
        margin: 0;
        padding: 0;
        color: #415364;
        text-align: left;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        max-width: 100%;
    }

    .spz_1001 .spz-form-section .disclaimer {
        max-width: unset;
        font-size: 14px;
        margin-top: 8px;
    }

    .spz_1001.form-submit .spz-form-section .disclaimer {
      display: none;
    }

    .spz_1001 .spz-form-section .disclaimer a {
        color: #0071CE;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        text-decoration-line: underline;
        transition: all 0.1s ease-in-out;
    }

    .spz_1001 .spz-form-section .disclaimer a:hover {
        text-decoration: none;
        font-weight: 600;
    }

    .spz_1001 .spz-form-section .disclaimer a:active,
    .spz_1001 .spz-form-section .disclaimer a:focus-visible {
        text-decoration: none;
        font-weight: 600;
        border-radius: 4px;
        border: 1.5px solid #0071CE;
        background: rgba(0, 113, 206, 0.05);
        padding: 0 4px;
    }

    @media(max-width: 1119.98px) and (min-width: 1024px) {
        .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel {
            font-size: 12px;
        }

        .spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper:after {
            width: 12px;
            top: 21px;
            right: 11px;
        }
    } 

    @media(max-width: 767.98px) {
        .spz_1001 .spz-form-section form.mktoForm .mktoFormRow {
            width: 100% !important;
        }

        /* .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label:before {
            width: 20px;
            height: 20px;
            top: 0px;
            background-size: 20px !important;
        }

        .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList input:checked+label:before {
            background-size: 20px !important;
        }

        .spz_1001 .spz-form-section form.mktoForm .mktoCheckboxList label:after {
            top: -6px;
            left: -6px;
            width: 20px;
            height: 20px;
        } */

        .spz_1001 .spz-form-section form.mktoForm .mktoCaptchaDisclaimer {
            max-width: unset;
        }

        .spz_1001 .spz-form-section form.mktoForm .mktoCaptchaDisclaimer a {
            display: inline-block;
        }
    }

    /* Form Styling CSS End */`;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'spz-1001';
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
        if (!body.classList.contains('spz_1001')) {
          body.classList.add('spz_1001');

          const heroSelector = `.page-transition`;
          const position = "beforebegin";
          const formSelector = `#mktoForm_1018`;
          const heroContent = {
            siteLogo: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo__colored.svg",
            siteLogoAlt: "SailPoint",
            contentSuperHeading: "Unified identity security",
            contentHeading: "Discover, manage, and secure all identities",
            features: [
              {
                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1730978649/sailpoint/1001/check.svg",
                featureItemContent: "<b>Access management.</b> Monitor user access. Auto-implement roles. Streamline access approval or removal.",
              },
              {
                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1730978649/sailpoint/1001/check.svg",
                featureItemContent: "<b>Complete coverage.</b> Manage non-employee or privileged access, machine identities, entitlements across clouds, passwords, risk, etc. Detect threats.",
              },
              {
                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1730978649/sailpoint/1001/check.svg",
                featureItemContent: "<b>Compliance.</b> Demonstrate compliance with audit trails. GDPR, HIPAA, PCI, CCPA, FISMA, PCPD, PDPA, and more.",
              },
            ],
            formArrow: "//res.cloudinary.com/spiralyze/image/upload/v1730978717/sailpoint/1001/arrow.svg",
            formHeading: "Get live demo",
          };
          const additionalSection = {
            socialProofLogos: {
              socialProofHeading: "Used by 48% of the Fortune 500",
              socialProofImages: [
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_01.svg",
                  imgAlt: "GM",
                },
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_02.svg",
                  imgAlt: "Hershey",
                },
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_03.svg",
                  imgAlt: "Paccar",
                },
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_04.svg",
                  imgAlt: "Philips",
                },
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_05.svg",
                  imgAlt: "RWE",
                },
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_06.svg",
                  imgAlt: "T Mobile",
                },
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_07.svg",
                  imgAlt: "The Home Depot",
                },
                {
                  url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_08.svg",
                  imgAlt: "Toyota",
                },
              ]
            },
          }

          function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
            const formTemplate = `<section class="spz-hero">
              <div class="spz-wrapper">
                <div class="spz-form-wrap">
                  <div class="content-section">
                    ${formData.siteLogo.length !== 0
                ? `<a class="site-logo" data-sentry-element="NextLink" data-sentry-source-file="MainLargeNavigation.tsx" href="/">
                        <img src="${formData.siteLogo}" alt="${formData.siteLogoAlt}" />
                      </a>`
                : ""
              }
                    ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
                ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
                : ""
              }
                    ${formData.contentHeading.replace(/\s/g, "").length !== 0
                ? `<div class="content-heading">${formData.contentHeading}</div>`
                : ""
              }
                    <div class="spz-features-wrap">
                      ${formData.features.length > 0 ? formData.features.map((item) => {
                return `<div class="feature-item">
                          <img src="${item.checkmarkImage}" alt="checkmark" />
                          <span>${item.featureItemContent}</span>
                        </div>`;
              }).join("")
                : ""
              }
                    </div>
                    ${formData.formArrow.length !== 0
                ? `<img src="${formData.formArrow}" class="form-arrow" alt="Arrow" />`
                : ""
              }
                  </div>
                  <div class="spz-form-section">
                    ${formData.formHeading.replace(/\s/g, "").length !== 0
                ? `<div class="form-heading">${formData.formHeading}</div>`
                : ""
              }
                    <div class="the-form"></div>
                  </div>
                </div>
              </div>
              ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                <div class="social-proof-images">
                  ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                return `<img src="${item.url}" alt="${item.imgAlt}">`;
              })
                  .join("") + additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                    return `<img src="${item.url}" class="repeat-img" alt="${item.imgAlt}">`;
                  })
                    .join("")
                  : ""}
                </div>
              </div>`
                : ``}
            </section>`;
            waitForElm(heroSelector).then(() => {
              document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
            });
            let formLoaded = setInterval(() => {
              if (document.querySelector(".spz-form-wrap .the-form") && document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                clearInterval(formLoaded)
                document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(formSelector));
                // document.querySelector(".spz-form-wrap .the-form")?.appendChild(document.querySelector('.mkto-wrap + .disclaimer')?.cloneNode(true));
                document.querySelector(".spz-form-wrap .the-form").insertAdjacentElement('afterend', document.querySelector('.mkto-wrap + .disclaimer'));
                formModify();
              }
            });
          }



          //the .spz-hero gets added to the page and removed after some time, so keep checking for it to add the form
          let spzHeroInterval = setInterval(() => {
            if (document.querySelectorAll('.spz-hero').length == 0 && window.location.pathname === '/demo') {
              addBaseline(heroContent, position, formSelector, heroSelector, additionalSection);
              hiddenValue('SPZ_1001', 'SPZ_1001_Variant');
              setHiddenFieldValue();
            }
            else {
              if (window.location.pathname.indexOf("/demo") == -1 && document.querySelectorAll('.spz-hero').length > 0) {
                document.querySelectorAll('.spz-hero').forEach(item => {
                  item.remove();
                });
              }
            }
          }, 1000);
          setTimeout(function () {
            clearInterval(spzHeroInterval);
          }, 15000);


          function formModify() {
            // Add class in mktoFormRow using count
            var form_fields = document.querySelectorAll('.spz_1001 .spz-form-section form.mktoForm .mktoFormRow');
            for (var i = 0; i < form_fields.length; i++) {
              var dynamicClass = 'field-' + (i + 1);
              form_fields[i].classList.add(dynamicClass);
            }

            // Change Label Text
            ['#LblCountry:Country', '#LblState:State', '#LblNumber_of_Employees__c:Number of employees'].forEach(item => {
              const [id, text] = item.split(':');
              waitForElm(`.spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
              });
            });

            // waitForElm('.spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-31 .mktoCheckboxList label').then(label => {
            //   label.textContent = "Uncheck to stop receiving SailPoint email communications.";
            // });

            // Change Field Position
            var employees_field = document.querySelector('.spz_1001 form.mktoForm .field-8');
            var state_field = document.querySelector('.spz_1001 form.mktoForm .field-10');
            state_field.after(employees_field);

            // var disclaimer_field = document.querySelector('.spz_1001 form.mktoForm .mktoCaptchaDisclaimer');
            // var button = document.querySelector('.spz_1001 form.mktoForm .mktoButtonRow');
            // button.after(disclaimer_field);

            document.querySelector('.spz_1001 form.mktoForm .field-11 .mktoField').value = 'Get live demo';

            waitForElm(`.spz_1001 .spz-form-section form.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
              setTimeout(() => {
                document.querySelectorAll(`.spz_1001 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                  if (el && el.value && (el.value != '')) {
                    el.closest('.mktoFieldWrap').classList.add('filled');
                  }
                });
              }, 1000);
            });

            // On input focus add class on closest parent field class
            function focusFields() {
              // Attach events using event delegation
              const form = document.querySelector('.spz_1001 form.mktoForm');

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

              // Function to reapply functionality for dynamic fields
              function reapplyStateFieldListeners() {
                const stateField = document.querySelector('.spz_1001 form.mktoForm .mktoFieldWrap .mktoField#State');
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

              const container = document.querySelector('.spz_1001 form.mktoForm');
              if (container) {
                observer.observe(container, { childList: true, subtree: true });
              }
            }

            focusFields();

            function checkAllFields() {
              const fields = document.querySelectorAll('.spz_1001 form.mktoForm .mktoField');
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
            }

            document.querySelector('select#Country').addEventListener('change', () => {
              const stateRow = document.querySelector('.spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-10');
              const optOutRow = document.querySelector('.spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-31');
              const employeeNumberRow = document.querySelector('.spz_1001 .spz-form-section form.mktoForm .mktoFormRow.field-8');

              const stateExists = document.querySelector('select#State');
              stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), employeeNumberRow.classList.remove('spz-half'))
                : (stateRow.classList.add('hidden'), employeeNumberRow.classList.add('spz-half'));

              // document.querySelector('label#LblGlobal_Opt_out__c')
              //   ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.", optOutRow.classList.remove('hidden'))
              //   : optOutRow.classList.add('hidden');
            });

            MktoForms2.whenReady(function (form) {
              form.onSuccess(function (values, followUpUrl) {
                document.body.classList.add('form-submit');

                //if #mktoCheckbox_27268_0 this checkbox is there, keep it checked with setinterval
                var checkboxInterval = setInterval(() => {
                  var checkbox = document.querySelector('.spz_1001 form.mktoForm #mktoCheckbox_27268_0');
                  if (checkbox) {
                    checkbox.checked = true;
                  }
                }, 100);

                setTimeout(() => {
                  clearInterval(checkboxInterval);
                }, 5000);
              });
            });

          }
        } else {
          if (body.classList.contains('spz_1001')) {
            hiddenValue('SPZ_1001', 'SPZ_1001_Variant');
            let callMultipleTimes = setInterval(() => {
              setHiddenFieldValue();
            }, 500);

            setTimeout(() => {
              clearInterval(callMultipleTimes);
            }, 10000);
          }
        }
      }
    });
  }

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.spz_1001')) {
        document.body.classList.remove("spz_1001");
      }
    }, 2000);
  }

  // Do not touch below hidden field code for any Experiment Start
  function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldNameDemo');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');

    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldNameDemo', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueDemo', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldNameDemo', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueDemo', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
      var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1018 input[name="intellimize1"]');
      if (intellimize1) {
        clearInterval(spz_cro_Interval);
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');
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

    setTimeout(function () {
      clearInterval(spz_cro_Interval);
    }, 15000);
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
  var url = location.href;
  urlCheck(url);
  window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
  });

  function urlCheck(url) {
    let testURL = "";
    if (window.location.pathname === '/demo') {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      createTest();
    } else {
      removeTest();
    }
  }

  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#")
      ? currentUrl.slice(0, currentUrl.indexOf("#"))
      : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
      ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
      : specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?")
        ? currentUrl.slice(0, currentUrl.indexOf("?"))
        : currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
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
})();