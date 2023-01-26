var url = location.href;
urlCheck(url);
var lotteLoad = 0;
var lotteConfigLoad = 0;
var lotteMobileConfigLoad = 0;
var isSlickLoad = 0;
var isMenuOpen = 0;

history.pushState = (function(f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);

history.replaceState = (function(f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);

window.addEventListener("popstate", function() {
    window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", function() {
    url = location.href;
    urlCheck(url);
});

function urlCheck(url) {
    var allblogsurlstring = "https://www.awrusa.com";
    if (window.location.pathname.indexOf("https://www.awrusa.com") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, false)) {
        initTest();
    } else {
        removeTest();
    }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
        currentUrl.slice(0, currentUrl.indexOf("?")) :
        currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}
function removeTest()
{
	document.body.classList.remove('spz-awr-1018');
	if(document.querySelectorAll('.spz-awr-1018-main').length > 0)
	{
		document.querySelector('.spz-awr-1018-main').remove();
	}
	if(document.querySelectorAll('.spz-menu-active').length > 0)
	{
		document.querySelector('.spz-menu-active').classList.remove('spz-menu-active');
	}
	if(isMenuOpen == 1)
	{
		jQuery('#backdrop-sidemenu').trigger('click');
		isMenuOpen = 0;
	}
}
function initTest()
{
	var bodyEle = document.querySelector('body');
	if (!bodyEle.classList.contains('spz-awr-1018'))
	{
	    bodyEle.classList.add('spz-awr-1018');
	
	    // PG Cookies Add
	    var cookieName = '1018_awr_home_redesign_v3';
	    var cookieValue = '1';
	    var myDate = new Date();
	    myDate.setDate(myDate.getDate() + 30);
	    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
	}
	
	isMenuOpen = 1;
	
	// Add Lotte JS
	var lotteScript = document.createElement('script');
	lotteScript.src = '//res.cloudinary.com/spiralyze/raw/upload/v1669792264/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/animation-scripts/lottie.min.js';
	lotteScript.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(lotteScript);
	
	var lotteConfigScript = document.createElement('script');
	lotteConfigScript.src = '//res.cloudinary.com/spiralyze/raw/upload/v1669790991/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/animation-scripts/lotte-config.js';
	lotteConfigScript.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(lotteConfigScript);
	
	var lotteMobileConfigScript = document.createElement('script');
	lotteMobileConfigScript.src = '//res.cloudinary.com/spiralyze/raw/upload/v1672746094/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/animation-scripts/Anim_Mobile.json';
	lotteMobileConfigScript.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(lotteMobileConfigScript);
	
	// Add Slick
	var slickStyle = document.createElement('link');
	slickStyle.rel = 'stylesheet';
	slickStyle.type = 'text/css';
	slickStyle.href = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
	document.getElementsByTagName('HEAD')[0].appendChild(slickStyle);
	
	var slickScript = document.createElement('script');
	slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
	slickScript.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(slickScript);
	
	slickScript.onload = function()
	{
		isSlickLoad = 1;
	};
	lotteScript.onload = function()
	{
		lotteLoad = 1;
	};
	lotteConfigScript.onload = function()
	{
		lotteConfigLoad = 1;
	};
	lotteMobileConfigScript.onload = function()
	{
		lotteMobileConfigLoad = 1;
	};
	
	// Check jquery
	let checkJq = setInterval(function(){
		if(jQuery.fn)
		{
			clearInterval(checkJq);
			
			// Replace header logo
			let checkHeader = setInterval(function(){
				if(jQuery('.logo.base-logo').length > 0)
				{
					clearInterval(checkHeader);
					let checkIfLogoUpdate = setInterval(function(){
						if(jQuery('.logo.base-logo img:not(.spz-awr-1018-mobile-logo)').attr('src').indexOf('AW_Logo_02.svg') != -1)
						{
							jQuery('.logo.base-logo img:not(.spz-awr-1018-mobile-logo)').attr({ src: '//res.cloudinary.com/spiralyze/image/upload/v1669783657/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/Logo.svg', alt: 'AWR Logo' });
						}
					});
					
					if(jQuery('.spz-awr-1018-mobile-logo').length == 0)
					{
						jQuery('.logo.base-logo').append('<img src="//res.cloudinary.com/spiralyze/image/upload/v1670216808/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/Logo-short.svg" alt="AWR Logo" class="spz-awr-1018-mobile-logo">');
					}
					jQuery('.logo.base-logo img').css('opacity', 1);
				}
			}, 500);
			
			// Append Custom sections
			let checkBody = setInterval(function(){
				if(jQuery('hos-body').length > 0)
				{
					clearInterval(checkBody);
					if(jQuery('.spz-awr-1018-main').length == 0)
					{
						jQuery('hos-body').after('<div class="spz-awr-1018-main"></div>');
					}
					
					// Add contact in side menu
					let checkSideMenu = setInterval(function(){
						if(jQuery('hos-right-navigation-menu').length > 0)
						{
							clearInterval(checkSideMenu);
							let menuHtml = '\
								<div class="spz-awr-1018-menu-contact">\
								    <div class="spz-awr-1018-menu-contact-wrapper">\
								        <a href="tel:18558005195" class="spz-awr-1018-menu-contact-cta"><hr>Contact Us 24/7<hr><strong>1.855.800.5195</strong></a>\
								    </div>\
								</div>\
							';
							if(jQuery('hos-right-navigation-menu .spz-awr-1018-menu-contact').length == 0)
							{
								jQuery('hos-right-navigation-menu .head-box').after(menuHtml);
							}
						}
					});
					
					// Check zipcode form
					waitForElm('.spz-awr-1018-main').then((elm) => {
						// Hero Section
						if(jQuery('.spz-awr-1018-hero').length == 0)
						{
							// Hero
							jQuery(elm).append(initHero());
							// Append Form
							waitForElm('hos-google-places').then((elm) => {
								if(jQuery('.spz-awr-1018-hero-sticky-form-append hos-google-places').length == 0)
								{
									jQuery('.spz-awr-1018-hero-sticky-form-append').append(jQuery(elm));
									jQuery('.search-zipcode').attr('placeholder', 'Enter Your ZIP Code');
								}
							});
							// Init Animation
							let checkLotteiMobile = setInterval(function(){
								if(lotteMobileConfigLoad == 1 && lotteLoad == 1)
								{
									clearInterval(checkLotteiMobile);
									var paramsMobile = {
									    container: document.getElementById('lottie-mobile'),
									    renderer: 'svg',
									    loop: true,
									    autoplay: true,
									    animationData: mobileAnimation
									};
									
									var animMobile;
									
									animMobile = lottie.loadAnimation(paramsMobile);
								}
							}, 500);
							let checkLottei = setInterval(function(){
								if(lotteLoad == 1 && lotteConfigLoad == 1)
								{
									clearInterval(checkLottei);
									var params = {
									    container: document.getElementById('lottie'),
									    renderer: 'svg',
									    loop: true,
									    autoplay: true,
									    animationData: animationData
									};
									
									var anim;
									
									anim = lottie.loadAnimation(params);
								}
							}, 500);
							
							// Reviews
							jQuery(elm).append(initReviewSlider());
							// Init Slick
							let checkSlick = setInterval(function(){
								if(isSlickLoad == 1)
								{
									clearInterval(checkSlick);
									jQuery('.spz-awr-1018-review-slider').slick({
									    infinite: true,
									    arrows: false,
									    dots: false,
									    slidesToShow: 7,
									    slidesToScroll: 1,
									    autoplay: true,
									    autoplaySpeed: 3500,
									    centerMode: true,
									    // speed: 50000,
									    variableWidth: true,
									    focusOnSelect: false,
									    cssEase: "linear"
									});
								}
							}, 500);
							
							// Protection Plans
							jQuery(elm).append(initPlans());
							// Trigger Popup
							jQuery(document).on('click', '.spz-awr-1018-plans-cta', function(){
								if(jQuery('.spz-awr-1018-popup-overlay').length > 0)
								{
									jQuery('.spz-awr-1018-popup-overlay').fadeIn();
									jQuery('body').addClass('spz-popup-visible');
									if(jQuery('.spz-awr-1018-popup-form hos-google-places').length == 0)
									{
										jQuery('.spz-awr-1018-popup-form').append(jQuery('hos-google-places'));
									}
								}
							});
							jQuery(document).on('click', '.spz-awr-1018-popup-close', function(){
								jQuery('.spz-awr-1018-popup-overlay').fadeOut('fast');
								jQuery('body').removeClass('spz-popup-visible');
								setTimeout(function(){
									if(jQuery('.spz-awr-1018-hero-sticky-form-append hos-google-places').length == 0)
									{
										jQuery('.spz-awr-1018-hero-sticky-form-append').append(jQuery('hos-google-places'));
									}
								},200);
							});
							jQuery('body').click(function(e){
								if(e.target.classList.contains('spz-awr-1018-popup'))
								{
									jQuery('.spz-awr-1018-popup-overlay').fadeOut('fast');
									jQuery('body').removeClass('spz-popup-visible');
									setTimeout(function(){
										if(jQuery('.spz-awr-1018-hero-sticky-form-append hos-google-places').length == 0)
										{
											jQuery('.spz-awr-1018-hero-sticky-form-append').append(jQuery('hos-google-places'));
										}
									},200);
								}
							});
							// How it works
							jQuery(elm).append(initHowItWorks());
							// Testimonials
							jQuery(elm).append(initTestimonial());
							// Add Partners
							jQuery(elm).append(initPartner());
							// Init Slick
							let checkPartnerSlick = setInterval(function(){
								if(isSlickLoad == 1)
								{
									clearInterval(checkPartnerSlick);
									jQuery('.spz-awr-1018-partner-logos').slick({
									    infinite: true,
									    arrows: false,
									    dots: false,
									    slidesToShow: 7,
									    slidesToScroll: 7,
									    autoplay: true,
									    autoplaySpeed: 0,
									    centerMode: true,
									    speed: 8000,
									    variableWidth: true,
									    focusOnSelect: false,
									    cssEase: "linear",
									    draggable: false
									});
								}
							}, 500);
							// Learn More
							jQuery(elm).append(initLearnMore());
							// Google Ratings
							jQuery(elm).append(initGoogleRating());
							// Footer
							jQuery(elm).append(initFooter());
							// Zipcode Popup
							jQuery(elm).append(initPopup());
							
							// Update Menu Position
							// let checkMenuLogin = setInterval(function(){
							// 	if(jQuery('.spz-awr-1018 hos-right-navigation-menu .login-box').length > 0)
							// 	{
							// 		clearInterval(checkMenuLogin);
							// 		jQuery('.spz-awr-1018 hos-right-navigation-menu .link-box').after(jQuery('.spz-awr-1018 hos-right-navigation-menu .login-box'));
							// 	}
							// }, 500);
							// Toggle Menu
							jQuery('.spz-awr-1018 #navTrigger a').unbind('click').click(function(){
								if(jQuery('.spz-awr-1018 hos-right-navigation-menu .sidebar-menu.spz-menu-active').length > 0)
								{
									jQuery('.spz-awr-1018 hos-right-navigation-menu .sidebar-menu').removeClass('active spz-menu-active');
									jQuery('.spz-awr-1018 #backdrop-sidemenu').hide();
									jQuery('body').removeClass('sidebar-open');
									jQuery('header').removeClass('spz-menu-open');
									jQuery('.spz-active-parent-menu [aria-expanded="true"]').attr('aria-expanded', false);
									jQuery('.spz-active-parent-menu').removeClass('spz-active-parent-menu');
								}
								else
								{
									jQuery('.spz-awr-1018 hos-right-navigation-menu .sidebar-menu').addClass('spz-menu-active');
									jQuery('header').addClass('spz-menu-open');
								}
							});
							jQuery(document).on('click', '.spz-awr-1018 .accordmenucls',function(){
								let $thisMenu = jQuery(this);
								jQuery('.spz-active-parent-menu').removeClass('spz-active-parent-menu');
								if(jQuery(this).hasClass('accordmenucls') && !(jQuery(this).hasClass('collapsed')))
								{
									$thisMenu.parent().addClass('spz-active-parent-menu');
								}
								else
								{
									$thisMenu.parent().removeClass('spz-active-parent-menu');
								}
							});
							jQuery('body').click(function(e){
								if(e.target.classList.contains('backdrop-sidemenu') == true)
								{
									jQuery('.spz-active-parent-menu').removeClass('spz-active-parent-menu');
									jQuery('.spz-awr-1018 hos-right-navigation-menu .sidebar-menu').removeClass('active spz-menu-active');
								}
							});
						}
					});
				}
			}, 500);
		}
	}, 500);
}
function initHero()
{
	let htmlD = '\
		<section class="spz-awr-1018-hero">\
			<div class="spz-awr-1018-hero-wrapper">\
				<div id="lottie"></div>\
				<div id="lottie-mobile"></div>\
				<div class="spz-awr-1018-hero-sticky-info">\
					<div class="spz-awr-1018-hero-sticky-info-wrapper">\
						<p class="spz-awr-1018-hero-info-title-small">Make the smart choice</p>\
						<h2 class="spz-awr-1018-hero-info-title">With Us, Your Homeâ€™s Protected</h2>\
						<div class="spz-awr-1018-hero-sticky-form">\
							<h3 class="spz-awr-1018-hero-sticky-form-title">Find Your Protection Plan</h3>\
							<div class="spz-awr-1018-hero-sticky-form-append"></div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</section>\
	';
	
	return htmlD;
}
function initReviewSlider()
{
	let htmlD = '\
		<section class="spz-awr-1018-reviews">\
			<div class="spz-awr-1018-reviews-wrapper">\
				<div class="spz-awr-1018-review-slider">\
					'+loopReviewData()+'\
				</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function loopReviewData()
{
	let reviewData = [
		{ name: 'Barbara G', letters: 'BG', review: 'Great service from AmWater Solutions My serviceman came in and went straight to work unplugging my bathtub He also recommended other work I needed done Im thankful... More', bgcolor: '#97D881', alt: 'Barbara G', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Samantha P', letters: 'SP', review: 'Our main drain was backflowing very bad. Called them and within 4 hours a contracted and licensed professional was at our house and quickly cleared the line... More', bgcolor: '#F79F9F', alt: 'Samantha P', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Brian J M', letters: 'BM', review: 'Super guy for a sewer backup. Pleasant, nice job, well done', bgcolor: '#EDC07D', alt: 'Brian J M', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Mary M', letters: 'MM', review: 'Great purchase and great value!! Also, whether you file a claim/issue online or call - efficient and quick response!', bgcolor: '#7DB7ED', alt: 'Mary M', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Charandeo S', letters: 'CS', review: 'Excellent service. The response was immediate and the responding was professional and provided great quality of work. He explained all the actions he... More', bgcolor: '#DB97E6', alt: 'Charandeo S', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Scott M', letters: 'SM', review: 'Very helpful during a recent serious leak on our water feed line. Went smoothly, timely and the repair was completed on a holiday. I prefer to keep maintenance matters separate from', bgcolor: '#9D97E6', alt: 'Scott M', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Kevin W.', letters: 'KW', review: 'Quick response and quick service to repair an electrical issue we were having with a GCF outlet and a double switch. Great service.', bgcolor: '#E697D0', alt: 'Kevin W.', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Richard S', letters: 'RS', review: 'Good response and service. The person handling our issues was very professional and got us good contractors to fix our problem. Thank yall', bgcolor: '#B097E6', alt: 'Richard S', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Dennis C', letters: 'DC', review: 'Came out quickly cleaned out sewer line. Three days later it clogged again immediate response problem solved. Very satisfied.', bgcolor: '#E6AE97', alt: 'Dennis C', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Robert H', letters: 'RH', review: 'Once able to get through the service came the next morning and when the blockage returned a few days later they again came promptly the next morning and solved the problem.', bgcolor: '#9DC163', alt: 'Robert H', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1670831110/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/4-reviews-star.svg' },
		{ name: 'Elaine P', letters: 'EP', review: 'American Water made a difficult situation less stressful! After contacting customer service to get a claim started for sewer repair they took over. They set everything up with the..', bgcolor: '#85CABE', alt: 'Elaine P', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1670831110/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/4-reviews-star.svg' },
		{ name: 'Miguel O', letters: 'MO', review: 'American Water did a great job in completion the broken water line going into the house and the worker were very good in what they do. Hopefully nothing else will open up...thank you', bgcolor: '#71D0E5', alt: 'Miguel O', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1670831110/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/4-reviews-star.svg' },
		{ name: 'Charles H', letters: 'CH', review: 'I contacted AWR concerning a possible leak in the water line between the city\'s meter and my home ... a distance of roughly 400 ft. Even though it took several months to locate and...', bgcolor: '#8C98DB', alt: 'Charles H', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Evelyn M', letters: 'EM', review: 'Excellent service for all my appointments. Very reliable and professional employees. Thank you.', bgcolor: '#DDAF3C', alt: 'Evelyn M', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Ramon H', letters: 'RH', review: 'Always very prompt and courteous service! When you have a sewer or water problem in your home, it is important to get it taken care of as soon as possible. Thank You for...', bgcolor: '#9E8DE3', alt: 'Ramon H', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Robin S', letters: 'RS', review: 'American Water Resources was amazing. Courteous, professional and timely. Made my water main break stress free!', bgcolor: '#C091C7', alt: 'Robin S', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
		{ name: 'Ronald C', letters: 'RC', review: 'Prompt response, sent someone in less than 3 hours, even though it was a weekend. Knowledgeable workers, fixed my sewer backup.', bgcolor: '#7BD78F', alt: 'Ronald C', review_rating: '//res.cloudinary.com/spiralyze/image/upload/v1669804460/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/review-stars.svg' },
	];
	let htmlD = '';
	
	if(reviewData.length > 0)
	{
		for(let i = 0; i < reviewData.length; i++)
		{
			htmlD += '\
				<div class="spz-awr-1018-review-slider-item">\
					<div class="spz-awr-1018-review-slider-item-wrapper">\
						<div class="spz-awr-1018-review-slider-item-wrapper-inner">\
							<div class="spz-awr-1018-review-slider-item-user" style="--tooltip-color: '+reviewData[i].bgcolor+';" data-letter="'+reviewData[i].letters+'">\
								<div class="spz-awr-1018-review-slider-item-user-info">\
									<h2>'+reviewData[i].name+'</h2>\
									<img src="'+reviewData[i].review_rating+'" alt="Review Stars">\
								</div>\
								<div class="spz-awr-1018-review-slider-item-user-review"><p>'+reviewData[i].review+'</p></div>\
							</div>\
						</div>\
					</div>\
				</div>\
			';
		}
	}
	
	return htmlD;
}
function initPlans()
{
	let htmlD = '\
		<section class="spz-awr-1018-plans">\
			<div class="spz-awr-1018-plans-wrapper">\
				<div class="spz-awr-1018-plans-info">\
					<h2 class="spz-awr-1018-plans-title">Protection Plans</h2>\
					<p class="spz-awr-1018-plans-sub-title">Starting from <span>$5.49</span> per month.</p>\
					<p class="spz-awr-1018-plans-sub-title spz-awr-1018-plans-sub-title-only-mobile">Starting from <span>$5.49</span> /month.</p>\
				</div>\
				<div class="spz-awr-1018-plans-list">\
					<div class="spz-awr-1018-plans-list-wrapper">\
						<div class="spz-awr-1018-plans-list-item">\
							<label class="spz-awr-1018-plan-popular">Most popular</label>\
							<div class="spz-awr-1018-plans-list-item-wrapper">\
								<div class="spz-awr-1018-plans-list-item-image">\
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1669807659/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/water-line-and-sewer-lLine-protection-program.svg" alt="Water Line and Sewer Line Protection Program">\
								</div>\
								<div class="spz-awr-1018-plans-list-item-info">\
									<h2>Water Line and Sewer<br> Line Protection Program</h2>\
									<p>Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks.</p>\
									<label>Starts at <span class="spz-price">$12.49</span> / month <strong>(save $2.00)</strong></label>\
								</div>\
								<div class="spz-awr-1018-plans-cta-wrapper">\
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1669807659/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/water-line-and-sewer-lLine-protection-program.svg" alt="Water Line and Sewer Line Protection Program">\
									<button type="button" class="spz-awr-1018-plans-cta">Get Started</button>\
								</div>\
							</div>\
						</div>\
						<div class="spz-awr-1018-plans-list-item">\
							<div class="spz-awr-1018-plans-list-item-wrapper">\
								<div class="spz-awr-1018-plans-list-item-image">\
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1669807659/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/water-line-protection-program.svg" alt="Water Line Protection Program">\
								</div>\
								<div class="spz-awr-1018-plans-list-item-info">\
									<h2>Water Line<br> Protection Program</h2>\
									<p>Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.</p>\
									<label>Starts at <span class="spz-price">$5.49</span> / month</label>\
								</div>\
								<div class="spz-awr-1018-plans-cta-wrapper">\
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1669807659/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/water-line-protection-program.svg" alt="Water Line Protection Program">\
									<button type="button" class="spz-awr-1018-plans-cta">Get Started</button>\
								</div>\
							</div>\
						</div>\
						<div class="spz-awr-1018-plans-list-item">\
							<div class="spz-awr-1018-plans-list-item-wrapper">\
								<div class="spz-awr-1018-plans-list-item-image">\
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1669807659/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/sewer-line-protection-program.svg" alt="Sewer Line Protection Program">\
								</div>\
								<div class="spz-awr-1018-plans-list-item-info">\
									<h2>Sewer Line<br> Protection Program</h2>\
									<p>Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.</p>\
									<label>Starts at <span class="spz-price">$9.00</span> / month</label>\
								</div>\
								<div class="spz-awr-1018-plans-cta-wrapper">\
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1669807659/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/sewer-line-protection-program.svg" alt="Sewer Line Protection Program">\
									<button type="button" class="spz-awr-1018-plans-cta">Get Started</button>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function initHowItWorks()
{
	let htmlD = '\
		<section class="spz-awr-1018-how-it-works">\
			<div class="spz-awr-1018-how-it-works-wrapper">\
				<div class="spz-awr-1018-how-it-works-info">\
					<h6 class="spz-awr-1018-how-it-works-info-title-small">How it works</h6>\
					<h2 class="spz-awr-1018-how-it-works-info-title">AWR Protection Process</h2>\
				</div>\
				<div class="spz-awr-1018-how-it-works-list">\
					<div class="spz-awr-1018-how-it-works-list-item">\
						<div class="spz-awr-1018-how-it-works-list-item-wrapper">\
							<div class="spz-awr-1018-how-it-works-list-item-img">\
								<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/sign-up-online.png" alt="Sign Up Online">\
							</div>\
							<div class="spz-awr-1018-how-it-works-list-item-info">\
								<label>1.</label>\
								<div class="spz-awr-1018-how-it-works-list-item-info-sub">\
									<h3 class="spz-awr-1018-how-it-works-list-item-info-title">Sign Up Online</h3>\
									<p class="spz-awr-1018-how-it-works-list-item-info-description">Enroll now and get protection from repair costs and hassles associated with unexpected home repairs.</p>\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="spz-awr-1018-how-it-works-list-item">\
						<div class="spz-awr-1018-how-it-works-list-item-wrapper">\
							<div class="spz-awr-1018-how-it-works-list-item-img">\
								<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/relax.png" alt="Relax">\
							</div>\
							<div class="spz-awr-1018-how-it-works-list-item-info">\
								<label>2.</label>\
								<div class="spz-awr-1018-how-it-works-list-item-info-sub">\
									<h3 class="spz-awr-1018-how-it-works-list-item-info-title">Relax</h3>\
									<p class="spz-awr-1018-how-it-works-list-item-info-description">Your covered repairs will be handled promptly and professionally.</p>\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="spz-awr-1018-how-it-works-list-item">\
						<div class="spz-awr-1018-how-it-works-list-item-wrapper">\
							<div class="spz-awr-1018-how-it-works-list-item-img">\
								<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/call-for-help-1.jpg" alt="Call For Help" class="spz-awr-1018-desktop-only">\
								<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/call-for-help-1440.jpg" alt="Call For Help" class="spz-awr-1018-desktop-hide">\
							</div>\
							<div class="spz-awr-1018-how-it-works-list-item-info">\
								<label>3.</label>\
								<div class="spz-awr-1018-how-it-works-list-item-info-sub">\
									<h3 class="spz-awr-1018-how-it-works-list-item-info-title">Call For Help</h3>\
									<p class="spz-awr-1018-how-it-works-list-item-info-description">If something happens to your home  - we send out one of our license repair partners!</p>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function initTestimonial()
{
	let htmlD = '\
		<section class="spz-awr-1018-testimonial">\
			<div class="spz-awr-1018-testimonial-wrapper">\
				<div class="spz-awr-1018-testimonial-list">\
					<div class="spz-awr-1018-testimonial-list-item">\
						<div class="spz-awr-1018-testimonial-list-item-wrapper">\
							<div class="spz-awr-1018-testimonial-list-item-img">\
								<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/barbara.png" alt="Barbara R.">\
							</div>\
							<div class="spz-awr-1018-testimonial-list-item-info">\
								<div class="spz-awr-1018-testimonial-list-item-user-detail">\
									<label>Barbara R.</label>\
									<hr>\
									<p>New York<br> Water Line Leak</p>\
								</div>\
								<div class="spz-awr-1018-testimonial-list-item-user-description">\
									<p>â€œSo glad weâ€™ve signed up for this program best thing we ever did as homeowners!â€</p>\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="spz-awr-1018-testimonial-list-item">\
						<div class="spz-awr-1018-testimonial-list-item-wrapper">\
							<div class="spz-awr-1018-testimonial-list-item-img">\
								<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/carol.png" alt="Carol M.">\
							</div>\
							<div class="spz-awr-1018-testimonial-list-item-info">\
								<div class="spz-awr-1018-testimonial-list-item-user-detail">\
									<label>Carol M.</label>\
									<hr>\
									<p>Oklahoma<br> Sewer Line Blockage</p>\
								</div>\
								<div class="spz-awr-1018-testimonial-list-item-user-description">\
									<p>â€œMy neighbors spent thousands for the same work.â€</p>\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="spz-awr-1018-testimonial-list-item">\
						<div class="spz-awr-1018-testimonial-list-item-wrapper">\
							<div class="spz-awr-1018-testimonial-list-item-img">\
								<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/theodora.png" alt="Theodora D.">\
							</div>\
							<div class="spz-awr-1018-testimonial-list-item-info">\
								<div class="spz-awr-1018-testimonial-list-item-user-detail">\
									<label>Theodora D.</label>\
									<hr>\
									<p>Iowa<br> Leaking Valve</p>\
								</div>\
								<div class="spz-awr-1018-testimonial-list-item-user-description">\
									<p>â€œYou saved us thousands!â€</p>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function initPartner()
{
	let htmlD = '\
		<section class="spz-awr-1018-partner">\
			<div class="spz-awr-1018-partner-wrapper">\
				<div class="spz-awr-1018-partner-info">\
					<h2 class="spz-awr-1018-partner-title">Protect Your Customers<br> from the Unexpected</h2>\
					<p class="spz-awr-1018-partner-description">We partner with cities, utilities and private companies of all sizes across the nation to provide peace of mind to their homeowners, customers and members. Get more information about becoming a partner.</p>\
				</div>\
				<div class="spz-awr-1018-partner-logos">'+partnerLoop()+'</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function partnerLoop()
{
	let partnerData = [
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/city-of-yonkers.svg', alt: 'City of Yonkers', title: 'City of Yonkers' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/nyc-dept.-of-environmental-p.svg', alt: 'NYC Dept. of Environmental P.', title: 'NYC Dept. of Environmental P.' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/orlando-utilities-commission.svg', alt: 'Orlando Utilities Commission', title: 'Orlando Utilities Commission' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/city-of-wilmington.svg', alt: 'City of Wilmington', title: 'City of Wilmington' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/philadelphia-energy-authority.svg', alt: 'Philadelphia Energy Authority', title: 'Philadelphia Energy Authority' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878548/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/metro-water-services.svg', alt: 'Metro Water Services', title: 'Metro Water Services' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/san-francisco.svg', alt: 'San Francisco', title: 'San Francisco' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/city-of-yonkers.svg', alt: 'City of Yonkers', title: 'City of Yonkers' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/nyc-dept.-of-environmental-p.svg', alt: 'NYC Dept. of Environmental P.', title: 'NYC Dept. of Environmental P.' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/orlando-utilities-commission.svg', alt: 'Orlando Utilities Commission', title: 'Orlando Utilities Commission' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/city-of-wilmington.svg', alt: 'City of Wilmington', title: 'City of Wilmington' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/philadelphia-energy-authority.svg', alt: 'Philadelphia Energy Authority', title: 'Philadelphia Energy Authority' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878548/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/metro-water-services.svg', alt: 'Metro Water Services', title: 'Metro Water Services' },
		{ img: '//res.cloudinary.com/spiralyze/image/upload/v1669878546/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/partner-logos/san-francisco.svg', alt: 'San Francisco', title: 'San Francisco' }
	];
	
	let htmlD = '';
	
	if(partnerData.length > 0)
	{
		for(let i = 0; i < partnerData.length; i++)
		{
			htmlD += '\
				<div class="spz-awr-1018-partner-logo-item">\
					<div class="spz-awr-1018-partner-logo-item-wrapper">\
						<div class="spz-awr-1018-partner-logo-item-wrapper-inner">\
							<img src="'+partnerData[i].img+'" alt="'+partnerData[i].alt+'">\
							<label>'+partnerData[i].title+'</label>\
						</div>\
					</div>\
				</div>\
			';
		}
	}
	
	return htmlD;
}
function initLearnMore()
{
	let htmlD = '\
		<section class="spz-awr-1018-learn-more">\
			<div class="spz-awr-1018-learn-more-wrapper">\
				<div class="spz-awr-1018-learn-more-inner-wrapper">\
					<h2>To learn more about partnering with us - call.</h2>\
					<a href="tel:18009311548">1-800-931-1548</a>\
				</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function initGoogleRating()
{
	let htmlD = '\
		<section class="spz-awr-1018-google-review">\
			<div class="spz-awr-1018-google-review-wrapper">\
				<div class="spz-awr-1018-google-review-heading">\
					<img src="//res.cloudinary.com/spiralyze/image/upload/v1669891905/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/google-logo.svg" alt="Google">\
					<label class="spz-awr-1018-google-review-mobile-rating"><strong>Rating</strong></label>\
					<p class="spz-awr-1018-google-review-mobile-rating-number">4.2/5 (735 Reviews)</p>\
					<label><strong>Rating</strong><hr>4.2/5 (735 Reviews)</label>\
				</div>\
				<div class="spz-awr-1018-google-review-ratings">\
					<img src="//res.cloudinary.com/spiralyze/image/upload/v1669892001/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/google-ratings.svg" alt="Google Ratings">\
				</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function initFooter()
{
	let htmlD = '\
		<section class="spz-awr-1018-footer">\
			<div class="spz-awr-1018-footer-wrapper">\
				<div class="spz-awr-1018-footer-top">\
					<a href="/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1669894597/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/footer-site-logo.svg" alt="AWR Logo"></a>\
					<a href="/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1669897074/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/bbb-logo.svg" alt="Accredited Business"></a>\
				</div>\
				<div class="spz-awr-1018-footer-mid">\
					<p>American Water Resources offers service line protection contracts to homeowners in 43 states and Washington, D.C., and currently services more than 2 million contracts. The company has been providing protection contracts since the year 2000 with more than 9 out of 10 customers satisfied and an A+ Rating from the Better Business Bureau. American Water Resources also provides its protection contracts to homeowners through municipal partnerships with the New York City Department of Environmental Protection, Orlando Utilities Commission, Nashville Metro Water Services and others. American Water Resources is an independent third-party provider of optional home protection programs. American Water Resources is a trademark of American Water and used under license. AWRâ€™s optional programs are not provided by American Water or its affiliates. American Water Resources conducts business in California as American Water Resources Insurance Services and administers home protection contracts, provided by Virginia Surety Company, Inc., CA Lic. No. 0F65279. In Virginia, American Water Resources administers insurance policies, underwritten by Virginia Surety Company, Inc., VA Lic. No. 109751.</p>\
				</div>\
				<div class="spz-awr-1018-footer-bottom">\
					<ul class="spz-awr-1018-footer-site-info">\
						<li class="spz-awr-1018-site-phone"><a href="tel:18558005195">1.855.800.5195</a></li>\
						<li class="spz-awr-1018-site-address"><label>1000 Bishops Gate Blvd., Ste. 301, Mount Laurel, NJ 08054</label></li>\
					</ul>\
					<ul class="spz-awr-1018-footer-site-menu">\
						<li><a href="/support/partner-request">Support</a></li>\
						<li><a href="/page/privacy-policy/226621">Privacy Policy</a></li>\
						<li><a href="/terms">Terms of Use</a></li>\
						<li><a href="/listing-page">Products</a></li>\
					</ul>\
					<ul class="spz-awr-1018-footer-site-social-links">\
						<li><a href="https://www.youtube.com/channel/UCpVkfipvdMH-v11p9hb8bnA/videos"><img src="//res.cloudinary.com/spiralyze/image/upload/v1671684668/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/youtube-new.svg" alt="Youtube"></a></li>\
						<li><a href="https://www.facebook.com/American-Water-Resources-AWR-107465062655139/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1671684668/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/facebook-new.svg" alt="Facebook"></a></li>\
						<li><a href="https://www.linkedin.com/company/american-water-resources/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1671684668/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/invision-new.svg" alt="Invision"></a></li>\
					</ul>\
				</div>\
			</div>\
		</section>\
	';
	return htmlD;
}
function initPopup()
{
	let htmlD = '\
		<div class="spz-awr-1018-popup-overlay">\
		    <div class="spz-awr-1018-popup">\
		        <div class="spz-awr-1018-popup-wrapper">\
		            <div class="spz-awr-1018-popup-inner-wrapper">\
		                <a href="javascript:void(0);" class="spz-awr-1018-popup-close"></a>\
		                <div class="spz-awr-1018-popup-info">\
		                    <p>Make the smart choice</p>\
		                    <h2>With Us, Your Homeâ€™s Protected</h2>\
		                </div>\
		                <div class="spz-awr-1018-popup-form-wrapper">\
		                    <label>Find Your Protection Plan</label>\
		                    <div class="spz-awr-1018-popup-form"></div>\
		                </div>\
		            </div>\
		        </div>\
		    </div>\
		</div>\
	';
	return htmlD;
}
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}