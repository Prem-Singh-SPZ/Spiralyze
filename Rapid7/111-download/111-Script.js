var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('spz-111')) {
                jQuery('body').addClass('spz-111');
            }

            jQuery("body").on("focus", '#formBlock input , #formBlock select', function () {
                jQuery(this).closest('dl').addClass('focus');
            }).on("blur", '#formBlock input , #formBlock select', function () {
                jQuery(this).closest('dl').removeClass('focus');
            });
            jQuery('.infoTxt.has-tip img').attr('src', '//res.cloudinary.com/spiralyze/image/upload/v1685111284/rapid7/111/icon-info.svg');
            jQuery('.infoTxt.has-tip img').attr('data-src', '//res.cloudinary.com/spiralyze/image/upload/v1685111284/rapid7/111/icon-info.svg');
        });
    }
});


window.onload = function () {
    jQuery('body').addClass('loaded');
};
