const timer = 5000;


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
                <img class="b-default" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/incentives.webp" alt="Incentives">
                <img class="b-hover" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/incentives-hover.webp" alt="Incentives">
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
                <img class="b-default" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/incentives.webp" alt="Incentives">
                <img class="b-hover" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/incentives-hover.webp" alt="Incentives">
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
                    <div class="cta-wrapper cta-demo-1"></div>
                  </div>
                  <div class="content">
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003463.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003463.webp" alt="Insights Foundation" width="688" height="404">
                    </picture>
                  </div>
                </div>
              </div>
              <div id="c-tab2" class="c-tab-contents ">
                <div class="content-wrapper">
                  <div class="title">
                    <div class="text">Insights Foundation</div>
                  </div>
                  <div class="content">
                    <div class="text">Comprehensive insights start with Komodo&#8217;s industry-leading Healthcare Map <sup>TM</sup>, providing an average 7+ years of the patient journey for more than 330 million unique individuals in the U.S </div>
                    <picture>
                      <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003463.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003463.webp" alt="Insights Foundation" width="688" height="404">
                    </picture>
                    <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                      <span>GET A DEMO</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="p-tab2" class="p-tab-contents">
          <div class="tab-content-wrapper">
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