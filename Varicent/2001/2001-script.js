/* CUSTOM CODE */
window.addEventListener("message", function (event) {
    if (event.data.type === 'hsFormCallback') {
        if (Object.keys(event.data.data).length === 0 && event.data.data.constructor === Object) return;

        var hubspotFormName = event.data.data[0].value;
        window.VWO = window.VWO || [];
        VWO.event = VWO.event || function () { VWO.push(["event"].concat([].slice.call(arguments))) };
        if (event.data.eventName === "onFormSubmitted") {
            VWO.event("spz_hubspot_form_submit1", {
                "form_id": event.data.id,
                "form_name": hubspotFormName
            });


        } else if (event.data.eventName === "onBeforeFormSubmit") {
            VWO.event("spz_hubspot_form_before_submit1", {
                "form_id": event.data.id,
                "form_name": hubspotFormName
            });

        }
    }
});

document.body.classList.add('spz-2001');

waitForElm(`form.hs-form-private .hs_firstname input`).then(function (elm) {
    hero_modify();
});

function hero_modify() {
    document.querySelector('h1.h2').insertAdjacentHTML('afterend', '<div class="hero-copy d-md-block d-none"><p>The sales strategy and planning process is an intricate web of activities, including sales territory management, quotas, capacity, and more. Each of these elements are driving towards the common goal of hitting company revenue goals but are completely interdependent on one another.</p><p>This collaboration needs to happen not only between the people, but also the data and processes you have in place. <span class="fw-semibold">Learn more by downloading The Complete Guide to Sales Planning.</span></p></div>');
    document.querySelector('.hs_cos_wrapper.hs_cos_wrapper_widget.hs_cos_wrapper_type_form').insertAdjacentHTML('afterend', '<div class="hero-copy d-md-none"><p>The sales strategy and planning process is an intricate web of activities, including sales territory management, quotas, capacity, and more. Each of these elements are driving towards the common goal of hitting company revenue goals but are completely interdependent on one another.</p><p>This collaboration needs to happen not only between the people, but also the data and processes you have in place. <span class="fw-semibold">Learn more by downloading The Complete Guide to Sales Planning.</span></p></div>');
    document.querySelector('h1.h2').outerHTML = '<h1 class="fw-bold my-4 spz-headline"><span class="w-text">Is your <span class="d-xl-block d-inline y-text">Sales Go-To-Market</span> Plan failing?</span></h1>';

    document.querySelector('.dnd_area-row-0-background-color.dnd-section.dnd_area-row-0-padding').insertAdjacentHTML('beforeend', '<a id="unblock_btn">LEARN MORE</a>');

    //onclick of learn more button
    document.getElementById('unblock_btn').addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('unblocked');
        let heroBanner = document.querySelector('.dnd_area-row-0-background-color.dnd-section.dnd_area-row-0-padding');
        if (heroBanner)
            window.scrollTo({ top: heroBanner.clientHeight, behavior: 'smooth' });
        this.style.display = 'none';
    });

}

// Wait for element to load
function waitForElm(selector) {
    return new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(function (mutations) {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
    });
}