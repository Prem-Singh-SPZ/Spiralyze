var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('spz-111')) {
                jQuery('body').addClass('spz-111');
            }

            MktoForms2.whenReady(function (form) {
                $("#Country").find('option:first-child').text('Choose a country');
                $("#LblEmail").text('Company Email');
                $('.mktoLabel:contains(":")').each(function(){
                    $(this).html($(this).html().split(":").join(""));
                });
            });

            jQuery("body").on("focus", '#mktoForm_4818 input , #mktoForm_4818 select', function () {
                jQuery(this).closest('div').addClass('focus');
            }).on("blur", '#mktoForm_4818 input , #mktoForm_4818 select', function () {
                jQuery(this).closest('div').removeClass('focus');
            });
        });
    }
});


window.onload = function () {
    jQuery('body').addClass('loaded');
};
