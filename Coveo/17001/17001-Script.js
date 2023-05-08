
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





var coveoTestIDInterval = setInterval(function () {
    var coveotid = document.querySelector('input[name=coveoTestID]');
    if (coveotid.value == '') {
        clearInterval(coveoTestIDInterval);
        coveotid.value = '16001_Get_Coveo_Case_Study_Redesign_Variant';
    }
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
            $('#lp-pom-form-828 .lp-pom-form-field input').each(function () {
                var inputvalues = $(this).val();
                if (inputvalues == null || inputvalues == '') {
                    $(this).closest('.lp-pom-form-field').removeClass('filled');
                } else {
                    $(this).closest('.lp-pom-form-field').removeClass('error v_blank').addClass('filled');
                }

            });
            localStorage.removeItem('firstLoad');
        }
    }
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
});
$(".form-container-white .lp-pom-form-field select").change(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    if ($(this).val() == '') {
        $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }
});
$(".form-container-white .lp-pom-form-field select").focus(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
});
$(".form-container-white .lp-pom-form-field select").focusout(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    if ($(this).val() == '') {
        $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }
});
function validateEmail($email) {
    //var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test($email);
}


var allFields = document.querySelectorAll('.form-container-white .single-line-text, .form-container-white .drop-down, .form-container-white .email');

allFields.forEach(function (inputfield) {
    //console.log(inputfield);
    //inputfield.insertAdjacentHTML("beforeend", '<div class="errorline"></div>');
});


/* Submit Button Event */

var submitBtn = document.querySelector('.form-container-white .lp-pom-button[type=submit]');
submitBtn.addEventListener("click", function (event) {
    //console.log('submit');

    var allFields = document.querySelectorAll('.form-container-white input.single[required], .form-container-white select.single[required]');
    //console.log(allFields.length);
    var errorstate = 0;
    for (var i = 0; i < allFields.length; i++) {
        var thisInput = allFields[i];
        if (thisInput.value == '') {
            thisInput.closest('.lp-pom-form-field').classList.add('error');
            thisInput.focus();
            errorstate = 1;
            break;
        }
        else if (thisInput.value != '' && thisInput.classList.contains('form_elem_business_email')) {
            var valid = validateEmail(thisInput.value);
            //console.log(valid);
            if (valid == true) {
                thisInput.closest('.lp-pom-form-field').classList.remove('error');
                thisInput.closest('.lp-pom-form-field').classList.remove('email_error');
                thisInput.closest('.lp-pom-form-field').classList.add('filled');

            } else {
                thisInput.closest('.lp-pom-form-field').classList.add('error');
                thisInput.closest('.lp-pom-form-field').classList.add('email_error');
                thisInput.focus();
                errorstate = 1;
                break;
            }
        }
        //console.log(thisInput);
    }

    if (errorstate == 0) {
        submitBtn.closest('form').submit();
    }
    else {
        event.preventDefault();
    }

});
