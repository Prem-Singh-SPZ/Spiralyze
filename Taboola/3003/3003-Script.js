// Detect mac or windows

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
} else {
    $("body").addClass("pc");
}

var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
var is_chrome = !!window.chrome && !is_opera && !is_Edge;
var is_firefox = typeof window.InstallTrigger !== 'undefined';
if (is_chrome) {
    $('body').addClass('chrome');
} else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    $('body').addClass('safari');
} else if (is_firefox) {
    $('body').addClass('firefox');
}

var vInt = setInterval(() => {
    if ($('#element-558 video').length == 1) {
        clearInterval(vInt)
console.log('hello')
        //  Hero Section Starts
        $('#element-558 .contents.cropped.item-block').html(`
            <video id="hero-video-spz" width="100%" height="100%" controls   poster="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/hero-desktop.jpg">
                <source src="https://res.cloudinary.com/spiralyze/video/upload/v1671108710/Taboola/2022%20%7C%20Landing%20Page/assets/video/Taboola_Intro-2022-v02.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <a href="javascript:void(0)" id="audio-control">
                <img class="mute-unmute-vdo-spz --mute" src="https://res.cloudinary.com/spiralyze/image/upload/v1671109932/Taboola/2022%20%7C%20Landing%20Page/assets/mute.svg" />
                <img class="mute-unmute-vdo-spz --unmute" src="https://res.cloudinary.com/spiralyze/image/upload/v1671109932/Taboola/2022%20%7C%20Landing%20Page/assets/unmute.svg" />
                <img class="mute-unmute-vdo-spz --mute-hover" src="https://res.cloudinary.com/spiralyze/image/upload/v1671109932/Taboola/2022%20%7C%20Landing%20Page/assets/mute-hover.svg" />
                <img class="mute-unmute-vdo-spz --unmute-hover" src="https://res.cloudinary.com/spiralyze/image/upload/v1671109932/Taboola/2022%20%7C%20Landing%20Page/assets/unmute-hover.svg" />
            </a>

            <div class="scroll-arrow-container z-index-3">
                <a href="#element-559">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 64 64" stroke-width="3"><g stroke-width="3" transform="translate(0, 0)"><polyline class="arrow-path" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points="44,26 32,38 20,26 " stroke-linejoin="miter"></polyline></g></svg>
                </a>
            </div>`);


        $("#audio-control").click(function () {
            if ($("#hero-video-spz").prop('muted')) {
                $("#hero-video-spz").prop('muted', false);
                $(this).addClass('unmute-video');
                $('#brand-video-spz').prop('muted', true);

            } else {
                $("#hero-video-spz").prop('muted', true);
                $(this).removeClass('unmute-video');
            }
        });
        //  Hero Section Ends

        if (window.innerWidth > 1024) {
            $('#hero-video-spz').attr('poster', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/hero-desktop.jpg')
        } else if (window.innerWidth > 767 && window.innerWidth <= 1024) {
            $('#hero-video-spz').attr('poster', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/hero-tablet.jpg')
        } else if (window.innerWidth < 768) {
            $('#hero-video-spz').attr('poster', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/hero-mobile.jpg')
        }

        // Brands Section Start
        $('#element-596 img.item-content-box').replaceWith(`
        <div class="brand-video-wrapper-spz">
            <div class="bv-img-spz">
                <a href="javascript:void(0)" id="play-btn-link" class="play-btn-link">
                    <img class="play-btn-spz" src="https://res.cloudinary.com/spiralyze/image/upload/v1671600174/Taboola/2022%20%7C%20Landing%20Page/assets/play-btn.svg" alt="Play" />
                </a>
                <img class="bv-video-bg" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/video-2-bg.jpg" alt="Brand Success" draggable="false" />
                <img class="bv-video-bg-hover" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/video-2-bg-hover.jpg" alt="Brand Success" draggable="false" />
            </div>
            <video id="brand-video-spz" style="display: none" width="100%" height="100%" controls controlsList="nodownload">
                <source src="https://res.cloudinary.com/spiralyze/video/upload/v1671112964/Taboola/2022%20%7C%20Landing%20Page/assets/video/Goodgame_Studios_Finds_New_Quality_Users_with_Taboola-edited_Short_-Qe0hhkVw7zg-1080p-1655098551848.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        `);

        $('#play-btn-link').click(function () {
            $('.bv-img-spz').css('display', 'none');
            $('#brand-video-spz').removeAttr('style');
            $('#brand-video-spz').get(0).play();
            $("#audio-control").trigger('click');
        });
        // Brands Section Ends
    }
}, 100);

$(".faq-question").on("click", function () {
    if ($(this).closest('.faq-singular').hasClass("active")) {
        $(this).parent().removeClass("active");
    } else {
        $(".faq-singular").removeClass("active");
        $(this).closest('.faq-singular').addClass("active");
    }
});

// FORM

$('#element-533 form input#field-30a5faf34b56001db50ce824fa0ecc0e-0, #element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-0"]').wrapAll('<div class="input_field field-0"></div>');
$('#element-533 form input#field-30a5faf34b56001db50ce824fa0ecc0e-1, #element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-1"]').wrapAll('<div class="input_field field-1"></div>');
$('#element-533 form input#field-30a5faf34b56001db50ce824fa0ecc0e-2, #element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-2"]').wrapAll('<div class="input_field field-2"></div>');
$('#element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-3"] , #element-533 form .form-block-select select#field-30a5faf34b56001db50ce824fa0ecc0e-3').wrapAll('<div class="input_field form-block-select field-3"></div>');
$('#element-533 form input#field-30a5faf34b56001db50ce824fa0ecc0e-4, #element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-4"]').wrapAll('<div class="input_field field-4"></div>');
$('#element-533 form input#field-30a5faf34b56001db50ce824fa0ecc0e-5, #element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-5"]').wrapAll('<div class="input_field field-5"></div>');
$('#element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-6"] , #element-533 form .form-block-select select#field-30a5faf34b56001db50ce824fa0ecc0e-6').wrapAll('<div class="input_field form-block-select field-6"></div>');
$('#element-533 form label[for="field-30a5faf34b56001db50ce824fa0ecc0e-7"] , #element-533 form .form-block-select select#field-30a5faf34b56001db50ce824fa0ecc0e-7').wrapAll('<div class="input_field form-block-select field-7"></div>');


$('#element-533 form select#field-30a5faf34b56001db50ce824fa0ecc0e-3 option.hidden').text('State');
$('#element-533 form select#field-30a5faf34b56001db50ce824fa0ecc0e-6 option.hidden').text('Company Size');
$('#element-533 form select#field-30a5faf34b56001db50ce824fa0ecc0e-7 option.hidden').text('Company Type');

var selector = '#element-533 form input, #element-533 form select';

$(document).on('focus', selector, function () {
    $(this).closest('.input_field').addClass('active typing');
});
$(document).on('blur focusout keyup', selector, function (e) {
    if ($(this).val() == null || $(this).val() == '') {
        $(this).closest('.input_field').removeClass('active filled');
        $(this).closest('.input_field').addClass('error');
    } else {
        $(this).closest('.input_field').addClass('active filled');
        $(this).closest('.input_field').removeClass('error');
    }
});

$(document).on('focusout', selector, function (e) {
    $(this).closest('.input_field').removeClass('typing');
});

$(selector).each(function () {
    if ($(this).find('input').val() == null || $(this).find('input').val() == '') {
        $(this).closest('input_field').addClass('v_blank');
    } else {
        $(this).closest('input_field').removeClass('v_blank');
    }
})

jQuery(document).on('keyup', 'input#Email', function (e) {
    console.log('emailType')
    var inputvalues = jQuery(this).val();
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(inputvalues)) {
        $(this).closest('.input_field').addClass('invalid_email');
        return regex.test(inputvalues);
    } else {
        $(this).closest('.input_field').removeClass('invalid_email');
    }
});

jQuery(document).on('keyup', 'input#Phone', function (e) {
    var phonevalue = jQuery(this).val();
    var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (!regex.test(phonevalue) || phonevalue.length < 10 || phonevalue.length > 12) {
        $(this).closest('.input_field ').addClass('invalid_phone');
        return regex.test(phonevalue);
    } else {
        $(this).closest('.input_field ').removeClass('invalid_phone');
    }
});



var required_filed = "#element-533 form input";

jQuery(document).on('focusout blur', '#element-533 form input', function () {
    jQuery(this).parent('.input_field').removeClass('active typing');
    var input_val = jQuery(this).val();

    if (input_val !== '' || input_val !== undefined || input_val !== NaN || input_val !== null) {
        jQuery(this).parents('.input_field').addClass('fill');
    } else {
        jQuery(this).parents('.input_field').removeClass('fill');
    }
}

);

jQuery(document).on('focusout blur', required_filed, function () {
    var input_val = jQuery(this).val();
    jQuery(this).parent('.input_field').removeClass('active typing');

    if (input_val == '' || input_val == undefined || input_val == NaN || input_val == null || input_val.trim().length < 1) {
        jQuery(this).parent('.input_field').removeClass('fill').addClass('error');
    } else {
        jQuery(this).parent('.input_field').addClass('fill').removeClass('error');
    }

    //convert_button_color();
}

);


$('<div class="error_msg">\
            <h5 class="error_text">This field is required</h5>\
            <h5 class="error_text email">Must be valid email</h5>\
        </div>').insertAfter('#element-533 form input');




jQuery(".input_field.field-2 input.field-30a5faf34b56001db50ce824fa0ecc0e-2").keyup(function () {

    var text = jQuery('input.field-30a5faf34b56001db50ce824fa0ecc0e-2').attr('class')
    const myArray = text.split(" ");
    var word = myArray[3];
    if (word == 'user-invalid') {
        jQuery('input.field-30a5faf34b56001db50ce824fa0ecc0e-2').next('.error_msg').show()
        jQuery('input.field-30a5faf34b56001db50ce824fa0ecc0e-2').next('.error_msg').first('h5').find('h5.error_text').hide()
        jQuery('input.field-30a5faf34b56001db50ce824fa0ecc0e-2').next('.error_msg').first('h5').find('h5.error_text.email').show()

    } else {
        jQuery('.input_field.field-2 input.field-30a5faf34b56001db50ce824fa0ecc0e-2').next('.error_msg').hide()
    }

});

$('.form-block-checkbox').addClass('Iamnot')
$('input#field-30a5faf34b56001db50ce824fa0ecc0e-26-0').change(function () {
    if ($(this).prop("checked") == true) {
        $(this).closest('.form-block-checkbox').removeClass('Iamnot')
    } else {
        $(this).closest('.form-block-checkbox').addClass('Iamnot')

    }
});


var style = document.createElement('style');
style.innerHTML = '.error{border-color: #e85f54!important; }';
document.getElementsByTagName('head')[0].appendChild(style);

//check url validation
function validateURL(string) {
    var regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/i;
    return regex.test(string);
}
var websiteInput = document.getElementById('field-30a5faf34b56001db50ce824fa0ecc0e-4');

var formButton = document.querySelector('[data-at="form-button"]');
if (websiteInput) {
    websiteInput.addEventListener('keyup', function (e) {
        if (validateURL(websiteInput.value)) {
            websiteInput.classList.remove('error');
            formButton.removeAttribute('disabled', '');
            formButton.style.opacity = '1';
            formButton.style.cursor = 'pointer';

        } else {
            websiteInput.classList.add('error');
            formButton.setAttribute('disabled', '');
            formButton.style.opacity = '0.5';
            formButton.style.cursor = 'auto';
        }
    });
}