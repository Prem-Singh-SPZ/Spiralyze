// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/3015/css/style.css';
// document.getElementsByTagName('head')[0].appendChild(link);

var content = document.createElement('script')
content.src = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/3007/products.js';
document.head.appendChild(content)
let coverRepairSection;
content.onload = function () {
    setInterval(function () {
        document.querySelectorAll('.collapse[data-parent="#faq-accordion"]').forEach(item => {
            if (item.classList.contains('show')) {
                item.parentElement.classList.add('toggle-bg')
            } else {
                item.parentElement.classList.remove('toggle-bg')
            }
        })
    })
    const intr = setInterval(function () {
        if (document.querySelector('button[angularticscategory="Header-Login"]')) {
            if (/https:\/\/www.awrusa.com\/([a-zA-Z]*\/)?product\/\d\d\d\d\d\/[a-zA-Z][a-zA-Z]\d\d\d\/residential\/(.*)?/.test(window.location.href)) {
                if (!document.body.classList.contains('spz-3021')) {
                    document.body.classList.add('spz-3021')
                }
               
                const tabLinks = document.querySelectorAll('button.tablinks');
                if (tabLinks && tabLinks[0] && tabLinks[0].innerText == 'What\'s Covered' || tabLinks && tabLinks[0] && tabLinks[0].innerText == 'Covered Repairs') {
                    tabLinks[0].parentNode.remove();
                }
                // const secTitle = document.querySelector('.covered-repair-section .section-head-title.font-unbounce-title');
                // if (secTitle && secTitle.innerText !== 'What\'s Covered') {
                //     secTitle.innerText = 'What\'s Covered'
                // }
                // const faqTitle = document.querySelector('#tab-faq-section .section-head-title');
                // if (faqTitle && faqTitle.innerText !== 'Frequently Asked Questions') {
                //     faqTitle.innerText = 'Frequently Asked Questions'
                // }
                // if (document.querySelector('.enroll-now-btn') && document.querySelector('.enroll-now-btn').innerText !== 'Get Started') {
                //     document.querySelector('.enroll-now-btn').innerText = 'Get Started'
                //     document.querySelector('.enroll-now-btn').setAttribute('title', 'Get Started')
                // }

                if (document.querySelectorAll('.product-detail-body #tabs .tab-div').length === 3) {
                    // document.querySelectorAll('.product-detail-body #tabs .tab-div')[0].remove()
                    // document.querySelector('#tab-benefit-section').remove()
                    document.querySelectorAll('.product-detail-body #tabs .tab-div')[0].classList.add('active')
                    if (document.querySelectorAll('.spz-awr-3021-additional-tab').length == 0) {
                        document.querySelector('#tabs').insertAdjacentHTML('beforeend', '<div class="tab-div spz-awr-3021-additional-tab active"><button class="tablinks spz-why-awr-cta">Why Choose AWR</button></div>');
                        document.querySelector('#tabs').classList.add('spz-no-active-tabs');
                    }
                    // document.querySelector('#tabs').insertBefore(document.querySelectorAll('.product-detail-body #tabs .tab-div')[1], document.querySelectorAll('.product-detail-body #tabs .tab-div')[3])
                    // document.querySelector('#scroll-spy-id').insertBefore(document.querySelector('#tab-faq-section'), document.querySelector('#tab-neighbourhood-service-id'))
                    document.querySelector('#tab-review-section').insertAdjacentHTML('afterbegin', '<div class="spz-awr-3021-why"><div class="spz-awr-3021-why-wrapper-main"><h2 class="spz-awr-3021-why-title">Why Choose AWR</h2><div class="spz-awr-3021-why-wrapper">' + genWhyAwr() + '</div></div></div>');
                }
                jQuery('.testimonial-blockquote').appendTo('.testimonial-div-container');

                // document.querySelectorAll('.card .card-body .enroll-now').forEach(item => {
                //     if (item.innerText !== 'Get Started') {
                //         item.innerText = 'Get Started'
                //         item.setAttribute('title', 'Get Started')
                //     }
                // })
                if (document.querySelector('.rating-btn')) {
                    document.querySelector('.rating-btn').parentElement.parentElement.classList.add('reviews-wrapper-spz');
                }
                // if (document.querySelector('.detail-header-section .enroll-btn') && document.querySelector('.detail-header-section .enroll-btn').innerText !== 'Get Started') {
                //     document.querySelector('.detail-header-section .enroll-btn').innerText = 'Get Started'
                //     document.querySelector('.detail-header-section .enroll-btn').setAttribute('title', 'Get Started')
                // }
                // if (document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob') && document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob').innerText !== 'Get Started') {
                //     document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob').innerText = 'Get Started'
                //     document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob').setAttribute('title', 'Get Started')
                // }
      
                // Add Why section
                let checkjQ = setInterval(function () {
                    if (jQuery.fn) {
                        clearInterval(checkjQ);
                        jQuery('.spz-why-awr-cta').unbind('click').click(function () {
                            let $this = jQuery(this);
                            jQuery('#tabs .active').removeClass('active');
                            $this.parent().addClass('active');
                            $this.parent().parent().addClass('spz-no-active-tabs');
                            jQuery('html, body').animate({ scrollTop: (jQuery(".spz-awr-3021-why").offset().top - 200) }, 1000);
                        });
                        jQuery('#tabs .tablinks:not(.spz-why-awr-cta)').unbind('click').click(function () {
                            let $this = jQuery(this);
                            jQuery('.tab-review-slider').slick('setPosition');
                            jQuery('#tabs').removeClass('spz-no-active-tabs');
                            setTimeout(function () { $this.parent().addClass('active'); }, 1000);
                        });

                        jQuery(window).scroll(function () {
                            jQuery('.testimonial-blockquote').appendTo('.testimonial-div-container');
                            let windowScroll = jQuery(window).scrollTop();
                            let sectionScroll = (jQuery('#tab-review-section').position().top - 200);
                            let whySection = jQuery('.spz-awr-3021-why').position().top;
                            let whySectionHeight = jQuery('.spz-awr-3021-why').outerHeight();
                            let totalWhyScroll = (whySection + whySectionHeight) - 200;
                            if (windowScroll > sectionScroll) {
                                jQuery('.spz-why-awr-cta').parent().parent().removeClass('spz-no-active-tabs');
                                jQuery('.spz-why-awr-cta').parent().removeClass('active');
                            }
                            if (windowScroll < totalWhyScroll) {
                                jQuery('.spz-why-awr-cta').parent().parent().addClass('spz-no-active-tabs');
                                jQuery('.spz-why-awr-cta').parent().addClass('active');
                            }
                        });
                    }
                }, 500);
            }
        }
        else {
            document.querySelector('body').classList.remove('spz-3021');
        }
    }, 100);
    function cloneElement(source, target) {
        if (document.querySelector(source) && document.querySelector(target)) {
            const sc = document.querySelector(source);
            const clone = sc.cloneNode(true);
            document.querySelector(target).appendChild(clone);
        }
    }
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("body").addClass("mac");
    } else {
        $("body").addClass("pc");
    }
    var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_chrome = !!window.chrome && !is_opera && !is_Edge;
    var is_explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
    var is_firefox = typeof window.InstallTrigger !== 'undefined';
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_chrome) {
        $('body').addClass('chrome');
    } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        $('body').addClass('safari');
    } else if (is_firefox) {
        $('body').addClass('firefox');
    }
}
function genWhyAwr() {
    let itemData = [{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669639360/AWR/3021%20%7C%20AWR%20%7C%20PDP%20%7C%20Add%20Why%20Choose%20Section/affordable-coverage.svg', alt: 'Affordable Coverage', title: 'Affordable Coverage', description: 'Protection plans start at $3.99 per month and can save you thousands in unexpected repairs.' }, { img: '//res.cloudinary.com/spiralyze/image/upload/v1669639360/AWR/3021%20%7C%20AWR%20%7C%20PDP%20%7C%20Add%20Why%20Choose%20Section/one-year-warranty.svg', alt: 'One-Year Warranty', title: 'One-Year Warranty', description: 'One-year warranties for all repairs. So you have peace of mind.' }, { img: '//res.cloudinary.com/spiralyze/image/upload/v1669639360/AWR/3021%20%7C%20AWR%20%7C%20PDP%20%7C%20Add%20Why%20Choose%20Section/dedicated-support.svg', alt: 'Dedicated Support', title: 'Dedicated Support', description: 'Available 24/7. Claims are processed in less than 24 hours.' }, { img: '//res.cloudinary.com/spiralyze/image/upload/v1669639360/AWR/3021%20%7C%20AWR%20%7C%20PDP%20%7C%20Add%20Why%20Choose%20Section/trusted-partners.svg', alt: 'Trusted Partners', title: 'Trusted Partners', description: 'Serving over 2 million customers. 95% satisfaction rate. The official partner for 11 major utilities.' }, { img: '//res.cloudinary.com/spiralyze/image/upload/v1669639360/AWR/3021%20%7C%20AWR%20%7C%20PDP%20%7C%20Add%20Why%20Choose%20Section/fast-repairs.svg', alt: 'Fast Repairs', title: 'Fast Repairs', description: 'Contractors dispatched in 24 hours. We\'ll handle the permits, repairs, and inspections.' }, { img: '//res.cloudinary.com/spiralyze/image/upload/v1669639360/AWR/3021%20%7C%20AWR%20%7C%20PDP%20%7C%20Add%20Why%20Choose%20Section/licensed-contractors.svg', alt: 'Licensed Contractors', title: 'Licensed Contractors', description: 'All repairs are done by local licensed contractors. Vetted by AWR.' }];
    let htmlD = '';
    for (let i = 0; i < itemData.length; i++) {
        htmlD += '\
			<div class="spz-awr-3021-why-item">\
				<div class="spz-awr-3021-why-item-wrapper">\
					<img src="'+ itemData[i].img + '" alt="' + itemData[i].alt + '">\
					<div class="spz-awr-3021-why-item-info">\
						<h2 class="spz-awr-3021-why-item-info-title">'+ itemData[i].title + '</h2>\
						<p>'+ itemData[i].description + '</p>\
					</div>\
				</div>\
			</div>\
			<hr class="spz-awr-3021-why-item-seperator">\
		';
    }
    return htmlD;
}