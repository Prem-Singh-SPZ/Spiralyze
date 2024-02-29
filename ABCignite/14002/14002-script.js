let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        document.body.classList.add('spz-14002');

        waitForElm(".pricing-hero__form .marketo-form").then((elm) => {
            code_inject();
        });
    }
});

function code_inject() {
    if (document.querySelectorAll(".pricing-hero__form .logo-btn").length == 0) {
        document.querySelector(".pricing-hero__form .pricing-hero__form-title").insertAdjacentHTML("beforebegin", `<div class="abc-logo"><a class="" href="/"><img class="logo-btn" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcfitness/14002/frame_1000003326.webp" alt="fitness-logo"/></a></div>`);
    }

    document.querySelector(".pricing-hero__form .pricing-hero__form-title").textContent = "Get a Demo";
}

window.addEventListener("click", function (e) {
    if (e.target.classList.contains("demo-btn")) {
    }
});

function waitForElm(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}