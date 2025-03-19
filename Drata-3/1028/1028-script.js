(function () {
  function loadTest() {
    document.body.classList.add('spz-1028');

    const hfInt = setInterval(() => {
      if (document.querySelectorAll('.form-wrap [class$="Modal-modalContentContainer"]').length == 0 && document.querySelector('.MuiModal-root[class$="MuiModal-root"] [class$="Modal-modalContentContainer"]')) {
        clearInterval(hfInt);

        const existingDiv = document.querySelector('.MuiModal-root[class$="MuiModal-root"] [class$="Modal-modalContentContainer"]');
        const createDiv = document.createElement('div');
        createDiv.className = 'form-wrap';
        existingDiv.parentNode.insertBefore(createDiv, existingDiv.nextSibling);

        const modalContentDiv = document.querySelector('[class$="Modal-modalContentContainer"]');
        createDiv.appendChild(modalContentDiv);

        if (document.querySelector('.form-wrap [class$="Modal-modalContentContainer"]')) {
          document.querySelector('.form-wrap [class$="Modal-modalContentContainer"]').insertAdjacentHTML('afterend', `
            <div class="hero-right-section">
                <div class="hero-content-wrapper">
                    <div class="hero-content-list">
                        <ul>
                            <li><strong>Fast Compliance.</strong> Connects to your stack and scans hardware and user data in minutes. Identifies compliance gaps & suggests fixes.</li>
                            <li><strong>Audit Trails.</strong> Keep records of access logs, system configurations, and more. Generate reports that demonstrate compliance.</li>
                            <li><strong>Integrations.</strong> Integrates with AWS, Azure, Okta, Google Workspace, GitHub, QuickBooks, Jira, Asana, CrowdStrike and 230+ more.</li>
                        </ul>
                    </div>
                    <div class="hero-img-comp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/1028/deskop_img.webp" alt="My vendors">
                    </div>

                    <div class="social-proof-wrapper">
                      <div class="sp-title">Trusted by 16,000+ customers worldwide</div>
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/1028/social-proof-1440.svg">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/1028/social-proof-768.svg">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/1028/social-proof-360.svg">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/1028/social-proof-1440.svg" alt="Social Proof" class="social-proof-img">
                        </picture>
                    </div>
                </div>
            </div>`);
        }

        // Back arrow icon
        if (document.querySelector('.form-wrap button[aria-label="back"]')) {
          document.querySelector('.form-wrap button[aria-label="back"]').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_24228_241)">
                <path d="M12.1998 0L14.2443 2.03667L6.15326 10.1111H23.7998V13H6.15326L14.2443 21.0744L12.1998 23.1111L0.599785 11.5556L12.1998 0Z" fill="#96A1B2"/>
              </g>
              <defs>
                <clipPath id="clip0_24228_241">
                  <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/>
                </clipPath>
              </defs>
            </svg>`;
        }

        submitTestDetails();

        // Control background video iphone issue fix
        waitForElm('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').then(function () {
          if (document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video')) {
            document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').setAttribute('playsinline', '');
          }
        });

        if (document.querySelector('.form-wrap [class$="Form-formOuterContainer"] p')) {
          document.querySelector('.form-wrap [class$="Form-formOuterContainer"] p').insertAdjacentHTML('afterend', `<div class="star-rating dis-flex align-items-center"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/8001/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/1028/stars.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.8</strong> (900+ reviews)</span></div>`);
        }

        // Update CTA button text and icon
        const btnInt = setInterval(() => {
          document.querySelectorAll('form.hs-form').forEach(cta_el => {
            if (cta_el.querySelector('.hs_submit button[type="submit"]') && cta_el.querySelector('.hs_submit button[type="submit"]').textContent.includes('Get Started')) {
              cta_el.querySelector('.hs_submit button[type="submit"]').innerHTML = '<span>Get Started</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4L10 8L6 12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>';
              // clearInterval(btnInt);
            }
          });
        }, 100);

        // Update input field label text
        const inpInt = setInterval(() => {
          const label_elm = '.form-wrap .hs-source__inbound_demo_ label > span';

          if (document.querySelector(label_elm) && document.querySelector(`${label_elm}:first-child`).textContent.includes('Drata')) {
            if (document.querySelector(label_elm).textContent.includes('Drata')) {
              document.querySelector(`${label_elm}:first-child`).textContent = 'How did you hear about us?';
              clearInterval(inpInt);
            }
          }
        }, 100);

        setTimeout(() => {
          clearInterval(btnInt);
          clearInterval(inpInt);
        }, 5000);


        // Check if .hs-form-field[style*="display: block"] count is more than 1 then add class .full-expand to .form-wrap
        // const formInt = setInterval(() => {
        //   if (document.querySelectorAll('.form-wrap .hs-form-field[style*="display: block"]').length > 1) {
        //     clearInterval(formInt);
        //     document.querySelector('.form-wrap').classList.add('full-expand');
        //   }
        // }, 100);

        // If clearbit is not loaded then add .full-expand class to .form-wrap
        // setTimeout(() => {
        //   if (typeof (clearbit) == 'undefined') {
        //     document.querySelector('.form-wrap').classList.add('full-expand');
        //   }
        // }, 2000);
      }

      bgCoverCheck();
      window.addEventListener('resize', () => {
        bgCoverCheck();
      });

    }, 100);
  }

  function bgCoverCheck() {
    if (window.innerHeight > 1080) {
      document.body.classList.add('bg-cover-spz');
    } else {
      document.body.classList.remove('bg-cover-spz');
    }
  }

  //Passing test details to hidden fields
  function submitTestDetails() {
    setTimeout(() => {
      if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input')) {
        document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '1028_Variant');
      }
    }, 2000);
  }

  // Generic
  history.pushState = (function (f) {
    return function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('pushstate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.pushState);
  history.replaceState = (function (f) {
    return function replaceState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.replaceState);

  window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
  });
  window.addEventListener('locationchange', function () {
    url = location.href;
    urlCheck(url);
  });

  let url = location.href;
  urlCheck(url);
  function urlCheck(url) {
    let testURL = '';

    if (window.location.href.indexOf('https://drata.com/demo') > -1) {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      if (document.querySelectorAll('.form-wrap').length == 0) {
        loadTest();
      }
    } else {
      removeTest();
    }
  }

  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
      currentUrl.slice(0, currentUrl.indexOf("#")) :
      currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
      specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
      specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?") ?
        currentUrl.slice(0, currentUrl.indexOf("?")) :
        currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
  }

  function removeTest() {
    if (document.body.classList.contains('spz-1028')) {
      document.body.classList.remove('spz-1028');
    }
    if (document.querySelectorAll('.form-wrap').length > 0) {
      document.querySelector('.form-wrap').remove();
    }
  }

  if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari');
  }

  function waitForElm(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

})();
