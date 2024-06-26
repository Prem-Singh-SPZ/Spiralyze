var css = `
body.spz-6009-tc {
  scroll-behavior: smooth;
}
.spz-6009-tc:not(.show_content) #wrapper > #components__content,
.spz-6009-tc:not(.show_content) .landing-page__footer {
  height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 0;
}
.spz-6009-tc .lock_hero {
  width: 100%;
  padding: 32px;
  text-align: center;
  border-top: 1px solid #FFFFFF33;
}
.spz-6009-tc.show_content .lock_hero {display: none;}
.spz-6009-tc .lock_hero span {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFF;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.spz-6009-tc .lock_hero span:hover {
  color: #ff862a;
}
.spz-6009-tc .lock_hero span svg {
  margin-left: 8px;
}
.spz-6009-tc .lock_hero span svg path {
  transition: all 0.3s ease-in-out;
}
.spz-6009-tc .lock_hero span:hover svg path {
  stroke: #ff862a;
}
.spz-6009-tc .header.has-promo-banner {
  top: 0;
}
.spz-6009-tc .header.has-promo-banner .header__container-inner {
  max-width: 1238px;
  padding: 0 24px;
}
.spz-6009-tc .header.has-promo-banner .header__container {
  padding: 32px 0;
}
.spz-6009-tc .header.has-promo-banner .header__top {
  padding: 0;
}
.spz-6009-tc .header.has-promo-banner .header__logo {
  padding: 0;
}
.spz-6009-tc .header.has-promo-banner img {
  width: 196px;
}
.spz-6009-tc .landing-page-v3__container {
  padding: 142px 0 0 0;
  background: #081a59 !important;
  background-size: 100% !important;
  position: relative;
}
.spz-6009-tc:not(.show_content) .landing-page-v3__container {
  min-height: 100vh;
}
.spz-6009-tc .landing-page-v3__container .landing-page-v3__container-inner {
  max-width: 1238px;
  padding: 0 24px;
}
.spz-6009-tc .landing-page-v3__container::before {
  position: absolute;
  content: "";
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/6001/background_pattern_2.webp");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
}
@media (min-width: 1900px) and (max-width: 2500px) {
  .spz-6009-tc .landing-page-v3__container::before {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1701700439/netskope/6001/1920_background_pattern.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
@media (min-width: 2500px) and (max-width: 3500px) {
  .spz-6009-tc .landing-page-v3__container::before {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1701700422/netskope/6001/2560_background_pattern.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.spz-6009-tc .landing-page-v3__container .landing-page-v3__logo {
  display: none;
}
.spz-6009-tc .landing-page-v3__container .plus-orange {
  display: none;
}
.spz-6009-tc .landing-page-v3__container .landing-page-v3__content-container {
  display: none;
}
.spz-6009-tc .landing-page-v3__container .landing-page-v3__form-container {
  -webkit-box-ordinal-group: unset;
  -ms-flex-order: unset;
  order: unset;
  padding: 0;
}
.spz-6009-tc .landing-page-v3__container .landing-page-v3__form-container .landing-page-v3__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: unset;
  -webkit-box-direction: unset;
  -ms-flex-direction: unset;
  flex-direction: unset;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.spz-6009-tc .landing-page-v3__container .landing-page-v3__content-container--bottom {
  padding: 96px 0 49px;
  -webkit-box-ordinal-group: unset;
  -ms-flex-order: unset;
  order: unset;
}
.spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form-image {
  display: none;
}
.spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form-content + .form-content-heading {
  display: none;
}
.spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form-content + .form-content-heading br {
  display: none;
}
.spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .hero_left {
  width: 46.5%;
  max-width: 548px;
}
.spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .landing-page-v3__form-content {
  width: 42.5%;
  max-width: 504px;
  padding: 24px 32px 32px;
  background: #ffffff;
  border-radius: 24px;
  position: relative;
}
.spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .landing-page-v3__form-content::after {
  position: absolute;
  content: "";
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1700151751/netskope/6001/vector_9.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 260px;
  height: 72px;
  left: -125px;
  bottom: -107px;
}
.spz-6009-tc .hero_left .form-content-heading {
  color: #fff;
  font-family: Graphik;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin: 0;
  position: relative;
}
.spz-6009-tc .hero_left .form-content-heading br {
  display: none;
}
.spz-6009-tc .hero_left .form-content-heading::before {
  position: absolute;
  content: "";
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1701662318/netskope/6001/Union.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  top: -20px;
  left: -36px;
}
.spz-6009-tc .hero_left h4 {
  color: #fff;
  font-family: Graphik;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 24px 0;
}
.spz-6009-tc .hero_left h4 sup {
  font-size: 8px;
  top: -0.9em;
}
.spz-6009-tc .hero_left img {
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.spz-6009-tc .landing-page-v3__form-content .form_title {
  color: #081a59;
  text-align: center;
  font-family: Graphik;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 24px;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoTemplateBox {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoTemplateBox .welcomeback {
  color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoTemplateBox a.mktoNotYou {
  color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow.field-2 {
  display: none !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow {
  display: -webkit-inline-box !important;
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
  margin: 0;
  width: calc(50% - 6px) !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFormCol {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap {
  position: relative;
  margin-bottom: 16px;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap:not(.single_checkbox) label.mktoLabel {
  position: absolute !important;
  top: 16px;
  left: 16px;
  color: #7e8bba !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 24px !important;
  width: auto !important;
  height: auto;
  pointer-events: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-family: "Graphik" !important;
  opacity: 1 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap:not(.single_checkbox):hover label.mktoLabel {
  color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField {
  font-family: "Graphik" !important;
  height: 56px !important;
  padding: 24px 15px 8px !important;
  border-radius: 24px !important;
  border: 1px solid rgba(8, 26, 89, 0.2) !important;
  background: #fff !important;
  color: #081a59 !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 24px !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:focus {
  border-color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap select.mktoField {
  background-position: right 19px center !important;
  padding-right: 36px !important;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron.svg") !important;
  background-color: #FFF !important;
  background-size: 16px !important;
  background-repeat: no-repeat !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap select.mktoField option {
  background: inherit;
  color: inherit;
  border-bottom: inherit;
  padding: inherit;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField.mktoInvalid {
  border-color: #ff5b28 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError {
  top: initial;
  bottom: initial !important;
  left: initial !important;
  right: initial !important;
  display: inline-block;
  margin: 0;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError .mktoErrorArrowWrap {
  display: none !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError .mktoErrorMsg {
  margin: 2px 0 0 10px;
  padding: 0;
  color: #ff5b28;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  display: inline-block;
  bottom: auto;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.active.typing:not(.single_checkbox) label.mktoLabel {
  top: 6px;
  font-size: 12px !important;
  line-height: 20px !important;
  color: #7e8bba !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.active.typing .mktoField {
  border-color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.filled:not(.single_checkbox) label.mktoLabel {
  top: 6px;
  font-size: 12px !important;
  line-height: 20px !important;
  color: #7e8bba !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.typing select.mktoField {
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg") !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox {
  margin: -4px 0 8px 0;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel {
  padding: 0 0 0 24px !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel::after {
  opacity: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel::before {
  width: 16px !important;
  height: 16px !important;
  border: 1px solid #ff8200 !important;
  border-radius: 4px !important;
  background: #fff !important;
  top: 2px !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p.p11 {
  width: 100%;
  font-family: "Graphik" !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p {
  color: #081a59 !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p a {
  color: #081a59 !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none !important;
  text-decoration: underline !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel.single_checked::before {
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1701250536/netskope/6001/Checkbox_base.svg") !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  border: none !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoHtmlText .netskope-fm {
  padding: 0 !important;
  color: #7e8bba !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: "Graphik" !important;
  text-decoration: none !important;
  border: none;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoHtmlText .netskope-fm a {
  padding: 0 !important;
  color: #7e8bba !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: "Graphik" !important;
  text-decoration: none !important;
  text-decoration: underline !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow.field-3 {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow.field-10 {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow.field-11 {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow.mktoZipRow {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoButtonRow {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoButtonWrap {
  margin-top: 8px !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoButtonWrap .mktoButton,
.spz-6009-tc .landing-page-v3__form-content form.mktoForm + #landing-page-v3__asset .btn {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100% !important;
  height: 48px;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  letter-spacing: 0em;
  color: #081a59 !important;
  background: #ff8200 !important;
  border: 1px solid #ff8200 !important;
  border-radius: 200px !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoButtonWrap .mktoButton:hover,
.spz-6009-tc .landing-page-v3__form-content form.mktoForm + #landing-page-v3__asset .btn:hover {
  background: #fff !important;
  border-color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__content-container--bottom p {
  color: #fff;
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}
.spz-6009-tc .landing-page-v3__content-container--bottom p strong {
  font-weight: 600;
}
.spz-6009-tc .landing-page-v3__content-container--bottom p b {
  font-weight: 600;
}
.spz-6009-tc .landing-page-v3__content-container--bottom ul {
  color: #fff;
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  padding-left: 24px;
}
.spz-6009-tc .landing-page-v3__content-container--bottom ul strong {
  font-weight: 600;
}
.spz-6009-tc .landing-page-v3__content-container--bottom ul b {
  font-weight: 600;
}
.spz-6009-tc .mktoForm select#Country:focus {
  border: 1px solid #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content .mktoForm .mktoFormCol .mktoFieldWrap a {
  text-underline-offset: 2px;
  padding: 0;
}

.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill:hover {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm + #landing-page-v3__asset p, .spz-6009-tc .landing-page-v3__form-content form.mktoForm + #landing-page-v3__asset p span {
  color: #081a59;
  display: block;
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm + #landing-page-v3__asset p span {
  margin: 15px auto 5px
}
.spz-6009-tc .landing-page-v3__form-content form.mktoForm + #landing-page-v3__asset p br {
  display: none;
}

@media (max-width: 1023.98px) {
  .spz-6009-tc .header.has-promo-banner .header__container-inner {
    max-width: 752px;
  }
  .spz-6009-tc .header.has-promo-banner .header__container {
    padding: 24px 0;
  }
  .spz-6009-tc .landing-page-v3__container {
    padding: 102px 0 0 0;
    overflow-x: hidden;
  }
  .spz-6009-tc .landing-page-v3__container .landing-page-v3__container-inner {
    max-width: 752px;
  }
  .spz-6009-tc .landing-page-v3__container::before {
    width: 1440px;
    height: 639px;
    right: -107px;
  }
  .spz-6009-tc .landing-page-v3__container .landing-page-v3__form-container .landing-page-v3__form {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  .spz-6009-tc .landing-page-v3__container .landing-page-v3__content-container--bottom {
    padding: 41px 0 39px;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form-content + .form-content-heading {
    display: block;
    color: #fff;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    margin: 0;
    position: relative;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .landing-page-v3__form-content {
    width: 100%;
    max-width: unset;
    margin: 32px 0 30px;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .landing-page-v3__form-content::after {
    display: none;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .hero_left {
    width: 100%;
    max-width: 100%;
    position: relative;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .hero_left::after {
    position: absolute;
    content: "";
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1700151743/netskope/6001/vector_8.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 201px;
    height: 176px;
    top: 84px;
    right: 139px;
  }
  .spz-6009-tc .hero_left .form-content-heading {
    display: none;
  }
  .spz-6009-tc .hero_left h4 {
    margin: 2px 0 32px;
  }
  .spz-6009-tc .hero_left img {
    max-width: 320px;
  }
}
@media (max-width: 1400px) {
  .spz-6009-tc .landing-page__footer-inner > .row {
    margin: 0;
  }
}
@media (max-width: 767.98px) {
  .spz-6009-tc .header.has-promo-banner img {
    width: 136px;
  }
  .spz-6009-tc .header.has-promo-banner .header__container {
    padding: 18px 0;
  }
  .spz-6009-tc .header.has-promo-banner .header__container-inner {
    max-width: 548px;
  }
  .spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoButtonWrap {
    margin-top: 10px !important;
  }
}
@media (min-width: 3500px) {
  .spz-6009-tc .landing-page-v3__container::before {
    background-image: url("https://res.cloudinary.com/spiralyze/image/upload/v1701688623/netskope/6001/4k_background_pattern.svg");
  }
}
@media (max-width: 1199.98px) {
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .landing-page-v3__form-content::after {
    bottom: -100px;
  }
}
@media (max-width: 767.98px) {
  .spz-6009-tc .lock_hero {
    padding: 23px 24px 24px;
  }
  .spz-6009-tc .landing-page-v3__container {
    padding: 76px 0 0 0;
  }
  .spz-6009-tc .landing-page-v3__container .landing-page-v3__content-container--bottom {
    padding: 24px 24px 32px;
  }
  .spz-6009-tc .landing-page-v3__container::before {
    right: -347px;
    top: -138px;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form-content + .form-content-heading {
    font-size: 40px;
    line-height: 48px;
    padding: 0 24px;
    max-width: 450px;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form-content + .form-content-heading br {
    display: block;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .hero_left {
    padding: 0 24px;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .hero_left::after {
    display: none;
  }
  .spz-6009-tc .landing-page-v3__form-container .landing-page-v3__form .landing-page-v3__form-content {
    padding: 24px 24px 32px;
    margin: 24px 0 23px;
  }
  .spz-6009-tc .hero_left h4 {
    font-size: 16px;
    margin: 2px 0 23px;
  }
  .spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow {
    width: 100% !important;
  }
  .spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow .mktoFieldWrap {
    margin-bottom: 8px;
  }
  .spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow.field-11 {
    margin-top: 6px !important;
  }
  .spz-6009-tc .landing-page-v3__form-content form.mktoForm .mktoFormRow.field-11 p.p11 {
    margin-top: 3px;
  }
  #components__content .landing-page-v3__container-inner {
    padding: 0;
    max-width: 500px;
  }
}`;

head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);

    if (!body.classList.contains('spz-6009-tc')) {
		
	  // if(window.location.pathname.indexOf("/lp-2023-magic-quadrant-for-security-service-edge-sem") > -1) {
		  body.classList.add('spz-6009-tc');

		  waitForElm('.spz-6009-tc #wrapper .v3.landing-page-v3__container').then(function () {
			var sub_heading = document.querySelector(".spz-6009-tc #wrapper .v3.landing-page-v3__container .landing-page-v3__subheadline").innerHTML;
	  
			// Hero Fom Content
			document.querySelector('.spz-6009-tc #wrapper .v3.landing-page-v3__container .landing-page-v3__form').insertAdjacentHTML("afterbegin", `<div class="hero_left">
			  <h2 class="form-content-heading">Highest<br> in Execution. Furthest<br> in <span>Vision</span>.</h2>
			  `+sub_heading+`
			  <picture class="hero-form-img">
				<source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/desktop_report.webp">
				<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/tablet_report.webp">
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1700667411/netskope/6002/mobile_image.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/desktop_report.webp" alt="Highest in Execution. Furthest in Vision." title="Highest in Execution. Furthest in Vision.">
			  </picture>
			</div>`);

			document.querySelector('.spz-6009-tc #wrapper .landing-page-v3__form .landing-page-v3__form-content').insertAdjacentHTML("afterend", `<h2 class="form-content-heading">Highest<br> in Execution. Furthest<br> in <span>Vision</span>.</h2>`);
			
			//Form internal code
			waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
			  formModify();
			  setHiddenFields();
			});

      // Lock Hero
      document.querySelector('.spz-6009-tc #wrapper .v3.landing-page-v3__container').insertAdjacentHTML("beforeend", `<div class="lock_hero">
        <span>Learn More <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 9L12.5 15L18.5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>`);
      document.querySelector('.spz-6009-tc .lock_hero span').addEventListener('click', function() {
        if (!document.body.classList.contains('show_content')) {
          document.body.classList.add('show_content');
          document.querySelector('.spz-6009-tc.show_content #wrapper > #components__content').scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
        }
      });

      MktoForms2.whenReady(function(form) {
        // console.log('Load MKtoforms2');
        // Add an onSuccess handler to capture form submissions
        form.onSuccess(function(values, followUpUrl) {
            // console.log("Form submitted successfully");
            // You can perform additional actions here, such as tracking or redirecting
        });
      });
    
      function check_form() {
        // console.log('Call check form function');
        var form_welcome_msg = document.querySelector('.spz-6009-tc .landing-page-v3__form-content form.mktoForm .welcomeback');
        if (form_welcome_msg) {
          if (!document.body.classList.contains('show_content')) {
            document.body.classList.add('show_content');
          }
        } 
      }
      waitForElm('.spz-6009-tc .landing-page-v3__form-content form.mktoForm').then(function () {
        check_form();
      });


		  });
	  // }
    }
    
  }
});

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

function formModify() {
  var isDarkPresent = document.querySelector('.spz-6009-tc .landing-page-v3__container');
  if (isDarkPresent.classList.contains("dark")) {
    isDarkPresent.classList.remove("dark");
  }

  // Add class in mktoFormRow using count
  var parentDiv = document.querySelector('.spz-6009-tc .landing-page-v3__form .landing-page-v3__form-content .mktoForm');
  var childElements = parentDiv.children;
  for (var i = 0; i < childElements.length; i++) {
    var dynamicClass = 'field-' + (i + 1);
    childElements[i].classList.add(dynamicClass);
  }

  var formDiv = document.querySelector('.spz-6009-tc .landing-page-v3__form .landing-page-v3__form-content .mktoForm');
  // Form Extra Titles
	if (formDiv && document.querySelectorAll('.form_title').length == 0) {
		formDiv.insertAdjacentHTML('beforebegin', `<h2 class="form_title">Get Gartner report</h2>`);
	}
  // form CTA Update
  var form_button = setInterval(() => {
    var textChng = document.querySelector('.spz-6009-tc .landing-page-v3__form .landing-page-v3__form-content .mktoForm .mktoButtonRow .mktoButton');
    if (textChng) {
      textChng.innerText = 'Get the report';
      clearInterval(form_button);
    }
  }, 100);

  // Updating Form Labels
	document.querySelector('#LblFirstName').textContent = "First Name";
	document.querySelector('#LblLastName').textContent = "Last Name";
	document.querySelector('#LblEmail').textContent = "Business Email";
	document.querySelector('#LblCompany').textContent = "Company";
	document.querySelector('#LblTitle').textContent = "Job title";
	document.querySelector('#LblPhone').textContent = "Phone";
	document.querySelector('#Country option:first-child').textContent = "";
	document.querySelector('#LblCountry').textContent = "Country";

  // Change Field Position
  var email_field = document.querySelector('.spz-6009-tc .landing-page-v3__form .mktoForm .mktoFormRow.field-3');
  var lastname_field = document.querySelector('.spz-6009-tc .landing-page-v3__form .mktoForm .mktoFormRow.field-5');
  lastname_field.after(email_field);

  var optout_field = document.querySelector('.spz-6009-tc .landing-page-v3__form .mktoForm .mktoFormRow.field-11');
  var form_footer = document.querySelector('.spz-6009-tc .landing-page-v3__form .mktoForm .mktoFormRow.field-10');
  form_footer.before(optout_field);

  var zip_row = document.createElement("div");
	zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
	zip_row.classList.add('mktoFormRow');
	zip_row.classList.add('mktoZipRow');
	
	var extraRow = document.querySelectorAll(".spz-6009-tc .landing-page-v3__form-content .mktoFormRow")[7];
	insertAfter(extraRow, zip_row);
	
	const zip_row_old = document.querySelector(".mktoPlaceholderPostalCode");
	const zip_row_new = document.querySelector(".mktoZipRow");
	zip_row_new.appendChild(zip_row_old);

  // form state
  var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select';

  document.addEventListener('focus', function (event) {
		if (event.target.matches(selector)) {
			event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
		}
	}, true);	

  var eventList = ["blur", "focusout", "keyup", "change"];
	for (s_event of eventList) {
		document.addEventListener(s_event, function (event) {
			if (event.target.matches(selector)) {
				if (event.target.value == null || event.target.value == '') {
					event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.remove('filled');
				} else {
					event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('filled');
				}
			}
		});
	}
		
	document.addEventListener('focusout', function (event) {
		document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
			elem.classList.remove('active', 'typing');
		})
	}, true);
}

function setHiddenFields() {
	waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
		const field_int = setInterval(function () {
			if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
				if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#6010_spz_control") {
					clearInterval(field_int);
				}
				if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') != ''){
					document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#6010_spz_control');
				}
				document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#6010_spz_control');
			}
		}, 100);
	});
}