//Control URL
//https://lp.eptura.com/website-proxyclick-demo.html?optimizely_token=bd126691e043f713a0e4aa87bc6d485c6e82cc1d7cc4887d9191b56ab66deb9e&optimizely_x=25446510216&optimizely_x_audiences=&optimizely_preview_layer_ids=25427570390&optimizely_snippet=s3-24778630161

(function () {
    // Add unique classes to body
    document.body.classList.add('spz-4001');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);

    //For testimonial slider
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css';
    document.head.appendChild(link);

    function getScript(source, callback) {
        var el = document.createElement("script");
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
    }

    function loadSlider() {
        getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js", function () {
            new Splide("#reviews-sec", {
                perPage: 2,
                // height: '254px',
                pagination: true,
                gap: '56px',
                arrows: false,
                type: 'loop',
                breakpoints: {
                    1360: {
                        gap: '35',
                        // height: '310px',
                    },
                    1199: {
                        // height: '230px',
                        gap: '56px',
                    },
                    767: {
                        perPage: 1,
                        gap: '0px',
                    }
                }
            }).mount();
        });
    }

    const pageData = [
        {
            pageName: "website-proxyclick-demo",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693576037/eptura/4001/proxyclick_logo.svg",
            logoAlt: "Proxyclick Demo",
            subTitle: "VISiTOR MANAGEMENT SOFTWARE",
            rightTitle: "Make the visitor check-in experience 50% faster while improving security.",
            listItem1: "<span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
            listItem2: "<span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.",
            listItem3: "<span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications.",
            features: [
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Hand_icon.png",
                    featureAltTag: "Visitor check-in",
                    featureCopy: "Check visitors in electronically. Create badges, control access, and get real-time alerts. Pre-screen. Self check-in kiosks.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Mobile_icon.png",
                    featureAltTag: "Integrations",
                    featureCopy: "30+ integrations for access control, notifications, SSO, and more. Includes Slack, Microsoft Teams, and Cisco.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Chat_icon.png",
                    featureAltTag: "Notifications",
                    featureCopy: "Automatically notify hosts of visitor arrivals via Slack, email, text message, and other platforms.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/workplace-icon.png",
                    featureAltTag: "Pre check-in",
                    featureCopy: "Send check-in info, legal documents, and questionnaires to guests via email before arrival. Save time at check-in.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Security_icon.png",
                    featureAltTag: "Security",
                    featureCopy: "Visit approvals. Automatic ID verification using facial recognition. Internal and external watchlist screening.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Book_a_workspace_icon.png",
                    featureAltTag: "Employee bookings",
                    featureCopy: "Let employees book desks, check-in and out, answer health/security questionnaires, and more.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Calendar_icon.png",
                    featureAltTag: "Logbook",
                    featureCopy: "Access visitor, employee, and delivery logbooks from a single dashboard. Automate GDPR and CCPA compliance.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Internet_icon.png",
                    featureAltTag: "Guest Wi-Fi accounts",
                    featureCopy: "Automatically create time-constrained, one-time guest Wi-Fi credentials upon check-in.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Book_icon.png",
                    featureAltTag: "Questionnaires",
                    featureCopy: "Customize check-in questionnaires and guidelines. Approve, escalate, or deny visitors based on responses.",
                }
            ],
            slider: `<li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">We <b>reduced the time</b> for the receptionist to welcome each visitor <b>by 50%.</b> But the most important isn't the time we save, it's the time it gives us to <b>better welcome</b> our visitors.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_eric_van_lint.webp" alt="Eric Van Lint">
                        </div>
                        <div class="testimonial-details">
                            <h3>Eric Van Lint</h3>
                            <p>Senior Alliance Manager</p>
                        </div>
                    </div>
                    <div class="testimonials-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                    </div>
                </div>
                <div class="testimonials-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Proxyclick was able to <b>solve all the challenges</b> we had. It's <b>user-friendly,</b> and <br>you don't need a lot of time to train<br class="som-text"> someone to use it.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_alex_lim.webp" alt="Alex Lim">
                        </div>
                        <div class="testimonial-details">
                            <h3>Alex Lim</h3>
                            <p>Workplace</p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_kfc.webp" alt="Kfc">
                    </div>
                </div>
                <div class="testimonials-logo kfc-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_kfc.webp" alt="Kfc">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">The <b>notifications</b> in Proxyclick have<br> <b>changed our lives.</b> It&#8217;s much easier for the front desk to notify people when they have packages than it used to be, when they were calling each person individually.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_dave_dlugose.webp" alt="Dave Dlugose">
                        </div>
                        <div class="testimonial-details">
                            <h3>Dave Dlugose</h3>
                            <p>IT Director</p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695201744/eptura/4001/logo_-_salvation.webp" alt="Salvation">
                    </div>
                </div>
                <div class="testimonials-logo kfc-logo mobile-sec">
                    <img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695201744/eptura/4001/logo_-_salvation.webp" alt="Salvation">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">It&#8217;s <b>user-friendly,</b> allows us to configure <b>different access levels</b> for different users, and it&#8217;s <b>cloud-based,</b> so we can retrieve information remotely and easily. </p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_josef_ong.webp" alt="Josef Ong">
                        </div>
                        <div class="testimonial-details">
                            <h3>Josef Ong</h3>
                            <p>Regional Facilities Expert</p>
                        </div>
                    </div>
                    <div class="testimonials-logo dnv-logo">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695201744/eptura/4001/logo_-_dnv.webp" alt="Dnv">
                    </div>
                </div>
                <div class="testimonials-logo dnv-logo mobile-sec">
                    <img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695201744/eptura/4001/logo_-_dnv.webp" alt="Dnv">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">By providing a <b>great visitor experience,</b> Proxyclick influences the perception of our company. It has <b>positively changed the way visitors see Greencore.</b></p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_costas_moraitis.webp" alt="Costas Moraitis">
                        </div>
                        <div class="testimonial-details">
                            <h3>Costas Moraitis</h3>
                            <p>IT Business Relationship Manager</p>
                        </div>
                    </div>
                    <div class="testimonials-logo green-logo">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695201745/eptura/4001/logo-greencore.webp" alt="Greencore">
                    </div>
                </div>
                <div class="testimonials-logo green-logo mobile-sec">
                    <img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695201745/eptura/4001/logo-greencore.webp" alt="Greencore">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Proxyclick was the <b>most customizable</b> and <b>impressive solution on the market,</b> and the perfect complement to our on-premise access control system.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_marc_a_cecere.webp" alt="Marc A. Cecere">
                        </div>
                        <div class="testimonial-details">
                            <h3>Marc A. Cecere</h3>
                            <p>Director of Applications</p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_bny.webp" alt="Bny">
                    </div>
                </div>
                <div class="testimonials-logo kfc-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_bny.webp" alt="Bny">
                </div>
            </div>
        </li>`
        },
        {
            pageName: "website-managerplus-demo",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693581180/eptura/4001/managerplus-eptura-logo-1.svg",
            logoAlt: "Managerplus Demo",
            subTitle: "All-in-one Asset MANAGEMENT SOFTWARE",
            rightTitle: "Reduce asset downtime by 50%. Streamline inventory and maintenance.",
            listItem1: "<span>Asset management.</span> Track and manage all assets.<br> Service history, maintenance, budgeting, and more.",
            listItem2: "<span>Maintenance workflows.</span> Automatically trigger work orders at set intervals or when a usage threshold is met.",
            listItem3: "<span>Inventory.</span> See exactly how many parts you have and when it&#8217;s time to order more. Auto-reorder when low.",
            features: [
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/asset-icon.png",
                    featureAltTag: "Asset management",
                    featureCopy: "View the specs, availability, cost history, and maintenance schedules of all your assets in one place.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605007/eptura/4001/Feature_Icons/maintenance-icon.png",
                    featureAltTag: "Preventive maintenance",
                    featureCopy: "Auto-generate work orders when assets reach time, usage, or mileage intervals. Track maintenance schedules.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605016/eptura/4001/Feature_Icons/work-orders-icon.png",
                    featureAltTag: "Work orders",
                    featureCopy: "Approve, schedule, and close service requests. Auto-assign to technicians based on location and priority.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605008/eptura/4001/Feature_Icons/Mobile_icon.png",
                    featureAltTag: "Technician mobile app",
                    featureCopy: "Instantly request maintenance via mobile app. Provide technicians with schedules, locations, and task descriptions.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605003/eptura/4001/Feature_Icons/inspections-icon.png",
                    featureAltTag: "Inspections",
                    featureCopy: "See a detailed list of all inspections including status and associated assets. Auto-trigger work orders when inspections fail.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605005/eptura/4001/Feature_Icons/inventory-icon.png",
                    featureAltTag: "Inventory",
                    featureCopy: "Track inventory across locations. Automatically update inventory when parts are assigned to work orders.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605006/eptura/4001/Feature_Icons/Invoices-icon.png",
                    featureAltTag: "Invoices",
                    featureCopy: "Automatically generate invoices from completed work orders. Include parts, services, or other cost items.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605015/eptura/4001/Feature_Icons/Vendor-icon.png",
                    featureAltTag: "Vendor management",
                    featureCopy: "Store all suppliers’ information and lead times. Customize PAR levels. Complete purchases. All in one place.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605002/eptura/4001/Feature_Icons/Cost-icon.png",
                    featureAltTag: "Cost forecasting",
                    featureCopy: "Track year-to-date and lifetime expenses. View cost comparisons. Create monthly budgets based on historical data.",
                }
            ],
            slider: `<li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Before using ManagerPlus, we weren&#8217;t able to keep a solid track of who was where, and who did what. But now we have a <b>better understanding of our labor</b> and the time being spent on maintenance.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1695015410/eptura/4001/slider_icons/AH.svg" alt="Alissa Hall">
                        </div>
                        <div class="testimonial-details">
                            <h3>Alissa Hall</h3>
                            <p>Maintenance Administrative</p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo-deer_valley_resort.webp" alt="Deer Valley">
                    </div>
                </div>
                <div class="testimonials-logo mobile-sec kfc-logo">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo-deer_valley_resort.webp" alt="Deer Valley">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">We have 6,700 schedules in there, and it just purrs. It runs really, really well. <b>It&#8217;s the life force of our entire maintenance company here.</b></p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1695015410/eptura/4001/slider_icons/TH.svg" alt="Tim Haley">
                        </div>
                        <div class="testimonial-details">
                            <h3>Tim Haley</h3>
                            <p>Project Analyst</p>
                        </div>
                    </div>
                    <div class="testimonials-logo gas-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo-gas_field_specialists.webp" alt="Gas Field Specialists">
                    </div>
                </div>
                <div class="testimonials-logo gas-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo-gas_field_specialists.webp" alt="Gas Field Specialists">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">For us, the main purpose of ManagerPlus is about <b>being able to determine what we own and where it is.</b> We need to be able to pull work history on trucks and say, &#8217;this truck was used for this many hours and it cost us this.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1695015410/eptura/4001/slider_icons/PB.svg" alt="Paul Beauchamp">
                        </div>
                        <div class="testimonial-details">
                            <h3>Paul Beauchamp</h3>
                            <p>Regional Maintenance Manager</p>
                        </div>
                    </div>
                    <div class="testimonials-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_salvation.webp" alt="EnviroSystems">
                    </div>
                </div>
                <div class="testimonials-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_salvation.webp" alt="EnviroSystems">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Now <b>I'm not seeing downtime due to preventive maintenance.</b> I can tell a job supervisor in advance when a piece of equipment will need service. If I have any equipment that comes in for an unforeseen issue, we can check to see when the next scheduled service is.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1695015410/eptura/4001/slider_icons/MS.svg" alt="Matt Steigmeier">
                        </div>
                        <div class="testimonial-details">
                            <h3>Matt Steigmeier</h3>
                            <p>Shop/Fleet Manager</p>
                        </div>
                    </div>
                    <div class="testimonials-logo dnv-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_dnv.webp" alt="Defoe Corp">
                    </div>
                </div>
                <div class="testimonials-logo dnv-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_dnv.webp" alt="Defoe Corp">
                </div>
            </div>
        </li>`
        },
        {
            pageName: "website-archibus-demo",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693582380/eptura/4001/archibus-eptura-logo-color_1.svg",
            logoAlt: "Archibus Demo",
            subTitle: "Next-gen Space and Facility MANAGEMENT SOFTWARE",
            rightTitle: "Reduce costs by 30% by automating space and facility management.",
            listItem1: "<span>Space planning.</span> Sort office desks, tables, and rooms. Plan for moves and occupancy changes.",
            listItem2: "<span>Work orders.</span> Automatically generate detailed work orders when assets are due for maintenance. See repair status.",
            listItem3: "<span>Scheduling.</span> Reserve desks, meeting rooms, and parking. Book rooms with the right equipment for any meeting.",
            features: [
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605014/eptura/4001/Feature_Icons/Space_planning-icon-1.png",
                    featureAltTag: "Space planning",
                    featureCopy: "Drag-and-drop floor plans to sort desks, rooms, and amenities. Plan moves. Track real estate. Identify occupancy patterns.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605016/eptura/4001/Feature_Icons/work-orders-icon.png",
                    featureAltTag: "Work order management",
                    featureCopy: "Let managers approve, schedule, and close service requests. Communicate with technicians via mobile app. Send feedback.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605007/eptura/4001/Feature_Icons/maintenance-icon.png",
                    featureAltTag: "Preventive maintenance",
                    featureCopy: "Automatically send work orders at set intervals or usage thresholds. See upcoming asset service and inspection dates.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605008/eptura/4001/Feature_Icons/Mobile_icon.png",
                    featureAltTag: "Service requests",
                    featureCopy: "Instantly request maintenance via the mobile app. Easily provide technicians with schedules, locations, and task descriptions.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_a_workspace_icon.png",
                    featureAltTag: "Reservations",
                    featureCopy: "Schedule desks, meeting rooms, and parking. Auto-book rooms with the right equipment. All via the app.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605000/eptura/4001/Feature_Icons/collaboration-icon-1.png",
                    featureAltTag: "Hybrid collaboration",
                    featureCopy: "Set your in-office schedule and status, see where your team is working, and schedule time with co-workers.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/asset-icon.png",
                    featureAltTag: "Asset inventory",
                    featureCopy: "Get a complete view of all your asset specs, maintenance status, lifecycle history, and availability in one place.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605005/eptura/4001/Feature_Icons/inventory-icon.png",
                    featureAltTag: "Budgeting",
                    featureCopy: "Get analytics on asset costs and performance of operations. Create monthly budgets based on historical data.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_icon-1.png",
                    featureAltTag: "Compliance",
                    featureCopy: "Automatically schedule inspections and generate checklists. Maintain OSHA and CCOHS compliance.",
                }
            ],
            slider: `<li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Archibus is <b>saving money</b> for us <b>in many ways,</b> by more accurately <b>tracking our <br>assets</b> as well as their condition and costs, <b>identifying surplus space,</b> improving <b>management of our fleet of vehicles,</b> and aiding safety and business continuity.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_ralph_linne.webp" alt="Ralph Linne">
                        </div>
                        <div class="testimonial-details">
                            <h3>Ralph Linne</h3>
                            <p>Director of Country Facilities</p>
                        </div>
                    </div>
                    <div class="testimonials-logo hamilton-sec">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_hamilton_county.webp" alt="Hamilton County">
                    </div>
                </div>
                <div class="testimonials-logo hamilton-sec mobile-sec">
                    <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_hamilton_county.webp" alt="Hamilton County">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Archibus is <b>one of the more interactive systems I have used,</b> and I&#8217;ve used some really robust systems. If someone were coming into my job, <b>I&#8217;d be confident in showing them how to use Archibus.</b> It&#8217;s a <br>nice one to navigate.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_charlotte_amess.webp" alt="Charlotte Amess">
                        </div>
                        <div class="testimonial-details">
                            <h3>Charlotte Amess</h3>
                            <p>System Developer and Space Coordinator</p>
                        </div>
                    </div>
                    <div class="testimonials-logo john-sec">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_york_st_john_university.webp" alt="York St John University">
                    </div>
                </div>
                <div class="testimonials-logo john-sec mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_york_st_john_university.webp" alt="York St John University">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">The biggest win for us is that <b>everyone is working with the same numbers.</b> Before, when we had multiple systems, we had multiple sets of numbers, which could sometimes cause trouble.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_julia_trimmer.webp" alt="Julia Trimmer">
                        </div>
                        <div class="testimonial-details">
                            <h3>Julia Trimmer</h3>
                            <p>Senior IT Analyst</p>
                        </div>
                    </div>
                    <div class="testimonials-logo hamilton-sec">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                    </div>
                </div>
                <div class="testimonials-logo hamilton-sec mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">We once had a very paper-driven work order process where a <b>work request could take up to three and a half weeks</b> from the initial request to getting that work order into a tradesperson&#8217;s hands. <b>Now it takes three days.</b></p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_murray_hunt.webp" alt="Murray Hunt">
                        </div>
                        <div class="testimonial-details">
                            <h3>Murray Hunt</h3>
                            <p>Manager of Integrated Workplace Management Systems</p>
                        </div>
                    </div>
                    <div class="testimonials-logo board-sec">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                    </div>
                </div>
                <div class="testimonials-logo board-sec mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                </div>
            </div>
        </li>`
        },
        {
            pageName: "website-spaceiq-demo",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693585113/eptura/4001/spaceiq-eptura-logo-color_1.svg",
            logoAlt: "SpaceIQ Demo",
            subTitle: "Workplace operations SOFTWARE",
            rightTitle: "Automate space planning and management. Reduce costs by 30%.",
            listItem1: "<span>Space planning.</span> Track spaces, people, furniture, and assets in one place. Sort office desks, tables, and rooms. ",
            listItem2: "<span>Move management.</span> Plan for moves using drag-and-drop. Auto-update floor plans once you&#8217;ve relocated.",
            listItem3: "<span>Real estate portfolio.</span> Track your real estate for all your locations. Lease costs, utilization rates, and occupancies.",
            features: [
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605011/eptura/4001/Feature_Icons/plans-icon.png",
                    featureAltTag: "Digital floor plans",
                    featureCopy: "Digitally replicate your facilities. Drag-and-drop desks, tables, equipment, mechanical structures, and interior/<br>exterior features.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605008/eptura/4001/Feature_Icons/Move-icon.png",
                    featureAltTag: "Move planning",
                    featureCopy: "Track and plan for new staff, relocations, and equipment across your space. View reports on the status of individual or group moves.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605012/eptura/4001/Feature_Icons/requests-icon.png",
                    featureAltTag: "Service and move requests",
                    featureCopy: "Make and track maintenance and personal moves. Let employees include descriptions, photos, and location details.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605011/eptura/4001/Feature_Icons/portfoli-_icon.png",
                    featureAltTag: "Real estate portfolio",
                    featureCopy: "Track and evaluate your company&#8217;s real estate for all your locations. Compare lease costs, utilization rates, and capacity. ",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694604999/eptura/4001/Feature_Icons/Calendar_icon.png",
                    featureAltTag: "Scheduling",
                    featureCopy: "Reserve desks, meeting rooms, and parking. Auto-book rooms with the right equipment. Notify attendees of any meeting changes.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605000/eptura/4001/Feature_Icons/collaboration-icon-1.png",
                    featureAltTag: "Hybrid collaboration",
                    featureCopy: "Set your in-office schedule and status, see an overview of where your team is working, and schedule time with co-workers.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605009/eptura/4001/Feature_Icons/Navigation-icon.png",
                    featureAltTag: "Navigation",
                    featureCopy: "Help employees and visitors find the right room with digital floor plans and kiosks. Show technicians exact work order location.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605006/eptura/4001/Feature_Icons/IoT_sensors-icon.png",
                    featureAltTag: "IoT sensors",
                    featureCopy: "See which spaces are actively utilized and available. Identify underutilized or congested space and optimize it for better use.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605003/eptura/4001/Feature_Icons/inspections-icon.png",
                    featureAltTag: "Cleaning & safety",
                    featureCopy: "Automatically inform your cleaning crew when a space needs to be sanitized. Notify employees when their desk is clean.",
                }
            ],
            slider: `<li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Before SpaceIQ, everything was very manual. <b>Space IQ makes our space management really quick and easy.</b> I am no longer having to print out floor plans. Everything is all in one place. Space IQ has eliminated a lot of the time that was wasted.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/nadia_wong.webp" alt="Nadia Wong">
                        </div>
                        <div class="testimonial-details">
                            <h3>Nadia Wong</h3>
                            <p>Senior Facilities Manager</p>
                        </div>
                    </div>
                    <div class="testimonials-logo hamilton-sec">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_hamilton_county_1.webp" alt="Hamilton County">
                    </div>
                </div>
                <div class="testimonials-logo hamilton-sec mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_hamilton_county_1.webp" alt="Hamilton County">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">With multiple offices, hundreds of conference rooms, and constantly growing teams, being able to quickly find people and places is invaluable. <b>SpaceIQ makes this very easy</b> with both its web application and its mobile application.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/chase_palmer.webp" alt="Chase Palmer">
                        </div>
                        <div class="testimonial-details">
                            <h3>Chase Palmer</h3>
                            <p>Senior Security Analyst</p>
                        </div>
                    </div>
                    <div class="testimonials-logo john-sec">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_york_st_john_university_1.webp" alt="York St John University">
                    </div>
                </div>
                <div class="testimonials-logo john-sec mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_york_st_john_university_1.webp" alt="York St John University">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">I can't even begin to think about the amount of time that was wasted trying to manage space the old-fashioned way. With SpaceIQ, it's just all right there, <b>easy to see, easy to present, easy to use.</b></p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/jay_momet.webp" alt="Jay Momet">
                        </div>
                        <div class="testimonial-details">
                            <h3>Jay Momet</h3>
                            <p>Director of Real Estate & Facilities</p>
                        </div>
                    </div>
                    <div class="testimonials-logo hamilton-sec">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_duke_1.webp" alt="Leap Frog">
                    </div>
                </div>
                <div class="testimonials-logo hamilton-sec mobile-sec">
                    <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_duke_1.webp" alt="Leap Frog">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes"><b>SpaceIQ has been saving me approximately 4-8 hours per week</b> by providing solutions for what I used to have to do manually. It has allowed me to focus so much more on getting out in front of and forecasting for the challenges of our growing company as well as finding creative solutions.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/benjamin_lane.webp" alt="Benjamin Lane">
                        </div>
                        <div class="testimonial-details">
                            <h3>Benjamin Lane</h3>
                            <p>Manager, Facilities & Business Services</p>
                        </div>
                    </div>
                    <div class="testimonials-logo board-sec">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education_3.webp" alt="NWEA">
                    </div>
                </div>
                <div class="testimonials-logo board-sec mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education_3.webp" alt="NWEA">
                </div>
            </div>
        </li>`
        },
        {
            pageName: "website-ioffice-demo",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693586162/eptura/4001/ioffice-eptura-logo-color_1.svg",
            logoAlt: "IOffice Demo",
            subTitle: "Facility MANAGEMENT SOFTWARE",
            rightTitle: "Plan, optimize, and manage your entire facility in 87% less time.",
            listItem1: "<span>Space planning.</span> Get a digital floor plan of your facilities. Drag-and-drop teams, desks, assets, amenities, and more.",
            listItem2: "<span>Assets.</span> Track asset costs, service requests, and repair history. Auto-create preventive maintenance work orders. ",
            listItem3: "<span>Employee services.</span> Book meeting rooms and desks. Notify hosts of visitors. Request catering. Reduce turnover by 59%.",
            features: [
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605014/eptura/4001/Feature_Icons/Space_planning-icon.png",
                    featureAltTag: "Space planning",
                    featureCopy: "Drag-and-drop floor plans to sort desks, rooms, and amenities. Instantly share digital floor plans with employees.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605008/eptura/4001/Feature_Icons/Move-icon.png",
                    featureAltTag: "Move management",
                    featureCopy: "Plan moves for individuals, teams, or offices. View calendars. Create and track move tickets, labels, and more.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/asset-icon.png",
                    featureAltTag: "Asset management",
                    featureCopy: "Track and manage all assets. Service history, maintenance, budgeting, and status. View warranty information.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605016/eptura/4001/Feature_Icons/work-orders-icon.png",
                    featureAltTag: "Work orders",
                    featureCopy: "Auto-send work orders when assets reach performance thresholds. Let managers approve, schedule, and close requests.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_a_workspace_icon.png",
                    featureAltTag: "Workspace booking",
                    featureCopy: "Reserve desks, meeting rooms, and parking. Auto-book rooms with the right equipment. Notify attendees of any meeting changes.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605009/eptura/4001/Feature_Icons/Navigation-icon.png",
                    featureAltTag: "Navigation",
                    featureCopy: "Help employees and visitors find the right room with digital floor plans and kiosks. Show technicians exact work order location.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605003/eptura/4001/Feature_Icons/Hand_icon.png",
                    featureAltTag: "Visitor management",
                    featureCopy: "Auto-send invites with the meeting details. Let visitors check-in and submit documents electronically. Maintain visitor logs.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605010/eptura/4001/Feature_Icons/Office_services-icon.png",
                    featureAltTag: "Office services",
                    featureCopy: "Let employees receive mail and get notified of new packages. Request catering. Instantly submit print and copy jobs.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694605002/eptura/4001/Feature_Icons/Cost-icon.png",
                    featureAltTag: "Analytics",
                    featureCopy: "Get analytics on space utilization, service requests, assets, inventory, visitors, and more. Optimize facilities.",
                }
            ],
            slider: `<li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">For Sephora, the greatest benefits of working with iOFFICE are <b>creating organized and clear floor maps,</b> ease of moves, and increased productivity of the FM team.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/edgar_sanchez.webp" alt="Edgar Sanchez">
                        </div>
                        <div class="testimonial-details">
                            <h3>Edgar Sanchez</h3>
                            <p>Director of Country Facilities </p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_hamilton_county.webp" alt="Sephora">
                    </div>
                </div>
                <div class="testimonials-logo mobile-sec kfc-logo">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_hamilton_county.webp" alt="Sephora">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">iOFFICE enabled the Under Armour facilities and operations team to <b>improve how they respond to the changing needs</b> of their workforce now and into the future.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/brendan_robinson.webp" alt="Brendan Robinson">
                        </div>
                        <div class="testimonial-details">
                            <h3>Brendan Robinson</h3>
                            <p>Director of Facilities and Operations</p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_york_st_john_university.webp" alt="John University">
                    </div>
                </div>
                <div class="testimonials-logo kfc-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_york_st_john_university.webp" alt="John University">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">HR can use this for headcount planning, Risk Management can better look at our assets, and we can send work orders to our 3rd party service providers. <b>iOFFICE has allowed us to be more efficient</b> and collaborate across the board.</p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/sarah_baldi.webp" alt="Sarah Baldi">
                        </div>
                        <div class="testimonial-details">
                            <h3>Sarah Baldi</h3>
                            <p>VP of Global Workplace</p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_duke.webp" alt="M c">
                    </div>
                </div>
                <div class="testimonials-logo kfc-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_duke.webp" alt="M c">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Within 24 hours, we knew where everyone was and should be, even our remote and outsourced workers. Thanks to iOFFICE's integration with WORKDAY, we have <b>real-time location and occupancy intelligence.</b></p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/jeff_mackay.webp" alt="Jeff MacKay">
                        </div>
                        <div class="testimonial-details">
                            <h3>Jeff MacKay</h3>
                            <p>Senior Director of Global Operations</p>
                        </div>
                    </div>
                    <div class="testimonials-logo dnv-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education.webp" alt="Vertex">
                    </div>
                </div>
                <div class="testimonials-logo dnv-logo mobile-sec">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education.webp" alt="Vertex">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">This is no longer an exercise in complexity. I don&#8217;t have to actively corral the process manually to get results. <b>iOFFICE is really on the cutting edge; it just makes sense.</b></p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/luis_prado.webp" alt="Luis Prado">
                        </div>
                        <div class="testimonial-details">
                            <h3>Luis Prado</h3>
                            <p>Facilities Manager</p>
                        </div>
                    </div>
                    <div class="testimonials-logo dnv-logo">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education_1.webp" alt="ABB">
                    </div>
                </div>
                <div class="testimonials-logo dnv-logo mobile-sec">
                    <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education_1.webp" alt="ABB">
                </div>
            </div>
        </li>
        <li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <p class="quotes">Out of all the IWMS products on the planet, my team chose iOFFICE not only for ourselves but also for our customers. That's how much faith we have in this solution. <b>iOFFICE is without a doubt our biggest asset.</b></p>
                <div class="testimonial-info">
                    <div class="testimonials-item">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/johan_nilsson.webp" alt="Johan Nilsson">
                        </div>
                        <div class="testimonial-details">
                            <h3>Johan Nilsson</h3>
                            <p>Head of Deployment and Planning</p>
                        </div>
                    </div>
                    <div class="testimonials-logo kfc-logo">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education_3.webp" alt="Calgary Board of Education">
                    </div>
                </div>
                <div class="testimonials-logo kfc-logo mobile-sec">
                    <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4001/logo_-_calgary_board_of_education_3.webp" alt="Calgary Board of Education">
                </div>
            </div>
        </li>`
        }
    ];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-4001');
        document.body.classList.add('content-wrapped');
        clearFormFields();
        loadTest();
    });


    //4001 specific code
    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        updatePageContent();
        formUpdate();
        focusFields();

        waitForElm('.spz-rest-all-section .spz-testimonial-slider .splide.testimonial-wrapper.is-initialized').then(function () {
            document.querySelector('.spz-rest-all-section').classList.add('hidden-secttion');
        });

        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari')
        }

        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("show-comment-dynamic")) {
                e.target.parentElement.classList.add('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }

            if (e.target.classList.contains("mktoField")) {
                showGlobalError();
            }

            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }

            if (e.target.classList.contains("load-more-btn")) {
                e.target.classList.add('d-none');
                document.body.classList.remove('content-wrapped');
                this.document.querySelector('.spz-rest-all-section').classList.remove('hidden-secttion');
                scrollToElement('.features-3-col-icon', 50);
            }

            if (e.target.classList.contains("get-started-cta")) {
                scrollToElement('#HeroFormPanel', 50);
                this.document.querySelector('#HeroFormPanel').classList.add('angry-shake');
                setTimeout(() => {
                    this.document.querySelector('#HeroFormPanel').classList.remove('angry-shake');
                }, 1500);
            }
        });

        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }

    //custom error for checkbox field
    function showGlobalError() {
        let checkErrorforCheckBox = setInterval(() => {
            if (document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid') && document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid + .mktoError')) {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.add('spz-cstm-error');
            }
            else {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.remove('spz-cstm-error');
            }
        }, 50);

        setTimeout(() => {
            clearInterval(checkErrorforCheckBox);
        }, 1000);
    }

    //Marketo form update
    function formUpdate() {
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;



        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6><span>Get started <span></h6>';
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';

        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            let fieldName = el.getAttribute('name');
            el.closest('.mktoFormCol').setAttribute('spz_fname', fieldName);

        });
    }

    //On value change of "I am.." field switch label od comment button
    function dropdownFunctionality(val) {
        let setBuffer = setInterval(() => {
            if (document.querySelector('#Lead_Notes__c')) {
                if (document.querySelector('.spz-anchor').classList.contains('spz-hidden')) {
                    document.querySelector('.spz-anchor').classList.remove('spz-hidden');
                }
            }
            else {
                document.querySelector('.spz-anchor').classList.add('spz-hidden');
            }

            if (val == 'Other' || val == 'A current client' || val == 'A current Partner') {
                document.querySelector('.show-comment-dynamic').textContent = '+ Please let us know how we may assist you';
            }
            else {
                document.querySelector('.show-comment-dynamic').textContent = '+ Comment';
            }
            focusFields();
        }, 5);

        setTimeout(() => {
            clearInterval(setBuffer);
        }, 50);

        waitForElm('#Solution_Type__c').then(function () {
            // document.querySelector('#Solution_Type__c option:first-child').textContent = '';
            let fieldName = document.querySelector('#Solution_Type__c').getAttribute('name');
            document.querySelector('#Solution_Type__c').closest('.mktoFormCol').setAttribute('spz_fname', fieldName);
        });
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            blockChar();

            el.addEventListener('focus', function () {
                el.closest('.mktoFormCol').classList.add('field-focus');
            });
            el.addEventListener('blur', function () {
                el.closest('.mktoFormCol').classList.remove('field-focus');
                checkError(el);
            });

            // add event listeners to the input element
            el.addEventListener('keypress', () => {
                checkError(el);
            });

            el.addEventListener('change', () => {
                checkError(el);
            });

            el.addEventListener('keydown', () => {
                checkError(el);
            });

            el.addEventListener('keyup', () => {
                checkError(el);
            });
        });
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on input
    function checkError(elem) {
        let timeBuffer = setInterval(() => {
            if (elem.closest('.mktoFormCol ').querySelector('.mktoError') && elem.closest('.mktoFormCol').querySelector('.mktoInvalid')) {
                elem.closest('.mktoFormCol').classList.add('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('field-error');
            }
            if (elem && elem.value && (elem.value != '')) {
                // console.log(elem.value)
                elem.closest('.mktoFormCol').classList.add('input-filled');
                // elem.closest('.mktoFormCol').classList.remove('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
                // elem.closest('.mktoFormCol').classList.add('field-error');
            }

        }, 100);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }

    //Block "e" from number of employees field
    function blockChar() {
        var inputBox = document.getElementById("NumberOfEmployees");

        var invalidChars = ["e",];

        inputBox.addEventListener("input", function () {
            this.value = this.value.replace(/[e\+\-]/gi, "");
        });

        inputBox.addEventListener("keydown", function (e) {
            if (invalidChars.includes(e.key)) {
                e.preventDefault();
            }
        });
    }

    //URL specific image updates
    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            pageData.forEach(function (url) {
                if (identifyPage == url.pageName) {

                    //Logo update
                    document.querySelector('#hero > .hero_container > .row ').insertAdjacentHTML('beforebegin', `<div class="spz-logo"><a href="https://eptura.com/" target="_blank"> <img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></a></div>`);

                    //Hero Left content copy update
                    document.querySelector('#hero #HeroText').innerHTML = `<h6>` + url.subTitle + `</h6><h1>` + url.rightTitle + `</h1><div class="spz-review-summary"><div class="capterra-review-summary"><img src="//res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_capterra_sign.svg" alt="Capterra" class="capterra-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1690989402/eptura/3009/stars_1.svg" alt="Star Rating" class="reviews"><div class="g2-review"><span>4.4</span> (973 reviews)</div></div><div class="g2-review-summary"><img src="//res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_g2_logo.svg" alt="G2 Logo" class="capterra-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/stars.svg" alt="Star Rating" class="reviews"><div class="g2-review"><span>4.3</span> (745 reviews)</div></div></div><ul class="hero-list-copy"><li class="list-item">` + url.listItem1 + `</li><li class="list-item">` + url.listItem2 + `</li><li class="list-item">` + url.listItem3 + `</li></ul>`;

                    //Testimonials section update
                    document.querySelector('#testimonials #TestimonialImg').innerHTML = `<div class="logos-img"><picture>
                    <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/BG_Images/Logo_Set_-_Mobile.png">
                     <source media="(max-width:1199px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/BG_Images/Logo_Set_Tablet.png">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/BG_Images/Logo_Set.png" alt="Our customers">
                  </picture></div>`;

                    document.querySelector('#testimonials #TestimonialImg').insertAdjacentHTML('afterend', `<div class=" d-flex justify-content-center align-items-center load-more"><a href="javascript:void(0);" class="load-more-btn">Learn more <img src="//res.cloudinary.com/spiralyze/image/upload/v1693571571/eptura/4001/arrow-right-chevron_2.svg" alt="Arrow down"></a></div>`)

                    //Rest of the page
                    document.querySelector('body > .body-wrapper').insertAdjacentHTML('beforeend', `<section class="spz-rest-all-section">
                    <div class="spz-features-section">
                        <div class="features-3-col-icon">
                            <div class="features-title">Features</div>
                            <div class="feature3-itemsillustration-parent">`+ featureSec(url.pageName) + `
                            </div>
                            <div class="button-wrapper">
                                <div class="button">
                                    <a href="javascript:void(0);" class="get-started-cta">Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="spz-testimonial-slider">
                        <div class="testimonial-section">
                            <div class="container">
                                <div class="testimonial-main-section">
                                    <div class="left-box">
                                        <div class="reviews-main-box">
                                            <div class="reviews-img-box">
                                                <div class="capterra-img">
                                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/capterra_logo.svg" alt="Capterra" title="Capterra" />
                                                </div>
                                                <div class="star-img">
                                                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/stars.svg" alt="Capterra Stars" />
                                                </div>
                                            </div>
                                            <div class="reviews-box"><b>4.4</b>(973 reviews)</div>
                                        </div>
                                    </div>
                                    <div class="right-box"><div class="splide testimonial-wrapper" id="reviews-sec">
                                    <div class="splide__track"><ul class="splide__list">
                                        `+ url.slider + `
                                           </ul> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="spz-footer-section">
                        <div class="simplified-footer">
                            <div class="links">
                                <a href="https://eptura.com/terms/saas-privacy-policy/">SaaS Privacy Policy</a><a href="https://eptura.com/terms/privacy-policy/">Privacy Policy</a><a href="https://eptura.com/terms/modern-slavery/">Modern Slavery</a>
                            </div>
                            <div class="copyright-section"><p>All Rights Reserved © Eptura™</p></div>
                        </div>
                    </div>
                </section>
                `);

                    loadSlider();
                }
            });
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

    //Creating feature content
    function featureSec(page) {
        let thisPage = page;
        //search index by page name
        const searchIndex = pageData.findIndex(page => page.pageName === thisPage);
        let featureEl = '<div class="feature3-itemsillustration">'
        pageData[searchIndex].features.forEach(element => {
            featureEl += `<div class="feature-card">
                                <div class="card-icon">
                                    <img class="vector-icon" src="${element.featureLogo}" alt="${element.featureAltTag}">
                                </div>
                                <div class="card-content">
                                    <div class="card-subtitle">
                                    <img class="vector-icon" src="${element.featureLogo}" alt="${element.featureAltTag}"><span>${element.featureAltTag}</span>
                                    </div>
                                    <div class="card-copy">${element.featureCopy}</div>
                                </div>
                            </div>`
        });
        featureEl += '</div>';

        return featureEl;
    }

    // Function to Scroll to position using smooth scroll vanilla JS
    // target: Element to scroll to
    // offset: Offset from the top of the element
    function scrollToElement(target, offset) {
        const targetElm = document.querySelector(target);
        const targetElmOffset = targetElm.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetElmOffset,
            behavior: 'smooth'
        });
    }
})();

