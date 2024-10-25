const timer = 7000;
const heroImages = {
    tab1: {
        desk: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_1449.webp',
        tab: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_775.webp',
        mob: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_373.webp'
    },
    tab2: {
        desk: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_1445.webp',
        tab: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_771.webp',
        mob: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_369.webp'
    },
    tab3: {
        desk: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_1451.webp',
        tab: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_777.webp',
        mob: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_374.webp'
    },
    tab4: {
        desk: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_1452.webp',
        tab: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_778.webp',
        mob: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/hero_background_376.webp'
    },
};
// Keep images in cache to avoid loading delay (according to the device resolution)
for (const key in heroImages) {
    const img = new Image();
    img.src = window.innerWidth > 1079 ? heroImages[key].desk : window.innerWidth > 767 ? heroImages[key].tab : heroImages[key].mob;
}
const bodyInterval = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(bodyInterval)
        // Set Hero Content
        setHeroContent();
        gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
        let i = 0;
        const tabs = document.querySelectorAll('#tabs-wrap-spz .tabs');
        const activeClass = 'active';
        const hoveredClass = 'hovered';
        const imageContainer = document.querySelector('.hero-section-spz .right');
        const images = Array.from(imageContainer.querySelectorAll('img.dw-image'));
        // const firstImageIndex = parseInt(images[0].dataset.index);
        document.querySelector('body').classList.add('spz-3008');
        const autoSlideInterval = setInterval(() => {
            const progressBar = document.querySelector('#tabs-wrap-spz .active .progress-bar');
            progressBar.removeAttribute("style");
            progressBar.style.width = `${(i / timer) * 100}%`;
            if (i > timer) {
                const currentTab = document.querySelector('#tabs-wrap-spz .active');
                const curIndex = parseInt(currentTab.getAttribute("data-index"));
                const nextIndex = curIndex === 4 ? 1 : curIndex + 1;
                currentTab.querySelector('.progress-bar').style.opacity = "0";
                setTimeout(() => currentTab.querySelector('.progress-bar').style.width = "0px", 400);
                // Keep the active tab in center of scroll position in responsive page
                const tabsWrap = document.querySelector('#tabs-wrap-spz');
                const tab = document.querySelector('#tabs-wrap-spz .tabs[data-index="' + nextIndex + '"]');
                const scrollLeft = tab.offsetLeft - tabsWrap.clientWidth / 2 + tab.clientWidth / 2;
                tabsWrap.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
                document.querySelector('#tabs-wrap-spz .tabs[data-index="' + nextIndex + '"]').click();
                i = 0;
            }
            i += 200;
        }, 200);
        tabs.forEach(tab => {
            tab.addEventListener("mouseenter", () => {
                if (!document.querySelector('#tabs-wrap-spz.hovered')) {
                    clearInterval(autoSlideInterval);
                    document.querySelector('#tabs-wrap-spz .active .progress-bar').style.opacity = "0";
                    document.querySelector('#tabs-wrap-spz .active .progress-bar').style.width = "0px";
                    // Add hovered class to tabs container
                    tab.parentElement.classList.add(hoveredClass);
                    // Remove hovered class from other tabs
                    tabs.forEach(t => {
                        if (t !== tab) {
                            t.classList.remove(hoveredClass);
                        }
                    });
                    // Add hovered class to current tab
                    tab.classList.add(hoveredClass);
                    // Trigger click event on hovered tab
                    tab.click();
                }
            });
            tab.addEventListener("click", function (event) {
                const targetIndex = parseInt(event.target.closest(".tabs").dataset.index);
                if (targetIndex !== parseInt(document.querySelector('#tabs-wrap-spz .' + activeClass).dataset.index)) {
                    // Update text content (desktop)
                    document.querySelector('.hero-section-spz .left .desc-wrapper > div.' + activeClass).classList.remove(activeClass);
                    document.querySelector('.hero-section-spz .left .desc-wrapper > div[data-index="' + targetIndex + '"]').classList.add(activeClass);
                    // Update text content (tablet)
                    document.querySelector('.hero-section-spz .additional-tablet .desc-wrapper > div.' + activeClass).classList.remove(activeClass);
                    document.querySelector('.hero-section-spz .additional-tablet .desc-wrapper > div[data-index="' + targetIndex + '"]').classList.add(activeClass);
                    // Update tab states
                    document.querySelector('#tabs-wrap-spz .' + activeClass).classList.remove(activeClass);
                    tab.classList.add(activeClass);
                    // Add image position class, starting from currently clicked tab and on next 3 tabs. From last tab, it will start from first tab
                    const tabImages = images.slice(targetIndex - 1).concat(images.slice(0, targetIndex - 1));
                    tabImages.forEach((img, idx) => {
                        img.classList.remove("position1", "position2", "position3", "position4");
                        img.classList.add(`position${idx + 1}`);
                    });
                    // Add current tab class to .dnd_area-row-0-background-image for background image
                    document.querySelector('.dnd_area-row-0-background-image').classList.remove('tab1', 'tab2', 'tab3', 'tab4');
                    document.querySelector('.dnd_area-row-0-background-image').classList.add('tab' + targetIndex);
                    // // Add background image from 'heroImages' to the parent '.dnd_area-row-0-background-image'
                    // const imgSrc = window.innerWidth > 1079 ? heroImages[`tab${targetIndex}`].desk : window.innerWidth > 767 ? heroImages[`tab${targetIndex}`].tab : heroImages[`tab${targetIndex}`].mob;
                    // document.querySelector('.dnd_area-row-0-background-image').setAttribute('style', `background-image: url(${imgSrc}) !important`);
                    // Handle hovered state transition
                    if (document.querySelector('#tabs-wrap-spz.' + hoveredClass)) {
                        // document.querySelector('#tabs-wrap-spz .' + hoveredClass).classList.remove(hoveredClass);
                        // tab.classList.add(hoveredClass);
                        if (document.querySelector('#tabs-wrap-spz .' + hoveredClass)) {
                            document.querySelector('#tabs-wrap-spz .' + hoveredClass).classList.remove(hoveredClass);
                        }
                        document.querySelector('#tabs-wrap-spz .tabs[data-index="' + targetIndex + '"]').classList.add(hoveredClass);
                    }
                } else if (!tab.classList.contains(hoveredClass)) {
                    // Add hovered class to current tab if not hovered
                    tab.classList.add(hoveredClass);
                }
            });
        });
        setDescHeight();
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300)
        window.addEventListener("resize", function () {
            setDescHeight();
            if (window.scrollY > 100) {
                document.querySelector('header').classList.remove('remove-bg');
            }
        });
        // Remove class 'remove-bg' from header section on scroll after 50px and add it back on scroll to top
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                document.querySelector('header').classList.remove('remove-bg');
            } else {
                document.querySelector('header').classList.add('remove-bg');
            }
        });
        //set CRO 
        /*function setValue(anomaly = false) {
            var iframe = document.querySelector('#popup_request_a_demo iframe');
            if (anomaly == "anomaly1") {
                iframe = document.querySelector('#tmpwidget_1665168603900');
            }
            if (anomaly == "anomaly2") {
                iframe = document.querySelector('#popup_contact_us iframe');
            }
            if (anomaly == "normal") {
                iframe = document.querySelector('#popup_request_a_demo');
            }
            //set value
            if (anomaly == "anomaly1" || anomaly == "normal") {
                iframe.querySelector('input[name="cro2"]').value = "3008_variant";
            }
            else {
                var iframeContent = iframe.contentWindow;
                iframeContent.document.querySelector('input[name="cro2"]').value = "3008_variant";
            }
        }
        document.addEventListener('click', function (e) {
            if ((e.target.closest("a")?.getAttribute('href') === '#popup_request_a_demo' || e.target.closest("a")?.getAttribute('href') === '#tmpwidget_1665168603900') || (e.target.closest("a")?.getAttribute('href') === '#popup_contact_us' && e.target.closest("a")?.innerHTML.trim() == 'Request Demo')) {
                setTimeout(() => {
                    if (e.target.closest("a")?.getAttribute('href') === '#popup_contact_us' && e.target.closest("a")?.innerHTML.trim() == 'Request Demo') {
                        setValue("anomaly2");
                    } else if (e.target.closest("a")?.getAttribute('href') === '#tmpwidget_1665168603900') {
                        setValue("anomaly1");
                    } else if (e.target.closest("a")?.getAttribute('href') === '#popup_request_a_demo' && !document.querySelector('#popup_request_a_demo .hs-form-iframe')) {
                        setValue("normal")
                    }
                    else {
                        setValue();
                    }
                }, 1000);
            }
        });*/
        // THIS MAY HAVE TO DELETE IN HARDCODE ENDS
    }
}, 10);
// Set the hero content
function setHeroContent() {
    document.querySelector('.dnd_area-row-0-background-image .row-fluid').insertAdjacentHTML("afterend", `
        <div class="hero-section-spz">
            <div class="left">
                <div class="sub-head">AI-Driven Patient-level Analytics</div>
                <div class="heading">Get the Most Accurate and Complete RWD Insights</div>
                <div class="tabs-wrapper" id="tabs-wrap-spz">
                    <div class="tabs active" data-index="1">
                        <div class="progress-bar"></div>
                        <span>Clinical Development</span>
                    </div>
                    <div class="tabs" data-index="2">
                        <div class="progress-bar"></div>
                        <span>Commercial</span>
                    </div>
                    <div class="tabs" data-index="3">
                        <div class="progress-bar"></div>
                        <span>HEOR</span>
                    </div>
                    <div class="tabs" data-index="4">
                        <div class="progress-bar"></div>
                        <span>Medical affairs</span>
                    </div>
                    <div class="margin"></div>
                </div>
                <div class="desc-wrapper">
                    <div class="dw-content active" data-index="1">
                        Understand diagnosis and treatment pathways, scenario plan, and pressure-test impact of I/E criteria on target patient populations. Accelerate patient recruitment by optimizing site feasibility and investigator selection.<br />
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/contact-us" class="learn-m cta">Contact Us</a>
                        </div>
                    </div>
                    <div class="dw-content" data-index="2">Use real-time patient-level data to optimize launch strategies, HCP targeting, and therapy adoption. Use out-of-the-box analytics templates to drive fast decision-making and track market performance and share.<br />
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/contact-us" class="learn-m cta">Contact Us</a>
                        </div>
                    </div>
                    <div class="dw-content" data-index="3">Confidently generate evidence for health outcomes and comparative-economic studies. Leverage the most comprehensive, longitudinal source of real-world patient data, enhanced by specialty datasets.<br />
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/contact-us" class="learn-m cta">Contact Us</a>
                        </div>
                    </div>
                    <div class="dw-content" data-index="4">Understand patient journeys, HCP clinical behaviors, and referral networks. Measure the impact of your medical strategy and engagement activities. Optimize medical-inquiry management and publication planning.<br />
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/contact-us" class="learn-m cta">Contact Us</a>
                        </div>
                    </div>
                </div>
                <a class="cta" style="display: none;" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
            </div>
            <div class="right position1" style="display: none;">
                <img class="dw-image position1" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3001/clinical_development_1.webp" width="469" height="360" alt="Clinical Development" />
                <img class="dw-image position2" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3001/commercial_1.webp" width="469" height="360" alt="Commercial" />
                <img class="dw-image position3" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3001/heor_1.webp" width="469" height="360" alt="HEOR" />
                <img class="dw-image position4" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3001/medical_affairs_1.webp" width="469" height="360" alt="Medical affairs" />
                <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3001/clinical_development.webp" width="469" height="360" alt="Reference Image" />
            </div>
            <div class="additional-tablet">
                <div class="desc-wrapper">
                    <div class="active" data-index="1">Understand diagnosis and treatment pathways, scenario plan, and pressure-test impact of I/E criteria on target patient populations. Accelerate patient recruitment by optimizing site feasibility and investigator selection. 
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/industries/clinical-development" class="learn-m cta">Learn More</a>
                        </div>
                    </div>
                    <div data-index="2">Use real-time patient-level data to optimize launch strategies, HCP targeting, and therapy adoption. Use out-of-the-box analytics templates to drive fast decision-making and track market performance and share. 
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/solutions/maplab" class="learn-m cta">Learn More</a>
                        </div>
                    </div>
                    <div data-index="3">Confidently generate evidence for health outcomes and comparative-economic studies. Leverage the most comprehensive, longitudinal source of real-world patient data, enhanced by specialty datasets. 
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/industries/heor" class="learn-m cta">Learn More</a>
                        </div>
                    </div>
                    <div data-index="4">Understand patient journeys, HCP clinical behaviors, and referral networks. Measure the impact of your medical strategy and engagement activities. Optimize medical-inquiry management and publication planning.
                        <div class="lm-ctas">
                          <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
                          <a href="https://www.komodohealth.com/industries/medical-affairs" class="learn-m cta">Learn More</a>
                        </div>
                    </div>
                </div>
                <a class="cta" style="display: none;" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
            </div>
        </div>`);
    socialProofSec();
    // Set the default background image for first tab
    // const defImg = window.innerWidth > 1079 ? heroImages.tab1.desk : window.innerWidth > 767 ? heroImages.tab1.tab : heroImages.tab1.mob;
    // document.querySelector('.dnd_area-row-0-background-image').setAttribute('style', `background-image: url(${defImg}) !important`)
    document.querySelector('.dnd_area-row-0-background-image').classList.add('tab1');
    for (let idx = 0; idx < 4; idx++) {
        const imgs = heroImages[`tab${idx + 1}`];
        document.querySelector('.dnd_area-row-0-background-image').insertAdjacentHTML("beforeend", `
                <style>
                    .dnd_area-row-0-background-image.tab${idx + 1} {
                        background-image: url(${imgs.desk}) !important;
                    }
                    @media (max-width: 1079.98px) {
                        .dnd_area-row-0-background-image.tab${idx + 1} {
                            background-image: url(${imgs.tab}) !important;
                        }
                    }
                    @media (max-width: 767.98px) {
                        .dnd_area-row-0-background-image.tab${idx + 1} {
                            background-image: url(${imgs.mob}) !important;
                        }
                    }
                </style>`);
    }
    // Add class 'remove-bg' to header section
    document.querySelector('header').classList.add('remove-bg');
}
// Set the height of the description content based on the device resolution
const setDescHeight = () => {
    const deskContent = '.hero-section-spz .left .desc-wrapper';
    const tabContent = '.hero-section-spz .additional-tablet .desc-wrapper';
    document.querySelector(deskContent).style.height = getDescHeight(deskContent) + "px";
    document.querySelector(tabContent).style.height = getDescHeight(tabContent) + "px";
}
// Get the height of the description content
const getDescHeight = (sel) => {
    let maxHeight = 0;
    for (let i = 0; i < document.querySelectorAll(`${sel} > div`).length; i++) {
        if (maxHeight < document.querySelectorAll(`${sel} > div`)[i].offsetHeight) {
            maxHeight = document.querySelectorAll(`${sel} > div`)[i].offsetHeight
        }
    }
    return maxHeight;
}
const gb_load_css = (path) => {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.media = 'all';
    css.href = path;
    document.getElementsByTagName('head')[0].appendChild(css);
}
const loadJS = (url, implementationCode, location) => {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
    location.appendChild(scriptTag);
};
function socialProofSec() {
    document.querySelector('.hero-section-spz').parentElement.insertAdjacentHTML("afterend", `
    <div class="social-proof-sec">
          <picture>
              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/3008/social_proof_361.svg">
              <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/3008/social_proof_769.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/3008/social_proof_1441.svg" alt="Social Proof" width="1440" height="88" class="social-proof">
          </picture>
      </div>`);
    accordionSec();
}
// Solutions accordion section starts
function accordionSec() {
    document.querySelector('.social-proof-sec').insertAdjacentHTML("afterend", `
        <div class="solutions-accordion-spz">
            <div class="wrapper">
              <div class="title">Solutions</div>
              <div class="accordion-wrapper">
                <div class="text">
                  <div class="child active" data-index="1">
                    <div class="bar"><div class="line"></div></div>
                    <div class="title">
                      <div class="text">Insights Foundation</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">Comprehensive insights start with Komodo’s industry-leading Healthcare Map<sup>TM</sup>, providing an average 7+ years of the patient journey for more than 330  million unique individuals in the U.S</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/healthcare_map_1440.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/healthcare_map_1440.webp" alt="Insights Foundation" width="688" height="404">
                      </picture>
                      <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                        <span>GET A DEMO</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="child" data-index="2">
                    <div class="bar"><div class="line"></div></div>
                    <div class="title">
                      <div class="text">Specialty Data Enhancements</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">Access exclusive, highly-curated data sources — including lab, genomics, oncology, EMR data, race and ethnicity, social determinants of health, mortality, and more.</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp" alt="Specialty Data Enhancements" width="688" height="404">
                      </picture>
                      <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                        <span>get a demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="child" data-index="3">
                    <div class="bar"><div class="line"></div></div>
                    <div class="title">
                      <div class="text">Streamlined Software Solutions</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">MapLab<sup>TM</sup> reimagines the healthcare insights workflow to answer complex business questions, quickly, with out-of-the-box dashboards and customizable data workflows.</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/streamlined_software_solutions_1440.webp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/streamlined_software_solutions_1440.webp" alt="Streamlined Software Solutions" width="688" height="404">
                      </picture>
                      <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                        <span>get a demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="image">
                  <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/healthcare_map_1440.webp" alt="Insights Foundation" width="851" height="503"/>
                  <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/healthcare_map_1440.webp" alt="Insights Foundation" width="851" height="503"/>
                  <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp" alt="Specialty Data Enhancements" width="851" height="503"/>
                  <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/streamlined_software_solutions_1440.webp" alt="Streamlined Software Solutions" width="851" height="503"/>
                </div>
              </div>
            </div>
          </div>`);
    // Accordion functionality
    document.querySelectorAll('.solutions-accordion-spz .child .title').forEach((title, index) => {
        title.addEventListener('click', function () {
            const parent = title.parentElement;
            const siblings = Array.from(parent.parentElement.children).filter(child => child !== parent);
            const heroImages = document.querySelectorAll('.solutions-accordion-spz .image .hero');
            siblings.forEach(sibling => {
                sibling.classList.remove('active');
            });
            heroImages.forEach((img, idx) => {
                img.classList.remove('active');
                if (idx === index) {
                    img.classList.add('active');
                }
            });
            parent.classList.add('active');
        });
    });
    testimonialSec();
    const tabs = document.querySelectorAll('.solutions-accordion-spz .accordion-wrapper .child');
    let i = 0;
    const autoAccordionInterval = setInterval(function () {
        document.querySelector('.solutions-accordion-spz .accordion-wrapper .child.active .bar .line').removeAttribute("style")
        document.querySelector('.solutions-accordion-spz .accordion-wrapper .child.active .bar .line').style.width = "" + ((i / timer) * 100) + "%";
        if (i > timer) {
            document.querySelector('.solutions-accordion-spz .accordion-wrapper .child.active .bar .line').removeAttribute("style")
            let curIndex = parseInt(document.querySelector('.solutions-accordion-spz .accordion-wrapper .child.active').getAttribute("data-index"));
            if (curIndex != tabs.length) {
                curIndex = curIndex + 1
            } else {
                curIndex = 1;
            }
            document.querySelector('.solutions-accordion-spz .accordion-wrapper .child[data-index="' + curIndex + '"] .title').click();
            i = 0;
        }
        i += 200;
    }, 200)
    document.querySelector('.solutions-accordion-spz .accordion-wrapper .image').addEventListener("mouseenter", function () {
        clearInterval(autoAccordionInterval);
        document.querySelector('.solutions-accordion-spz .accordion-wrapper .child.active .bar .line').removeAttribute("style")
        if (!document.querySelector('.solutions-accordion-spz .accordion-wrapper.stop')) {
            document.querySelector('.solutions-accordion-spz .accordion-wrapper').classList.add("stop")
        }
    })
    document.querySelector('.solutions-accordion-spz .accordion-wrapper > .text').addEventListener("mouseenter", function () {
        clearInterval(autoAccordionInterval);
        document.querySelector('.solutions-accordion-spz .accordion-wrapper .child.active .bar .line').removeAttribute("style")
        if (!document.querySelector('.solutions-accordion-spz .accordion-wrapper.stop')) {
            document.querySelector('.solutions-accordion-spz .accordion-wrapper').classList.add("stop")
        }
    })
}
// Solutions accordion section ends
// Testimonial section starts
function testimonialSec() {
    document.querySelector('.solutions-accordion-spz').insertAdjacentHTML("afterend", `
        <div class="testimonial-section-spz">
            <div class="slider1-wrapper">
                <section class="splide testimonial-slider">
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/3008/Arrow-Left.svg" alt="Previous">
                    </button>
                    <button class="splide__arrow splide__arrow--next">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/3008/Arrow-Right.svg" alt="Next">
                    </button>
                </div>
                <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <div class="child child2">
                            <div class="user-info">
                                <div class="user-pic">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/3008/michael_townsend.png" alt="Michael Townsend" class="ts-img"/>
                                </div>
                                <div class="info">
                                    <div class="name">Michael Townsend</div>
                                    <div class="title">Research Director <br/>Life Sciences Commercial Strategies</div>
                                    <div class="c-logo mobile-only">
                                        <img class="icon" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/3008/idc.svg" alt="International Data Corporation" />
                                    </div>
                                </div>
                                <div class="c-logo">
                                    <img class="icon" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/3008/idc.svg" alt="International Data Corporation" />
                                </div>
                            </div>
                            <div class="text">
                                <div class="quote">“Komodo’s full-stack platform approach enables a comprehensive foundation for healthcare analytics, allowing Life Science and healthcare companies to generate critical insights across the industry.”</div>
                            </div>
                        </div>
                    </li>
                    <li class="splide__slide">
                        <div class="child child3">
                            <div class="user-info">
                                <div class="user-pic">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/3008/joe_mattingly.png" alt="Joey Mattingly" class="ts-img"/>
                                </div>
                                <div class="info">
                                    <div class="name">Joey Mattingly</div>
                                    <div class="title">PharmD, MBA, PhD, Associate Professor</div>
                                    
                                    <div class="c-logo mobile-only">
                                        <img class="icon" alt="University of Maryland" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/3008/university-of-maryland.svg" />
                                    </div>
                                </div>
                                <div class="c-logo">
                                    <img class="icon" alt="University of Maryland" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/KomodoHealth/3008/university-of-maryland.svg" />
                                </div>
                            </div>
                            <div class="text">
                                <div class="quote">“With Komodo’s research-grade insights and technology, we will now have unprecedented visibility into the full range of factors that contribute to healthcare outcomes, including the historically overlooked role of social determinants.”</div>
                            </div>
                        </div>
                    </li>
                    <li class="splide__slide">
                        <div class="child child1">
                            <div class="user-info">
                                <div class="user-pic">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/3008/tom_haskell.png" alt="Tom Haskell" class="ts-img"/>
                                </div>
                                <div class="info">
                                    <div class="name">Tom Haskell</div>
                                    <div class="title">Global Head of Innovation, Data, and Analytics</div>
                                    <div class="c-logo mobile-only">
                                        <img class="icon" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/3008/kantar.svg" alt="Kantar" />
                                    </div>
                                </div>
                                <div class="c-logo">
                                    <img class="icon" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/3008/kantar.svg" alt="Kantar" />
                                </div>
                            </div>
                            <div class="text">
                                <div class="quote">“Komodo allows us to unlock richer insights by integrating our own data with the Healthcare Map, all on the Sentinel platform. In our experience with real-world-evidence research, this technology has played a pivotal role in offering a timely, comprehensive, and accurate view of patient journeys to drive evidence around disease burden and health outcomes.”</div>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </section>
            </div>
        </div>`);
    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
        var splide = new Splide('.testimonial-section-spz .testimonial-slider', {
            type: 'loop',
            rewind: true,
            autoplay: false,
            arrows: true,
            autoHeight: true,
            pagination: true,
            focus: 'center',
            autoWidth: true,
            breakpoints: {
                1200: {
                    perPage: 1,
                    focus: 'center',
                    autoWidth: true,
                    arrows: false,
                },
                767.98: {
                    autoWidth: false,
                    autoHeight: false,
                },
            },
        });
        setTimeout(function () {
            splide.mount();
            splide.on("move", function (e) {
                document.querySelector('.testimonial-section-spz .slider1-wrapper').classList.remove("active1", "active2", "active3")
                document.querySelector('.testimonial-section-spz .slider1-wrapper').classList.add("active" + (parseInt(splide.index) + 1))
            })
            window.addEventListener('resize', function () {
                splide.refresh()
            })
            document.querySelector('.testimonial-section-spz .slider1-wrapper').classList.add("active1")
        }, 200)
    }, document.body);
    useCaseSec();
}
// Testimonial section Ends
// Solutions accordion section starts
function useCaseSec() {
    document.querySelector('.testimonial-section-spz').insertAdjacentHTML("afterend", `
        <div class="use-cases-sec-spz">
            <h3 class="us-title">Use Cases</h3>
            <div class="use-cases-wrapper">
                <div class="tabs-container">
                    <div class="tabs">
                        <div class="tab active" data-index="1">Clinical Development</div>
                        <div class="tab" data-index="2">Commercial</div>
                        <div class="tab" data-index="3">HEOR</div>
                        <div class="tab" data-index="4">Medical Affairs</div>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="us-container">
                        <div class="us-tab active" data-index="1">
                            <div class="title">Clinical Development</div>
                            <div class="content">
                                <div class="text">
                                    <p>View patient journeys, from first visit to diagnosis and treatment pathways. Create complex cohorts in minutes. Get alerts for new patients near trial sites.</p>
                                    <p>Identify eligible patients, principal investigators, and trial sites. Accelerate recruitment and increase trial diversity.</p>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)"
                                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_1441.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_1441.webp"
                                        alt="Clinical Development" width="688" height="404">
                                </picture>
                                <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                                    <span>GET A DEMO</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="square">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="us-tab" data-index="2">
                            <div class="title">Commercial</div>
                            <div class="content">
                                <div class="text">
                                    <p>Generate strategic launch insights quickly with real-time provider and patient volumes, patient journeys, payer analytics, targeting, and brand performance.</p>
                                    <p>Measure launch and product impact quickly to optimize commercial strategy.</p>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)"
                                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/commercial_1440.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/commercial_1440.webp"
                                        alt="Commercial" width="688" height="404">
                                </picture>
                                <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                                    <span>get a demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="square">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="us-tab" data-index="3">
                            <div class="title">HEOR</div>
                            <div class="content">
                                <div class="text">
                                    <p>Analyze treatment patterns of specific patient populations to identify unmet needs, understand adherence, healthcare utilization, and real-world efficacy.</p>
                                    <p>Demonstrate your therapy's value, assess cost-effectiveness, and build clinical and economic comparisons to influence policy and formulary decisions</p>
                                    <p>Leverage high-fidelity patient-level data to develop safety studies for post-launch monitoring and surveillance.</p>
                                    <p>Power AI and machine learning models using integrated clinical and specialty data.</p>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)"
                                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/heor_1440.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/heor_1440.webp"
                                        alt="HEOR" width="688" height="404">
                                </picture>
                                <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                                    <span>get a demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="square">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="us-tab" data-index="4">
                            <div class="title">Medical Affairs</div>
                            <div class="content">
                                <div class="text">
                                    <p>Understand patient journey, provider clinical behavior, and unmet needs to inform medical strategies. Compliantly measure clinical outcomes to articulate the value of activities.</p>
                                    <p>Visualize HCP dynamics/referral patterns, and generate effective field engagement strategies.</p>
                                    <p>Offer omnichannel engagement to address medical inquiries quickly, then track clinical interactions to identify knowledge gaps.</p>
                                    <p>Seamlessly manage collaboration around the sponsorship, generation, and publication of scientific data.</p>
                                </div>
                                <picture>
                                    <source media="(max-width:767.98px)"
                                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/medical_affairs_1440.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/medical_affairs_1440.webp"
                                        alt="Medical Affairs" width="688" height="404">
                                </picture>
                                <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                                    <span>get a demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="square">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_360.webp">
                            <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_768.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_1441.webp" alt="Clinical Development" class="reference">
                        </picture>
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_360.webp">
                            <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_768.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/clinical_development_1441.webp" alt="Clinical Development" data-index="1" class="hero active">
                        </picture>
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/commercial_360.webp">
                            <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/commercial_769.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/commercial_1440.webp" alt="Commercial" data-index="2" class="hero">
                        </picture>
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/heor_360.webp">
                            <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/heor_768.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/heor_1440.webp" alt="HEOR" data-index="3" class="hero">
                        </picture>
                        <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/medical_affairs_360.webp">
                            <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/medical_affairs_768.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/medical_affairs_1440.webp" alt="Medical Affairs" data-index="4" class="hero">
                        </picture>
                    </div>
                </div>
            </div>
        </div>`);
    // On click of '.tab', add class to '.tabs-content .us-tab' and '.tabs-content .hero' according to [data-index]
    document.querySelectorAll('.use-cases-sec-spz .tabs .tab').forEach((tab, index) => {
        tab.addEventListener('click', function () {
            const siblings = Array.from(tab.parentElement.children).filter(child => child !== tab);
            const tabCont = document.querySelectorAll('.us-container .us-tab');
            const heroImages = document.querySelectorAll('.use-cases-sec-spz .image .hero');
            siblings.forEach(sibling => {
                sibling.classList.remove('active');
            });
            tabCont.forEach((tb, idx) => {
                tb.classList.remove('active');
                if (idx === index) {
                    tb.classList.add('active');
                }
            });
            heroImages.forEach((img, idx) => {
                img.classList.remove('active');
                if (idx === index) {
                    img.classList.add('active');
                }
            });
            tab.classList.add('active');
        });
    });
    // Auto switch tabs after timer
    let i = 0;
    const tabs = document.querySelectorAll('.use-cases-sec-spz .tabs .tab');
    const autoTabInterval = setInterval(function () {
        // document.querySelector('.use-cases-sec-spz .tabs .tab.active .line').removeAttribute("style")
        // document.querySelector('.use-cases-sec-spz .tabs .tab.active .line').style.width = "" + ((i / timer) * 100) + "%";
        if (i > timer) {
            // document.querySelector('.use-cases-sec-spz .tabs .tab.active .line').removeAttribute("style")
            let curIndex = parseInt(document.querySelector('.use-cases-sec-spz .tabs .tab.active').getAttribute("data-index"));
            if (curIndex != tabs.length) {
                curIndex = curIndex + 1
            } else {
                curIndex = 1;
            }
            document.querySelector('.use-cases-sec-spz .tabs .tab[data-index="' + curIndex + '"]').click();
            i = 0;
        }
        i += 200;
    }, 200);
    // On hover of .hero or .tab or ui-tabs clear the interval
    document.querySelector('.use-cases-sec-spz .tabs-content, .use-cases-sec-spz .tabs').addEventListener("mouseenter", function () {
        clearInterval(autoTabInterval);
        if (!document.querySelector('.use-cases-sec-spz .tabs.stop')) {
            document.querySelector('.use-cases-sec-spz .tabs').classList.add("stop")
        }
    })
    resourcesSec();
}
// Use Case section ends
// Resources section starts
function resourcesSec() {
    // Resources section will have 3 cards, each card will have an image, tag ,title, description, and a learn more anchor tag
    document.querySelector('.use-cases-sec-spz').insertAdjacentHTML("afterend", `
        <div class="resources-sec-spz">
            <div class="wrapper">
                <div class="title">Related Resources</div>
                <div class="cards">
                    <div class="card">
                        <picture>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/ui_3.webp" alt="Perspectives" class="card-img">
                        </picture>
                        <div class="card-content">
                            <div class="tag">PERSPECTIVES</div>
                            <div class="title">How Life Sciences Leaders Are Linking Real-World Datasets to Make Regulatory Submissions</div>
                            <div class="description">Komodo Health’s Web Sun discusses what it takes to achieve regulatory-grade status on the Pharmaphorum Podcast.</div>
                            <a href="https://www.komodohealth.com/perspectives/how-life-sciences-leaders-are-linking-real-world-datasets-to-make-regulatory-submissions" target="_blank" class="cta">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <picture>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/ui_1.webp" alt="Perspectives" class="card-img">
                        </picture>
                        <div class="card-content">
                            <div class="tag">PERSPECTIVES</div>
                            <div class="title">Deciphering the Cost of Care: How a Customized Research Data Schema Boosts HCRU & Cost Analyses</div>
                            <div class="description">Obtaining insights into payer-specific patient populations and costs is possible with a data schema customized for HEOR studies and HCRU and cost analyses.</div>
                            <a href="https://www.komodohealth.com/perspectives/deciphering-the-cost-of-care-how-a-customized-research-data-schema-boosts-hcru-cost-analyses" target="_blank" class="cta">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <picture>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/ui_2.webp" alt="Perspectives" class="card-img">
                        </picture>
                        <div class="card-content">
                            <div class="tag">PERSPECTIVES</div>
                            <div class="title">Cracking the Code on Payer Insights to Improve Market Access</div>
                            <div class="description">Get accurate, granular payer insights from one source. Komodo Patient Insurance integrates claims, coverage, and patient-enrollment data.</div>
                            <a href="https://www.komodohealth.com/perspectives/cracking-the-code-on-payer-insights-to-improve-market-access" target="_blank" class="cta">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
}
// Resources section ends