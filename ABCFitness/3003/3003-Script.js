(function () {
    const TEST_ENV = {
        name: 'spz-ABC-Club-Management-software-feature-accordion',
        class: 'spz-3003', // class will be used in body ex. spz-1001
        date: '15-03-23',
        base_url: 'https://learn.abcfitness.com/club-management-software', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }

    function loadTest() {
        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm('#landing-page > main section.section .widget').then(function () {
            heroContentUpdate();
            accordionShowHide();
        });
        document.body.classList.add("loaded");
    }

    function heroContentUpdate() {
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1677052478/ABCFitnessSolutions/3001/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('srcset', '//res.cloudinary.com/spiralyze/image/upload/v1677052478/ABCFitnessSolutions/3001/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:nth-child(2) .section-block .section-inner').insertAdjacentHTML('afterbegin', `<div class="spz-hero-container">
        <div class="hero-top-content">
          <div class="hero-left-summary">
            <p>CLUB MANAGEMENT SOFTWARE</p>
            <h6>Scale your club while automating operations.</h6>
            <ul>
              <li>
                <span>Sales Automation.</span> Send text and email reminders based on incomplete registrations, trials, and other sales triggers.
              </li>
              <li>
                <span>CRM.</span> Track and manage members, leads, check-ins, classes, payments, and more, in one place.
              </li>
              <li>
                <span>Operations.</span> Let members scan for entry. Manage orders, vendors, and products. Automate billing & payment collection.
              </li>
            </ul>
          </div>
          <div class="hero-right-form">
            <picture>
              <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/3001/assets/Form-desk.png">
              <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/3001/assets/form-tab.png">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/3001/assets/Form-mobile.png" alt="Form">
            </picture>
          </div>
        </div>
        <div class="hero-bottom-content">
          <p>Join 20,000+ gyms & studios using ABC Fitness Solutions</p>
          <picture>
            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1677052480/ABCFitnessSolutions/3001/assets/logos-desktop.svg">
            <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1677052480/ABCFitnessSolutions/3001/assets/logos-tablet.svg">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1677052480/ABCFitnessSolutions/3001/assets/logos-mobile.svg" alt="Social Icons">
          </picture>
        </div>
      </div>
      <div class="spz-accordion-section">
      <div class="accordion-title"><h6>Solutions for every club</h6></div>
      <div class="accordion-content">
          <div class="accordion-left-section">
              <div class="accordion" id="accordionSection">
                  <div class="accordion-item active">
                      <h2 class="accordion-header active" id="headingOne">
                          <a class="accordion-button" data-bs-target="#collapseOne">
                          Sales Automation
                          </a>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show">
                          <div class="accordion-body">
                          Send text and email reminders based on incomplete registrations, trials, and other sales triggers. Invite members back who haven’t checked in recently.
                          </div>
                      </div>
                  </div>
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                          <a class="accordion-button collapsed">
                          Member Management
                          </a>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse">
                          <div class="accordion-body">
                          Track and manage members, leads, check-ins, classes, payments, and more, in one place.
                          </div>
                      </div>
                  </div>
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                          <a class="accordion-button collapsed">
                          Member Engagement
                          </a>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse">
                          <div class="accordion-body">
                          Get a branded mobile app that lets members book classes, manage memberships and billing, schedule coaching, track fitness progress, and more.
                          </div>
                      </div>
                  </div>
                  <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                      <a class="accordion-button collapsed">
                      Operations Management
                      </a>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse">
                      <div class="accordion-body">
                      Let members scan for entry. Manage orders, vendors, and products. Streamline employee and contractor scheduling.
                      </div>
                  </div>
              </div>
              <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                  <a class="accordion-button collapsed">
                  Billing & Payments
                  </a>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                  Automate billing & payment collection. Process family & group subscriptions. Resolve billing issues with proven 90-day delinquency remediation and increase collection 7%.
                  </div>
              </div>
          </div>
          <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
              <a class="accordion-button collapsed">
              Reporting
              </a>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse">
              <div class="accordion-body">
              Get in-depth analytics on sales, operations, financials, member engagement, and more. Get insights on reducing churn & growing revenue.
              </div>
          </div>
      </div>
              </div>
          </div>
          <div class="accordion-right-image">
              <picture>
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/3003/assets/Desktop-Bg-Image.png" alt="Training Image">
                          </picture>
                      </div>
                  </div>
          </div>`);
    }

    function accordionShowHide() {
        var accItem = document.getElementsByClassName('accordion-collapse');
        var accHD = document.getElementsByClassName('accordion-header');
        for (i = 0; i < accHD.length; i++) {
            accHD[i].addEventListener('click', toggleItem, false);
        }
        function toggleItem() {
            // var itemClass = this.parentNode.querySelector('.accordion-collapse').className;
            for (i = 0; i < accItem.length; i++) {
                accItem[i].className = 'accordion-collapse collapse';
                if (accHD[i].classList.contains('active')) {
                    accHD[i].classList.remove('active');
                    accHD[i].parentNode.classList.remove('active');
                }
            }
            // if (itemClass == 'accordion-collapse collapse') {
            this.parentNode.querySelector('.accordion-collapse').className = 'accordion-collapse collapse show';
            this.classList.add('active');
            this.parentNode.classList.add('active');

            // }
        }
    }

    // Generic
    let url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.base_url;
        if (url == testURL) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
        } else {
            removeTest();
        }
    }

    function removeTest() {
        document.body.classList.remove(TEST_ENV.class);
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

    function cloneElement(source, target) {
        if (document.querySelector(source) && document.querySelector(target)) {
            const sc = document.querySelector(source);
            const clone = sc.cloneNode(true);
            document.querySelector(target).appendChild(clone);
        }
    }

    function moveElement(sourceElm, targetLoc) {
        const f = document.createDocumentFragment();
        if (document.querySelector(sourceElm) != null) {
            f.appendChild(document.querySelector(sourceElm));
            document.querySelector(targetLoc).appendChild(f);
        }
    }

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})();

