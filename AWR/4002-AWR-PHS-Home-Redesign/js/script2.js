var isTestLoaded = false;
		    
var testLoaded = setInterval(function () {
    if(jQuery('body').hasClass('spz-4002')){
    	if(!isTestLoaded){
		    renderProtectionPlans();
		    renderHowItWorks();
		    renderFeedbackSlider();
		    renderSidebar();
		    renderInputs();
		    isTestLoaded = true;
		    clearInterval(testLoaded);
	    
		    //Modal Listener
	    	jQuery('.spz-4002 .spz-get-started, .spz-4002 .spz-get-started__cta:not(.link)').click(function(){
	    		jQuery('.spz-4002 #heroInput').val('').removeClass('error');
	    		jQuery('.spz-4002 #heroInput').parent().removeClass('has-value has-error');
	    		jQuery('html').addClass('spz-locked');
	    		jQuery('.spz-4002 .spz-modal').addClass('active');
	    		jQuery('.spz-4002 .spz-modal__backdrop').addClass('active');
		    });
		    jQuery('.spz-4002 .spz-get-started').click(function(){
		    	localStorage.setItem('user_select','/pages/repair-maintenance');
		    });
		    jQuery('.spz-4002 .value-bundles__cta').click(function(){
		    	localStorage.setItem('user_select','/pages/category-value-bundles');
		    });
		    jQuery('.spz-4002 .heating-and-cooling__cta').click(function(){
		    	localStorage.setItem('user_select','/pages/category-heating-and-cooling');
		    });
		    jQuery('.spz-4002 .utility-line-repair__cta').click(function(){
		    	localStorage.setItem('user_select','/pages/category-utility-lines');
		    });
		    jQuery('.spz-4002 .appliances-electronics__cta').click(function(){
		    	localStorage.setItem('user_select','/pages/category-appliances');
		    });
		    jQuery('.spz-4002 .navigation-sidebar__lists .spz-get-started__cta').click(function(){
		    	localStorage.setItem('user_select','/pages/repair-maintenance');
		    	jQuery('.spz-4002 .navigation-sidebar__close').trigger('click');
		    })
		    jQuery('.spz-4002 .spz-modal__backdrop, .spz-4002 .spz-modal__close').click(function(){
		    	closeModal();
				localStorage.removeItem("user_select");
		    });
		}
    }
}, 100);

function closeModal(){
	jQuery('html').removeClass('spz-locked');
	jQuery('.spz-4002 .spz-modal').removeClass('active');
	jQuery('.spz-4002 .spz-modal__backdrop').removeClass('active');
	jQuery('.spz-4002 #modalInput').val('').removeClass('error');
	jQuery('.spz-4002 #modalInput').parent().removeClass('has-value');
}

function renderProtectionPlans(){
	jQuery('.spz-4002 .content-zip-bar').remove();
	jQuery('.spz-4002 .our-brands-home').removeClass('our-brands-home container').addClass('spz-protection-plans').empty();
	jQuery('\
	<div class="container">\
    	<div class="spz-protection-plans__heading">\
    		<h1>Protection Plans</h1>\
    		<p>Plans starting from $3.95 per month</p>\
    	</div>\
    	<div class="spz-protection-plans__row row">\
    		<div class="col-md-3 col-sm-6 spz-protection-plans__col">\
	    		<div class="spz-protection-plans__card">\
	    			<div class="card__header"></div>\
	    			<div class="card__content">\
	    				<div class="spz-protection-plans__badge">\
	    					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658136464/AWR/4002-AWR-PHS-Home-Redesign/view-bundles-icon.svg" alt="Value Bundles"/>\
	    				</div>\
	    				<h5>Value Bundles</h5>\
	    				<p>Save money with complete home and bundled home warranty products.</p>\
	    				<a href="#" class="spz-get-started__cta value-bundles__cta">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658155256/AWR/4002-AWR-PHS-Home-Redesign/chevron-right.svg" alt="Chevron" /></a>\
	    			</div>\
	    		</div>\
    		</div>\
    		<div class="col-md-3 col-sm-6 spz-protection-plans__col">\
	    		<div class="spz-protection-plans__card">\
	    			<div class="card__header"></div>\
	    			<div class="card__content">\
	    				<div class="spz-protection-plans__badge">\
	    					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658136464/AWR/4002-AWR-PHS-Home-Redesign/heating-and-cooling-icon.svg" alt="Heating and Cooling"/>\
	    				</div>\
	    				<h5>Heating and Cooling</h5>\
	    				<p>Maintenance, repair, and warranty plans for your heating and cooling systems.</p>\
	    				<a href="#" class="spz-get-started__cta heating-and-cooling__cta">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658155256/AWR/4002-AWR-PHS-Home-Redesign/chevron-right.svg" alt="Chevron" /></a>\
	    			</div>\
	    		</div>\
    		</div>\
    		<div class="col-md-3 col-sm-6 spz-protection-plans__col">\
	    		<div class="spz-protection-plans__card">\
	    			<div class="card__header"></div>\
	    			<div class="card__content">\
	    				<div class="spz-protection-plans__badge">\
	    					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658136464/AWR/4002-AWR-PHS-Home-Redesign/utility-line-repair-icon.svg" alt="Utility Line Repair"/>\
	    				</div>\
	    				<h5>Utility Line Repair</h5>\
	    				<p>Warranty plans for electric, gas, plumbing, outside water and sewer lines.</p>\
	    				<a href="#" class="spz-get-started__cta utility-line-repair__cta">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658155256/AWR/4002-AWR-PHS-Home-Redesign/chevron-right.svg" alt="Chevron" /></a>\
	    			</div>\
	    		</div>\
    		</div>\
    		<div class="col-md-3 col-sm-6 spz-protection-plans__col">\
	    		<div class="spz-protection-plans__card">\
	    			<div class="card__header"></div>\
	    			<div class="card__content">\
	    				<div class="spz-protection-plans__badge">\
	    					<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658136464/AWR/4002-AWR-PHS-Home-Redesign/appliances-and-electronics-icon.svg" alt="Appliances & Electronics"/>\
	    				</div>\
	    				<div>\
		    				<h5>Appliances & Electronics</h5>\
		    				<p>Affordable electronics and surge protection plans for your home.</p>\
		    				<a href="#" class="spz-get-started__cta appliances-electronics__cta">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658155256/AWR/4002-AWR-PHS-Home-Redesign/chevron-right.svg" alt="Chevron" /></a>\
	    				</div>\
	    			</div>\
	    		</div>\
    		</div>\
    	</div>\
	</div>').appendTo('.spz-4002 .spz-protection-plans');
}

function renderHowItWorks(){
	jQuery('.spz-4002 .trusted-accredited').removeClass('trusted-accredited container-fluid').addClass('spz-how-it-works').empty();
		jQuery('\
	<div class="container">\
    	<div class="spz-how-it-works__heading">\
    		<h1>How It Works</h1>\
    		<p>Get protection in just 3 simple steps</p>\
    	</div>\
    	<div class="spz-how-it-works__arrows"></div>\
    	<div class="spz-how-it-works__row row">\
    		<div class="col-md-3 col-sm-4 col-xs-12 spz-how-it-works__col">\
	    		<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/Register.png" alt="Register"/>\
	    		<div class="spz-how-it-works__info">\
	    			<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658221824/AWR/4002-AWR-PHS-Home-Redesign/how-it-works-1.svg" alt="Repair" class="spz-how-it-works__number"/>\
	    			<p>Register now and get protection<br/> from repair costs and hassles.</p>\
	    		</div>\
	    		<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658229685/AWR/4002-AWR-PHS-Home-Redesign/mobile-arrow-1.svg" class="spz-mobile__arrows top"/>\
    		</div>\
    		<div class="col-md-3 col-sm-4 col-xs-12 spz-how-it-works__col">\
	    		<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/Relax.png" alt="Relax"/>\
	    		<div class="spz-how-it-works__info">\
	    			<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658221824/AWR/4002-AWR-PHS-Home-Redesign/how-it-works-2.svg" alt="Repair" class="spz-how-it-works__number"/>\
	    			<p>Relax. Enjoy protection<br/> and peace of mind.</p>\
	    		</div>\
	    		<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658229685/AWR/4002-AWR-PHS-Home-Redesign/mobile-arrow-2.svg" class="spz-mobile__arrows bottom"/>\
    		</div>\
    		<div class="col-md-3 col-sm-4 col-xs-12 spz-how-it-works__col">\
	    		<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/Repair.png" alt="Repair"/>\
	    		<div class="spz-how-it-works__info">\
	    			<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658221824/AWR/4002-AWR-PHS-Home-Redesign/how-it-works-3.svg" alt="Repair" class="spz-how-it-works__number"/>\
	    			<p>If you need a repair, just call.<br/> We take care of everything!</p>\
	    		</div>\
    		</div>\
    	</div>\
    	<a href="https://www.yourhomesolutions.com/account/register" class="spz-get-started__cta link">Get Started</a>\
	</div>').appendTo('.spz-4002 .spz-how-it-works');
	
}

function renderFeedbackSlider(){
	jQuery('<div class="spz-testimonials"></div>').insertAfter('.spz-4002 .spz-how-it-works');
	jQuery('\
	<div class="feedback-slider">\
        <div class="feedback-container">\
            <div class="feedback-item">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/4002-AWR-PHS-Home-Redesign/Veronica_H_Connecticut.png" alt="Veronica H., Connecticut" class="feedback-image"/>\
                <div class="feedback-info">\
                    <div class="feedback-copy">I have had Pivotal Home Solutions for several years now and I would highly recommend them - whenever I have had problems - they are there to make it better!  I have the full home coverage, with furnace and air conditioner maintenance and my furnace is over 30 years old and still going strong! Keep up the good work Pivotal!</div>\
                    <div class="person-name">Veronica H., Connecticut </div>\
                    <div class="person-location">Heating and Cooling Maintenance</div>\
                </div>\
            </div>\
            <div class="feedback-item">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1659421880/AWR/4002-AWR-PHS-Home-Redesign/Pam-M-Illinois.png" alt="Pam M., Illinois" class="feedback-image"/>\
                <div class="feedback-info">\
                    <div class="feedback-copy">Pivotal Home Solutions has the best sewer/water policy. The customer service people are excellent in getting my information and passing it on to my plumbers. I have service within 24 hours, which in these days I consider excellent service.</div>\
                    <div class="person-name">Pam M., Illinois</div>\
                    <div class="person-location">Clogged Sewer Line</div>\
                </div>\
            </div>\
            <div class="feedback-item">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1659421880/AWR/4002-AWR-PHS-Home-Redesign/Dorothy-G-Ohio.png" alt="Dorothy G., Ohio" class="feedback-image"/>\
                <div class="feedback-info">\
                    <div class="feedback-copy">Pivotal Home Solutions helped me when I had issues with my dryer not heating. The company they sent out was timely, professional and diagnosed and resolved the problem the same day. I am pleased with their service. Each time I have used this company, I have had a positive experience.</div>\
                    <div class="person-name">Dorothy G., Ohio</div>\
                    <div class="person-location">Dryer Not Heating</div>\
                </div>\
            </div>\
        </div>\
    </div>').appendTo('.spz-4002 .spz-testimonials');
    jQuery('.spz-4002 .spz-testimonials .feedback-container').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
    })
}

function renderSidebar(){
	jQuery('.spz-4002 .navigation-sidebar__close').html('<img src="https://res.cloudinary.com/spiralyze/image/upload/v1658225192/AWR/4002-AWR-PHS-Home-Redesign/sidebar-close.svg" alt="Close button"/>');
	jQuery('.spz-4002 .navigation-sidebar__lists ul').empty();
	jQuery('\
	<li class="item__header"><a href="tel:8888015057">888-801-5057</a></li>\
	<li class="item__header"><a href="https://www.yourhomesolutions.com/pages/contact-us/">Contact Us</a></li>\
	<li class="item__header login"><a href="https://www.yourhomesolutions.com/account/login">Login /  </a><a href="https://www.yourhomesolutions.com/account/register" id="registerb">&nbsp;Create Account</a></li>\
	<li><a href="https://www.yourhomesolutions.com/pages/repair-maintenance">Warranty Plans</a></li>\
	<li><a href="https://payments.yourhomesolutions.com/phs_nps/WWGPage?WWGSessionIdx=1&WWGThreadIdx=1&WWGSubmitCounter=1">Make a Payment</a></li>\
	<li><a href="https://www.yourhomesolutions.com/pages/request-service">Request Service </a></li>\
	<li><a href="https://www.yourhomesolutions.com/pages/about-us">About US</a></li>\
	').appendTo('.spz-4002 .navigation-sidebar__lists ul');
	
	jQuery('<a href="#" class="spz-get-started__cta">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658155256/AWR/4002-AWR-PHS-Home-Redesign/chevron-right.svg" alt="Chevron" /></a>').appendTo('.spz-4002 .navigation-sidebar__lists');
}

function renderInputs(){
	jQuery('.spz-4002 input.zip_code_input').attr('placeholder', '').wrap('<div class="spz-md-wrap"></div>');
	jQuery('<label for="heroInput">Enter Your Zip Code</label>').prependTo('.spz-4002 .spz-body__zip-wrapper .spz-md-wrap');
	jQuery('<label for="modalInput">Enter Your Zip Code</label>').prependTo('.spz-4002 .spz-modal #spz-zipcode_header .spz-md-wrap');
	
	jQuery('<span class="spz-error-msg">Please enter valid zip code</span>').appendTo('.spz-4002 .spz-body__zip-wrapper .spz-md-wrap, .spz-4002 .spz-modal #spz-zipcode_header .spz-md-wrap');
	
	jQuery('.spz-4002 .spz-md-wrap input').focus(function(){
		jQuery(this).closest('.spz-md-wrap').addClass('focused');
	})
	jQuery('.spz-4002 .spz-md-wrap input').keyup(function(){
		jQuery(this).removeClass('error');
	})
	jQuery('.spz-4002 .spz-md-wrap input').blur(function(){
		if(jQuery(this).val() != "") {
			jQuery(this).closest('.spz-md-wrap').removeClass('focused')
			jQuery(this).closest('.spz-md-wrap').addClass('has-value')
		} else {
			jQuery(this).closest('.spz-md-wrap').removeClass('focused')
			jQuery(this).closest('.spz-md-wrap').removeClass('has-value')
		}
	});
	setInterval(function() {
        var fields = jQuery('.spz-4002 .spz-md-wrap input');
        for (var i = 0; i < fields.length; i++) {
            if (jQuery(fields[i]).hasClass('error')) {
                jQuery(fields[i]).closest('.spz-md-wrap').addClass('has-error');
            } else {
                jQuery(fields[i]).closest('.spz-md-wrap').removeClass('has-error');
            }
            
            if(jQuery(fields[i]).val() != "") {
				jQuery(fields[i]).closest('.spz-md-wrap').addClass('has-value')
			} else {
				jQuery(fields[i]).closest('.spz-md-wrap').removeClass('has-value')
			}
        }
    }, 0);
}