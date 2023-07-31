
jQuery(function ($) {
    $(document).ready(function () {
        document.body.classList.add('spz-24001');

        formUpdates();
    });
});

function formUpdates() {
    document.querySelector('#container_first_name').before(document.querySelector('#container_email'));
    document.querySelector('#container_job_title').before(document.querySelector('#container_company_name'));
    document.querySelector('#label_email .label-style').textContent = 'Business Email';
    // $('.lp-pom-form-field .label-style').text($(this).replace('*', ''));
}


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
            $('#lp-pom-form-1510 .lp-pom-form-field input').each(function () {
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
$(".form-two-columns .lp-pom-form-field input").focus(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
});
$(".form-two-columns .lp-pom-form-field input").keyup(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
});
$(".form-two-columns .lp-pom-form-field input").focusout(function () {
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
$(".form-two-columns .lp-pom-form-field input").blur(function () {
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
$('.form-two-columns .lp-pom-form-field .lp-form-label').each(function () {
    val = $(this).html(); val = val.replace("&nbsp;*", ""); $(this).html(val);
});
$(".lp-pom-form-field select > option:first-child").text('');
//$(".lp-pom-form-field #country > option:first-child").attr('selected','selected');
$(".form-two-columns .lp-pom-form-field select").click(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
    /*if($(this).val() == '') {
      $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    }else{
      $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }*/
});
$(".form-two-columns .lp-pom-form-field select").change(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    if ($(this).val() == '') {
        $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }
});
$(".form-two-columns .lp-pom-form-field select").focus(function () {
    $(this).closest('.lp-pom-form-field').addClass('active typing');
});
$(".form-two-columns .lp-pom-form-field select").focusout(function () {
    $(this).closest('.lp-pom-form-field').removeClass('active typing');
    if ($(this).val() == '') {
        $(this).closest('.lp-pom-form-field').addClass('error').removeClass('filled');
    } else {
        $(this).closest('.lp-pom-form-field').removeClass('error').addClass('filled');
    }
});
function validateEmail($email) {
    //var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/;
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test($email);
}


var allFields = document.querySelectorAll('.form-two-columns .single-line-text, .form-two-columns .drop-down, .form-two-columns .email');

allFields.forEach(function (inputfield) {
    //console.log(inputfield);
    //inputfield.insertAdjacentHTML("beforeend", '<div class="errorline"></div>');
});


/* Submit Button Event */

var submitBtn = document.querySelector('.form-two-columns .lp-pom-button[type=submit]');
submitBtn.addEventListener("click", function (event) {
    //console.log('submit');

    var allFields = document.querySelectorAll('.form-two-columns input.single[required], .form-two-columns select.single[required]');
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
        // event.preventDefault();
        console.log('please check all form fields')
    }

});


$(document).ready(function () {
	var accordionHeight = $('.lp-pom-form form').height();
	var acc_wrapper = $('.lp-pom-form').closest('.lp-element');
	var acc_wrap_height = acc_wrapper.height();
	var acc_top = acc_wrapper.position().top;
	// Search blocks with top > acc_top;
	var blocks1 = [], blocks2 = [], acc_block;
	$('.lp-positioned-content>.lp-element').each(function(index, element) {
		if (!$(element).is(acc_wrapper) && ($(element).position().top > acc_top)){
			blocks1.push(element);			
			ele_top = $(element).position().top;
			ele_id = $(element).attr('id');
		}
	});
	
	$('.lp-positioned-content #lp-pom-box-1574 .lp-element').each(function(index, element) {		
		blocks2.push(element);			
		ele_top2 = $(element).position().top;
		ele_id2 = $(element).attr('id');
	});
	$('#lp-pom-root>.lp-element').each(function(index, element) {
		var el_top = $(element).position().top;
		if ((el_top < acc_top) && (el_top + $(element).height() > acc_top)) {
			acc_block = $(element);
			return false;
		}
	});
	var accordionHeight = 394;
	var existCondition = setInterval(function() {
		if ($('.lp-pom-form form').length) {
			accordionHeight = $('.lp-pom-form.has-axis form').height();
			clearInterval(existCondition);
		}
	}, 100);
	var rootHeight = $('#lp-pom-root').height();
	var hero_sec_height = $('.hero-sec').height();
	if(($(window).width() > 599) && ($(window).width() < 1200)){
		$('.lp-pom-body').addClass('tablet_only');
	}
	
	function collapse_page(){
		var currAccHeight = $('.lp-pom-form form').height();
		var diff = currAccHeight - accordionHeight;
		accordionHeight = currAccHeight;
		if (acc_wrap_height < currAccHeight) {
			acc_wrapper.height(currAccHeight);
		} else {
			acc_wrapper.height(acc_wrap_height);
		}
		// Change height
		acc_block = $('.hero-sec');
		diff2 = Math.abs(diff);
		if(diff2 > 0){
			acc_block.height(acc_block.height()+diff);
			acc_block.find('div').each(function(index, el_div) {
				$(el_div).height($(el_div).height()+diff);
			});
			
			window_width = $(window).width();
			$.each(blocks1, function(index, element) {
				var el_top = $(element).position().top;
				var new_top = el_top + diff;
				cur_id = $(element).attr('id');
				
				if((cur_id == 'lp-pom-box-1574') || (cur_id == 'lp-pom-box-1509') || (cur_id == 'lp-pom-image-1024')){
					if((window_width > 1199) && (cur_id != 'lp-pom-image-1520') ){
						var new_top = el_top + diff/2;
						//extra = new_top/2;//extra = new_top - 67;
						$(element).css('top', new_top+"px");
					}
				}else{
					$(element).css('top', new_top+"px");
				}
			});
			diff3 = acc_block.height() - hero_sec_height;
			if((window_width > 599) && (window_width < 1200)){
			//if(window_width < 1199){
				rootHeight = 5301;
				$.each(blocks2, function(index, element) {
					var el_top2 = $(element).position().top;
					var new_top2 = el_top2 + diff;
					cur_id2 = $(element).attr('id');
					if((cur_id2 == 'lp-pom-text-991') || (cur_id2 == 'lp-pom-text-992') || (cur_id2 == 'lp-pom-text-993')){}else{
						$(element).css('top', new_top2+"px");
					}
				});
				diff3 = acc_block.height() - 1170;
			}else if(window_width < 600){
				$.each(blocks2, function(index, element) {
					var el_top2 = $(element).position().top;
					var new_top2 = el_top2 + diff;
					cur_id2 = $(element).attr('id');
					if((cur_id2 == 'lp-pom-text-991') || (cur_id2 == 'lp-pom-text-992') || (cur_id2 == 'lp-pom-text-993')){}else{
						$(element).css('top', new_top2+"px");
					}
				});
			}else{
				
			}
			
			$('#lp-pom-root').height(rootHeight+diff3);
		}
	}
	//$('#country').click(collapse_page);
	$('#container_country').on('change', '#country', collapse_page);
});