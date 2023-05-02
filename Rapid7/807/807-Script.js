var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('rapid-807-spz')) {
                var cookieName = '807-rapid-08092022';
                var cookieValue = '1';
                var myDate = new Date();
                myDate.setDate(myDate.getDate() + 30);
                document.cookie = cookieName + '=' + cookieValue + ';expires=' + myDate;
                jQuery('body').addClass('rapid-807-spz');
            }
            jQuery('#form').addClass('rapid-form');
            var content = `<div class="left-container">
      <span class="brick"></span>
      <div class="text-info">
      <h2>Let&rsquo;s Talk Cloud Security</h2>
      <ul class="list">
          <li class="list-item"><p>Your top security priorities, and the state of your cloud environment</p></li>
          <li class="list-item"><p>Integrating cloud security with your people and processes</p></li>
          <li class="list-item"><p>A tailored walkthrough of InsightCloudSec, and how it can help you accelerate with confidence</p></li>
      </ul></div></div>`;
            //   jQuery('.rapid-form .wrapper').prepend(content);
            //   jQuery('.rapid-form .wrapper .large-8.large-offset-2.cell .formBlockWrapper h2').text('Contact Us');

            jQuery('body').on("change", '#mktoForm_4313 select', function (event) {
                checkInputform();
                jQuery(".mktoForm .mktoFormRow #LblState").text('State');
                jQuery(".mktoForm .mktoFormRow #State option:nth-child(1)").text('');
                if (jQuery(this).val() != '') {
                    jQuery(this).addClass('blackText');
                } else {
                    jQuery(this).removeClass('blackText');
                }
                jQuery(this).blur();
            });
            jQuery("body").on("focus", '#mktoForm_4313 input , #mktoForm_4313 select', function () {
                jQuery(this).closest('div').addClass('focused');
            }).on("blur", '#mktoForm_4313 input , #mktoForm_4313 select', function () {
                if (jQuery(this).val() == "" || jQuery(this).val() == null) {
                    jQuery(this).closest('div').removeClass('focused');
                }
            });
            jQuery('body').on("keyup focus focusout keypress click change", '#mktoForm_4313 select', function (event) {
                errorCheck();
            });
            MktoForms2.whenReady(function (form) {
                var mktoForm = form;
                checkInputform();
                errorCheck();
                jQuery('.rapid-form select option:first-child').text('');
                jQuery('label').each(function (index, element) {
                    jQuery(this).text(jQuery(this).text().replace(':', '').replace('*', ''));
                });
                mktoForm.onSuccess(function () {
                    // window.dataLayer.push({ 'event': 'form_submit_success' });
                    window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                    window['optimizelyEdge'].push({
                        type: "event",
                        eventName: "insightcloudsec-contact-form-submission-spz",
                    });
                });
            });
        });
    }
});


window.onload = function () {
    jQuery('body').addClass('loaded');
};

function checkInputform() {
    jQuery('form#mktoForm_4313 .mktoFormRow').each(function () {
        jQuery(this).removeAttr('input-name');
        if (jQuery(this).find('input,select,textarea').length > 0) {
            var currentID = jQuery(this).find('input,select,textarea').attr('name');
            jQuery(this).attr('input-name', 'parent-' + currentID);
        } else {
            jQuery(this).attr('input-name', 'parent-noinput');
        }
    });
}
function errorCheck() {
    var targetNodes = document.querySelectorAll('.mktoFieldWrap');
    var config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    var callback = function (mutationsList, observer) {
        jQuery('.mktoFieldWrap').each(function () {
            if (jQuery(this).find('.mktoError').length > 0 && jQuery(this).find('.mktoError').attr('style').indexOf('none') == -1) {
                jQuery(this).addClass('invalid-field');
            } else {
                jQuery(this).removeClass('invalid-field');
            }
        });
    };
    var observer = new MutationObserver(callback);
    for (var i = 0; i < targetNodes.length; i++) {
        observer.observe(targetNodes[i], config);
    }
}