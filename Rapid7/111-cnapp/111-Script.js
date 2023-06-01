var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('spz-111')) {
                jQuery('body').addClass('spz-111');
            }

            // let setLabel = setInterval(() => {
            //     addOption();
            // }, 100);
            // setTimeout(() => {
            //     clearInterval(setLabel);
            // }, 5000);
            removeColumn();
            jQuery("body").on("focus", '#mktoForm_6455 input , #mktoForm_6455 select', function () {
                jQuery(this).closest('div').addClass('focus');
                removeColumn();
            }).on("blur", '#mktoForm_6455 input , #mktoForm_6455 select', function () {
                jQuery(this).closest('div').removeClass('focus');
                if (jQuery(this).val() == "" || jQuery(this).val() == null || jQuery(this).val() == '0') {
                    jQuery(this).closest('div').addClass('invalidValidation');
                    jQuery(this).closest('div').removeClass('valid');
                }
                else {
                    jQuery(this).closest('div').removeClass('invalidValidation');
                    jQuery(this).closest('div').addClass('valid');
                }
                removeColumn();
            });
            // jQuery("#mktoForm_6455 select").change(function () {
            //     addOption();
            // });
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
    }, 1000);
    // addOption();
}

// function addOption() {
//     let column = setInterval(() => {
//         jQuery("#Country").find('option:first-child').text('Country');
//         jQuery("#JobLevel").find('option:first-child').text('Job Level');
//         jQuery("#State").find('option:first-child').text('State/Province');
//     }, 50);
//     setTimeout(() => {
//         clearInterval(column);
//     }, 300);
// }

window.onload = function () {
    jQuery('body').addClass('loaded');
};
