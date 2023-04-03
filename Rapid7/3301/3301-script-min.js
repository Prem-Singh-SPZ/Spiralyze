/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ctaButtonsSection": function() { return /* binding */ ctaButtonsSection; }
/* harmony export */ });
const ctaButtonsSection = () => {
  return `<div class="spz-cta-section">
                <div class="button-container">
                    <div class="first-cta">
                        <a href="/products/insightidr/try/" class="button btn-primary mdBtn" data-element-block="Product Wheel Block"
                            data-element-location="hero" data-element-label="get a free trial">
                            GET A FREE TRIAL
                        </a>
                        <span>No credit card necessary</span>
                    </div>
                    <div class="second-cta">
                        <a href="/products/insightidr/demo/" class="button btn-secondary mdBtn" data-element-block="Product Wheel Block"
                            data-element-location="hero" data-element-label="watch demo">
                            WATCH DEMO
                        </a>
                        <span>See how it all works</span>
                    </div>
                </div>
            </div>`;
};


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reviewSection": function() { return /* binding */ reviewSection; }
/* harmony export */ });
const reviewSection = () => {
  return `<section class=review-section>
                <div class=container>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <img class="br-logo" alt="TechValidate" src="https://res.cloudinary.com/spiralyze/image/upload/v1675317581/RAPID7/3301%20%7C%20Rapid7%20%7C%20XDR%20vs%20Comp%20%7C%20TechValidate%20Reviews/techvalidate-logo.svg">
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                                Rapid7's InsightIDR finally lets me sleep at night. Everything is being covered, even when I am not in the office. If something happens, I'll be notified. It really helped us to understand a lot of things that happen in our environment/network and made us feel more confident about our security posture.
                            <h5 class=profession>IT Administrator</h5>
                            <span class=profession-desc>Medium Enterprise Industrial Manufacturing Company</span>
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                            Rapid7 InsightIDR has been a wonderful tool that gives us insight into our user behaviors, as well as clearly alerting us to potential threats that exist in our network. Our team has become more efficient with fewer false positives and improved investigation times.
                            <h5 class=profession>Josh Petrucka</h5>
                            <span class=profession-desc>Security Analyst, Conexus Credit Union</span>
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                                Rapid7 InsightIDR vastly improved the visibility of our network, endpoints, and weak spots. We now have the ability to respond to threats we didn't see before we had InsightIDR.
                            <h5 class=profession>Robert Middleton</h5>
                            <span class=profession-desc>Network Administrator, CU4SD</span>
                        </div>
                    </div>
                </div>
            </section>`;
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cta_button_cta_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_review_section_review_sec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var intr = setInterval(function () {
  if (document.querySelector('body .productOverview') && !document.querySelector('body').classList.contains('spz-3301')) {
    clearInterval(intr);
    var cookieName = 'rapid7-validate_02022023';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
    document.body.classList.add('spz-3301');
  }

  // Reviews Section
  if (document.querySelectorAll('.spz-3301 .productOverview').length > 0) {
    document.querySelector('.spz-3301 .productOverview').insertAdjacentHTML('beforeend', (0,_components_review_section_review_sec__WEBPACK_IMPORTED_MODULE_1__.reviewSection)());
  }
  const ctaSectionHtml = (0,_components_cta_button_cta_buttons__WEBPACK_IMPORTED_MODULE_0__.ctaButtonsSection)();
  // CTA Section
  if (document.querySelectorAll('.spz-3301 .pageContent > section.customerLogos').length > 0) {
    document.querySelector('.spz-3301 .pageContent > section.customerLogos').insertAdjacentHTML('beforebegin', ctaSectionHtml);
  }

  // 3 Reasons Section
  if (document.querySelectorAll('.spz-3301 .pageContent > .richTextBlockWrap').length > 0) {
    document.querySelector('.spz-3301 .pageContent > .richTextBlockWrap').classList.add('reason-trust-section');
    document.querySelector('.spz-3301 .pageContent > .richTextBlockWrap .medium-10.medium-offset-1.large-8.large-offset-2.cell.pageBlock__content').classList.remove('medium-offset-1');
    document.querySelector('.spz-3301 .pageContent > .richTextBlockWrap .medium-10.large-8.large-offset-2.cell.pageBlock__content').classList.remove('large-offset-2');
    if (document.querySelector('.spz-3301 .reason-trust-section .grid-x.wrapper ol')) {
      document.querySelector('.spz-3301 .reason-trust-section .grid-x.wrapper ol').insertAdjacentHTML('afterend', ctaSectionHtml);
    }
  }
}, 100);
}();
/******/ })()
;