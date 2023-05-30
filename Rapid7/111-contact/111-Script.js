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

            $("#formBlock").find('[input-name="parent-jobLevel"], [input-name="parent-contactType"], #contactTypeSecondaryParent').removeClass('filled');
            $("#contactType").find('option:first-child').text('Select a reason');
            $("#jobLevel").find('option:first-child').text('Select a reason');
            document.getElementById("jobLevel").selectedIndex = "0";
        });
    }
});


window.onload = function () {
    jQuery('body').addClass('loaded');
};
