var css = `
body.spz-6009 {
  scroll-behavior: smooth;
}
.spz-6009:not(.show_content) > #components__content,
.spz-6009:not(.show_content) .netskope-footer {
  height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 0;
}
.spz-6009 .lock_hero {
  width: 100%;
  padding: 32px;
  text-align: center;
  border-top: 1px solid #FFFFFF33;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
}
.spz-6009.show_content .lock_hero {display: none;}
.spz-6009 .lock_hero span {
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
.spz-6009 .lock_hero span:hover {
  color: #ff862a;
}
.spz-6009 .lock_hero span svg {
  margin-left: 8px;
}
.spz-6009 .lock_hero span svg path {
  transition: all 0.3s ease-in-out;
}
.spz-6009 .lock_hero span:hover svg path {
  stroke: #ff862a;
}
.spz-6009 .header.has-promo-banner {
  top: 46px;
}
.spz-6009 .header.has-promo-banner .header__container-inner {
  max-width: 1238px;
  padding: 0 24px;
}
.spz-6009 .header.has-promo-banner .header__container {
  padding: 32px 0;
}
.spz-6009 .header.has-promo-banner .header__top {
  padding: 0;
}
.spz-6009 .header.has-promo-banner .header__top > div:not(.header__logo) {
  display: none;
}
.spz-6009 .header.has-promo-banner .header__logo {
  padding: 0;
}
.spz-6009 .header.has-promo-banner img {
  width: 196px;
}
.spz-6009 .js-hero-banner .gated-content__top,
.spz-6009 .js-hero-banner .gated-content__left {
  display: none;
}
.spz-6009 .js-hero-banner {
  padding: 142px 0 0;
  background: #081a59 !important;
  background-size: 100% !important;
  position: relative;
}
.spz-6009:not(.show_content) .js-hero-banner {
  min-height: calc(100vh - 46px);
}
.spz-6009 .js-hero-banner .container {
  max-width: 1238px;
  padding: 0 24px 48px;
  position: relative;
  z-index: 99;
}
.spz-6009:not(.show_content) .js-hero-banner .container {
  padding: 0 24px 137px;
}
.spz-6009 .js-hero-banner::before {
  position: absolute;
  content: "";
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1712300492/netskope/6009/background_pattern_1440.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
}
@media (min-width: 1900px) and (max-width: 2500px) {
  .spz-6009 .js-hero-banner::before {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1712300492/netskope/6009/background_pattern_1440.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
@media (min-width: 2500px) and (max-width: 3500px) {
  .spz-6009 .js-hero-banner::before {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1712300568/netskope/6009/background_pattern_2560.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
@media (min-width: 3500px) {
  .spz-6009 .js-hero-banner::before {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1712300505/netskope/6009/background_pattern_3840.svg");
  }
}
.spz-6009 .js-hero-banner .gated-content__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.spz-6009 .js-hero-banner .gated-content__container .hero_left {
  width: 49.16%;
  max-width: 585px;
}
.spz-6009 .hero_left .form-content-heading {
  color: #fff;
  font-family: Graphik;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin: 0;
  position: relative;
}
.spz-6009 .hero_left .form-content-heading br {
  display: none;
}
.spz-6009 .hero_left .form-content-heading::before {
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
.spz-6009 .hero_left .form-content-subheading {
  font-family: Graphik;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  color: #FFF;
  margin: 24px 0 16px;
  // max-width: 500px;
}
.spz-6009 .hero_left .form-content-subheading sup {
  //top: inherit;
  font-size: 62%;
}
.spz-6009 .hero_left .form-content-description img, .spz-6009 .hero_left .form-content-description br {
  display: none;
}
.spz-6009 .hero_left .form-content-description p {
  font-family: Graphik;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 41px;
}
.spz-6009 .hero_left .form-content-description p strong {
  font-weight: 600;
}
.spz-6009 .hero_left .hero-form-img {
  position: relative;
}

.spz-6009 .hero_left .hero-form-img img {
  width: 87.4%;
  max-width: 511px;
  position: relative;
  z-index: 1;
}
.spz-6009 .hero_left img {
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
}
.spz-6009 .js-hero-banner .gated-content__container .gated-content__right {
  width: 42.5%;
  max-width: 504px;
  margin: 0;
  position: relative;
}
.spz-6009 .js-hero-banner .gated-content__container .gated-content__right .form-content-heading,
.spz-6009 .js-hero-banner .gated-content__container .gated-content__right .hero-form-img {
  display: none;
}
.spz-6009 .js-hero-banner .gated-content__right .gated-content__form {
  width: 100%;
  max-width: unset;
  padding: 24px 32px 32px;
  border-radius: 24px;
  margin-bottom: 40px;
}
.spz-6009 .js-hero-banner .gated-content__right .form_title {
  color: #081a59;
  text-align: center;
  font-family: Graphik;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 24px;
}
.spz-6009 .js-hero-banner .gated-content__right .rte {
  margin-bottom: 32px;
}
.spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(01), .spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(02) {
  display: none;
}
.spz-6009 .js-hero-banner .gated-content__right .rte p,
.spz-6009 .js-hero-banner .gated-content__right .rte ul li {
  font-family: Graphik;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 12px;
}
.spz-6009 .js-hero-banner .gated-content__right .rte p strong,
.spz-6009 .js-hero-banner .gated-content__right .rte ul li strong {
  font-weight: 600;
}
.spz-6009 .js-hero-banner .gated-content__right .rte ul {
  padding-left: 24px;
}
.spz-6009 .js-hero-banner .gated-content__right .rte ul,
.spz-6009 .js-hero-banner .gated-content__right .rte ul li {
  margin: 0;
}
.spz-6009 .js-hero-banner .gated-content__right .gated-content__content{
  max-width: 488px;
}
.spz-6009 .js-hero-banner .gated-content__right .gated-content__content .gated-content__label {
  font-family: Graphik;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 8px;
}
.spz-6009 .js-hero-banner .gated-content__right .gated-content__content .gated-content__tags {
  margin: 0 -8px;
}
.spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta {
  margin: 8px;
  font-family: Graphik;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  padding: 3px 15px;
}
.spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .show-hide-tag{
  padding: 8px;
}
.spz-6009 .js-hero-banner .gated-content__right .gated-content__content .gated-content__tags ~ * {
  display: none;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm {
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
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoTemplateBox {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoTemplateBox .welcomeback {
  color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoTemplateBox a.mktoNotYou {
  color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow.field-2 {
  display: none !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow {
  display: -webkit-inline-box !important;
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
  margin: 0;
  width: calc(50% - 6px) !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFormCol {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap {
  position: relative;
  margin-bottom: 16px;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap:not(.single_checkbox) label.mktoLabel {
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
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap:not(.single_checkbox):hover label.mktoLabel {
  color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField {
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
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:focus {
  border-color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap select.mktoField {
  padding-right: 36px !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: none !important;
  background-image: none !important;
  background-repeat: no-repeat !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFormCol.select-wrap .mktoFieldWrap select option {
  background: #fff !important;
  color: inherit;
  border-bottom: inherit;
  padding: inherit;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFormCol.select-wrap .mktoFieldWrap:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  right: 19px;
  top: 18px;
  z-index: 1;
  pointer-events: none;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/1001/Chevron.svg") !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFormCol.select-wrap .mktoFieldWrap.typing:before {
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/1001/Chevron_inverted.svg") !important;
}

.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap select.mktoField option {
  background: inherit;
  color: inherit;
  border-bottom: inherit;
  padding: inherit;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField.mktoInvalid {
  border-color: #ff5b28 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError {
  top: initial;
  bottom: initial !important;
  left: initial !important;
  right: initial !important;
  display: inline-block;
  margin: 0;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError .mktoErrorArrowWrap {
  display: none !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError .mktoErrorMsg {
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
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.active.typing:not(.single_checkbox) label.mktoLabel {
  top: 6px;
  font-size: 12px !important;
  line-height: 20px !important;
  color: #7e8bba !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.active.typing .mktoField {
  border-color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.filled:not(.single_checkbox) label.mktoLabel {
  top: 6px;
  font-size: 12px !important;
  line-height: 20px !important;
  color: #7e8bba !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox {
  margin: 0 0 8px 0;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel {
  padding: 0 0 0 24px !important;
  width: fit-content !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel::after {
  opacity: 0 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel::before {
  width: 16px !important;
  height: 16px !important;
  border: 1px solid #ff8200 !important;
  border-radius: 4px !important;
  background: #fff !important;
  top: 2px !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p.p11 {
  width: 100%;
  font-family: "Graphik" !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p {
  color: #081a59 !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p a {
  color: #081a59 !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none !important;
  text-decoration: underline !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel.single_checked::before {
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1701250536/netskope/6001/Checkbox_base.svg") !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  border: none !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoHtmlText .netskope-fm {
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
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoHtmlText .netskope-fm a {
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
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow.field-10 {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow.field-11 {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoButtonRow {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoButtonWrap {
  margin-top: 8px !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoButtonWrap .mktoButton,
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm + #landing-page-v3__asset .btn {
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
  font-family: Graphik !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoButtonWrap .mktoButton:hover,
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm + #landing-page-v3__asset .btn:hover {
  background: #fff !important;
  border-color: #081a59 !important;
}
.spz-6009 .landing-page-v3__content-container--bottom p {
  color: #fff;
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}
.spz-6009 .landing-page-v3__content-container--bottom p strong {
  font-weight: 600;
}
.spz-6009 .landing-page-v3__content-container--bottom p b {
  font-weight: 600;
}
.spz-6009 .landing-page-v3__content-container--bottom ul {
  color: #fff;
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  padding-left: 24px;
}
.spz-6009 .landing-page-v3__content-container--bottom ul strong {
  font-weight: 600;
}
.spz-6009 .landing-page-v3__content-container--bottom ul b {
  font-weight: 600;
}
.spz-6009 .mktoForm select#Country:focus {
  border: 1px solid #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right .mktoForm .mktoFormCol .mktoFieldWrap a {
  text-underline-offset: 2px;
  padding: 0;
}

.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill:hover {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
  -webkit-text-fill-color: #081a59 !important;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm + #landing-page-v3__asset p, .spz-6009 .js-hero-banner .gated-content__right form.mktoForm + #landing-page-v3__asset p span {
  color: #081a59;
  display: block;
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm + #landing-page-v3__asset p span {
  margin: 15px auto 5px
}
.spz-6009 .js-hero-banner .gated-content__right form.mktoForm + #landing-page-v3__asset p br {
  display: none;
}
#success-msg {
  text-align: center;
}
.thanksmsg h2 {
  margin: 15px auto 5px;
}
.gated-content__right::before{
    position: absolute;
    content: "";
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1710838436/netskope/6009/vector.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 144px;
    height: 72px;
    right: -137px;
    bottom: 351px;
}
@media (max-width: 1023.98px) {
  .gated-content__right::before{
    display: none;
  }
  .spz-6009 .header.has-promo-banner {
    top: 0;
  }
  .spz-6009 .header.has-promo-banner .header__container-inner {
    max-width: 752px;
  }
  .spz-6009 .header.has-promo-banner .header__container {
    padding: 24px 0;
  }
  .spz-6009 .js-hero-banner {
    padding: 74px 0 0 0;
    overflow-x: hidden;
  }
  .spz-6009 .js-hero-banner .container {
    max-width: 752px;
  }
  .spz-6009 .js-hero-banner .container {
    padding-bottom: 0;
  }
  .spz-6009:not(.show_content) .js-hero-banner .container {
    padding-bottom: 89px;
  }
  .spz-6009 .js-hero-banner::before {
    width: 1440px;
    height: 639px;
    right: -144px;
  }
  .spz-6009 .js-hero-banner .gated-content__container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .form-content-heading {
    display: block;
    color: #fff;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    margin: 0 0 32px;
    position: relative;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right {
    width: 100%;
    max-width: unset;
    margin: 28px 0 32px;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right > .hero-form-img {
    display: block;
    position: relative;
    margin-bottom: 32px;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .hero-form-img::after {
    position: absolute;
    content: "";
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1710838462/netskope/6009/arrow_tablet.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 202px;
    height: 188px;
    top: 18px;
    left: 362px;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .hero-form-img img {
    width: 100%;
    max-width: 320px;
  }
  .spz-6009 .js-hero-banner .gated-content__container .hero_left,
  .spz-6009 .js-hero-banner .gated-content__right .rte img,
  .spz-6009 .js-hero-banner .gated-content__right .rte br {
    display: none;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(01), .spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(02) {
    display: block;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(01) {
    font-size: 18px;
    line-height: 24px;
    max-width: 70%;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(01) sup {
    //top: unset;
    font-size: 62%;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte p {
    margin-bottom: 12px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte ul {
    //margin-top: -14px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__form {
    margin-bottom: 32px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__content{
    max-width: 100%;
  }
}
@media (max-width: 1400px) {
  .spz-6009 .landing-page__footer-inner > .row {
    margin: 0;
  }
}
@media (max-width: 767.98px) {
  .spz-6009 .header.has-promo-banner img {
    width: 136px;
  }
  .spz-6009 .header.has-promo-banner .header__container {
    padding: 18px 0;
  }
  .spz-6009 .header.has-promo-banner .header__container-inner {
    max-width: 548px;
  }
}
@media (max-width: 1199.98px) {
  .spz-6009 .landing-page-v3__form-container .js-hero-banner .gated-content__container .gated-content__right::after {
    bottom: -100px;
  }
}
@media (max-width: 767.98px) {
  .spz-6009 .lock_hero {
    position: relative;
    padding: 23px 24px 24px;
  }
  .spz-6009 .js-hero-banner {
    padding: 48px 0 0 0;
  }
  .spz-6009 .js-hero-banner .container {
    padding: 0 !important;
  }
  .spz-6009 .js-hero-banner::before {
    right: -348px;
    top: 0;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .form-content-heading {
    font-size: 32px;
    line-height: 40px;
    padding: 0 24px;
    margin-bottom: 24px;
  }
  .spz-6009 .landing-page-v3__form-container .landing-page-v3__form .hero_left {
    padding: 0 24px;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .hero-form-img,
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .hero-form-img::after {
    display: none;
  }
  .spz-6009 .landing-page-v3__form-container .js-hero-banner .gated-content__container .gated-content__right {
    padding: 24px 24px 32px;
    margin: 22px 0 23px;
  }
  .spz-6009 .hero_left h4 {
    font-size: 16px;
    margin: 2px 0 23px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__form {
    margin: 0;
    padding: 24px 24px 32px;
  }
  .spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow {
    width: 100% !important;
  }
  .spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow .mktoFieldWrap {
    margin-bottom: 8px;
  }
  .spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoFormRow.field-11 {
    margin-top: 6px !important;
  }
  .spz-6009 .js-hero-banner .gated-content__right form.mktoForm .mktoButtonWrap {
    margin-top: 10px !important;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte {
    max-width: unset;
    padding: 0 24px;
    margin: 24px 0;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .rte .hero-form-img {
    display: block;
    margin: 33px 0;
  }
  .spz-6009 .js-hero-banner .gated-content__container .gated-content__right .rte .hero-form-img img {
    display: block;
    margin: 0;
    max-width: unset;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(01) {
    max-width: 98%;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte p {
    margin-bottom: 12px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .rte ul {
    margin-top: -4px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__content {
    padding: 0 24px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__content .gated-content__tags {
    margin: 0 -4px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta {
    margin: 8px 14px 8px 4px;
  }
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta:nth-child(01) {order: 1}
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta:nth-child(02) {order: 3}
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta:nth-child(03) {order: 2}
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta:nth-child(04) {order: 4}
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta:nth-child(05) {order: 6}
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .gated-content__tag.ga__cta:nth-child(06) {order: 5}
  .spz-6009 .js-hero-banner .gated-content__right .gated-content__tags .show-hide-tag {order: 6; padding-left: 0}
}`;

head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);

    if (!body.classList.contains('spz-6009')) {

      body.classList.add('spz-6009');

      waitForElm('.spz-6009 .js-hero-banner').then(function () {
        var heading = document.querySelector(".spz-6009 .js-hero-banner .page-intro__resource-title span").textContent;
        var sub_heading = document.querySelector(".spz-6009 .js-hero-banner .gated-content__left .rte p").firstChild.innerHTML;
        var short_description = document.querySelector(".spz-6009 .js-hero-banner .gated-content__left .rte p:nth-child(02)").outerHTML;

        // Hero Form Content
        document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .gated-content__left').insertAdjacentHTML("beforebegin", `<div class="hero_left">
          <h2 class="form-content-heading">`+ heading + `</h2>
          <h6 class="form-content-subheading">`+ sub_heading + `</h6>
          <div class="form-content-description">`+ short_description + `</div>
          <div class="hero-form-img">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/6003/desktop_report.webp" alt="`+ heading + `">
          </div>
        </div>`);

        document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .gated-content__right').insertAdjacentHTML("beforeend", `<picture class="hero-form-img">
          <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/6003/desktop_report.webp">
          <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/6003/tablet_report.webp">
          <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1700667411/netskope/6002/mobile_image.webp">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/6003/desktop_report.webp" alt="`+ heading + `">
        </picture>`+ document.querySelector(".spz-6009 .js-hero-banner .gated-content__left").innerHTML);
        document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .gated-content__right').insertAdjacentHTML("afterbegin", `<h2 class="form-content-heading">` + heading + `</h2>`);
        document.querySelector('.spz-6009 .js-hero-banner .gated-content__right .rte p:nth-child(02)').insertAdjacentHTML("afterend", `<div class="hero-form-img">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1700667411/netskope/6002/mobile_image.webp" alt="`+ heading + `">
        </div>`);

        //Form internal code
        waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
          formModify();
          setHiddenFields();

          const showHideTags = document.querySelectorAll(".show-hide-tag");

          showHideTags.forEach(showHideTag => {
            showHideTag.addEventListener("click", function (event) {
              event.preventDefault();
              const hideTags = document.querySelectorAll(".hide-tag");
              hideTags.forEach(hideTag => hideTag.style.display = "block");
              this.style.display = "none";
            });
          });
        });

        // Lock Hero
        document.querySelector('.spz-6009 .js-hero-banner').insertAdjacentHTML("beforeend", `<div class="lock_hero">
          <span>Learn More <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 9L12.5 15L18.5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>`);
        document.querySelector('.spz-6009 .lock_hero span').addEventListener('click', function () {
          if (!document.body.classList.contains('show_content')) {
            document.body.classList.add('show_content');
            document.querySelector('.spz-6009.show_content > #components__content').scrollIntoView({
              block: "start",
              behavior: "smooth"
            });
          }
        });

      });
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
  // Add class in mktoFormRow using count
  var parentDiv = document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .gated-content__right .mktoForm');
  var childElements = parentDiv.children;
  for (var i = 0; i < childElements.length; i++) {
    var dynamicClass = 'field-' + (i + 1);
    childElements[i].classList.add(dynamicClass);
  }

  var formDiv = document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .gated-content__right .mktoForm');
  // Form Extra Titles
  if (formDiv && document.querySelectorAll('.form_title').length == 0) {
    formDiv.insertAdjacentHTML('beforebegin', `<h2 class="form_title">Get Gartner report</h2>`);
  }
  // form CTA Update
  var form_button = setInterval(() => {
    var textChng = document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .gated-content__right .mktoForm .mktoButtonRow .mktoButton');
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
  document.querySelector('#LblTitle').textContent = "Job Title";
  document.querySelector('#LblPhone').textContent = "Phone";
  document.querySelector('#Country option:first-child').textContent = "";
  document.querySelector('#LblCountry').textContent = "Country";

  document.querySelector('#Country').closest('.mktoFormCol').classList.add('select-wrap');


  // Change Field Position
  var email_field = document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .mktoForm .mktoFormRow.field-3');
  var lastname_field = document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .mktoForm .mktoFormRow.field-5');
  lastname_field.after(email_field);

  var optout_field = document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .mktoForm .mktoFormRow.field-11');
  var form_footer = document.querySelector('.spz-6009 .js-hero-banner .gated-content__container .mktoForm .mktoFormRow.field-10');
  form_footer.before(optout_field);

  var zip_row = document.createElement("div");
  zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
  zip_row.classList.add('mktoFormRow');
  zip_row.classList.add('mktoZipRow');

  var extraRow = document.querySelectorAll(".spz-6009 .js-hero-banner .gated-content__container .mktoForm .mktoFormRow")[7];
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
        if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#6009_spz_variant") {
          clearInterval(field_int);
        }
        if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') != '') {
          document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#6009_spz_variant');
        }
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#6009_spz_variant');
      }
    }, 100);
  });
}