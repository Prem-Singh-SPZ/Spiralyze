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
    document.querySelector('h1.h2').outerHTML = '<h1 class="fw-bold my-4 spz-headline"><span class="w-text">Is Your <span class="d-xl-block d-inline y-text">Sales Go-To-Market</span> Plan Failing?</span></h1>';

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

/* CONTENT */
vwo_$(".dnd_area-module-2-padding > div:nth-of-type(1) > span:nth-of-type(1)").replaceWith("<span id=\"hs_cos_wrapper_dnd_area-module-2_\" class=\"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text\" style=\"\" data-hs-cos-general-type=\"widget\" data-hs-cos-type=\"rich_text\" vwo-el-id=\"23127767490\"><img src=\"https://www.varicent.com/hs-fs/hubfs/Varicent%20Logo-2.png?width=526&amp;height=104&amp;name=Varicent%20Logo-2.png\" width=\"526\" height=\"104\" loading=\"lazy\" alt=\"Varicent Logo-2\" style=\"height: auto; max-width: 100%; width: 185px;\" class=\"d-block\" srcset=\"https://www.varicent.com/hs-fs/hubfs/Varicent%20Logo-2.png?width=263&amp;height=52&amp;name=Varicent%20Logo-2.png 263w, https://www.varicent.com/hs-fs/hubfs/Varicent%20Logo-2.png?width=526&amp;height=104&amp;name=Varicent%20Logo-2.png 526w, https://www.varicent.com/hs-fs/hubfs/Varicent%20Logo-2.png?width=789&amp;height=156&amp;name=Varicent%20Logo-2.png 789w, https://www.varicent.com/hs-fs/hubfs/Varicent%20Logo-2.png?width=1052&amp;height=208&amp;name=Varicent%20Logo-2.png 1052w, https://www.varicent.com/hs-fs/hubfs/Varicent%20Logo-2.png?width=1315&amp;height=260&amp;name=Varicent%20Logo-2.png 1315w, https://www.varicent.com/hs-fs/hubfs/Varicent%20Logo-2.png?width=1578&amp;height=312&amp;name=Varicent%20Logo-2.png 1578w\" sizes=\"(max-width: 526px) 100vw, 526px\"><h1 class=\"fw-bold h2 mb-4\" vwo-el-id=\"21475311280\"><span style=\"color: #ffffff;\" vwo-el-id=\"28350972810\"><span style=\"color: #fadb14;\" vwo-el-id=\"15118190820\">A Successful Sales<br vwo-el-id=\"519033090\">Planning Process:<br vwo-el-id=\"519033400\"></span>Everything You Need<br vwo-el-id=\"1350188200\">to Know</span></h1><div class=\"d-md-block d-none\"><p style=\"font-size: 1.0625rem;\" vwo-el-id=\"36484072580\"><span style=\"color: #ffffff;\" vwo-el-id=\"853684830\">The sales strategy and planning process is an intricate web of activities, including sales territory management, quotas, capacity, and more. Each of these elements are driving towards the common goal of hitting company revenue goals but are completely interdependent on one another.<br vwo-el-id=\"23539169660\"></span></p><p style=\"font-size: 1.0625rem;\" vwo-el-id=\"36484072890\"><span style=\"color: #ffffff;\" vwo-el-id=\"183617300\">This collaboration needs to happen not only between the people, but also the data and processes you have in place. </span><span style=\"color: #ffffff;\" vwo-el-id=\"183617610\"></span><span style=\"color: #ffffff;\" vwo-el-id=\"183617920\"><span class=\"fw-semibold\" style=\"color: #fadb14;\" vwo-el-id=\"4724273930\">Learn more by downloading The Complete Guide to Sales Planning.</span></span></p><p class=\"d-none d-md-block d-lg-none text-end\" vwo-el-id=\"41104780300\" style=\"display: none !important;\"><img src=\"https://www.varicent.com/hs-fs/hubfs/2H%20Campaign%202024/person.png?width=616&amp;height=587&amp;name=person.png\" width=\"616\" height=\"587\" loading=\"lazy\" alt=\"person\" style=\"height: auto; max-width: 100%; width: 320px; transform: translateX(25%);\" srcset=\"https://www.varicent.com/hs-fs/hubfs/2H%20Campaign%202024/person.png?width=308&amp;height=294&amp;name=person.png 308w, https://www.varicent.com/hs-fs/hubfs/2H%20Campaign%202024/person.png?width=616&amp;height=587&amp;name=person.png 616w, https://www.varicent.com/hs-fs/hubfs/2H%20Campaign%202024/person.png?width=924&amp;height=881&amp;name=person.png 924w, https://www.varicent.com/hs-fs/hubfs/2H%20Campaign%202024/person.png?width=1232&amp;height=1174&amp;name=person.png 1232w, https://www.varicent.com/hs-fs/hubfs/2H%20Campaign%202024/person.png?width=1540&amp;height=1468&amp;name=person.png 1540w, https://www.varicent.com/hs-fs/hubfs/2H%20Campaign%202024/person.png?width=1848&amp;height=1761&amp;name=person.png 1848w\" sizes=\"(max-width: 616px) 100vw, 616px\" vwo-el-id=\"25878420220\"></p></div></span>");

/* Move text */
vwo_$("#hs_cos_wrapper_widget_1705331026358").append("<div class=\"d-md-none\"><p style=\"font-size: 1.0625rem;\" vwo-el-id=\"36484072580\"><span style=\"color: #ffffff;\" vwo-el-id=\"853684830\">The sales strategy and planning process is an intricate web of activities, including sales territory management, quotas, capacity, and more. Each of these elements are driving towards the common goal of hitting company revenue goals but are completely interdependent on one another.<br vwo-el-id=\"23539169660\"></span></p><p style=\"font-size: 1.0625rem;\" vwo-el-id=\"36484072890\"><span style=\"color: #ffffff;\" vwo-el-id=\"183617300\">This collaboration needs to happen not only between the people, but also the data and processes you have in place. </span><span style=\"color: #ffffff;\" vwo-el-id=\"183617610\"></span><span style=\"color: #ffffff;\" vwo-el-id=\"183617920\"><span class=\"fw-semibold\" style=\"color: #fadb14;\" vwo-el-id=\"4724273930\">Learn more by downloading The Complete Guide to Sales Planning.</span></span></p></div>");
