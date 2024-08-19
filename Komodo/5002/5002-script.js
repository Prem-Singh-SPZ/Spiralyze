const bodyInterval = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(bodyInterval)

        document.body.classList.add('spz-5002');

        const allDemoCTA = document.querySelector('a#request-demo') || document.querySelector('a[href="#popup_request_a_demo"]') || document.querySelector('a[href="https://www.komodohealth.com/get-demo"]') || document.querySelector('a[href="#tmpwidget_1665168603900"]') || document.querySelector('a[href="#webinar_form_"]');

        if (allDemoCTA) {
            allDemoCTA.outerHTML = `<div class="spz-5002-ctas"><a href="#popup_request_a_demo" class="button button-blue spz-5002-track" rel="modal:open">Get a Demo</a><a href="#popup_contact_us" class="button button-trans spz-5002-track" rel="modal:open">talk to an expert</a></div>`;
        }

        if (location.href.indexOf('/solutions/') > -1 && document.querySelector('a[href="https://www.komodohealth.com/get-demo"]')) {
            document.querySelector('a[href="https://www.komodohealth.com/get-demo"]').outerHTML = `<div class="spz-5002-ctas"><a href="#popup_request_a_demo" class="button button-blue spz-5002-track" rel="modal:open">Get a Demo</a><a href="#popup_contact_us" class="button button-trans spz-5002-track" rel="modal:open">talk to an expert</a></div>`;
        }


        if (document.querySelector('.hs-form-iframe')) {
            var iframe = document.querySelectorAll('iframe.hs-form-iframe');
            iframe.forEach(item => {
                var iframeContent = item.contentWindow;
                iframeContent.document.querySelector('input[name="cro2"]').value = "#5002_variant";
            });
        }

        document.querySelectorAll('.hs_cro2.hs-cro2 .input input').forEach(item => {
            item.setAttribute('value', '#5002_variant');
        });
    }
}, 10)