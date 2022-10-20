jQuery(document).ready(function () {
    jQuery('body').addClass('spz-1001')
    //jQuery('<script id="google-slide-script" src="https://res.cloudinary.com/spiralyze/raw/upload/v1651267335/AWR/1001/google_slider.js"></script>').appendTo('head')
    jQuery('<link id="google-slide-css" rel="stylesheet" type="text/css" href="https://res.cloudinary.com/spiralyze/raw/upload/v1651267335/AWR/1001/google_slider.css">').appendTo('body')
    setInterval(function(){
    if(!document.querySelector('.feedback-container.slick-initialized')){
              console.log('123')
              jQuery('.feedback-container').slick({
                    arrows: false,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    speed: 1000,
                })
            }
    })
    var reviewsLoaded = setInterval(function () {
        if (jQuery('main.content hos-category').length > 0 && window.location.href === "https://www.awrusa.com/" && !jQuery('.spz-protection-section').length>0) {
            jQuery('main.content hos-category').append('<div class="spz-protection-section">\
            <div class="protection-heading">Protection Plans</div>\
            <div class="protection-subheading">Starting from $5.49 per month</div>\
            <div class="plans-wrap">\
                <div class="plan-item">\
                    <div class="plan-image-wrap">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-protection.png" alt="Water Line Protection Program" class="plan-image" />\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-icon.png" alt="plan icon" class="plan-icon" />\
                    </div>\
                    <div class="plan-name">Water Line<br> Protection Program</div>\
                    <div class="plan-desc">Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.</div>\
                    <div class="plan-price">Starts at <b>$5.49</b> / month</div>\
                    <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                </div>\
                <div class="plan-item">\
                    <div class="plan-image-wrap">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-protection.png" alt="Sewer Line Protection Program" class="plan-image" />\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-icon.png" alt="plan icon" class="plan-icon" />\
                    </div>\
                    <div class="plan-name">Sewer Line Protection Program</div>\
                    <div class="plan-desc">Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.</div>\
                    <div class="plan-price">Starts at <b>$9.00</b> / month</div>\
                    <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                </div>\
                <div class="plan-item recommended">\
                    <div class="plan-image-wrap">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-sewer-protection.png" alt="Water Line and Sewer Line Protection Program" class="plan-image" />\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewerandwater-icon.png" alt="plan icon" class="plan-icon" />\
                    </div>\
                    <div class="plan-name">Water Line and Sewer Line Protection Program</div>\
                    <div class="plan-desc">Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks.</div>\
                    <div class="plan-price">Starts at <b>$12.49</b> / month <span>(Save $2.00)</span></div>\
                    <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                </div>\
            </div>\
        </div>\
        <div class="spz-how-it-works">\
            <div class="how-heading">How It Works</div>\
            <div class="how-subheading">Get protection in just 3 simple steps </div>\
            <div class="how-wrap">\
                <div class="how-item">\
                    <div class="how-num">1</div>\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320958/AWR/1001/user.svg" alt="Register now and get protection from repair costs and hassles." class="how-image"/>\
                    <div class="how-desc">Register now and get protection from repair costs and hassles.</div>\
                </div>\
                <div class="how-item">\
                    <div class="how-num">2</div>\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/phone-ringing_1.svg" alt="If you need a repair, just call us! We arrange everything for you." class="how-image"/>\
                    <div class="how-desc">If you need a repair, just call us! We arrange everything for you.</div>\
                </div>\
                <div class="how-item">\
                    <div class="how-num">3</div>\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320956/AWR/1001/relax.svg" alt="Relax. Enjoy protection and peace of mind." class="how-image"/>\
                    <div class="how-desc">Relax. Enjoy protection and peace of mind.</div>\
                </div>\
            </div>\
            <div class="spz-get-started-btn">Get Started</div>\
        </div>\
        <div class="feedback-slider">\
            <div class="feedback-container">\
                <div class="feedback-item">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320969/AWR/1001/barbara-r.png" alt="Barbara R." class="feedback-image"/>\
                    <div class="feedback-info">\
                        <div class="feedback-copy">So glad we signed up for this program best thing we ever did as homeowners!</div>\
                        <div class="person-name">Barbara R.</div>\
                        <div class="person-location">New York - Water Line Leak</div>\
                    </div>\
                </div>\
                <div class="feedback-item">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/carol-m.png" alt="Carol M." class="feedback-image"/>\
                    <div class="feedback-info">\
                        <div class="feedback-copy">My neighbors spent thousands for the same work.</div>\
                        <div class="person-name">Carol M.</div>\
                        <div class="person-location">Oklahoma - Sewer Line Blockage</div>\
                    </div>\
                </div>\
                <div class="feedback-item">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/theodora-d.png" alt="Theodora D." class="feedback-image"/>\
                    <div class="feedback-info">\
                        <div class="feedback-copy">You saved us thousands!</div>\
                        <div class="person-name">Theodora D.</div>\
                        <div class="person-location">Iowa - Leaking Valve</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="companies-section">\
            <div class="companies-heading">Protect Your Customers From the Unexpected</div>\
            <div class="companies-subheading">We partner with cities, utilities and private companies of all sizes across the nation to provide peace of mind to their homeowners, customers and members. Get more information about becoming a partner.</div>\
            <div class="companies-wrap">\
                <picture>\
                    <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies.png">\
                    <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies-tablet.png">\
                    <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies-mobile.png">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies.png" alt="companies">\
                </picture>\
            </div>\
            <div class="call-us">\
                <div class="call-us-heading">To learn more about partnering with us call</div>\
                <a href="tel:18009311548"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/phone-icon.svg" alt="tel icon"/> 1-800-931-1548</a>\
            </div>\
        </div>\
        <div class="spz-popup">\
                <div class="spz-overlay"></div>\
                <div class="popup-form">\
<div class="close-button"></div>\
                    <div class="form-heading">With Us, Your Home\'s Protected</div>\
                    <div class="form-subheading">Find Your Protection Plan</div>\
                    <div class="input-wrap">\
                        <div class="spz-button-submit">Get Started</div>\
                    </div>\
                </div>\
        </div>')//.insertAfter('.google_review')
            jQuery('.spz-button-submit').click(function () {
                jQuery('.search-bar .search .get-started-btn').click()
                var errorMoved = setInterval(function () {
                    if (jQuery('.spz-popup').hasClass('popup-visible') && jQuery('.error-zipcode.invalid-error')) {
                        clearInterval(errorMoved)
                        jQuery('.error-zipcode.invalid-error').insertBefore('.spz-button-submit')
                    }
                })
            })
            jQuery('.spz-get-started-btn').click(function () {
                window.location.href = 'https://www.awrusa.com/user/register'
            })
            jQuery('.plan-button').click(function () {
                jQuery('.hero-slider hos-google-places .search-bar .search-zipcode').insertBefore('.spz-button-submit')
                jQuery('.spz-popup').addClass('popup-visible')
                jQuery('body').css('overflow', 'hidden')
            })
            jQuery('body').on("click", ".spz-popup .popup-form .input-wrap .spz-button-submit", function(){
                const oldLocation = window.location.pathname;
                const _overflow = setInterval(function(){
                    var newLocation = window.location.pathname;
                    if(oldLocation !== newLocation){
                        clearInterval(_overflow);
                        jQuery('body').css('overflow', ''); 
                    }
                    
                },100);
            })
            jQuery('.spz-overlay, .close-button').click(function () {
                jQuery('.form-inline .form-group').append(jQuery('.popup-form .search-zipcode'))
                jQuery('.spz-popup').removeClass('popup-visible')
                jQuery('body').css('overflow', '')
                var errorMovedBack = setInterval(function () {
                    if (!jQuery('.spz-popup').hasClass('popup-visible') && jQuery('.spz-popup .error-zipcode')) {
                        clearInterval(errorMovedBack)
                        jQuery('.spz-popup .error-zipcode.invalid-error').insertAfter('.search-bar form.search')
                    }
                })
            })
        }
    })
})