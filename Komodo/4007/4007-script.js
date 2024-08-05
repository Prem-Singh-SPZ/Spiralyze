let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        loadTest();
    }
});

function loadTest() {
    // Set test class
    document.body.classList.add('spz-4007');

    if (document.querySelector('.spz-4007 #topnav-contact')) {
        document.querySelectorAll('.spz-4007 #topnav-contact').forEach((el) => {
            el.textContent = 'Get a Demo';
            el.setAttribute('href', '#popup_request_a_demo');
        });
    }
}