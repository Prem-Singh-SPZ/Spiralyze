let lottie = document.createElement("script");
lottie.type = "text/javascript";
lottie.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
document.head.appendChild(lottie);

let SPZLoader = document.createElement('div');
SPZLoader.className = 'spz-loader';
SPZLoader.innerHTML = '<lottie-player src="https://res.cloudinary.com/spiralyze/raw/upload/v1659516330/AWR/4002-AWR-PHS-Home-Redesign/awr-phs-loader.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop autoplay></lottie-player>';
document.querySelector('body').appendChild(SPZLoader);

var jQloaded = setInterval(function () {
    if (typeof jQuery !== 'undefined' && window.location.href === "https://www.yourhomesolutions.com/") {
        clearInterval(jQloaded);
        loadTest();
    } else { jQuery('body').removeClass('spz-4002') }
}, 100);

window.onpageshow = function(event) {
	if (event.persisted) {
		SHOP.changezip();
	}
};

//Bypass hero submit
// bypassCollection();
// function bypassCollection(){
// 	if(window.location.href.includes('https://www.yourhomesolutions.com/collections') && jQuery('.related-box').length > 0) {
// 		document.querySelector('.spz-loader').classList.add('active');
// 		SHOP.changezip();
// 	}
// }

function loadTest(){
        var jBody = jQuery("body");
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === "class") {
                    var attributeValue = jQuery(mutation.target).prop(mutation.attributeName);
                    if (!jQuery('body').hasClass('spz-4002')) {
                        jQuery('body').addClass('spz-4002');
                    }
                }
            });
        });
        observer.observe(jBody[0], { attributes: true });
    
    jQuery(document).ready(function () {
     	jQuery('body').addClass('spz-4002');
	    renderHeader();
	    renderSlick();
	    renderNavigation();
	    renderModal();
	    renderHero();
		renderGoogleReviews();
		renderUnavailableModal();
	    jQuery('.spz-4002 #spz-zipcode_header').submit(function(e){
	    	e.preventDefault();
	    	alterSubmission('modal');
	    	if(!jQuery('.spz-4002 #modalInput').hasClass('error')) closeModal();
	    });
	    jQuery('.spz-4002 #zipcode_body').submit(function(e){
	    	if(e.result === undefined)
	    	window.onbeforeunload = function() {
			    document.querySelector('.spz-loader').classList.add('active');
			    this.reset();
			}
	    });
	    //Bypass hero submit
	    // jQuery('.spz-4002 #spz-zipcode_body').submit(function(e){
    	// 	e.preventDefault();
	    // 	alterSubmission('hero');
	    // });
    });
    
    function renderHeader(){
    	jQuery('.spz-4002 .header__wrapper .zip-col').removeClass('col-xs-12 col-sm-12').addClass('col-xs-6 col-sm-6 col-sm-push-6');
    	jQuery('.spz-4002 .header__wrapper .zip-col').next().removeClass('col-xs-12').addClass('col-xs-6 col-sm-pull-6 zip-col-navigation');
    	jQuery('.spz-4002 .header__item-toggle a').html('<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658215287/AWR/4002-AWR-PHS-Home-Redesign/menu.svg" alt="Menu"/>')
    }
    function renderSlick(){
    	jQuery('head').append('\
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />\
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />\
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>');
    }
    function renderNavigation(){
	    jQuery('.spz-4002 .navigation-horizontal .navigation-horizontal__list').children().eq(0).children('a').text('Warranty Plans').attr('href', 'https://www.yourhomesolutions.com/pages/repair-maintenance');
	    jQuery('.spz-4002 .navigation-horizontal .navigation-horizontal__list').children().eq(1).children('a').text('Make a Payment').attr('href', 'https://payments.yourhomesolutions.com/phs_nps/WWGPage?WWGSessionIdx=1&WWGThreadIdx=1&WWGSubmitCounter=1');
	    jQuery('.spz-4002 .navigation-horizontal .navigation-horizontal__list').children().eq(2).children('a').text('Request Service').attr('href', 'https://www.yourhomesolutions.com/pages/request-service');
	    jQuery('.spz-4002 .navigation-horizontal .navigation-horizontal__list').children().eq(3).children('a').text('About Us').attr('href', 'https://www.yourhomesolutions.com/pages/about-us');
	    jQuery('.spz-4002 .navigation-horizontal .navigation-horizontal__list').children().eq(4).children('a').html('Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658155256/AWR/4002-AWR-PHS-Home-Redesign/chevron-right.svg" alt="Chevron" />').attr('href', '#').addClass('spz-get-started');
    }
    function renderModal(){
    	jQuery('<div class="spz-modal"></div><div class="spz-modal__backdrop"></div>').appendTo('.spz-4002');
	    jQuery('.spz-4002 .header__wrapper .zip-col').children().appendTo('.spz-4002 .spz-modal');
    	jQuery('.spz-4002 .google_translate_element_container').remove();
	    jQuery('.spz-4002 #top-nav-container .container').children().appendTo('.spz-4002 .header__wrapper .zip-col');
	    jQuery('<div class="spz-modal__heading"><h1>Complete Home Protection</h1><p>Find Your Protection Plan</p></div>').prependTo('.spz-4002 .spz-modal .zip-container');
	    jQuery('.spz-4002 .spz-modal #zipcode_header').remove();
	    jQuery('<form id="spz-zipcode_header">\
	    <input type="text" class="zip_code_input" maxlength="5" placeholder="" value="" id="modalInput">\
	    <button type="submit" class="zip_submit" data-label="shop plans">GET STARTED</button>\
	    </form>').insertAfter('.spz-4002 .spz-modal__heading');
	    jQuery('.spz-4002 #zipcode_header').removeAttr('class').attr('id', 'spz-zipcode_header');
	    jQuery('<a href="#" class="spz-modal__close">\
	    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>\
	    </a>').appendTo('.spz-4002 .spz-modal');
	    jQuery('.spz-4002 .spz-modal .zip-container').removeAttr('style');
	    jQuery('.spz-4002 .spz-modal .zip_code_current').remove();
    }
    function renderHero(){
    	jQuery('.spz-4002 #myCarousel').parent().empty().removeClass('container hidden-xs hidden-sm').addClass('spz-hero__wrapper');
	    jQuery('<div class="spz-hero__container">\
	    <h1>Protect Your Home From Unexpected Repair Bills</h1>\
	    <h5>Get protection for 17 major home systems including sewer lines,<br/>appliances, and HVAC. Up to <b>$44,500</b> in coverage from just $3.95 per month.</h5>\
	    <div class="spz-body__zip-wrapper"></div>\
	    </div>').appendTo('.spz-4002 .spz-hero__wrapper');
	    jQuery('.spz-4002 .content-zip-bar #zipcode_body').parent().appendTo('.spz-4002 .spz-body__zip-wrapper');
	    jQuery('<h2>Find plans in your area</h2>').prependTo('.spz-4002 .spz-body__zip-wrapper .zip-container');
	    //Bypass hero submit
	    // jQuery('.spz-4002 #zipcode_body').remove();
	    // jQuery('<form id="spz-zipcode_body">\
	    // <input type="text" class="zip_code_input" maxlength="5" placeholder="" value="" id="heroInput">\
	    // <button type="submit" class="zip_submit" data-label="shop plans">GET STARTED</button>\
	    // </form>').insertAfter('.spz-4002 .spz-body__zip-wrapper .zip-container h2');
	    jQuery('.spz-4002 #zipcode_body input.zip_code_input').attr('id', 'heroInput');
	    jQuery('.spz-4002 .spz-hero__container .zip_submit').html('Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658155256/AWR/4002-AWR-PHS-Home-Redesign/chevron-right.svg" alt="Chevron" />');
	    jQuery('.spz-4002 .spz-body__zip-wrapper .zip-container').removeAttr('style');
	    jQuery('.spz-4002 .img-responsive.slider__img').parent().remove();
    }
	function renderGoogleReviews(){
		jQuery('<div class="spz-google_review">\
		    <div class="review_inner">\
		        <div class="review_header">\
		         <h3>Check out our <b style="color: #000000">356</b> reviews on</h3>\
		         <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/Google.png" alt="Google Review"/>\
		        </div>\
		        <div class="review_slider">\
		        	\
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Asonya Williams-Perry</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">Each time a technician has come to my home, they always displayed remarkable customer service.</p>\
		                </div>\
		            </div>\
		        	\
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Fatina Ahmad</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">Washer did not work, called in claim in the afternoon & repaired before noon following day.</p>\
		                </div>\
		            </div>\
		        	\
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Frances Pintozzi</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">Great service, quality work and polite workers with A/C installation. Price was affordable too!</p>\
		                </div>\
		            </div>\
		        	\
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Ron Youngblood</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">I have had this service for a few years now and used it once two years ago and had no problems.</p>\
		                </div>\
		            </div>\
		        	\
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Gayla Martelli</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">My system was DOWN on Christmas day & Pivotal was there for me.</p>\
		                </div>\
		            </div>\
		            \
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Hattie Cladwell</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">The service was great the system was installation in a time that was stated.</p>\
		                </div>\
		            </div>\
		            \
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Vince Ancona</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">Jose the technician is always prompt, efficient and professional! Great Job!.</p>\
		                </div>\
		            </div>\
		            \
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Jim Mcilvain</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">I highly recommend Pivotal Home Solutions. If you know how to maintain your air, water and cooling systems, that’s great.</p>\
		                </div>\
		            </div>\
		            \
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Sheila Herrod</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">Home Solutions is a life saver. I&lsquo;ve had stove replaced. Had laptop replaced. And just got dryer fixed.</p>\
		                </div>\
		            </div>\
		            \
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Kathy Warnke</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">This was my first experience with Pivotal Home Solutions. I am so pleased how professional and fast their service was.</p>\
		                </div>\
		            </div>\
		            \
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Dhruva Tilwalli</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/5-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">The plumber came on time. He was very professional. Appointment was easy.</p>\
		                </div>\
		            </div>\
		            \
		            <div class="review_box">\
		                <div class="review_content">\
		                    <h2 class="reviewer_name">Jeff Casillas</h2>\
		                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/4-star-review.png" class="review_rating" alt="Rating Star" title="Rating Star">\
		                    <p class="review_text">Pivotal home solution is a good option if you want to warranty systems in your home.</p>\
		                </div>\
		            </div>\
		            \
		        </div>\
		    <div>\
		</div>').insertAfter('.spz-4002 .spz-hero__wrapper');
		
		jQuery('.spz-4002 .review_slider').slick({
	        arrow: true,
	        dots: false,
	        infinite: false,
	        speed: 1500,
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        prevArrow: '<button class="slide_arrow prev-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="17.5" stroke="#AAAAAA"/><path d="M20.0079 21.2887C20.2641 21.0514 20.2644 20.6463 20.0084 20.4088L17.8873 18.4398C17.6315 18.2024 17.6315 17.7977 17.8873 17.5603L20.0084 15.5913C20.2644 15.3537 20.2641 14.9486 20.0079 14.7113L19.9455 14.6535C19.7155 14.4404 19.3601 14.4404 19.1301 14.6535L15.9924 17.5598C15.736 17.7973 15.736 18.2027 15.9924 18.4402L19.1301 21.3465C19.3601 21.5596 19.7155 21.5596 19.9455 21.3465L20.0079 21.2887Z" fill="#757575"/></svg></button>',
	        nextArrow: '<button class="slide_arrow next-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="17.5" transform="matrix(-1 0 0 1 18 18)" stroke="#AAAAAA"/><path d="M15.9919 21.2887C15.7357 21.0514 15.7355 20.6463 15.9914 20.4087L18.1126 18.4397C18.3683 18.2024 18.3683 17.7977 18.1126 17.5603L15.9914 15.5913C15.7355 15.3537 15.7357 14.9486 15.9919 14.7113L16.0543 14.6535C16.2844 14.4404 16.6397 14.4404 16.8698 14.6535L20.0075 17.5598C20.2639 17.7973 20.2639 18.2027 20.0075 18.4402L16.8698 21.3465C16.6397 21.5596 16.2844 21.5596 16.0543 21.3465L15.9919 21.2887Z" fill="#757575"/></svg></button>',
	        responsive: [{
	            breakpoint: 992,
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 2
	            }
	        },
	        {
	            breakpoint: 700,
	            settings: {
	                slidesToShow: 1,
	                slidesToScroll: 1
	            }
	        }]
	    });
	    jQuery('.spz-4002 .spz-google_review').next().remove();
	}
	function renderUnavailableModal(){
		jQuery('.spz-4002 #noBrandModal .modalCloseButton').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>');
		jQuery('.spz-4002 #noBrandModal #newsForm .form-group:nth-child(3)').removeClass('col-md-8');
		jQuery('.spz-4002 #noBrandModal #newsForm .form-group').addClass('spz-md-wrap');
		jQuery('.spz-4002 #noBrandModal .noBrandAvailable p').text('We’re Sorry. We do not have a service available in that location. Please signup to be notified when we do have service in your area.');
	}
}
function selectBrand(brand, redirect){
	 if (window.brands[brand.Id]) {
        window.SHOP.setLocation(brand, redirect , function () {
            if (window.HEADER) window.HEADER.setupZipModalLinks();
            ZIP.close();
            document.querySelector('.spz-loader').classList.add('active');
            localStorage.removeItem("user_select");
        });
    } else {
        ZIP.noBrandFound();
    }
}
function alterSubmission(type){
	let zipCodeValue = type === 'modal' ? jQuery('.spz-4002 .spz-modal #modalInput').val() : jQuery('.spz-4002 #heroInput').val();
	let errorText = type === 'modal' ? jQuery('.spz-4002 #spz-zipcode_header input.zip_code_input') : jQuery('.spz-4002 #spz-zipcode_body input.zip_code_input');
	let redirect = type === 'modal' ? window.localStorage.getItem('user_select') : '/pages/repair-maintenance';
	let isValid = !isNaN(zipCodeValue) && zipCodeValue && zipCodeValue > 0 && zipCodeValue.length === 5;
	if(!isValid){
		errorText.addClass('error');
		return;
	}
	if(isValid){
		jQuery.ajax({
            url   : window.SHOP.middleware + "/brands/" + zipCodeValue,
            cache : false,
            method: "GET"
        }).done(function(resp) {
            var brands = resp.data;
            if(brands == null || brands.length == 0) {
                ZIP.noBrandFound();
                return;
            }
            if (brands.length === 1) {
                selectBrand(brands[0], redirect);
            } else {
                ZIP.chooseFromAvailableBrands(brands);
            }
        });
	}
}