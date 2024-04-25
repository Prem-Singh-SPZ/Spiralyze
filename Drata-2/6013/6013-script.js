const int_6013 = setInterval(() => {
    if (document.querySelectorAll('.integrations-section .integrations-logo-slider').length > 0) {
        clearInterval(int_6013);
    }
}, 100);

function createTest() {
   //Rearrange the elements
    document.querySelector('.hero-section').insertAdjacentElement('afterend', document.querySelector('.how-works-section'));
    document.querySelector('.review-section.desk').insertAdjacentElement('beforebegin', document.querySelector(".integrations-section"));
}
