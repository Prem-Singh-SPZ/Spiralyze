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

    if (document.querySelector('.spz-4007 .komodo-header #topnav-contact')) {
        document.querySelector('.spz-4007 .komodo-header #topnav-contact').textContent = 'Get a Demo';
        document.querySelector('.spz-4007 .komodo-header #topnav-contact').setAttribute('href', '#popup_request_a_demo');
    }
}