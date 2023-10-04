(function () {
    document.body.classList.add('spz-3011');
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
                    featureCopy: "Let employees book desks, check in and out, answer health/security questionnaires, and more.",
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
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Calendar_icon.png",
                    featureAltTag: "Meeting scheduling",
                    featureCopy: "Schedule in-person, virtual, or hybrid meetings. Add Teams or Zoom calls with a single click. Set up repeat meetings.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Book_a_workspace_icon.png",
                    featureAltTag: "Individual bookings",
                    featureCopy: "Schedule desks, parking spaces, and lockers for in-office work days directly from the mobile app. ",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Group_bookings.png",
                    featureAltTag: "Group bookings",
                    featureCopy: "Book meeting and conference rooms with the right size and equipment for your group. Order refreshments in advance.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/collaboration-icon.png",
                    featureAltTag: "Hybrid collaboration",
                    featureCopy: "Set your in-office schedule and status, see a weekly overview of where your team is working, and schedule time with co-workers.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Icon-Condeco-Rescheduling.png",
                    featureAltTag: "Rescheduling",
                    featureCopy: "Automatically book new rooms with the same size and equipment if meetings are rescheduled. Instantly notify all attendees. ",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Hand_icon.png",
                    featureAltTag: "Visitor management",
                    featureCopy: "Add guests to your booking. Auto-send invites with the meeting room location. Let visitors check in electronically.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Space_planning-icon-1.png",
                    featureAltTag: "Space planning",
                    featureCopy: "Sort your office desks, tables, and rooms. Restrict meeting room capacity. Track equipment, deliveries, and visitors. ",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Cost-icon.png",
                    featureAltTag: "Usage reports",
                    featureCopy: "Keep track of how employees use the office. Adjust space as room utilization, total occupancy, and expected visitors change.",
                },
                {
                    featureLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Mobile_icon.png",
                    featureAltTag: "Integrations",
                    featureCopy: "Integrate with Microsoft 365, Outlook, Okta,  Teams, Zoom, Azure, Proxyclick, and more. Plus, custom APIs.",
                }
            ],
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
        document.body.classList.add('spz-3011');
        clearFormFields();
        loadTest();
    });

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

            if (e.target.classList.contains("get-started-cta")) {
                scrollToElement('#HeroFormPanel', 50);
                this.document.querySelector('#HeroFormPanel').classList.add('angry-shake');
                setTimeout(() => {
                    this.document.querySelector('#HeroFormPanel').classList.remove('angry-shake');
                }, 1500);
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
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
        // document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;


        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Fill in your details and <span>let&#8217;s get started <span></h6>';
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
                    //Update logo for pages
                    let updatedLogo = checkIfSafari(url.pageLogo);
                    document.querySelector('#NavLogo a').insertAdjacentHTML('afterbegin', `<img src="` + updatedLogo + `" alt="` + url.logoAlt + `" class="logo-img">`);

                    //Update hero images
                    let updatedHeroImg = checkIfSafari(url.heroImg);
                    if (document.querySelector('#HeroText img')) {
                        document.querySelector('#HeroText img').setAttribute('src', updatedHeroImg);
                        document.querySelector('#HeroText img').setAttribute('alt', url.heroImgAlt);
                    }
                    else {
                        document.querySelector('#HeroText').insertAdjacentHTML('beforeend', `<h1 class="pt-4"><img src="` + updatedHeroImg + `" alt="` + url.heroImgAlt + `"></h1>`);
                    }

                    document.querySelector('#HeroText').insertAdjacentHTML('afterend', `<div class="hero-img-tab"><img src="` + updatedHeroImg + `" alt="` + url.heroImgAlt + `"></div>`);

                    //Tabs feature section
                    document.querySelector('body > .body-wrapper > .d-flex.flex-column').insertAdjacentHTML('afterend', `<div class="spz-features-section">
                    <div class="features-3-col-icon">
                        <div class="features-title">Features</div>
                        <div class="feature3-itemsillustration-parent">`+ featureSec(url.pageName) + `
                        </div>
                        <div class="spz-review-summary"><div class="capterra-review-summary"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_capterra_sign.svg" alt="Capterra" class="capterra-logo"><div class="g2-review"><span>4.4</span> (973 reviews)</div></div><div class="g2-review-summary"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_g2_logo.svg" alt="G2 Logo" class="capterra-logo"><div class="g2-review"><span>4.3</span> (745 reviews)</div></div></div>
                        <div class="button-wrapper">
                            <div class="button">
                                <a href="javascript:void(0);" class="get-started-cta">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>`);
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