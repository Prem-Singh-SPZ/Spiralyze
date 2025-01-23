(function () {

    if (!document.getElementById('spz-4003')) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var css = `.SPZ_4003_V1 .hero,
      .SPZ_4003_V1 .hero + .gated__body, .SPZ_4003_V1 .hero ~ .row.article.mt-md.mb-xxl {
        display: none;
      }
      .SPZ_4003_V1 .spz-hero {
        background: linear-gradient(84deg, rgba(84, 192, 232, 0.50) 39.41%, rgba(84, 192, 232, 0.20) 88.11%), #FFF;
        padding: 65px 0 62px;
      }
      .SPZ_4003_V1 .spz-hero .spz-form-wrap {
        width: 100%;
        max-width: 1290px;
        padding: 0 21px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
      }
      .SPZ_4003_V1 .spz-hero .content-section {
        width: 50.50%;
        max-width: 630px;
      }
      .SPZ_4003_V1 .spz-hero .content-superheading {
        color: #415364;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
      }
      .SPZ_4003_V1 .spz-hero .content-heading {
        color: #0033A1;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.2;
        margin: 17px 0 24px;
      }
      .SPZ_4003_V1 .spz-hero .content-text p {
        color: #415364;
        font-size: 20px !important;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 1.75 !important;
        margin-bottom: 24px !important;
      }
      .SPZ_4003_V1 .spz-hero .content-text ul {
        margin-bottom: 24px;
      }
      .SPZ_4003_V1 .spz-hero .content-text ul li {
        margin-bottom: 25px !important;
        padding-left: 40px;
        color: #415364;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
      }
      .SPZ_4003_V1 .spz-hero .content-text ul li::before {
        position: absolute;
        content: "";
        width: 24px;
        height: 24px;
        top: 4px;
        left: 0;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1734511184/sailpoint/4003/check.svg");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .SPZ_4003_V1 .spz-hero .spz-form-section {
        width: 47.52%;
        max-width: 593px;
        border-radius: 24px;
        background: linear-gradient(134deg, #0033A1 38.16%, #004FB5 64.91%, #0071CE 100.05%);
        box-shadow: 0px 8px 40px 0px rgba(65, 83, 100, 0.16);
        padding: 41px 40px 23px;
      }
      .SPZ_4003_V1.form-submit .spz-hero .spz-form-section {
        padding: 40px;
      }
      .SPZ_4003_V1 .social-proof-logos {
        width: 100%;
        max-width: 1290px;
        padding: 0 21px;
        margin: 80px auto 100px;
      }
      .SPZ_4003_V1 .social-proof-logos .social-proof-heading {
        color: #415364;
        text-align: center;
        font-size: 21px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 48px;
      }
      .SPZ_4003_V1 .social-proof-logos .social-proof-images {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      }
      .SPZ_4003_V1 .social-proof-logos .social-proof-images img {
        width: auto;
        height: 60px;
        object-fit: contain;
      }
      @media(max-width: 1023.98px) {
        .SPZ_4003_V1 .spz-hero {
          padding: 80px 0;
        }
        .SPZ_4003_V1 .spz-hero .content-section,
        .SPZ_4003_V1 .spz-hero .spz-form-section {
          width: 100%;
          max-width: unset;
        }
        .SPZ_4003_V1 .spz-hero .content-text ul {
          margin-bottom: 38px;
        }
        .SPZ_4003_V1 .spz-hero .spz-form-section {
          padding: 41px 40px 24px;
        }
        .SPZ_4003_V1 .social-proof-logos {
          margin: 42px auto 100px;
        }
      }
      @media(max-width: 767.98px) {
        .SPZ_4003_V1 .spz-hero .content-heading {
          font-size: 34px;
          margin: 17px 0 26px;
        }
        .SPZ_4003_V1 .spz-hero .content-text p {
          font-size: 18px!important;
          line-height: 1.6 !important;
        }
        .SPZ_4003_V1 .spz-hero .content-text ul {
          margin-bottom: 40px;
        }
        .SPZ_4003_V1 .spz-hero .content-text ul li {
          margin-bottom: 27px !important;
          font-size: 16px;
        }
        .SPZ_4003_V1 .spz-hero .spz-form-section {
          padding: 41px 24px 22px;
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
        -webkit-box-shadow: 0 0 0 56px white inset !important;
        -webkit-text-fill-color: #415364 !important;
      }
      .SPZ_4003_V1 .spz-hero .form-heading {
        color: #FFF;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 23px;
      }
      .SPZ_4003_V1.form-submit .spz-hero .form-heading,
      .SPZ_4003_V1.form-submit .spz-hero .form-footer,
      .SPZ_4003_V1 .spz-hero .spz-form-section #gated-asset > *:empty {
        display: none !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100% !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow {
        width: 100%;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-2,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-3,
      .SPZ_4003_V1 .spz-form-section form.mktoForm.phone-exists .mktoFormRow.field-4,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-5,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-6,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-7:not(.spz-full),
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-8,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-9,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-10 {
        width: calc(50% - 8px);
      }
      .SPZ_4003_V1:not(.form-expand) .spz-form-section form.mktoForm:not(.phone-exists) .mktoFormRow.field-4 ~ .mktoFormRow,
      .SPZ_4003_V1:not(.form-expand) .spz-form-section form.mktoForm.phone-exists .mktoFormRow.field-5 ~ .mktoFormRow,
      .SPZ_4003_V1 .spz-form-section form.mktoForm>div:not([class]):not([id]) {
        display: none;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormCol {
        margin: 0 !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap {
        position: relative;
        margin-bottom: 16px;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel {
        color: #415364;
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
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel .mktoAsterix {
        display: none !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap.filled:not(.active):not(.error) label.mktoLabel {
        font-weight: 600 ;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing label.mktoLabel,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap.filled label.mktoLabel {
        width: auto !important;
        top: 7px;
        color: #0071CE;
        font-size: 12px;
        font-weight: 600;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .mktoField:not([type=checkbox]) {
        width: 100% !important;
        height: 56px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 23px 16px 9px;
        margin: 0 !important;
        border: 1px solid #FFF;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
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
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap:not(.active):not(.typing):not(.filled) select.mktoField {
        color: transparent !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap select.mktoField {
        padding-right: 37px !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap:hover .mktoField:not([type="checkbox"]) {
        border-color: #0071CE;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing .mktoField:not([type="checkbox"]) {
        border-color: #FFF;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap.error .mktoField:not([type="checkbox"]) {
        border-color: #E6241E;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError {
        position: relative;
        top: unset !important;
        bottom: unset !important;
        left: unset !important;
        right: unset !important;
        margin: 10px 0 0 !important;
      }
      .SPZ_4003_V1:not(.form-expand) .spz-form-section form.mktoForm .field-4 .mktoFieldWrap .mktoError:not(.customError),
      .SPZ_4003_V1.form-expand .spz-form-section form.mktoForm .field-4 .mktoFieldWrap .mktoError.customError,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .field-4 .mktoFieldWrap:not(.emailerror) .mktoError.customError {
        display: none !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg {
        color: #FFCB27;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 1.6;
        position: relative;
        padding-left: 16px;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg::before {
        position: absolute;
        content: "";
        width: 12px;
        height: 12px;
        top: 4px;
        left: 0;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1736156039/sailpoint/4003/error-icon.svg");
        background-size: contain;
        background-repeat: no-repeat;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper {
        margin: 0 !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper::after {
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
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper .select-dropdown,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorArrowWrap,
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoCheckboxList input[type=checkbox] {
        display: none !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoCheckboxList {
        margin: 0;
      }
      .SPZ_4003_V1 .mktoForm input[type=checkbox] {
        width: 16px !important;
        height: 16px !important;
        margin: 0 !important;
        top: 3px !important;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoCheckboxList ~ input[type=checkbox] {
        width: 16px!important;
        height: 16px!important;
        margin: 0!important;
        top: 3px!important;
        position: absolute;
        top: 0px;
        left: 0px;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoCheckboxList label {
        position: relative;
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        padding-left: 28px;
        padding-right: 0;
        cursor: pointer;
        display: inline-flex;
        width: auto;
        margin-bottom: 0;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoCheckboxList label::before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        top: 3px;
        left: 0;
        border-radius: 2px;
        border: 1.5px solid #FFFFFF;
        z-index: 2;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoCheckboxList label:hover::before {
        opacity: 0.8;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoCheckboxList input:checked+label:before {
        border: none;
        background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1734511888/sailpoint/4003/form__checkboxes.svg");
        background-size: 16px;
        background-repeat: no-repeat;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoButtonRow {
        width: 100%;
        margin-top: 8px;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton,
      .SPZ_4003_V1 .spz-hero .spz-form-section #gated-asset .btn {
        width: 100%;
        height: 48px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 9px;
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0);
        background: #FFF;
        color: #0071CE;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.6;
        transition: all 0.5s ease-in-out;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton:hover,
      .SPZ_4003_V1 .spz-hero .spz-form-section #gated-asset .btn:hover {
        color: #005DAA;
        border-color: #005DAA;
      }
      .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton:focus {
        outline: 1.5px solid #0071CE;
        outline-offset: 4px;
      }
      .SPZ_4003_V1 .spz-hero .spz-form-section #gated-asset {
        min-height: unset !important;
      }
      .SPZ_4003_V1 .spz-hero .spz-form-section h3.text-white {
        color: #FFF;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.2;
        text-align: center;
      }
      .SPZ_4003_V1 .spz-hero .spz-form-section #gated-asset .btn {
        width: auto;
      }
      .SPZ_4003_V1 .spz-hero .disclaimer,
      .SPZ_4003_V1 .spz-hero .form-footer {
        color: #FFF;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        width: 65%;
        margin: 8px auto 0;
      }
      .SPZ_4003_V1 .spz-hero .disclaimer {
        width: 100%;
      }
      .SPZ_4003_V1 .spz-hero .disclaimer a,
      .SPZ_4003_V1 .spz-hero .form-footer a {
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
      }
      .SPZ_4003_V1 .spz-hero .disclaimer a:hover,
      .SPZ_4003_V1 .spz-hero .form-footer a:hover {
        text-decoration: none;
      }
      @media(max-width: 1023.98px) {
        .SPZ_4003_V1 .spz-hero .disclaimer,
        .SPZ_4003_V1 .spz-hero .form-footer {
          width: 100%;
        }
        .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton,
        .SPZ_4003_V1 .spz-hero .spz-form-section #gated-asset .btn {
          padding: 10px 10px 8px;
        }
      }
      @media(max-width: 767.98px) {
        .SPZ_4003_V1 .spz-hero .form-heading {
          font-size: 26px;
        }
        .SPZ_4003_V1 .spz-hero .spz-form-section {
          padding: 41px 24px 24px;
        }
        .SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow {
          width: 100% !important;
        }
      }
      /* Form Styling CSS End */`;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'spz-4003';
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
                if (!document.body.classList.contains('SPZ_4003_V1')) {
                    removeSpecificCookieValue('SPZ_4003_V1', 'SPZ_4003_V1_truecontrol');
                    document.body.classList.add('SPZ_4003_V1');
                    hiddenValue('SPZ_4003_V1', 'SPZ_4003_variant');
                    waitForElm('.SPZ_4003_V1 #mktoForm_1016.mktoForm .mktoFormRow input').then(() => {
                        const template_heroSelector = `section.hero`;
                        const template_position = "beforebegin"
                        const template_formSelector = `form#mktoForm_1016`;
                        const contentSuperHeading = document.querySelector('.SPZ_4003_V1 .hero .hero__eyebrow')?.textContent.trim() || "";
                        const contentInnerHTML = document.querySelector('.SPZ_4003_V1 .hero + .gated__body .column:first-child .column__inner')?.innerHTML.trim() || document.querySelector('.SPZ_4003_V1 .hero ~ .article .content .content__body .block')?.innerHTML.trim() || "";
                        const template_formContent = {
                            customHTMLBefore: `Get the report`,
                            customHTMLAfter: `This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.`,
                        };
                        const template_additionalSection = {
                            socialProofLogos: {
                                socialProofHeading: "Trusted by leading companies",
                                socialProofImages: [
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/4003/container.webp",
                                        imgAlt: "GM",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511105/sailpoint/4003/container_4.svg",
                                        imgAlt: "Hershey",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511103/sailpoint/4003/container_3.svg",
                                        imgAlt: "Paccar",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511102/sailpoint/4003/container_2.svg",
                                        imgAlt: "Philips",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511111/sailpoint/4003/container_7.svg",
                                        imgAlt: "RWE",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/4003/container_1.webp",
                                        imgAlt: "T Mobile",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511109/sailpoint/4003/container_6.svg",
                                        imgAlt: "The Home Depot",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511107/sailpoint/4003/container_5.svg",
                                        imgAlt: "Toyota",
                                    },
                                ]
                            },
                        }

                        function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, additionalSection) {
                            const formTemplate = `<section class="spz-hero">
                  <div class="spz-form-wrap">
                    <div class="content-section">
                      ${contentSuperHeading ? `<div class="content-superheading">${contentSuperHeading}</div>` : ""}
                      <div class="content-heading">2024 Gartner® Market Guide for Identity Governance and Administration</div>
                      ${contentInnerHTML ? `<div class="content-text">${contentInnerHTML}</div>` : ""}
                    </div>
                    <div class="spz-form-section">
                      <div class="form-heading">${formData.customHTMLBefore.replace(/\s/g, "").length !== 0 ? formData.customHTMLBefore : ""}</div>
                      <div class="the-form"></div>
                      <div class="form-footer">${formData.customHTMLAfter.replace(/\s/g, "").length !== 0 ? formData.customHTMLAfter : ""}</div>
                    </div>
                  </div>
                </section>
                ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                  <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                  <div class="social-proof-images">
                    ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                                return `<img src="${item.url}" alt="${item.imgAlt}">`;
                            }).join("") : ""}
                  </div>
                </div>` : ``}
                `;

                            document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
                            let formLoaded = setInterval(() => {
                                if (document.querySelector(template_formSelector)) {
                                    clearInterval(formLoaded)
                                    document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));
                                    document.querySelector(".spz-form-wrap .the-form")?.appendChild(document.querySelector('.mkto-wrap + .disclaimer')?.cloneNode(true));
                                    formModify();
                                }
                            })

                        }
                        addBaseline(template_formContent, template_position, template_formSelector, template_heroSelector, template_additionalSection);

                        function formModify() {
                            // Add class in mktoFormRow using count
                            var form_fields = document.querySelectorAll('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow');
                            for (var i = 0; i < form_fields.length; i++) {
                                var dynamicClass = 'field-' + (i + 1);
                                form_fields[i].classList.add(dynamicClass);
                            }

                            // Change Label Text
                            ['#LblCountry:Country', '#LblState:State', '#LblTitle:Job title', '#LblPhone:Phone number (optional)'].forEach(item => {
                                const [id, text] = item.split(':');
                                waitForElm(`.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                                    label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
                                });
                            });

                            waitForElm('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow label#LblGlobal_Opt_out__c ~ .mktoCheckboxList label').then(label => {
                                label.textContent = "Uncheck to stop receiving SailPoint email communications.";
                            });

                            // Locate the phone field
                            const phoneField = document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm input[name*='Phone']");
                            if (phoneField && phoneField.type !== "hidden") {
                                document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm").classList.add("phone-exists");
                                const phoneFieldRow = phoneField.closest(".mktoFormRow");
                                const targetFieldRow = document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm .field-6");
                                if (phoneFieldRow && targetFieldRow) {
                                    targetFieldRow.after(phoneFieldRow);
                                }
                            }

                            function checkEmail() {
                                const emailField = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm input[name="Email"]');
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                if (emailField) {
                                    if (emailField.value.trim() === '' || !emailRegex.test(emailField.value.trim())) {
                                        if (!emailField.parentElement.querySelector('.customError')) {
                                            emailField.insertAdjacentHTML('afterend', '<div class="mktoError customError"><div class="mktoErrorMsg">valid email required.</div></div>');
                                        }
                                    }
                                }
                            }
                            // On input focus add class on closest parent field class
                            function focusFields() {
                                // Attach events using event delegation
                                const form = document.querySelector('.SPZ_4003_V1 form.mktoForm');
                                let emailFocusCount = 0;
                                form.addEventListener('focus', function (event) {
                                    const el = event.target;
                                    if (el.classList.contains('mktoField')) {
                                        el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                                        checkAllFields();
                                    }
                                    if (el.getAttribute('name') === 'Email' && !document.body.classList.contains('form-expand')) {
                                        emailFocusCount++;
                                        if (emailFocusCount > 2) {
                                            emailFocusCount = 2;
                                        }
                                        if (emailFocusCount === 2) {
                                            el.closest('.mktoFieldWrap').classList.add('emailerror');
                                            checkEmail();
                                        }
                                    }
                                }, true);
                                form.addEventListener('keyup', function (event) {
                                    if (!document.body.classList.contains('form-expand')) {
                                        const el = event.target;
                                        const fieldName = el.getAttribute('name');
                                        if (document.querySelector('input[name="Email"]').value.trim() !== '') {
                                            var newEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                            if (newEmailRegex.test(document.querySelector('input[name="Email"]').value.trim())) {
                                                el.closest('.mktoFieldWrap').classList.remove('emailerror');
                                            } else {
                                                el.closest('.mktoFieldWrap').classList.add('emailerror');
                                            }
                                        }

                                        if (document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm").classList.contains('phone-exists')) {
                                            const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                                            const lastName = document.querySelector('input[name="LastName"]').value.trim();
                                            const emailValue = document.querySelector('input[name="Email"]').value.trim();
                                            const companyValue = document.querySelector('input[name="Company"]').value.trim();
                                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                            if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
                                                if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
                                                    document.body.classList.add('form-expand');
                                                }
                                            }
                                        } else {
                                            const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                                            const lastName = document.querySelector('input[name="LastName"]').value.trim();
                                            const emailValue = document.querySelector('input[name="Email"]').value.trim();
                                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                            if (['FirstName', 'LastName', 'Email'].includes(fieldName)) {
                                                if (firstName && lastName && emailRegex.test(emailValue)) {
                                                    document.body.classList.add('form-expand');
                                                }
                                            }
                                        }
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
                                    const stateField = document.querySelector('.SPZ_4003_V1 form.mktoForm .mktoFieldWrap .mktoField#State');
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

                                const container = document.querySelector('.SPZ_4003_V1 form.mktoForm');
                                if (container) {
                                    observer.observe(container, { childList: true, subtree: true });
                                }
                            }
                            focusFields();
                            function checkAllFields() {
                                const fields = document.querySelectorAll('.SPZ_4003_V1 form.mktoForm .mktoField');
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

                            document.querySelector('select#Country').addEventListener('change', () => {
                                const countryRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-7');
                                const stateRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-8');
                                const stateExists = document.querySelector('select#State');
                                stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full'));

                                const optOutRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-28');
                                document.querySelector('label#LblGlobal_Opt_out__c') ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.") : '';
                            });

                            const form = document.querySelector('form#mktoForm_1016');
                            const button = form.querySelector('button[type="submit"]');
                            const changeButtonText = (text) => {
                                if (button) {
                                    button.textContent = text;
                                }
                            };

                            changeButtonText("Download");

                            form.addEventListener("submit", function (e) {
                                changeButtonText("Please Wait");
                            });

                            form.addEventListener("input", function () {
                                if (form.checkValidity()) {
                                    changeButtonText("Download");
                                } else {
                                    changeButtonText("Download");
                                }
                            });

                            const observer = new MutationObserver(() => {
                                changeButtonText("Download");
                            });
                            observer.observe(button, { childList: true, });

                            MktoForms2.whenReady(function (form) {
                                form.onSuccess(function (values, followUpUrl) {
                                    document.body.classList.add('form-submit');
                                });
                            });
                        }
                    });
                } else {
                    if (document.body.classList.contains('SPZ_4003_V1')) {
                        removeSpecificCookieValue('SPZ_4003_V1', 'SPZ_4003_V1_truecontrol');
                        hiddenValue('SPZ_4003_V1', 'SPZ_4003_variant');
                        setHiddenFieldValue();
                    }
                }
            }
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.SPZ_4003_V1')) {
                document.body.classList.remove("SPZ_4003_V1");
            }
        }, 2000);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldName');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldName', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
            var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1016 input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
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
        "https://www.sailpoint.com/identity-library/identity-governance-administration",
        "https://www.sailpoint.com/identity-library/dora-compliance",
        "https://www.sailpoint.com/identity-library/iga-gartner",
        "https://www.sailpoint.com/identity-library/identity-first-security"
    ];

    window.addEventListener("locationchange", function () {
        const url = getBaseUrl(location.href);
        urlCheck(url);
        if (document.querySelector('.SPZ_7001')) {
            document.body.classList.remove("SPZ_7001");
        }
    });
    let url = getBaseUrl(location.href);
    urlCheck(url);

    function urlCheck(url) {
        if (urls.includes(url)) {
            createTest();
        } else {
            removeTest();
        }
    }

    function getBaseUrl(url) {
        return url.split('?')[0];
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