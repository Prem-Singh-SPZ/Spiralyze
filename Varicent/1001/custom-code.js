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
waitForElm(`form.hs-form-private .hs_firstname input`).then(function (elm) {
    let visualChange = setInterval(() => {
        if (document.querySelectorAll('p[vwo-element-id="1718222699312"]').length == 0) {
            vwo_$("SPAN:tm('Drive Revenue Growth?'):nth-parent(1)").replaceWith("<span style=\"font-size: .95em;\" vwo-el-id=\"28350972810\">Optimize Sales &amp; Incentives Strategies.<br><span style=\"color: #2b4ff4; font-family: merriweather,serif; font-style: italic;\" vwo-el-id=\"15118190820\">Boost Revenue.</span></span>");
            vwo_$(".row-number-21").vwoCss({ "display": "block !important" });
            vwo_$(".row-number-15").vwoCss({ "display": "none !important" });
            vwo_$(".row-number-4 > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1)").vwoCss({ "display": "none !important" });
            /* REMOVE */
            vwo_$(".row-number-5 > div:nth-of-type(1) > div:nth-of-type(1)").vwoCss({ "display": "none !important" });
            /* REMOVE */
            vwo_$(".row-number-6 > div:nth-of-type(1) > div:nth-of-type(1)").vwoCss({ "display": "none !important" });
            /* REMOVE */
            vwo_$(".row-number-3").vwoCss({ "display": "none !important" });
            /* ADDELEMENT */
            vwo_$(".text-center > p:nth-of-type(2)").vwoElement({ "position": "after", "html": "<ul vwo-element-id=\"1718213298682\"><li>Add unordered list element here</li><li>Add unordered list element here</li></ul>", "addElementId": 1718213298682 });
            /* REMOVE */
            vwo_$(".text-center > p:nth-of-type(1)").vwoCss({ "display": "none !important" });
            /* REMOVE */
            vwo_$(".text-center > p:nth-of-type(2)").vwoCss({ "display": "none !important" });
            /* EDITELEMENT */
            vwo_$("STRONG:tm('Sales Planning:'):nth-parent(1)").vwoCss({ "margin-top": "12px !important" });
            /* EDITELEMENT */
            vwo_$("[vwo-element-id='1718213382095']").vwoCss({ "margin-top": "12px !important" });
            vwo_$("[vwo-element-id='1718213298682']").replaceWith("<ul vwo-element-id=\"1718213298682\"><li><strong>Incentives:</strong> Create data-informed compensation plans that help sales teams hit their targets and adapt to evolving business strategies.</li><li>Sales Planning: Use performance analytics to optimize quota goals and design territories. Meet revenue goals.</li><li>Integrations: Connects with Google, Microsoft, Salesforce, Shopify, HubSpot, Snowflake, Oracle, and more.</li></ul>");
            /* CONTENT */
            vwo_$("[vwo-element-id='1718213298682'] > li:nth-of-type(3)").replaceWith("<li><strong>Integrations:</strong> Connects with Google, Microsoft, Salesforce, Shopify, HubSpot, Snowflake, Oracle, and more.</li>");
            /* CONTENT */
            vwo_$("[vwo-element-id='1718213298682'] > li:nth-of-type(2)").replaceWith("<li><strong>Sales Planning:</strong> Use performance analytics to optimize quota goals and design territories. Meet revenue goals.</li>");
            /* EDITELEMENT */
            vwo_$(".row-number-8 > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)").vwoCss({ "box-shadow": "none !important", "background-color": "rgba(43,79,244,1) !important" });
            /* EDITELEMENT */
            vwo_$("SPAN:tm('First Name'):nth-parent(3) .hs-button.primary.large").vwoAttr({ "value": "Submit" }).vwoCss({ "background-color": "rgba(250,219,20,1) !important", "color": "rgba(43,79,244,1) !important" });
            /* ADDELEMENT */
            vwo_$("SPAN:tm('First Name'):nth-parent(3)").vwoElement({ "position": "before", "html": "<div style=\"min-height: 100px; border: 1px solid #ba00ff; width: 100%;\" vwo-element-id=\"1718222499743\"></div>", "addElementId": 1718222499743 });
            /* EDITELEMENT */
            vwo_$("[vwo-element-id='1718222499743']").html("Get a Demo");
            /* REMOVE */
            vwo_$("[vwo-element-id='1718222499743']").vwoCss({ "display": "none !important" });
            /* ADDELEMENT */
            vwo_$("SPAN:tm('First Name'):nth-parent(3)").vwoElement({ "position": "before", "html": "<p vwo-element-id=\"1718222699312\">Insert a paragraph here</p>", "addElementId": 1718222699312 });
            /* EDITELEMENT */
            vwo_$("SPAN:tm('First Name'):nth-parent(3)").vwoCss({ "background-color": "transparent !important", "padding-top": "0px !important" });
            /* CONTENT */
            vwo_$("[vwo-element-id='1718222699312']").replaceWith("<p vwo-element-id=\"1718222699312\" style=\"padding-top: 24px !important; padding-right: 0px !important; padding-bottom: 24px !important; font-size: 40px !important; color: rgb(255, 255, 255) !important; text-align:center; font-weight: 500; margin: 0;\">Get a Demo</p>");
            /* EDITELEMENT */
            vwo_$("[vwo-element-id='1718222699312']").vwoCss({ "font-weight": "500 !important" });
            /* REMOVE */
            vwo_$(".row-number-11 > div:nth-of-type(1) > div:nth-of-type(1)").vwoCss({ "display": "none !important" });
            /* REMOVE */
            vwo_$(".row-number-10").vwoCss({ "display": "none !important" });
            /* EDITELEMENT */
            vwo_$(".row-number-1 > div:nth-of-type(1)").vwoAttr({ "id": "ab-row" });
            /* EDITELEMENT */
            vwo_$("[vwo-element-id='1718213298682']").vwoAttr({ "class": { "addedClasses": ["blue-dotted", "d-lg-block", "d-none"] } });
            vwo_$("DIV:tm('Get a Demo'):nth-parent(3)").after("<ul class=\"blue-dotted d-lg-none mt-4\" style=\"font-weight: 300;\"><li><strong>Incentives:</strong> Create data-informed compensation plans that help sales teams hit their targets and adapt to evolving business strategies.</li><li><strong>Sales Planning:</strong> Use performance analytics to optimize quota goals and design territories. Meet revenue goals.</li><li><strong>Integrations:</strong> Connects with Google, Microsoft, Salesforce, Shopify, HubSpot, Snowflake, Oracle, and more.</li></ul>");
            /* EDITELEMENT */
            vwo_$(".text-center").vwoAttr({ "class": { "removedClasses": ["text-center", "text-md-start"], "addedClasses": ["pe-xl-4"] } });
            vwo_$("[vwo-element-id='1718300057373']").vwoAttr({ "alt": "", "title": "", "width": 48, "height": 48, "border": "", "src": "//useruploads.vwo.io/useruploads/896227/images/f07eb7fab0f8e7a34bdd7d8f0e19a952_arrowsmaller.svg" });
            /* EDITELEMENT */
            vwo_$("[vwo-element-id='1718300057373']").vwoCss({ "width": "466px !important", "height": "407px !important" });
            /* REMOVE */
            vwo_$("[vwo-element-id='1718300057373']").vwoCss({ "display": "none !important" });
            vwo_$(".logo__nav__container > nav:nth-of-type(1)").vwoCss({ "visibility": "hidden !important" });
            vwo_$("#main__navigation > div:nth-of-type(2) > span:nth-of-type(1) > div:nth-of-type(1)").vwoCss({ "visibility": "hidden !important" });
            /* REMOVE */
            vwo_$(".footer__content").vwoCss({ "display": "none !important" });
            /* EDITELEMENT */
            vwo_$(".bottom__footer").vwoCss({ "border-top-style": "none !important" });
            /* EDITELEMENT */
            vwo_$("#main__footer").vwoCss({ "padding-top": "0px !important" });
            /* CONTENT */
            vwo_$(".splide__list > li:nth-of-type(3) > div:nth-of-type(1) > p:nth-of-type(3)").replaceWith("<p style=\"font-size: .875em;\" vwo-el-id=\"15245289540\"><strong vwo-el-id=\"21805358300\">4.5</strong> (478 reviews)</p>");
            vwo_$(".splide__list > li:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > img:nth-of-type(1)").vwoAttr({ "alt": "Gartner logo", "title": "", "width": "139", "height": "48", "border": "", "src": "https://res.cloudinary.com/spiralyze/image/upload/v1719947987/varicent/1001/gartner_logo_1440.svg" });
            /* EDITELEMENT */
            vwo_$(".splide__list > li:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1) > img:nth-of-type(1)").vwoCss({ "width": "139px !important", "height": "48px !important" });
            /* EDITELEMENT */
            vwo_$("[vwo-element-id='1718213298682']").vwoAttr({ "class": { "removedClasses": ["d-none"] } });
        }
        else {
            clearInterval(visualChange);
        }
    }, 100);
});
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
