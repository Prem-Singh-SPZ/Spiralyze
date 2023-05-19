
jQuery(function ($) {
    $(document).ready(function () {
        console.log('18001 Test is ready..')
        $('.assesment_cta').on('click', function (e) {
            $('html, body').animate( {scrollTop: $($('.form-container-white')).offset().top - 50, }, 500, 'linear' );
        });

        if(600 < window.innerWidth < 1300){
            $('#lp-pom-image-1003 img').attr('src','https://res.cloudinary.com/spiralyze/image/upload/v1683828622/coveo/18001/768_logos.webp');
        }
    });
});