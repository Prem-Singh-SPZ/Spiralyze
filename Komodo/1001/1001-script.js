console.log("test running")
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () {
    console.log("after dom load")
    if (!document.querySelector('.spz-1001')) {
        document.querySelector('body').classList.add('spz-1001')
        //targeted page
        if (window.location.href.indexOf('https://www.komodohealth.com/get-in-touch') > -1) {
            const loadJS = (url, implementationCode, location) => {
                var scriptTag = document.createElement('script');
                scriptTag.src = url;

                scriptTag.onload = implementationCode;
                scriptTag.onreadystatechange = implementationCode;

                location.appendChild(scriptTag);
            };
            function insertAfter(newNode, referenceNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
            function outerHeight(el) {
                const style = getComputedStyle(el);

                return (
                    el.getBoundingClientRect().height +
                    parseFloat(style.marginTop) +
                    parseFloat(style.marginBottom)
                );
            }
            function trigger(el, eventType) {
                if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
                    el[eventType]();
                } else {
                    const event =
                        typeof eventType === 'string'
                            ? new Event(eventType, { bubbles: true })
                            : eventType;
                    el.dispatchEvent(event);
                }
            }
            const getMaxQuoteHeight = () => {
                let maxHeight = 0;
                for (let i = 0; i < document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc').length; i++) {
                    document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc')[i].removeAttribute("style");
                }
                for (let i = 0; i < document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc').length; i++) {
                    if (!maxHeight) {
                        maxHeight = document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc')[i].offsetHeight;
                    } else {
                        if (maxHeight <= document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc')[i].offsetHeight) {
                            maxHeight = document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc')[i].offsetHeight;
                        }
                    }
                }
                return maxHeight;
            }
            const adjustQuoteHeight = () => {
                const maxHeight = getMaxQuoteHeight()
                for (let i = 0; i < document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc').length; i++) {
                    document.querySelectorAll('body .new-wrapper .section3 .slider-wrapper .desc')[i].setAttribute('style', 'height:' + maxHeight + 'px');
                }
            }
            const gb_load_css = (path) => {
                let css = document.createElement('link');
                css.rel = 'stylesheet';
                css.media = 'all';
                css.href = path;

                document.getElementsByTagName('head')[0].appendChild(css);
            }
            gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
            document.querySelector('body').classList.add('run-var')
            document.querySelector('[data-global-resource-path]').classList.add("hide")
            document.querySelector('body').insertAdjacentHTML('afterbegin', `
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/background_2.webp" alt="background" width="0" height="0" style="display:none"/>
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/background_1.webp" alt="background" width="0" height="0" style="display:none"/>
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/background.webp" alt="background" width="0" height="0" style="display:none"/>
    <div class="new-wrapper">
      <div class="section1">
        <div class="wrapper">
          <div class="header">
          <a href="https://www.komodohealth.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/Komodo-Logo.png" alt="Komodo Health logo" width="117" height="32" /></a>
          </div>
          <div class="form-wrapper">
            <div class="text-section">
              <div class="small">Complete Real-World Data and Innovative SaaS</div>
              <div class="big">Insights You Can Trust to Drive Decision Making</div>
              <div class="list">
                <div class="child"> 
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/Icon-1.png" alt="Healthcare Map Icon" width="32" height="32"/>
                  <div class="desc"><strong>The Healthcare Map&trade;:</strong> Track the longitudinal and real-time patient journeys of 330+ million unique individuals across HCPs, HCOs, and sites of care.</div>
                </div>
                <div class="child">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/Icon-2.png" alt="Patient Journey Icon" width="32" height="32"/>
                  <div class="desc"><strong>MapEnhance:</strong> Increase your understanding of the patient population with lab, EHR, genomics, race and ethnicity, mortality, insurance, and SDoH insights.</div>
                </div>
                <div class="child">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/Icon-3.png" alt="Analytics Icon" width="32" height="32"/>
                  <div class="desc"><strong>AI-Driven SaaS:</strong> Accelerate speed-to-insights with our suite of fit-for-purpose solutions for Life Sciences, payers, patient advocacy organizations, and more. </div>
                </div>
              </div>
            </div>
            <div class="form-section">
              <div class="title">Contact Us</div>
              <div id="new-form-wrapper"><div class='lds-dual-ring'></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section2">
        <div class="wrapper">
          <picture>
            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/company-logos-mobile.png">
            <source media="(max-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/company-logos-tablet.png">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/company-logos-desktop.png" alt="Company Logos" width="1120" height="36">
          </picture>
        </div>
      </div>
      <div class="section3">
        <div class="wrapper">
          <div class="title">What Our Partners Say</div>
          <div class="slider-wrapper">
            <section class="splide splide1">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="child">
                      <div class="left">
                        <picture>
                          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/ava-1-mob.jpg">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/pp-1.png" alt="Michael Townsend" width="71" height="80" />
                        </picture>
                        <div class="mobile-quote">“Komodo's full-stack platform approach enables a comprehensive foundation for healthcare analytics, allowing Life Science and healthcare companies to generate critical insights across the industry.”</div>
                        <div class="text">
                          <div class="name">Michael Townsend</div>
                          <div class="job-title">Research Director<span class="mobile">,</span> <br />Life Sciences Commercial Strategies<span class="mobile">, IDC</span></div>
                        </div>
                        <div class="logo">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1702358750/KomodoHealth/1001/logo-1.svg" alt="International Data Corporation" width="98" height="32" />
                        </div>
                      </div>
                      <div class="right">
                        <div class="desktop-quote">“Komodo's full-stack platform approach enables a comprehensive foundation for healthcare analytics, allowing Life Science and healthcare companies to generate critical insights across the industry.”</div>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child child2">
                      <div class="left">
                        <picture>
                          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/ava-3-mob.jpg">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/pp-2.png" alt="Joey Mattingly" width="71" height="80" />
                        </picture>
                        <div class="mobile-quote">“With Komodo's research-grade insights and technology, we will now have unprecedented visibility into the full range of factors that contribute to healthcare outcomes, including the historically overlooked role of social determinants.”</div>
                        <div class="text">
                          <div class="name">Joey Mattingly</div>
                          <div class="job-title">PharmD, MBA, PhD, Associate Professor </div>
                        </div>
                        <div class="logo">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1702358750/KomodoHealth/1001/logo-2.svg" alt="University of Maryland" width="64" height="64" />
                        </div>
                      </div>
                      <div class="right">
                        <div class="desktop-quote">“With Komodo's research-grade insights and technology, we will now have unprecedented visibility into the full range of factors that contribute to healthcare outcomes, including the historically overlooked role of social determinants.”</div>
                      </div>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="child child3">
                      <div class="left">
                        <picture>
                          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/ava-mob-5.jpg">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/pp-3.png" alt="Tom Haskell" width="71" height="80" />
                        </picture>
                        <div class="mobile-quote">“Komodo allows us to unlock richer insights by integrating our own data with the Healthcare Map, all on the Sentinel platform. In our experience with real-world-evidence research, this technology has played a pivotal role in offering a timely, comprehensive, and accurate view of patient journeys to drive evidence around disease burden and health outcomes.”</div>
                        <div class="text">
                          <div class="name">Tom Haskell</div>
                          <div class="job-title">Global Head of Innovation, Data, and Analytics</div>
                        </div>
                        <div class="logo">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1702358751/KomodoHealth/1001/logo-3.svg" alt="Kantar" width="129" height="24" />
                        </div>
                      </div>
                      <div class="right">
                        <div class="desktop-quote">“Komodo allows us to unlock richer insights by integrating our own data with the Healthcare Map, all on the Sentinel platform. In our experience with real-world-evidence research, this technology has played a pivotal role in offering a timely, comprehensive, and accurate view of patient journeys to drive evidence around disease burden and health outcomes.”</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <div class="arrow-left"><img src="//res.cloudinary.com/spiralyze/image/upload/v1702358601/KomodoHealth/1001/left-arrow-1.svg" alt="Left Arrow" width="48" height="48"/></div>
            <div class="arrow-right"><img src="//res.cloudinary.com/spiralyze/image/upload/v1702358633/KomodoHealth/1001/right-arrow-1.svg" alt="Right Arrow" width="48" height="48"/></div>
          </div>
        </div>
      </div>
      <div class="section4 new-footer">
        <div class="text">&copy;2024 All Rights Reserved | Komodo Health, Inc.</div>
      </div>
    </div>
    `);

            loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
                let updateHeight = () => {
                    let slide = splide.Components.Slides.getAt(typeof (newIndex) == 'number' ? newIndex : splide.index).slide;
                    slide.parentElement.parentElement.style.height = outerHeight(slide) + 76 + 'px';
                };
                var splide = new Splide('body .new-wrapper .section3 .slider-wrapper .splide1', {
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    arrows: false,
                    autoHeight: true,
                    pagination: true,

                });
                setTimeout(function () {
                    splide.mount()

                    splide.on("move", function (e) {
                        updateHeight()
                        document.querySelector('body .new-wrapper .section3 .slider-wrapper').classList.remove("active1", "active2", "active3")
                        document.querySelector('body .new-wrapper .section3 .slider-wrapper').classList.add("active" + (parseInt(splide.index) + 1))

                    })
                    splide.on("resize", function (e) {
                        updateHeight()

                    })
                    document.querySelector('body .new-wrapper .section3 .slider-wrapper').classList.add("active1")
                    updateHeight()
                }, 200)
                document.querySelector('body .new-wrapper .section3 .slider-wrapper .arrow-left img').addEventListener("click", function () {
                    splide.go('<');
                })
                document.querySelector('body .new-wrapper .section3 .slider-wrapper .arrow-right img').addEventListener("click", function () {
                    splide.go('>');
                })
            }, document.body)
            document.querySelector('body #popup_contact_us .wcs-pform').remove()
            document.querySelector('body #popup_connect .wcs-pform').remove()
            document.querySelector('body #popup_contact_us .wcs-col-12').innerHTML = `
    <div class="wcs-pform">
      <div class="wcs-popup-heading">
        <h2>Contact Us</h2>
      </div>
    </div>
    `
            let i = 0;
            const CROInterval = setInterval(() => {
                if (document.querySelector('body #new-form-wrapper input[name="cro1"]')) {
                    clearInterval(CROInterval)
                    document.querySelector('body #new-form-wrapper input[name="cro1"]').value = "#1001_variant"
                }
                i++;
                if (i > 6) {
                    clearInterval(CROInterval)
                }
            }, 500);
            loadJS('//js.hsforms.net/forms/embed/v2.js', function () {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "6374024",
                    formId: "89116499-15d1-4cd0-b724-7a46e68cf8f0",
                    target: 'body #new-form-wrapper',
                    isInsideFrame: true,
                    inlineMessage: "Thanks for submitting the form.",
                    onFormSubmitted: function ($form) {
                        console.log('Report conversion...');
                        gtag_report_conversion();
                    },
                    onFormReady: function ($form) {
                        if (document.querySelector('#new-form-wrapper .hs_firstname')) {
                            document.querySelector('body #new-form-wrapper .hs_firstname').classList.add("width50", "clear");
                            document.querySelector('body #new-form-wrapper .hs_lastname').classList.add("width50", "with-margin");
                            document.querySelector('body #new-form-wrapper .hs_company').classList.add("width50", "clear");
                            document.querySelector('body #new-form-wrapper .hs_jobtitle').classList.add("width50", "with-margin");
                            document.querySelector('body #new-form-wrapper .hs_email').classList.add("width50", "clear");
                            document.querySelector('body #new-form-wrapper .hs_phone').classList.add("width50", "with-margin");
                            document.querySelector('body #new-form-wrapper .hs_message').classList.add("clear");
                            document.querySelector('body #new-form-wrapper .hs_consent_countries').classList.add("clear");
                            document.querySelector('body #new-form-wrapper .hs-richtext').classList.add("clear", "pp-parent");
                            document.querySelector('body #new-form-wrapper .hs_submit').classList.add("clear", "submit-parent");

                            document.querySelector('body #new-form-wrapper .hs_company label span').innerHTML = 'Company';
                            document.querySelector('body #new-form-wrapper .hs_phone label span').innerHTML = 'Phone (optional)';
                            document.querySelector('body #new-form-wrapper .hs_consent_countries label span').innerHTML = 'Country';
                            document.querySelector('body #new-form-wrapper .hs_consent_countries select').value = 'United States'
                            trigger(document.querySelector('body #new-form-wrapper .hs_consent_countries select'), 'change');
                            trigger(document.querySelector('body #new-form-wrapper .hs_consent_countries select'), 'blur');
                            document.querySelector('body #new-form-wrapper .hs_consent_countries select option:first-child').remove();
                            document.querySelector('body #new-form-wrapper .hs_consent_countries').classList.add("hasValue");
                            document.querySelector('body #new-form-wrapper .hs_submit input').value = "SUBMIT";
                            document.querySelector('body #new-form-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
                            const step1Checking = setInterval(function () {
                                if (document.querySelector('body #new-form-wrapper .hs_firstname input').value != "" &&
                                    document.querySelector('body #new-form-wrapper .hs_lastname input').value != "" &&
                                    document.querySelector('body #new-form-wrapper .hs_company input').value != "" &&
                                    document.querySelector('body #new-form-wrapper .hs_jobtitle input').value != "") {
                                    clearInterval(step1Checking);
                                    document.querySelector('body #new-form-wrapper').classList.add("step2")
                                }
                            }, 200)
                        }
                        else {
                            document.querySelector('body #new-form-wrapper').classList.add("step2")
                            if (document.querySelector('body #new-form-wrapper .hs_email')) {
                                document.querySelector('body #new-form-wrapper .hs_email label span').innerHTML = 'Email';
                                document.querySelector('body #new-form-wrapper .hs_email').classList.add("clear");
                            }
                            if (document.querySelector('body #new-form-wrapper .hs_message')) {
                                document.querySelector('body #new-form-wrapper .hs_message').classList.add("clear");
                            }
                            if (document.querySelector('body #new-form-wrapper .hs_phone')) {
                                document.querySelector('body #new-form-wrapper .hs_phone label span').innerHTML = 'Phone (Optional)';
                            }
                            document.querySelector('body #new-form-wrapper .hs_submit input').value = "SUBMIT";
                        }
                        var allInput = document.querySelectorAll('body #new-form-wrapper .hs-input');
                        function errorState(item) {
                            var i = 0;
                            var errorInterval = setInterval(() => {
                                if (item.parentElement.parentElement.querySelector('.hs-error-msgs')) {
                                    item.parentElement.parentElement.classList.add('hasError');
                                }
                                else {
                                    item.parentElement.parentElement.classList.remove('hasError');
                                }
                                if (i == 100) {
                                    clearInterval(errorInterval);
                                }
                                i++
                            }, 10);
                        }
                        function labelChange(e) {
                            if (e.value == '' || e.value == null) {
                                e.parentElement.parentElement.classList.remove("hasValue");
                            } else if (e.value != '' || e.value != null) {
                                e.parentElement.parentElement.classList.add("hasValue");
                            }
                        }
                        allInput.forEach(function (e) {
                            e.addEventListener('focus', () => {
                                e.parentElement.parentElement.classList.add("focus");
                                errorState(e);
                            }, true);
                            e.addEventListener('blur', () => {
                                labelChange(e);
                                e.parentElement.parentElement.classList.remove("focus");
                                errorState(e);
                            }, true);
                            e.addEventListener('change', () => {
                                labelChange(e);
                                errorState(e);
                            }, true);
                            e.addEventListener('keyup', () => {
                                errorState(e);
                            }, true);
                            labelChange(e);
                            errorState(e);
                        })
                        document.querySelector('body #new-form-wrapper .hs_submit input').addEventListener("click", function () {
                            allInput.forEach(function (e) {
                                errorState(e);
                            })
                            if (document.querySelector('body #new-form-wrapper .hs_consent_countries select')) {
                                trigger(document.querySelector('body #new-form-wrapper .hs_consent_countries select'), 'change');
                            }
                            let i = 0;
                            const submitInterval = setInterval(() => {
                                if (document.querySelector('body #new-form-wrapper .hs_submit input').value != "SUBMIT") {
                                    clearInterval(submitInterval)
                                    document.querySelector('body #new-form-wrapper .hs_submit input').value = "SUBMIT";
                                }
                                i++;
                                if (i > 80) {
                                    clearInterval(submitInterval)
                                }
                            }, 5);
                        })
                        document.querySelector('body #new-form-wrapper .hs_message textarea').addEventListener("keypress", function (e) {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                document.querySelector('body #new-form-wrapper .hs_submit input').click()
                            }
                        });
                    },
                });
            }, document.body);
        }
        //non targeted page
        else {
            let elementArray = [];
            for (let i = 0; i < document.querySelectorAll('a[href="#popup_contact_us"]').length; i++) {
                elementArray[i] = document.querySelectorAll('a[href="#popup_contact_us"]')[i];
            }
            for (let i = 0; i < elementArray.length; i++) {
                elementArray[i].setAttribute("href", "https://www.komodohealth.com/get-in-touch");
                elementArray[i].removeAttribute("rel");
            }
        }
    }
})
