$().ready(function () {
    $('.slick-carousel').slick({
        slidesToShow: 1.3,
        slidesToScroll: 1,
        arrows: true,
        // centerPadding: "0px",
        dots: true,
        infinite: false,
        variableWidth: true,
        responsive: [
            // {
            //     breakpoint: 1023,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     }
            // },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            }
        ]
    });
});