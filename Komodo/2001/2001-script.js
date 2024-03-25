console.log("Test Running...")
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {
  console.log("DOM ready")
  if (!document.querySelector('.spz-2001')) {
    document.querySelector('body').classList.add('spz-2001')
    //targeted page
    if (window.location.href.indexOf('https://www.komodohealth.com/get-a-demo') > -1) {
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
        for (let i = 0; i < document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc').length; i++) {
          document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc')[i].removeAttribute("style");
        }
        for (let i = 0; i < document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc').length; i++) {
          if (!maxHeight) {
            maxHeight = document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc')[i].offsetHeight;
          } else {
            if (maxHeight <= document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc')[i].offsetHeight) {
              maxHeight = document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc')[i].offsetHeight;
            }
          }
        }
        return maxHeight;
      }
      const adjustQuoteHeight = () => {
        const maxHeight = getMaxQuoteHeight()
        for (let i = 0; i < document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc').length; i++) {
          document.querySelectorAll('.spz-2001 .new-wrapper .section3 .slider-wrapper .desc')[i].setAttribute('style', 'height:' + maxHeight + 'px');
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
              <div class="small">Healthcare and patient analytics software</div>
              <div class="big">Get Real-World Clinical Data
              for 330+ Million Patients</div>
              <div class="list">
                <div class="child"> 
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/Icon-1.png" alt="Healthcare Map Icon" width="32" height="32"/>
                  <div class="desc"><strong>Healthcare Data:</strong> View provider, treatment, labs results, hospital records, payers, ethnicity, and other clinical data. 15 million new encounters daily.</div>
                </div>
                <div class="child">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/Icon-2.png" alt="Patient Journey Icon" width="32" height="32"/>
                  <div class="desc"><strong>Patient Cohorts:</strong> Create patient cohorts based on any criteria. Get alerts for new patient and provider opportunities. Engage via preferred channels.</div>
                </div>
                <div class="child">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/1001/Icon-3.png" alt="Analytics Icon" width="32" height="32"/>
                  <div class="desc"><strong>Analytics:</strong> Generate reports on patient populations, treatment pathways, outcomes, and more. Forecast trends. Demonstrate therapeutic impact.</div>
                </div>
              </div>
            </div>
            <div class="form-section">
              <div class="title">Get a Demo</div>
              <div class="review-wrapper">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1702395225/komodohealth/2004/frame_5597.svg" alt="Star Review" width="116" height="20">
        <div class="text"><span class="black">4.8</span> (678 reviews)</div>
      </div>
              <div id="new-formDemo-wrapper"><div class='lds-dual-ring'></div></div>
              <div class="step1-wrapper step-wrapper">
    <div class="sub">What best describes you? </div>
    <div class="option-wrapper column3">
      <div class="option continue">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-1.svg" class="default" width="32" height="32" alt="Life Sciences"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-1-h.svg" class="hover" width="32" height="32" alt="Life Sciences hover"/>
        </div>
        <div class="text">Life Sciences </div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon1-2.svg" class="default" width="32" height="32" alt="Consultancies"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-2-h.svg" class="hover" width="32" height="32" alt="Consultancies hover"/>
        </div>
        <div class="text">Consultancies</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon1-3.svg" class="default" width="32" height="32" alt="Partnerships"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon1-3-h.svg" class="hover" width="32" height="32" alt="Partnerships hover"/>
        </div>
        <div class="text">Partnerships</div>
      </div>
    </div>
    <div class="option-wrapper column2 no-margin-bottom">
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735377/KomodoHealth/2004/icon1-4.svg" class="default" width="32" height="32" alt="Payers"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735377/KomodoHealth/2004/icon1-4-h.svg" class="hover" width="32" height="32" alt="Payers hover"/>
        </div>
        <div class="text">Payers</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-5.svg" class="default" width="32" height="32" alt="Other"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon1-5-h.svg" class="hover" width="32" height="32" alt="Other hover"/>
        </div>
        <div class="text">Other</div>
      </div>
    </div>
    <div class="error-message">Please choose one answer</div>
    <div class="next next-1">NEXT</div>
  </div>
  <div class="step2-wrapper step-wrapper hide">
    <div class="sub">What best describes you? </div>
    <div class="option-wrapper column3">
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon2-1.svg" class="default" width="32" height="32" alt="Clinical Development"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon2-1-h.svg" class="hover" width="32" height="32" alt="Clinical Development hover"/>
        </div>
        <div class="text">Clinical Development </div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-2.svg" class="default" width="32" height="32" alt="Commercial"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon2-2-h.svg" class="hover" width="32" height="32" alt="Commercial hover"/>
        </div>
        <div class="text">Commercial</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-3.svg" class="default" width="32" height="32" alt="HEOR"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735379/KomodoHealth/2004/icon2-3-h.svg" class="hover" width="32" height="32" alt="HEOR hover"/>
        </div>
        <div class="text">HEOR</div>
      </div>
    </div>
    <div class="option-wrapper column3 no-margin-bottom">
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-4.svg" class="default" width="32" height="32" alt="Market Access"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-4-h.svg" class="hover" width="32" height="32" alt="Market Access hover"/>
        </div>
        <div class="text">Market Access </div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-5.svg" class="default" width="32" height="32" alt="Medical Affairs"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-5-h.svg" class="hover" width="32" height="32" alt="Medical Affairs hover"/>
        </div>
        <div class="text">Medical Affairs</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-6.svg" class="default" width="32" height="32" alt="Other"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-6-h.svg" class="hover" width="32" height="32" alt="Other hover"/>
        </div>
        <div class="text">Other</div>
      </div>
    </div>
    <div class="error-message">Please choose one answer</div>
    <div class="next next-2">NEXT</div>
  </div>
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

      document.querySelector('.spz-2001 .form-wrapper .form-section .step-wrapper .next-1').addEventListener("click", function () {
        if (!(document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper .selected'))) {
          document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper .error-message').classList.add('show');
        } else {
          if (document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper .selected').classList.contains('continue')) {
            document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper').classList.add("hide");
            document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper').classList.remove("hide")
          } else {
            document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper').classList.add("hide");
            document.querySelector('.spz-2001 #new-formDemo-wrapper').classList.add("show")
          }
        }
      })
      document.querySelector('.spz-2001 .form-wrapper .form-section .step-wrapper .next-2').addEventListener("click", function () {
        if (!(document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper .selected'))) {
          document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper .error-message').classList.add('show');
        } else {
          document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper').classList.add("hide");
          document.querySelector('.spz-2001 #new-formDemo-wrapper').classList.add("show")
        }
      })
      document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper').addEventListener("click", function (e) {
        if (e.target.closest('.option') && !e.target.closest('.option').classList.contains('selected')) {
          if (document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper .selected')) {
            document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper .selected').classList.remove('selected')
          }
          if (document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper .error-message.show')) {
            document.querySelector('.spz-2001 .form-wrapper .form-section .step1-wrapper .error-message.show').classList.remove("show")
          }
          e.target.closest('.option').classList.add("selected")
        }
      })
      document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper').addEventListener("click", function (e) {
        if (e.target.closest('.option') && !e.target.closest('.option').classList.contains('selected')) {
          if (document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper .selected')) {
            document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper .selected').classList.remove('selected')
          }
          if (document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper .error-message.show')) {
            document.querySelector('.spz-2001 .form-wrapper .form-section .step2-wrapper .error-message.show').classList.remove("show")
          }
          e.target.closest('.option').classList.add("selected")
        }
      })

      loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
        let updateHeight = () => {
          let slide = splide.Components.Slides.getAt(typeof (newIndex) == 'number' ? newIndex : splide.index).slide;
          slide.parentElement.parentElement.style.height = outerHeight(slide) + 76 + 'px';
        };
        var splide = new Splide('.spz-2001 .new-wrapper .section3 .slider-wrapper .splide1', {
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
            document.querySelector('.spz-2001 .new-wrapper .section3 .slider-wrapper').classList.remove("active1", "active2", "active3")
            document.querySelector('.spz-2001 .new-wrapper .section3 .slider-wrapper').classList.add("active" + (parseInt(splide.index) + 1))

          })
          splide.on("resize", function (e) {
            updateHeight()

          })
          document.querySelector('.spz-2001 .new-wrapper .section3 .slider-wrapper').classList.add("active1")
          updateHeight()
        }, 200)
        document.querySelector('.spz-2001 .new-wrapper .section3 .slider-wrapper .arrow-left img').addEventListener("click", function () {
          splide.go('<');
        })
        document.querySelector('.spz-2001 .new-wrapper .section3 .slider-wrapper .arrow-right img').addEventListener("click", function () {
          splide.go('>');
        })
      }, document.body)

      let i = 0;
      const CROInterval = setInterval(() => {
        if (document.querySelector('.spz-2001 #new-formDemo-wrapper input[name="cro1"]')) {
          clearInterval(CROInterval)
          document.querySelector('.spz-2001 #new-formDemo-wrapper input[name="cro1"]').value = "#1001_variant"
        }
        i++;
        if (i > 6) {
          clearInterval(CROInterval)
        }
      }, 500);

      function loadDemoForm() {
        loadJS('//js.hsforms.net/forms/embed/v2.js', function () {
          hbspt.forms.create({
            region: "na1",
            portalId: "6374024",
            formId: "bd5fd709-5849-4d8c-95a3-b52f5a1453c0",
            target: '.spz-2001 #new-formDemo-wrapper',
            inlineMessage: "Thanks for submitting the form.",
            onFormSubmitted: function ($form) {
              console.log('Report conversion...');
              sessionStorage.setItem("spz-2001", "submitted");
              gtag_report_conversion();
            },
            isInsideFrame: true,
            onFormReady: function ($form) {
              if (document.querySelector('#popup_request_a_demo')) {
                document.querySelector('#popup_request_a_demo').remove();
              }
              const allFieldset = document.querySelectorAll('.spz-2001 #new-formDemo-wrapper .form-columns-2,.spz-2001 #new-formDemo-wrapper .form-columns-1,.spz-2001 #new-formDemo-wrapper .form-columns-0')
              for (let i = 0; i < allFieldset.length; i++) {
                allFieldset[i].replaceWith(...allFieldset[i].childNodes)
              }
              //long form
              if (document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_firstname')) {
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_firstname').classList.add("width50", "clear");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_lastname').classList.add("width50", "with-margin");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_company').classList.add("width50", "with-margin");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_jobtitle').classList.add("width50", "clear");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email').classList.add("width50", "clear");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs-dependent-field').classList.add("clear");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_phone').classList.add("width50", "with-margin");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries').classList.add("clear");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs-richtext').classList.add("clear", "pp-parent");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_submit').classList.add("clear", "submit-parent");
                insertAfter(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email'), document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_lastname'));
                insertAfter(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_company'), document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email'));
                insertAfter(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_jobtitle'), document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_company'));
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_firstname label span').innerHTML = 'First Name';
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_lastname label span').innerHTML = 'Last Name';
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_company label span').innerHTML = 'Company';
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_phone label span').innerHTML = 'Phone';
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_jobtitle label span').innerHTML = 'Job Title (Optional)';
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries label span').innerHTML = 'Country';
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries select').value = 'United States'
                trigger(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
                trigger(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries select'), 'blur');
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries select option:first-child').remove();
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries').classList.add("hasValue");
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
                trigger(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
                const step1Checking = setInterval(function () {
                  if (document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_firstname input').value != "" &&
                    document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_lastname input').value != "" &&
                    document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_company input').value != "" &&
                    document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email input').value != "") {
                    clearInterval(step1Checking);
                    document.querySelector('.spz-2001 #new-formDemo-wrapper').classList.add("step2")
                  }
                }, 200)
              }
              //short form
              else {
                if (document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email')) {
                  document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
                  document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_email').classList.add("clear");
                }
                if (document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_buying_timeline select')) {
                  document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
                  trigger(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
                }
                document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
              }
              var allInput = document.querySelectorAll('.spz-2001 #new-formDemo-wrapper .hs-input');
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
              document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_submit input').addEventListener("click", function () {
                allInput.forEach(function (e) {
                  errorState(e);
                })
                if (document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries select')) {
                  trigger(document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
                }
                let i = 0;
                const submitInterval = setInterval(() => {
                  if (document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_submit input').value != "SUBMIT") {
                    clearInterval(submitInterval)
                    document.querySelector('.spz-2001 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
                  }
                  i++;
                  if (i > 80) {
                    clearInterval(submitInterval)
                  }
                }, 5);
              })
            }
          })
        }, document.body);
      }
      loadDemoForm()

    }
    //non targeted page
    else {
      let elementArray = [];
      for (let i = 0; i < document.querySelectorAll('a[href="#popup_request_a_demo"]').length; i++) {
        elementArray[i] = document.querySelectorAll('a[href="#popup_request_a_demo"]')[i];
      }
      for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].setAttribute("href", "https://www.komodohealth.com/get-a-demo");
        elementArray[i].removeAttribute("rel");
      }
    }
  }
})
