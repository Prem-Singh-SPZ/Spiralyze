(function () {
    let propCardHTML = '';

    document.querySelector('head').insertAdjacentHTML("beforeend", `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`);
    const slickLib = document.createElement('script');
    slickLib.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    getData();

    var jQueryInterval = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQueryInterval);
            document.head.appendChild(slickLib);
            jQuery(document).ready(function () {
                if (!jQuery("body").hasClass("spz_5004")) {
                    var cookieName = "5004-Featured-Properties"; var cookieValue = "1"; var myDate = new Date(); myDate.setDate(myDate.getDate() + 30);
                    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
                    checkAvailable();
                }
            });
        }
    });
    slickLib.onload = checkAvailable;
    function checkAvailable() {
        var checkLoad = setInterval(function () {
            if (jQuery("#results-container").find('.vms-results-item')) {
                jQuery("body").addClass("spz_5004");
                console.log('Test is running..');
                if (document.querySelectorAll('.featured-products-spz').length < 1) {
                    document.querySelector('#results-container').insertAdjacentHTML('beforebegin', `<div class="top-ranked"><h6>Top Ranked Properties</h6><div class="featured-products-spz vms-results__container"></div></div>`);
                    document.querySelector('#results-container').insertAdjacentHTML('beforebegin', `<div class="featured-products-dummy" style="display:none;"></div>`);
                    document.querySelector('.featured-products-dummy').insertAdjacentHTML('afterbegin', propCardHTML.innerHTML);
                    document.querySelectorAll('.featured-products-dummy .vms-results-item').forEach(function (element, index) {
                        if (index < 10) {
                            document.querySelector('.featured-products-spz').insertAdjacentHTML('beforeend', element.outerHTML);
                        }
                    })
                    document.querySelectorAll('.featured-products-spz .vms-results-item').forEach(function (element, index) {
                        element.classList.add('spz-prop-card');
                        element.classList.remove('vms-results-item');
                        let img = element.querySelector('.vms-results-item__thumb');
                        let summary = element.querySelector('.vms-results-item__summary');
                        let title = element.querySelector('.vms-results-item__title');
                        let meta = element.querySelector('.vms-results-item__meta');
                        element.insertAdjacentHTML('afterbegin', `<div class='spz-card-img'>` + img.outerHTML + `</div>`);
                        element.insertAdjacentHTML('beforeend', `<div class='spz-card-content'>` + title.outerHTML + summary.outerHTML + meta.outerHTML + `</div>`);
                        img.remove();
                        summary.remove();
                        title.remove();
                        meta.remove();
                    })
                    document.querySelectorAll('.featured-products-spz .spz-prop-card').forEach(function (v, i) {
                        v.querySelector('.spz-card-content .vms-results-item__meta .vms-results-item__price').innerHTML = v.querySelector('.spz-card-content .vms-results-item__meta .vms-results-item__price').innerHTML.replace('/Night ', ' night');
                        let ratings = v.querySelector('.spz-card-content .vms-results-item__meta .vms-results-item-rating .vms-results-item-rating__title').textContent.split('/');
                        v.querySelector('.spz-card-content .vms-results-item__meta .vms-results-item-rating .vms-results-item-rating__title').textContent = ratings[0];
                    });
                }
                // slickLib.onload = function () {
                if (document.querySelector('.featured-products-spz') && !document.querySelector('.featured-products-spz.slick-initialized .slick-track')) {
                    jQuery('.featured-products-spz').slick({
                        arrows: true,
                        dots: true,
                        infinite: false,
                        speed: 1000,
                        // autoplay: true,
                        // autoplaySpeed: 2000,
                        slidesToShow: 2.842,
                        // centerMode: false,
                        slidesToScroll: 1,
                        prevArrow: '<button class="slide_arrow prev-arrow"><img src="//res.cloudinary.com/spiralyze/image/upload/v1671021183/SmokyMountains/5004/assets/Arrow-left.svg" alt="Previous" /></button>',
                        nextArrow: '<button class="slide_arrow next-arrow"><img src="//res.cloudinary.com/spiralyze/image/upload/v1671021183/SmokyMountains/5004/assets/Arrow-right.svg" alt="Next" /></button>',

                        responsive: [{
                            breakpoint: 1366,
                            settings: {
                                slidesToShow: 2.25,
                            }
                        }, {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1.51,
                            }
                        }, {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1.148,
                            }
                        }, {
                            breakpoint: 300,
                            settings: "unslick" // destroys slick
                        }]
                    });
                }
                // }

                if (document.querySelector('.featured-products-spz.slick-initialized .slick-track .spz-prop-card')) {
                    clearInterval(checkLoad);
                    document.querySelector('.featured-products-spz.slick-initialized .next-arrow').onclick = function () {
                        if (document.querySelector('.featured-products-spz.slick-initialized .next-arrow').classList.contains('slick-disabled')) {
                            document.querySelector('.featured-products-spz.slick-initialized .slick-list').classList.add('right-shadow-disable');
                        }
                    };
                    document.querySelector('.featured-products-spz.slick-initialized .prev-arrow').onclick = function () {
                        if (document.querySelector('.featured-products-spz.slick-initialized .slick-list').classList.contains('right-shadow-disable')) {
                            document.querySelector('.featured-products-spz.slick-initialized .slick-list').classList.remove('right-shadow-disable');
                        }
                    };
                    document.querySelector('.featured-products-spz.slick-initialized .slick-dots li:last-child').onclick = function () {
                        if (document.querySelector('.featured-products-spz.slick-initialized .next-arrow').classList.contains('slick-disabled')) {
                            document.querySelector('.featured-products-spz.slick-initialized .slick-list').classList.add('right-shadow-disable');
                        }
                    };
                    jQuery(".featured-products-spz.slick-initialized .slick-dots li:not(:last-child)").click(function () {
                        if (document.querySelector('.featured-products-spz.slick-initialized .slick-list').classList.contains('right-shadow-disable')) {
                            document.querySelector('.featured-products-spz.slick-initialized .slick-list').classList.remove('right-shadow-disable');
                        }
                    });
                }
            }
        }, 100);
    }
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            jQuery("body").removeClass("spz_5004");
            checkAvailable();
        }
    }).observe(document, { subtree: true, childList: true });

    async function getData() {
        await fetch('https://smokymountains.com/search/?srt=RHF').then(function (response) {
            // The API call was successful!
            return response.text();
        }).then(function (html) {
            // Convert the HTML string into a document object
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            propCardHTML = doc.querySelector('#results-container');

            return propCardHTML;
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    }
})()