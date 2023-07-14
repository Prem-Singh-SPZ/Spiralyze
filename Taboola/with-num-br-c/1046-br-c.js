
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
    if ($('#element-558 video').length == 0) {
        clearInterval(vInt)


        //  Hero Section Starts
        $('#element-558 img.item-content-box').replaceWith(`
            <video id="hero-video-spz" width="100%" height="100%" autoplay muted playsinline loop poster="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Taboola/2022%20%7C%20Landing%20Page/assets/hero-desktop.jpg">
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

const formInputId = getFormInputId();

$(`#element-647 form input#${formInputId}-0, #element-647 form label[for="${formInputId}-0"]`).wrapAll('<div class="input_field field-0"></div>');
$(`#element-647 form input#${formInputId}-1, #element-647 form label[for="${formInputId}-1"]`).wrapAll('<div class="input_field field-1"></div>');
$(`#element-647 form input#${formInputId}-2, #element-647 form label[for="${formInputId}-2"]`).wrapAll('<div class="input_field field-2"></div>');
$(`#element-647 form input#${formInputId}-3, #element-647 form label[for="${formInputId}-3"]`).wrapAll('<div class="input_field field-3 invalid_phone"></div>');
$(`#element-647 form input#${formInputId}-4, #element-647 form label[for="${formInputId}-4"]`).wrapAll('<div class="input_field field-4"></div>');
$(`#element-647 form input#${formInputId}-5, #element-647 form label[for="${formInputId}-5"]`).wrapAll('<div class="input_field field-5"></div>');
$(`#element-647 form label[for="${formInputId}-6"] , #element-647 form .form-block-select select#${formInputId}-6`).wrapAll('<div class="input_field form-block-select field-6"></div>');
$(`#element-647 form label[for="${formInputId}-7"] , #element-647 form .form-block-select select#${formInputId}-7`).wrapAll('<div class="input_field form-block-select field-7"></div>');
// $(`#element-647 form label[for="${formInputId}-8"] , #element-647 form .form-block-select select#${formInputId}-8`).wrapAll('<div class="input_field form-block-select field-8"></div>');


// $(`#element-647 form select#${formInputId}-5 option.hidden`).text('State');
$(`#element-647 form select#${formInputId}-6 option.hidden`).text('Company Size');
$(`#element-647 form select#${formInputId}-7 option.hidden`).text('Company Type');


// All fields except phone number starts
var selector = '#element-647 form input:not([name="Mobile Phone (optional)"]), #element-647 form select';

$(document).on('focus', selector, function () {
    $(this).closest('.input_field').addClass('active typing');
});
$(document).on('blur focusout keyup', selector, function (e) {
    if ($(this).val() == null || $(this).val() == '') {
        $(this).closest('.input_field').removeClass('active filled fill');
        $(this).closest('.input_field').addClass('error');
    } else {
        $(this).closest('.input_field').addClass('active filled');
        if(jQuery(this).hasClass('error')){
          $(this).closest('.input_field').addClass('error');
        }else{
          $(this).closest('.input_field').removeClass('error');
        }
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
    var inputvalues = jQuery(this).val();
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(inputvalues)) {
        $(this).closest('.input_field').addClass('invalid_email');
        return regex.test(inputvalues);
    } else {
        $(this).closest('.input_field').removeClass('invalid_email');
    }
});

// Only phone number
jQuery(document).on('keyup', `input#${formInputId}-3`, function (e) {
    let phoneInputValues = jQuery(this).val();
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
    if (!phoneRegex.test(phoneInputValues)) {
        $(this).closest('.input_field').addClass('invalid_phone');
        if ($('body').hasClass('fill-phone')) {
            $('body').removeClass('fill-phone');
        }
        jQuery(this).next('.error_msg').show();
        jQuery(this).next('.error_text.phone').show();
        return phoneRegex.test(phoneInputValues);
    } else {
        $(this).closest('.input_field').removeClass('invalid_phone');
        $('body').addClass('fill-phone');
        jQuery('.error_text.phone').hide();
        jQuery('.ao-clicar .hidden-checkbox').val('no');

        telCheckbox();
    }
});

// only phone number
$(document).on('focus', '#element-647 form input[name="Mobile Phone (optional)"]', function () {
    $(this).closest('.input_field').addClass('active typing');
});

// only phone number
$(document).on('blur focusout keyup', '#element-647 form input[name="Mobile Phone (optional)"]', function (e) {
    if ($(this).val() == null || $(this).val() == '') {
        $(this).closest('.input_field').removeClass('active filled fill');
        // $(this).closest('.input_field').addClass('error');
    } else {
        $(this).closest('.input_field').addClass('active filled');
        $(this).closest('.input_field').removeClass('error fill');
    }
});

// Only phone number keydown event
const phoneNoEl = document.querySelector('#element-647 .input_field.field-3 input');
phoneNoEl.setAttribute('maxlength', 12)
phoneNoEl.addEventListener('keydown', function (event) {
    var digitPeriodRegExp = new RegExp('\\d|\\.');

    if (event.ctrlKey // (A)
        || event.altKey // (A)
        || typeof event.key !== 'string' // (B)
        || event.key.length !== 1) { // (C)
        return;
    }

    if (!digitPeriodRegExp.test(event.key)) {
        event.preventDefault();
    }

}, false);



// All input fields blur event
var required_filed = "#element-647 form input";

jQuery(document).on('focusout blur', '#element-647 form input', function () {
    jQuery(this).parent('.input_field').removeClass('active typing');
    var input_val = jQuery(this).val();

    if (input_val !== '' || input_val !== undefined || input_val !== NaN || input_val !== null) {
        jQuery(this).parents('.input_field').addClass('fill');
    } else {
        jQuery(this).parents('.input_field').removeClass('fill');
    }
});

// All inputs except phone number   
jQuery(document).on('focusout blur', required_filed + ':not([name="Mobile Phone (optional)"])', function () {
    var input_val = jQuery(this).val();
    jQuery(this).parent('.input_field').removeClass('active typing');
    if (input_val == '' || input_val == undefined || input_val == NaN || input_val == null || input_val.trim().length < 1) {
        jQuery(this).parent('.input_field').removeClass('fill').addClass('error');
    } else {
        if (jQuery(this).hasClass('error')) {
            jQuery(this).parent('.input_field').removeClass('fill').addClass('error');
        } else {
            jQuery(this).parent('.input_field').addClass('fill').removeClass('error');
        }

    }
});


// Only phone number
jQuery(document).on('focusout blur', required_filed + '[name="Mobile Phone (optional)"]', function () {
    var input_val = jQuery(this).val();
    jQuery(this).parent('.input_field').removeClass('active typing');
    if (input_val == '' || input_val == undefined || input_val.checked) {
        jQuery('.ao-clicar .form-multiple-input').removeClass('required user-invalid');
        jQuery('.error_text.phone').hide();
        formButton.removeAttribute('disabled', '');
        formButton.style.opacity = '1';
        formButton.style.cursor = 'pointer';
        jQuery(this).parents('.input_field').removeClass('fill');
    } else {
        jQuery('.ao-clicar .hidden-checkbox').val('no')
        jQuery('.ao-clicar .form-multiple-input').attr('required', 'required').addClass('required user-invalid');
        formButton.setAttribute('disabled', '');
        formButton.style.opacity = '0.5';
        formButton.style.cursor = 'auto';
        jQuery(this).parents('.input_field').removeClass('fill');
        telCheckbox();
    }
});


$('<div class="error_msg">\
    <h5 class="error_text">This field is required</h5>\
    <h5 class="error_text email">Must be valid email</h5>\
    <h5 class="error_text phone">Must be valid phone</h5>\
</div>').insertAfter('#element-647 form input');




jQuery(`.input_field.field-2 input#${formInputId}-2`).keyup(function () {

    var text = jQuery(`input#${formInputId}-2`).attr('class')
    const myArray = text.split(" ");
    var word = myArray[3];
    if (word == 'user-invalid') {
        jQuery(`input#${formInputId}-2`).next('.error_msg').show()
        jQuery(`input#${formInputId}-2`).next('.error_msg').first('h5').find('h5.error_text').hide()
        jQuery(`input#${formInputId}-2`).next('.error_msg').first('h5').find('h5.error_text.email').show()

    } else {
        jQuery(`.input_field.field-2 input#${formInputId}-2`).next('.error_msg').hide()
    }

});

// Form input phone number
jQuery(`.input_field.field-3 input#${formInputId}-3`).keyup(function () {
    if ($(this).parent().hasClass('invalid_phone')) {
        jQuery(this).next('.error_msg').show()
        jQuery(this).next('.error_msg').first('h5').find('h5.error_text').hide()
        jQuery(this).next('.error_msg').first('h5').find('h5.error_text.email').hide()
        jQuery(this).next('.error_msg').first('h5').find('h5.error_text.phone').show()
        if ($('body').hasClass('fill-phone')) {
            $('body').removeClass('fill-phone');
        }
    } else {
        jQuery(`.input_field.field-3 input#${formInputId}-3`).next('.error_msg').hide()
        $('body').addClass('fill-phone');
    }
});


$('.form-block-checkbox').addClass('Iamnot')
$(`#${formInputId}-26-0`).parents('.form-checkable-field').addClass('Iamnot-ips');
$(`input#${formInputId}-26-0`).change(function () {
    if ($(this).prop("checked") == true) {
        $(this).closest('.form-block-checkbox').removeClass('Iamnot')
    } else {
        $(this).closest('.form-block-checkbox').addClass('Iamnot')

    }
});

$(`#${formInputId}-27-0`).parents('.form-checkable-field').addClass('ao-clicar');
// on change checkbox element `input#${formInputId}-27-0` add 'user-invalid' class on itself
// on change checkbox element `input#${formInputId}-27-0` remove 'user-invalid' class on itself
// For phone number consent checkbox enable/disable form button
setTimeout(() => {
    document.querySelector(`input#${formInputId}-27-0`).addEventListener('change', function (e) {
        if (e.target.checked) {
            e.target.classList.remove('user-invalid');
            formButton.removeAttribute('disabled', '');
            formButton.style.opacity = '1';
            formButton.style.cursor = 'pointer';
        } else {
            e.target.classList.add('user-invalid');
            jQuery('.ao-clicar .hidden-checkbox').val('no');
            formButton.setAttribute('disabled', '');
            formButton.style.opacity = '0.5';
            formButton.style.cursor = 'auto';
        }
    });
}, 2000);

let style = document.createElement('style');
style.innerHTML = '.error{border-color: #e85f54!important; }';
document.getElementsByTagName('head')[0].appendChild(style);

//check url validation
function validateURL(string) {
    let regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/i;
    return regex.test(string);
}
let websiteInput = document.getElementById(`${formInputId}-4`);

let formButton = document.querySelector('[data-at="form-button"]');
websiteInput.addEventListener('keyup', function (e) {
    if (validateURL(websiteInput.value)) {
        websiteInput.classList.remove('error');
        // formButton.removeAttribute('disabled', '');
        // formButton.style.opacity = '1';
        // formButton.style.cursor = 'pointer';

        if (jQuery('.ao-clicar .form-multiple-input').hasClass('user-invalid')) {
            telCheckbox();
        } else {
            formButton.removeAttribute('disabled', '');
            formButton.style.opacity = '1';
            formButton.style.cursor = 'pointer';
        }

    } else {
        websiteInput.classList.add('error');
        formButton.setAttribute('disabled', '');
        formButton.style.opacity = '0.5';
        formButton.style.cursor = 'auto';
    }
});


// Get id of first input element in form and remove last 2 characters of id
function getFormInputId() {
    var firstInputId = document.querySelector('#element-647 form input').id;
    var firstInputId = firstInputId.slice(0, -2);
    return firstInputId;
}



// Prevent form submission if phone number consent checkbox is not checked
function telCheckbox() {
    var hasErrorInt = setInterval(() => {
        const isValidPhone = jQuery('#element-647 form input[name="Mobile Phone (optional)"]').parent('.input_field').hasClass('invalid_phone');
        if (!isValidPhone && jQuery('.ao-clicar .form-multiple-input').hasClass('user-invalid')) {
            clearInterval(hasErrorInt);
            formButton.setAttribute('disabled', '');
            formButton.style.opacity = '0.5';
            formButton.style.cursor = 'auto';
        }
    }, 50);
}