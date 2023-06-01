var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('spz-111')) {
                jQuery('body').addClass('spz-111');
            }

            MktoForms2.whenReady(function (form) {
                jQuery("#Country").find('option:first-child').text('Choose a country');
                jQuery("#LblEmail").text('Company Email');
                removeColumn();
            });

            jQuery("body").on("focus", '#mktoForm_4818 input , #mktoForm_4818 select', function () {
                jQuery(this).closest('div').addClass('focus');
                removeColumn();
            }).on("blur", '#mktoForm_4818 input , #mktoForm_4818 select', function () {
                jQuery(this).closest('div').removeClass('focus');
                removeColumn();
            });
        });
    }
});

function removeColumn() {
    let column = setInterval(() => {
        jQuery('.mktoLabel:contains(":")').each(function () {
            jQuery(this).html(jQuery(this).html().split(":").join(""));
        });
    }, 100);
    setTimeout(() => {
        clearInterval(column);
    }, 2000);
}

window.onload = function () {
    jQuery('body').addClass('loaded');
};
