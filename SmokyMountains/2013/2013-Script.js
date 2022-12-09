console.log('I am here');

document.querySelector('head').insertAdjacentHTML("beforeend", `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`);


if (document.querySelectorAll('#reviews-container')) {
    const articles = document.querySelectorAll('#reviews-container .vl-reviews-item');
    if (articles) {
        if (window.innerWidth >= 1025) {
            document.querySelector('.vl-main__sidebar .vl-book').insertAdjacentHTML(`afterend`, '<div class="reviews-container-spz"><div class="reviews-container-title"><h2 class="vl-reviews__title">Traveler Reviews</h2><div class="vl-overview-rating"></div><div class="reviews-tags"><ul><li>Cleanliness</li> <li>Parking</li> <li>Breakfast</li> <li>Pets Policy</li> </ul></div></div>  <div class="reviews-container"></div> </div>');
        }
        else {
            document.querySelector('.vl-main__content .vl-overview').insertAdjacentHTML(`afterend`, '<div class="reviews-container-spz"><div class="reviews-container-title"><h2 class="vl-reviews__title">Traveler Reviews</h2><div class="vl-overview-rating"></div><div class="reviews-tags"><ul><li>Cleanliness</li> <li>Parking</li> <li>Breakfast</li> <li>Pets Policy</li> </ul></div></div>  <div class="reviews-container"></div> </div>');
        }
        let getReviewHTML = document.querySelector(".vl-main .vl-overview-rating");
        if (getReviewHTML) {
            let getReviewTitle = document.querySelector('.vl-overview-rating__title').textContent;
            let getReviewStars = document.querySelector('.vl-overview-rating__stars').outerHTML;

            const getReviewTitleArray = getReviewTitle.split(" (");

            if (getReviewTitleArray[0] == '5.0') {
                getReviewTitleArray[0] = '5';
            }

            getReviewHTML = getReviewStars + '<div class="vl-overview-rating__title"><strong>' + getReviewTitleArray[0] + '</strong>/5 (' + getReviewTitleArray[1] + '</div>';
            document.querySelector('.reviews-container-spz .vl-overview-rating').innerHTML = getReviewHTML;
        }
        for (var i = 0; i < 5; i++) {
            let cardText = articles[i].querySelector('.vl-reviews-item__content .vl-reviews-item__text > p').innerHTML;
            let cardUser = articles[i].querySelector('.vl-reviews-item-author').innerHTML;
            let cardRatings = articles[i].querySelector('.vl-reviews-item-rating__stars').innerHTML;

            document.querySelector('.reviews-container-spz .reviews-container').insertAdjacentHTML('beforeend', `<div class="review-card"> <div class="review-card-container">  <div class="vl-reviews-item__text"><p>` + cardText + `</p></div><div class="card-block">
            <div class="card-user">`+ cardUser + `</div><div class="card-star">` + cardRatings + `<div>
            <b><i><img src="https://smokymountains.com/wp-content/themes/smcom-2017/images/checkmark-green.png" alt="A green check mark graphic."></i> Verified Guest</b>

</div></div> </div> </div></div>`)
        }
    }
}


var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        const slickLib = document.createElement('script');
        slickLib.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
        document.head.appendChild(slickLib);

        jQuery(document).ready(function () {

            if (window.innerWidth < 1025) {
                if (document.querySelector('.reviews-container') && !document.querySelector('.reviews-container.slick-initialized')) {
                    jQuery('.reviews-container').slick({
                        arrows: false,
                        dots: true,
                        infinite: true,
                        speed: 1000,
                        autoplay: true,
                        autoplaySpeed: 1500,
                        slidesToShow: 2.25,
                        slidesToScroll: 1,
                        responsive: [{
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1.25,
                            }
                        }, {
                            breakpoint: 300,
                            settings: "unslick" // destroys slick
                        }]
                    });
                }
            }
        });
    }
});