/* CUSTOM CODE */
let is_swiper_loaded = 0;
var interStatus = true;
var bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('spz-2003')) {
        document.body.classList.add('spz-2003');
        var OStype = detectOS();
        if(OStype == 'MacOS' || OStype == 'iOS'){
            if (!document.body.classList.contains('spz-apple-os'))
            {
                document.body.classList.add('spz-apple-os');
            }
        }
        detect_browser();
        
        var swiper_script = document.createElement('script');
        swiper_script.src = '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        swiper_script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(swiper_script);
        var swiper_link = document.createElement('link');
        swiper_link.rel = 'stylesheet';
        swiper_link.type = 'text/css';
        swiper_link.href = '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.getElementsByTagName('head')[0].appendChild(swiper_link);
        swiper_script.onload = function() {
            is_swiper_loaded = 1;
        };

        pageModify();


        document.head.insertAdjacentHTML('beforeend', `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/2002/Triangle_SVG.svg" as="image">`);
        // setTimeout(() => {
        //     if (!body.classList.contains('spz_1004')) {
        //         body.classList.add('spz_1004');
        //         waitForElm('.spz_1004 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
        //             formModify();
        //         });
        //     }
        // }, 500);
      }
    }
})




function pageModify() {
    
  document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="spz-sf-main"></div>');
  hero_fn(document.querySelector('.spz-sf-main'));
  feature_fn(document.querySelector('.spz-sf-main'));
  testimonial_fn(document.querySelector('.spz-sf-main'));
  benefit_fn(document.querySelector('.spz-sf-main'));



}

// Hero Section
function hero_fn(injector){
  let hero_html = `<div class="spz-hero-wrap">
    <div class="spz-hero-inner">
      <div class="spz-hero-content">
        <h1><span>All-in-one insurance tech.</span> Boost sales. Optimize operations. </h1>
        <div class="spz-hero-feature">
          <div class="spz-hero-item">
            <button type="button" data-id="agencies">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1719906439/zywave/2003/agencies.svg" alt="Agencies"> Agencies
            </button>
          </div>
          <div class="spz-hero-item">
            <button type="button" data-id="insurers">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1719906439/zywave/2003/insurers.svg" alt="Insurers"> Insurers
            </button>
          </div>
          <div class="spz-hero-item">
            <button type="button" data-id="service_providers">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1719906439/zywave/2003/service_providers.svg" alt="Service Providers"> Service Providers
              </button>
          </div>
        </div>
        <p>Automate prospecting, quoting, and renewals. Let clients self-serve plans and resources from a dedicated online portal. Generate content. Analyze claims, costs, and more.</p>
        <a href="#" class="spz-btn spz-btn-primary">Get a demo</a>
      </div>
      <div class="spz-hero-image">
        <picture>
            <source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/desktop_interface_1.webp">
            <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/tablet_interface_1.webp">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/mobile_interface_2.webp" alt="All-in-one insurance tech. Boost sales. Optimize operations.">
        </picture>
      </div>
    </div>
    <div class="spz-hero-logos">
      <div class="spz-logos-inner">
        <h4>Join 18,000+  agencies, insurers, and service providers using Zywave</h4>
        <picture>
            <source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logos_desktop.webp">
            <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logos_tablet.webp">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logos_mobile.webp" alt="Customers Logo">
        </picture>
      </div>
    </div>
  </div>`;
  if(injector.querySelectorAll('.spz-hero-wrap').length == 0) {
    injector.insertAdjacentHTML('beforeend', hero_html);

    document.querySelectorAll('.spz-hero-feature button').forEach(function (btn) {
      btn.addEventListener('click', featureBtnHandler);
      btn.addEventListener('touchstart', featureBtnHandler);
      btn.addEventListener('touchmove', featureBtnHandler);
      btn.addEventListener('touchend', featureBtnHandler);
    });

    function featureBtnHandler(event){
      btn = event.target
      var tp = document.querySelector('.spz-feature-toogler').getBoundingClientRect().top + window.scrollY - 100;
      if(window.innerWidth < 1250){
        tp = document.querySelector('.spz-feature-toogler').getBoundingClientRect().top + window.scrollY - 140;  
      }
      window.scrollTo({ top: tp, behavior: 'smooth' });

      document.querySelectorAll('.spz-feature-toogler button').forEach(function (element) {
        if(element.getAttribute('data-id') == btn.getAttribute('data-id')){
          console.log(element.getAttribute('data-id'), btn.getAttribute('data-id'))
          element.click();
        }
      });    
    }

    document.querySelector('.spz-hero-content .spz-btn').addEventListener('click', function () {
      document.querySelector('.zy-header-bottom .zy-header-bottom-demo a').click();
    });
    

  }
}

// Feature Section
function feature_fn(injector){
  let agenciesContents = agenciesData();
  let insurersContents = insurersData();
  let serviceContents = serviceData();
  let feature_html = `<div class="spz-feature-wrap">
    <div class="spz-feature-inner">
      <div class="spz-feature-title">
        <h2>Features</h2>
      </div>
      <div class="spz-feature-toogler">
        <button class="spz-feature-toggle active" type="button" data-id="agencies">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.66675H14.6667C16.238 1.66675 17.0237 1.66675 17.5119 2.1549C18 2.64306 18 3.42873 18 5.00008V17.7084H18.8334C19.1785 17.7084 19.4584 17.9882 19.4584 18.3334C19.4584 18.6786 19.1785 18.9584 18.8334 18.9584H2.16669C1.82151 18.9584 1.54169 18.6786 1.54169 18.3334C1.54169 17.9882 1.82151 17.7084 2.16669 17.7084H3.00002V7.50008C3.00002 5.92873 3.00002 5.14306 3.48818 4.6549C3.97633 4.16675 4.76201 4.16675 6.33335 4.16675H9.66669C11.238 4.16675 12.0237 4.16675 12.5119 4.6549C13 5.14306 13 5.92873 13 7.50008V17.7084H14.25V7.50008L14.25 7.42551C14.2501 6.70415 14.2502 6.04276 14.1779 5.50474C14.0982 4.91227 13.9108 4.28606 13.3958 3.77102C12.8807 3.25598 12.2545 3.06857 11.662 2.98891C11.1316 2.9176 10.4812 2.91667 9.77169 2.91674C9.84194 2.59404 9.95918 2.35057 10.1548 2.1549C10.643 1.66675 11.4287 1.66675 13 1.66675ZM4.87502 6.66675C4.87502 6.32157 5.15484 6.04175 5.50002 6.04175H10.5C10.8452 6.04175 11.125 6.32157 11.125 6.66675C11.125 7.01193 10.8452 7.29175 10.5 7.29175H5.50002C5.15484 7.29175 4.87502 7.01193 4.87502 6.66675ZM4.87502 9.16675C4.87502 8.82157 5.15484 8.54175 5.50002 8.54175H10.5C10.8452 8.54175 11.125 8.82157 11.125 9.16675C11.125 9.51193 10.8452 9.79175 10.5 9.79175H5.50002C5.15484 9.79175 4.87502 9.51193 4.87502 9.16675ZM4.87502 11.6667C4.87502 11.3216 5.15484 11.0417 5.50002 11.0417H10.5C10.8452 11.0417 11.125 11.3216 11.125 11.6667C11.125 12.0119 10.8452 12.2917 10.5 12.2917H5.50002C5.15484 12.2917 4.87502 12.0119 4.87502 11.6667ZM8.00002 15.2084C8.3452 15.2084 8.62502 15.4882 8.62502 15.8334V17.7084H7.37502V15.8334C7.37502 15.4882 7.65484 15.2084 8.00002 15.2084Z" fill="#2777D3"></path>
          </svg>
          Agencies
        </button>
        <button class="spz-feature-toggle" type="button" data-id="insurers">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3146 4.23542C3 4.68365 3 6.01597 3 8.68063V9.99288C3 14.6913 6.53247 16.9713 8.7488 17.9395C9.35001 18.2021 9.65062 18.3334 10.5 18.3334C11.3494 18.3334 11.65 18.2021 12.2512 17.9395C14.4675 16.9713 18 14.6913 18 9.99288V8.68063C18 6.01597 18 4.68365 17.6854 4.23542C17.3708 3.7872 16.1181 3.35838 13.6126 2.50074L13.1352 2.33735C11.8292 1.89028 11.1762 1.66675 10.5 1.66675C9.82384 1.66675 9.17082 1.89028 7.86477 2.33735L7.38743 2.50074C4.88194 3.35838 3.62919 3.7872 3.3146 4.23542ZM13.0495 8.74967C13.2794 8.49219 13.2571 8.0971 12.9996 7.8672C12.7421 7.63731 12.347 7.65967 12.1171 7.91716L9.60714 10.7283L8.88288 9.91716C8.65298 9.65967 8.25789 9.63731 8.00041 9.8672C7.74293 10.0971 7.72056 10.4922 7.95046 10.7497L9.14093 12.083C9.25951 12.2158 9.4291 12.2917 9.60714 12.2917C9.78518 12.2917 9.95478 12.2158 10.0734 12.083L13.0495 8.74967Z" fill="#B3B3B3"></path>
          </svg>
          Insurers
        </button>
        <button class="spz-feature-toggle" type="button" data-id="service_providers">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <circle cx="10.5" cy="5.00008" r="3.33333" fill="#B3B3B3"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 18.3333C12.8751 18.3333 12.1876 18.3333 11.7605 17.9062C11.3334 17.4791 11.3334 16.7916 11.3334 15.4167C11.3334 14.0417 11.3334 13.3543 11.7605 12.9271C12.1876 12.5 12.8751 12.5 14.25 12.5C15.625 12.5 16.3124 12.5 16.7396 12.9271C17.1667 13.3543 17.1667 14.0417 17.1667 15.4167C17.1667 16.7916 17.1667 17.4791 16.7396 17.9062C16.3124 18.3333 15.625 18.3333 14.25 18.3333ZM15.8901 14.7882C16.0799 14.5983 16.0799 14.2906 15.8901 14.1007C15.7002 13.9109 15.3924 13.9109 15.2026 14.1007L13.6019 15.7014L13.2975 15.397C13.1076 15.2072 12.7999 15.2072 12.61 15.397C12.4202 15.5868 12.4202 15.8946 12.61 16.0845L13.2582 16.7326C13.448 16.9225 13.7558 16.9225 13.9456 16.7326L15.8901 14.7882Z" fill="#B3B3B3"></path>
            <path d="M13.3456 11.2561C12.5038 10.9868 11.5333 10.8333 10.5 10.8333C7.2783 10.8333 4.66663 12.3256 4.66663 14.1666C4.66663 15.9504 7.11866 17.4069 10.2017 17.4956C10.1791 17.3904 10.1616 17.2859 10.1478 17.1833C10.0831 16.7019 10.0832 16.1137 10.0833 15.4882V15.3449C10.0832 14.7195 10.0831 14.1313 10.1478 13.6498C10.2199 13.1141 10.392 12.5277 10.8766 12.0432C11.3611 11.5586 11.9475 11.3865 12.4832 11.3144C12.7432 11.2795 13.0343 11.2634 13.3456 11.2561Z" fill="#B3B3B3"></path>
          </svg>
          Service Providers
        </button>
      </div>
      <div class="spz-feature-tabs">
        <div class="spz-feature-tab-item active" id="agencies">
          <div class="spz-features-toggle">
              <div class="spz-features-toggle-wrap">
                  <ul>${agenciesContents[0]}</ul>
              </div>
          </div>
          <div class="spz-feature-graphic">
              <div class="spz-feature-graphic-wrap">${agenciesContents[1]}</div>
          </div>          
        </div>
        <div class="spz-feature-tab-item" id="insurers">
          <div class="spz-features-toggle">
              <div class="spz-features-toggle-wrap">
                  <ul>${insurersContents[0]}</ul>
              </div>
          </div>
          <div class="spz-feature-graphic">
              <div class="spz-feature-graphic-wrap">${insurersContents[1]}</div>
          </div>  
        </div>
        <div class="spz-feature-tab-item" id="service_providers">
          <div class="spz-features-toggle">
              <div class="spz-features-toggle-wrap">
                  <ul>${serviceContents[0]}</ul>
              </div>
          </div>
          <div class="spz-feature-graphic">
              <div class="spz-feature-graphic-wrap">${serviceContents[1]}</div>
          </div>
        </div>       
      </div>
    </div>
  </div>`;

  if(injector.querySelectorAll('.spz-feature-wrap').length == 0) {
    injector.insertAdjacentHTML('beforeend', feature_html);

    document.querySelectorAll('.spz-feature-toogler button').forEach(function (element) {
      element.addEventListener('click', function () {
        document.querySelectorAll('.spz-feature-toogler button').forEach(function (element) {
          element.classList.remove('active');
        });
        document.querySelectorAll('.spz-feature-tab-item').forEach(function (element) {
          element.classList.remove('active');
        });
        element.classList.add('active');
        document.querySelector('.spz-feature-tab-item#' + element.getAttribute('data-id')).classList.add('active');
        // console.log(document.querySelector('#'+element.getAttribute('data-id')).querySelector('.spz-features-toggle-item:first-child label'))
        document.querySelector('#'+element.getAttribute('data-id')).querySelector('.spz-features-toggle-item:first-child label').click();

        interStatus = true;
        var eid = element.getAttribute('data-id');
        accordianTimerFn(eid);


      });
    });

    document.querySelectorAll('.spz-toggle-item-cta').forEach(function (element) {
      element.addEventListener('click', function () {
        document.querySelector('.zy-header-bottom .zy-header-bottom-demo a').click();
      });
    });

    let checkJq = setInterval(function(){
      if(typeof jQuery != 'undefined' && jQuery.fn) {
          clearInterval(checkJq);
          
          jQuery(document).on('click', '.spz-features-toggle-item:not(.spz-sf-active) label', function(e){
              
              let $this = jQuery(this);
              let targetPic = $this.parent().attr('data-sf-hunter');
              $this.closest('.spz-features-toggle-wrap').find('.spz-sf-active .spz-sf-progressbar').css('width', '0px');
              $this.closest('.spz-features-toggle-wrap').find('.spz-features-toggle-item.spz-sf-active').removeClass('spz-sf-active');
              $this.parent().addClass('spz-sf-active');
              $this.closest('.spz-feature-tab-item').find('.spz-feature-graphic picture.spz-sf-active').removeClass('spz-sf-active');
              
              $this.closest('.spz-feature-tab-item').find('.spz-feature-graphic picture[data-sf-target="'+targetPic+'"]').addClass('spz-sf-active');
              // setTimeout(() => {
              //     var elementH = document.querySelector('.spz-sf-active');
              //     if (elementH.matches(':hover')) {                                
              //         if(interStatus){
              //             interStatus = false;
              //             stopAccordionTimer()
              //         }                                
              //     }
              // })
          });
                    
          jQuery(document).on('mouseenter', '.spz-features-toggle-item, .spz-feature-graphic-wrap', function(e){                            
            if(window.innerWidth > 1024){
                if(e.target.closest('.spz-sf-active')){                                
                    interStatus = false;        
                    var eid = e.target.closest('.spz-feature-tab-item').getAttribute('id');
                    stopAccordionTimer(eid)
                    
                }
              }
          })
          jQuery(document).on('mousemove', '.spz-features-toggle-item, .spz-feature-graphic-wrap', function(e){                            
            if(window.innerWidth > 1024){
                if(e.target.closest('.spz-sf-active')){                                
                    if(interStatus){
                        interStatus = false;
                        var eid = e.target.closest('.spz-feature-tab-item').getAttribute('id');
                        stopAccordionTimer(eid)
                    }                                
                }
              }
          })
          jQuery(document).on('hover', '.spz-features-toggle-item, .spz-feature-graphic-wrap', function(e){                            
            if(window.innerWidth > 1024){
                if(e.target.closest('.spz-sf-active')){                                
                    if(interStatus){
                        interStatus = false;
                        var eid = e.target.closest('.spz-feature-tab-item').getAttribute('id');
                        stopAccordionTimer(eid)
                    }
                    
                }
              }
          })
          jQuery(document).on('mouseleave', '.spz-features-toggle-item, .spz-feature-graphic-wrap', function(e){
            if(window.innerWidth > 1024){
                if(e.target.closest('.spz-sf-active')){
                    interStatus = true;
                    var eid = e.target.closest('.spz-feature-tab-item').getAttribute('id');
                    accordianTimerFn(eid);
                }
              }
          })
          
          jQuery(document).ready(function(){
              jQuery('body').addClass('spz-loaded-timer');
              accordianTimerFn('agencies');
              accordianTimerFn('insurers');
              accordianTimerFn('service_providers');
              
          });
      }
    });


  }

}

function accordianTimerFn(id) {
  let accordianTimer = 1;
  accorInterval = setInterval(function(){
      var liWidth = jQuery('#'+id+'').find('.spz-sf-active').width();
      var liSteps = liWidth / 54
      var progWidth = jQuery('#'+id+'').find('.spz-sf-active .spz-sf-progressbar').width();
      
      var progSetWidth;
      if(interStatus){
          progSetWidth = progWidth + liSteps;
      } else {
          progSetWidth = progWidth;
      }
        
      jQuery('#'+id+'').find('.spz-sf-active .spz-sf-progressbar').css('width', `${progSetWidth}px`)
      if(progSetWidth > (liWidth + liSteps)) {
          if(jQuery('#'+id+'').find('.spz-features-toggle-item.spz-sf-active').next().length > 0) {
            jQuery('#'+id+'').find('.spz-features-toggle-item.spz-sf-active').next().find('label').trigger('click');
              return;
          } else {
            jQuery('#'+id+'').find('.spz-features-toggle-item').eq(0).find('label').trigger('click');
              return;
          }
      }
  }, 100);
}
function stopAccordionTimer(){
  clearInterval(accorInterval)
}

// Feature Agencies Content
function agenciesData() {
  let htmlContent = ``;
  let graphicContent = ``;
  let features_data = [
      {
          'title' : 'Sales',
          'description' : '<p>Find qualified leads. Target based on individual claims, employer demographics, compliance penalties, and more. Send bulk email campaigns. Connect with prospects directly in-app, and follow up instantly.</p><p>Get instant pricing from carriers. Generate bindable quotes in minutes. Automate renewals. </p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/sales_desktop_1.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/sales_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/sales_tablet.webp'
          ]
      },
      {
          'title' : 'Content',
          'description' : '<p>Access a pre-built library of 25,000+ resources on insurance, employment, benefits, wellness, and more.</p><p>Customizable and ready to send to clients and prospects. Professionally designed PowerPoint slides, sell sheets, emails, social posts, and other marketing materials. </p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_tablet.webp'
          ]
      },
      {
          'title' : 'Client portal',
          'description' : '<p>Let clients self-serve policy info, plan resources, employee cost calculators, enrollment booklet builders, and salary benchmarking.</p><p>Track compliance for government-mandated training requirements. Auto-generate reports and forms for ACA, FMLA, SPD and wrap plans, OSHA, COBRA, and more.</p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/client_portal_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/client_portal_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/client_portal_tablet.webp'
          ]
      },
      {
          'title' : 'Analytics and reporting',
          'description' : '<p>Let clients compare their plans with other organizations in their region or industry. Compare 60+ categories, including total plan costs, inpatient and outpatient claims, ER utilization, and more.</p><p>See projected renewal costs based on plan usage trends and previous claim information. Send clients fair renewal quotes. Generate cost savings, loss, and risk reports. </p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/analytics_and_reporting_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/analytics_and_reporting_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/analytics_and_reporting_tablet.webp'
          ]
      },      
  ];
  features_data.forEach(function(elm, index, arr){
      var activeclass = (index == 0) ? 'spz-sf-active' : '';
      var imageStyle = (elm.title == 'Real-time Notifications' || elm.title == 'Technician Mobile App') ? 'style="border-color: transparent;"' : '';
      htmlContent += `
          <li class="spz-features-toggle-item ${activeclass}" data-sf-hunter="${index+1}">
              <div class="spz-sf-progressbar"></div>
              <label>
                ${elm.title} 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M17 1L9 9L1 1" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </label>
              <div class="spz-features-toggle-item-content">
                  ${elm.description}
                  <button type="button" class="spz-toggle-item-cta">Get a demo</button>
              </div>
              <div class="spz-features-graphic">
                  <picture>
                      <source media="(min-width:1025px)" srcset="${elm.pictures[0]}">
                      <source media="(min-width:465px)" srcset="${elm.pictures[1]}">
                      <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
                  </picture>
              </div>
          </li>
      `;
      graphicContent += `
          <picture data-sf-target="${index+1}" class="${activeclass}">
              <source media="(min-width:1024px)" srcset="${elm.pictures[0]}">
              <source media="(min-width:768px)" srcset="${elm.pictures[1]}">
              <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
          </picture>
      `;
  });
  return [htmlContent, graphicContent];
}

// Feature Insurers Content
function insurersData() {
  let htmlContent = ``;
  let graphicContent = ``;
  let features_data = [
      {
          'title' : 'Post-bind services',
          'description' : '<p>Track your book of business and post-bind activities. Amend coverage, process service requests, view policy transactions, and manage expirations. Automate endorsements, renewals, and cancellations.</p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/post-bind_services_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/post-bind_services_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/post-bind_services_tablet.webp'
          ]
      },
      {
          'title' : 'Content distribution',
          'description' : '<p>Provide your rates to 3,500+ brokers. Auto-update rates for employee, commercial, and personal lines.</p><p>Let brokers access your top resources, including compliance overviews, enrollment guides, and insurance brochures. Track impressions, shares, and downloads by broker.</p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_tablet.webp'
          ]
      },
      {
          'title' : 'Client portal',
          'description' : '<p>Engage with clients 24/7 with pre-built resources. Easily add your branding. Provide info and advice on policies, cybersecurity, HR, wellness, safety, and more.</p><p>Let clients self-serve specialized tools and 150+ compliance courses. ACA reporting, compliance posters, FMLA advisor, multi-state law comparisons, and more. </p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/client_portal_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/client_portal_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/client_portal_tablet.webp'
          ]
      },
      {
          'title' : 'Analytics and reporting',
          'description' : '<p>Get a complete view of loss activity and mod scores with data for over 1 million losses. Monitor impact by location, incident type, and more.</p><p>Auto-generate reports with 40+ templates. Send to internal teams, brokers, and policyholders. </p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/analytics_and_reporting_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/analytics_and_reporting_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/analytics_and_reporting_tablet.webp'
          ]
      },      
  ];
  features_data.forEach(function(elm, index, arr){
      var activeclass = (index == 0) ? 'spz-sf-active' : '';
      var imageStyle = (elm.title == 'Real-time Notifications' || elm.title == 'Technician Mobile App') ? 'style="border-color: transparent;"' : '';
      htmlContent += `
          <li class="spz-features-toggle-item ${activeclass}" data-sf-hunter="${index+1}">
              <div class="spz-sf-progressbar"></div>
              <label>
                ${elm.title} 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M17 1L9 9L1 1" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </label>
              <div class="spz-features-toggle-item-content">
                  ${elm.description}
                  <button type="button" class="spz-toggle-item-cta">Get a demo</button>
              </div>
              <div class="spz-features-graphic">
                  <picture>
                      <source media="(min-width:1024px)" srcset="${elm.pictures[0]}">
                      <source media="(min-width:768px)" srcset="${elm.pictures[1]}">
                      <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
                  </picture>
              </div>
          </li>
      `;
      graphicContent += `
          <picture data-sf-target="${index+1}" class="${activeclass}">
              <source media="(min-width:1025px)" srcset="${elm.pictures[0]}">
              <source media="(min-width:465px)" srcset="${elm.pictures[1]}">
              <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
          </picture>
      `;
  });
  return [htmlContent, graphicContent];
}

// Feature Service Providers Content
function serviceData() {
  let htmlContent = ``;
  let graphicContent = ``;
  let features_data = [
      {
          'title' : 'Prospecting',
          'description' : '<p>Access our database of 4.5 million employers and build your book of business. View DOL and OSHA details, contact info, and more. Filter by geography, industry, PEO, broker, administrator, and actuary.</p><p>Integrates with Microsoft Dynamics, Salesforce, and other CRMs. </p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/prospecting_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/prospecting_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/prospecting_tablet.webp'
          ]
      },
      {
          'title' : 'Content distribution',
          'description' : '<p>Distribute your resources to 3,500+ brokers. Target your preferred audience. Let them share content with their clients. New policy updates, compliance documentation, enrollment info, and more.</p><p>Track resource impressions, shares, and downloads by broker. </p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/content_tablet.webp'
          ]
      },
      {
          'title' : 'Quoting',
          'description' : '<p>Access over 100,000 plans across carriers. Automatically generate quotes from multiple carriers at once.</p><p>Compare prices. Identify the best plan for clients. Health, dental, vision, life insurance, and more.</p>',          
          'pictures' : [
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/quoting_desktop.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/quoting_tablet.webp', 
            '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/quoting_tablet.webp'
          ]
      },          
  ];
  features_data.forEach(function(elm, index, arr){
      var activeclass = (index == 0) ? 'spz-sf-active' : '';
      var imageStyle = (elm.title == 'Real-time Notifications' || elm.title == 'Technician Mobile App') ? 'style="border-color: transparent;"' : '';
      htmlContent += `
          <li class="spz-features-toggle-item ${activeclass}" data-sf-hunter="${index+1}">
              <div class="spz-sf-progressbar"></div>
              <label>
                ${elm.title} 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M17 1L9 9L1 1" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </label>
              <div class="spz-features-toggle-item-content">
                  ${elm.description}
                  <button type="button" class="spz-toggle-item-cta">Get a demo</button>
              </div>
              <div class="spz-features-graphic">
                  <picture>
                      <source media="(min-width:1024px)" srcset="${elm.pictures[0]}">
                      <source media="(min-width:768px)" srcset="${elm.pictures[1]}">
                      <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
                  </picture>
              </div>
          </li>
      `;
      graphicContent += `
          <picture data-sf-target="${index+1}" class="${activeclass}">
              <source media="(min-width:1025px)" srcset="${elm.pictures[0]}">
              <source media="(min-width:465px)" srcset="${elm.pictures[1]}">
              <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
          </picture>
      `;
  });
  return [htmlContent, graphicContent];
}

// Testimonial Section
function testimonial_fn(injector){
  let testimonial_data = [
    { 
      'user_image' : ['//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/dan_killins.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/dan_killins_m.webp'],
      'description' : '“There is something there for every situation. With customizable content and resources for every level of employee.”', 
      'user_name' : 'Dan Killins', 
      'user_position' : 'Director, Risk Advisory Services',
      'company_logo' : ['//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logo1.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logo1_m.webp'],
      'logo_class' : 'employer-logo',
    },
    { 
      'user_image' : ['//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/roland_barrera.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/roland_barrera_m.webp'],
      'description' : '“We doubled our sales the year after implementing Zywave, and our sales have only continued to grow.”', 
      'user_name' : 'Roland Barrera', 
      'user_position' : 'Owner',
      'company_logo' : ['//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logo2.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logo2_m.webp'],
      'logo_class' : 'roland-logo',
    },
    { 
      'user_image' : ['//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/kurt_buursma.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/kurt_buursma_m.webp'],
      'description' : '“There were a lot of options out there for insurance technology, but none of them rose to the level of Zywave. Other tools and services just couldn’t compare.”', 
      'user_name' : 'Kurt Buursma', 
      'user_position' : 'Owner',
      'company_logo' : ['//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logo3.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/logo3_m.webp'],
      'logo_class' : 'buursma-logo',
    }
  ];
  let testimonial_loop = ``;
  for(var t_data in testimonial_data) {
    testimonial_loop += `
        <div class="swiper-slide">
            <div class="spz-tetimonial-slider-item">                
                  <div class="spz-tetimonial-content">
                      <p>${testimonial_data[t_data].description}</p>                        
                  </div>
                  <div class="user-wrap">
                      <div class="user-image">
                        <picture>
                          <source media="(min-width:768px)" srcset="${testimonial_data[t_data].user_image[0]}">
                          <img src="${testimonial_data[t_data].user_image[1]}" alt="${testimonial_data[t_data].user_name}">
                        </picture>
                      </div>
                      <div class="user-info">
                          <h4>${testimonial_data[t_data].user_name}</h4>
                          <p>${testimonial_data[t_data].user_position}</p>
                      </div>
                      <div class="company-image">
                        <picture>
                          <source media="(min-width:768px)" srcset="${testimonial_data[t_data].company_logo[0]}">
                          <img class="${testimonial_data[t_data].logo_class}" src="${testimonial_data[t_data].company_logo[1]}" alt="Company logo">
                        </picture>
                      </div>
                  </div>                                        
            </div>
        </div>
    `;
  } 

  let testimonial_html = `<div class="spz-testimonial-wrap">
      <div class="spz-testimonial-container">              
        <div class="spz-tetimonial-slider-wrap">
            <div class="spz-tetimonial-slider swiper">
                <div class="swiper-wrapper">${testimonial_loop}</div>
                <div class="swiper-button-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path d="M23.3333 14.4277H4.66665M4.66665 14.4277L11.6666 7.42773M4.66665 14.4277L11.6666 21.4277" stroke="#0F2D52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="swiper-button-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path d="M4.66663 14.4277H23.3333M23.3333 14.4277L16.3333 7.42773M23.3333 14.4277L16.3333 21.4277" stroke="#0F2D52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
      </div>
  </div>`;
  if(injector.querySelectorAll('.spz-testimonial-wrap').length == 0) {
    injector.insertAdjacentHTML('beforeend', testimonial_html);
    let checkSliderLoad = setInterval(function(){
      if(is_swiper_loaded == 1) {
          clearInterval(checkSliderLoad);
          const swiperInit = new Swiper('.spz-tetimonial-slider', {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
              autoHeight: true,
              // centeredSlidesBounds: true,             
              // loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              initialSlide: 1,
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              }, 
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              breakpoints: {                
                768: {
                  slidesPerView: 1.155,
                  spaceBetween: 30,
                  autoHeight: false,
                },
                1024: {
                  slidesPerView: 2.126,
                  spaceBetween: 30,
                },
              },
          });

          jQuery(".spz-tetimonial-slider").mouseenter(function() {
            swiperInit.autoplay.stop();
          });
        
          jQuery(".spz-tetimonial-slider").mouseleave(function() {
            swiperInit.autoplay.start();            
          });

      }
  });
  }
}

// Benefit Secttion
function benefit_fn(injector){
  let hero_html = `<div class="spz-benefit-wrap">
    <div class="spz-benefit-inner">
      <div class="spz-benefit-title">
        <h2>Benefits </h2>
      </div>
      <div class="spz-benefit-list">
        <div class="spz-benefit-item">
          <div class="spz-benefit-content">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/Streamline_operations_icon_png.png" alt="Streamline operations">
            <h4>Streamline operations</h4>
            <p>Manage your entire insurance lifecycle, including prospecting, quoting, follow-ups, renewals, resources, and claims analysis. All in one place. No more manually managing records across spreadsheets.</p>
          </div>
          <div class="spz-benefit-image">
            <picture>
                <source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/streamline_operations.webp">
                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/streamline_operations_tab.webp">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/streamline_operations_tab.webp" alt="Streamline operations">
            </picture>
          </div>
        </div>
        <div class="spz-benefit-item">
          <div class="spz-benefit-content">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/Increase_sales_and_distribution_icon_png.png" alt="Increase sales and distribution">
            <h4>Increase sales and distribution</h4>
            <p>Find and connect with thousands of ready-to-buy prospects. Auto-generate quotes. Instantly generate and send informative, on-brand content to nurture leads into clients. </p>
          </div>
          <div class="spz-benefit-image">
            <picture>
                <source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/increase_sales_and_distribution.webp">
                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/increase_sales_and_distribution_tab.webp">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/increase_sales_and_distribution_tab.webp" alt="Increase sales and distribution">
            </picture>
          </div>
        </div>
        <div class="spz-benefit-item">
          <div class="spz-benefit-content">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/Support_clients_icon_png.png" alt="Support clients">
            <h4>Support clients</h4>
            <p>Let clients easily update their plans and profile information. Offer self-serve information regarding policies, compliance resources, and more. Generate ACA, FMLA, and OSHA compliance reports.</p>
          </div>
          <div class="spz-benefit-image">
            <picture>
                <source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/support_clients.webp">
                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/support_clients_tab.webp">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2003/support_clients_mob_2.webp" alt="Support clients">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  if(injector.querySelectorAll('.spz-benefit-wrap').length == 0) {
    injector.insertAdjacentHTML('beforeend', hero_html);
  }
}

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="cR02"]')) {
        document.querySelector('.mktoFormRow [name="cR02"]').setAttribute('value', '#6002_variant');
    }
}
waitForElm('.zy-demo-form-section-container .zy-marketo-form-container .mktoForm input[name="cR02"]').then(function (elm) {
    setHiddenFields();
});

function formModify() {
      
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz_1004 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
      for (var i = 0; i < form_fields.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      form_fields[i].classList.add(dynamicClass);
    }
    var formDiv = document.querySelector('.spz_1004 #zy-demo-form-section form.mktoForm');
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
      formDiv.insertAdjacentHTML('beforebegin', `<h3 class="form_title">Get a demo</h3>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
      var textChng = document.querySelector('.spz_1004 #zy-demo-form-section form.mktoForm .mktoButtonRow .mktoButton');
      if (textChng) {
        textChng.innerText = 'Submit';
        clearInterval(form_button);
      }
    }, 100);
    // Updating Form Labels
    document.querySelector('#LblFirstName').textContent = "First name";
    document.querySelector('#LblLastName').textContent = "Last name";
    document.querySelector('#LblEmail').textContent = "Business email";
    document.querySelector('#LblCompany').textContent = "Company";
    document.querySelector('#LblwebsiteFormJobDescription').textContent = "Job category";
    document.querySelector('select#websiteFormJobDescription').options[0].textContent = 'Job category';
    document.querySelector('#LblPhone').textContent = "Phone";
    document.querySelector('#Lblringdna100__ProductInterest__c').textContent = "I want to discuss";
    document.querySelector('select#ringdna100__ProductInterest__c').options[0].textContent = 'I want to discuss';
    // Change Field Position
    var email_field = document.querySelector('.spz_1004 .mktoForm .mktoFormRow.field-7');
    var fname_field = document.querySelector('.spz_1004 .mktoFormRow.field-1');
    var company_field = document.querySelector('.spz_1004 .mktoFormRow.field-4');
    fname_field.before(email_field);
    fname_field.before(company_field);


    var all_inputs = document.querySelectorAll('.spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
    all_inputs.forEach(function(element) {
      element.removeAttribute('placeholder');
    });
    // form state
    var selector = '.spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
      if (event.target.matches(selector)) {
        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
      }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
      document.addEventListener(s_event, function (event) {
        if (event.target.matches(selector)) {
          if (event.target.value == null || event.target.value == '') {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
          } else {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
          }
          if (event.type == "change" && event.target.tagName == 'SELECT') {
            if (event.target.value == "") {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
            } else {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
              if (event.target.parentNode.querySelector('.mktoError').length > 0) {
                event.target.parentNode.querySelector('.mktoError').style.display = 'none';
              }
            }
          } else {
            if (event.target.classList.contains('mktoInvalid')) {
              var closestError = event.target.parentNode.querySelector('.mktoError');
              if (closestError && closestError.style.display == '') {
                event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
              } else {
                event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
              }
            } else {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
            }
          }
        }
      });
    }
      
    document.addEventListener('focusout', function (event) {
      document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
        elem.classList.remove('active', 'typing');
      })
    }, true);

    MktoForms2.getForm('1031').onSuccess(function(){
      document.querySelector('body').classList.remove('modal-open')
      // MktoForms2.getForm('1031').getFormElem()[0].reset();
    })


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
function detectOS() {
  var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  os = null;
  if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'MacOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
  } else if (/Android/.test(userAgent)) {
      os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
  }
  return os;
}
function detect_browser() {
  let browser_class = '';
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      browser_class = 'spz-opera';
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
      browser_class = 'spz-edge';
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      browser_class = 'spz-chrome';
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
      browser_class = 'spz-safari';
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      browser_class = 'spz-firefox';
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
      browser_class = 'spz-ie';
  } else {
      browser_class = '';
  }
  document.querySelector('body').classList.add(browser_class);
}
