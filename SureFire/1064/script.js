runTest();

function runTest() {
  var bodyEle = document.querySelector('body');
  if (!bodyEle.classList.contains('spz_t1064')) {
    bodyEle.classList.add('spz_t1064');
    codeTest();
  }
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1702644432/SurefireLocal/1064/code/style.css';
  document.head.appendChild(link);    


  function codeTest() {
    let testscode = setInterval(function () {
      var megaMenuLinks = document.querySelectorAll('#mega-menu-wrap-primary #mega-menu-primary > li.mega-request-btn a.mega-menu-link');
      var megaRequestBtnInput = document.querySelector('#mega-menu-wrap-primary #mega-menu-primary > li.mega-request-btn input');

      if (megaMenuLinks.length > 0 && !megaRequestBtnInput) {
        clearInterval(testscode);

        var desktopContainer = document.querySelectorAll('.spz_t1064 #mega-menu-wrap-primary #mega-menu-primary > li.mega-menu-item.mega-request-btn')[0];
        var tabletContainer = document.querySelectorAll('.spz_t1064 #mega-menu-wrap-primary #mega-menu-primary > li.mega-menu-item.mega-request-btn')[1];

        desktopContainer.classList.add('desktop-container');
        tabletContainer.classList.add('tablet-container');

        document.querySelector('.top-header-phone .header-top-cta').insertAdjacentHTML('beforebegin', `<a class="mega-menu-link" href="https://www.surefireplatform.com/" tabindex="0">LOG IN</a>`);
        document.querySelector('.top-header-phone .header-top-cta').insertAdjacentHTML('beforebegin', `<div class="spzFieldWrapper"><input id="Email" name="Email" placeholder="Work Email" type="email" class="email-input" spellcheck="false"><div class="error-msg">Please enter a valid Email address</div><button class="dummy-CTA" value="" tabindex="0">Request A Demo</button></div>`);

        var requestDemoCtas = document.querySelectorAll('#mega-menu-wrap-primary #mega-menu-primary > li.mega-request-btn');
        requestDemoCtas.forEach(function (requestDemoCta) {
          requestDemoCta.insertAdjacentHTML('afterbegin', '<div class="spzFieldWrapper"><input id="Email" name="Email" placeholder="Work Email" type="email" class="email-input" spellcheck="false"><div class="error-msg">Please enter a valid Email address</div><button class="dummy-CTA" value="" tabindex="0">Request A Demo</button></div>');
        });

        var fsFormInterval = setInterval(function () {
          var emailInputs = document.querySelectorAll('.email-input');
          if (emailInputs.length > 0) {
            clearInterval(fsFormInterval);
            emailInputs.forEach(function (emailInput) {
              var fieldWrapper = emailInput.closest('.spzFieldWrapper');
              var errorMsg = fieldWrapper.querySelector('.error-msg');

              if (fieldWrapper.classList.contains('error')) {
                fieldWrapper.classList.remove('error');
                errorMsg.style.display = 'none';
              }

              if (emailInput && fieldWrapper) {
                if (!document.querySelector('#mega-menu-wrap-primary #mega-menu-primary > li.mobile-btn-menu.mega-request-btn .spzFieldWrapper .login-link')) {
                  document.querySelector('#mega-menu-wrap-primary #mega-menu-primary > li.mobile-btn-menu.mega-request-btn .spzFieldWrapper .dummy-CTA').insertAdjacentHTML('afterend', '<a class="login-link" href="https://www.surefireplatform.com/" tabindex="0">LOG IN</a>');
                }

                emailInput.addEventListener('focus', function () {
                  fieldWrapper.classList.add('active', 'typing');
                });

                emailInput.addEventListener('blur', function () {
                  var emailValue = emailInput.value;
                  var isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(emailValue);


                  if (emailValue.length === 0) {
                    fieldWrapper.classList.remove('active');
                  }
                  fieldWrapper.classList.remove('typing');
                  if (isValidEmail) {
                    errorMsg.style.display = 'none';
                    fieldWrapper.classList.remove('error');
  
                    if (fieldWrapper.closest('.main-top-header')) {
                      fieldWrapper.closest('.top-header-phone').classList.remove('error');
                    } else {
                      fieldWrapper.closest('ul').classList.remove('error');
                    }
                  } else {
                    errorMsg.style.display = 'block';
                    fieldWrapper.classList.add('error');
            
                    if (fieldWrapper.closest('.main-top-header')) {
                      fieldWrapper.closest('.top-header-phone').classList.add('error');
                    } else {
                      fieldWrapper.closest('ul').classList.add('error');
                    }
                  }
                });

                emailInput.addEventListener('keypress', function (e) {
                  if (e.which === 13 || e.key === 'Enter') {
                    document.querySelector('.spzFieldWrapper .dummy-CTA').click();
                  }
                });
              }
            });
          }
        }, 100);
        
        var dummyCTAButtons = document.querySelectorAll('.dummy-CTA');
        
        dummyCTAButtons.forEach(function (dummyCTAButton) {
          dummyCTAButton.addEventListener('click', function () {
            var fieldWrapper = dummyCTAButton.closest('.spzFieldWrapper');
            var emailInput = fieldWrapper.querySelector('.email-input');
            validEmail(emailInput, fieldWrapper);
          });
        });
      }
    }, 100);
  }

  function validEmail(emailInput, fieldWrapper) {
    var emailValue = emailInput.value;
    var isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(emailValue);
    var errorMsg = fieldWrapper.querySelector('.error-msg');
    var ctaButton = document.querySelector('#mega-menu-wrap-primary #mega-menu-primary > li.mega-request-btn a.mega-menu-link');
    if (ctaButton) {
      
      if (isValidEmail) {
        errorMsg.style.display = 'none';
        fieldWrapper.classList.remove('error');
        
        if (fieldWrapper.closest('.main-top-header')) {
          fieldWrapper.closest('.top-header-phone').classList.remove('error');
        } else {
          fieldWrapper.closest('ul').classList.remove('error');
        }
        window.location.href = 'https://info.surefirelocal.com/lp/demo?email=' + encodeURIComponent(emailInput.value);
        
      } else {
        errorMsg.style.display = 'block';
        fieldWrapper.classList.add('error');

        if (fieldWrapper.closest('.main-top-header')) {
          fieldWrapper.closest('.top-header-phone').classList.add('error');
        } else {
          fieldWrapper.closest('ul').classList.add('error');
        }
      }
    }
  }
}

runTest2();
function runTest2() {
  var bodyEle = document.querySelector('body');
  if (!bodyEle.classList.contains('spz_t1061')) {
    bodyEle.classList.add('spz_t1061');
  }

  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1692794192/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/css/style-v1.css';
  document.head.appendChild(link);

  var check_wrap_exist = setInterval(function () {
    if (document.querySelector('.site-section.hero-section') != null) {
      clearInterval(check_wrap_exist);
      var reviewInterval = setInterval(() => {
        if(jQuery('.site-section.hero-section .google-review').length > 0){
          clearInterval(reviewInterval);
            jQuery('.site-section.hero-section .google-review').replaceWith(`<div class="google-review"><span class="review-img">\
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1692185014/surefirelocal/1063/frame.svg" alt="G2 reviews" title="G2 reviews">\
              </span><span class="stars-img"><span>4.8</span>\
              <span><img src="/wp-content/themes/surefirelocal/images/assets/stars.png" alt="stars" title="stars">\
              </span></span><span class="num-rating">51 Reviews</span></div>`);
        }
      }, 100);
      if(jQuery('.grow-section').length === 0){
        jQuery('.site-section.hero-section').after('<div class="grow-section">\
                <div class="container">\
                  <div class="reviews-code">\
                    <h2>See how Surefire helps local businesses grow revenue</h2>\
                    <div class="grow-menu-slider">\
                      <div class="grow-menu-content mobile-reviews">\
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.953 7.51842C18.8352 7.15394 18.5119 6.89507 18.1295 6.8606L12.9342 6.38886L10.8798 1.58044C10.7283 1.22805 10.3834 0.999939 10.0001 0.999939C9.61678 0.999939 9.2718 1.22805 9.12032 1.58127L7.06597 6.38886L1.86986 6.8606C1.48808 6.89589 1.16562 7.15394 1.0471 7.51842C0.928585 7.8829 1.03804 8.28267 1.32685 8.53468L5.25387 11.9787L4.09588 17.0796C4.01115 17.4547 4.15672 17.8424 4.46791 18.0673C4.63518 18.1882 4.83088 18.2497 5.02823 18.2497C5.19838 18.2497 5.36717 18.2038 5.51864 18.1132L10.0001 15.4348L14.4799 18.1132C14.8077 18.3104 15.2209 18.2924 15.5314 18.0673C15.8427 17.8417 15.9882 17.4539 15.9034 17.0796L14.7455 11.9787L18.6725 8.53536C18.9613 8.28267 19.0716 7.88358 18.953 7.51842Z" fill="#868686"/></svg>\
                        <h3>Reviews</h3>\
                      </div>\
                      <div class="grow-menu-content search-mobile">\
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0607 15.4397L14.2529 11.6319C15.0397 10.4461 15.5002 9.02634 15.5002 7.50008C15.5002 3.36454 12.1356 0 8.00008 0C3.86454 0 0.5 3.36454 0.5 7.50008C0.5 11.6356 3.86454 15.0002 8.00008 15.0002C9.52634 15.0002 10.9461 14.5397 12.1319 13.7529L15.9397 17.5607C16.5247 18.1464 17.4757 18.1464 18.0607 17.5607C18.6464 16.9749 18.6464 16.0254 18.0607 15.4397ZM2.75002 7.50008C2.75002 4.60505 5.10505 2.25002 8.00008 2.25002C10.8951 2.25002 13.2501 4.60505 13.2501 7.50008C13.2501 10.3951 10.8951 12.7501 8.00008 12.7501C5.10505 12.7501 2.75002 10.3951 2.75002 7.50008Z" fill="#868686"/></svg>\
                        <h3>Search Visibility</h3>\
                      </div>\
                      <div class="grow-menu-content">\
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.875 0.25H1.125C0.95924 0.25 0.800269 0.315848 0.683058 0.433058C0.565848 0.550268 0.5 0.70924 0.5 0.875V2.75C0.5 2.91576 0.565848 3.07473 0.683058 3.19194C0.800269 3.30915 0.95924 3.375 1.125 3.375H1.75L6.125 9.625V17.1242C6.125 17.2307 6.15224 17.3355 6.20412 17.4285C6.25599 17.5216 6.3308 17.5998 6.42142 17.6558C6.51204 17.7118 6.61548 17.7438 6.7219 17.7486C6.82833 17.7533 6.93421 17.7308 7.0295 17.6832L9.5295 16.4332C9.63332 16.3813 9.72063 16.3015 9.78166 16.2028C9.84268 16.104 9.875 15.9903 9.875 15.8742V9.625L14.25 3.375H14.875C15.0408 3.375 15.1997 3.30915 15.3169 3.19194C15.4342 3.07473 15.5 2.91576 15.5 2.75V0.875C15.5 0.70924 15.4342 0.550268 15.3169 0.433058C15.1997 0.315848 15.0408 0.25 14.875 0.25Z" fill="#868686"/></svg>\
                        <h3>Quality Leads</h3>\
                      </div>\
                      <div class="grow-menu-content">\
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9C9.2364 9 10.307 8.55654 11.1818 7.6816C12.0566 6.8068 12.5 5.73643 12.5 4.49986C12.5 3.26371 12.0566 2.1932 11.1816 1.31811C10.3067 0.443457 9.23625 0 8 0C6.76346 0 5.69313 0.443457 4.81836 1.31826C3.94359 2.19305 3.5 3.26357 3.5 4.49986C3.5 5.73643 3.94359 6.80695 4.8185 7.68174C5.69341 8.5564 6.76389 9 8 9Z" fill="#868686"/><path d="M15.8368 13.9775C15.8113 13.6383 15.7598 13.2682 15.6839 12.8775C15.6073 12.4838 15.5086 12.1116 15.3905 11.7715C15.2685 11.4199 15.1026 11.0727 14.8975 10.74C14.6846 10.3946 14.4346 10.0939 14.154 9.84647C13.8606 9.5876 13.5014 9.37947 13.086 9.22766C12.6721 9.07664 12.2134 9.00013 11.7227 9.00013C11.53 9.00013 11.3436 9.07305 10.9837 9.28915C10.7622 9.42237 10.5031 9.57645 10.2138 9.74686C9.96655 9.89216 9.63155 10.0283 9.21775 10.1516C8.81404 10.272 8.40414 10.3331 7.99957 10.3331C7.59499 10.3331 7.18524 10.272 6.78109 10.1516C6.36773 10.0284 6.03273 9.8923 5.78572 9.74699C5.49925 9.57817 5.24 9.4241 5.01517 9.28902C4.65568 9.07292 4.46916 9 4.27645 9C3.78561 9 3.32702 9.07664 2.91323 9.22779C2.49814 9.37934 2.13879 9.58747 1.84512 9.84661C1.5647 10.0942 1.31452 10.3948 1.10194 10.74C0.896988 11.0727 0.731068 11.4197 0.608933 11.7716C0.490974 12.1117 0.392315 12.4838 0.315693 12.8775C0.23979 13.2677 0.188228 13.6379 0.162735 13.9779C0.137674 14.311 0.125 14.6567 0.125 15.0059C0.125 15.9147 0.43826 16.6504 1.05599 17.193C1.6661 17.7284 2.47337 18 3.45506 18H12.5449C13.5266 18 14.3336 17.7285 14.9439 17.193C15.5617 16.6508 15.875 15.915 15.875 15.0058C15.8749 14.655 15.862 14.309 15.8368 13.9775Z" fill="#868686"/></svg>\
                        <h3>Repeat Customers</h3>\
                      </div>\
                      <div class="grow-menu-content revenue-sec">\
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0.1875C4.59766 0.1875 0.195312 4.58203 0.195312 9.99219C0.195312 15.4023 4.58984 19.7969 10 19.7969C15.4102 19.7969 19.8047 15.4023 19.8047 9.99219C19.8047 4.58203 15.4023 0.1875 10 0.1875ZM13.2852 13.5859C13.0742 13.9844 12.7852 14.3164 12.4375 14.582C12.0859 14.8398 11.6953 15.0313 11.2578 15.1641C11.1367 15.1992 11.0117 15.2344 10.8867 15.2539V15.8438C10.8867 16.3359 10.4883 16.7344 9.99609 16.7344C9.50391 16.7344 9.09766 16.3359 9.09766 15.8359V15.2969C8.82422 15.2539 8.55078 15.1992 8.28906 15.1211C7.76953 14.9648 7.32031 14.707 6.91406 14.418C6.73828 14.2969 6.50781 14.0234 6.50781 14.0234C6.41797 13.9336 6.29688 13.7852 6.29688 13.4688C6.29688 13.0117 6.66797 12.6328 7.11719 12.6406C7.41797 12.6406 7.70703 12.8867 7.70703 12.8867C8 13.125 8.16406 13.2734 8.45703 13.3984C8.88672 13.5898 9.38281 13.6797 9.92969 13.6797C10.2656 13.6797 10.582 13.6172 10.8789 13.4961C11.1602 13.375 11.3906 13.207 11.5742 12.9922C11.7422 12.7813 11.8281 12.5273 11.8281 12.2188C11.8281 11.8203 11.6797 11.4766 11.3867 11.1602C11.0859 10.8438 10.5742 10.6484 9.85547 10.5625C9.16797 10.4922 8.55078 10.3164 8.03125 10.043C7.50391 9.76953 7.08203 9.40234 6.79688 8.96094C6.50781 8.51953 6.36328 8.00781 6.36328 7.44531C6.36328 6.83594 6.53906 6.30078 6.875 5.85938C7.21094 5.42969 7.66016 5.09375 8.22266 4.87109C8.50391 4.75781 8.79297 4.66797 9.10156 4.61328V4.01562C9.10156 3.52344 9.5 3.125 9.99219 3.125C10.4844 3.125 10.8906 3.52344 10.8906 4.02344V4.59766C11.1133 4.63281 11.3203 4.6875 11.5078 4.75781C11.9297 4.91406 12.293 5.13672 12.5938 5.41797C12.7617 5.57812 12.918 5.75391 13.0586 5.94531C13.0781 5.97266 13.1094 6 13.1289 6.03125C13.2188 6.15625 13.2695 6.32031 13.2695 6.49609C13.2695 6.95312 12.8125 7.28125 12.4414 7.31641C12.0898 7.35156 11.7617 6.95312 11.7617 6.95312C11.6133 6.76172 11.4453 6.60156 11.25 6.46875C10.957 6.27344 10.543 6.16797 10.0156 6.16016C9.45312 6.15234 8.99219 6.26562 8.625 6.50391C8.28906 6.72266 8.125 7.03125 8.125 7.46484C8.125 7.6875 8.17578 7.91406 8.28125 8.125C8.37891 8.32031 8.57422 8.50391 8.86328 8.66406C9.16406 8.83203 9.62891 8.95312 10.2305 9.02344C11.2422 9.12109 12.0547 9.44531 12.6641 9.98438C13.2891 10.5312 13.6055 11.2773 13.6055 12.1953C13.6016 12.7227 13.4961 13.1875 13.2852 13.5859Z" fill="#868686"/></svg>\
                        <h3>Revenue</h3>\
                      </div>\
                    </div>\
                    <div class="tab-background">\
                      <div class="nav-slider-tab">\
                        <div class="tab-slide-content first-slider">\
                            <div class="main-tab-content">\
                              <div class="tab-part left-tab-content">\
                                <div class="prefix">\
                                  <p>MORE REVIEWS</p>\
                                </div>\
                                <div class="heading-tab-part">\
                                  <h2>Businesses see a 50% increase in revenue when they get more reviews.</h2>\
                                </div>\
                                <div class="listing-tab">\
                                  <ul class="tab-ul">\
                                    <li><b>Automate Requests.</b> Send automatic review requests to customers by text or email.</li>\
                                    <li><b>Reminders.</b> Follow up with customers who forget to leave a review.</li>\
                                    <li><b>Respond.</b> Reply to reviews across platforms from one place, both positive and negative.</li>\
                                  </ul>\
                                </div>\
                                <div class="request-btn">\
                                  <a href="https://info.surefirelocal.com/lp/demo">Request a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1685075837/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/button-check.svg" alt="Check arrow"></a>\
                                </div>\
                              </div>\
                              <div class="tab-part right-tab-image">\
                                <div class="tab-image">\
                                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/Search_Visibility.png" alt="Reviews" title="Reviews">\
                                </div>\
                              </div>\
                            </div>\
                        </div>\
                        <div class="tab-slide-content">\
                            <div class="main-tab-content">\
                              <div class="tab-part left-tab-content">\
                                <div class="prefix">\
                                  <p>Get seen and be noticed</p>\
                                </div>\
                                <div class="heading-tab-part">\
                                  <h2>Online visibility is the #1 way to get more customers.</h2>\
                                </div>\
                                <div class="listing-tab">\
                                  <ul class="tab-ul">\
                                    <li><b>SEO.</b> Optimize your site to get more free traffic from Google.</li>\
                                    <li><b>Local.</b> Complete your Google local listing to dominate local <br>search.</li>\
                                    <li><b>Advertise.</b> Place targeted Google ads that attract your ideal customer.</li>\
                                  </ul>\
                                </div>\
                                <div class="request-btn">\
                                  <a href="https://info.surefirelocal.com/lp/demo">Request a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1685075837/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/button-check.svg" alt="Check arrow"></a>\
                                </div>\
                              </div>\
                              <div class="tab-part right-tab-image">\
                                <div class="tab-image">\
                                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/Reviews.png" alt="Search_Visibility" title="Search_Visibility">\
                                </div>\
                              </div>\
                            </div>\
                        </div>\
                        <div class="tab-slide-content">\
                            <div class="main-tab-content">\
                              <div class="tab-part left-tab-content">\
                                <div class="prefix">\
                                  <p>Quality leads</p>\
                                </div>\
                                <div class="heading-tab-part">\
                                  <h2>Improving lead quality can double your closing rate.</h2>\
                                </div>\
                                <div class="listing-tab">\
                                  <ul class="tab-ul">\
                                    <li><b>Targeting.</b> Build a digital footprint focused on high quality customers.</li>\
                                    <li><b>Optimize.</b> Refine digital campaigns to avoid unqualified visitors.</li>\
                                    <li><b>Analytics.</b> Track results and measure lead quality improvement over time.</li>\
                                  </ul>\
                                </div>\
                                <div class="request-btn">\
                                  <a href="https://info.surefirelocal.com/lp/demo">Request a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1685075837/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/button-check.svg" alt="Check arrow"></a>\
                                </div>\
                              </div>\
                              <div class="tab-part right-tab-image">\
                                <div class="tab-image">\
                                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/Quality_Leads.png" alt="Quality_Leads" title="Quality_Leads">\
                                </div>\
                              </div>\
                            </div>\
                        </div>\
                        <div class="tab-slide-content">\
                            <div class="main-tab-content">\
                              <div class="tab-part left-tab-content">\
                                <div class="prefix">\
                                  <p>Repeat customers</p>\
                                </div>\
                                <div class="heading-tab-part">\
                                  <h2>It’s 7x cheaper to retain<br> existing customers than<br> generate new ones.</h2>\
                                </div>\
                                <div class="listing-tab">\
                                  <ul class="tab-ul">\
                                    <li><b>Promotions.</b> Create special offers exclusively for previous customers.</li>\
                                    <li><b>Content.</b> Provide value to previous customers with ongoing education.</li>\
                                    <li><b>Customer Service.</b> Offer exceptional customer service so customers are excited to return.</li>\
                                  </ul>\
                                </div>\
                                <div class="request-btn">\
                                  <a href="https://info.surefirelocal.com/lp/demo">Request a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1685075837/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/button-check.svg" alt="Check arrow"></a>\
                                </div>\
                              </div>\
                              <div class="tab-part right-tab-image">\
                                <div class="tab-image">\
                                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/Repeat_Customers.png" alt="Repeat_Customers" title="Repeat_Customers">\
                                </div>\
                              </div>\
                            </div>\
                        </div>\
                        <div class="tab-slide-content last-slide">\
                            <div class="main-tab-content">\
                              <div class="tab-part left-tab-content">\
                                <div class="prefix">\
                                  <p>More revenue</p>\
                                </div>\
                                <div class="heading-tab-part">\
                                  <h2>Get up to 320% more leads, customers, and revenue with optimized digital marketing.</h2>\
                                </div>\
                                <div class="listing-tab">\
                                  <ul class="tab-ul revenue-teb">\
                                    <li><b>Increase Visibility.</b> Optimize your business’s profile on popular search platforms including Google, Bing, and Yahoo.</li>\
                                    <li><b>Nurture Prospects.</b> Build and nurture customer relationships with emails, social media, and web content.</li>\
                                    <li><b>Customer Service.</b> Offer exceptional customer service so customers are excited to return.</li>\
                                  </ul>\
                                </div>\
                                <div class="request-btn">\
                                  <a href="https://info.surefirelocal.com/lp/demo">Request a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1685075837/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/button-check.svg" alt="Check arrow"></a>\
                                </div>\
                              </div>\
                              <div class="tab-part right-tab-image">\
                                <div class="tab-image">\
                                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/SurefireLocal/1061-Surefire-Home-Add-Benefits-Section/Revenue.png" alt="Revenue" title="Revenue">\
                                </div>\
                              </div>\
                            </div>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
        </div>');
        window.onload = function (e) {
          if (window.innerWidth < 1300) {
            if (!jQuery('.feature-wrapper').hasClass('slick-initialized')) {
              jQuery('.feature-wrapper').slick({
                infinite: true,
                slidesToShow: 7,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: false,
                centerMode: true,
                responsive: [
                  {
                    breakpoint: 1100,
                    settings: {
                      centerMode: true,
                      slidesToShow: 6,
                    }
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      centerMode: true,
                      slidesToShow: 5,
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      centerMode: true,
                      slidesToShow: 4,
                    }
                  },
                  {
                    breakpoint: 640,
                    settings: {
                      centerMode: true,
                      slidesToShow: 3,
                    }
                  },
                  {
                    breakpoint: 510,
                    settings: {
                      centerMode: true,
                      slidesToShow: 2,
                    }
                  }
                ]
              });
            }
          }
        }
        jQuery('.nav-slider-tab').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          cssEase: 'linear',
          swipeToSlide: true,
          // rtl: false,
          autoplaySpeed: 5000,
          // pauseOnHover:false,
          asNavFor: '.grow-menu-slider'
        });
        slider_code();
        window.onresize = function (event) {
          slider_code();
        }

      }

      //jQuery.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
    }
  }, 100);

};

function slider_code() {
  if (jQuery('.grow-menu-slider.slick-initialized').length) {
    jQuery('.grow-menu-slider').slick('unslick');
  }
  if (window.innerWidth > 1200) {

    jQuery('.grow-menu-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.nav-slider-tab',
      focusOnSelect: true
    });

  } else if (window.innerWidth <= 1200 && window.innerWidth > 1024) {

    jQuery('.grow-menu-slider').slick({

      slidesToScroll: 1,
      asNavFor: '.nav-slider-tab',
      focusOnSelect: true,
      slidesToShow: 4,
      //infinite: false,
      arrows: true
    });

  } else if (window.innerWidth <= 1024 && window.innerWidth > 680) {

    jQuery('.grow-menu-slider').slick({
      slidesToScroll: 1,
      asNavFor: '.nav-slider-tab',
      focusOnSelect: true,
      slidesToShow: 3,
      //infinite: true,
      arrows: true
    });

  } else if (window.innerWidth <= 680 && window.innerWidth > 575) {

    jQuery('.grow-menu-slider').slick({
      slidesToScroll: 1,
      asNavFor: '.nav-slider-tab',
      focusOnSelect: true,
      slidesToShow: 2,
      //infinite: true,
      arrows: true
    });

  } else {

    jQuery('.grow-menu-slider').slick({
      slidesToScroll: 1,
      asNavFor: '.nav-slider-tab',
      focusOnSelect: true,
      slidesToShow: 1,
      //infinite: true,
      arrows: true
    });

  }
}