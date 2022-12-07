var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    if (window.location.href.indexOf("/checkout/step-one/") > -1) {
        var cookieName = "3002-Checkout-Urgency-Messaging"; var cookieValue = "1"; var myDate = new Date(); myDate.setDate(myDate.getDate() + 30); document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
        checkAvailable();
    }
});

function checkAvailable() {
    var checkLoad = setInterval(function () {
        var bodytag = document.querySelector('body');
        if (!bodytag.classList.contains("spz_test_3002")) {
            clearInterval(checkLoad);
            bodytag.classList.add("spz_test_3002");
            //console.log('checkAvailable');
            test3002_init();
        }
    });
}

function test3002_init() {
    // console.log('test3002_init');
    var hcUrgencyText = document.querySelector('.hc-main-notifications .hc-main-notifications__text');

    if (hcUrgencyText) {
        var textUpdated = setInterval(function () {
            if (!hcUrgencyText.classList.contains('text_updated')) {
                clearInterval(textUpdated);
                hcUrgencyText.innerHTML = '<strong>Act fast!</strong> Smoky Mountains properties are <strong>79% booked</strong> for your selected dates.';
                hcUrgencyText.classList.add('text_updated');
                if (document.querySelectorAll('.hc-main-notifications-2').length == 0) {
                    var hcUrgencyBar = document.querySelector('.hc-main__header .hc-main-notifications').innerHTML;
                    document.querySelector('.hc-agree__container .hc-agree-secure').insertAdjacentHTML('afterend', `<div class="hc-main-notifications hc-main-notifications-2">` + hcUrgencyBar + `</div>`);
                }
            }
        });
    }
}
