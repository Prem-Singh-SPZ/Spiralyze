var css = `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.spz_1005 .announcement-banner,
.spz_1005 nav.navigation,
.spz_1005 .page-transition,
.spz_1005 footer .container.grid {
  display: none;
}

.spz_1005 #__next .font-sans>.flex-col {
  position: relative;
}

.spz_1005 .spz-hero {
  position: relative;
  padding: 64px 0 81px;
  margin-bottom: 82px;
  overflow: hidden;
}

.spz_1005 .spz-hero::before {
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

.spz_1005 .spz-hero::after {
  position: absolute;
  content: "";
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1001/frame_1171275822_webp.webp");
  background-size: contain;
  background-repeat: no-repeat;
  width: 528px;
  height: 136px;
  left: -328px;
  bottom: 160px;
}

.spz_1005.form-expand .spz-hero::after {
  bottom: 193px;
}

.spz_1005 .spz-hero .spz-wrapper {
  width: 100%;
  max-width: 1330px;
  padding: 0 20px;
  margin: 0 auto;
  z-index: 99;
  position: relative;
}

.spz_1005 .spz-hero .spz-form-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.spz_1005.form-submit .spz-hero .spz-form-wrap {
  align-items: center;
}

.spz_1005 .spz-hero .spz-form-wrap .content-section {
  width: 49.77%;
  max-width: 642px;
}

.spz_1005 .spz-hero .spz-form-wrap .spz-form-section {
  width: 46.52%;
  max-width: 600px;
}

.spz_1005 .spz-hero .spz-form-wrap .spz-form-section .the-form {
  width: 100%;
  min-height: auto;
}

.spz_1005 .spz-form-wrap .site-logo {
  display: inline-flex;
  flex-wrap: wrap;
  width: auto;
  height: auto;
}

.spz_1005 .spz-form-wrap .site-logo img {
  width: 100%;
  max-width: 150px;
  height: auto;
}

.spz_1005 .spz-form-wrap .content-superheading {
  color: #415364;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 57px 0 13px;
}

.spz_1005 .spz-form-wrap .content-heading {
  color: #0033A1;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
}

.spz_1005 .spz-form-wrap .spz-features-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  position: relative;
}

.spz_1005 .spz-form-wrap .spz-features-wrap .feature-item {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 29px;
  padding-left: 36px;
  position: relative;
}

.spz_1005 .spz-form-wrap .spz-features-wrap .feature-item:last-child {
  margin: 0;
}

.spz_1005 .spz-form-wrap .spz-features-wrap img {
  position: absolute;
  width: 24px;
  height: 24px;
  top: -1px;
  left: 0px;
}

.spz_1005 .spz-form-wrap .spz-features-wrap span {
  color: #415364;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
}

.spz_1005 .spz-form-wrap .spz-features-wrap span b {
  font-weight: 600;
}

.spz_1005 .spz-form-wrap .form-arrow {
  margin: -37px -65px 0 auto;
  width: 176.83px;
  height: 116px;
  object-fit: contain;
}

.spz_1005.form-expand .spz-form-wrap .form-arrow {
  margin: 31px 41px 0 auto;
}

.spz_1005 .spz-hero .spz-form-wrap .spz-form-section {
  border-radius: 24px;
  background: #FFF;
  box-shadow: 2px -1px 55.8px 0px rgba(65, 83, 100, 0.16);
  padding: 25px 40px 39px;
}

.spz_1005 .spz-form-section .form-heading {
  color: #415364;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 23px;
}

.spz_1005.form-submit .spz-form-section .form-heading,
.spz_1005 .contact_us_submit_spz {
  display: none;
}

.spz_1005.form-submit .contact_us_submit_spz {
  display: flex;
  flex-direction: column;
}

.spz_1005 .spz-hero .social-proof-logos {
  margin-top: 57px;
  width: 100%;
  max-width: 1330px;
  padding: 0 20px;
  margin: 32px auto 0;
  z-index: 1;
  position: relative;
}

.spz_1005.form-expand .spz-hero .social-proof-logos {
  margin: 64px auto 0;
}

.spz_1005 .spz-hero .social-proof-logos .social-proof-heading {
  color: #415364;
  text-align: center;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 25px;
}

.spz_1005 .spz-hero .social-proof-logos .social-proof-images {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.spz_1005 .social-proof-logos .social-proof-images img {
  width: auto;
  height: 58px;
  object-fit: contain;
}

.spz_1005 .social-proof-logos .social-proof-images img.repeat-img {
  display: none;
}

.spz_1005 footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 25px 0 21px;
  margin-top: 0;
}

.spz_1005 footer .container.flex {
  border: none;
  width: 100%;
  max-width: 1330px;
  padding: 0 20px;
}

.spz_1005 footer .container.flex p {
  margin-block: 0;
}

@media(min-width: 1601px) {
  .spz_1005 .spz-hero:before {
    right: 0;
    width: 672px;
    height: 480px;
    top: 43px;
  }

  .spz_1005 .spz-hero:after {
    width: 1056px;
    height: 272px;
    left: -693px;
    bottom: 124px !important;
    background-image: url("https://res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1001/illustration_-_2_webp.webp");
  }

  .spz_1005 .spz-hero .social-proof-logos {
    margin: 64px auto 0;
  }
}

@media(max-width: 1399.98px) {
  .spz_1005 .spz-hero:before {
    right: -30%;
  }
}

@media(max-width: 1199.98px) {
  .spz_1005 .spz-hero:before {
    right: -50%;
  }

  .spz_1005 .spz-form-wrap .form-arrow {
    margin: -20px -65px 0 auto;
  }
}

@media(max-width: 1023.98px) {
  .spz_1005 .spz-hero {
    padding: 32px 0 97px;
    margin-bottom: 87px;
  }

  .spz_1005 .spz-hero:before {
    top: 537px;
    right: -138px;
  }

  .spz_1005 .spz-hero:after {
    width: 388.24px;
    height: 100px;
    left: -228px;
    bottom: 210px !important;
  }

  .spz_1005 .spz-hero .spz-wrapper {
    max-width: 640px;
  }

  .spz_1005 .spz-hero .spz-form-wrap {
    flex-direction: column;
  }

  .spz_1005 .spz-hero .spz-form-wrap .content-section,
  .spz_1005 .spz-hero .spz-form-wrap .spz-form-section {
    width: 100%;
    max-width: unset;
  }

  .spz_1005 .spz-form-wrap .content-superheading {
    margin: 41px 0 13px;
  }

  .spz_1005 .spz-form-wrap .form-arrow {
    display: none;
  }

  .spz_1005 .spz-hero .spz-form-wrap .spz-form-section {
    margin-top: 48px;
    min-height: 368px;
  }

  .spz_1005.form-submit .spz-hero .spz-form-wrap .spz-form-section {
    align-items: center;
    display: flex;
  }

  .spz_1005.form-expand .spz-hero .social-proof-logos {
    margin: 65px auto 0;
  }

  .spz_1005 .spz-hero .social-proof-logos .social-proof-heading {
    margin-bottom: 24px;
  }

  .spz_1005 .spz-hero .social-proof-logos {
    max-width: unset;
    padding: 0;
    margin: 64px auto 0;
    position: relative;
  }

  .spz_1005 .spz-hero .social-proof-logos::before,
  .spz_1005 .spz-hero .social-proof-logos::after {
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

  .spz_1005 .spz-hero .social-proof-logos::after {
    left: unset;
    right: 0;
    transform: none;
  }

  .spz_1005 .spz-hero .social-proof-logos .social-proof-images {
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

  .spz_1005 .social-proof-logos .social-proof-images img {
    width: 100%;
    max-width: 120px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .spz_1005 .social-proof-logos .social-proof-images img.repeat-img {
    display: block;
  }

  .spz_1005 footer {
    padding: 15px 0 16px;
  }
}

@media(max-width: 767.98px) {
  .spz_1005 .spz-hero {
    padding: 16px 0 64px;
    margin-bottom: 0;
  }

  .spz_1005 .spz-hero:before {
    width: 336px;
    height: 240px;
    top: 620px;
    right: -70px;
  }

  .spz_1005 .spz-hero:after {
    bottom: 244px !important;
  }

  .spz_1005 .spz-hero .spz-wrapper {
    max-width: unset;
  }

  .spz_1005 .spz-form-wrap .content-heading {
    font-size: 30px;
  }

  .spz_1005 .spz-form-wrap .spz-features-wrap {
    margin-top: 24px;
  }

  .spz_1005 .spz-form-wrap .spz-features-wrap .feature-item {
    margin-bottom: 30px;
    padding-left: 34px;
  }

  .spz_1005 .spz-hero .spz-form-wrap .spz-form-section {
    margin-top: 32px;
    border-radius: 16px;
    padding: 33px 20px 22px;
    border-radius: 16px;
    box-shadow: 0px 8px 40px 0px rgba(65, 83, 100, 0.16);
  }

  .spz_1005 .spz-form-section .form-heading {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .spz_1005 .spz-hero .social-proof-logos {
    margin: 65px auto 0;
  }

  .spz_1005 .spz-hero .social-proof-logos .social-proof-heading {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 23px;
    padding: 0 16px;
  }

  .spz_1005 .spz-hero .social-proof-logos:before,
  .spz_1005 .spz-hero .social-proof-logos:after {
    height: 48px;
  }

  .spz_1005 .spz-hero .social-proof-logos .social-proof-images {
    gap: 0 16px;
  }

  .spz_1005 .social-proof-logos .social-proof-images img {
    max-width: 99.31px;
    height: 48px;
  }

  .spz_1005 footer {
    position: relative;
    padding: 12px 0 16px;
  }

  .spz_1005 footer .container.flex p {
    margin-top: 16px;
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

.spz_1005 .spz-form-section form.mktoForm .mktoOffset,
.spz_1005 .spz-form-section form.mktoForm .mktoClear,
.spz_1005 .spz-form-section form.mktoForm .mktoGutter {
  display: none !important;
}

.spz_1005 .spz-form-section form.mktoForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100% !important;
  font-family: "Poppins", serif !important;
  padding: 0;
}

.spz_1005 .spz-form-section form.mktoForm * {
  font-family: "Poppins", serif;
  padding: 0;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFormRow,
.spz_1005 .spz-form-section form.mktoForm #captcha {
  width: 100%;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.placeholder-row:not(.field-10) {
  display: none;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-2,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-3,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-4,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-5,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-6,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-7,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-8.spz-half,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-9,
.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-10 {
  width: calc(50% - 8px);
}

.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-11,
.spz_1005:not(.form-expand) .spz-form-section form.mktoForm .mktoFormRow.field-6~.mktoFormRow,
.spz_1005:not(.form-expand) .spz-form-section form.mktoForm .mktoCaptchaDisclaimer,
.spz_1005 .spz-form-section form.mktoForm>div:not([class]):not([id]) {
  display: none;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFormCol {
  margin: 0 !important;
  width: 100%;
  min-height: unset;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap {
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel {
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

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel#LblreceivingAdvertisingInformation,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel#LblmandatoryCollectionandUseofPersonalInfo,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel#LbloptionalCollectionandUseofInformation {
  position: relative;
  top: unset;
  left: unset;
  padding: 0;
  font-weight: 400;
  color: #415364;
  font-size: 12px;
  line-height: 1.6;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap>label#LblGlobal_Opt_out__c,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap>label#LblGlobal_Opt_in__c,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap>label#LblcCPAAgeVerification {
  display: none;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel .mktoAsterix {
  display: none !important;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap:hover label.mktoLabel,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap:hover label.mktoLabel .mktoAsterix {
  color: #415364;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.filled:not(.active):not(.error) label.mktoLabel,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.filled:not(.active):not(.error) label.mktoLabel .mktoAsterix {
  color: #415364 !important;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing label.mktoLabel,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.filled label.mktoLabel {
  width: auto !important;
  top: -12px;
  color: #0071CE;
  font-size: 12px;
  font-weight: 600;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing label.mktoLabel .mktoAsterix,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing label.mktoLabel .mktoAsterix {
  color: #0071CE;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.error label.mktoLabel,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.error label.mktoLabel .mktoAsterix {
  color: #E6241E;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoField:not([type=checkbox]) {
  width: 100% !important;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 13px 15px;
  margin: 0 !important;
  border: 1px solid #DAE1E9;
  border-radius: 4px;
  outline: none;
  background: #FFF;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* transition: all .3s ease-in-out; */
  color: #415364 !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: none;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap:not(.active):not(.typing):not(.filled) select.mktoField {
  color: transparent !important;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap select.mktoField {
  padding-right: 37px !important;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap:hover .mktoField:not([type="checkbox"]) {
  border-color: #415364;
}

.spz_1005:not(.form-expand) .spz-form-section form.mktoForm .mktoFieldWrap.emailerror .mktoField:not([type="checkbox"]),
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.error .mktoField:not([type="checkbox"]) {
  border-color: #E6241E;
  box-shadow: none;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap.active.typing .mktoField:not([type="checkbox"]) {
  border-color: #0071CE;
  box-shadow: inset 0 0 0 1px #0071CE;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError_1 {
  position: relative;
  top: unset !important;
  bottom: unset !important;
  left: unset !important;
  right: unset !important;
  margin: 4px 0 0 !important;
  z-index: 1;
  display: inline-block;
  width: 100%;
}

.spz_1005:not(.form-expand) .spz-form-section form.mktoForm .field-4 .mktoFieldWrap .mktoError,
.spz_1005.form-expand .spz-form-section form.mktoForm .field-4 .mktoFieldWrap .mktoError_1.customError,
.spz_1005 .spz-form-section form.mktoForm .field-4 .mktoFieldWrap:not(.emailerror) .mktoError_1.customError {
  display: none !important;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError_1 .mktoErrorMsg {
  background: transparent;
  max-width: unset;
  color: #E6241E;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6;
  position: relative;
  border: none;
  box-shadow: none;
  padding: 0 0 0 16px;
  margin: 0;
  text-shadow: none;
  display: inline-flex;
  flex-wrap: wrap;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorMsg::before,
.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError_1 .mktoErrorMsg::before {
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

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper {
  margin: 0 !important;
  width: 100%;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper::after {
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

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper .select-dropdown {
  display: none;
}

.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .mktoError .mktoErrorArrowWrap {
  display: none !important;
}

.spz_1005 .spz-form-section form.mktoForm .mktoCheckboxList {
  margin-bottom: 0;
  padding: 0;
  width: auto !important;
  display: flex;
}

.spz_1005 .spz-form-section form.mktoForm .mktoCheckboxList input,
.spz_1005 .spz-form-section form.mktoForm input[type="checkbox"] {
  min-width: 16px;
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
}

.spz_1005 .spz-form-section form.mktoForm .mktoCheckboxList label {
  position: relative;
  color: #415364;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  padding-left: 12px;
  padding-right: 0;
  margin: 0;
  cursor: pointer;
  display: inline-flex;
  width: calc(100% - 16px);
}

.spz_1005 .spz-form-section form.mktoForm .mktoButtonRow {
  width: 100%;
}

.spz_1005 .spz-form-section form.mktoForm .mktoButtonRow .mktoButtonWrap {
  margin: 0 !important;
}

.spz_1005 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton {
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
  padding: 11px 11px 10px;
  transition: all 0.5s ease-in-out;
}

.spz_1005 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton:hover {
  background: #005DAA;
}

.spz_1005 .spz-form-section form.mktoForm .mktoCaptchaDisclaimer,
.spz_1005 .spz-form-section .disclaimer {
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

.spz_1005 .spz-form-section form.mktoForm .mktoCaptchaDisclaimer {
  margin-bottom: 7px;
}

.spz_1005 .spz-form-section .disclaimer {
  max-width: unset;
  font-size: 14px;
  margin-top: 20px;
}

.spz_1005.form-expand .spz-form-section .disclaimer {
  margin-top: 8px;
}

.spz_1005.form-submit .spz-form-section .disclaimer {
  display: none;
}

.spz_1005 .spz-form-section .disclaimer a {
  color: #0071CE;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  text-decoration: none;
  }
  
.spz_1005 .spz-form-section .disclaimer a:hover {
    text-decoration-line: underline;
    text-underline-offset: 1px;
}

.spz_1005 .spz-form-section .disclaimer a:active,
.spz_1005 .spz-form-section .disclaimer a:focus-visible {
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  border: 1.5px solid #0071CE;
  background: rgba(0, 113, 206, 0.05);
  padding: 0 4px;
}

@media(max-width: 1149.98px) and (min-width: 1024px) {
  .spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel {
    font-size: 12px;
  }

  .spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap .select-wrapper:after {
    width: 12px;
    top: 21px;
    right: 11px;
  }
}

@media(max-width: 1023.98px) {
  .spz_1005 .spz-form-section form.mktoForm .mktoButtonRow .mktoButton {
    padding: 11px 11px 9px;
  }
}

@media(max-width: 767.98px) {
  .spz_1005 .spz-form-section form.mktoForm .mktoFormRow {
    width: 100% !important;
  }

  .spz_1005 .spz-form-section form.mktoForm .mktoCheckboxList input,
  .spz_1005 .spz-form-section form.mktoForm input[type="checkbox"] {
    min-width: 20px;
    width: 20px;
    height: 20px;
    /* top: 0; */
  }

  .spz_1005 .spz-form-section form.mktoForm .mktoCheckboxList label {
    width: calc(100% - 20px);
    padding-left: 8px;
  }

  .spz_1005 .spz-form-section .disclaimer {
    margin-top: 8px;
  }

  .spz_1005 .spz-form-section form.mktoForm .mktoCaptchaDisclaimer {
    max-width: unset;
    margin-bottom: 7px;
  }

  .spz_1005 .spz-form-section form.mktoForm .mktoCaptchaDisclaimer a {
    display: inline-block;
    padding: 0;
  }
}

/* Form Styling CSS End */`;

head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

(function () {
  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_1005')) {
          body.classList.add('spz_1005');

          const heroSelector = `footer`;
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
              socialProofHeading: "Trusted by 50% of the Fortune 500 and 25% of the Forbes Global 2000",
              socialProofImages: [
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742240097/sailpoint/3002/logo_01.svg", imgAlt: "AES" },
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_01.svg", imgAlt: "GM" },
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_02.svg", imgAlt: "Hershey" },
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_03.svg", imgAlt: "Paccar" },
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_07.svg", imgAlt: "The Home Depot" },
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-6.svg", imgAlt: "Legal & General" },
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1737472368/sailpoint/1005/salvation_army-logo.svg", imgAlt: "The Salvation Army" },
                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-8.svg", imgAlt: "Vodafone" },
              ]
            },
          }

          function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
            const formTemplate = `<section class="spz-hero">
              <div class="spz-wrapper">
                <div class="spz-form-wrap">
                  <div class="content-section">
                    ${formData.siteLogo.length !== 0 ? `<a class="site-logo" data-sentry-element="NextLink" data-sentry-source-file="MainLargeNavigation.tsx" href="/">
                      <img src="${formData.siteLogo}" alt="${formData.siteLogoAlt}" />
                    </a>` : ""}
                    ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-superheading">${formData.contentSuperHeading}</div>` : ""}
                    ${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${formData.contentHeading}</div>` : ""}
                    <div class="spz-features-wrap">
                      ${formData.features.length > 0 ? formData.features.map((item) => {
              return `<div class="feature-item">
                          <img src="${item.checkmarkImage}" alt="checkmark" />
                          <span>${item.featureItemContent}</span>
                        </div>`;
            }).join("") : ""}
                    </div>
                    ${formData.formArrow.length !== 0 ? `<img src="${formData.formArrow}" class="form-arrow" alt="Arrow" />` : ""}
                  </div>
                  <div class="spz-form-section">
                    ${formData.formHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.formHeading}</div>` : ""}
                    <div class="the-form">
                        <div class="contact_us_submit_spz">
                            <h3 class="text-center">Thank you!</h3>
                            <h4 class="text-center">A representative will reach out to you shortly.</h4>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                <div class="social-proof-images">
                  ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
              return `<img src="${item.url}" alt="${item.imgAlt}">`;
            }).join("") + additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
              return `<img src="${item.url}" class="repeat-img" alt="${item.imgAlt}">`;
            }).join("") : ""}
                </div>
              </div>` : ``}
            </section>`;
            waitForElm(heroSelector).then(() => {
              document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
            });
            let formLoaded = setInterval(() => {
              if (document.querySelector(".spz_1005 .spz-form-wrap .the-form") && document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                clearInterval(formLoaded)
                document.querySelector(".spz_1005 .spz-form-wrap .the-form").appendChild(document.querySelector(formSelector));
                waitForElm('.spz_1005 .mkto-wrap + .disclaimer').then(() => {
                  document.querySelector(".spz_1005 .spz-form-wrap .the-form").insertAdjacentElement('afterend', document.querySelector('.spz_1005 .mkto-wrap + .disclaimer'));
                });
                formModify();

                MktoForms2.whenReady(function (form) {
                  form.onSuccess(function (values, followUpUrl) {
                    document.body.classList.add('form-submit');
                  });
                });

                waitForElm('.mkto-wrap.w-full #confirm #contact_us_submit').then(() => {
                  document.body.classList.add('form-submit');
                });
              }
            });
          }

          let spzHeroInterval = setInterval(() => {
            if (document.querySelectorAll('.spz-hero').length == 0 && window.location.pathname === '/demo') {
              addBaseline(heroContent, position, formSelector, heroSelector, additionalSection);
              // removeSpecificCookieValue('spz_1005', 'SPZ_1005_truecontrol');
              hiddenValue('SPZ_1005', 'SPZ_1005_variant');
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
          }, 10000);


          function formModify() {
            var form_fields = document.querySelectorAll('.spz_1005 .spz-form-section form.mktoForm .mktoFormRow');
            for (var i = 0; i < form_fields.length; i++) {
              var dynamicClass = 'field-' + (i + 1);
              form_fields[i].classList.add(dynamicClass);
            }

            ['#LblCountry:Country', '#LblState:State', '#LblNumber_of_Employees__c:Number of employees'].forEach(item => {
              const [id, text] = item.split(':');
              waitForElm(`.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
              });
            });

            var company_field = document.querySelector('.spz_1005 form.mktoForm .field-6');
            var lastName_field = document.querySelector('.spz_1005 form.mktoForm .field-4');
            // company_field.after(lastName_field);

            var phone_field = document.querySelector('.spz_1005 form.mktoForm .field-5');
            var job_field = document.querySelector('.spz_1005 form.mktoForm .field-7');
            job_field.after(phone_field);

            var employees_field = document.querySelector('.spz_1005 form.mktoForm .field-8');
            var state_field = document.querySelector('.spz_1005 form.mktoForm .field-10');
            state_field.after(employees_field);


            waitForElm('.spz_1005 form.mktoForm .disclaimer').then((elm) => {
              var disclaimer_field = document.querySelector('.spz_1005 form.mktoForm .mktoCaptchaDisclaimer');
              const disclaimer = document.querySelector('.spz_1005 form.mktoForm .disclaimer');
              var button = document.querySelector('.spz_1005 form.mktoForm .mktoButtonRow');
              button.before(disclaimer_field);
              button.after(disclaimer);
            });

            document.querySelector('.spz_1005 form.mktoForm .field-11 .mktoField').value = 'Get live demo';

            waitForElm(`.spz_1005 .spz-form-section form.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
              setTimeout(() => {
                document.querySelectorAll(`.spz_1005 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                  if (el && el.value && (el.value != '')) {
                    el.closest('.mktoFieldWrap').classList.add('filled');
                  }
                });
              }, 1000);
            });

            function focusFields() {
              const form = document.querySelector('.spz_1005 form.mktoForm');
              let emailFocusCount = 0;
              form.addEventListener('focus', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                  el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                  checkAllFields();
                }
                var email_field = document.querySelector('.spz_1005 .spz-form-section form.mktoForm input[name="Email"]');
                if (email_field.value.trim() === '') {
                  email_field.closest('.mktoFieldWrap').classList.remove('emailerror');
                }
                if (el.getAttribute('name') === 'Email' && !document.body.classList.contains('form-expand')) {
                  var checkerrorcnt = 0;
                  var checkerrror = setInterval(function () {
                    if (el.closest('.mktoFieldWrap') !== null) {
                      clearInterval(checkerrror);
                      if (el.closest('.mktoFieldWrap').querySelector('.mktoError:not(.customError)') !== null && el.closest('.mktoFieldWrap').querySelector('.mktoError:not(.customError)').style.display != 'none') {
                        el.closest('.mktoFieldWrap').classList.add('emailerror');
                        checkEmail();
                      }
                    }
                    checkerrorcnt++;
                  });
                  // emailFocusCount++;
                  // if(emailFocusCount > 2){
                  //   emailFocusCount = 2;
                  // }
                  // if(emailFocusCount === 2){
                  //   el.closest('.mktoFieldWrap').classList.add('emailerror');
                  //   checkEmail();
                  // }
                }
              }, true);

              form.addEventListener('keyup', function (event) {
                if (!document.body.classList.contains('form-expand')) {
                  const el = event.target;
                  const fieldName = el.getAttribute('name');

                  if (fieldName === 'Email') {
                    const newemailValue = el.value.trim();
                    const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                    if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
                      el.closest('.mktoFieldWrap').classList.add('emailerror');
                    } else {
                      el.closest('.mktoFieldWrap').classList.remove('emailerror');
                    }
                  }

                  const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                  const lastName = document.querySelector('input[name="LastName"]').value.trim();
                  const emailValue = document.querySelector('input[name="Email"]').value.trim();
                  const companyValue = document.querySelector('input[name="Company"]').value.trim();
                  const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                  if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
                    if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
                      document.body.classList.add('form-expand');
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

                if (!document.body.classList.contains('form-expand')) {
                  const el = event.target;
                  const fieldName = el.getAttribute('name');

                  if (fieldName === 'Email') {
                    const newemailValue = el.value.trim();
                    const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                    if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
                      el.closest('.mktoFieldWrap').classList.add('emailerror');
                      checkEmail();
                    } else {
                      el.closest('.mktoFieldWrap').classList.remove('emailerror');
                    }
                  }

                  const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                  const lastName = document.querySelector('input[name="LastName"]').value.trim();
                  const emailValue = document.querySelector('input[name="Email"]').value.trim();
                  const companyValue = document.querySelector('input[name="Company"]').value.trim();
                  const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                  if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
                    if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
                      document.body.classList.add('form-expand');
                    }
                  }
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

              function reapplyStateFieldListeners() {
                const stateField = document.querySelector('.spz_1005 form.mktoForm .mktoFieldWrap .mktoField#State');
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

              const observer = new MutationObserver(() => {
                reapplyStateFieldListeners();
              });
              const container = document.querySelector('.spz_1005 form.mktoForm');
              if (container) {
                observer.observe(container, { childList: true, subtree: true });
              }
            }

            focusFields();

            function checkAllFields() {
              const fields = document.querySelectorAll('.spz_1005 form.mktoForm .mktoField');
              const timeBuffer = setInterval(() => {
                fields.forEach(field => {
                  const fieldWrap = field.closest('.mktoFieldWrap');
                  if (fieldWrap) {
                    const errorElement = fieldWrap.querySelector('.mktoError:not(.customError)');
                    if (errorElement && errorElement.style.display !== 'none') {
                      fieldWrap.classList.add('error');
                    } else {
                      fieldWrap.classList.remove('error');
                    }

                    if (field.value && field.value.trim() !== '') {
                      fieldWrap.classList.add('filled');
                    } else {
                      fieldWrap.classList.remove('filled');
                    }
                  }
                });
              }, 200);

              setTimeout(() => {
                clearInterval(timeBuffer);
              }, 1000);
            }

            document.querySelector('select#Country').addEventListener('change', () => {
              const stateRow = document.querySelector('.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-10');
              const optOutRow = document.querySelector('.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-31');
              const employeeNumberRow = document.querySelector('.spz_1005 .spz-form-section form.mktoForm .mktoFormRow.field-8');

              const stateExists = document.querySelector('select#State');
              stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), employeeNumberRow.classList.remove('spz-half')) : (stateRow.classList.add('hidden'), employeeNumberRow.classList.add('spz-half'));
            });

            MktoForms2.whenReady(function (form) {
              form.onSuccess(function (values, followUpUrl) {
                document.body.classList.add('form-submit');
              });
            });

          }
        } else {
          if (body.classList.contains('spz_1005')) {
            // removeSpecificCookieValue('spz_1005', 'SPZ_1005_truecontrol');
            hiddenValue('SPZ_1005', 'SPZ_1005_variant');
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
      if (document.querySelector('.spz_1005')) {
        document.body.classList.remove("spz_1005");
      }
      if (document.querySelector('.form-submit')) {
        document.body.classList.remove("form-submit");
      }
    }, 1000);
  }

  // function removeSpecificCookieValue(targetName, targetValue) {
  //   ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
  //     var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
  //     setCookie(key, values || '', 1);
  //   });
  // }

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

  //click event listener
  document.addEventListener('click', function (e) {
    if (e.target.closest('.mktoForm .mktoButton')) {
      waitForElm('.spz_1005 #mktoForm_1018.mktoForm .mktoError').then(function (elm) {
        if (elm.parentNode.querySelector('#ValidMsgEmail')) {
          const targetNode = elm.parentNode;
          const config = { attributes: true, childList: true, subtree: true };
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
            if (document.querySelector('.spz_1005 #mktoForm_1018.mktoForm .mktoError #ValidMsgEmail') !== null) {
              document.querySelector('.spz_1005 #mktoForm_1018.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
            }
            counterA++;
            if (counterA >= 10) {
              clearInterval(intervalIdA);
            }
          }, 500);
        }
      });

      if (!document.body.classList.contains('form-expand')) {
        const el = document.querySelector('input[name="Email"]');
        const fieldName = el.getAttribute('name');
        if (fieldName === 'Email') {
          const newemailValue = el.value.trim();
          const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
          if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
            el.closest('.mktoFieldWrap').classList.add('emailerror');
            checkEmail();
          } else {
            el.closest('.mktoFieldWrap').classList.remove('emailerror');
          }
        }

        const firstName = document.querySelector('input[name="FirstName"]').value.trim();
        const lastName = document.querySelector('input[name="LastName"]').value.trim();
        const emailValue = document.querySelector('input[name="Email"]').value.trim();
        const companyValue = document.querySelector('input[name="Company"]').value.trim();
        const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
        if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
          if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
            document.body.classList.add('form-expand');
          }
        }
      }

      //inject current time and date in EST timezone into .intellimize2 hidden field
      var d = new Date();
      var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
      var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
      if (int2)
        int2.value = n;
    }
  });

  function checkEmail() {
    const emailField = document.querySelector('.spz_1005 .spz-form-section form.mktoForm input[name="Email"]');
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    if (emailField) {
      if (emailField.value.trim() === '' || !emailRegex.test(emailField.value.trim())) {
        if (!emailField.parentElement.querySelector('.customError')) {
          if (emailField.closest('.mktoFieldWrap').querySelectorAll('.customError').length == 0) {
            emailField.insertAdjacentHTML('afterend', '<div class="mktoError_1 customError"><div class="mktoErrorMsg">Valid email required.</div></div>');
          }
        }
      }
    }
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