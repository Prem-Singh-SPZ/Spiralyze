console.log('I am here');
if (document.querySelectorAll('#reviews-container')) {
    const articles = document.querySelectorAll('#reviews-container .vl-reviews-item');
    if (articles) {
        document.querySelector('.vl-main__sidebar .vl-book').insertAdjacentHTML(`afterend`, '<div class="reviews-container-spz"><div class="reviews-container-title"><h6 class="reviews-title"></h6><div class="reviews-star-rating"></div><div class="reviews-tags"></div></div>  <div class="reviews-container"></div> </div>');
        for (var i = 0; i < 5; i++) {
            let cardText = articles[i].querySelector('.vl-reviews-item__content .vl-reviews-item__text > p').innerHTML;
            let cardUser = articles[i].querySelector('.vl-reviews-item-author').innerHTML;
            let cardRatings = articles[i].querySelector('.vl-reviews-item-rating__stars').innerHTML;

            document.querySelector('.reviews-container-spz .reviews-container').insertAdjacentHTML('beforeend', `<div class="review-card"> <div class="review-card-container">  <div class="vl-reviews-item__text"><p>` + cardText + `</p></div><div class="card-block">
            <div class="card-user>"`+ cardUser + `</div><div class="card-star">` + cardRatings + `<div>
            <b><i><img src="https://smokymountains.com/wp-content/themes/smcom-2017/images/checkmark-green.png" alt="A green check mark graphic."></i> Verified Guest</b>

</div></div> </div> </div></div>`)
        }

    }
}