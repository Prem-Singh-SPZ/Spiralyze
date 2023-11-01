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
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605008/eptura/4001/Feature_Icons/Mobile_icon.png",
                    featureAltTag: "Employee service requests",
                    featureCopy: "Easily submit maintenance requests on broken equipment across your facilities from one portal.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605016/eptura/4001/Feature_Icons/work-orders-icon.png",
                    featureAltTag: "Work order management",
                    featureCopy: "Let managers approve, schedule, and close service requests. Communicate with technicians via mobile app. Send feedback.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_a_workspace_icon.png",
                    featureAltTag: "Technician portal",
                    featureCopy: "Let technicians view task details and log task completion. Automatic alerts for new work orders via the mobile app.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605007/eptura/4001/Feature_Icons/maintenance-icon.png",
                    featureAltTag: "Preventive maintenance",
                    featureCopy: "Automatically send work orders at set intervals or usage thresholds. See upcoming asset service and inspection dates.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1696478165/eptura/4001/Feature_Icons/Icon-Archibus-Automatic_prioritization.png",
                    featureAltTag: "Automatic prioritization",
                    featureCopy: "Automatically re-prioritize requests and move them to the top of the list based on urgency, location, or trade.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/asset-icon.png",
                    featureAltTag: "Asset details",
                    featureCopy: "Get a complete view of all your assets, their maintenance status, and open work orders in one place.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605015/eptura/4001/Feature_Icons/Vendor-icon.png",
                    featureAltTag: "Vendor assignment",
                    featureCopy: "Automatically assign tasks to third-party vendors. Track task completion and send links to invoice them for finished jobs.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605005/eptura/4001/Feature_Icons/inventory-icon.png",
                    featureAltTag: "Budgeting",
                    featureCopy: "Get analytics on asset costs and performance of operations. Create monthly budgets based on historical data.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_icon-1.png",
                    featureAltTag: "Inventory planner",
                    featureCopy: "See how many parts you have on hand and how many you need for upcoming work. Set limits for automatic restocks.",
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
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604999/eptura/4001/Feature_Icons/Calendar_icon.png",
                    featureAltTag: "Workplace scheduling",
                    featureCopy: "Schedule desks, meeting rooms, and parking. Auto-book rooms with the right equipment. Manage hybrid schedules.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605009/eptura/4001/Feature_Icons/Navigation-icon.png",
                    featureAltTag: "Navigation",
                    featureCopy: "Find the right room or locate the one you&#8217;ve booked upon arrival with digital floor plans. Easily see where co-workers are working.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605003/eptura/4001/Feature_Icons/Hand_icon.png",
                    featureAltTag: "Visitor management",
                    featureCopy: "Auto-send invites with the meeting details. Let visitors check in and submit documents electronically. View visitor logs.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/asset-icon.png",
                    featureAltTag: "Asset maintenance",
                    featureCopy: "Automatically send preventive maintenance orders at set intervals or usage thresholds. Or request maintenance as needed via an app.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1696478727/eptura/4001/Feature_Icons/Icon-Eptura_LP-Asset_visibility.png",
                    featureAltTag: "Asset visibility",
                    featureCopy: "View descriptions, availability, maintenance, status, and digital floor plans of all your assets. See any assets that are down.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1696478838/eptura/4001/Feature_Icons/Icon-Eptura_LP-Facility_management.png",
                    featureAltTag: "Facility management",
                    featureCopy: "Track and manage all your facilities, spaces, maintenance, vendors, and equipment faults in one place. Measure energy usage.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605014/eptura/4001/Feature_Icons/Space_planning-icon.png",
                    featureAltTag: "Space planning",
                    featureCopy: "Drag-and-drop floor plans to sort desks, rooms, and amenities. Plan moves. Track real estate. Identify occupancy patterns.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605005/eptura/4001/Feature_Icons/inventory-icon.png",
                    featureAltTag: "Budgeting",
                    featureCopy: "Get analytics on asset maintenance costs and performance of operations. Create monthly budgets based on historical data.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_icon.png",
                    featureAltTag: "Compliance",
                    featureCopy: "Automatically schedule inspections with checklists to submit the right documents. Maintain OSHA and CCOHS compliance.",
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
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/asset-icon.png",
                    featureAltTag: "Asset inventory",
                    featureCopy: "View specs, availability, status, and a digital floor plan of all your assets. See any assets that are down.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605008/eptura/4001/Feature_Icons/Mobile_icon.png",
                    featureAltTag: "Service requests",
                    featureCopy: "Instantly request maintenance via the mobile app. Easily provide technicians with schedules, locations, and task descriptions.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605007/eptura/4001/Feature_Icons/maintenance-icon.png",
                    featureAltTag: "Preventive maintenance",
                    featureCopy: "Automatically send work orders at set intervals or usage thresholds. See upcoming asset service and inspection dates.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605016/eptura/4001/Feature_Icons/work-orders-icon.png",
                    featureAltTag: "Work order management",
                    featureCopy: "Let managers approve, schedule, and close service requests. Communicate with technicians via mobile app. Send feedback.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_icon-1.png",
                    featureAltTag: "Handover reports",
                    featureCopy: "Complete inspection checklists from the app before returning equipment. Get reports on equipment service history.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605005/eptura/4001/Feature_Icons/inventory-icon.png",
                    featureAltTag: "Cost forecasting",
                    featureCopy: "Track year-to-date and lifetime expenses. View cost comparisons. Create monthly budgets based on historical data.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605002/eptura/4001/Feature_Icons/Cost-icon.png",
                    featureAltTag: "Lifecycle tracking",
                    featureCopy: "See asset cost history, repair schedules, and upcoming maintenance. Compare projected and actual performance.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1696479535/eptura/4001/Feature_Icons/Icon-Asset_Management-Tire_tracking.png",
                    featureAltTag: "Tire tracking",
                    featureCopy: "Track tire usage and lifespan. Automatically request replacements for damaged and worn tires.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_icon.png",
                    featureAltTag: "Compliance",
                    featureCopy: "Automatically schedule inspections with checklists to submit the right documents. Maintain OSHA and CCOHS compliance.",
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
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1696436523/eptura/4001/Feature_Icons/Group_bookings.png",
                    featureAltTag: "Group bookings",
                    featureCopy: "Book meeting and conference rooms with the right size and equipment for your group. Order refreshments in advance.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604998/eptura/4001/Feature_Icons/Book_a_workspace_icon.png",
                    featureAltTag: "Individual bookings",
                    featureCopy: "Schedule desks, parking spaces, and lockers for in-office work days directly from the mobile app. ",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694604999/eptura/4001/Feature_Icons/Calendar_icon.png",
                    featureAltTag: "Meeting scheduling",
                    featureCopy: "Schedule in-person, virtual, or hybrid meetings. Add Teams or Zoom calls with a single click. Set up repeat meetings.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605000/eptura/4001/Feature_Icons/collaboration-icon-1.png",
                    featureAltTag: "Hybrid collaboration",
                    featureCopy: "Set your in-office schedule and status, see where your team is working, and schedule time with co-workers.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1696436701/eptura/4001/Feature_Icons/Icon-Condeco-Rescheduling.png",
                    featureAltTag: "Rescheduling",
                    featureCopy: "Automatically book new rooms with the same size and equipment if meetings are rescheduled. Instantly notify all attendees. ",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605009/eptura/4001/Feature_Icons/Navigation-icon.png",
                    featureAltTag: "Navigation",
                    featureCopy: "Help employees and visitors find the right room upon arrival with digital floor plans. Show technicians the exact work order location.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605003/eptura/4001/Feature_Icons/Hand_icon.png",
                    featureAltTag: "Visitor management",
                    featureCopy: "Add guests to your booking. Auto-send invites with the meeting room location. Let visitors check in electronically.",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605014/eptura/4001/Feature_Icons/Space_planning-icon.png",
                    featureAltTag: "Space planning",
                    featureCopy: "Sort your office desks, tables, and rooms. Restrict meeting room capacity. Track equipment, deliveries, and visitors. ",
                },
                {
                    featureLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1694605002/eptura/4001/Feature_Icons/Cost-icon.png",
                    featureAltTag: "Usage reports",
                    featureCopy: "Keep track of how employees use the office and adjust space as room utilization, total occupancy, and expected visitors change.",
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
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        updateHeroImage();
        updatePageContent();
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
            if (e.key == 'e') {
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

                document.querySelector('#hero #HeroText').innerHTML = `<h6>WORKPLACE AND ASSET MANAGEMENT SOFTWARE</h6><h1>Automate operations with one platform for workplace and asset management.</h1>
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

    // Open modal on click of 'btn-demo-spz'
    function openModal() {
        // Open modal and add class 'modal-open' on body
        document.querySelector('.btn-demo-spz').addEventListener('click', function () {
            if (validateEmailField()) {
                // Add class to body for overflow hidden and backdrop
                document.querySelector('body.spz-3011').classList.add('modal-open');

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