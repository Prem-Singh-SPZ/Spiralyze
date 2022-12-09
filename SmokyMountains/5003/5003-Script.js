
var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        checkAvailable();
        jQuery(document).ready(function () {
            if (!jQuery("body").hasClass("spz_5003")) {
                var cookieName = "5003_Sticky_Filter"; var cookieValue = "1"; var myDate = new Date(); myDate.setDate(myDate.getDate() + 30);
                document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
            }
        });
    }
});
function checkAvailable() {
    var checkLoad = setInterval(function () {
        if (jQuery(".vms-filter__container").length > 0) {
            clearInterval(checkLoad);
            jQuery("body").addClass("spz_5003");
            console.log('i m here')
            document.querySelector("#main .header.header--fluid").classList.remove('header--sticky');
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
                getAll: (searchParams, prop) => console.log(searchParams.entries()),
            });

            let checkInDate = formatDate(params.checkin);
            let checkOutDate = formatDate(params.checkout);
            let guests = params.guests;
            let beds = params.beds;
            let locations = params.smc.split('|').length;
            let ameneties = params.sma.split('|').length;
            let type = params.smt;
            console.log(checkInDate, checkOutDate, guests , beds , locations , ameneties , type);
        }
    });
}
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        jQuery("body").removeClass("spz_5003");
        checkAvailable();
    }
}).observe(document, { subtree: true, childList: true });

function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString("en-US", options);
}