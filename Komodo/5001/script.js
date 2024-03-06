const bodyInterval = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(bodyInterval)
        if (!document.querySelector('.spz-5001')) {
            const timer = 5000;
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
            const getScrollbarWidth = () =>
                window.innerWidth - document.documentElement.clientWidth;
            function outerHeight(el) {
                const style = getComputedStyle(el);

                return (
                    el.getBoundingClientRect().height +
                    parseFloat(style.marginTop) +
                    parseFloat(style.marginBottom)
                );
            }
            function outerWidth(el) {
                const style = getComputedStyle(el);

                return (
                    el.getBoundingClientRect().width +
                    parseFloat(style.marginLeft) +
                    parseFloat(style.marginRight)
                );
            }
            loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1704285503/KomodoHealth/5001/smooth-scroll.min.js', function () { }, document.body);
            gb_load_css("https://res.cloudinary.com/spiralyze/raw/upload/v1704274288/KomodoHealth/5001/OS.css")
            gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
            document.querySelector('body').classList.add('spz-5001')
            document.querySelector('.spz-5001 main > div:first-child').insertAdjacentHTML('beforebegin', `
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/4003/header-desktop-bg.jpg" alt="background" width="0" height="0" style="display:none" />
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/bg-hero-tablet.jpg" alt="background" width="0" height="0" style="display:none" />
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/bg-hero-mobile.jpg" alt="background" width="0" height="0" style="display:none" />
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/how-it-works-desktop.png" alt="background" width="0" height="0" style="display:none" />
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/how-it-works-tablet.png" alt="background" width="0" height="0" style="display:none" />
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/resourses_background_desktop.webp" alt="background" width="0" height="0" style="display:none" />
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/resourses_background_tablet.webp" alt="background" width="0" height="0" style="display:none" />
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/BG-Resourses-mob.jpg" alt="background" width="0" height="0" style="display:none" />
        <section class="new-wrapper">
          <div class="section1">
            <div class="wrapper">
              <div class="text">
                <div class="breadcrumb">Prism</div>
                <div class="title">Get the Most Complete View of Every Facet of Healthcare</div>
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/hero-image-mobile-jpg.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/hero-image-tablet2.png" alt="Hero Image" width="627" height="579" class="tablet-image">
                </picture>
                <div class="list">
                  <div class="child">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Bullet-icon.png" alt="List Icon" width="20" height="20"/>
                    <div class="desc"><strong>Cohort creation and analytics:</strong> Access our longitudinal and real-time data to create representative patient cohorts.</div>
                  </div>
                  <div class="child">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Bullet-icon.png" alt="List Icon" width="20" height="20"/>
                    <div class="desc"><strong>Intuitive visualizations and reports:</strong> <span class="add-margin">Produce</span> meaningful visuals and impactful reports without waiting for a third party.</div>
                  </div>
                  <div class="child">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Bullet-icon.png" alt="List Icon" width="20" height="20"/>
                    <div class="desc"><strong>Flexible data exploration:</strong> Explore diseases, test hypotheses, examine payer coverage, and more.</div>
                  </div>
                </div>
                <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
              </div>
              <div class="image">
                <picture>
                  <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/hero-image-mobile-jpg.jpg">
                  <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/hero-image-tablet.png">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/hero-image-dekstop2.png" alt="Hero Image" width="627" height="579">
                </picture>
              </div>
            </div>
          </div>
          <div class="section2">
            <div class="wrapper">
            <picture>
              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/social-proof-mobile.png">
              <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/social-proof-tablet.png">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/social-proof-desktop.png" alt="Company Icons" width="2272" height="73" />
            </picture>
            </div>
          </div>
          <div class="section3">
            <div class="background-image"></div>
            <div class="wrapper">
              <div class="title">How it Works</div>
              <div class="tab-wrapper">
                <div class="tab-button active" data-index="1">Clinical Development</div>
                <div class="tab-button" data-index="2">Commercial</div>
                <div class="tab-button" data-index="3">Medical Affairs</div>
                <div class="tab-button " data-index="4"></div>
              </div>
              <div class="content-wrapper">
                <div class="child">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_V2_mob.jpg">
                    <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_V2_tab.jpg">
                    <img class="active" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_V2.jpg" alt="Step 1 Image" width="364" height="266" />
                  </picture>
                  <div class="text">
                    <div class="active" data-index="1">
                      <div class="title">Step 1: Create Cohort</div>
                      <div class="desc">Construct highly segmented patient cohorts from a broad array of disease areas, HCP behaviors, and treatments, all using real-world clinical and therapeutic signals from our Healthcare Map.</div>
                    </div>
                    <div data-index="2">
                      <div class="title">Step 1: Create Cohort</div>
                      <div class="desc">Construct highly segmented patient cohorts from a broad array of disease areas, HCP behaviors, and treatments, all using real-world clinical and therapeutic signals from our Healthcare Map.</div>
                    </div>
                    <div data-index="3">
                      <div class="title">Step 1: Create Cohort</div>
                      <div class="desc">Construct highly segmented patient cohorts from a broad array of disease areas, HCP behaviors, and treatments, all using real-world clinical and therapeutic signals from our Healthcare Map.</div>
                    </div>
                  </div>
                </div>
                <div class="child">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_2_V2_mob.jpg">
                    <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_2_V2_tab.jpg">
                    <img class="active" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_2_V2.jpg" alt="Step 2 Image" width="364" height="266" />
                  </picture>
                  <div class="text">
                    <div class="active" data-index="1">
                      <div class="title">Step 2: Instantly Analyze</div>
                      <div class="desc">Quickly generate graphics and visualize clinical patterns to understand the journey to diagnosis and treatment pathways.</div>
                    </div>
                    <div data-index="2">
                      <div class="title">Step 2: Instantly Analyze</div>
                      <div class="desc">Quickly generate informative graphics to visualize clinical patterns within patient journeys, identify dynamics between patients, HCPs, and HCOs, and more.</div>
                    </div>
                    <div data-index="3">
                      <div class="title">Step 2: Instantly Analyze</div>
                      <div class="desc">Quickly generate informative graphics to view patient, HCP, and HCO dynamics in real time.</div>
                    </div>
                  </div>
                </div>
                <div class="child">
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_3_V2_mob.jpg">
                    <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_3_V2_tab.jpg">
                    <img data-index="1" class="active" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Card_UI_3_V2.jpg" alt="Step 3 Image" width="364" height="266" />
                  </picture>
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/card-2-3-mob.jpg">
                    <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/ui_tablet_commercial.webp">
                    <img data-index="2"  src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/ui_desktop_commercial.webp" alt="Step 3 Image" width="364" height="266" />
                  </picture>
                  <picture>
                    <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/card-3-3-mob.jpg">
                    <source media="(max-width:1079.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/ui_tablet_medial_affairs.webp">
                    <img data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/ui_desktop_medical_affairs.webp" alt="Step 3 Image" width="364" height="266" />
                  </picture>
                  <div class="text">
                    <div class="active" data-index="1">
                      <div class="title">Step 3:&nbsp;&nbsp;Transform Clinical Trials</div>
                      <div class="desc">Efficiently plan protocol scenarios, pinpoint prospective patient cohorts, and optimize trial design to get better treatments to patients faster.</div>
                    </div>
                    <div data-index="2">
                      <div class="title">Step 3: HCP Targeting</div>
                      <div class="desc">Discover groups of patients and their associated HCPs and HCOs to enhance sales targeting. Prioritize opportunities based on HCP patient volume, specialty, and geography.</div>
                    </div>
                    <div data-index="3">
                      <div class="title">Step 3: Build Integrated Strategies</div>
                      <div class="desc">Fully comprehend the patient journey, HCP behaviors, and clinical outcomes to inform your strategies.</div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="cta" href="#popup_request_a_demo" rel="modal:open">Get a demo</a>
            </div>
          </div>
          <div class="section4">
            <div class="wrapper">
              <div class="title">The Prism Advantage</div>
              <div class="accordion-wrapper">
                <div class="text">
                  <div class="child active" data-index="1">
                    <div class="bar"><div class="line"></div></div>
                    <div class="title">
                      <div class="text">Powerful Clinical Signals</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1704278217/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">Unlock unique opportunities by isolating patterns and trends with unparalleled visibility offered through the industry-leading Healthcare Map.</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/PowerfulClinicalSignals-mob.jpg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/powerful_clinical_signals_4.webp" alt="Powerful Clinical Signals" width="688" height="404">
                      </picture>
                      <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                        <span>get a demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="child" data-index="2">
                    <div class="bar"><div class="line"></div></div>
                    <div class="title">
                      <div class="text">Flexible Data Exploration</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1704278217/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">Explore diseases, test hypotheses, and truly understand the dynamics of the healthcare ecosystem to inform all aspects of strategy.</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/FlexibleDataExploration-mob.jpg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/flexible_data_exploration_2.webp" alt="Flexible Data Exploration" width="688" height="404">
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
                      <div class="text">Complete Patient Journeys</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1704278217/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">Build the most representative patient cohorts with demographic filters such as race and ethnicity to improve clinical trial diversity, identify underserved populations, and engage HCPs/HCOs treating minorities to close gaps in care.</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/Complerepatientjourney-mob.jpg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/complere_patient_journey_2.webp" alt="Complete Patient Journeys" width="688" height="404">
                      </picture>
                      <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                        <span>get a demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="child" data-index="4">
                    <div class="bar"><div class="line"></div></div>
                    <div class="title">
                      <div class="text">Unparalleled Speed</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1704278217/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">Keep abreast of the evolution of clinical events and key opportunities with access to near real-time data refreshes.</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/UnparalleledSpeedMobile-mob.jpg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/unparalleled_speed__tablet.webp" alt="Unparalleled Speed" width="688" height="404">
                      </picture>
                      <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                        <span>get a demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="child" data-index="5">
                    <div class="bar"><div class="line"></div></div>
                    <div class="title">
                      <div class="text">Continued Value</div>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1704278217/KomodoHealth/5001/down-arrow.svg" alt="Arrow" width="24" height="24"/>
                    </div>
                    <div class="content">
                      <div class="text">Propel your brand and innovations forward with our continuous investment in the Healthcare Map, product features, and service enhancements.</div>
                      <picture>
                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/ContinuedValue-mob.jpg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/continued_value_2.webp" alt="Continued Value" width="688" height="404">
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
                  <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/powerful_clinical_signals_3.webp" alt="Powerful Clinical Signals" width="851" height="503"/>
                  <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/powerful_clinical_signals_3.webp" alt="Powerful Clinical Signals" width="851" height="503"/>
                  <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/flexible_data_exploration_1.webp" alt="Flexible Data Exploration" width="851" height="503"/>
                  <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/complere_patient_journey_1.webp " alt="Complete Patient Journeys" width="851" height="503"/>
                  <img class="hero" data-index="4" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/unparalleled_speed.webp" alt="Unparalleled Speed" width="851" height="503"/>
                  <img class="hero" data-index="5" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/continued_value_1.webp" alt="Continued Value" width="851" height="503"/>
                </div>
              </div>
            </div>
          </div>
          <div class="section5">
            <div class="title">Testimonials</div>
            <div class="slider1-wrapper">
              <section class="splide splide1">
                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide">
                      <div class="child child1">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/pp1-mob.jpg">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/1.webp" alt="Tom Haskell" width="348" height="292"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">“Komodo allows us to unlock richer insights by integrating our own data with the Healthcare Map, all on the Sentinel platform. In our experience with real-world-evidence research, this technology has played a pivotal role in offering a timely, comprehensive, and accurate view of patient journeys to drive evidence around disease burden and health outcomes.”</div>
                          <div class="user-info">
                            <img class="pp" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/avatar_1_tablet.webp" alt="Tom Haskell" width="88" height="78" />
                            <div class="info">
                              <div class="name">Tom Haskell</div>
                              <div class="title">Global Head of Innovation, Data, and Analytics</div>
                            </div>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1702492563/komodohealth/5001/kantar_mobile.svg">
                              <img class="icon" src="//res.cloudinary.com/spiralyze/image/upload/v1702492562/komodohealth/5001/kantar_desktop.svg" alt="Kantar" width="112" height="48" />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="child child2">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/pp2-mob.jpg">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/pp2-desk.jpg" alt="Michael Townsend" width="348" height="262"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">Komodo's full-stack platform approach enables a comprehensive foundation for healthcare analytics, allowing Life Science and healthcare companies to generate critical insights across the industry.</div>
                          <div class="user-info">
                            <img class="pp" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/avatar_2_tablet.webp" alt="Michael Townsend" width="88" height="78" />
                            <div class="info">
                              <div class="name">Michael Townsend</div>
                              <div class="title">Research Director <br/>Life Sciences Commercial Strategies</div>
                            </div>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1702492563/komodohealth/5001/idc_mobile.svg">
                              <img class="icon" src="//res.cloudinary.com/spiralyze/image/upload/v1702492590/komodohealth/5001/idc_desktop.svg" alt="International Data Corporation" width="112" height="48" />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="child child3">
                        <div class="picture">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/pp3-mob.jpg">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/5001/pp3-desk.jpg " alt="Joey Mattingly" width="348" height="266"/>
                          </picture>
                        </div>
                        <div class="text">
                          <div class="quote">“With Komodo's research-grade insights and technology, we will now have unprecedented visibility into the full range of factors that contribute to healthcare outcomes, including the historically overlooked role of social determinants.”</div>
                          <div class="user-info">
                            <img class="pp" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/5001/avatar_3_tablet.webp" alt="Joey Mattingly" width="88" height="78" />
                            <div class="info">
                              <div class="name">Joey Mattingly</div>
                              <div class="title">PharmD, MBA, PhD, Associate Professor</div>
                            </div>
                            <picture>
                              <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1702492564/komodohealth/5001/maryland_mobile.svg">
                              <img class="icon" alt="University of Maryland" src="//res.cloudinary.com/spiralyze/image/upload/v1702492563/komodohealth/5001/maryland_desktop.svg" width="112" height="48" />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div class="section6">
            <div class="wrapper">
              <div class="title">Resources</div>
              <div class="accordion-wrapper2">
                <div class="child child1">
                  <a class="reports" href="https://www.komodohealth.com/perspectives/a-silent-fight-delays-in-uterine-fibroid-treatment-among-women-of-color">
                    <div class="header">
                      <span>Reports</span>
                    </div>
                    <div class="middle">
                      A Silent Fight: Delays in Uterine Fibroid Treatment Among Women of Color
                    </div>
                    <div class="bottom">
                      <div class="date">Dec 6, 2023</div>
                      <div class="desc">Long waits are common for women with fibroids, with Black and Asian patients experiencing the longest delays for both less invasive and more invasive treatments.</div>
                    </div>
                  </a>
                </div>
                <div class="child child2">
                  <a class="perspectives"  href="https://www.komodohealth.com/perspectives/one-day-we-will-have-layered-datasets-for-high-nuance-high-impact-outcomes-research">
                    <div class="header">
                      <span>PERSPECTIVES</span>
                    </div>
                    <div class="middle">
                      One Day, We Will Have Layered Datasets for High-Nuance, High-Impact Outcomes Research
                    </div>
                    <div class="bottom">
                      <div class="date">Nov 23, 2023</div>
                      <div class="desc">Komodo's The One Day Summit hosted a conversation for HEOR teams about integrating multiple data sources to support real-world evidence and measure impact.</div>
                    </div>
                  </a>
                </div>
                <div class="child child3">
                  <a href="https://www.komodohealth.com/perspectives/fast-facts-prostate-cancer" class="fast-facts">
                    <div class="header">
                      <span>Fast facts</span>
                    </div>
                    <div class="middle">
                      Fast Facts: Prostate Cancer
                    </div>
                    <div class="bottom">
                      <div class="date">Oct 3, 2023</div>
                      <div class="desc">Read this month's Fast Facts on prostate cancer, the latest in our series providing up-to-date insights on disease, treatment, and care.</div>
                    </div>
                  </a>
                </div>
                <div class="margin">
                </div>
              </div>
              <a class="cta" href="https://www.komodohealth.com/perspectives/tag/blog?page=1">View all</a>
            </div>
          </div>
        </section>
        `)
            document.querySelector('.spz-5001 .section3 .tab-wrapper').addEventListener("click", function (event) {
                if (event.target.closest(".tab-button")) {
                    const dataIndex = event.target.closest(".tab-button").getAttribute("data-index")

                    document.querySelector('.spz-5001 .section3 .tab-wrapper .tab-button.active').classList.remove("active");
                    for (let i = 0; i < 3; i++) {
                        document.querySelector('.spz-5001 .section3 .content-wrapper .child .text > div.active').classList.remove("active");
                    }
                    for (let i = 0; i < 3; i++) {
                        document.querySelectorAll('.spz-5001 .section3 .content-wrapper .child')[i].querySelector('.text > div[data-index="' + dataIndex + '"]').classList.add("active")
                    }
                    document.querySelector('.spz-5001 .section3 .content-wrapper .child:nth-child(3) img.active').classList.remove("active")
                    document.querySelector('.spz-5001 .section3 .content-wrapper .child:nth-child(3) img[data-index="' + dataIndex + '"]').classList.add("active");
                    event.target.closest(".tab-button").classList.add("active");
                }
            })
            let osInstance;
            let osInstance2;
            loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1704274288/KomodoHealth/5001/OS.js', function () {
                var {
                    OverlayScrollbars,
                    ScrollbarsHidingPlugin,
                    SizeObserverPlugin,
                    ClickScrollPlugin
                } = OverlayScrollbarsGlobal;
                osInstance = OverlayScrollbars(document.querySelector('.spz-5001 .section3 .tab-wrapper'), {
                    scrollbars: {
                        visibility: 'hidden',
                        autoHide: 'never',
                        dragScroll: true,
                        clickScroll: true,
                        pointers: ['mouse', 'touch', 'pen'],
                    },
                });
                osInstance2 = OverlayScrollbars(document.querySelector('.spz-5001 .section6 .wrapper .accordion-wrapper2'), {
                    scrollbars: {
                        visibility: 'hidden',
                        autoHide: 'never',
                        dragScroll: true,
                        clickScroll: true,
                        pointers: ['mouse', 'touch', 'pen'],
                    },
                });
                const { viewport } = osInstance.elements();
                const viewport2 = osInstance2.elements().viewport;


                function centeringAccordion() {

                    viewport2.scrollLeft = (outerWidth(document.querySelector('.spz-5001 .section6 .child.child1')) + outerWidth(document.querySelector('.spz-5001 .section6 .child.child2')) + outerWidth(document.querySelector('.spz-5001 .section6 .child.child3')) + outerWidth(document.querySelector('.spz-5001 .section6 .margin')) + getScrollbarWidth() - window.innerWidth) / 2;

                }
                centeringAccordion();
                window.addEventListener('resize', function () {
                    centeringAccordion()
                })
                document.querySelector('.spz-5001 .section3 .tab-wrapper').addEventListener('wheel', (evt) => {
                    if (window.getComputedStyle(document.querySelector('.spz-5001 .section3 .tab-wrapper [data-overlayscrollbars-viewport]')).overflowX == "scroll") {
                        evt.preventDefault();
                        viewport.scrollLeft += evt.deltaY;
                        if ((evt.deltaY < 0 && viewport.scrollLeft == 0) || (evt.deltaY > 0 && viewport.scrollWidth < viewport.scrollLeft + viewport.clientWidth + 1)) {
                            document.querySelector('html').scrollTop += evt.deltaY;
                        }
                    }
                });
                loadJS(' https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js', function () {
                    const drag1 = interact('.spz-5001 .section3 .tab-wrapper')
                    drag1.draggable({                        // make the element fire drag event
                        listeners: {
                            move(event) {                  // call this listener on every dragmove
                                viewport.scrollLeft -= event.dx;
                            }
                        }
                    })
                    const drag2 = interact('.spz-5001 .section6 .wrapper .accordion-wrapper2')

                    drag2.draggable({                        // make the element fire drag event
                        listeners: {
                            move(event) {                  // call this listener on every dragmove

                                viewport2.scrollLeft -= event.dx;
                            }
                        }
                    })
                }, document.body);
            }, document.body);

            document.querySelector(".spz-5001 .section4 .accordion-wrapper > .text").addEventListener("click", function (e) {
                if (e.target.closest(".title") && !e.target.closest(".child").classList.contains("active") && !document.querySelector('.spz-5001 .accordion-wrapper .animate')) {
                    // remove active
                    const prevElement = document.querySelector('.spz-5001 .accordion-wrapper .text .child.active');
                    const prevActiveHeight = prevElement.offsetHeight;
                    prevElement.classList.remove("active")
                    const afterActiveHeight = prevElement.offsetHeight;
                    prevElement.classList.add("active")
                    prevElement.style.height = "" + prevActiveHeight + "px";
                    prevElement.classList.remove("active")
                    setTimeout(function () {
                        prevElement.style.height = "" + afterActiveHeight + "px";
                        prevElement.classList.add("animate");
                    }, 1)
                    setTimeout(function () {
                        prevElement.removeAttribute("style")
                        prevElement.classList.remove("animate");
                    }, 301)
                    //remove border
                    if (document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.no-border')) {
                        document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.no-border').classList.remove('no-border')
                    }
                    if (e.target.closest(".child").getAttribute("data-index") != "1") {
                        document.querySelector('.spz-5001 .section4 .accordion-wrapper .child[data-index="' + (parseInt(e.target.closest(".child").getAttribute("data-index")) - 1) + '"]').classList.add("no-border")
                    }

                    //adding active
                    const nextElement = e.target.closest(".child")
                    const prevTargetHeight = nextElement.offsetHeight;
                    nextElement.classList.add("active")
                    const nextTargetHeight = nextElement.offsetHeight;
                    nextElement.classList.remove("active")
                    nextElement.style.height = "" + prevTargetHeight + "px";
                    nextElement.classList.add("active")
                    setTimeout(function () {
                        nextElement.style.height = "" + nextTargetHeight + "px";
                        nextElement.classList.add("animate");
                    }, 1)
                    setTimeout(function () {
                        nextElement.removeAttribute("style")
                        nextElement.classList.remove("animate");
                    }, 301)
                    //image animation 
                    document.querySelector('.spz-5001 .accordion-wrapper .image .hero.active').classList.remove("active")
                    document.querySelector('.spz-5001 .accordion-wrapper .image .hero[data-index="' + e.target.closest(".child").getAttribute("data-index") + '"]').classList.add("active")
                    //change scroll position
                    if (window.matchMedia("(max-width: 1079.98px)").matches && document.querySelector('.spz-5001 .section4 .accordion-wrapper.stop')) {
                        setTimeout(function () {
                            var scroll = new SmoothScroll();
                            scroll.animateScroll(document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.active').offsetTop, null, {
                                speed: 1000,
                                easing: 'Linear',
                            });
                        }, 302)
                    }
                }
            })

            let i = 0;
            const autoAccordionInterval = setInterval(function () {
                document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.active .bar .line').removeAttribute("style")
                document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.active .bar .line').style.width = "" + ((i / timer) * 100) + "%";
                if (i > timer) {
                    document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.active .bar .line').removeAttribute("style")
                    let curIndex = parseInt(document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.active').getAttribute("data-index"));
                    if (curIndex != 5) {
                        curIndex = curIndex + 1
                    } else {
                        curIndex = 1;
                    }
                    document.querySelector('.spz-5001 .section4 .accordion-wrapper .child[data-index="' + curIndex + '"] .title').click();
                    i = 0;
                }
                i += 200;
            }, 200)
            document.querySelector('.spz-5001 .section4 .accordion-wrapper .image').addEventListener("mouseenter", function () {
                clearInterval(autoAccordionInterval);
                document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.active .bar .line').removeAttribute("style")
                if (!document.querySelector('.spz-5001 .section4 .accordion-wrapper.stop')) {
                    document.querySelector('.spz-5001 .section4 .accordion-wrapper').classList.add("stop")
                }
            })
            document.querySelector('.spz-5001 .section4 .accordion-wrapper > .text').addEventListener("mouseenter", function () {
                clearInterval(autoAccordionInterval);
                document.querySelector('.spz-5001 .section4 .accordion-wrapper .child.active .bar .line').removeAttribute("style")
                if (!document.querySelector('.spz-5001 .section4 .accordion-wrapper.stop')) {
                    document.querySelector('.spz-5001 .section4 .accordion-wrapper').classList.add("stop")
                }
            })

            loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {

                var splide = new Splide('.spz-5001 .section5 .splide1', {
                    type: 'loop',
                    autoplay: true,
                    arrows: false,
                    autoHeight: true,
                    pagination: true,
                    focus: 'center',
                    autoWidth: true,
                    breakpoints: {
                        1079.98: {
                            perPage: 1,
                            focus: 'center',
                            autoWidth: true,
                        },
                        767.98: {
                            autoWidth: false,
                        },
                    },
                });

                setTimeout(function () {
                    splide.mount();
                    splide.on("move", function (e) {

                        document.querySelector('.spz-5001 .section5 .slider1-wrapper').classList.remove("active1", "active2", "active3")
                        document.querySelector('.spz-5001 .section5 .slider1-wrapper').classList.add("active" + (parseInt(splide.index) + 1))

                    })

                    window.addEventListener('resize', function () {
                        splide.refresh()
                    })
                    document.querySelector('.spz-5001 .section5 .slider1-wrapper').classList.add("active1")
                }, 200)
            }, document.body)

            document.querySelector('.header__mobile-menu-open-icon').addEventListener('click', function () {
                window.scrollTo(0, 0)
            })
        }
    }
}, 10)
