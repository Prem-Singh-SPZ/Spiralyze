const bodyInterval = setInterval(function () {
  if (document.querySelector('body')) {
    clearInterval(bodyInterval)

    document.body.classList.add('spz-4002');

    setTabsContent();
  }
}, 10);

// Set the tabs content of accordion
function setTabsContent() {
  document.querySelector('#main-content>.container-fluid>.row-fluid-wrapper>.row-fluid>.span12>.row-depth-1.row-number-1').insertAdjacentHTML('beforebegin', `<div class="hero-section">
  <div class="hero-content">
    <div class="hero-title">Interactive Product Tours</div>
    <div class="hero-subtitle">See our Incentives or Sales Planning products come to life by selecting one of the self-guided tours below.</div>
  </div>
</div>
<div class="accordion-section">
  <div class="accordion-row">
    <div class="accordion-col">
      <nav id="parent-tabs">
        <li class="active">
          <a href="#p-tab1">
            <div class="p-tab-btn">
              <div class="btn-img">
                <img class="b-default" src="//res.cloudinary.com/spiralyze/image/upload/v1720750191/varicent/4002/incentives__disabled_1.svg" alt="Incentives">
                <img class="b-hover" src="//res.cloudinary.com/spiralyze/image/upload/v1720750191/varicent/4002/incentives__active_1.svg" alt="Incentives">
              </div>
              <div class="btn-copy">
                <p class="btn-headline">Incentives</p>
                <p class="btn-desc">Incentive compensation management purpose-built for sales and revenue teams.</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#p-tab2">
            <div class="p-tab-btn">
              <div class="btn-img">
                <img class="b-default" src="//res.cloudinary.com/spiralyze/image/upload/v1720750191/varicent/4002/sales_planning__disabled_2.svg" alt="Sales Planning">
                <img class="b-hover" src="//res.cloudinary.com/spiralyze/image/upload/v1720750191/varicent/4002/sales_planning__active_2.svg" alt="Sales Planning">
              </div>
              <div class="btn-copy">
                <p class="btn-headline">Sales Planning</p>
                <p class="btn-desc">Design and manage dynamic sales plans to optimize market coverage and monitor performance.</p>
              </div>
            </div>
          </a>
        </li>
      </nav>
      <div id="p-tab-contents">
        <div id="p-tab1" class="p-tab-contents active">
          <div class="tab-content-wrapper">
            <nav id="child-tabs">
              <li class="active">
                <a href="#c-tab1">Payee</a>
              </li>
              <li>
                <a href="#c-tab2">Manager</a>
              </li>
               <li>
                <a href="#c-tab3">Admin</a>
              </li>
               <li>
                <a href="#c-tab4">Business User</a>
              </li>
            </nav>
            <div id="c-tab-contents">
              <div id="c-tab1" class="c-tab-contents active">
                <div class="content-wrapper">
                  <div class="copy-wrapper">
                    <div class="title">Payee Experience Tour</div>
                    <div class="desc">Let the sales team see their payouts, current incentive plans, and how closing certain deals affects pay. Automate bookkeeping. Mobile, desktop, & tablet.</div>
                    <div class="cta-wrapper cta-demo-1">
                    <a href="#" class="btn btn-primary abc cd-1" data-bs-toggle="modal" data-bs-target="#modal-popup-widget_1669056290914">Instant Access</a>
                    </div>
                  </div>
                  <div class="content with-overlay">
                    <a href="//www.varicent.com/interactive-product-tours/payee-experience" target="_blank" rel="noopener">
                      <picture>
                        <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/desktop__payee_experience_tour.webp">
                        <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/tablet__payee_experience_tour.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/mobile__payee_experience_tour.webp" alt="Payee Experience Tour">
                      </picture>  
                    </a>
                  </div>
                </div>
              </div>
              <div id="c-tab2" class="c-tab-contents ">
                <div class="content-wrapper">
                  <div class="copy-wrapper">
                    <div class="title">Manager Experience Tour</div>
                    <div class="desc">View sales team performance. Identify quota gaps and sellers that need coaching. Automatically get alerts when sellers submit compensation inquiries. </div>
                    <div class="cta-wrapper cta-demo-1"><a href="#" class="btn btn-primary abc cd-1" data-bs-toggle="modal" data-bs-target="#modal-popup-widget_1669056290914">Instant Access</a></div>
                  </div>
                  <div class="content with-overlay">
                    <a href="//www.varicent.com/interactive-product-tours/manager-experience" target="_blank" rel="noopener">
                    <picture>
                      <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/desktop__manager_experience_tour.webp">
                      <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/tablet__manager_experience_tour.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/mobile__manager_experience_tour.webp" alt="Manager Experience Tour">
                    </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div id="c-tab3" class="c-tab-contents ">
                <div class="content-wrapper">
                  <div class="copy-wrapper">
                    <div class="title">Admin Experience Tour</div>
                    <div class="desc">Manage data, people, and commissions in one place. Generate reports on sales by region, total revenue, and plan performance. Optimize incentive plans.</div>
                    <div class="cta-wrapper cta-demo-1"><a href="#" class="btn btn-primary abc cd-1" data-bs-toggle="modal" data-bs-target="#modal-popup-widget_1669056290914">Instant Access</a></div>
                  </div>
                  <div class="content with-overlay">
                    <a href="//www.varicent.com/interactive-product-tours/admin-experience" target="_blank" rel="noopener">
                      <picture>
                        <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/desktop__admin_experience_tour.webp">
                        <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/tablet__admin_experience_tour.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/mobile__admin_experience_tour.webp" alt="Admin Experience Tour">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div id="c-tab4" class="c-tab-contents ">
                <div class="content-wrapper">
                  <div class="copy-wrapper">
                    <div class="title">Business User Experience Tour</div>
                    <div class="desc">Sync compensation and sales data from 24+ integrations. Validate rosters and transactions, consolidate orders, track territory changes, and more.</div>
                    <div class="cta-wrapper cta-demo-1"><a href="#" class="btn btn-primary abc cd-1" data-bs-toggle="modal" data-bs-target="#modal-popup-widget_1669056290914">Instant Access</a></div>
                  </div>
                  <div class="content with-overlay">
                    <a href="https://www.varicent.com/interactive-product-tours/business-user-experience" target="_blank" rel="noopener">
                    <picture>
                      <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/desktop__business_user_experience_tour.webp">
                      <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/tablet__business_user_experience_tour.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/mobile__business_user_experience_tour.webp" alt="Business User Experience Tour">
                    </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="p-tab2" class="p-tab-contents">
          <div class="tab-content-wrapper">
            <nav id="child-tabs-2">
              <li class="active">
                <a href="#c2-tab1">Sales Operations</a>
              </li>
              <li>
                <a href="#c2-tab2">Sales Manager</a>
              </li>
            </nav>
            <div id="c-tab-contents-2">
              <div id="c2-tab1" class="c-tab-contents-2 active">
                <div class="content-wrapper">
                  <div class="copy-wrapper">
                    <div class="title">Sales Operations Experience Tour</div>
                    <div class="desc">Build and optimize market plans. Monitor sales performance. Compare sales by region, country, and team member. Adjust plans to meet goals.</div>
                    <div class="cta-wrapper cta-demo-2"><a href="#" class="btn btn-primary cd-2" data-bs-toggle="modal" data-bs-target="#modal-popup-module_1669058258137">Instant Access</a></div>
                  </div>
                  <div class="content with-overlay">
                    <a href="//www.varicent.com/interactive-product-tours/sales-operation-experience" target="_blank" rel="noopener">
                    <picture>
                      <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/desktop__sales_operations_experience_tour.webp">
                      <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/tablet__sales_operations_experience_tour.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/mobile__sales_operations_experience_tour.webp" alt="Sales Operations Experience Tour">
                    </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div id="c2-tab2" class="c-tab-contents-2 ">
                <div class="content-wrapper">
                  <div class="copy-wrapper">
                    <div class="title">Sales Manager Experience Tour</div>
                    <div class="desc">Build territory and quota assignments. Instantly draw new boundaries and compare scenarios. Collaborate with other sales managers to optimize plans.</div>
                    <div class="cta-wrapper cta-demo-2"><a href="#" class="btn btn-primary cd-2" data-bs-toggle="modal" data-bs-target="#modal-popup-module_1669058258137">Instant Access</a></div>
                  </div>
                  <div class="content with-overlay">
                    <a href="https://www.varicent.com/interactive-product-tours/sales-manager-experience" target="_blank" rel="noopener">
                    <picture>
                      <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/desktop__sales_manager_experience_tour.webp">
                      <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/tablet__sales_manager_experience_tour.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/4002/mobile__sales_manager_experience_tour.webp" alt="Sales Manager Experience Tour">
                    </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);

  // Nav buttons functionality
  var tabLabels = document.querySelectorAll("#parent-tabs li");
  var tabPanes = document.getElementsByClassName("p-tab-contents");

  function activateTab(e) {
    e.preventDefault();

    // Deactivate all tabs
    tabLabels.forEach(function (label, index) {
      label.classList.remove("active");
    });
    [].forEach.call(tabPanes, function (pane, index) {
      pane.classList.remove("active");
    });

    // Activate current tab
    e.target.parentNode.classList.add("active");
    var clickedTab = e.target.getAttribute("href");
    document.querySelector(clickedTab).classList.add("active");
  }

  // Apply event listeners
  tabLabels.forEach(function (label, index) {
    label.addEventListener("click", activateTab);
  });


  //convert above code to be dynamic
  var childTabs = document.querySelectorAll("#child-tabs li");
  var childPanes = document.getElementsByClassName("c-tab-contents");

  function activateChildTab(e) {
    e.preventDefault();

    // Deactivate all tabs
    childTabs.forEach(function (label, index) {
      label.classList.remove("active");
    });
    [].forEach.call(childPanes, function (pane, index) {
      pane.classList.remove("active");
    });

    // Activate current tab
    e.target.parentNode.classList.add("active");
    var clickedTab = e.target.getAttribute("href");
    document.querySelector(clickedTab).classList.add("active");
  }

  // Apply event listeners
  childTabs.forEach(function (label, index) {
    label.addEventListener("click", activateChildTab);
  });

  //convert above code to be dynamic
  var childTabs2 = document.querySelectorAll("#child-tabs-2 li");
  var childPanes2 = document.getElementsByClassName("c-tab-contents-2");

  function activateChildTab2(e) {
    e.preventDefault();

    // Deactivate all tabs
    childTabs2.forEach(function (label, index) {
      label.classList.remove("active");
    });
    [].forEach.call(childPanes2, function (pane, index) {
      pane.classList.remove("active");
    });

    // Activate current tab
    e.target.parentNode.classList.add("active");
    var clickedTab = e.target.getAttribute("href");
    document.querySelector(clickedTab).classList.add("active");
  }

  // Apply event listeners
  childTabs2.forEach(function (label, index) {
    label.addEventListener("click", activateChildTab2);
  });


  //window click event listener
  window.addEventListener("click", function (e) {
    if (e.target.classList.contains('cd-1')) {
      postMsg('#c-tab-contents .c-tab-contents', '.cd-1');
    }

    if (e.target.classList.contains('cd-2')) {
      postMsg('#c-tab-contents-2 .c-tab-contents-2', '.cd-2');
    }
  });

  function postMsg(overlay, target) {
    window.addEventListener("message", function (a) {
      if ("hsFormCallback" === a.data.type && "onFormSubmitted" === a.data.eventName) {
        document.querySelectorAll(overlay).forEach(function (tab) {
          tab.querySelector('.content-wrapper .content.with-overlay').classList.remove('with-overlay');
        });

        document.querySelectorAll(target).forEach(function (btn) {
          btn.classList.add('spz-hide');
        });
      }
    });
  }

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
