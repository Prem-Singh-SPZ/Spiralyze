console.log("test running")
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function(){
  console.log("after dom load")
if(!document.querySelector('.spz-1004')){
  document.querySelector('body').classList.add('spz-1004')
  //targeted page
  if(window.location.href.indexOf('https://www.komodohealth.com/get-in-touch')>-1){
    const loadJS = (url, implementationCode, location)=>{
      var scriptTag = document.createElement('script');
      scriptTag.src = url;
    
      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;
    
      location.appendChild(scriptTag);
    };

    function trigger(el, eventType) {
      if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
        el[eventType]();
      } else {
        const event =
          typeof eventType === 'string'
            ? new Event(eventType, {bubbles: true})
            : eventType;
        el.dispatchEvent(event);
      }
    }
  
    const gb_load_css=(path)=> {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.media = 'all';
      css.href = path;
    
      document.getElementsByTagName('head')[0].appendChild(css);
    }
    gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"); 
    document.querySelector('body').classList.add('run-var')
    document.querySelector('[data-global-resource-path]').classList.add("hide")
    document.querySelector('body').insertAdjacentHTML('afterbegin',`
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
            <div class="slider-wrapper">
                <section class="splide splide1">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                            330 M+
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                           Patients in the US
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        15 M
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Healthcare encounters every day
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        30%
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        More unique patients 
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        40%
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        More clinical encounters per patient
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        15 M
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Healthcare encounters every day
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        6 yr
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Average historical patient
                                        journey data
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        3.5 M+
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Providers across care settings
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        450 K
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        HCOS across the continuum of care
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        100%
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Medicare data as a CMS
                                         qualified entity
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        15-20
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Years of publication
                                         and clinical trial data
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        11 B
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Lab records
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        1300
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Hospital chargemaster &
                                        in-hospital sources
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <div class="arrow-left"><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1711606638/komodohealth/1004/arrow_left.svg"
                        alt="Left Arrow" width="64" height="64" /></div>
                <div class="arrow-right"><img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1711606638/komodohealth/1004/arrow_right.svg"
                        alt="Right Arrow" width="64" height="64" /></div>
            </div>
        </div>
    </div>
      <div class="section4 new-footer">
        <div class="text">&copy;2024 All Rights Reserved | Komodo Health, Inc.</div>
      </div>
    </div>
    `);
    
    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function(){
      var splide = new Splide( '.spz-1004 .new-wrapper .section3 .slider-wrapper .splide1', {
        type   : 'loop',
        perPage: 3,
        // autoplay: true,
        arrows: false,
        autoHeight: true,
        pagination: false,
        breakpoints: {
          767: {
            pagination: true,

          }
        }
      });
      setTimeout(function(){
        splide.mount()
      },200)

      document.querySelector('.spz-1004 .new-wrapper .section3 .slider-wrapper .arrow-left img').addEventListener("click",function(){
        splide.go( '<' );
      })
      document.querySelector('.spz-1004 .new-wrapper .section3 .slider-wrapper .arrow-right img').addEventListener("click",function(){
        splide.go( '>' );
      })
    },document.body)
    document.querySelector('.spz-1004 #popup_contact_us .wcs-pform').remove()
    document.querySelector('.spz-1004 #popup_connect .wcs-pform').remove()
    document.querySelector('.spz-1004 #popup_contact_us .wcs-col-12').innerHTML=`
    <div class="wcs-pform">
      <div class="wcs-popup-heading">
        <h2>Contact Us</h2>
      </div>
    </div>
    `
    let i=0;
      const CROInterval = setInterval(() => {
        if(document.querySelector('.spz-1004 #new-form-wrapper input[name="cro1"]')){
          clearInterval (CROInterval)
          document.querySelector('.spz-1004 #new-form-wrapper input[name="cro1"]').value="#1001_variant"
        }
        i++;
        if(i>6){
          clearInterval (CROInterval)
        }
      }, 500);
    loadJS('//js.hsforms.net/forms/embed/v2.js', function(){
      hbspt.forms.create({
        region: "na1",
        portalId: "6374024",
        formId: "89116499-15d1-4cd0-b724-7a46e68cf8f0",
        target: '.spz-1004 #new-form-wrapper',
        isInsideFrame: true,
        inlineMessage: "Thanks for submitting the form.",
          onFormSubmitted: function($form) {
            console.log('Report conversion...');
            gtag_report_conversion();
          },
        onFormReady: function($form){
          if(document.querySelector('.spz-1004 #new-form-wrapper .hs_firstname')){
            document.querySelector('.spz-1004 #new-form-wrapper .hs_firstname').classList.add("width50","clear");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_lastname').classList.add("width50","with-margin");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_company').classList.add("width50","clear");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_jobtitle').classList.add("width50","with-margin");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_email').classList.add("width50","clear");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_phone').classList.add("width50","with-margin");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_message').classList.add("clear");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries').classList.add("clear");
            document.querySelector('.spz-1004 #new-form-wrapper .hs-richtext').classList.add("clear","pp-parent");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_submit').classList.add("clear","submit-parent");
            
            document.querySelector('.spz-1004 #new-form-wrapper .hs_company label span').innerHTML='Company';
            document.querySelector('.spz-1004 #new-form-wrapper .hs_phone label span').innerHTML='Phone (optional)';
            document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries label span').innerHTML='Country';
            document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries select').value='United States'
            trigger(document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries select'), 'change');
            trigger(document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries select'), 'blur');
            document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries select option:first-child').remove();                           
            document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries').classList.add("hasValue");
            document.querySelector('.spz-1004 #new-form-wrapper .hs_submit input').value="SUBMIT";
            document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend","<div class='arrow-select'></div>")
            const step1Checking = setInterval(function(){
              if(document.querySelector('.spz-1004 #new-form-wrapper .hs_firstname input').value!="" &&
              document.querySelector('.spz-1004 #new-form-wrapper .hs_lastname input').value!="" &&
              document.querySelector('.spz-1004 #new-form-wrapper .hs_company input').value!="" &&
              document.querySelector('.spz-1004 #new-form-wrapper .hs_jobtitle input').value!="") {
                clearInterval(step1Checking);
                document.querySelector('.spz-1004 #new-form-wrapper').classList.add("step2")
              }
            },200)
          }
          else {
            document.querySelector('.spz-1004 #new-form-wrapper').classList.add("step2")
            if(document.querySelector('.spz-1004 #new-form-wrapper .hs_email')){ 
              document.querySelector('.spz-1004 #new-form-wrapper .hs_email label span').innerHTML='Email';
              document.querySelector('.spz-1004 #new-form-wrapper .hs_email').classList.add("clear");
            }
            if(document.querySelector('.spz-1004 #new-form-wrapper .hs_message')){
              document.querySelector('.spz-1004 #new-form-wrapper .hs_message').classList.add("clear");
            }
            if(document.querySelector('.spz-1004 #new-form-wrapper .hs_phone')){
              document.querySelector('.spz-1004 #new-form-wrapper .hs_phone label span').innerHTML='Phone (Optional)';
            }
            document.querySelector('.spz-1004 #new-form-wrapper .hs_submit input').value="SUBMIT";
          }
          var allInput = document.querySelectorAll('.spz-1004 #new-form-wrapper .hs-input');
          function errorState(item) {
            var i = 0;
            var errorInterval = setInterval(() => {
                if(item.parentElement.parentElement.querySelector('.hs-error-msgs')) {
                    item.parentElement.parentElement.classList.add('hasError');
                }
                else {
                    item.parentElement.parentElement.classList.remove('hasError');
                }
                if(i == 100) {
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
          document.querySelector('.spz-1004 #new-form-wrapper .hs_submit input').addEventListener("click",function(){
            allInput.forEach(function (e) {          
              errorState(e);          
            })
            if(document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries select')){
              trigger(document.querySelector('.spz-1004 #new-form-wrapper .hs_consent_countries select'), 'change');
            }
            let i=0;
            const submitInterval =setInterval(() => {
              if(document.querySelector('.spz-1004 #new-form-wrapper .hs_submit input').value!="SUBMIT"){
                clearInterval(submitInterval)
                document.querySelector('.spz-1004 #new-form-wrapper .hs_submit input').value="SUBMIT";
              }
              i++;
              if(i>80){
                clearInterval(submitInterval)
              }
            }, 5);
          })
          document.querySelector('.spz-1004 #new-form-wrapper .hs_message textarea').addEventListener("keypress",function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.querySelector('.spz-1004 #new-form-wrapper .hs_submit input').click()
            }
          });
        },
      });
    }, document.body);
  }
  //non targeted page
  else {
    let elementArray = [];
    for (let i=0;i<document.querySelectorAll('a[href="#popup_contact_us"]').length;i++){
      elementArray[i]=document.querySelectorAll('a[href="#popup_contact_us"]')[i];
    }
    for (let i=0;i<elementArray.length;i++){
      elementArray[i].setAttribute("href","https://www.komodohealth.com/get-in-touch");
      elementArray[i].removeAttribute("rel");
    }
  }
}
})
