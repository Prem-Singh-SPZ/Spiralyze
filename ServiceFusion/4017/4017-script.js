// var accorInterval;
var interStatus = true;
let is_swiper_loaded = 0;
var checkBody = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkBody);
        detect_browser();
        var OStype = detectOS();
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-sf-4009')) {
            bodyEle.classList.add('spz-sf-4009');
        }
        if (!bodyEle.classList.contains('spz-sf-4002')) {
            bodyEle.classList.add('spz-sf-4002');
        }
        if (!bodyEle.classList.contains('spz-sf-4004')) {
            bodyEle.classList.add('spz-sf-4004');
        }
        if (OStype == 'MacOS' || OStype == 'iOS') {
            bodyEle.classList.add('spz-ios-device');
        }
        var swiper_script = document.createElement('script');
        swiper_script.src = '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        swiper_script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(swiper_script);
        var swiper_link = document.createElement('link');
        swiper_link.rel = 'stylesheet';
        swiper_link.type = 'text/css';
        swiper_link.href = '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.getElementsByTagName('head')[0].appendChild(swiper_link);
        swiper_script.onload = function () {
            is_swiper_loaded = 1;
        };
        load4001();
        load4009();
        load4006();
    }
});
function load4001() {
    if (document.querySelectorAll('body .spz-sf-main').length == 0) {
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="spz-sf-main"></div>');
        header_fn(document.querySelector('.spz-sf-main'));
        hero_fn(document.querySelector('.spz-sf-main'));
        aboutUs_fn(document.querySelector('.spz-sf-main'));
        testimonial_fn(document.querySelector('.spz-sf-main'));
        productivity_fn(document.querySelector('.spz-sf-main'));
        faq_fn(document.querySelector('.spz-sf-main'));
        howitwork_fn(document.querySelector('.spz-sf-main'));
        management_fn(document.querySelector('.spz-sf-main'));
        // footer_fn(document.querySelector('.spz-sf-main'));
    }
}
function header_fn(injector) {
    let header_html = `
	<section class="spz-header">
		<div class="spz_main_header"></div>
	</section>`;
    if (injector.querySelectorAll('.spz-header').length == 0) {
        injector.insertAdjacentHTML('beforeend', header_html);
        var jQueryInterval = setInterval(function () {
            if (typeof jQuery != 'undefined') {
                clearInterval(jQueryInterval);
                jQuery("#wrapper #header").insertAfter(".spz_main_header");
                jQuery("#wrapper #header-top").insertAfter(".spz_main_header");
            }
        }, 500);
    }
}
function hero_fn(injector) {
    let hero_html = `
        <section class="spz-sf-hero">
            <div class="spz-sf-hero-wrap spz-default-wrap">
                <div class="spz-sf-top-wrap">
                    <div class="spz-sf-hero-content">
                        <div class="spz-af-hero-ratings">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1706873953/servicefusion/4001/rating-stars.svg" alt="Ratings">
                            <label><strong>4.5</strong> (2,369 reviews)</label>
                        </div>
                        <h2 class="spz-af-hero-title">Boost Productivity 40% with an All&#8209;in&#8209;One Field Service Management Software</h2>
                    </div>
                    <div class="spz-sf-hero-form">
                        <div class="spz-sf-hero-form-wrap">
                            <button type="button" class="spz-close-cta"></button>
                            <div class="spz-sf-hero-form-title">
                                <h2>Get a Demo</h2>
                            </div>
                            <div class="spz-sf-hero-services">
                                <div class="spz-sf-hero-services-wrap">
                                    <div class="spz-sf-hero-service-item">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1709814497/servicefusion/2011/schedule_dispatch-icon_1.svg" alt="Schedule & Dispatch">
                                        <label>Schedule &<br>Dispatch</label>
                                    </div>
                                    <div class="spz-sf-hero-service-item">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1709812933/servicefusion/2011/fleet-tracking__alerts-icon.svg" alt="Fleet Tracking & Alerts">
                                        <label>Fleet Tracking<br> & Alerts</label>
                                    </div>
                                    <div class="spz-sf-hero-service-item">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1709812943/servicefusion/2011/customer-management-icon.svg" alt="Customer Management">
                                        <label>Customer<br> Management</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    if (injector.querySelectorAll('.spz-sf-hero').length == 0) {
        injector.insertAdjacentHTML('beforeend', hero_html);
        let checkFormLoad = setInterval(function () {
            if (document.querySelectorAll('#mktoForm_1408').length > 0 && document.querySelectorAll('.spz-sf-hero .spz-sf-hero-form-wrap').length > 0) {
                clearInterval(checkFormLoad);
                document.querySelector('.spz-sf-hero .spz-sf-hero-form-wrap').insertAdjacentElement('beforeend', document.querySelector('#mktoForm_1408'));
                formModified();
            }
        });
    }
}
function formModified() {
    let checkMForm = setInterval(function () {
        if (document.querySelectorAll('.spz-sf-hero .spz-sf-hero-form-wrap #mktoForm_1408').length > 0 && document.querySelectorAll('.spz-sf-hero .spz-sf-hero-form-wrap #mktoForm_1408 input').length > 0) {
            clearInterval(checkMForm);
            let spz_form = document.querySelector('.spz-sf-hero .spz-sf-hero-form-wrap #mktoForm_1408');
            // Update Label
            spz_form.querySelector('#LblFirstName').textContent = 'First Name';
            spz_form.querySelector('#LblLastName').textContent = 'Last Name';
            spz_form.querySelector('#LblCompany').textContent = 'Company';
            spz_form.querySelector('#LblEmail').textContent = 'Email';
            spz_form.querySelector('#LblPhone').textContent = 'Phone';
            spz_form.querySelector('.mktoButtonRow button[type="submit"]').textContent = 'Submit';
            changeCTAText();
            // Re-order
            spz_form.querySelector('.mktoButtonRow').insertAdjacentElement('afterend', spz_form.querySelector('.mktoButtonRow').previousSibling);
            // Submit Validation
            spz_form.querySelector('.mktoButtonRow button[type="submit"]').addEventListener('click', function () {
                spz_form.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"])').forEach(function (input_elm, input_index, input_arr) {
                    if (input_elm.value.trim() == '') {
                        input_elm.closest('.mktoFieldWrap').classList.add('error');
                    }
                });
            });
            // Add parent Field
            spz_form.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"])').forEach(function (input_elm, input_index, input_arr) {
                let parent_attr = 'parent_' + input_elm.getAttribute('name');
                input_elm.closest('.mktoFormRow').setAttribute('data-parent', parent_attr);
                // Change company field position
                let updateFieldPos = setInterval(function () {
                    if (document.querySelectorAll('.mktoFormRow[data-parent="parent_Company"]').length > 0) {
                        clearInterval(updateFieldPos);
                        if (document.querySelectorAll('.mktoFormRow[data-parent="parent_Company"] + .mktoFormRow[data-parent="parent_Phone"]').length == 0) {
                            document.querySelector('.mktoFormRow[data-parent="parent_Phone"]').insertAdjacentElement('beforebegin', document.querySelector('.mktoFormRow[data-parent="parent_Company"]'));
                        }
                    }
                });
                // Focus
                input_elm.addEventListener('focus', function () {
                    let $this = this;
                    $this.closest('.mktoFieldWrap').classList.add('active');
                });
                // Blur
                input_elm.addEventListener('blur', function () {
                    let $this = this;
                    if ($this.value.trim() != '') {
                        $this.closest('.mktoFieldWrap').classList.add('filled');
                        $this.closest('.mktoFieldWrap').classList.remove('error');
                    } else {
                        $this.closest('.mktoFieldWrap').classList.remove('filled');
                        $this.closest('.mktoFieldWrap').classList.add('error');
                    }
                    $this.closest('.mktoFieldWrap').classList.remove('active');
                    $this.closest('.mktoFieldWrap').classList.remove('typing');
                    // Email Validation
                    if ($this.getAttribute('name') == 'Email' && $this.parentNode.querySelectorAll('.mktoError').length > 0 && $this.parentNode.querySelector('.mktoError').clientHeight > 0) {
                        $this.closest('.mktoFieldWrap').classList.add('error');
                    }
                    if ($this.getAttribute('name') == 'Email' && !validateEmail2($this.value)) {
                        $this.closest('.mktoFieldWrap').classList.add('error');
                    }
                    // Phone Validation
                    if ($this.getAttribute('name') == 'Phone' && !validatePhone($this.value)) {
                        $this.closest('.mktoFieldWrap').classList.add('error');
                    }
                });
                // Keypress
                input_elm.addEventListener('keyup', function () {
                    let $this = this;
                    if ($this.value.trim() != '') {
                        $this.closest('.mktoFieldWrap').classList.add('filled');
                        $this.closest('.mktoFieldWrap').classList.remove('error');
                    }
                    $this.closest('.mktoFieldWrap').classList.add('typing');
                    // Email Validation
                    if ($this.getAttribute('name') == 'Email' && $this.parentNode.querySelectorAll('.mktoError').length > 0 && $this.parentNode.querySelector('.mktoError').clientHeight > 0) {
                        $this.closest('.mktoFieldWrap').classList.add('error');
                    }
                    // Phone Validation
                    if ($this.getAttribute('name') == 'Phone' && !validatePhone($this.value)) {
                        $this.closest('.mktoFieldWrap').classList.add('error');
                    }
                    if (spz_form.querySelector('input[name="FirstName"]').value.trim() != '' && spz_form.querySelector('input[name="LastName"]').value.trim() != '' && spz_form.querySelector('input[name="Email"]').value.trim() != '') {
                        document.querySelector('body').classList.add('spz-sf-form-expand');
                    }
                });
            });
        }
    });
}

function aboutUs_fn(injector) {
    //add html for 8 cards, 4 with image only and 4 with number and test alternating
    let aboutUs_html = `
        <section class="spz-sf-about-us">
            <div class="spz-sf-about-us-wrap spz-default-wrap">
                <div class="spz-sf-about-us-cards">
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-num-card">
                            <h3>6,500+</h3>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-img-card">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4017/image-1_1.webp" alt="Customers">
                        </div>
                    </div>
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-num-card">
                            <h3>40%</h3>
                            <p>Increase in productivity</p>
                        </div>
                    </div>
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-img-card">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4017/image-2_1.webp" alt="Productivity">
                        </div>
                    </div>
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-img-card">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4017/image-3_1.webp" alt="Customers">
                        </div>
                    </div>
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-num-card">
                            <h3>5M+</h3>
                            <p>Jobs managed annually</p>
                        </div>
                    </div>
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-img-card">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4017/image-4_1.webp" alt="Productivity">
                        </div>
                    </div>
                    <div class="spz-sf-about-us-card">
                        <div class="spz-sf-about-us-card-wrap sf-num-card">
                            <h3>95.7%</h3>
                            <p>CSAT score</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    if (injector.querySelectorAll('.spz-sf-about-us').length == 0) {
        injector.insertAdjacentHTML('beforeend', aboutUs_html);
    }

}
function testimonial_fn(injector) {
    let testimonial_data = [
        { 'user_image': '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/author-scott-airtam.webp', 'description': '“We can quote the customer, get them exactly what they need, get the sale done, do the job and then take payment right there from them.”', 'user_name': 'Scott Airitam', 'user_position': 'Liberty Air & Heating' },
        { 'user_image': '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/author-darell-elliott.webp', 'description': '“I’m able to have a work-life balance that I didn’t have before. Now I know the work is scheduled, Now I know the work is going to get done.”', 'user_name': 'Darell Elliott', 'user_position': 'Elliott AC Heating & Handyman Services' },
        { 'user_image': '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/author-ryan-amerson.webp', 'description': '“Service Fusion coming into the middle of growth helped simplify and develop organization and procedures and automated processes that helped.”', 'user_name': 'Ryan Amerson', 'user_position': 'Energy Attic' },
        { 'user_image': '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/author-scott-airtam.webp', 'description': '“We can quote the customer, get them exactly what they need, get the sale done, do the job and then take payment right there from them.”', 'user_name': 'Scott Airitam', 'user_position': 'Liberty Air & Heating' },
        { 'user_image': '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/author-darell-elliott.webp', 'description': '“I’m able to have a work-life balance that I didn’t have before. Now I know the work is scheduled, Now I know the work is going to get done.”', 'user_name': 'Darell Elliott', 'user_position': 'Elliott AC Heating & Handyman Services' },
        { 'user_image': '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/author-ryan-amerson.webp', 'description': '“Service Fusion coming into the middle of growth helped simplify and develop organization and procedures and automated processes that helped.”', 'user_name': 'Ryan Amerson', 'user_position': 'Energy Attic' }
    ];
    let testimonial_loop = ``;
    for (var t_data in testimonial_data) {
        testimonial_loop += `
            <div class="swiper-slide">
                <div class="spz-sf-tetimonial-slider-item">
                    <div class="spz-sf-tetimonial-slider-item-wrap">
                        <div class="user">
                            <img src="${testimonial_data[t_data].user_image}" alt="${testimonial_data[t_data].user_name}">
                        </div>
                        <div class="user-rating">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1706873778/servicefusion/4001/desk-tab-rating-stars.svg" alt="Rating">
                        </div>
                        <div class="spz-sf-tetimonial-slider-content">
                            <p>${testimonial_data[t_data].description}</p>
                            <div class="user-info">
                                <h4>${testimonial_data[t_data].user_name}</h4>
                                <p>${testimonial_data[t_data].user_position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    let testimonial_html = `
        <section class="spz-sf-tetimonial">
            <div class="spz-sf-tetimonial-wrap spz-default-wrap">
                <div class="spz-sf-tetimonial-content">
                    <h2 class="spz-sf-tetimonial-title"><span class="before"></span><img src="//res.cloudinary.com/spiralyze/image/upload/v1706873777/servicefusion/4001/icon-quote-left.svg" alt="quote" class="quote-before">Service Fusion Reviews<img src="//res.cloudinary.com/spiralyze/image/upload/v1706873778/servicefusion/4001/icon-quote-right.svg" alt="quote" class="quote-after"><span class="after"></span></h2>
                    <p class="spz-sf-tetimonial-description">Find out why companies across more than 20 verticals choose us to help them win repeat business through our industry-leading software.</p>
                </div>
                <div class="spz-sf-tetimonial-slider-wrap">
                    <div class="spz-sf-tetimonial-slider swiper">
                        <div class="swiper-wrapper">${testimonial_loop}</div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>
    `;

    if (injector.querySelectorAll('.spz-sf-tetimonial').length == 0) {
        injector.insertAdjacentHTML('beforeend', testimonial_html);
        let checkSliderLoad = setInterval(function () {
            if (is_swiper_loaded == 1) {
                clearInterval(checkSliderLoad);
                const swiperInit = new Swiper('.spz-sf-tetimonial-slider', {
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: "auto",
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 100,
                        depth: 642,
                        modifier: 1,
                        slideShadows: false,
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                });
            }
        });
    }
}
function productivity_fn(injector) {
    let productivity_html = `
        <section class="spz-sf-productivity">
            <div class="spz-sf-productivity-wrap spz-default-wrap">
                <div class="spz-sf-productivity-content">
                    <p class="spz-sf-productivity-sub-title">See Service Fusion In Action</p>
                    <h2 class="spz-sf-productivity-title">Increase Productivity<br> by 40% with Service Fusion</h2>
                    <a href="" class="spz-sf-productivity-cta">Get Started</a>
                </div>
                <div class="spz-sf-productivity-img">
                    <img src="//cdn.vidyard.com/thumbnails/15214669/RnBA7-zLBJkCb6gLP-mjU7RNx22VCdWf.gif" alt="Single Click">
                </div>
            </div>
        </section>
    `;
    if (injector.querySelectorAll('.spz-sf-productivity').length == 0) {
        injector.insertAdjacentHTML('beforeend', productivity_html);
        document.querySelector('.spz-sf-productivity-cta').addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // document.querySelector('.spz-sf-hero-form').scrollIntoView({
            //     behavior: 'smooth'
            // });
        });
    }
}
function faq_fn(injector) {
    let faq_html = `
        <section class="spz-sf-faq">
            <div class="spz-sf-faq-main-wrap spz-default-wrap">
                <h2 class="spz-sf-faq-title">Field Service Management FAQ</h2>
                <div class="spz-sf-faq-wrap">
                    <ul>
                        <li class="spz-sf-faq-item">
                            <label class="spz-sf-faq-item-title">What Is Field Service Management Software?<span class="spz-toggle-icon"></span></label>
                            <div class="spz-sf-faq-item-content">
                                <div class="spz-sf-faq-item-content-wrap">
                                    <p><strong>Field service management software</strong> is a robust technology solution designed to streamline and optimize field operations for small and large field service industry businesses like HVAC, Plumbing, Electrical, Garage Door Repair, Appliance Repair, and more. It acts as a centralized platform for managing and coordinating field activities such as scheduling, dispatching, work order management, inventory management, estimate creation, invoice management, payment processing, and more. With its advanced features and intuitive interface field service management software, which is often sold as a SaaS offering, empowers businesses and field service contractors to improve operational efficiency, enhance customer satisfaction, and boost overall productivity.</p>
                                </div>
                            </div>
                        </li>
                        <li class="spz-sf-faq-item">
                            <label class="spz-sf-faq-item-title">What Are The Benefits Of Field Service Management Software?<span class="spz-toggle-icon"></span><span class="spz-toggle-icon"></span></label>
                            <div class="spz-sf-faq-item-content">
                                <div class="spz-sf-faq-item-content-wrap">
                                    <p><strong>Field service management software offers several benefits for small service provider businesses, including:</strong></p>
                                    <ul>
                                        <li>Simplified Processes: Field service management software streamlines operations, from dispatch to payment, improving efficiency and reducing manual errors.</li>
                                        <li>Enhanced Communication: With a single application, communication between the office and field technicians becomes seamless, allowing for quick updates and easy contact, particularly with the use of a mobile app.</li>
                                        <li>Improved Customer Experience: The software enables real-time updates, precise technician tracking, and better customer management, resulting in improved customer support and satisfaction.</li>
                                        <li>Paperless Efficiency: Cloud-based software reduces reliance on paper, providing a secure platform for electronic signatures, invoices, and payments, leading to streamlined and convenient processes.</li>
                                        <li>Automation of Billing: Field service management software automates billing processes, integrating with billing software such as QuickBooks, saving time and improving accuracy.</li>
                                        <li>Comprehensive Visibility: The software provides a comprehensive view of technician locations, capabilities, and availability, empowering the front office to make informed decisions and respond promptly to service calls.</li>
                                        <li>Increased Productivity: By eliminating manual tasks, the software frees up time for marketing efforts, business growth, and customer engagement, leading to improved productivity and reduced stress.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="spz-sf-faq-item">
                            <label class="spz-sf-faq-item-title">How Does Field Service Management Software Help With Dispatching?<span class="spz-toggle-icon"></span></label>
                            <div class="spz-sf-faq-item-content">
                                <div class="spz-sf-faq-item-content-wrap">
                                    <p><strong>Field service management software plays a crucial role in improving dispatching processes, resulting in efficient and effective service delivery. Here's how:</strong></p>
                                    <ul>
                                        <li>Tracking and Referral Sources: The right field service management solution allows businesses to track where their customers are coming from. By linking unique phone numbers to specific referral sources, businesses can identify the effectiveness of their marketing efforts and track leads and conversions.</li>
                                        <li>Incorporating Online Support: Field service software includes features like text-me-back widgets and live chat support, enabling businesses to provide exceptional customer service online. These tools allow customers to ask questions, receive prompt responses, and even convert website visitors into leads.</li>
                                        <li>Dashboard for Tracking Statistics: Field service management software offers customizable dashboards that provide a centralized location for tracking performance details. Businesses can monitor scheduling, training, marketing, and other key metrics to identify areas for improvement and make better decisions.</li>
                                        <li>Recording Communication for Quality Control: To maintain consistency and ensure quality service, field service management software allows businesses to record and store customer communication. This feature benefits customer service, back-office staff, and field service technicians by providing a reference for call details and enabling effective preparation for individual jobs.</li>
                                    </ul>
                                    <p>By leveraging these features, field service management apps streamline dispatching processes, improves customer service, and enhances overall operational efficiency.</p>
                                </div>
                            </div>
                        </li>
                        <li class="spz-sf-faq-item">
                            <label class="spz-sf-faq-item-title">What Is GPS Fleet Tracking And How Will It Help A Field Service Business?<span class="spz-toggle-icon"></span></label>
                            <div class="spz-sf-faq-item-content">
                                <div class="spz-sf-faq-item-content-wrap">
                                    <p><strong>GPS fleet tracking refers to the use of GPS (Global Positioning System) technology to monitor and track vehicles within a fleet. It provides real-time visibility into the location, movement, and status of fleet vehicles, offering numerous benefits for service providers. Here's an overview of why GPS fleet tracking software is valuable:</strong></p>
                                    <ul>
                                        <li>Enhanced Security: GPS tracking helps prevent theft and loss of valuable assets by providing an additional layer of protection. By tracking vehicles equipped with GPS devices, businesses can quickly locate and recover stolen assets, minimizing operational disruptions and financial losses.</li>
                                        <li>Improved Fleet Management: GPS fleet tracking systems offer comprehensive data insights, including idle time, driving behaviors, and compliance. This information allows businesses to optimize fleet operations, improve driver performance, and enhance overall efficiency.</li>
                                        <li>Real-Time Visibility: With GPS fleet tracking software, businesses gain real-time visibility into their mobile workforce. They can track the live location of vehicles, access historical data, and have peace of mind knowing the whereabouts of assets and drivers at all times. This visibility enables better resource allocation, efficient route planning, and timely customer service.</li>
                                        <li>Safety and Risk Reduction: GPS fleet tracking helps minimize accidents and risky driving behaviors by providing insights into driver activities. Businesses can identify instances of distracted driving, rapid acceleration, and speeding, allowing them to take corrective actions, ensure driver safety, and reduce fuel costs.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="spz-sf-faq-item">
                            <label class="spz-sf-faq-item-title">How Much Does Field Service Management Software Cost?<span class="spz-toggle-icon"></span></label>
                            <div class="spz-sf-faq-item-content">
                                <div class="spz-sf-faq-item-content-wrap">
                                    <p><strong>The pricing of field service management software</strong> varies largely depending on the size of fleet, number of technicians and the complexity of integrations needed to support other business operations. Often field service management solutions are offered on a feature-customizable basis and at a monthly subscription cost. Service Fusion offers three pricing plans to match the needs and size of your business. All plans come with zero setup Fees, no contract requirements, personalized onboarding, data importing, and unlimited training and support through email, phone, or live chat.</p>
                                </div>
                            </div>
                        </li>
                        <li class="spz-sf-faq-item">
                            <label class="spz-sf-faq-item-title">How Is Field Service Management Software Used By Different Types Of Service Businesses?<span class="spz-toggle-icon"></span></label>
                            <div class="spz-sf-faq-item-content">
                                <div class="spz-sf-faq-item-content-wrap">
                                <p>Service Fusion's Field Service Management Software solution is being leveraged by many service industries. Here are some examples of how FSM software can benefit different industries:</p>
                                    <ul>
                                        <li><a href="//www.servicefusion.com/hvac-software">HVAC Contractors:</a> HVAC contractors use field service software to schedule routine maintenance checks, take HVAC job photos, and manage parts inventory. With the software, they can efficiently dispatch technicians and prioritize jobs, ensuring that, for example, someone trained specifically in refrigeration or ductwork is sent to the most relevant job. The platform also creates estimates and jobs in seconds with pre-populated products, HVAC service line items, and more.</li>
                                        <li><a href="//www.servicefusion.com/plumbing-software">Plumbing Contractors:</a> Plumbing contractors utilize FSM software to track and manage different types of plumbing jobs, from leak repairs to full installations. The software helps in ensuring that technicians are dispatched with the right tools and parts, minimizing the chances of return visits. It also facilitates the photos of plumbing layouts and histories for job sites, streamlining future services.</li>
                                        <li><a href="//www.servicefusion.com/electrical-contractor-software">Electrical Contractors:</a> Electrical contractors harness the power of field service management software to manage a diverse array of projects, from small home rewiring jobs to large-scale electrical installations. It allows for creation of electrical estimates and jobs in seconds with pre-populated products, service line items, and more.It can also help coordinate multiple electricians, ensuring that complex tasks have adequate manpower with the right specializations.</li>
                                        <li><a href="//www.servicefusion.com/garage-door-software">Garage Door Repair Companies:</a> These companies use FSM software to manage the installation, maintenance, and repair of garage doors. It helps repair companies access real-time data and location tracking of the repair fleet. It also helps in scheduling regular safety checks and maintaining a log of previous repairs, ensuring longevity and safety for customers.</li>
                                        <li><a href="//www.servicefusion.com/appliance-repair-software">Appliance Repair Companies:</a> FSM software is crucial for appliance repair companies in scheduling service visits, particularly during warranty periods. The software helps appliance repair technicians see all jobs and estimates in one place and edit with drag and drop. Techs can send automated pre-job text notifications to customers. With FSMS, photos can be taken and saved before and after appliance repair work is completed.</li>
                                        <li><a href="//www.servicefusion.com/locksmith-software">Locksmith Companies:</a> Locksmith companies leverage field service software to respond quickly to emergency calls, such as lockouts, and to manage regular services like lock installations or maintenance. The software assists in tracking the locksmith fleet, to help with dispatching and efficiency. It can also help locksmiths maintain all the customer history you need to provide consistent service follow-ups and win repeat customers.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `;
    if (injector.querySelectorAll('.spz-sf-faq').length == 0) {
        injector.insertAdjacentHTML('beforeend', faq_html);
        let checkjq = setInterval(function () {
            if (typeof jQuery != 'undefined' && jQuery.fn) {
                clearInterval(checkjq);
                jQuery(document).on('click', '.spz-sf-faq-item .spz-sf-faq-item-title', function () {
                    let $this = jQuery(this).parent();
                    if ($this.hasClass('spz-faq-active')) {
                        $this.find('.spz-sf-faq-item-content').slideUp();
                        $this.removeClass('spz-faq-active');
                    } else {
                        jQuery('.spz-sf-faq-item.spz-faq-active').find('.spz-sf-faq-item-content').slideUp();
                        jQuery('.spz-sf-faq-item.spz-faq-active').removeClass('spz-faq-active');
                        $this.find('.spz-sf-faq-item-content').slideToggle();
                        $this.toggleClass('spz-faq-active');
                    }
                });
            }
        });
    }
}
function howitwork_fn(injector) {
    let howitwork_html = `
        <section class="spz-sf-how-it-work">
            <div class="spz-sf-how-it-work-wrap spz-default-wrap">
                <h2 class="spz-sf-how-it-work-title">How it Works?</h2>
                <div class="spz-sf-how-it-work-cols">
                    <div class="spz-sf-how-it-work-item">
                        <div class="spz-sf-how-it-work-item-wrap">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/hiw-create-assign-jobs.webp" alt="Create & Assign Jobs">
                            <div class="spz-sf-how-it-work-item-content-wrap">
                                <h3>1. Create & Assign Jobs</h3>
                                <p>Generate work orders in a single click. Drag and drop to schedule and assign to technicians.</p>
                            </div>
                        </div>
                    </div>
                    <div class="spz-sf-how-it-work-item">
                        <div class="spz-sf-how-it-work-item-wrap">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/hiw-dispatch-send-reminders.webp" alt="Dispatch & Send Reminders">
                            <div class="spz-sf-how-it-work-item-content-wrap">
                                <h3>2. Dispatch & Send Reminders</h3>
                                <p>Let techs view job details, navigate to sites, and capture payments in app. Send reminders to customers on the day of their work order.</p>
                            </div>
                        </div>
                    </div>
                    <div class="spz-sf-how-it-work-item">
                        <div class="spz-sf-how-it-work-item-wrap">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4001/hiw-trach-status.webp" alt="Track Status">
                            <div class="spz-sf-how-it-work-item-content-wrap">
                                <h3>3. Track Status</h3>
                                <p>View locations and status for all technicians. Communicate in app and send updates via push notifications. Streamline field service management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    if (injector.querySelectorAll('.spz-sf-how-it-work').length == 0) {
        injector.insertAdjacentHTML('beforeend', howitwork_html);
    }
}
function management_fn(injector) {
    management_html = `
        <section class="spz-sf-management">
            <div class="spz-sf-management-wrap spz-default-wrap">
                <div class="spz-sf-management-content">
                    <h2 class="spz-sf-management-title">We Serve Field Service Management<br>Businesses Like Yours</h2>
                    <p class="spz-sf-management-description">Operate from anywhere, win repeat customers,<br>and increase productivity by up to 40%.</p>
                    <a class="spz-sf-management-cta">Get Started</a>
                </div>
                <div class="spz-sf-management-numbers">
                    <div class="spz-sf-management-numbers-item number-1">
                        <div class="spz-sf-management-numbers-item-wrap">
                            <h2>5M+</h2>
                            <p>Jobs Created<br>Annually</p>
                        </div>
                    </div>
                    <div class="spz-sf-management-numbers-item number-2">
                        <div class="spz-sf-management-numbers-item-wrap">
                            <h2>6,500+</h2>
                            <p>Customers</p>
                        </div>
                    </div>
                    <div class="spz-sf-management-numbers-item number-3">
                        <div class="spz-sf-management-numbers-item-wrap">
                            <h2>95.7%</h2>
                            <p>CSAT Score</p>
                        </div>
                    </div>
                    <div class="spz-sf-management-numbers-item number-4">
                        <div class="spz-sf-management-numbers-item-wrap">
                            <h2>40%</h2>
                            <p>Productivity</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    if (injector.querySelectorAll('.spz-sf-management').length == 0) {
        injector.insertAdjacentHTML('beforeend', management_html);
        document.querySelector('.spz-sf-management-cta').addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // document.querySelector('.spz-sf-hero-form').scrollIntoView({
            //     behavior: 'smooth'
            // });
        });
    }
}
function changeCTAText() {
    var cta = document.querySelector('.spz-sf-hero .spz-sf-hero-form-wrap #mktoForm_1408 .mktoButtonRow button[type="submit"]')

    const observer = new MutationObserver(function (mutations) {
        if (cta.textContent.indexOf('Get Free Demo') > -1) {
            cta.textContent = 'Submit';
        }
    });
    observer.observe(cta, { attributes: true, childList: true, subtree: true, characterData: true });

}
// Variant 4006 Changes Start
function load4006() {
    let loopContents = loopData();
    let featureHtml = `
        <section class="spz-sf-features">
            <div class="spz-sf-features-wrap">
                <div class="spz-sf-features-title">
                    <h2>Features</h2>
                </div>                
                <div class="spz-sf-features-toggle">
                    <div class="spz-sf-features-toggle-wrap">
                        <ul>${loopContents[0]}</ul>
                    </div>
                </div>
                <div class="spz-sf-features-row">
                    ${loopContents[1]}
                </div>
            </div>
        </section>
    `;
    let checkappender = setInterval(function () {
        if (document.querySelectorAll('.spz-sf-about-us').length > 0) {
            clearInterval(checkappender);
            if (document.querySelectorAll('.spz-sf-features').length == 0) {
                document.querySelector('.spz-sf-about-us').insertAdjacentHTML('afterend', featureHtml);
                document.querySelectorAll('.spz-toggle-item-cta').forEach(function (btn) {
                    btn.addEventListener('click', function (e) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                });

                // document.querySelector('#stats-container #stats-inner').insertAdjacentHTML('beforebegin', '<h2 class="stats-title">How We Serve Field Service Management Businesses Like Yours</h2>')
                let checkJq = setInterval(function () {
                    if (typeof jQuery != 'undefined' && jQuery.fn) {
                        clearInterval(checkJq);

                        jQuery(document).on('click', '.spz-sf-features-toggle-item:not(.spz-sf-active) label', function (e) {
                            // clearInterval(accorInterval);
                            // accordianTimerFn();
                            let $this = jQuery(this);
                            let targetPic = $this.parent().attr('data-sf-hunter');
                            jQuery('.spz-sf-active .spz-sf-progressbar').css('width', '0px');
                            jQuery('.spz-sf-features-toggle-item.spz-sf-active').removeClass('spz-sf-active');
                            $this.parent().addClass('spz-sf-active');
                            jQuery('.spz-sf-features-row .spz-sf-features-item.spz-sf-active').removeClass('spz-sf-active');

                            jQuery('.spz-sf-features-row .spz-sf-features-item[data-sf-target="' + targetPic + '"]').addClass('spz-sf-active');
                            if (jQuery('.spz-sf-features-row .spz-sf-features-item:last-child').hasClass('spz-sf-active')) {
                                jQuery('.spz-sf-features-toggle').addClass('last-active');
                            } else {
                                jQuery('.spz-sf-features-toggle.last-active').removeClass('last-active');
                            }
                            var lt = 0;
                            lt = document.querySelector('.spz-sf-features-toggle-item.spz-sf-active').offsetLeft - 32;
                            if (window.innerWidth < 641) {
                                lt = document.querySelector('.spz-sf-features-toggle-item.spz-sf-active').offsetLeft - 15;
                            }
                            document.querySelector('.spz-sf-4004 .spz-sf-features .spz-sf-features-toggle ul').scrollTo({
                                top: 0,
                                left: lt,
                                behavior: "smooth",
                            });

                            setTimeout(() => {
                                var elementH = document.querySelector('.spz-sf-active');
                                if (window.innerWidth > 1099) {
                                    if (elementH.matches(':hover')) {
                                        if (interStatus) {
                                            interStatus = false;
                                            stopAccordionTimer()
                                        }
                                    }
                                }
                            })
                        });

                        jQuery(document).on('mouseenter', '.spz-sf-features-toggle-item', function (e) {
                            if (e.target.closest('.spz-sf-active')) {
                                interStatus = false;
                                stopAccordionTimer()

                            }
                        })
                        jQuery(document).on('mousemove', '.spz-sf-features-toggle-item', function (e) {
                            if (e.target.closest('.spz-sf-active')) {
                                if (interStatus) {
                                    interStatus = false;
                                    stopAccordionTimer()
                                }
                            }
                        })
                        jQuery(document).on('hover', '.spz-sf-features-toggle-item', function (e) {
                            if (e.target.closest('.spz-sf-active')) {
                                if (interStatus) {
                                    interStatus = false;
                                    stopAccordionTimer()
                                }

                            }
                        })
                        jQuery(document).on('mouseleave', '.spz-sf-features-toggle-item', function (e) {
                            if (e.target.closest('.spz-sf-active')) {
                                interStatus = true;
                                accordianTimerFn();
                            }
                        })
                        jQuery(document).ready(function () {
                            jQuery('body').addClass('spz-loaded-timer');
                            accordianTimerFn();
                        });
                    }
                });
            }

        }
    });
}
function accordianTimerFn() {
    let accordianTimer = 1;
    accorInterval = setInterval(function () {
        var liWidth = jQuery('.spz-sf-active').width();
        var liSteps = liWidth / 80
        var progWidth = jQuery('.spz-sf-active .spz-sf-progressbar').width();

        var progSetWidth;
        if (interStatus) {
            progSetWidth = progWidth + liSteps;
        } else {
            progSetWidth = progWidth;
        }

        jQuery('.spz-sf-active .spz-sf-progressbar').css('width', `${progSetWidth}px`)
        if (progSetWidth > (liWidth + liSteps)) {
            if (jQuery('.spz-sf-features-toggle-item.spz-sf-active').next().length > 0) {
                jQuery('.spz-sf-features-toggle-item.spz-sf-active').next().find('label').trigger('click');
                return;
            } else {
                jQuery('.spz-sf-features-toggle-item').eq(0).find('label').trigger('click');
                return;
            }
        }
        // if(accordianTimer % 90 == 0) {
        //     if(jQuery('.spz-sf-features-toggle-item.spz-sf-active').next().length > 0) {
        //         jQuery('.spz-sf-features-toggle-item.spz-sf-active').next().find('label').trigger('click');
        //         return;
        //     } else {
        //         jQuery('.spz-sf-features-toggle-item').eq(0).find('label').trigger('click');
        //     }
        // }
        // accordianTimer++;
    }, 100);
}
function stopAccordionTimer() {
    clearInterval(accorInterval)
}
function loopData() {
    let htmlContent = ``;
    let graphicContent = ``;
    let toggleContent = ``;
    let features_data = [
        {
            'label': 'Schedule & Dispatch',
            'title': 'Scheduling & Dispatching',
            'description': '<p>Automatically plan routes. Optimize for speed, fuel costs, vehicle capacity, driver schedules, traffic conditions, weather, customer preferences, and more.</p><p>Adjust routes in real time while drivers are<br class="visible-mobile"> in the field.</p>',
            'url': '//www.servicefusion.com/free-service-fusion-demo',
            'pictures': ['//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-scheduling_dispatching-desktop.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-scheduling_dispatching-tablet.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-scheduling_dispatching-mobile_1.webp']
        },
        {
            'label': 'Estimate Creation',
            'title': 'Estimate Creation',
            'description': '<p>Generate estimates that automatically populate with service rates, tax calculations, customer info, and more. Pre-built and custom templates.</p><p>Let technicians create estimates in the field via mobile app and instantly convert into active work orders.</p>',
            'url': '//www.servicefusion.com/free-service-fusion-demo',
            'pictures': ['//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-estimate_creation-desktop.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-estimate_creation-tablet.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-estimate_creation-mobile_1.webp']
        },
        {
            'label': 'Customer Management',
            'title': 'Customer Management',
            'description': '<p>Single source of truth for contact details, service history, estimates, contracts, communication, and customer notes. Access anywhere via mobile app.</p><p>Get reminders for appointments, emails & SMS, follow-ups, and more.</p>',
            'url': '//www.servicefusion.com/free-service-fusion-demo',
            'pictures': ['//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-customer_management-desktop_2.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-customer_management-tablet.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-customer_management-mobile_2.webp']
        },
        {
            'label': 'GPS Tracking',
            'title': 'GPS Tracking',
            'description': '<p>Track service vehicles in real time. Monitor location, distance driven, idle time, engine status, and fuel level.</p><p>Track driver behaviors, including sudden braking and rapid acceleration.</p>',
            'url': '//www.servicefusion.com/free-service-fusion-demo',
            'pictures': ['//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-gps_tracking-desktop.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-gps_tracking-tablet.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-gps_tracking-mobile_1.webp']
        },
        {
            'label': 'Invoicing & Payments',
            'title': 'Invoicing & Payments',
            'description': '<p>Auto-generate invoices from completed jobs. Automatically include materials used, labor costs, taxes, and discounts. Capture payments online or on site.</p><p>Track payments, due dates, unpaid invoices, and more from one dashboard. QuickBooks integration.</p>',
            'url': '//www.servicefusion.com/free-service-fusion-demo',
            'pictures': ['//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-invoicing_payments-desktop.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-invoicing_payments-tablet.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-invoicing_payments-mobile_1.webp']
        },
        {
            'label': 'Technician Mobile App',
            'title': 'Technician Mobile App',
            'description': '<p>Let drivers view schedules, access service requests, accept or reject jobs, view customer information, create & close work orders, generate invoices, accept payments, and more via mobile app.</p><p>Send updates via push notifications.</p>',
            'url': '//www.servicefusion.com/free-service-fusion-demo',
            'pictures': ['//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-technician_app-desktop_3.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-technician_app-tablet_2.webp', '//res.cloudinary.com/spiralyze/image/upload/f_auto/servicefusion/4004/features-technician_app-mobile_2.webp']
        },
    ];
    features_data.forEach(function (elm, index, arr) {
        var activeclass = (index == 0) ? 'spz-sf-active' : '';
        var imageStyle = (elm.title == 'Real-time Notifications' || elm.title == 'Technician Mobile App') ? 'style="border-color: transparent;"' : '';
        toggleContent += `
            <li class="spz-sf-features-toggle-item ${activeclass}" data-sf-hunter="${index + 1}">
                <div class="spz-sf-progressbar"></div>
                <label>${elm.label}</label>
            </li>
        `;
        htmlContent += `
            <div class="spz-sf-features-item ${activeclass}" data-sf-target="${index + 1}">                
                <div class="spz-sf-features-item-content">
                    <div class="spz-sf-features-item-content-wrap">
                        <h4>${elm.title}</h4>                        
                        ${elm.description}
                        <button type="button" class="spz-toggle-item-cta">Get Free Demo</button>
                    </div>
                </div>
                <div class="spz-sf-features-graphic">
                    <div class="spz-sf-features-graphic-inner">
                        <picture>
                            <source media="(min-width:1025px)" srcset="${elm.pictures[0]}">
                            <source media="(min-width:465px)" srcset="${elm.pictures[1]}">
                            <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
                        </picture>
                    </div>
                </div>                
            </div>
        `;
        graphicContent += `
            <picture >
                <source media="(min-width:1025px)" srcset="${elm.pictures[0]}">
                <source media="(min-width:465px)" srcset="${elm.pictures[1]}">
                <img src="${elm.pictures[2]}" alt="${elm.title}" ${imageStyle}>
            </picture>
        `;
    });
    return [toggleContent, htmlContent, graphicContent];
}
// Variant 4006 Changes End
// Variant 4009 Changes start
function load4009() {
    let stickyHtml = `
        <div class="spz-sticky-fform">
            <button type="button" class="spz-sticky-fform-close"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/servicefusion/4009/close-icon_1.svg" alt="Close Icon"></button>
            <div class="spz-sticky-fform-wrap">
                <div class="spz-sticky-review">
                    <div class="spz-sticky-review-wrap">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/servicefusion/4009/rating-stars.svg" alt="Review Stars">
                        <label><strong>4.5</strong> (2,369 reviews)</label>
                    </div>
                </div>
                <div class="spz-sticky-title">
                    <h2>Save time and increase productivity by 40%, while improving efficiency.</h2>
                </div>
                <div class="spz-sticky-fform-email-wrap">
                    <div class="spz-sticky-form">
                        <div class="spz-sticky-email">
                            <div class="spz-email-error-msg">
                                <div class="spz-email-error-msg-wrap">
                                    <label class="required">Must be valid email.</label>
                                    <svg class="spz-tri-icon" width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L0 0H16L8 4Z" fill="#FF0000"></path></svg>
                                </div>
                            </div>
                            <div class="spz-sticky-email-wrap">
                                <label class="spz-sticky-filed-label">Email Address</label>
                                <input type="email" name="spz-sticky-email" class="spz-sticky-email-field">
                                <button type="submit" class="spz-sticky-fform-submit">Get a Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    if (document.querySelectorAll('.spz-sticky-fform').length == 0) {
        document.querySelector('body').insertAdjacentHTML('beforeend', stickyHtml);
        let checkStickyEmail = setInterval(function () {
            if (document.querySelectorAll('.spz-sticky-email-field').length > 0) {
                clearInterval(checkStickyEmail);
                // Close Event
                document.querySelector('.spz-close-cta').addEventListener('click', function () {
                    document.querySelector('body').classList.remove('spz-sf-sticky-form-show');
                    document.querySelector('html').classList.remove('spz-sf-sticky-form-show');
                });
                document.querySelector('.spz-sticky-fform-close').addEventListener('click', function () {
                    document.querySelector('body').classList.remove('spz-sf-sticky-show');
                    document.querySelector('body').classList.add('spz-sf-sticky-closed');
                });
                var emailField = document.querySelector('.spz-sticky-email-field');
                // On form submit event
                document.querySelector('.spz-sticky-fform-submit').addEventListener('click', function (e) {
                    e.preventDefault();
                    if (emailField.value.trim() != '') {
                        if (document.querySelectorAll('.spz-sf-hero form.mktoForm').length > 0) {
                            document.querySelector('body').classList.add('spz-sf-sticky-form-show');
                            document.querySelector('html').classList.add('spz-sf-sticky-form-show');
                            document.querySelector('.spz-sf-hero form.mktoForm #Email').value = emailField.value;
                            document.querySelector('.spz-sf-hero form.mktoForm #Email').parentNode.classList.add('filled');
                            if (!validateEmail2(emailField.value)) {
                                document.querySelector('.spz-sf-hero form.mktoForm #Email').closest('.mktoFieldWrap').classList.add('error');
                            } else {
                                document.querySelector('.spz-sf-hero form.mktoForm #Email').parentNode.classList.remove('error');
                            }
                        }
                    } else {
                        document.querySelector('body').classList.add('spz-sf-sticky-form-show');
                        document.querySelector('html').classList.add('spz-sf-sticky-form-show');
                    }
                });
                // Focus
                emailField.addEventListener('focus', function () {
                    let $this = this;
                    $this.parentNode.classList.add('active');
                });
                // Blur
                emailField.addEventListener('blur', function () {
                    let $this = this;
                    if ($this.value.trim() != '') {
                        $this.parentNode.classList.add('filled');
                        // $this.parentNode.classList.remove('error');
                        $this.closest('.spz-sticky-email').classList.remove('error');
                    } else {
                        $this.parentNode.classList.remove('filled');
                        // $this.parentNode.classList.add('error');
                        // $this.closest('.spz-sticky-email').classList.add('error');
                    }
                    $this.parentNode.classList.remove('active');
                    $this.parentNode.classList.remove('typing');
                    // Email Validation
                    if (!validateEmail2($this.value)) {
                        // $this.parentNode.classList.add('error');
                        // $this.closest('.spz-sticky-email').classList.add('error');
                    }
                });
                // Keyup
                emailField.addEventListener('keyup', function () {
                    let $this = this;
                    if ($this.value.trim() != '') {
                        $this.parentNode.classList.add('filled');
                        // $this.parentNode.classList.remove('error');
                        $this.closest('.spz-sticky-email').classList.remove('error');
                    }
                    $this.parentNode.classList.add('typing');
                });
                // Keypress
                emailField.addEventListener('keypress', function (event) {
                    let $this = this;
                    if (event.keyCode == 13) {
                        $this.parentNode.querySelector('.spz-sticky-fform-submit').click();
                    }
                });
            }
        });
    }
}
document.addEventListener("touchmove", winScroll, false);
document.addEventListener("scroll", winScroll, false);
document.body.addEventListener("scroll", winScroll, false);
window.addEventListener("resize", winScroll, false);
function winScroll() {
    if (document.querySelectorAll('.spz-sf-hero').length > 0 && document.querySelectorAll('.spz-sticky-fform').length > 0) {
        var mainElementPosition = document.querySelector('.spz-sf-hero');
        var mainElementHeight = document.querySelector('.spz-sf-hero').clientHeight;
        var elementPosition = mainElementPosition.offsetTop;
        elementPosition = elementPosition + mainElementHeight;
        var windowScroll = window.scrollY;
        var bodyScroll = document.body.scrollTop;
        var checkScroll = (windowScroll > bodyScroll) ? windowScroll : bodyScroll;
        if (checkScroll > elementPosition) {
            if (document.querySelectorAll('.spz-sf-sticky-closed').length == 0) {
                document.body.classList.add('spz-sf-sticky-show');
            }
        }
        else {
            document.body.classList.remove('spz-sf-sticky-show');
        }
    }
}
// Variant 4009 Changes end
function validateEmail2(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
}
function validatePhone($ph) {
    var phoneReg = new RegExp(/^[0-9\b ()]+$/);
    return phoneReg.test($ph);
}
function detect_browser() {
    let browser_class = '';
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser_class = 'spz-opera';
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        browser_class = 'spz-edge';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser_class = 'spz-chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser_class = 'spz-safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser_class = 'spz-firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        browser_class = 'spz-ie';
    } else {
        browser_class = '';
    }
    document.querySelector('body').classList.add(browser_class);
}
function detectOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'MacOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    return os;
}