const bodyLoad = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoad);
        document.body.classList.add('spz-3901');
    }

    jQuery(document).ready(function () {
        MktoForms2.whenReady(function (form) {
            var mktoForm = form || $('.mktoForm');
            mktoForm.onSuccess(function () {
                window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                window['optimizelyEdge'].push({
                    type: "event",
                    eventName: "insightappsec-rp-form-submission-spz",
                });
                window.dataLayer.push({ 'event': 'form_submit_success' });
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        if (document.querySelector('.mktoForm')) {
            document.querySelector('.mktoForm').addEventListener('submit', function () {
                setTimeout(function () {
                    window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                    window['optimizelyEdge'].push({
                        type: "event",
                        eventName: "insightappsec-rp-form-submission-spz",
                    });
                    window.dataLayer.push({ 'event': 'form_submit_success' });
                }, 100);
            });
        }
    });
});