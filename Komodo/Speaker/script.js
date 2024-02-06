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

document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener('click', function (el) {
        if (el.target.classList.contains('accordion-button')) {

            document.querySelectorAll('.accordion-item').forEach(function (elem) {
                elem.querySelector('.accordion-button').classList.add('collapsed');
                if (elem.querySelector('.accordion-collapse.show')) {
                    elem.querySelector('.accordion-collapse.show').classList.remove('show');
                }
            })

            el.target.classList.toggle('collapsed');
            let id = el.target.getAttribute('data-bs-target');
            this.document.querySelector(id).classList.toggle('show');
        }
    },);
});

