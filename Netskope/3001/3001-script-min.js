let bodyLoaded=setInterval((function(){if(document.querySelector("body")){function e(e){return new Promise((function(s){if(document.querySelector(e))return s(document.querySelector(e));const n=new MutationObserver((function(t){document.querySelector(e)&&(s(document.querySelector(e)),n.disconnect())}));n.observe(document,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}))}function s(e,s){document.cookie=e+"="+s+"; path=/"}function n(e){const s=e+"=";let n;return decodeURIComponent(document.cookie).split("; ").forEach((e=>{0===e.indexOf(s)&&(n=e.substring(s.length))})),n}clearInterval(bodyLoaded),document.head.insertAdjacentHTML("beforeend",'<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1704197701/netskope/3001/checkbox_base_6.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1704197698/netskope/3001/checkbox_base_4.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/hero_card_background_dark.webp" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/hero_card_background_dark.png" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1704946437/netskope/3001/src/orange-chevron.svg" as="image">'),location.pathname.includes("/get-started")?(console.log("Entered Form Page"),e('.mktoForm [name="utm_location__c"]').then((function(e){document.body.classList.add("spz-3001"),MktoForms2.whenReady((function(e){if(n("userEmailSPZ")){let e=setInterval((()=>{document.querySelector(".mktoForm #Email").value=n("userEmailSPZ")}),100);setTimeout((()=>{clearInterval(e)}),2e3),setTimeout((()=>{s("userEmailSPZ","")}),5e3)}}))}))):e(".header__get-started-button.btn").then((function(s){document.body.classList.add("spz-3001"),function(){document.querySelector(".header__get-started").insertAdjacentHTML("afterbegin",'<div class="spz-3001-email"><input class="spz-email" type="email" placeholder="Business Email"></div>'),document.querySelector(".header__top-menu").insertAdjacentHTML("afterend",'<div class="header__get-started mobile"><div class="spz-3001-email"><input class="spz-email mobile" type="email" placeholder="Business Email"></div> <a class="header__get-started-button btn" href="https://www.netskope.com/get-started">Get Started</a></div>'),document.querySelector("#components__content").insertAdjacentHTML("afterbegin",'<div class="spz-hero-section">\n<div class="hero-section-wrapper container">\n<div class="hero-section-title">\n<h2>Secure your entire<br><span>multi-cloud environment</span></h2>\n<p>How can we help?</p>\n</div>\n<div class="hero-section-cards">\n<div class="checkboxes">\n<div class="check-box">\n<label class="custom-check"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1704198970/netskope/3001/icon_wrapper_14.svg" alt="Secure and Accelerate Web and Cloud Access">\n<p>Secure and Accelerate Web and Cloud Access</p>\n<input class="spz-input" type="checkbox" value="Secure and Accelerate Web and Cloud Access"> <span class="checkmark"></span> </label>\n</div>\n<div class="check-box">\n<label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1704198967/netskope/3001/icon_wrapper_12.svg" alt="Evolve Beyond Legacy VPN">\n<p>Evolve Beyond<br>Legacy VPN</p>\n<input class="spz-input" type="checkbox" value="Evolve Beyond Legacy VPN"><span class="checkmark"></span></label>\n</div>\n<div class="check-box">\n<label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1704198972/netskope/3001/icon_wrapper_15.svg" alt="Simplify & Redefine Data Protection">\n<p>Simplify & Redefine<br>Data Protection</p>\n<input class="spz-input" type="checkbox" value="Other"><span class="checkmark"></span></label>\n</div>\n<div class="check-box">\n<label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1704198969/netskope/3001/icon_wrapper_13.svg" alt="Modernize Enterprise Networking">\n<p>Modernize Enterprise Networking</p>\n<input class="spz-input" type="checkbox" value="Modernize Enterprise Networking"><span class="checkmark"></span></label>\n</div>\n<div class="check-box">\n<label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1704198973/netskope/3001/icon_wrapper_16.svg" alt="Consolidate Your Security Architecture">\n<p>Consolidate Your<br>Security Architecture</p>\n<input class="spz-input" type="checkbox" value="Consolidate Your Security Architecture"><span class="checkmark"></span></label>\n</div>\n</div>\n</div>\n<div class="hero-section-CTA">\n<div class="v3"> <a href="https://www.netskope.com/get-started" class="get-started-cta btn">Get Started</a></div>\n<div class="v3"> <a href="javascript:void(0)" class="learn-more-cta btn">Learn more</a></div>\n</div>\n<div class="hero-section-review">\n<div class="section-review"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1704198255/netskope/3001/gartner_svg.svg" alt="Gartner" class="Gartner"> <picture>\n<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1704199148/netskope/3001/frame_5599.svg">\n<img src="//res.cloudinary.com/spiralyze/image/upload/v1704198262/netskope/3001/frame_5597.svg" alt="Star Rating">\n</picture>\n<span>4.6</span></div>\n<div class="section-review"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1704198276/netskope/3001/g2_svg.svg" alt="G2" class="Gartner"> <picture>\n<source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1704199158/netskope/3001/frame_5600.svg">\n<img src="//res.cloudinary.com/spiralyze/image/upload/v1704198262/netskope/3001/frame_5598.svg" alt="Star Rating">\n</picture>\n<span>4.4</span></div>\n</div>\n</div>\n</div>\n<div class="spz-banner-section">\n<div class="banner-section container">\n<h6>We partner with leaders across the security industry</h6>\n<div class="banner-images">\n<picture>\n<source media="(min-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1704200652/netskope/3001/Logos_Desktop.svg">\n<source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1704200652/netskope/3001/Logos_Tablet.svg">\n<img src="//res.cloudinary.com/spiralyze/image/upload/v1704200652/netskope/3001/Logos_Mobile.svg" alt="Our Partners">\n</picture>\n</div>\n</div></div>'),document.querySelector(".v3-promo .v3-promo__container").before(document.querySelector(".orange_line_off")),document.querySelector(".header__top-menu-link--search img").setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1704198990/netskope/3001/search.svg"),document.querySelector(".header__top-menu-link--search-mobile img").setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1704198990/netskope/3001/search.svg"),document.querySelector(".header__top-menu-link-language img").setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1704199001/netskope/3001/chevron.svg"),document.querySelector(".v3-solution-plays").insertAdjacentHTML("afterend",'<div class="spz-case-studies">\n<div class="">\n<div class="case-studies-wrapper">\n<div class="case-studies-title">\n<h2>Case Studies</h2>\n<p>Netskope helps customers reduce risk, accelerate performance,<br>and get unrivaled visibility into any cloud, web, and private application activity.</p>\n</div>\n<div class="case-studies-slider">\n<div class="slider slider-thumb container">\n<div class="cs-card-title"><p>Protecting mission-critical data across Queensland</p><div class="progress-bar">\n<div class="progress-fill"></div>\n</div></div>\n<div class="cs-card-title"><p>Securing a Perimeterless Organization</p><div class="progress-bar">\n<div class="progress-fill"></div>\n</div></div>\n<div class="cs-card-title"><p>Ensuring Secure Use of Safe Cloud Apps</p><div class="progress-bar">\n<div class="progress-fill"></div>\n</div></div>\n<div class="cs-card-title"><p>Hospital IT Team Gets “More Sleep and More Smiles”</p><div class="progress-bar">\n<div class="progress-fill"></div>\n</div></div>\n<div class="cs-card-title"><p>Delivering a Secure Cloud Experience</p><div class="progress-bar">\n<div class="progress-fill"></div>\n</div></div>\n<div class="cs-card-title custom-title"><p>A Better Prognosis for a National Healthcare Organization</p><div class="progress-bar">\n<div class="progress-fill"></div>\n</div></div>\n</div>\n<div class="slider slider-content">\n<div class="cs-card">\n<div class="cs-content">\n<p>"We have nurses and clinicians in very remote communities, and they need to be able to work digitally from wherever they are. So, we have unique challenges in providing connectivity and security for their data.."</p>\n<div class="cs-name tab-mob">\n<h6>Adam Carey</h6>\n<p>Digital Infrastructure Program Manager </p>\n</div>\n</div>\n<div class="cs-reviewer">\n<div class="cs-anchor">\n<div class="v3-stacked-tabs__tab-cta "><span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/success-story-royal-flying-doctor-service">Read their story</a> </span></div>\n</div>\n<div class="cs-name">\n<h6>Adam Carey</h6>\n<p>Digital Infrastructure Program Manager</p>\n</div>\n</div>\n</div>\n<div class="cs-card">\n<div class="cs-content">\n<p>“Netskope enables us to meet our employees&#8217; expectations of an optimal user experience (better than the one they get on their own home IT) in the safest possible manner.”</p>\n<div class="cs-name tab-mob">\n<h6>Neil Binnie</h6>\n<p>Group Head of Information Security and Compliance at Morgan Sindall</p>\n</div>\n</div>\n<div class="cs-reviewer">\n<div class="cs-anchor">\n<div class="v3-stacked-tabs__tab-cta "><span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/morgan-sindall">Read their story</a> </span></div>\n</div>\n<div class="cs-name">\n<h6>Neil Binnie</h6>\n<p>Group Head of Information Security and Compliance at Morgan Sindall</p>\n</div>\n</div>\n</div>\n<div class="cs-card">\n<div class="cs-content">\n<p>"We wanted to be proactive about stopping threats before they occur. With the Netskope client, we can constantly monitor alerts and incidents. And the data protection provides automatic notification of any exposure of personally identifiable information.”</p>\n<div class="cs-name tab-mob">\n<h6>Tarun Trivedi</h6>\n<p>Senior Information Security Manager, Waubonsee Community College</p>\n</div>\n</div>\n<div class="cs-reviewer">\n<div class="cs-anchor">\n<div class="v3-stacked-tabs__tab-cta "><span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/waubonsee-community-college">Read their story</a> </span></div>\n</div>\n<div class="cs-name">\n<h6>Tarun Trivedi</h6>\n<p>Senior Information Security Manager, Waubonsee Community College</p>\n</div>\n</div>\n</div>\n<div class="cs-card">\n<div class="cs-content">\n<p>"Before, we could never be 100%. We couldn&#8217;t say that to our auditors or say with confidence that all patient data was prevented from flowing into Dropbox. We also couldn&#8217;t give users the flexibility of using apps for non-sensitive transfers. Rarely do we have a security solution like this that can make things so easy and secure.”</p>\n<div class="cs-name tab-mob">\n<h6>Head of IT Security</h6>\n<p>Internationally Recognized Hospital</p>\n</div>\n</div>\n<div class="cs-reviewer">\n<div class="cs-anchor">\n<div class="v3-stacked-tabs__tab-cta "><span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/hospital-it-team">Read their story</a> </span></div>\n</div>\n<div class="cs-name">\n<h6>Head of IT Security</h6>\n<p>Internationally Recognized Hospital</p>\n</div>\n</div>\n</div>\n<div class="cs-card">\n<div class="cs-content">\n<p>“We identified more than 600 applications that were being accessed within the CARE Ratings setup. With Netskope&#8217;s application and risk awareness, we have been able to tighten access restrictions, based on the risk of the apps themselves and the role-based profiles of the users accessing them.”</p>\n<div class="cs-name tab-mob">\n<h6>A. Shiju Rawther</h6>\n<p>Chief Information & Technology Officer at CARE Ratings</p>\n</div>\n</div>\n<div class="cs-reviewer">\n<div class="cs-anchor">\n<div class="v3-stacked-tabs__tab-cta "><span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/care-ratings">Read their story</a> </span></div>\n</div>\n<div class="cs-name">\n<h6>A. Shiju Rawther</h6>\n<p>Chief Information & Technology Officer at CARE Ratings</p>\n</div>\n</div>\n</div>\n<div class="cs-card custom-card">\n<div class="cs-content">\n<p>“Netskope has the fuller SSE feature-set, meeting our requirements.” “With Netskope we have the ability to effectively perform real-time Tenant Restrictions for both internal owned O365 tenants and external tenants.”</p>\n<div class="cs-name tab-mob">\n<h6>Systems Architect</h6>\n<p>Large Enterprise Healthcare Company</p>\n</div>\n</div>\n<div class="cs-reviewer">\n<div class="cs-anchor">\n<div class="v3-stacked-tabs__tab-cta "><span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/national-healthcare-organization">Read their story</a> </span></div>\n</div>\n<div class="cs-name">\n<h6>Systems Architect</h6>\n<p>Large Enterprise Healthcare Company</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>'),document.querySelector("body .v3__container #components__content .v3.v3-promo.homepage .v3-two-column-image.orange_line_off .row.align-items-center.text-on-right .v3-two-column-image__image-container .v3-two-column-image__image").innerHTML=' <picture>\n<source media="(min-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_desktop.webp">\n<source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_tablet.webp">\n<source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_desktop.png" type="image/png">\n<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_mobile.webp" alt="Netskope recognized as a Leader in the 2023 Gartner® Magic QuadrantTM for SSE." class=" lazyloaded">\n</picture>',document.querySelector("body .v3__container #components__content .v3.v3-promo.homepage .v3-two-column-image.orange_line_off .row.align-items-center.text-on-right .col-lg-6:first-child .v3-two-column-image__content > div p:nth-child(2)").outerHTML='<div class="mobile-image d-md-none"> <picture><source media="(min-width:1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_desktop.webp">\n<source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_tablet.webp">\n<source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_desktop.png" type="image/png">\n<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/3001/image_mobile.webp" alt="Netskope recognized as a Leader in the 2023 Gartner® Magic QuadrantTM for SSE." class=" lazyloaded">\n</picture></div>',document.querySelector(".v3-reports .v3-reports__reports").insertAdjacentElement("afterend",document.querySelector(".v3-reports .v3-reports__cta")),document.querySelector("body .v3__container #components__content .v3-reports:not(.control) .container .v3-reports__cta .ga__cta.v3-reports__cta.btn-blue ").textContent="See all analyst reports",document.querySelector(".v3-promo.homepage").insertAdjacentHTML("afterend",'<div class="v3 v3-reports v3-reports-6593cee681481 control light">\n<div class="container">\n<div class="row">\n<div class="col-12 col-lg-12">\n<div class="v3-reports__top v3-reports__top--no-border">\n<div class="v3-reports__title">\n<h2>Products</h2>\n</div>\n</div>\n</div>\n</div>\n<div id="v3-reports__reports_6593cee681481" class="v3-reports__reports">\n<a\nclass="v3-reports__reports-report"\nhref="/products/security-service-edge"\n>\n<div class="v3-reports__reports-report-icon">\n<img\nsrc="https://www.netskope.com/wp-content/uploads/2022/04/security-service-edge-sse-icon-55x55-1.svg"\nalt="Security Service Edge (SSE) icon"\n/>\n</div>\n<div class="v3-reports__reports-report-title">\nSecurity Service Edge\n</div>\n<div class="v3-reports__reports-report-text">\nNetskope Intelligent SSE converges security capabilities into a single\ncloud platform.\n</div>\n<div class="v3-reports__reports-report-cta">\n<span>Learn more</span>\n</div>\n</a>\n<a class="v3-reports__reports-report" href="/products/next-gen-swg">\n<div class="v3-reports__reports-report-icon">\n<img\nsrc="https://www.netskope.com/wp-content/uploads/2022/04/swg-icon-55x55-1.svg"\nalt="Next Gen Secure Web Gateway icon"\n/>\n</div>\n<div class="v3-reports__reports-report-title">\nNext Gen Secure Web Gateway (SWG)\n</div>\n<div class="v3-reports__reports-report-text">\nThe foundation for SSE web and cloud inline security providing threat\nand data protection.\n</div>\n<div class="v3-reports__reports-report-cta">\n<span>Learn more</span>\n</div>\n</a>\n<a class="v3-reports__reports-report" href="/products/casb">\n<div class="v3-reports__reports-report-icon">\n<img\nsrc="https://www.netskope.com/wp-content/uploads/2022/04/casb-icon-55.svg"\nalt="CASB icon"\n/>\n</div>\n<div class="v3-reports__reports-report-title">\nCloud Access Security Broker (CASB)\n</div>\n<div class="v3-reports__reports-report-text">\nConfidently adopt cloud applications and services without sacrificing\nsecurity.\n</div>\n<div class="v3-reports__reports-report-cta">\n<span>Learn more</span>\n</div>\n</a>\n<a class="v3-reports__reports-report" href="/products/skopeai">\n<div class="v3-reports__reports-report-icon">\n<img\nsrc="https://www.netskope.com/wp-content/uploads/2023/08/skopeai-icon-55x55-1.svg"\nalt="SkopeAI"\n/>\n</div>\n<div class="v3-reports__reports-report-title">SkopeAI</div>\n<div class="v3-reports__reports-report-text">\nAutomatically adapts to the ever-growing data landscape, including\ngenerative AI and new AI-driven attacks.\n</div>\n<div class="v3-reports__reports-report-cta">\n<span>Learn more</span>\n</div>\n</a>\n<a\nclass="v3-reports__reports-report d-none d-md-flex mob-hidden-1"\nhref="/products/private-access"\n>\n<div class="v3-reports__reports-report-icon">\n<img\nsrc="https://www.netskope.com/wp-content/uploads/2022/04/private-access-for-ztna-icon-55x55-1.svg"\nalt="NPA (ZTNA) icon"\n/>\n</div>\n<div class="v3-reports__reports-report-title">\nPrivate Access for ZTNA\n</div>\n<div class="v3-reports__reports-report-text">\nConnect users anywhere to private resources ensuring fast and direct\napplication connectivity and superior user experience.\n</div>\n<div class="v3-reports__reports-report-cta">\n<span>Learn more</span>\n</div>\n</a>\n<a\nclass="v3-reports__reports-report d-none d-md-flex mob-hidden-2"\nhref="/products/public-cloud-security"\n>\n<div class="v3-reports__reports-report-icon">\n<img\nsrc="https://www.netskope.com/wp-content/uploads/2022/04/public-cloud-security-icon-55x55-1.svg"\nalt="Public Cloud Security icon"\n/>\n</div>\n<div class="v3-reports__reports-report-title">\nPublic Cloud Security\n</div>\n<div class="v3-reports__reports-report-text">\nGain visibility, control, and compliance across your multi-cloud\nenvironment.\n</div>\n<div class="v3-reports__reports-report-cta">\n<span>Learn more</span>\n</div>\n</a>\n</div>\n<div class="v3-reports__cta">\n<a class="white-btn d-md-none" href="javascript:void(0)" id="see-more-btn"\n>See more</a\n><a\nclass="ga__cta v3-reports__cta btn-blue"\nhref="https://www.netskope.com/products"\n>See all products</a\n>\n</div>\n</div>\n</div>'),document.querySelector("body .v3__container #components__content .v3.v3-promo.homepage .v3-promo__container").innerHTML='<div class="spz-custom-slider">\n<div id="v3-promo__boxes" class="v3-promo__boxes v3-promo__boxes-wrapper">\n<div class="v3-promo__box">\n<a\nclass="v3-promo__box-inner"\nhref="https://www.netskope.com/netskope-threat-labs/cloud-threat-report/top-adversary-tactics-and-techniques"\n>\n<div class="plus-orange">\n<div class="plus-orange__icon">\n<img\nsrc="https://www.netskope.com/wp-content/themes/netskope/images/v3/plus_orange.svg"\nalt="orange plus"\n/>\n</div>\n</div>\n<div class="v3-promo__box-number">01</div>\n<div class="v3-promo__box-title">\n<h6>Cloud and Threat Report</h6>\n<p>Top Adversary Tactics and Techniques.</p>\n</div>\n<div class="v3-promo__box-link">\n<span> Learn more </span>\n</div>\n</a>\n</div>\n<div class="v3-promo__box">\n<a\nclass="v3-promo__box-inner"\nhref="https://www.netskope.com/company/events/sase-week"\n>\n<div class="plus-orange">\n<div class="plus-orange__icon">\n<img\nsrc="https://www.netskope.com/wp-content/themes/netskope/images/v3/plus_orange.svg"\nalt="orange plus"\n/>\n</div>\n</div>\n<div class="v3-promo__box-number">02</div>\n<div class="v3-promo__box-title">\n<h6>SASE Week 2023</h6>\n<p>On-Demand</p>\n</div>\n<div class="v3-promo__box-link">\n<span> Learn more </span>\n</div>\n</a>\n</div>\n<div class="v3-promo__box">\n<a\nclass="v3-promo__box-inner"\nhref="https://www.netskope.com/resources/analyst-reports/4-ways-generative-ai-will-impact-cisos-and-their-teams"\n>\n<div class="plus-orange">\n<div class="plus-orange__icon">\n<img\nsrc="https://www.netskope.com/wp-content/themes/netskope/images/v3/plus_orange.svg"\nalt="orange plus"\n/>\n</div>\n</div>\n<div class="v3-promo__box-number">03</div>\n<div class="v3-promo__box-title">\n<h6>4 Ways Generative</h6>\n<p>AI Will Impact CISOs and Their Teams</p>\n</div>\n<div class="v3-promo__box-link">\n<span> Learn more </span>\n</div>\n</a>\n</div>\n<div class="v3-promo__box">\n<a\nclass="v3-promo__box-inner"\nhref="https://www.netskope.com/solutions/replace-virtual-private-networks"\n>\n<div class="plus-orange">\n<div class="plus-orange__icon">\n<img\nsrc="https://www.netskope.com/wp-content/themes/netskope/images/v3/plus_orange.svg"\nalt="orange plus"\n/>\n</div>\n</div>\n<div class="v3-promo__box-number">04</div>\n<div class="v3-promo__box-title">\n<h6>Complete VPN</h6>\n<p>Replacement with ZTNA Next</p>\n</div>\n<div class="v3-promo__box-link">\n<span> Learn more </span>\n</div>\n</a>\n</div>\n</div>\n<div class="v3-promo__slider-arrow slick-prev">\n<img\nclass="no-lazyload"\nsrc="//res.cloudinary.com/spiralyze/image/upload/v1704198617/netskope/3001/icon_wrapper_1.svg"\nalt="arrow left"\n/>\n</div>\n<div class="v3-promo__slider-arrow slick-next">\n<img\nclass="no-lazyload"\nsrc="//res.cloudinary.com/spiralyze/image/upload/v1704198616/netskope/3001/icon_wrapper.svg"\nalt="arrow right"\n/>\n</div>\n</div>\n\n',document.querySelector("#locale_place_holder")&&""==document.querySelector("#locale_place_holder").textContent&&(document.querySelector("#locale_place_holder").textContent="EN");e(".v3-reports:not(.control) .v3-reports__reports.slick-initialized").then((function(e){document.querySelector(".v3-reports.light:not(.control) .v3-reports__title h2").innerHTML="Trusted by the industry's<br><span>leading authorities</span>",jQuery(".v3-reports:not(.control) .v3-reports__reports").slick("unslick")})),e(".slick-initialized").then((function(e){window.innerWidth>1023&&document.querySelector(".custom-card")&&(document.querySelector(".custom-card").remove(),document.querySelector(".custom-title").remove()),document.querySelector(".v3-cta.dark .v3-cta__title h2").innerHTML="Accelerate your security program with the <span>SASE Leader</span>",document.querySelectorAll(".v3-reports .v3-reports__reports .v3-reports__reports-report .v3-reports__reports-report-cta img").forEach((e=>{e.setAttribute("src","//res.cloudinary.com/spiralyze/image/upload/v1704198787/netskope/3001/icon_wrapper_4.svg")})),jQuery("#v3-promo__boxes").slick({slidesToShow:3,slidesToScroll:1,arrows:!0,infinite:!0,centerMode:!1,variableWidth:!0,prevArrow:jQuery(".v3-promo__slider-arrow.slick-prev"),nextArrow:jQuery(".v3-promo__slider-arrow.slick-next"),responsive:[{breakpoint:1280,settings:{slidesToShow:2}},{breakpoint:574,settings:{slidesToShow:1.155,infinite:!1,centerMode:!1}}]}),jQuery(".slider-content").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:1900,centerMode:!0,asNavFor:".slider-thumb",arrows:!1,variableWidth:!0,responsive:[{breakpoint:767,settings:{centerMode:!1}}]}),jQuery(".slider-content").on("touchmove",(e=>{jQuery(".slider-content").slick("slickPlay"),jQuery(".slider-thumb").slick("slickPlay")})),jQuery(".slider-content").on("touchstart",(e=>{jQuery(".slider-content").slick("slickPause"),jQuery(".slider-thumb").slick("slickPause")})),jQuery(".slider-thumb").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".slider-content",dots:!1,centerMode:!1,focusOnSelect:!0,arrows:!1,infinite:!1,variableWidth:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:4,infinite:!0,autoplay:!0,autoplaySpeed:1900}}]})}))}()})),e(".spz-email").then((function(e){document.querySelectorAll(".spz-email").forEach((e=>{e.addEventListener("focus",(function(s){e.closest(".header__get-started").classList.add("i-focused")})),e.addEventListener("blur",(function(s){e.closest(".header__get-started").classList.remove("i-focused")})),function(e,s){e.addEventListener("mouseenter",(n=>e.closest(".header__get-started").classList.add(s))),e.addEventListener("mouseleave",(n=>e.closest(".header__get-started").classList.remove(s)))}(e,"i-hover")}))})),window.addEventListener("click",(function(e){if(e.target.classList.contains("header__get-started-button")){s("userEmailSPZ",this.document.querySelector(".spz-email").value||this.document.querySelector(".spz-email.mobile").value)}e.target.classList.contains("learn-more-cta")&&document.querySelector(".spz-banner-section").scrollIntoView({behavior:"smooth"}),e.target.classList.contains("v3-reports__reports-report")&&e.target.querySelector("a.ga__cta")&&e.target.querySelector("a.ga__cta").click(),e.target.classList.contains("white-btn")&&(this.document.querySelector(".v3-reports.control .v3-reports__reports .mob-hidden-1").classList.remove("d-none"),this.document.querySelector(".v3-reports.control .v3-reports__reports .mob-hidden-2").classList.remove("d-none"),this.document.querySelector(".white-btn").classList.add("d-none")),"spz-input"==e.target.className&&(e.target.checked?e.target.closest(".custom-check").classList.add("checked"):e.target.closest(".custom-check").classList.remove("checked"))})),-1==navigator.userAgent.toLowerCase().indexOf("chrome/")&&navigator.userAgent.toLowerCase().indexOf("safari/")>-1&&(document.body.classList.add("safari"),document.querySelector(".v3__container").classList.add("safari"))}}));