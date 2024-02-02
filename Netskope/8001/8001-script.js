var css = `
.netskope_8001 {
  font-size: 0;
}
.netskope_8001 .header .header__nav, .netskope_8001 .header .header__top-menu > *:not(.header__get-started), .netskope_8001 #components__content, .netskope_8001 .gated-content__banner, .netskope_8001 .gated-content__container .gated-content__tags ~ *, .netskope_8001 footer.v3-footer .v3-footer__logo, .netskope_8001 footer.v3-footer .v3-footer__menu {
  display: none;
}
.netskope_8001 .header__container-inner, .netskope_8001 div:not(.netskope-footer) .container {
  max-width: 1254px;
  padding: 0 32px;
  position: relative;
  z-index: 99;
}
/* Header CSS Start Here */
.netskope_8001 .header.has-promo-banner {
  top: 46px;
}
.netskope_8001 .header__container-inner .header__top {
  padding: 24px 0;
}
.netskope_8001 .header__top .header__logo {
  padding: 0;
}
.netskope_8001 .header__top .header__logo-image--white img {
  width: 157px;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
}
.netskope_8001 .header__top .header__top-menu {
  display: flex;
  align-items: center;
  width: 100%;
}
.netskope_8001 .header__top .header__get-started {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}
.netskope_8001 .header__top .header__get-started .btn {
  width: 100%;
  max-width: 119px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #ff8200;
  border: none;
  border-radius: 200px;
  font-family: Graphik;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  margin-left: auto;
}
.netskope_8001 .header__top .header__get-started .btn:hover {
  background: #fff;
}
@media (max-width: 1023.98px) {
  .netskope_8001 .header.has-promo-banner {
    top: 0;
 }
}
@media (max-width: 767.98px) {
  .netskope_8001 .header__container-inner {
    padding: 0 24px;
 }
  .netskope_8001 div:not(.netskope-footer) .container {
    padding: 0;
 }
  .netskope_8001 .header__container-inner .header__top {
    padding: 20px 0;
 }
  .netskope_8001 .header__top .header__logo-image--white img {
    width: 136px;
 }
  .netskope_8001 .header__top .header__get-started .btn {
    max-width: 91px;
    height: 32px;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
 }
}
/* Header CSS End Here */
/* Breadcrumbs CSS Start Here */
.netskope_8001 .gated-content {
  padding-top: 88px;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;
  height: 100%;
  background: #081a59 !important;
}
.netskope_8001 .gated-content:before {
  position: absolute;
  content: "";
  width: 1440px;
  height: 736px;
  top: 0;
  left: 0;
  background-image: url('//res.cloudinary.com/spiralyze/image/upload/v1704363964/netskope/8001/background_top_1.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
}
.netskope_8001 .gated-content__top {
  padding: 12px 0;
}
.netskope_8001 .gated-content__top .breadcrumbs {
  margin-bottom: 56px;
}
.netskope_8001 .gated-content.v3 .breadcrumbs .breadcrumbs__list {
  margin: 0 -16px;
}
.netskope_8001 .gated-content.v3 .breadcrumbs .breadcrumbs__item-link {
  font-size: 16px;
  line-height: 24px;
  margin: 0 16px;
}
.netskope_8001 .gated-content.v3 .breadcrumbs .breadcrumbs__item:before {
  left: -7px;
  top: 4px;
  content: url("//res.cloudinary.com/spiralyze/image/upload/v1704699162/netskope/8001/Chevron.svg");
  transform: none;
}
.netskope_8001 .gated-content.v3 .breadcrumbs .breadcrumbs__item:first-of-type:before {
  content: none;
}
.netskope_8001 .hero_inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-line-pack: start;
  align-content: flex-start;
}
@media (min-width: 1900px) {
  .netskope_8001 .gated-content::before {
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1704696178/netskope/8001/4k_resize_background_pattern_1.svg");
    width: 100%;
 }
}
@media (max-width: 1023.98px) {
  .netskope_8001 .gated-content.v3 .gated-content__top .breadcrumbs {
    margin-bottom: 36px;
 }
  .netskope_8001 .gated-content.v3 .breadcrumbs .breadcrumbs__list {
    margin: 0;
 }
  .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item:first-of-type .breadcrumbs__item-link {
    padding-left: 0;
    margin-left: 0;
 }
  .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item {
    max-height: 28px;
    overflow: hidden;
    font-size: 1rem;
 }
  .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item:last-of-type .breadcrumbs__item-link {
    pointer-events: none;
    word-break: break-all;
    max-width: 390px;
    height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-right: 0;
 }
  .netskope_8001.resources_whitepapers .breadcrumbs .breadcrumbs__list .breadcrumbs__item:last-of-type .breadcrumbs__item-link {
    max-width: 345px;
 }
}
@media (max-width: 767.98px) {
  .netskope_8001 .gated-content {
    padding-top: 69px;
 }
  .netskope_8001 .gated-content.v3 .breadcrumbs .breadcrumbs__item-link {
    font-size: 12px;
    line-height: 20px;
 }
  .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item:nth-child(3), .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item:nth-child(2) a {
    display: none;
 }
  .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item:nth-child(2)::after {
    content: "...";
    margin: 0 13px 0 16px;
    font-size: 1rem;
 }
  .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item:last-of-type {
    max-width: calc(100% - 121px);
 }
  .netskope_8001 .breadcrumbs .breadcrumbs__list .breadcrumbs__item:last-of-type .breadcrumbs__item-link {
    max-width: unset;
    margin-top: 4px;
 }
  .netskope_8001 .gated-content.v3 .gated-content__top .breadcrumbs {
    margin-bottom: 11px;
    padding: 0 24px;
 }
}
/* Breadcrumbs CSS End Here */
/* Hero CSS Start Here */
.netskope_8001 .gated-content__container {
  flex-wrap: wrap;
  flex-direction: row;
}
.netskope_8001 .gated-content__container .gated-content__left {
  order: 2;
  width: 49.2%;
  max-width: 585px;
  margin: 0;
}
.netskope_8001 .gated-content__container .gated-content__left .form-content-heading {
  color: #fff;
  font-family: Graphik;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin: 0;
  position: relative;
}
.netskope_8001 .gated-content__container .gated-content__left .form-content-heading:before {
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1704273630/netskope/8001/Min_Plus.svg");
  background-size: contain;
  background-repeat: no-repeat;
  top: -20px;
  left: -36px;
}
.netskope_8001 .gated-content__container .gated-content__left .gated-content__content .gated-content__label {
  color: #fff;
  font-family: Graphik;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
}
.netskope_8001 .gated-content__container .gated-content__left .gated-content__content .gated-content__tags {
  margin: 0 -8px -8px;
}
.netskope_8001 .gated-content__container .gated-content__left .gated-content__content .gated-content__tags a.ga__cta {
  color: #fff;
  text-align: center;
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 3px 15px;
  margin: 8px;
}
.netskope_8001 .gated-content__container .gated-content__left .rte {
  margin: 32px 0;
}
.netskope_8001 .gated-content__container .gated-content__left .gated-content__image {
  display: none;
}
.netskope_8001 .gated-content__container .gated-content__left p, .netskope_8001 .gated-content__container .gated-content__left ul {
  color: #fff;
  font-family: Graphik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 12px;
}
.netskope_8001 .gated-content__container .gated-content__left ul {
  padding-left: 24px;
  margin-top: -12px;
}
.netskope_8001 .gated-content__container .gated-content__left p a {
  text-decoration: underline;
  text-underline-position: under;
}
.netskope_8001 .gated-content__container .gated-content__right {
  order: 1;
  width: 42.5%;
  max-width: 504px;
  margin: 0;
}
.netskope_8001 .gated-content.js-hero-banner > .gated-content__image {
  width: 100%;
  height: 768px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
}
.netskope_8001 .gated-content.js-hero-banner > .gated-content__image:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('//res.cloudinary.com/spiralyze/image/upload/v1704698688/netskope/8001/Background_Bottom_Desktop_3.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.netskope_8001 img.hero-book-img {
  width: 100%;
  max-width: 1090px;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 99;
}
.netskope_8001.resources_whitepapers img.hero-book-img {
  max-width: 1438px;
}
.netskope_8001 .gated-content__right .gated-content__form {
  width: 100%;
  background: #fff;
  max-height: unset;
  border-radius: 24px;
  padding: 24px 32px 32px;
  position: relative;
}
.netskope_8001 .gated-content__right .gated-content__form:after {
  position: absolute;
  content: "";
  width: 96px;
  height: 163px;
  background-image: url('//res.cloudinary.com/spiralyze/image/upload/v1704276822/netskope/8001/Form-Arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  right: -67px;
  bottom: -163px;
}
.netskope_8001 .gated-content__right .gated-content__form .form_title {
  color: #081a59;
  text-align: center;
  font-family: Graphik;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 24px;
  padding: 0 5px;
}
.netskope_8001 .gated-content__right .gated-content__form #success-msg {
  text-align: center;
}
.netskope_8001 .gated-content__right .gated-content__form #success-msg h2 {
  margin-bottom: 0 !important;
}
@media (max-width: 1023.98px) {
  .netskope_8001 .gated-content__banner {
    display: flex;
 }
  .netskope_8001 .gated-content__banner .gated-content__info {
    max-width: 100%;
 }
  .netskope_8001 .gated-content__banner .gated-content__info .gated-content__type {
    display: none;
 }
  .netskope_8001 .gated-content__banner .gated-content__info .page-intro__resource-title {
    font-size: 48px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
 }
  .netskope_8001 .gated-content__banner .gated-content__thumbnail {
    display: none;
 }
  .netskope_8001 .gated-content__container .gated-content__right {
    width: 100%;
    max-width: 100%;
 }
  .netskope_8001 .gated-content__right .gated-content__form::after {
    right: 81px;
    bottom: -177px;
 }
  .netskope_8001 .gated-content.js-hero-banner > .gated-content__image {
    display: none;
 }
  .netskope_8001 .gated-content__container .gated-content__left {
    width: 100%;
    max-width: 100%;
    margin-top: 32px;
    position: relative;
 }
  .netskope_8001 .gated-content__container .gated-content__left:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    max-height: 600px;
    top: 0;
    left: 0;
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1704696033/netskope/8001/background_bottom_tablet_2.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
 }
  .netskope_8001 .gated-content__container .gated-content__left .form-content-heading {
    display: none;
 }
  .netskope_8001 .gated-content__container .gated-content__left .rte {
    margin: 0 0 32px 0;
 }
  .netskope_8001 .gated-content__container .gated-content__left .rte .gated-content__image {
    display: block;
    margin-bottom: 32px;
 }
  .netskope_8001 .gated-content__container .gated-content__left .rte .gated-content__image img {
    margin: 0;
 }
}
@media (max-width: 767.98px) {
  .netskope_8001 .gated-content__banner {
    display: none;
 }
  .netskope_8001 .gated-content__right .gated-content__form {
    margin: 0;
    padding: 24px 24px 32px;
 }
  .netskope_8001 .gated-content__right .gated-content__form::after {
    display: none;
 }
  .netskope_8001 .gated-content__container .gated-content__left {
    padding: 32px 24px 40px;
    margin: 0 auto;
 }
  .netskope_8001 .gated-content__container .gated-content__left:before {
    max-height: 505px;
    background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1702890000/netskope/8001/background_bottom.svg");
 }
  .netskope_8001 .gated-content__container .gated-content__left .form-content-heading {
    display: block;
    font-size: 32px;
    line-height: 40px;
 }
  .netskope_8001 .gated-content__container .gated-content__left .rte {
    max-width: 100%;
 }
  .netskope_8001.resources_whitepapers .gated-content__container .gated-content__left {
    padding: 32px 0 40px;
 }
  .netskope_8001.resources_whitepapers .gated-content__container .gated-content__left .form-content-heading, .netskope_8001.resources_whitepapers .gated-content__container .gated-content__left .gated-content__content {
    padding: 0 24px;
 }
  .netskope_8001.resources_whitepapers .gated-content__container .gated-content__left .rte > *:not(.gated-content__image) {
    padding: 0 24px;
 }
  .netskope_8001.resources_whitepapers .gated-content__container .gated-content__left .rte ul {
    margin-left: 24px;
 }
  .netskope_8001 .gated-content__container .gated-content__left .rte .gated-content__image {
    margin: 32px auto;
 }
}
/* Hero CSS End Here */
/*--- Form CSS Start Here ---*/
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 56px #fff inset !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm {
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
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoTemplateBox .welcomeback, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoTemplateBox a.mktoNotYou {
  color: #081a59 !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow.field-2 {
  display: none !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow {
  display: -webkit-inline-box !important;
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
  margin: 0;
  width: calc(50% - 6px) !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow.field-10, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow.field-11, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFormCol, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoButtonRow, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoTemplateBox {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap {
  position: relative;
  margin-bottom: 16px;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap:not(.single_checkbox) label.mktoLabel {
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
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-family: 'Graphik' !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap:not(.single_checkbox):hover label.mktoLabel {
  color: #081a59 !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.active.typing:not(.single_checkbox) label.mktoLabel, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.filled:not(.single_checkbox) label.mktoLabel {
  top: 6px;
  font-size: 12px !important;
  line-height: 20px !important;
  color: #7e8bba !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField {
  font-family: 'Graphik' !important;
  height: 56px !important;
  padding: 24px 15px 8px !important;
  border-radius: 24px !important;
  border: 1px solid rgba(8, 26, 89, 0.20) !important;
  background: #fff !important;
  color: #081a59 !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 24px !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
  caret-color: #00a9ce !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap select.mktoField {
  background-position: right 19px center !important;
  padding-right: 36px !important;
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron.svg") !important;
  background-size: 16px !important;
  background-repeat: no-repeat !important;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.typing select.mktoField {
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg") !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap select.mktoField option {
  background: inherit;
  color: inherit;
  border-bottom: inherit;
  padding: inherit;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.active.typing .mktoField, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField:focus {
  border-color: #081a59 !important;
}
.netskope_6001 .dark .mktoForm select#Country:focus {
  border: 1px solid #081a59 !important;
}
/* .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.typing .mktoField.mktoInvalid, .netskope_6001 .mktoForm .mktoFieldWrap.mktoRequiredField select#Country[aria-describedby="ValidMsgCountry"] */
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap .mktoField.mktoInvalid {
  border-color: #ff5b28 !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError {
  top: initial;
  bottom: initial !important;
  left: initial !important;
  right: initial !important;
  display: inline-block;
  margin: 0;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError .mktoErrorArrowWrap {
  display: none !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap .mktoError .mktoErrorMsg {
  margin: 2px 0 0 10px;
  padding: 0;
  color: #ff5b28;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  display: inline-block;
  bottom: 0;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox {
  margin: -4px 0 8px 0;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel {
  padding: 0 0 0 24px !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel::after {
  opacity: 0 !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel::before {
  width: 16px !important;
  height: 16px !important;
  border: 1px solid #ff8200 !important;
  border-radius: 4px !important;
  background: #fff !important;
  top: 2px !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel.single_checked::before {
  background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1701250536/netskope/6001/Checkbox_base.svg") !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  border: none !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p.p11 {
  width: 100%;
  font-family: 'Graphik' !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p a {
  color: #081a59 !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap.single_checkbox .mktoLabel p a:hover {
  text-decoration: underline !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoHtmlText .netskope-fm, .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoHtmlText .netskope-fm a {
  padding: 0 !important;
  color: #7e8bba !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Graphik' !important;
  text-decoration: none !important;
  border: none;
  margin: 0 !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoHtmlText .netskope-fm a {
  text-decoration: underline !important;
}
.netskope_6001 .dark .landing-page-v3__form-content .mktoForm .mktoFormCol .mktoFieldWrap a {
  text-underline-offset: 2px;
  padding: 0;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoButtonWrap {
  margin-top: 8px !important;
}
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoButtonWrap .mktoButton {
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
.netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoButtonWrap .mktoButton:hover {
  background: #fff !important;
  border-color: #081a59 !important;
}
@media (max-width: 767.98px) {
  .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow {
    width: 100% !important;
 }
  .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow .mktoFieldWrap {
    margin-bottom: 8px;
 }
  .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow.field-11 {
    margin-top: 6px !important;
 }
  .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoFormRow.field-11 p.p11 {
    margin-top: 3px;
 }
  .netskope_8001 .gated-content__right .gated-content__form form.mktoForm .mktoButtonWrap {
    margin-top: 10px !important;
 }
}
/*--- Form CSS End Here ---*/
/*--- Footer CSS Start Here ---*/
.netskope_8001 footer.v3-footer.netskope-footer {
  padding: 13px 0 46px;
}
.netskope_8001 footer.v3-footer.netskope-footer .v3-footer__bottom-menu {
  padding-top: 18px;
}
@media (max-width: 1023.98px) {
  .netskope_8001 footer.v3-footer.netskope-footer {
    padding: 27px 0 42px;
 }
  .netskope_8001 footer.v3-footer.netskope-footer .v3-footer__bottom-menu {
    padding-top: 17px;
 }
  .netskope_8001 footer.v3-footer.netskope-footer .v3-footer__bottom-menu .v3-footer__date {
    margin-top: 45px;
 }
}
@media (max-width: 767.98px) {
  .netskope_8001 footer.v3-footer.netskope-footer {
    padding: 16px 0 30px;
 }
  .netskope_8001 footer.v3-footer.netskope-footer .v3-social-icons {
    margin-top: 0px;
 }
  .netskope_8001 footer.v3-footer.netskope-footer .v3-footer__bottom-menu {
    padding-top: 14px;
 }
  .netskope_8001 footer.v3-footer.netskope-footer .v3-footer__bottom-menu .v3-footer__date {
    margin-top: 36px;
 }
}
/*--- Footer CSS End Here ---*/
`;

head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);

    if (!body.classList.contains('netskope_8001')) {
      body.classList.add('netskope_8001');

      waitForElm('.netskope_8001 .gated-content__top .gated-content__banner').then(function () {
        var heading = document.querySelector(".netskope_8001 .gated-content__banner .page-intro__resource-title").textContent;
  
        document.querySelector('.netskope_8001 .gated-content__container .gated-content__left').insertAdjacentHTML("afterbegin", `<h2 class="form-content-heading">`+heading+`</h2>`);

        var hero_book_image_html = `<div class="gated-content__image">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/whitepaper_image_desktop.webp" class="hero-book-img" alt="`+heading+`" title="`+heading+`">
        </div>`;

        document.querySelector('.netskope_8001 .gated-content__container .gated-content__left .rte').insertAdjacentHTML("afterbegin", hero_book_image_html);
        document.querySelector('.netskope_8001 .gated-content.js-hero-banner').insertAdjacentHTML("beforeend", hero_book_image_html);

        var BodyClasses = {
          "delivering-on-the-promise-of-100-legacy-vpn-retirement": "resources_whitepapers",
          "why-you-should-and-how-you-can-move-away-from-existing-dlp-programs": "resources_whitepapers",
        };
        var currentUrl = window.location.href;
        for (var key in BodyClasses) {
          if (currentUrl.includes(key)) {
            body.classList.add(BodyClasses[key]);
          }
        }
        
        var imageUrls = {
          "the-6-most-compelling-use-cases-for-complete-legacy-vpn-replacement": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/the_6_most_compelling_image.webp",
          "why-you-should-and-how-you-can-move-away-from-existing-dlp-programs": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/why_you_should_image.webp",
          "modern-data-loss-prevention-dlp-for-dummies": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/modern_data_loss_image.webp",
          "security-service-edge-sse-for-dummies": "//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/8001/security_service_image.webp"
        };
        for (var key in imageUrls) {
          if (currentUrl.includes(key)) {
            var imageUrl = imageUrls[key];
            document.querySelectorAll('.netskope_8001 img.hero-book-img').forEach(element => {
              element.src = imageUrl;
            });
          }
        }

        //Form internal code
        waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
          formModify();
          setHiddenFields();
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
  var parentDiv = document.querySelector('.netskope_8001 .gated-content__container .mktoForm');
  var childElements = parentDiv.children;
  for (var i = 0; i < childElements.length; i++) {
    var dynamicClass = 'field-' + (i + 1);
    childElements[i].classList.add(dynamicClass);
  }

  var formDiv = document.querySelector('.netskope_8001 .gated-content__container .mktoForm');
  var sub_heading = document.querySelector(".netskope_8001 .gated-content__banner .gated-content__type");
  var sub_heading_textContent = sub_heading.textContent || sub_heading.innerText;
  if (sub_heading_textContent == 'eBooks') {
    var processedText = sub_heading_textContent.replace('s', '');
  } else {
    var processedText = sub_heading_textContent;
  }

  // Form Extra Titles
	if (formDiv && document.querySelectorAll('.form_title').length == 0) {
		formDiv.insertAdjacentHTML('beforebegin', `<h2 class="form_title">Download `+processedText+`</h2>`);
	}
  // form CTA Update
  var form_button = setInterval(() => {
    var textChng = document.querySelector('.netskope_8001 .gated-content__container .mktoForm .mktoButtonRow .mktoButton');
    if (textChng) {
      textChng.innerText = 'Download Now';
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
  var email_field = document.querySelector('.netskope_8001 .gated-content__container .mktoForm .mktoFormRow.field-3');
  var lastname_field = document.querySelector('.netskope_8001 .gated-content__container .mktoForm .mktoFormRow.field-5');
  lastname_field.after(email_field);

  var zip_row = document.createElement("div");
	zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
	zip_row.classList.add('mktoFormRow');
	zip_row.classList.add('mktoZipRow');
	
	var extraRow = document.querySelectorAll(".netskope_8001 .gated-content__container .mktoForm .mktoFormRow")[7];
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
				if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#8003_spz_control") {
					clearInterval(field_int);
				}
				document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#8003_spz_control');
			}
		}, 100);
	});
}