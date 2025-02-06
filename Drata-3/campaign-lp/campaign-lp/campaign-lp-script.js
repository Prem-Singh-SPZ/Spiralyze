const bodyInt = setInterval(() => {
    if (document.querySelectorAll('.page-editor .preview-iframe-wrapper').length == 0 && document.querySelectorAll('header').length > 0) {
        clearInterval(bodyInt);
        removeStyleTags();
    }
}, 100);

// Remove all style tags without id in header
function removeStyleTags() {
    // document.querySelectorAll('style:not([id])').forEach(function (el) {
    //     el.remove();
    // });

    // Remove style tag which is after 'main.min.css' link
    document.querySelectorAll('link').forEach(function (el) {
        if (el.href.indexOf('main.min.css') > -1) {
            el.nextElementSibling.remove();
        }
    });

    // Remove link tag which contains main.min.css or Social_follow.min.css in href attribute
    document.querySelectorAll('link').forEach(function (el) {
        if (el.href.indexOf('main.min.css') > -1 || el.href.indexOf('Social_follow.min.css') > -1) {
            el.remove();
        }
    });
}

// Add class 'safari' on body if browser is safari
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari');
}

// Animation on scroll Starts
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.target.classList.contains("is-inViewport")) {
            entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        }
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
    // Default is null (Browser viewport). Set a specific parent element:
    root: document.querySelector('body'),
    // add 40px inner "margin" area at which the observer starts to calculate:
    rootMargin: '40px',
    // Default is 0.0 meaning the callback is called as soon 1 pixel is inside the viewport.  
    // Set to 1.0 to trigger a callback when 100% of the target element is inside the viewport,   
    // or i.e: 0.5 when half of the target element is visible:
    threshold: 0.5,
    
};

// Attach observer to every [data-inviewport] element:
document.querySelectorAll('[data-inviewport]').forEach(el => {
    // Obs.observe(el, obsOptions);
    Obs.observe(el, obsOptions);
});
// Animation on scroll Ends
