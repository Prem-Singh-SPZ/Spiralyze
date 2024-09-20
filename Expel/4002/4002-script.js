var css = `.spz_4002 header#masthead,
.spz_4002 #startchange,
.spz_4002 section#hero-section,
.spz_4002 footer#expel-footer .container-custom > *:not(.links-container) {
  display: none !important;
}
/* Hero Form Baseline CSS Start Here */
.spz_4002 .spz-hero-section {
  background-color: #031263;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/4002/desktop.webp");
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 64px 0 73px;
}
.spz_4002 .spz-hero-section .spz-container {
  width: 100%;
  max-width: 1206px;
  padding: 0 18px;
  margin: 0 auto;
}
.spz_4002 .spz-hero-section .spz-form-baseline {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}
.spz_4002 .spz-form-baseline .form-block {
  width: 50.77%;
  max-width: 594px;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 40px 41px;
  display: inline-flex;
  flex-wrap: wrap;
  flex-flow: column;
  align-items: center;
}
.spz_4002 .spz-form-baseline.current_step_3 .form-block,
.spz_4002 .spz-form-baseline.current_step_4 .form-block {
  padding: 40px 36px;
}
.spz_4002 .spz-form-baseline .progress-bar {
  width: 172px;
  height: 4px;
  display: inline-flex;
  position: relative;
  margin: 0 auto;
  background: #EBEBEB;
  border-radius: 44px;
}
.spz_4002 .spz-form-baseline .progress-bar::before {
  position: absolute;
  content: "";
  width: 43px;
  height: 100%;
  background: #00A85D;
  border-radius: 44px 0 0 44px;
  transition: all 0.6s ease-in-out;
}
.spz_4002 .spz-form-baseline.current_step_2 .progress-bar::before {
  width: 86px;
}
.spz_4002 .spz-form-baseline.current_step_3 .progress-bar::before {
  width: 129px;
}
.spz_4002 .spz-form-baseline.current_step_4 .progress-bar::before {
  width: 100%;
  border-radius: 44px;
}
.spz_4002 .spz-form-baseline .Questions-block {
  width: 100%;
}
.spz_4002 .spz-form-baseline .Questions-block .step-header {
  margin: 12px auto;
  text-align: center;
}
.spz_4002 .spz-form-baseline .Questions-block .step_2 .step-header {
  margin-bottom: 8px;
}
.spz_4002 .spz-form-baseline .Questions-block .step_3 .step-header {
  margin-bottom: 18px;
}
.spz_4002 .spz-form-baseline .Questions-block .step-header .step-number {
  color: #00A85D;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}
.spz_4002 .spz-form-baseline .Questions-block .step-header .step-heading {
  color: #131416;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  margin: 4px 0 0;
}
.spz_4002 .spz-form-baseline .Questions-block .step-header .step-question {
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 4px 0 0;
}
.spz_4002 .spz-form-baseline .Questions-block .step-content {
  position: relative;
}
.spz_4002 .spz-form-baseline .Questions-block .step-error {
  position: absolute;
  left: 0;
  bottom: -48px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 16px 8px 8px;
  border-radius: 50px;
  background: linear-gradient(0deg, #FCE8E6 0%, #FCE8E6 100%), var(--Colors-Base-White, #FFF);
  box-shadow: 0px 2px 0px 0px #E51B00, 0px 9px 7px 0px rgba(0, 0, 0, 0.25);
  color: #E51B00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  transition: all 0.4s ease-in-out;
}
.spz_4002 .spz-form-baseline .Questions-block .step-content:not(.show-error) .step-error {
  pointer-events: none;
  opacity: 0;
}
.spz_4002 .spz-form-baseline .Questions-block .step-error img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 8px;
}
.spz_4002 .spz-form-baseline .Questions-block .step-error::before {
  position: absolute;
  content: "";
  width: 25px;
  height: 12px;
  top: -12px;
  left: 64px;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1721728940/expel/4002/chevron.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box .option-item {
  width: calc(50% - 4px);
  min-height: 145px;
  margin: 8px 0 0;
  position: relative;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box .radio-option-item {
  width: calc(33.33% - 8px);
  height: 100px;
  margin: 12px 0 0;
  position: relative;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box .option-content {
  background: rgba(23, 98, 230, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(23, 98, 230, 0.36);
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box div[class*="option-item"]:hover .option-content {
  background: rgba(23, 98, 230, 0.12);
  border-color: rgba(23, 98, 230, 0.41)
}
.spz_4002 .spz-form-baseline .Questions-block .step-content.error .option-box .option-content {
  background: rgba(229, 27, 0, 0.04);
  border-color: rgba(229, 27, 0, 1);
}
.spz_4002 .spz-form-baseline .Questions-block .option-box div[class*="option-item"] input:checked + .option-content {
  background: rgba(3, 18, 99, 1);
  border: 1px solid rgba(23, 98, 230, 0.36);
}
.spz_4002 .spz-form-baseline .Questions-block .checkbox,
.spz_4002 .spz-form-baseline .Questions-block .radio {
  position: absolute;
  top: 7px;
  left: 7px;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border: 1px solid #1762E6;
  border-radius: 4px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.spz_4002 .spz-form-baseline .Questions-block .radio {
  border-radius: 32px;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box input:checked + .option-content .checkbox {
  border-color: #FFF;
  background: #FFFFFF;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box input:checked + .option-content .radio {
  border-color: #FFF;
}
.spz_4002 .spz-form-baseline .Questions-block .step-content.error .checkbox,
.spz_4002 .spz-form-baseline .Questions-block .step-content.error .radio {
  border-color: rgba(229, 27, 0, 1);
  background: #FFF;
}
.spz_4002 .spz-form-baseline .Questions-block .checkbox svg {
  opacity: 0;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box .option-item input:checked + .option-content .checkbox svg {
  opacity: 1 ;
}
.spz_4002 .spz-form-baseline .Questions-block .radio .radio-dot {
  width: 8px;
  height: 8px;
  display: inline-flex;
  background: #031263;
  border-radius: 15px;
  opacity: 0;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box .radio-option-item input:checked + .option-content .radio .radio-dot {
  opacity: 1;
}
.spz_4002 .spz-form-baseline .Questions-block .option-icon {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box div[class*="option-item"] input:checked + .option-content .option-icon svg path {
  stroke: #031263;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box div[class*="option-item"]:last-child input:checked + .option-content .option-icon svg path {
  stroke-width: 1;
}
.spz_4002 .spz-form-baseline .Questions-block .option-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.spz_4002 .spz-form-baseline .Questions-block .option-icon .white-icon,
.spz_4002 .spz-form-baseline .Questions-block .option-box .option-item input:checked + .option-content .blue-icon {
  display: none;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box .option-item input:checked + .option-content .white-icon {
  display: block;
}
.spz_4002 .spz-form-baseline .Questions-block .Option-text {
  color: #031263;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  min-height: 48px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.spz_4002 .spz-form-baseline .Questions-block .step_2 .Option-text {
  margin: 0;
}
.spz_4002 .spz-form-baseline .Questions-block .option-box div[class*="option-item"] input:checked + .option-content .Option-text {
  color: #FFF;
}
.spz_4002 .spz-form-baseline .Questions-block .step-button {
  width: 100%;
  height: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #1762E6;
  border-radius: 72px;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 20px auto 16px;
  transition: all 0.3s ease-in-out;
}
.spz_4002 .spz-form-baseline .Questions-block .step-button:hover {
  background: #0E4C8A;
}
.spz_4002 .spz-form-baseline .Questions-block .step-button img {
  margin-left: 8px;
}
.spz_4002 .spz-form-baseline .form-footer {
  color: #747474;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  max-width: 70%;
  margin: 0 auto;
}
.spz_4002 .spz-form-baseline .form-footer a {
  color: #131416;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: all 0.3s ease-in-out;
}
.spz_4002 .spz-form-baseline .form-footer a:hover {
  color: #0E4C8A;
}

/* Form CSS Start Here */
.spz_4002 .spz-form-baseline form.mktoForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  width: 100% !important;
}
/* .spz_4002 .spz-form-baseline form.mktoForm .field-5 ~ .mktoFormCol, */
.spz_4002 .spz-form-baseline form.mktoForm .mktoClear,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoOffset,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoLabel .mktoAsterix {
  display: none !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol {
  width: calc(50% - 6px) !important;
  margin-bottom: 12px !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-3:has(+ .mktoFormCol[style*="display: none;"]) ~ .mktoFormCol.field-7,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-6,
.spz_4002 .spz-form-baseline.current_step_3 form.mktoForm .mktoFormCol.field-8,
.spz_4002 .spz-form-baseline.current_step_3 form.mktoForm .mktoFormCol.field-9,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-10 {
  display: none;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-9 {
  margin-bottom: 18px !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.width_full,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-1,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-8,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-9 {
  width: 100% !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap {
  position: relative;
  width: 100% !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoHtmlText {
  width: auto !important;
  color: #747474 !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 22px;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoHtmlText a {
  color: #131416;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-decoration-line: underline;
  text-underline-offset: 3px;
  padding: 0;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoHtmlText a:hover {
  color: #0E4C8A;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoLabel {
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
  top: 14px;
  left: 10px;
  transition: all 0.3s ease-in-out;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.filled .mktoLabel,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.active.typing .mktoLabel {
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 22px !important;
  top: -11.5px;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.filled .mktoLabel {
  color: #000000 !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.active.typing .mktoLabel {
  color: #1762e6 !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.error.filled .mktoLabel,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.error.active.typing .mktoLabel {
  color: #e51b00 !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField {
  width: 100% !important;
  height: 52px;
  border: 1px solid #b4b3b9 !important;
  border-radius: 12px !important;
  outline: none;
  background-color: transparent;
  box-shadow: none !important;
  padding: 13px 15px !important;
  margin: 0 !important;
  color: #000 !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 24px !important;
  cursor: pointer;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField[type="checkbox"] {
  width: 100%;
  height: 100%;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill:hover,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill:focus,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 52px #fff inset !important;
  -webkit-text-fill-color: #000 !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-6 .mktoFieldWrap::after,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-7 .mktoFieldWrap::after {
  position: absolute;
  content: "";
  top: 20px;
  right: 20px;
  width: 12px;
  height: 12px;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1717757061/expel/2003/dropdown_icon.svg");
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap select.mktoField {
  padding-right: 37px !important;
  appearance: none !important;
  background-image: none;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap textarea.mktoField {
  height: 91px;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.filled .mktoField {
  border-color: #747474 !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.active.typing .mktoField {
  border-color: #1762e6 !important;
  caret-color: #1762e6;
}
body.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.error .mktoField,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap.error.active.typing .mktoField {
  border-color: #e51b00 !important;
  caret-color: #e51b00;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError {
  position: relative;
  right: initial !important;
  bottom: initial !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError .mktoErrorArrowWrap {
  display: none;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError .mktoErrorMsg {
  max-width: unset;
  background: transparent;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1717661831/expel/2003/frame_1.svg");
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: 0 7px;
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
  display: flex;
  flex-wrap: wrap;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoError #ValidMsgEmail.mktoErrorMsg span.mktoErrorDetail {
  padding-left: 3px;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_27626_0 Privacy_Compliance_Explicit_Opt_In__c"] .mktoLabel {
  display: none;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoCheckboxList {
  width: max-content !important;
  padding: 0;
  position: relative;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoCheckboxList input {
  position: absolute;
  opacity: 0;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoCheckboxList label {
  margin: 0;
  padding-left: 28px;
  color: #747474 !important;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 22px !important;
  position: relative;
  cursor: pointer;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoCheckboxList label::before {
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
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoCheckboxList input:checked + label::before {
  background: #1762e6;
  border-color: #1762e6;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoCheckboxList label::after {
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
.spz_4002 .spz-form-baseline form.mktoForm .comment-toggler {
  display: inline-block;
  color: #1762e6;
  font-family: proxima-nova, Arial, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
}
.spz_4002 .spz-form-baseline form.mktoForm .comment-toggler:hover {
  color: #0e4c8a;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-9 .comment-toggler.show-field,
.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-9 .comment-toggler:not(.show-field) + .mktoFieldWrap {
  display: none;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoButtonRow {
  width: 100%;
  margin: 6px auto 18px;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoButtonRow .mktoButtonWrap {
  display: block;
  width: auto;
  height: auto;
  margin: 0 !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoButtonRow .mktoButton {
  width: 100%;
  height: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 72px;
  background: #1762e6;
  background-image: none !important;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding: 0 !important;
  margin: 0 !important;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoButtonRow .mktoButton:hover {
  background: #0e4c8a;
}
.spz_4002 .spz-form-baseline form.mktoForm .mktoCaptchaDisclaimer {
  display: none;
}
.spz_4002 .mktoForm .field-9 .mktoHtmlText {
  width: 70% !important;
  margin: 0 auto !important;
  color: #747474 !important;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 22px;
}
.spz_4002 .mktoForm .field-9 .mktoHtmlText {
  width: 100% !important;
  text-align: left;
}
.spz_4002 .mktoForm .field-9 .mktoHtmlText a {
  color: #131416;
  text-decoration: underline;
  text-underline-offset: 3px;
  padding: 0;
}
.spz_4002 .mktoForm .field-9 .mktoHtmlText a:hover {
  color: #0e4c8a;
}
/* Form CSS End Here */

.spz_4002 .spz-form-baseline .content-block {
  width: 43.76%;
  max-width: 512px;
}
.spz_4002 .spz-form-baseline .content-block .site-logo {
  display: inline-flex;
}
.spz_4002 .spz-form-baseline .content-block .hero-heading {
  color: #FFF;
  font-size: 52px !important;
  font-style: normal;
  font-weight: 800;
  line-height: 1.1 !important;
  margin: 25px 0 32px 0;
}
.spz_4002 .spz-form-baseline .content-block .highlight-point {
  padding: 0;
  margin: 0;
  list-style: none;
}
.spz_4002 .spz-form-baseline .highlight-point .list-item,
.spz_4002 .spz-form-baseline .highlight-point .list-item span {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 24px 0 0 0;
  padding-left: 32px;
  position: relative;
}
.spz_4002 .spz-form-baseline .content-block .highlight-point .list-item::before {
  position: absolute;
  content: "";
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1720171777/expel/4002/checkcircle.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
}
.spz_4002 .spz-form-baseline .highlight-point .list-item span {
  margin: 0;
  padding: 0;
  font-weight: 700;
}
/* Hero Form Baseline CSS End Here */

/* Hero Client Logo CSS Start Here */
.spz_4002 .spz-hero-section .hero-client-logos {
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.spz_4002 .spz-hero-section .hero-client-logos .client-logo {
  width: auto;
  height: 35px;
  object-fit: contain;
}
/* Hero Client Logo CSS End Here */

/* Icon Box Section CSS Start Here */
.spz_4002 .icon-boxes {
  padding: 79px 0 78px 0;
  background: #F6F6F6;
}
.spz_4002 .icon-boxes .heading-content {
  margin-bottom: 47px;
}
.spz_4002 .icon-boxes .heading-content h2 {
  color: #031263;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 56px;
  margin-bottom: 17px !important;
}
.spz_4002 .icon-boxes .heading-content .section-subhead {
  color: #031263;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  max-width: 75%;
  margin: 0 auto !important;
}
.spz_4002 .icon-boxes .boxes{display: none;}
.spz_4002 .icon-boxes .spz-boxes {
  gap: 0;
  justify-content: space-between;
  display: flex;
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box {
  flex: unset;
  display: flex;
  flex-flow: column;
  width: calc(33.33% - 16px);
  background: #FFF;
  border: 1px solid #FFF !important;
  border-radius: 16px;
  padding: 23px 24px !important;
  align-items: center;
  transition: all 0.3s ease-in-out;
	cursor: pointer;
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box:hover {
  border: 1px solid #1762E6 !important;
  background: rgba(23, 98, 230, 0.1);
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box .spz-icon {
  width: 60px;
  height: 60px;
  background: #031263;
  border-radius: 100px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: all 0.3s ease-in-out;
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box:hover .spz-icon {
  background: #1762E6;
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box .spz-icon .icons {display: none;}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box .spz-icon .spz-icon {
  height: auto;
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box a {
  color: #031263;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box:hover a {
  color: #1762E6;
}
.spz_4002 .icon-boxes .spz-boxes .spz-icon-box a span {
  font-weight: 800 !important;
}
/* Icon Box Section CSS End Here */

/* Footer CSS Start Here */
.spz_4002 footer#expel-footer {
  border: none;
  padding: 22px 0 24px;
  background: #fff;
}
.spz_4002 footer#expel-footer .links-container {
  flex-flow: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  max-width: 1170px;
  margin: 0 auto;
}
.spz_4002 footer#expel-footer .links-container .col {
  width: auto;
  max-width: unset;
}
.spz_4002 footer#expel-footer .links-container .rights p {
  color: #031263;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding-top: 1px;
}
.spz_4002 footer#expel-footer .links-container .links span {
  display: none;
}
.spz_4002 footer#expel-footer .links-container .links p {
  margin: 0 -16px;
}
.spz_4002 footer#expel-footer .links-container .links a {
  color: #031263;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin: 0 14px;
  text-decoration: none;
}
.spz_4002 footer#expel-footer .links-container .links a:hover {
  color: #0e4c8a;
}
/* Footer CSS End Here */

@media(min-width: 1601px) {
  .spz_4002 .spz-hero-section {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/4002/4k.webp");
  }
}
@media(max-width: 1023.98px) {
  .spz_4002 .spz-hero-section {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/4002/tablet.webp");
  }
  .spz_4002 .spz-hero-section .spz-container {
    padding: 0 38px;
  }
  .spz_4002 .spz-hero-section .spz-form-baseline {
    flex-flow: column-reverse;
  }
  .spz_4002 .spz-form-baseline .content-block,
  .spz_4002 .spz-form-baseline .form-block {
    width: 100%;
    max-width: unset;
  }
  .spz_4002 .spz-form-baseline .content-block .hero-heading {
    margin: 25px 0 8px 0;
  }
  .spz_4002 .spz-form-baseline .form-block {
    margin-top: 48px;
  }
  .spz_4002 .spz-form-baseline .form-footer {
    max-width: 58%;
  }
  .spz_4002 .icon-boxes .heading-content h2 {
    font-size: 32px;
    line-height: 1.25;
  }
  .spz_4002 .icon-boxes .heading-content .section-subhead {
    font-size: 16px;
    line-height: 1.5;
    max-width: 65%;
  }
  .spz_4002 .icon-boxes {
    padding: 79px 0 81px 0;
  }
  .spz_4002 .icon-boxes .spz-boxes {
    justify-content: space-between;
    flex-flow: column;
  }
  .spz_4002 .icon-boxes .heading-content {
    margin-bottom: 8px;
  }
  .spz_4002 .icon-boxes .spz-boxes .spz-icon-box {
    width: 100%;
    max-width: 440px;
    margin: 24px auto 0;
    padding: 23px 24px 22px !important;
  }
  .spz_4002 footer#expel-footer .links-container {
    flex-flow: column-reverse;
  }
  .spz_4002 footer#expel-footer .links-container .rights p {
    margin-bottom: 10px;
  }
  .spz_4002 .spz-form-baseline form.mktoForm .mktoButtonRow {
    margin: 6px auto 19px;
  }
  .spz_4002 .spz-hero-section .hero-client-logos .img-wrapper:last-child {
    display: none;
  }
}
@media(max-width: 767.98px) {
  .spz_4002 .spz-hero-section {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/4002/mobile.webp");
    padding: 40px 0 73px;
  }
  .spz_4002 .spz-hero-section .spz-container {
    padding: 0 18px;
  }
  .spz_4002 .spz-form-baseline .form-block {
    margin-top: 40px;
  }
  .spz_4002 .spz-form-baseline .form-block {
    margin-top: 40px;
    padding: 28px 20px !important;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step-header {
    margin: 12px auto 10px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step_2 .step-header {
    margin-bottom: 10px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step_3 .step-header {
    margin-bottom: 19px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step-header .step-heading {
    font-size: 24px;
    line-height: 32px;
    margin: 3px 0 0;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step-header .step-question {
    font-size: 14px;
    line-height: 22px;
    margin: 5px 0 0;
  }
  .spz_4002 .spz-form-baseline .Questions-block .option-box .option-content {
    padding: 15px 18px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .option-box .option-item {
    min-height: 128px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .Option-text {
    font-size: 14px;
    line-height: 18px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step_2 .Option-text {
    font-size: 16px;
    line-height: 1.5;
  }
  .spz_4002 .spz-form-baseline .Questions-block .checkbox {
    width: 18px;
    height: 18px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .option-icon {
    width: 48px;
    height: 48px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .option-box .radio-option-item {
    width: calc(50% - 4px);
    height: 100px;
    margin: 8px 0 0;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step-error img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step-error {
    font-size: 11px;
  }
  .spz_4002 .spz-form-baseline .Questions-block .step-button {
    margin: 18px auto 16px;
  }
  .spz_4002 .spz-form-baseline .form-footer {
    max-width: 100%;
  }
  .spz_4002 .spz-form-baseline.current_step_3 .form-footer,
  .spz_4002 .spz-form-baseline.current_step_4 .form-footer {
    padding: 0 5px;
  }
  .spz_4002 .spz-hero-section .hero-client-logos {
    margin-top: 41px;
  }
  .spz_4002 .spz-hero-section .hero-client-logos .img-wrapper:nth-child(1) {order: 1;}
  .spz_4002 .spz-hero-section .hero-client-logos .img-wrapper:nth-child(2) {order: 3;}
  .spz_4002 .spz-hero-section .hero-client-logos .img-wrapper:nth-child(3) {order: 2;}
  .spz_4002 .spz-hero-section .hero-client-logos .img-wrapper:nth-child(4) {order: 4;}
  .spz_4002 .spz-hero-section .hero-client-logos .client-logo {
    margin-top: 23px;
  }
  .spz_4002 .icon-boxes .container-custom {
    padding: 0 18px;
  }
  .spz_4002 .icon-boxes .heading-content {
    margin-bottom: 0;
  }
  .spz_4002 .icon-boxes .heading-content h2 {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 13px !important;
  }
  .spz_4002 .icon-boxes .heading-content .section-subhead {
    font-size: 14px;
    line-height: 22px;
    max-width: 100%;
  }
  .spz_4002 .icon-boxes .spz-boxes .spz-icon-box {
    padding: 23px 24px 21px !important;
  }
  .spz_4002 .icon-boxes .spz-boxes .spz-icon-box a {
    font-size: 20px;
    line-height: 1.4;
  }
  .spz_4002 footer#expel-footer {
    padding: 22px 0 13px;
  }
  .spz_4002 footer#expel-footer .links-container {
    flex-flow: column;
  }
  .spz_4002 footer#expel-footer .links-container .links p {
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    align-items: center;
  }
  .spz_4002 footer#expel-footer .links-container .links a {
    margin: 0 14px 12.3px;
  }
  .spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol {
    width: 100% !important;
  }
}
@media(max-width: 563.98px) {
  .spz_4002 .spz-hero-section .hero-client-logos .img-wrapper:nth-child(1) {
    width: 50%;
  }
}
@media(max-width: 365.98px) {
  .spz_4002 .spz-hero-section .hero-client-logos .img-wrapper:nth-child(1) {
    width: 48%;
  }
}
`;
head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    if (!body.classList.contains('spz_4002')) {
      body.classList.add('spz_4002');
      waitForElm('.spz_4002 #hero-section').then(function () {
        document.querySelector('.spz_4002 #hero-section').insertAdjacentHTML('afterend', `<section class="spz-hero-section">
          <div class="spz-container">
            <div class="spz-form-baseline current_step_1">
              <div class="form-block">
                <span class="progress-bar"></span>
                <div class="Questions-block">
                  <div class="form-step step_1">
                    <div class="step-header">
                      <h5 class="step-number">Step 1</h5>
                      <h2 class="step-heading">Contact sales</h2>
                      <p class="step-question">Which pain points are you trying to solve?</p>
                    </div>
                    <div class="step-content">
                      <div class="option-box">
                        <div class="option-item">
                          <input type="checkbox" name="Too many alerts" value="Too many alerts">
                          <div class="option-content">
                            <div class="checkbox">
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                              </svg>
                            </div>
                            <div class="option-icon">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon02.svg" class="blue-icon" alt="Too many alerts">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon06.svg" class="white-icon" alt="Too many alerts">
                            </div>
                            <h4 class="Option-text">Too many alerts</h4>
                          </div>
                        </div>
                        <div class="option-item">
                          <input type="checkbox" name="Not enough staff" value="Not enough staff">
                          <div class="option-content">
                            <div class="checkbox">
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                              </svg>
                            </div>
                            <div class="option-icon">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon03.svg" class="blue-icon" alt="Not enough staff">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon07.svg" class="white-icon" alt="Not enough staff">
                            </div>
                            <h4 class="Option-text">Not enough staff</h4>
                          </div>
                        </div>
                        <div class="option-item">
                          <input type="checkbox" name="Need a way to mitigate risk" value="Need a way to mitigate risk">
                          <div class="option-content">
                            <div class="checkbox">
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                              </svg>
                            </div>
                            <div class="option-icon">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon04.svg" class="blue-icon" alt="Need a way to mitigate risk">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon08.svg" class="white-icon" alt="Need a way to mitigate risk">
                            </div>
                            <h4 class="Option-text">Need a way to <br>mitigate risk</h4>
                          </div>
                        </div>
                        <div class="option-item">
                          <input type="checkbox" name="Something else" value="Something else">
                          <div class="option-content">
                            <div class="checkbox">
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                              </svg>
                            </div>
                            <div class="option-icon">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon01.svg" class="blue-icon" alt="Something else">
                              <img src="//res.cloudinary.com/spiralyze/image/upload/v1726066503/expel/4002/icon05.svg" class="white-icon" alt="Something else">
                            </div>
                            <h4 class="Option-text">Something else</h4>
                          </div>
                        </div>
                      </div>
                      <div class="step-error"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721728510/expel/4002/caution.svg" alt="Error Icon">One of the options has to be selected to proceed.</div>
                    </div>
                    <button class="step-button">Next<img src="//res.cloudinary.com/spiralyze/image/upload/v1721713185/expel/4002/Icon-Right.svg" alt="Right Arrow"></button>
                  </div>
                  <div class="form-step step_2">
                    <div class="step-header">
                      <h5 class="step-number">Step 2</h5>
                      <h2 class="step-heading">Contact sales</h2>
                      <p class="step-question">How many employees do you have?</p>
                    </div>
                    <div class="step-content">
                      <div class="option-box">
                        <div class="radio-option-item">
                          <input type="radio" name="employees" value="Less than 100">
                          <div class="option-content">
                            <div class="radio">
                              <span class="radio-dot"></span>
                            </div>
                            <h4 class="Option-text"><100</h4>
                          </div>
                        </div>
                        <div class="radio-option-item">
                          <input type="radio" name="employees" value="100-999">
                          <div class="option-content">
                            <div class="radio">
                              <span class="radio-dot"></span>
                            </div>
                            <h4 class="Option-text">100-999</h4>
                          </div>
                        </div>
                        <div class="radio-option-item">
                          <input type="radio" name="employees" value="1000-2999">
                          <div class="option-content">
                            <div class="radio">
                              <span class="radio-dot"></span>
                            </div>
                            <h4 class="Option-text">1,000-2,999</h4>
                          </div>
                        </div>
                        <div class="radio-option-item">
                          <input type="radio" name="employees" value="3000-4999">
                          <div class="option-content">
                            <div class="radio">
                              <span class="radio-dot"></span>
                            </div>
                            <h4 class="Option-text">3,000-4,999</h4>
                          </div>
                        </div>
                        <div class="radio-option-item">
                          <input type="radio" name="employees" value="5000-9999">
                          <div class="option-content">
                            <div class="radio">
                              <span class="radio-dot"></span>
                            </div>
                            <h4 class="Option-text">5,000-9,999</h4>
                          </div>
                        </div>
                        <div class="radio-option-item">
                          <input type="radio" name="employees" value="More than 10000">
                          <div class="option-content">
                            <div class="radio">
                              <span class="radio-dot"></span>
                            </div>
                            <h4 class="Option-text">10,000+</h4>
                          </div>
                        </div>
                      </div>
                      <div class="step-error"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721728510/expel/4002/caution.svg" alt="Error Icon">One of the options has to be selected to proceed.</div>
                    </div>
                    <button class="step-button">Next<img src="//res.cloudinary.com/spiralyze/image/upload/v1721713185/expel/4002/Icon-Right.svg" alt="Right Arrow"></button>
                  </div>
                  <div class="form-step step_3">
                    <div class="step-header">
                      <h5 class="step-number">Step 3</h5>
                      <h2 class="step-heading">Contact sales</h2>
                    </div>
                    <div class="step-content"></div>
                  </div>
                </div>
                <p class="form-footer">This site is protected by reCAPTCHA  and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
              </div>
              <div class="content-block">
                <a href="https://expel.com" class="site-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721649463/expel/4002/expel-logo.svg" alt="Expel"></a>
                <h1 class="hero-heading">Connect with an expert for a demo</h1>
                <ul class="highlight-point">
                  <li class="list-item"><span class="highlight-text">24x7 SOC services</span> with threat detection, alert triage, remediation recommendations, automated responses & a 20-minute MTTR.</li>
                  <li class="list-item"><span class="highlight-text">Extensive protection</span> across cloud workloads, control plans, identity management, SaaS, endpoints, and networks.</li>
                  <li class="list-item"><span class="highlight-text">125+ integrations</span> including AWS, CrowdStrike, Google, Microsoft, Okta, Palo Alto, SentinelOne, Splunk, Salesforce, Wiz, and more.</li>
                </ul>
              </div>
            </div>
            <div class="hero-client-logos">
              <div class="img-wrapper">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/frame_1171275521.svg" alt="Visa" class="client-logo" />
              </div>
              <div class="img-wrapper">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661499/expel/2003/frame_1171275522.svg" alt="Uber" class="client-logo" />
              </div>
              <div class="img-wrapper">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/frame_1171275523.svg" alt="Markel" class="client-logo" />
              </div>
              <div class="img-wrapper">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/frame_1171275524.svg" alt="Carter's" class="client-logo" />
              </div>
              <div class="img-wrapper">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661499/expel/2003/frame_1171275525.svg" alt="Doordash" class="client-logo" />
              </div>
            </div>
          </div>  
        </section>`);

        waitForElm('.spz_4002 .icon-boxes .boxes').then(function () {
          document.querySelector('.spz_4002 .icon-boxes .boxes').insertAdjacentHTML('afterend', `<div class="spz-boxes">
            <a href="mailto:expelcomms@expel.com" class="spz-icon-box">
              <div class="spz-icon">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1721709039/expel/4002/Chat_Icon.svg" alt="Media inquiries">
              </div>
              <p><span style="font-weight: 400;">Media inquiries</span></p>
            </a>
            <a href="https://expel.com/partner-program/" class="spz-icon-box">
              <div class="spz-icon"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721709037/expel/4002/handshake_icon.svg" alt="Partner with Expel"></div>
              <p>Partner with Expel</p>
            </a>
            <a href="https://expel.com/about/careers/" class="spz-icon-box">
              <div class="spz-icon"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721709039/expel/4002/work_icon.svg" alt="Work at Expel"></div>
              <p>Work at Expel</p>
            </a>
          </div>`);
        });

        // var mainDivs = document.querySelectorAll('.expel-flexible-contact .icon-boxes.has-border .boxes .col');
        // var mainLinks = document.querySelectorAll('.expel-flexible-contact .icon-boxes .boxes .icon-box a');
        // mainDivs.forEach(function (mainDiv, index) {
        //   mainDiv.addEventListener('click', function () {
        //     mainLinks[index].click();
        //   });
        // });

        //Form internal code
        waitForElm('.spz_4002 #hero-section .ex-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
          document.querySelector('.spz_4002 .spz-form-baseline .Questions-block .form-step.step_3 .step-content').appendChild(document.querySelector('.spz_4002 #hero-section .ex-form form.mktoForm'));
          formModify();
        });

        const checkboxes = document.querySelectorAll('.spz_4002 .spz-form-baseline .Questions-block .step-content input');
        checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener('click', function () {
            const stepContent = checkbox.closest('.step-content');
            if (stepContent && stepContent.classList.contains('error')) {
              stepContent.classList.remove('error', 'show-error');
            }
          });
        });

        document.querySelectorAll('.spz_4002 .spz-form-baseline .Questions-block .step-button').forEach(button => {
          button.addEventListener('click', function () {
            const formBaseline = document.querySelector('.spz_4002 .spz-form-baseline');
            const currentStep = this.closest('.form-step');
            const stepContent = this.closest('.form-step').querySelector('.step-content');
            const checkboxes = stepContent.querySelectorAll('input');
            const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

            if (isChecked) {
              var step = false;
              if (document.querySelector('.step_1 input[type="checkbox"]:checked') !== null) {
                step = true;
              } else if (document.querySelector('.step_1 input[name="Cloud security"]:checked') !== null) {
                step = true;
              }
              if (step) {
                const nextStep = currentStep.nextElementSibling;
                if (nextStep && nextStep.classList.contains('form-step')) {
                  currentStep.style.display = 'none';
                  nextStep.style.display = 'block';

                  // Update the class of the current step number on spz-form-baseline
                  const currentStepNumber = nextStep.className.match(/step_(\d+)/)[1];
                  formBaseline.className = formBaseline.className.replace(/current_step_\d+/, '');
                  formBaseline.classList.add(`current_step_${currentStepNumber}`);
                }

              }
            } else {
              stepContent.classList.add('error', 'show-error');
              setTimeout(() => {
                stepContent.classList.remove('show-error');
              }, 3000);
            }
          });
        });

        // Initial step visibility and setting initial class
        document.querySelectorAll('.spz_4002 .spz-form-baseline .Questions-block .form-step').forEach((step, index) => {
          const formBaseline = document.querySelector('.spz_4002 .spz-form-baseline');
          if (index === 0) {
            step.style.display = 'block';
          } else {
            step.style.display = 'none';
          }
        });
      });
    }
  }
});

function formModify() {
  // Unwrap all child elemnts of mktoFormRow
  var mktoForm = document.querySelector('.mktoForm');
  var mktoFormRows = document.querySelectorAll('.mktoFormRow');
  mktoFormRows.forEach(function (row) {
    var mktoFormCols = row.querySelectorAll('.mktoFormCol');
    while (row.firstChild) {
      mktoForm.insertBefore(row.firstChild, row);
    }
    row.remove();
  });
  // Add class in mktoFormRow using count
  var form_fields = document.querySelectorAll('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol');
  for (var i = 0; i < form_fields.length; i++) {
    var dynamicClass = 'field-' + (i + 1);
    form_fields[i].classList.add(dynamicClass);
  }
  // Updating Form Labels
  document.querySelector('#LblCompany_Size__c').textContent = "Company Size";
  document.querySelector('#Company_Size__c').options[0].textContent = 'Select';
  document.querySelector('#LblPerson_Country__c').textContent = "Country";
  document.querySelector('.spz_4002 .mktoForm .field-9 .mktoHtmlText').innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`;
  // form CTA Update
  let form_CTA = setInterval(() => {
    let textChng = document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoButtonRow .mktoButton');
    if (textChng && !textChng.classList.contains('text_change')) {
      textChng.textContent = 'Submit';
      textChng.classList.add('text_change');
      clearInterval(form_CTA);
    }
  }, 100);

  // On input focus add class on closest parent field class
  function focusFields() {
    document.querySelectorAll(`.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

    if (elem.name == 'Email') {
      let counterA = 0;
      const intervalIdA = setInterval(() => {
        if (document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-2').style.display !== "none" || document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-3').style.display !== "none" || document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-4').style.display !== "none" || document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-5').style.display !== "none" || document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-6').style.display !== "none" || document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol.field-7').style.display !== "none") {
          var selected_val = document.querySelector('.step_2 input[name="employees"]:checked').value;
          if (selected_val == 'Less than 100' || selected_val == '100-999' || selected_val == '1000-2999') {
            document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol select[name="Company_Size__c"]').value = 'less than 3001 employees';
          } else {
            document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol select[name="Company_Size__c"]').value = '3001+ employees';
          }

          document.querySelector('.spz-form-baseline').classList.add('current_step_4');
          document.querySelector('.spz-form-baseline').classList.remove('current_step_3');
          document.querySelector('.form-step.step_3 .step-number').textContent = "Step 4";

          // Function to check if an element is displayed as block
          function isVisible(element) {
            if (!element) {
              return false;
            }
            const style = window.getComputedStyle(element);
            if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
              return false;
            }
            return element.offsetParent !== null;
          }
          const textInputs = document.querySelectorAll('.spz_4002 .spz-form-baseline form.mktoForm .mktoField:not([type="checkbox"]):not([type="hidden"])');
          const visibleFields = Array.from(textInputs).filter(isVisible);
          const blockFieldNames = visibleFields.filter(field => {
            const closestMktoFormCol = field.closest('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol');
            return closestMktoFormCol && closestMktoFormCol.style.display !== 'none';
          }).map(field => field.name);
          var last_field_name = blockFieldNames[blockFieldNames.length - 1];
          if (blockFieldNames.length % 2 === 0) {
            document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoField[name="' + last_field_name + '"]').closest('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol').classList.add('width_full');
          } else {
            document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol .mktoField[name="' + last_field_name + '"]').closest('.spz_4002 .spz-form-baseline form.mktoForm .mktoFormCol').classList.remove('width_full');
          }
        }
        counterA++;
        if (counterA >= 20) {
          clearInterval(intervalIdA);
        }
      }, 500);
    }
  }

  document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
    waitForElm('.spz_4002 .spz-form-baseline form.mktoForm .mktoError').then(function (elm) {
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
          if (document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoError #ValidMsgEmail') !== null) {
            document.querySelector('.spz_4002 .spz-form-baseline form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
          }
          counterA++;
          if (counterA >= 10) {
            clearInterval(intervalIdA);
          }
        }, 500);
      }
    });
  })

  // Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
  function hiddenValue(currentExperimentName, currentExperimentValue) {
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
  // Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)

  // Use this and change value according to the experiment
  hiddenValue('#4002 | Expel | Contact Us | Qualifying Questions', 'variant_#4002');
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


window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    const formElement = document.querySelector('.spz-form-baseline');
    formElement.className = formElement.className.replace(/\bcurrent_step_\d+\b/g, '');
    formElement.classList.add('current_step_1');
    document.querySelectorAll('.spz_4002 .spz-form-baseline .Questions-block .form-step').forEach((step, index) => {
      if (index === 0) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }
});