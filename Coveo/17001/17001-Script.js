
jQuery(function ($) {
    $(".ub-input-item").focus(function () {
        $(this).parent().addClass('focus');
    });

    $(".ub-input-item").hover(function () {
        $(this).parent().addClass('hovered');
    }, function () {
        $(this).parent().removeClass('hovered');
    });

    $(".ub-input-item").blur(function () {
        $(this).parent().removeClass('focus');
        if ($(this).val() == undefined || $(this).val() == null || $(this).val() == '') {
            $(this).parent().addClass('error-field');
            $(this).parent().removeClass('filled');
        }
        else {
            $(this).parent().addClass('filled');
            $(this).parent().removeClass('error-field');
        }
        // console.log($(this).val());
    });

    $(document).ready(function () {
        $(".ub-input-item#country, .ub-input-item#stateprovince").find('option:first-child').text('')
    });
});