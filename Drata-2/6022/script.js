var cssElement = document.createElement('style');
cssElement.type = 'text/css';
var cssCode = `.SPZ-6022 .how-works-section {
  padding-top: 0 !important;
}
.SPZ-6022 .spz-features {
  background: #EEF2F6;
  padding: 96px 0 0;
}
.SPZ-6022 .spz-features .spz-wrapper {
  width: 100%;
  max-width: 1344px;
  padding: 0 32px;
  margin: 0 auto;
}
.SPZ-6022 .spz-features .content-heading {
  color: #0C131A;
  text-align: center;
  font-family: Inter;
  font-size: 42px;
  font-style: normal;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -0.84px;
  margin-bottom: 0;
}
.SPZ-6022 .spz-features .splide {
  visibility: visible;
}
.SPZ-6022 .spz-features .features-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  padding: 16px 0 94px !important;
}
.SPZ-6022 .spz-features .feature-item {
  width: calc(100% / 3 - 21.66px);
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 32px 56px 0px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  margin-top: 32px;
}
.SPZ-6022 .spz-features .feature-item img {
  width: 100%;
}
.SPZ-6022 .spz-features .feature-content {
  padding: 17px 32px 32px;
}
.SPZ-6022 .spz-features .feature-content .feature-heading {
  color: #1D252E;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 16px;
}
.SPZ-6022 .spz-features .feature-content .feature-text {
  color: #697586;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
.SPZ-6022 section.review-section {
  padding: 54px 0 20px;
}
@media(max-width: 1023.98px) {
  .SPZ-6022 .spz-features .spz-wrapper {
    max-width: 768px;
  }
  .SPZ-6022 .spz-features .features-wrap {
    padding: 31px 0 97px !important;
  }
  .SPZ-6022 .spz-features .feature-item {
    width: calc(100% / 2 - 8px);
    margin-top: 16px;
  }
  .SPZ-6022 .spz-features .feature-content {
    padding: 16px 32px 31px;
  }
  .SPZ-6022 section.review-section {
    padding: 80px 0 15px;
  }
}
@media(max-width: 767.98px) {
  .SPZ-6022 .spz-features {
    padding: 64px 0 60px;
  }
  .SPZ-6022 .spz-features .spz-wrapper {
    max-width: 100%;
    padding: 0;
  }
  .SPZ-6022 .spz-features .content-heading {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.64px;
  }
  .SPZ-6022 .spz-features .features-wrap {
    flex-wrap: unset;
    padding: 0 !important;
  }
  .SPZ-6022 .spz-features .splide__track {
    padding: 39px 16px 50px !important;
  }
  .SPZ-6022 .spz-features .feature-item {
    width: 100%;
    max-width: 328px;
    margin: 0;
  }
  .SPZ-6022 .spz-features .feature-content {
    padding: 13px 24px 24px;
  }
  .SPZ-6022 .spz-features .feature-content .feature-heading {
    font-size: 20px;
    margin-bottom: 12px;
  }
  .SPZ-6022 .spz-features .splide__pagination {
    position: relative;
    padding: 0;
    bottom: unset;
    left: unset;
    margin-top: -10px;
  }
  .SPZ-6022 .spz-features .splide__pagination .splide__pagination__page {
    width: 12px;
    height: 12px;
    background: transparent;
    border: 1px solid #96A1B2;
    margin: 0 6px;
  }
  .SPZ-6022 .spz-features .splide__pagination .splide__pagination__page.is-active {
    background: #0580E8;
    border-color: #0580E8;
    transform: none;
  }
}
.SPZ-6022 .hbspt-form .submitted-message {
    font-size: 23px
}`;
cssElement.appendChild(document.createTextNode(cssCode));
document.head.appendChild(cssElement);

(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!body.classList.contains('SPZ-6022')) {
                    body.classList.add('SPZ-6022');
                    setHiddenFields();
                    waitForElm('.SPZ-6022 .review-section.desk').then(function () {
                        document.querySelector('.SPZ-6022 .footer').before(...['.review-section.desk', '.review-section.tab'].map(selector => document.querySelector(selector)));
                    });
                    const template_sectionSelector = `section.how-works-section`;
                    const template_position = "beforebegin";
                    const template_sliderSettings = {
                        type: 'loop',
                        gap: 16,
                        perPage: 1,
                        arrows: false,
                        autoWidth: true,
                        focus: 'center',
                    };
                    const template_sectionContent = {
                        sectionHeading: "Features",
                        features: [
                            {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6022/multi-framework_img.webp",
                                featureHeading: "Multi-<br/>Framework",
                                featureText: "Automated compliance for 18+ products and frameworks including SOC 2, ISO 27001, HIPAA, GDPR, & PCI."
                            },
                            {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6022/automated-evidence-collection_img.webp",
                                featureHeading: "Automated Evidence <br/>Collection",
                                featureText: "Collection documentation from your tech stack. Powered by hundreds of integrations and an open API."
                            },
                            {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6022/experts-assistance_img.webp",
                                featureHeading: "Experts <br/>Assistance",
                                featureText: "Step-by-step guidance from our team of compliance experts. 24/5."
                            },
                            {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6022/vendor-management_img.webp",
                                featureHeading: "Vendor <br/>Management",
                                featureText: "Streamline vendor security questionnaires. Store, send, and review answers."
                            },
                            {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6022/security-policies_img.webp",
                                featureHeading: "Security <br/>Policies",
                                featureText: "20+ customizable, auditor-approved policies. Streamline employee signing & documentation."
                            },
                            {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6022/247-monitoring_img.webp",
                                featureHeading: "24/7 <br/>Monitoring",
                                featureText: "Continuous compliance monitoring to identify issues early and stay in compliance."
                            }
                        ]
                    };
                    var splideScript = document.createElement('script');
                    splideScript.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
                    var splideStyle = document.createElement('link');
                    splideStyle.rel = 'stylesheet';
                    splideStyle.type = 'text/css';
                    splideStyle.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
                    document.body.appendChild(splideScript);
                    document.body.appendChild(splideStyle);

                    function addFeatures(content, whereToPut, template_sectionSelector, template_sliderSettings) {
                        const formTemplate = `<section class="spz-features">
              <div class="spz-wrapper">
                ${content.sectionHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${content.sectionHeading}</div>` : ""}
                ${content.features.length !== 0 ? `<div class="splide" role="group">
                    <div class="splide__track">
                      <div class="splide__list features-wrap">
                      ${content.features.map(item => {
                            return `<div class="splide__slide feature-item">
                          <img src=${item.imageURL} alt="${item.featureHeading.replace(/<br\s*\/?>/g, ' ')}" />
                          <div class="feature-content">
                            <div class="feature-heading">${item.featureHeading}</div>
                            <div class="feature-text">${item.featureText}</div>
                          </div>
                        </div>`}).join("")}
                      </div>
                    </div>
                  </div>` : ""}
              </div>
            </div>`;
                        waitForElm(template_sectionSelector).then(function () {
                            document.querySelector(template_sectionSelector).insertAdjacentHTML(whereToPut, formTemplate);
                        });
                        if (window.innerWidth < 768) {
                            new Splide('.splide', template_sliderSettings).mount();
                        }
                    }
                    splideScript.onload = function () {
                        addFeatures(template_sectionContent, template_position, template_sectionSelector, template_sliderSettings);
                    };
                }
            }
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.SPZ-6022')) {
                document.body.classList.remove("SPZ-6022");
            }
        }, 2000);
    }

    function setHiddenFields() {
        waitForElm('.SPZ-6022 .hero-section form.hs-form-private .hs_cro_test_1 .input .hs-input').then(function () {
            document.querySelector('.SPZ-6022 .hero-section form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', 'Variant_6022');
        });
    }

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
        if (window.location.pathname.indexOf("demo") !== -1) {
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
                characterData: true,
            });
        });
    }
})();