
var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);

        var vInt = setInterval(() => {
            if ($('#element-558 video').length == 1) {
                clearInterval(vInt)
                $("body").addClass("spz-3003");

                //  Hero Section Starts
                $('#element-558 .contents.cropped.item-block').html(`
                <div class="hero-video-poster">
            <div class="hero-poster-container">
                <picture>
                    <source media="(max-width: 599px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/3003/custom/assets/poster-mobile-min.png"> <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/3003/custom/assets/poster-desktop-min.png" alt="Find right audience at low CPA" draggable="false" class="hero-poster-video-bg"> </picture>
                <a href="javascript:void(0)" id="play-btn-hero" class="play-btn-hero"> <img class="play-btn-spz-hero" src="https://res.cloudinary.com/spiralyze/image/upload/v1690277730/Taboola/3003/custom/assets/play-button.svg" alt="Play" /> </a>
            </div>
        </div>`);
                $('#element-558').after(`<div id="spz-hero-modal" class="spz-hero-modal">
            <div class="hero-modal-content">
              <div class="modal-container">
                <span class="modal-close-button modal-display-topright">&times;</span>
                <video id="hero-video-spz"  width="100%" height="100%" controls poster="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/hero-desktop.jpg">
            <source src="https://res.cloudinary.com/spiralyze/video/upload/v1671108710/Taboola/2022%20%7C%20Landing%20Page/assets/video/Taboola_Intro-2022-v02.mp4" type="video/mp4"> Your browser does not support the video tag. </video>
              </div>
            </div>
          </div>
        </div>`);

                $('#play-btn-hero').click(function () {
                    $('.spz-hero-modal').addClass('fade-in');
                    $('body').addClass('hero-modal-open');
                    // $('#brand-video-spz').removeAttr('style');
                    $('#hero-video-spz').get(0).play();
                    // $("#audio-control").trigger('click');
                });

                $('.modal-close-button').click(function () {
                    $('.spz-hero-modal').removeClass('fade-in');
                    $('body').removeClass('hero-modal-open');
                    // $('#brand-video-spz').removeAttr('style');
                    $('#hero-video-spz').get(0).pause();
                    // $("#audio-control").trigger('click');
                });

                $("#spz-hero-modal").click(function (e) {
                    $('.modal-close-button').trigger('click');
                });
                $("#spz-hero-modal video").click(function (e) {
                    e.stopPropagation();
                });

                //  Hero Section Ends
            }
        }, 100);

    }
});