const timer = 5000;


const bodyInterval = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(bodyInterval)

        document.body.classList.add('spz-10001');

        // Set Hero Content
        setHeroContent();
    }
}, 10);

// Set the hero content
function setHeroContent() {
    document.body.insertAdjacentHTML('afterbegin', `<section class="hero-section">
        <div class="header-row">
            <div class="header-col">
                <a href="https://www.zywave.com/" target="_blank">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/8001/yi7brhljad4mwktwdvelxvlydk9pkamkfwni2dpr_1.svg"
                        alt="Zywave Logo" class="zywave-logo">
                </a>
            </div>
        </div>
        <div class="hero-row">
            <div class="hero-col">
                <div class="hero-copy">
                    <h1 class="hero-title">Streamline insurance quoting and proposals. <span>Grow volume XX%.</span></h1>
                    <div class="accordion-cta">
                        <div class="ac-cta">
                            <a href="https://www.zywave.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/frame_1171275641.svg" alt="Employee Benefits"> Employee Benefits</a>
                        </div>
                        <div class="ac-cta">
                            <a href="https://www.zywave.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/bold__building_infrastructure__buildings.svg" alt="Commercial Lines"> Commercial Lines</a>
                        </div>
                    </div>
                    <ul class="hero-list">
                        <li><span>Quotes.</span> Instantly generate professional, on-brand quotes and proposals. Send to leads and clients. Enable self-serve enrollment.</li>
                        <li><span>Carrier pricing.</span> Access immediate rates from 1,000+ carriers at once. Eliminate manual searches and data entry.</li>
                        <li><span>Questionnaires.</span> Consolidate carrier questionnaires into one client-friendly form. Automatically generate quotes across carriers.</li>
                    </ul>
                </div>
                <div class="hero-form">
                </div>
            </div>
            <div class="brand-logo">
                <picture>
                <source media="(min-width:1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003546.webp">
                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003342.webp">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003343.webp" alt="Brand Logo">
                </picture>
            </div>
        </div>
    </div>`);

    setTabsContent();
}

function setTabsContent() {
    document.querySelector('.hero-section').insertAdjacentHTML('afterend', `<div class="accordion-section">
            <div class="accordion-row">
            <div class="section-title">Features</div>
                <div class="accordion-col">
                    <nav id="tabs">
                        <li class="active"><a href="#tab1">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/frame_1171275642.svg" alt="Employee Benefits" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/frame_1171275643.svg" alt="Employee Benefits" class="i-hover">
                            Employee Benefits</a>
                        </li>
                        <li><a href="#tab2">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/bold__building_infrastructure__buildings_1.svg" alt="Commercial Lines" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/bold__building_infrastructure__buildings_2.svg" alt="Commercial Lines" class="i-hover">
                            Commercial Lines</a></li>
                    </nav>
                    
                    <div id="tab-contents">
                        <div id="tab1" class="tab-contents active">
                            <div class="accordion-wrapper">
                                <div class="text">
                                <div class="child active" data-index="1">
                                    <div class="bar"><div class="line"></div></div>
                                    <div class="title">
                                    <div class="text">Insights Foundation</div>
                                    </div>
                                    <div class="content">
                                    <div class="text">Comprehensive insights start with Komodo&#8217;s industry-leading Healthcare Map<sup>TM</sup>, providing an average 7+ years of the patient journey for more than 330  million unique individuals in the U.S</div>
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
                                <div class="child" data-index="2">
                                    <div class="bar"><div class="line"></div></div>
                                    <div class="title">
                                    <div class="text">Specialty Data Enhancements</div>
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
                                <img class="reference" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003463.webp" alt="Insights Foundation" width="851" height="503"/>
                                <img class="hero active" data-index="1" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003463.webp" alt="Insights Foundation" width="851" height="503"/>
                                <img class="hero" data-index="2" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp" alt="Specialty Data Enhancements" width="851" height="503"/>
                                <img class="hero" data-index="3" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/streamlined_software_solutions_1440.webp" alt="Streamlined Software Solutions" width="851" height="503"/>
                                </div>
                            </div>
                        </div>
                        <div id="tab2" class="tab-contents">
                            <p>These are the contents of tab 2.</p>
                        </div>
                    </div>
                </div>
            </div>`);

    // Define variables
    var tabLabels = document.querySelectorAll("#tabs li");
    var tabPanes = document.getElementsByClassName("tab-contents");

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

    // Accordion functionality
    document.querySelectorAll('.child .title').forEach((title, index) => {
        title.addEventListener('click', function () {
            const parent = title.parentElement;
            const siblings = Array.from(parent.parentElement.children).filter(child => child !== parent);
            const heroImages = document.querySelectorAll('.image .hero');

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

    const tabs = document.querySelectorAll('.accordion-wrapper .child');
    let i = 0;
    const autoAccordionInterval = setInterval(function () {
        document.querySelector('.accordion-wrapper .child.active .bar .line').removeAttribute("style")
        document.querySelector('.accordion-wrapper .child.active .bar .line').style.width = "" + ((i / timer) * 100) + "%";
        if (i > timer) {
            document.querySelector('.accordion-wrapper .child.active .bar .line').removeAttribute("style")
            let curIndex = parseInt(document.querySelector('.accordion-wrapper .child.active').getAttribute("data-index"));
            if (curIndex != tabs.length) {
                curIndex = curIndex + 1
            } else {
                curIndex = 1;
            }
            document.querySelector('.accordion-wrapper .child[data-index="' + curIndex + '"] .title').click();
            i = 0;
        }
        i += 200;
    }, 200)
    document.querySelector('.accordion-wrapper .image').addEventListener("mouseenter", function () {
        clearInterval(autoAccordionInterval);
        document.querySelector('.accordion-wrapper .child.active .bar .line').removeAttribute("style")
        if (!document.querySelector('.accordion-wrapper.stop')) {
            document.querySelector('.accordion-wrapper').classList.add("stop")
        }
    })
    document.querySelector('.accordion-wrapper > .text').addEventListener("mouseenter", function () {
        clearInterval(autoAccordionInterval);
        document.querySelector('.accordion-wrapper .child.active .bar .line').removeAttribute("style")
        if (!document.querySelector('.accordion-wrapper.stop')) {
            document.querySelector('.accordion-wrapper').classList.add("stop")
        }
    })
}


//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField[id]').then(function () {
    formModify();
});

function formModify() {
    //form title update
    document.querySelector('body form.mktoForm').closest('div[style]:not([class])').classList.add('spz-form-container');
    document.querySelector('.spz-form-container').removeAttribute('style');

    waitForElm('body .hero-form').then(function () {
        document.querySelector('.hero-form').insertAdjacentElement('beforeend', document.querySelector('.spz-form-container'));
    });

    if (document.querySelectorAll('.spz-form-container .form_title').length == 0) {
        document.querySelector('.spz-form-container .formSpan').insertAdjacentHTML('beforebegin', `<div class="form_title">Get a demo</div>`);
    }

    //form Cta update
    var textChng = document.querySelector('form.mktoForm .mktoButtonRow button.mktoButton');

    document.querySelector('form.mktoForm #LblFirstName').textContent = 'First Name';
    document.querySelector('form.mktoForm #LblLastName').textContent = 'Last Name';
    document.querySelector('form.mktoForm #LblEmail').textContent = 'Email';
    document.querySelector('form.mktoForm #LblPhone').textContent = 'Phone';

    waitForElm('form.mktoForm #LblCompany').then(function () {
        document.querySelector('form.mktoForm #LblCompany').textContent = 'Company';
        document.querySelector('form.mktoForm #LblCompany').closest('.mktoFormRow').classList.add('spz-row');
    });

    textChng.textContent = 'Submit';

    document.querySelectorAll('form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:not([type="hidden"])').forEach(function (input) {
        setTimeout(() => {
            if (input.closest('.mktoFieldWrap').querySelector('.mktoGutter.mktoHasWidth')) {
                input.closest('.mktoFieldWrap').querySelector('.mktoGutter.mktoHasWidth').remove();
            }

            input.closest('.mktoFormRow').classList.add('spz-row');
        }, 100);
    });

    var countryOptions = document.querySelectorAll('.mktoFieldWrap select');
    countryOptions.forEach(function (select) {
        if (select.querySelector('option[value=""]')) {
            select.querySelector('option[value=""]').setAttribute('disabled', 'disabled');
            select.querySelector('option[value=""]').setAttribute('style', 'color: #ccc');
            select.querySelector('option[value=""]').textContent = '';
        }
    });

    // form state
    var selector = '.spz-10001 .spz-form-container form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-10001 .spz-form-container form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
                }
                if (event.type == "change" && event.target.tagName == 'SELECT') {
                    if (event.target.value == "") {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        if (event.target.parentNode.querySelector('.mktoError').length > 0) {
                            event.target.parentNode.querySelector('.mktoError').style.display = 'none';
                        }
                    }
                } else {
                    if (event.target.classList.contains('mktoInvalid')) {
                        var closestError = event.target.parentNode.querySelector('.mktoError');
                        if (closestError && closestError.style.display == '') {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                        } else {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        }
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                    }
                }
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);

};

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