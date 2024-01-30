const swiperJS = document.createElement('script');
swiperJS.src = '//cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.js';
swiperJS.type = 'text/javascript';
document.head.appendChild(swiperJS);

const bsJS = document.createElement('script');
bsJS.src = '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
bsJS.type = 'text/javascript';
document.head.appendChild(bsJS);

appendPreload()
function appendPreload() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.css"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1706528506/unanet/4001/src/arrow-hovered.svg" as="image">`
    );
}

let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        loadTest();
    }
});

function loadTest() {
    waitForElm('.dnd-module .hs_cos_wrapper .btn').then(function () {
        document.body.classList.add('spz-4001');

        if (document.querySelectorAll('.spz-sections-wrapper').length == 0) {
            document.querySelector('main#main-content.body-container-wrapper .body-container--home > .row-fluid-wrapper > .row-fluid').insertAdjacentHTML('afterbegin', pageHTML);
        }
    });

    window.addEventListener("load", function () {
        var tabChange = function() {
            var tabs = $(".nav-tabs > li");
            var active = tabs.filter(".active").removeClass("active");
            var next = active.next("li").length
              ? active.next("li")
              : tabs.filter(":first-child")
            // Bootsrap tab show, para ativar a tab
            next.addClass("active").find("a").tab("show")
          };
          // Tab Cycle function
          var tabCycle = setInterval(tabChange, 5000);
          // Tab click event handler
          $(function() {
            $(".nav-tabs a").click(function(e) {
              e.preventDefault();
              $(".nav-tabs .active").removeClass("active")
              // Stop the cycle
              clearInterval(tabCycle);
              // Show the clicked tabs associated tab-pane
              $(this).tab("show");
              $(this).parent().addClass("active");
              // Start the cycle again in a predefined amount of time
              setTimeout(function() {
                tabCycle = setInterval(tabChange, 5000);
              }, 1);
            });
          });
    });
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

const pageHTML = `<div class="spz-sections-wrapper">
<section class="hero-section">
  <div class="spz-container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="hero-copy-wrapper">
          <p class="subtitle">
            CRM for Architecture, Engineering, and Construction
          </p>
          <h6 class="title">
            <span>Grow sales 2x</span> by automating customer and lead
            management
          </h6>
          <ul class="list">
            <li class="list-item">
              <span>Proposals:</span> Generate winning proposals. Use
              proven templates with resumes, timelines, and estimates.
              Forecast resources and budget.
            </li>
            <li class="list-item">
              <span>Pipeline Management:</span> Drag-and-drop sales
              pipeline editing. View tasks, win rate, opportunities, sales
              vs. goals, and open bids at glance.
            </li>
            <li class="list-item">
              <span>Customers:</span> Connect with prospects and clients
              directly from the platform. Store all contact info.
              Automated follow-up reminders.
            </li>
          </ul>
          <div class="cta-wrapper">
            <a
              class="btn btn-secondary"
              href="https://unanet.com/demo-request"
              >Get a Demo</a
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="right-img-wrapper">
          <picture>
            <source
              media="(min-width:1024px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706095175/unanet/4001/desktop_1.webp
              "
            />
            <source
              media="(min-width:768px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706095175/unanet/4001/tablet_1.webp
              "
            />
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1706095174/unanet/4001/mobile_1.webp"
              alt="Grow Sales"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="trusted-partner-section">
  <div class="spz-container">
    <div class="content">
      <h6 class="title">Trusted by 3,700+ contractors and firms</h6>
      <div class="img-wrapper">
        <picture>
          <source
            media="(min-width:1024px)"
            srcset="
              //res.cloudinary.com/spiralyze/image/upload/v1705434408/unanet/4001/logos_1.webp
            "
          />
          <source
            media="(min-width:768px)"
            srcset="
              //res.cloudinary.com/spiralyze/image/upload/v1705434425/unanet/4001/logos_2.webp
            "
          />
          <img
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434438/unanet/4001/frame_1171275565.webp"
            alt="Our Partners"
          />
        </picture>
      </div>
    </div>
  </div>
</section>

<section class="features-section">
  <div class="spz-container">
    <h6 class="title">Features</h6>
    <div class="feature-cards-wrapper">
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433356/unanet/4001/pipeline_management.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Pipeline management</h5>
          <p class="card-text">
            Drag-and-drop sales pipeline editing. View tasks, win rate,
            sales vs. goals, and open bids at glance.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433356/unanet/4001/contracts.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Contracts</h5>
          <p class="card-text">
            Track all contacts, clients, and partners. Contact directly
            from the platform. Send follow-up reminders.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433356/unanet/4001/proposal_creation.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Proposal creation</h5>
          <p class="card-text">
            Auto-generate proposals. Include resumes, winning content from
            previous bids, task timelines, and past estimates.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433357/unanet/4001/forecast_reporting.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Forecast reporting</h5>
          <p class="card-text">
            Forecast future spend and resource requirements based on past,
            potential, and current projects.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433357/unanet/4001/email_marketing.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Email marketing</h5>
          <p class="card-text">
            Send auto-segmented contact lists to email marketing tools
            like Constant Contact, HubSpot, Mailchimp, and more.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433357/unanet/4001/event_management.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Event management</h5>
          <p class="card-text">
            Create and manage events. Assign tasks to teams. Send
            invitations and reminders. Track attendance.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433357/unanet/4001/feedback_survey.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Feedback survey</h5>
          <p class="card-text">
            Create and send surveys to customers and clients. Get
            performance insights. Set benchmarks.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433357/unanet/4001/mobile_app.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Mobile app</h5>
          <p class="card-text">
            Access and edit all your project and contact information
            on-the-go. Send messages. Create reminders.
          </p>
        </div>
      </div>
      <div class="card feature-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433357/unanet/4001/integrations.webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Integrations</h5>
          <p class="card-text">
            Integrate all your contact and proposal data. Viewpoint,
            Procore, Sage 100, Sage 300, Trimble Construction, and more.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="review-slider-section">
  <div class="spz-container">
    <div class="for-desktop">
      <div class="g2-box">
        <div class="g2-images">
          <img
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434595/unanet/4001/g2.svg"
            alt="G2 Logo"
            class="g2-logo" width="48" height="48"
          />
          <img
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434579/unanet/4001/stars.svg"
            alt="star rating"
            class="star-rating" width="93"
          />
          <p>Excellent</p>
        </div>
        <div class="reviews">
          <p>4.4 <br><span>(252 reviews)</span></p>
        </div>
      </div>
      <div class="review-box">
        <div class="review-head">
          <img
            class="star-rating"
            width="107"
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434637/unanet/4001/stars-rating.svg"
            alt="5 Star"
          />
          <img
            class="g2-logo"
            width="22"
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434649/unanet/4001/frame_1171275502.svg"
            alt="G2 Logo"
          />
        </div>
        <p>
          Dramatically improved effectiveness, cost visibility and
          profitability, while cutting PM management time, across 1,000+
          projects per year.
        </p>
        <div class="review-author"><p>Michael D.</p><span>President</span></div>
      </div>
      <div class="review-box">
        <div class="review-head">
          <img
            class="star-rating"
            width="107"
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434637/unanet/4001/stars-rating.svg"
            alt="5 Star"
          />
          <img
            class="g2-logo"
            width="22"
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434649/unanet/4001/frame_1171275502.svg"
            alt="G2 Logo"
          />
        </div>
        <p>
          Outstanding! Program Managers can get REAL TIME reporting from a
          huge number of reports and charts. You can also set budget hours
          at employee level or task level.
        </p>
        <div class="review-author"><p>Jenny C.</p><span>CEO</span></div>
      </div>
      <div class="review-box">
        <div class="review-head">
          <img
            class="star-rating"
            width="107"
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434637/unanet/4001/stars-rating.svg"
            alt="5 Star"
          />
          <img
            class="g2-logo"
            width="22"
            src="//res.cloudinary.com/spiralyze/image/upload/v1705434649/unanet/4001/frame_1171275502.svg"
            alt="G2 Logo"
          />
        </div>
        <p>
          Outshines every project accounting system! So much more timely
          with reports, monthly billings, accounting reviews, and more.
        </p>
        <div class="review-author">
          <p>Lynn W. </p><span>Director of Business Resources</span>
        </div>
      </div>
    </div>
    <div class="for-tab-mob">
      <div class="g2-card-wrapper">
        <div class="g2-box">
          <div class="g2-images">
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434595/unanet/4001/g2.svg"
              alt="G2 Logo"
              class="g2-logo"
            />
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434579/unanet/4001/stars.svg"
              alt="star rating"
              class="star-rating"
            />
            <p>Excellent</p>
          </div>
          <div class="reviews">
            <p>4.4 <span>(252 reviews)</span></p>
          </div>
        </div>
      </div>
      <div class="review-slider-wrapper swiper">
      <div class="swiper-wrapper">
        <div class="review-box swiper-slide">
          <div class="review-head">
            <img
              class="star-rating"
              width="107"
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434637/unanet/4001/stars-rating.svg"
              alt="5 Star"
            />
            <img
              class="g2-logo"
              width="22"
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434649/unanet/4001/frame_1171275502.svg"
              alt="G2 Logo"
            />
          </div>
          <p>
            Dramatically improved effectiveness, cost visibility and
            profitability, while cutting PM management time, across 1,000+
            projects per year.
          </p>
          <div class="review-author">
            <p>Michael D.</p><span>President</span>
          </div>
        </div>
        <div class="review-box swiper-slide">
          <div class="review-head">
            <img
              class="star-rating"
              width="107"
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434637/unanet/4001/stars-rating.svg"
              alt="5 Star"
            />
            <img
              class="g2-logo"
              width="22"
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434649/unanet/4001/frame_1171275502.svg"
              alt="G2 Logo"
            />
          </div>
          <p>
            Outstanding! Program Managers can get REAL TIME reporting from
            a huge number of reports and charts. You can also set budget
            hours at employee level or task level.
          </p>
          <div class="review-author"><p>Jenny C.</p><span>CEO</span></div>
        </div>
        <div class="review-box swiper-slide">
          <div class="review-head">
            <img
              class="star-rating"
              width="107"
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434637/unanet/4001/stars-rating.svg"
              alt="5 Star"
            />
            <img
              class="g2-logo"
              width="22"
              src="//res.cloudinary.com/spiralyze/image/upload/v1705434649/unanet/4001/frame_1171275502.svg"
              alt="G2 Logo"
            />
          </div>
          <p>
            Outshines every project accounting system! So much more timely
            with reports, monthly billings, accounting reviews, and more.
          </p>
          <div class="review-author">
            <p>Lynn W.</p><span>Director of Business Resources</span>
          </div>
        </div>
        </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
    </div>
  </div>
</section>

<section class="how-it-works">
  <div class="spz-container">
    <h6 class="title">How it Works</h6>
    <div class="cards-wrapper">
      <div class="card process-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433242/unanet/4001/frame_1171275611.svg"
          alt="Setup"
        />
        <div class="card-body">
          <p class="title"><span>1.</span>Setup</p>
          <p class="card-text">
            Import contacts and proposals from HubSpot, Viewpoint,
            MailChimp, and more in a few clicks. Or upload from a
            spreadsheet.
          </p>
        </div>
      </div>
      <div class="card process-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433206/unanet/4001/manage_opportunities.svg"
          alt="Manage opportunities "
        />
        <div class="card-body">
          <p class="title"><span>2.</span>Manage opportunities</p>
          <p class="card-text">
            Get notified when prospects message you. Reply in-app. Send
            proposals. Drag-and-drop pipeline editing.
          </p>
        </div>
      </div>
      <div class="card process-card">
        <img
          class="card-img-top"
          src="//res.cloudinary.com/spiralyze/image/upload/v1705433274/unanet/4001/frame_1171275612.svg"
          alt="Close contracts"
        />
        <div class="card-body">
          <p class="title"><span>3.</span>Close contracts</p>
          <p class="card-text">
            Send automated follow-ups. Finalize bids, send contracts, and
            track status. Close 2x more deals.
          </p>
        </div>
      </div>
    </div>
    <div class="single-card">
      <div class="sales-card">
        <div class="header-card"><span>2X</span> Increase in sales</div>
        <div class="card-content">
          <p>
            “With Unanet we stand apart from our competitors. Information
            is readily available to make our proposals stronger. Plus,
            instead of going after general business, we’re dedicating
            resources to the pursuits that are the most winnable and
            desirable.”
          </p>
        </div>
        <div class="footer-card">
          <div class="author">
            <h6>Ashley Hartman</h6>
            <p>Marketing and Business Development Manager</p>
          </div>
          <div class="logo">
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1705433407/unanet/4001/frame_1171275668.webp"
              alt="Above Group"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section">
  <div class="spz-container">
  <h6 class="title">Benefits</h6>
  <div id="tab-carousel" class="spz-tabs-carousel">
  <ul class="nav nav-tabs">
    <li class="active">
      <a href="#tabs_1" class="active"><span class="d-none d-lg-block">Grow sales</span><span class="d-lg-none">1</span></a><span class="progress"></span>
    </li>
    <li>
      <a href="#tabs_2"><span class="d-none d-lg-block">Streamline communication</span><span class="d-lg-none">2</span></a><span class="progress"></span>
    </li>
    <li>
      <a href="#tabs_3"><span class="d-none d-lg-block">Consolidate contacts and bids</span><span class="d-lg-none">3</span></a><span class="progress"></span>
    </li>
    <li>
      <a href="#tabs_4"><span class="d-none d-lg-block">Optimize resource allocation</span><span class="d-lg-none">4</span></a><span class="progress"></span>
    </li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tabs_1">
      <div class="content-wrapper">
        <div class="content">
          <h6>Grow sales</h6>
          <p>
            Automatically create winning proposals. Track open bids in one
            place and get automated follow-up reminders. Scale up your sales
            activity.
          </p>
        </div>
        <div class="img-wrapper">
          <picture>
            <source
              media="(min-width:1024px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101312/unanet/4001/frame_1171275693.webp
              "
            />
            <source
              media="(min-width:768px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101386/unanet/4001/frame_1171275699.webp
              "
            />
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/f_auto/unanet/4001/grow_sales_1-min.png"
              alt="Grow Sales"
            />
          </picture>
        </div>
      </div>
    </div>
    <div class="tab-pane" id="tabs_2">
      <div class="content-wrapper">
        <div class="content">
          <h6>Grow sales</h6>
          <p>
            Automatically create winning proposals. Track open bids in one
            place and get automated follow-up reminders. Scale up your sales
            activity.
          </p>
        </div>
        <div class="img-wrapper">
          <picture>
            <source
              media="(min-width:1024px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101312/unanet/4001/frame_1171275693.webp
              "
            />
            <source
              media="(min-width:768px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101386/unanet/4001/frame_1171275699.webp
              "
            />
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1706101702/unanet/4001/frame_1171275704.webp"
              alt="Grow Sales"
            />
          </picture>
        </div>
      </div>
    </div>
    <div class="tab-pane" id="tabs_3">
      <div class="content-wrapper">
        <div class="content">
          <h6>Grow sales</h6>
          <p>
            Automatically create winning proposals. Track open bids in one
            place and get automated follow-up reminders. Scale up your sales
            activity.
          </p>
        </div>
        <div class="img-wrapper">
          <picture>
            <source
              media="(min-width:1024px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101312/unanet/4001/frame_1171275693.webp
              "
            />
            <source
              media="(min-width:768px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101386/unanet/4001/frame_1171275699.webp
              "
            />
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1706101702/unanet/4001/frame_1171275704.webp"
              alt="Grow Sales"
            />
          </picture>
        </div>
      </div>
    </div>
    <div class="tab-pane" id="tabs_4">
      <div class="content-wrapper">
        <div class="content">
          <h6>Grow sales</h6>
          <p>
            Automatically create winning proposals. Track open bids in one
            place and get automated follow-up reminders. Scale up your sales
            activity.
          </p>
        </div>
        <div class="img-wrapper">
          <picture>
            <source
              media="(min-width:1024px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101312/unanet/4001/frame_1171275693.webp
              "
            />
            <source
              media="(min-width:768px)"
              srcset="
                //res.cloudinary.com/spiralyze/image/upload/v1706101386/unanet/4001/frame_1171275699.webp
              "
            />
            <img
              src="//res.cloudinary.com/spiralyze/image/upload/v1706101702/unanet/4001/frame_1171275704.webp"
              alt="Grow Sales"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</section>

<section class="pre-footer-section">
  <div class="spz-container">
    <div class="bg-wrapper">
      <h5 class="title">
        Automate sales, marketing, and customer management
      </h5>
      <div class="cta-wrapper">
        <a
          class="btn btn-secondary mb-3"
          href="https://unanet.com/demo-request"
          >Get a Demo</a
        >
      </div>
    </div>
  </div>
</section>
</div>`;

swiperJS.onload = function () {
    if (window.innerWidth < 1024) {
        // let intSlider = setInterval(() => {
        //     if (document.querySelector('.review-slider-wrapper.swiper-container-horizontal')) {
        //         clearInterval(intSlider);
        //     }
        //     init_Slider();
        // }, 100);
        init_Slider();
    }
    // window.addEventListener('resize', function (event) {
    //     init_Slider();
    // }, true);
}

function init_Slider() {
    var Swipes = new Swiper('.review-slider-wrapper', {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // if (window.innerWidth > 1023) {
    //     if (Swipes !== undefined) {
    //         Swipes.destroy(true, true);
    //     }
    // }
}