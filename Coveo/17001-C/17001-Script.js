
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
        $(".ub-input-item#country, .ub-input-item#stateprovince").find('option:first-child').text('');

        document.querySelector('.ai-section-cta').addEventListener('click', function () {
            document.querySelector('.form-container-white').scrollIntoView({
                behavior: 'smooth'
            });
        });

        $('.partner-logos-sections').width($('body').innerWidth());
        let diff = convert_positive($(".partner-logos-sections").offset().left);
        $('.partner-logos-sections').css('left', diff);
        function convert_positive(a) {
            a = a * -1;
            return a;
        }

        var content = document.createElement("script");
        content.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
        document.head.appendChild(content);
        content.onload = function () {
            $('.static-card-slider .slider-1').slick({
                speed: 5000,
                draggable: false,
                autoplaySpeed: 0,
                cssEase: 'linear',
                variableWidth: true,
                infinite: true,
                arrows: false,
                buttons: false,
                swipe: false,
                loop: true
            });
            $('.static-card-slider .slider-3').slick({
                speed: 5000,
                draggable: false,
                autoplaySpeed: 0,
                cssEase: 'linear',
                variableWidth: true,
                infinite: true,
                arrows: false,
                buttons: false,
                swipe: false,
                loop: true
            });
            $('.static-card-slider .slider-2').slick({
                speed: 5000,
                draggable: false,
                autoplaySpeed: 0,
                cssEase: 'linear',
                variableWidth: true,
                infinite: true,
                arrows: false,
                buttons: false,
                loop: true,
                swipe: false,
                rtl: true
            });
            setTimeout(() => {
                $('.partner-logos-sections').css('opacity', 1);
            }, 100);

            $(document).on('touchstart touchend', '.slider-1, .slider-2, .slider-3', function () {
                $(this).slick('play');
            });

            $('.slider-1, .slider-2, .slider-3').hover(function () {
                $(this).slick('play');
            }, function () {
                $(this).slick('pause');
            });
        }
    });

});


navigator.sayswho = (function () {
    var ua = navigator.userAgent;
    var tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);

    var htmltag = document.querySelector('html');
    htmltag.classList.add(M[0]);

    return M.join('-');
})();


(function () {
    if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
            localStorage['firstLoad'] = true;
            window.location.reload();
        }
        else {
            document.getElementById("country").selectedIndex = "0";
            // $("#country").attr('autocomplete', 'dont');
            // $("form").attr('autocomplete', 'dont');
            $('.form-inner-fields.has-axis .lp-pom-form-field input').each(function () {
                $(this).val('');
                // $(this).attr('autocomplete', 'dont');
            });
            localStorage.removeItem('firstLoad');
        }
    }
    $('body').addClass('spz-17001-C');
})();

//document.getElementById("country").selectedIndex = "0";
$(".form-container-white .lp-pom-form-field input").focus(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
});
$(".form-container-white .lp-pom-form-field input").keyup(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
});
$(".form-container-white .lp-pom-form-field input").focusout(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    var inputvalues = $(this).val();
    if (inputvalues == null || inputvalues == '') {
        $(this).closest('.lp-pom-form-field').addClass('error v_blank');
        $(this).closest('.lp-pom-form-field').removeClass('filled');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error v_blank').addClass('filled');
    }
    if (inputvalues != null && inputvalues != '' && $(this).attr('id') == 'business_email') {
        valid = validateEmail($(this));
        if (valid == true) {
            $(this).closest('.lp-pom-form-field').removeClass('error email_error').addClass('filled');
        } else {
            $(this).closest('.lp-pom-form-field').addClass('error email_error');
            $(this).closest('.lp-pom-form-field').removeClass('filled');
        }
    }
});
$(".form-container-white .lp-pom-form-field input").blur(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    var inputvalues = $(this).val();
    if (inputvalues == null || inputvalues == '') {
        $(this).closest('.lp-pom-form-field').removeClass('email_error');
        $(this).closest('.lp-pom-form-field').addClass('error v_blank');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error v_blank').addClass('filled');
    }


    if (inputvalues != null && inputvalues != '' && $(this).attr('id') == 'business_email') {
        //console.log('filled-validate email');
        valid = validateEmail($(this).val());
        if (valid == true) {
            $(this).closest('.lp-pom-form-field').removeClass('error email_error').addClass('filled');
        } else {
            $(this).closest('.lp-pom-form-field').addClass('error email_error');
        }
    }
});
$('.form-container-white .lp-pom-form-field .lp-form-label').each(function () {
    val = $(this).html(); val = val.replace("&nbsp;", ""); $(this).html(val);
});
$(".lp-pom-form-field select > option:first-child").text('');
//$(".lp-pom-form-field #country > option:first-child").attr('selected','selected');
$(".form-container-white .lp-pom-form-field select").click(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
    /*if($(this).val() == '') {
        $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    }else{
        $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }*/
    validateState();
});
$(".form-container-white .lp-pom-form-field select").change(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    if ($(this).val() == '') {
        $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }
    validateState();
});
$(".form-container-white .lp-pom-form-field select").focus(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
    validateState();
});
$(".form-container-white .lp-pom-form-field select").focusout(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    if ($(this).val() == '') {
        $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }
    validateState();
});
function validateState() {
    if (document.getElementById("country").selectedIndex == 1 || document.getElementById("country").selectedIndex == 2) {
        document.getElementById("stateprovince").setAttribute('required', 'required');
    }
}
function validateEmail($email) {
    //var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test($email);
}
$(".form-container-white .lp-pom-form-field input").keyup(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    var inputvalues = $(this).val();
    if (inputvalues == null || inputvalues == '') {
        $(this).closest('.lp-pom-form-field').removeClass('email_error');
        $(this).closest('.lp-pom-form-field').addClass('error v_blank');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error v_blank').addClass('filled');
    }


    if (inputvalues != null && inputvalues != '' && $(this).attr('id') == 'business_email') {
        //console.log('filled-validate email');
        valid = validateEmail($(this).val());
        if (valid == true) {
            $(this).closest('.lp-pom-form-field').removeClass('error email_error').addClass('filled');
        } else {
            $(this).closest('.lp-pom-form-field').addClass('error email_error');
        }
    }
});


var allFields = document.querySelectorAll('.form-container-white .single-line-text, .form-container-white .drop-down, .form-container-white .email');
