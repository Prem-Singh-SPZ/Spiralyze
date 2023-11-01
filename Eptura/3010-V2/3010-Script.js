(function () {
    document.body.classList.add('spz-3010');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);

    const pageData = [
        {
            pageName: "ppc-proxyclick-discover-a-better-way-to-check-in-visitors",
            pageShortName: "Proxyclick",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/endorsed_logos.webp",
            logoAlt: "Proxyclick Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/proxyclick-ui_2.webp",
            heroImgAlt: "Proxyclick UI Image",
            features: [
                {
                    featureTitle: "Check-in",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-check-in",
                    title: "Automate guest <hyph>check-in.</hyph>",
                    subTitle: "Reduce front desk admin by 50%.",
                    featuresList: {
                        list1: "<span>Check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
                        list2: "<span>Questionnaires.</span> Customize check-in questionnaires and guidelines. Approve or deny visitors based on responses.",
                        list3: "<span>Notifications.</span> Automatically notify hosts via Slack, email, text message, and other platforms.",
                    }
                },
                {
                    featureTitle: "Security",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-security_8",
                    title: "Increase security with visitor",
                    subTitle: "screenings, approvals, and more.",
                    featuresList: {
                        list1: "<span>Screening.</span> Automatically screen visitors against internal and external watchlists. Require ID verification.",
                        list2: "<span>Visit approvals.</span> Require internal approvals, pre-registration, and legal document completion. ",
                        list3: "<span>Emergency management.</span> Get emergency lists, send facility-wide alerts, and coordinate with responders.",
                    }
                },
                {
                    featureTitle: "Integrations",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-integrations",
                    title: "Streamline your entire visitor flow.",
                    subTitle: "39+ integrations.",
                    featuresList: {
                        list1: "<span>Operations.</span> Integrations for access control, bookings/check-in, SSO, user provisioning, compliance, and more.",
                        list2: "<span>Integrations.</span> Azure, Microsoft, Teams, Slack, Cisco, Google, OnGuard, S2 Netbox, SCIM, Vpod, and more.",
                        list3: "<span>Custom API.</span> Create your own integration with our API access. Step-by-step documentation. ",
                    }
                },
                {
                    featureTitle: "Guest experience",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-guest_experience",
                    title: "Boost guest experience",
                    subTitle: "while streamlining <hyph>check-in.</hyph>",
                    featuresList: {
                        list1: "<span>Wi-Fi.</span> Automatically create time-constrained, one-time guest Wi-Fi credentials upon check-in.",
                        list2: "<span>Kiosk languages.</span> Let visitors choose from 33+ languages. Spanish, French, German, Chinese, and more.",
                        list3: "<span>Pre check-in.</span> Send check-in info, legal documents, and questionnaires to guests before arrival.",
                    }
                },
                {
                    featureTitle: "Operations and admin",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-operations_and_admin",
                    title: "Automate operations and admin",
                    subTitle: "across every location.",
                    featuresList: {
                        list1: "<span>Logbook.</span> Access visitor, employee, and delivery logbooks. Customize and filter views. Stay compliant.",
                        list2: "<span>Multiple locations.</span> Track, manage, and monitor visitors across locations. Get analytics and reporting.",
                        list3: "<span>Compliance.</span> Remain compliant with GDPR, CCPA, ITAR, EAR, PCI DSS, C-TPAT, and HIPAA. ",
                    }
                }
            ]
        },
        {
            pageName: "ppc-archibus-maintenance-software",
            pageShortName: "Archibus",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp",
            logoAlt: "Archibus Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/archibus-ui_1.webp",
            heroImgAlt: "Archibus UI Image",
            features: [
                {
                    featureTitle: "Service & work Orders",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-check-in_2",
                    title: "Automate asset maintenance.",
                    subTitle: "Reduce costs by 30%.",
                    featuresList: {
                        list1: "<span>Service requests.</span> Instantly submit maintenance requests on broken equipment across your facilities.",
                        list2: "<span>Preventive maintenance.</span> Automatically send work orders based on time or usage intervals.",
                        list3: "<span>Maintenance analysis.</span> See upcoming asset service and inspection dates. View lifecycle history.",
                    }
                },
                {
                    featureTitle: "maintenance management",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-maintenance_management",
                    title: "View and manage all maintenance",
                    subTitle: "from one platform.",
                    featuresList: {
                        list1: "<span>Asset details.</span> Get a complete view of all your assets, maintenance status, and open work orders in one place.",
                        list2: "<span>Work orders.</span> Approve, schedule, and close requests. Auto-assign tasks based on technician availability.",
                        list3: "<span>Communications.</span> Communicate directly with technicians via mobile app. Send feedback reports.",
                    }
                },
                {
                    featureTitle: "Technician portal",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-integrations_7",
                    title: "Enable technician self-serve",
                    subTitle: "with an all-in-one online portal.",
                    featuresList: {
                        list1: "<span>Tasks.</span> Let technicians view task descriptions, status, and location. Log task completion. ",
                        list2: "<span>Alerts.</span> Automatically send alerts to technicians when they&#8217;re assigned new work orders.",
                        list3: "<span>Prioritization.</span> Automatically re-prioritize and move requests based on urgency, location, or trade.",
                    }
                },
                {
                    featureTitle: "Operations and admin",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-guest_experience_3",
                    title: "Streamline manual maintenance ",
                    subTitle: "operations and admin.",
                    featuresList: {
                        list1: "<span>Budgeting.</span> Get analytics on asset performance and costs. Create monthly budgets based on historical data.",
                        list2: "<span>Vendor assignment.</span> Automatically assign tasks to third-party vendors. Track tasks and send invoice links.",
                        list3: "<span>Inventory planner.</span> See how many parts you have and what you need. Set limits for automatic restocks.",
                    }
                }
            ]
        },
        {
            pageName: "ppc-eptura",
            pageShortName: "Eptura",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg",
            logoAlt: "Eptura Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/eptura-demo-ui.webp",
            heroImgAlt: "Eptura UI Image",
            features: [
                {
                    featureTitle: "Workplace Scheduling",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-workplace_scheduling",
                    title: "Streamline workplace bookings",
                    subTitle: "and hybrid collaboration.",
                    featuresList: {
                        list1: "<span>Meeting scheduling.</span> Find and book the perfect meeting rooms. Including equipment, room size, and more.",
                        list2: "<span>Navigation.</span> Help employees and visitors find the right room upon arrival with digital floor plans.",
                        list3: "<span>Rescheduling.</span> Automatically book new rooms with the same size and equipment if meetings are rescheduled.",
                    }
                },
                {
                    featureTitle: "Asset Management",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-security_3",
                    title: "Manage assets in one place.",
                    subTitle: "Reduce downtime by 50%.",
                    featuresList: {
                        list1: "<span>Asset management.</span> View all asset details in one place. Including specs, availability, and digital floor plans.",
                        list2: "<span>Service requests.</span> Request maintenance via mobile app. Provide technicians with locations and descriptions.",
                        list3: "<span>Lifecycle tracking.</span> See cost history, repair schedules, and upcoming maintenance. Create monthly budgets.",
                    }
                },
                {
                    featureTitle: "Maintenance",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-integrations_3",
                    title: "Reduce costs by 30% by",
                    subTitle: "automating maintenance.",
                    featuresList: {
                        list1: "<span>Work order management.</span> Let managers approve, schedule, and close service requests in a few clicks.",
                        list2: "<span>Preventive maintenance.</span> Automatically send work orders at set intervals or based on usage thresholds.",
                        list3: "<span>Handover reports.</span> Complete inspection checklists via the mobile app before returning equipment.",
                    }
                },
                {
                    featureTitle: "Space planning",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-space_planning",
                    title: "Plan office spaces and moves in",
                    subTitle: "87% less time.",
                    featuresList: {
                        list1: "<span>Space planning.</span> Get a digital floor plan of rooms, desks, and tables. Drag-and-drop to optimize room capacity.",
                        list2: "<span>Move management.</span> Plan moves for individuals, teams, or offices. Create and track tickets, labels, and more.",
                        list3: "<span>Usage monitoring.</span> Track office usage patterns. Adjust space as utilization, occupancy, and visitors change.",
                    }
                },
                {
                    featureTitle: "Visitor management",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-operations_and_admin_2",
                    title: "Streamline visitor check-in",
                    subTitle: "while increasing security.",
                    featuresList: {
                        list1: "<span>Visitor check-in.</span> Check visitors in electronically. Create badges. Control access. Pre-screen. Self-check in kiosks.",
                        list2: "<span>Notifications.</span> Automatically notify hosts of visitor arrivals via Slack, email, text, and other platforms.",
                        list3: "<span>Security.</span> Visit approvals. Automatic ID verification using facial recognition. Watchlist screening.",
                    }
                }
            ]
        },
        {
            pageName: "ppc-condeco-make-your-flexible-office-work-better",
            pageShortName: "Condeco",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_2.webp",
            logoAlt: "Condeco Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/condeco-ui_1.webp",
            heroImgAlt: "Condeco UI Image",
            features: [
                {
                    featureTitle: "Schedule meetings",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-check-in_1",
                    title: "Book and manage <hyph>in-person</hyph> and",
                    subTitle: "hybrid meetings from one place.",
                    featuresList: {
                        list1: "<span>Meetings.</span> Instantly book meetings from the app. Move, edit, or extend meetings with a single click.",
                        list2: "<span>Recurring meetings.</span> Set repeat meetings that automatically reserve the right equipment and space.",
                        list3: "<span>Rescheduling.</span> Automatically book rooms with similar equipment when meetings change. Notify all attendees. ",
                    }
                },
                {
                    featureTitle: "Book Spaces",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-security_1",
                    title: "Streamline in-office desk, room, and",
                    subTitle: "equipment scheduling.",
                    featuresList: {
                        list1: "<span>Group bookings.</span> Book meeting and conference rooms with the right size and tech equipment for your group.",
                        list2: "<span>Individual bookings.</span> Schedule desks, parking spaces, and lockers for in-office days directly from the app. ",
                        list3: "<span>Room services.</span> Order refreshments like sandwiches and coffee in advance. Submit audio-visual service requests.",
                    }
                },
                {
                    featureTitle: "Visitor management",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-integrations_1",
                    title: "Boost visitor experience",
                    subTitle: "while maintaining security.",
                    featuresList: {
                        list1: "<span>Meetings.</span> Automatically send meeting invites to guests with the time, location, and pre-arrival instructions.",
                        list2: "<span>Check-in.</span> Let visitors check in electronically. Send unique QR codes for building access. Print badges.",
                        list3: "<span>Management.</span> Customize pre-arrival questionnaires. Approve or deny visitors. Maintain logbooks.",
                    }
                },
                {
                    featureTitle: "Hybrid Collaboration",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-guest_experience_1",
                    title: "Automate hybrid collaboration.",
                    subTitle: "37% increase in productivity.",
                    featuresList: {
                        list1: "<span>In-office planning.</span> Set your in-office schedule and status. Workspaces professionally cleaned before arrival.",
                        list2: "<span>Collaborating.</span> See a weekly overview of where your team is working and schedule time with co-workers.",
                        list3: "<span>Hybrid services.</span> Schedule in-person, virtual, or hybrid meetings. Add Zoom or Teams calls to booked spaces. ",
                    }
                },
                {
                    featureTitle: "Operations and admin",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-operations_and_admin_1",
                    title: "Streamline workspace operations.",
                    subTitle: "Reduce costs by 25%.",
                    featuresList: {
                        list1: "<span>Office planning.</span> Organize desks, tables, and equipment. Control occupancy levels. Restrict room capacity. ",
                        list2: "<span>Usage reports.</span> Track equipment usage, room utilization, and total occupancy. Adjust spaces as changes occur.",
                        list3: "<span>Integrations.</span> Integrate with Outlook, Okta, Teams, Zoom, Azure, Proxyclick, and more. Plus, custom APIs. ",
                    }
                }
            ]
        },
        {
            pageName: "ppc-eptura-asset-management",
            pageShortName: "Asset Management",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg",
            logoAlt: "Eptura Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3002/asset-management-ui_1.webp",
            heroImgAlt: "Asset management UI Image",
            features: [
                {
                    featureTitle: "Asset Management",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-asset_management_1",
                    title: "Streamline asset management.",
                    subTitle: "Reduce costs by 50%.",
                    featuresList: {
                        list1: "<span>Asset management.</span> View specs, availability, and digital floor plans for all your assets. Reduce asset downtime.",
                        list2: "<span>Lifecycle tracking.</span> Manage asset cost history, repair schedules, and upcoming maintenance. ",
                        list3: "<span>Tire tracking.</span> Track tire usage and lifespan. Auto-request replacements for damaged and worn tires.",
                    }
                },
                {
                    featureTitle: "Maintenance",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-security_6",
                    title: "Reduce downtime by 30% by",
                    subTitle: "automating maintenance.",
                    featuresList: {
                        list1: "<span>Preventive maintenance.</span> Automatically send service requests based on time or usage intervals. ",
                        list2: "<span>Maintenance analysis.</span> Approve, schedule, and close service requests. See upcoming inspection dates.",
                        list3: "<span>Service requests.</span> Request maintenance via the mobile app. Easily provide technicians with details.",
                    }
                },
                {
                    featureTitle: "Work orders",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-integrations_5",
                    title: "Automate work order management.",
                    subTitle: "Eliminate manual error.",
                    featuresList: {
                        list1: "<span>Work order management.</span> Automatically assign work orders to technicians based on location and priority.",
                        list2: "<span>Prioritization.</span> Auto-trigger work orders when inspections fail. Re-prioritize requests based on urgency. ",
                        list3: "<span>Invoices.</span> Auto-generate invoices from completed work orders. Include parts, services, or other cost items. ",
                    }
                },
                {
                    featureTitle: "Compliance and safety",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-guest_experience_6",
                    title: "Increase safety while ",
                    subTitle: "ensuring compliance.",
                    featuresList: {
                        list1: "<span>Compliance.</span> Automatically remain compliant with OSHA and CCOHS regulations.",
                        list2: "<span>Safety alerts.</span> Send real-time safety alerts via mobile app. Keep workers compliant with regulations.",
                        list3: "<span>Handover reports.</span> Complete inspection checklists from the app before returning equipment.",
                    }
                },
                {
                    featureTitle: "Operations and admin",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-operations_and_admin_4",
                    title: "Streamline asset management,",
                    subTitle: "operations, and admin.",
                    featuresList: {
                        list1: "<span>Cost forecasting.</span> Track annual and lifetime expenses. Create monthly budgets based on historical data.",
                        list2: "<span>Vendor management.</span> Store all suppliers&#8217; info and lead times. Customize PAR levels. Complete purchases.",
                        list3: "<span>Inventory.</span> See exactly how many parts you have and when it&#8217;s time to order more. Auto-reorder when low.",
                    }
                }
            ]
        },
        {
            pageName: "ppc-eptura-room-management",
            pageShortName: "Room Management",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg",
            logoAlt: "Eptura Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3002/room-management-ui_2.webp",
            heroImgAlt: "Room management UI Image",
            features: [
                {
                    featureTitle: "Meeting scheduling",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-meeting_scheduling",
                    title: "Streamline meeting scheduling.",
                    subTitle: "Boost employee experience.",
                    featuresList: {
                        list1: "<span>Meetings.</span> Schedule in-person, virtual, or hybrid meetings. Add Zoom or Teams calls with a single click.",
                        list2: "<span>Room services.</span> Submit audio-visual equipment requests. Order coffee, snacks, or lunch in advance.",
                        list3: "<span>Web portal.</span> Manage all your meetings, space bookings, service requests, and more from a single platform.",
                    }
                },
                {
                    featureTitle: "Space booking",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-security_7",
                    title: "Streamline workspace bookings.",
                    subTitle: "Reduce costs by 30%.",
                    featuresList: {
                        list1: "<span>Desk bookings.</span> Schedule desks, parking spaces, and lockers for in-office work days directly via mobile app.",
                        list2: "<span>Conference rooms.</span> Book meetings and conference rooms with the right equipment for your group.",
                        list3: "<span>Rescheduling.</span> Automatically book new rooms with the same size and equipment if meetings are rescheduled.",
                    }
                },
                {
                    featureTitle: "Navigation",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-navigation",
                    title: "Find the right room",
                    subTitle: "in a fraction of the time.",
                    featuresList: {
                        list1: "<span>Navigation.</span> Help employees and visitors find the right room upon arrival with digital floor plans.",
                        list2: "<span>Work orders.</span> Show technicians the exact work order location when a service request is placed.",
                        list3: "<span>New bookings.</span> See which rooms are still available and book instantly. Filter by location & capacity.",
                    }
                },
                {
                    featureTitle: "Collaboration",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-collaboration",
                    title: "Simplify hybrid collaboration.",
                    subTitle: "Increase productivity.",
                    featuresList: {
                        list1: "<span>Scheduling.</span> See which locations and desks your team is working at each day. Schedule time with coworkers.",
                        list2: "<span>Teams integration.</span> Set up planned collaboration days and book workspaces directly in Microsoft Teams.",
                        list3: "<span>Visitor management.</span> Add guests to bookings. Auto-send invites. Let visitors check in electronically.",
                    }
                },
                {
                    featureTitle: "Operations and admin",
                    featureImg: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3010/img-operations_and_admin_4",
                    title: "Manage desk & meeting booking",
                    subTitle: "operations in one place.",
                    featuresList: {
                        list1: "<span>Space planning.</span> Get a digital floor plan of rooms, desks, and tables. Drag-and-drop to optimize room capacity.",
                        list2: "<span>Usage reports.</span> Track office usage. Adjust space as room utilization, occupancy, and expected visitors change.",
                        list3: "<span>Service requests.</span> Let employees place service requests directly from the mobile app.",
                    }
                }
            ]
        }
    ];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3010');
        clearFormFields();
        loadTest();
    });

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        updatePageContent();
        updateHeroImage();
        formUpdate();
        focusFields();
        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari');
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
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }
            if (e.target.classList.contains("close-modal")) {
                document.querySelector('#spz-modal-form').classList.remove('show-modal-spz');
                this.document.body.classList.remove('modal-open');
            }

            if (e.target.classList.contains("get-started-cta")) {
                scrollToElement('.get-demo-spz', 50);
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3008/close_icon_hover.svg" as="image">`);
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
        MktoForms2.whenReady(function (form) {

            document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank">info@eptura-marketing.com</a>`;

            // Wrap div '#HeroFormPanel' with div '.form-wrapper-spz'
            if (document.querySelectorAll('#spz-modal-form').length == 0) {
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('beforebegin', `<div class="form-wrapper-spz" id="spz-modal-form"></div>`);
                document.querySelector('.form-wrapper-spz').appendChild(document.querySelector('#HeroFormPanel'));
            }


            document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin',
                `<div class="form-close">
                <a href="javascript:void(0)" class="close-modal"></a>
            </div>`);


            if (document.querySelector('#HeroFormCol #HeroFormTitleText h6')) {
                document.querySelector('#HeroFormCol #HeroFormTitleText h6').innerHTML = '<span>Get started</span>';
            }

            document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
            document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

            if (document.querySelectorAll('.spz-anchor').length == 0) {
                document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);
            }

            document.querySelector('#I_am__c').addEventListener('change', function () {
                dropdownFunctionality(this.value);
            });

            document.querySelector('#LblI_am__c').textContent = 'I am...*';
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
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {

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
        document.querySelector('#NumberOfEmployees').addEventListener("keydown", function (e) {
            if (e.key == 'e' || e.key == 'E') {
                e.preventDefault();
            }
        });
    }

    //Hero image update
    function updateHeroImage() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            //URL specific image updates
            if (window.location.href.indexOf('/ppc-proxyclick-discover-a-better-way-to-check-in-visitors') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    if (document.body.classList.contains('safari')) {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989323/eptura/3001/endorsed_logos_1.png" alt="Proxyclick" class="logo-img">`);
                    } else {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_1.webp" alt="Proxyclick" class="logo-img">`);
                    }
                }

                document.body.classList.add('ppc-proxyclick');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>VISITOR&nbsp;MANAGEMENT SOFTWARE</h6>
                    <h1>Make the visitor check-in experience 50% faster while improving security.</h1>
                    <ul class="hero-list-copy">
                        <li class="list-item"><span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.</li>
                        <li class="list-item"><span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.</li>
                        <li class="list-item"><span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications.</li>
                    </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_desktop_3.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_tablet_1.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_desktop_3.png" type="image/png"> 
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_tablet_1.webp" alt="Proxyclick">
                        </picture>
                    </div>`);


            }
            else if (window.location.href.indexOf('/ppc-condeco-make-your-flexible-office-work-better') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    if (document.body.classList.contains('safari')) {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989344/eptura/3001/endorsed_logos_2.png" alt="Condeco" class="logo-img">`);
                    } else {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_2.webp" alt="Condeco" class="logo-img">`);
                    }
                }

                document.body.classList.add('ppc-condeco');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Workspace Scheduling software</h6><h1>Streamline desk and meeting room scheduling. Simplify hybrid work.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Bookings.</span> Schedule desks, meetings, and parking via the app or your calendar. Instantly notify attendees of any changes. </li>
                    <li class="list-item"><span>Room selection.</span> Find rooms with the equipment and space you need. Auto-book new rooms if you reschedule meetings.</li>
                    <li class="list-item"><span>Collaboration.</span> See when co-workers will be in the office and their desk location. Easily manage your hybrid work schedule. </li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco-tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_mobile.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_desktop_1.png" type="image/png"> 
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_mobile.webp" alt="Condeco">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-archibus-maintenance-software') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    if (document.body.classList.contains('safari')) {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989355/eptura/3001/endorsed_logos_3.png" alt="Archibus" class="logo-img">`);
                    }
                    else {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp" alt="Archibus" class="logo-img">`);
                    }
                }

                if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
                    document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Fill in your details and <span>let&#x2019;s get started <span></span></span></h6>';
                }

                document.body.classList.add('ppc-archibus');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Next-Gen Maintenance Management Software</h6><h1>Automate preventive maintenance and repair. Reduce costs by 30%.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Work orders.</span> Automatically generate detailed work orders when assets are due for maintenance. </li>
                    <li class="list-item"><span>Repair management.</span> Auto-send requests to relevant workers via the mobile app. See repair status and track orders.</li>
                    <li class="list-item"><span>Budgeting.</span> Get analytics on cost, labor, and performance of operations. Easily generate plans and budgets.</li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus_-tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_mobile_1.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_desktop_1.png" type="image/png">
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_mobile_1.webp" alt="Archibus">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-eptura-asset-management') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                }

                document.body.classList.add('ppc-eptura-ast-mgmt');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Asset Management Software</h6><h1>Automate equipment maintenance. Reduce costs. Increase performance.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Work orders. </span> View all work orders in one portal. Easily provide technicians with schedules, locations, and task descriptions.</li>
                    <li class="list-item"><span>Lifecycle tracking. </span> See your cost history, repair schedules, and upcoming preventive maintenance for all your assets.</li>
                    <li class="list-item"><span>Cost forecasting. </span> Track expenses and cost comparisons. Create monthly budgets based on historical data.</li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_mobile.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_desktop_1.png" type="image/png">
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_mobile.webp" alt="Eptura Asset Management">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-eptura-room-management') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                }

                document.body.classList.add('ppc-eptura-room-mgmt');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Desk and Meeting Room Booking Software</h6><h1>Streamline workspace bookings. Boost hybrid collaboration.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Bookings. </span> Schedule desks, meeting rooms, and parking. Book rooms with the right equipment for any meeting. </li>
                    <li class="list-item"><span>Navigation. </span> Digital floor plans make it easy to find the right room or locate the one you&#8217;ve booked upon arrival.</li>
                    <li class="list-item"><span>Collaboration. </span> See when co-workers will be in the office and their desk location. Easily manage your hybrid work schedule. </li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                        <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_mobile.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_desktop_1.png" type="image/png"> 
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_mobile.webp" alt="Eptura Room Management">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-eptura') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                }

                document.body.classList.add('ppc-eptura');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>WORKPLACE AND ASSET MANAGEMENT SOFTWARE</h6><h1>Automate operations with one platform for workplace and asset management</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Workplace solutions.</span> Desk and meeting room bookings, visitor management, and
                        space planning. </li>
                    <li class="list-item"><span>Asset visibility.</span> See asset inventory, lifecycles, and compliance details. Get a
                        complete view of facilities and spaces. </li>
                    <li class="list-item"><span>Maintenance.</span> Automate preventive maintenance, view cost history, and schedule
                        repairs for all your assets.</li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                        <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_desktop_1.webp" type="image/webp">
                        <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura-tablet_1.webp" type="image/webp">
                        <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_mobile_1.webp" type="image/webp">
                        <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_desktop_1.png" type="image/png">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_mobile_1.webp" alt="Eptura">
                        </picture>
                    </div>`);
            }
        });

        function getInstantDemoCard() {
            document.querySelector('.hero-list-copy').insertAdjacentHTML('afterend', `
                    <div class="get-demo-spz">
                        <div class="gt-title">Get a customized demo</div>
                        <div class="form-group-spz" id="form-email-spz" method="post">
                            <div class="form-input">
                                <input type="email" name="company_email_spz" id="company_email_spz" placeholder="Company Email*" class="form-input-field" autocomplete="off" required>
                                <!-- <label for="company_email_spz" class="input-label">Company Email*</label> -->
                            </div>
                            <div class="form-button">
                                <button type="submit" class="btn-demo-spz">Get started</button>
                            </div>
                        </div>
                    </div>`);

            // On pressing enter key '#company_email_spz' field hit get started button
            document.querySelector('#company_email_spz').addEventListener('keyup', function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.querySelector('.btn-demo-spz').click();
                }
            });

            // Open modal on click of 'btn-demo-spz'
            openModal();
        }
    }

    //Hero image update
    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {

            //Footer logo updates for all URLs
            document.querySelector('#FooterLogo a img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg');

            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_twitter_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('alt', 'Twitter');

            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_facebook_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('alt', 'Facebook');

            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_linkedin_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('alt', 'Linkedin');


            //URL specific image updates
            pageData.forEach(function (url) {
                if (identifyPage == url.pageName) {
                    //Tabs feature section
                    document.querySelector('body > .body-wrapper > .d-flex.flex-column').insertAdjacentHTML('afterend', `<section class="spz-feature-section">
                        <div class="features-tabbed page_padding">
                            <div class="features-title">Features</div>
                                <div class="features-section">
                                `+ featureSecTabs(url.pageName) + featureSecContent(url.pageName) + `  
                                </div>
                           
                        </div>
                    </section>`);
                }
            });
        });
    }

    // Open modal on click of 'btn-demo-spz'
    function openModal() {
        // Open modal and add class 'modal-open' on body
        document.querySelector('.btn-demo-spz').addEventListener('click', function () {
            if (validateEmailField()) {
                // Add class to body for overflow hidden and backdrop
                document.querySelector('body.spz-3010').classList.add('modal-open');

                // Add class to modal for show modal
                document.querySelector('#spz-modal-form').classList.add('show-modal-spz');

                MktoForms2.whenReady(function (form) {
                    const email = document.querySelector('#Email');
                    // Set value of email field
                    form.setValues({ 'Email': document.querySelector('#company_email_spz').value });
                    // Add class 'input-filled' on email field
                    email.closest('.mktoFormCol').classList.add('input-filled');

                    // To show hidden fields on basis of email field value
                    simulateEvent();
                });

            }
        });
    }

    // Validate email field
    function validateEmailField() {
        // Get email value
        const email = document.querySelector('#company_email_spz');
        // Check if email is valid
        if (!validateEmail(email.value)) {
            email.closest('.form-input').classList.add('input-error');
            return false;
        } else {
            email.closest('.form-input').classList.remove('input-error');
            return true;
        }
    }

    // Email validation function
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
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

    // Simulate input event on input '#Email' field
    function simulateEvent() {
        let email = document.querySelector('#Email');
        let inputEvent = new Event('input');
        email.dispatchEvent(inputEvent);
    }

    //Convert img for safari
    function checkIfSafari(imgSrc) {
        if (document.body.classList.contains('safari') && imgSrc.indexOf('webp') > -1) {
            return imgSrc.replace(/webp/g, "png");
        }
        else {
            return imgSrc;
        }
    }

    //Creating feature content
    function featureSecTabs(page) {
        let thisPage = page;
        //search index by page name
        const searchIndex = pageData.findIndex(page => page.pageName === thisPage);
        let featureEl = '<ul class="nav nav-tabs" id="myTab" role="tablist">'
        pageData[searchIndex].features.forEach((element, index) => {
            const activeClass = index == 0 ? "active" : "";

            featureEl += `<li class="nav-item" role="presentation"><button class="nav-link ` + activeClass + `" id="${element.featureTitle}-tab" data-toggle="tab" data-target="#${element.featureTitle.replace(/\s+/g, '').replace('&', '')}" type="button" role="tab" aria-controls="${element.featureTitle}" aria-selected="true">${element.featureTitle}</button></li>`
        });
        featureEl += '</ul>';

        return featureEl;
    }

    function featureSecContent(page) {
        let thisPage = page;
        //search index by page name
        const searchIndex = pageData.findIndex(page => page.pageName === thisPage);
        let featureEl = '<div class="tab-content" id="myTabContent">'
        pageData[searchIndex].features.forEach((element, index) => {
            const activeClass = index == 0 ? "show active" : "";

            featureEl += `<div class="tab-pane fade ` + activeClass + `" id="${element.featureTitle.replace(/\s+/g, '').replace('&', '')}" role="tabpanel" aria-labelledby="${element.featureTitle}-tab"><div class="feature-wrapper"><div class="img-wrapper"><picture>
            <source srcset="${element.featureImg}.webp" type="image/webp">
            <source srcset="${element.featureImg}.png" type="image/png"> 
            <img src="${element.featureImg}.webp" alt="${pageData[searchIndex].pageShortName} ${element.featureTitle}">
            </picture></div><div class="content-wrapper"><div class="copy">
            <div class="heading">
                <div class="independent-title">${element.title}<span> ${element.subTitle}</span></div>
                <div class="indent-title">
                    <div>${element.subTitle}</div>
                </div>
            </div>
            <div class="bullets">
                <div class="bullet">
                    ${element.featuresList.list1}
                </div>
                <div class="bullet">
                    ${element.featuresList.list2}
                </div>
                <div class="bullet">
                    ${element.featuresList.list3}
                </div>
            </div>
            <div class="button-wrapper">
                <div class="button">
                    <a href="javascript:void(0);" class="get-started-cta">Get started</a>
                </div>
            </div>
        </div></div></div>
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