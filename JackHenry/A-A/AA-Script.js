(function () { 
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2003')) {
            clearInterval(bodyInterval);
            document.querySelector('#hs_cos_wrapper_standard_footer #subfooter .text-start').textContent = '© 2023 Jack Henry & Associates, Inc ®';
        }
    });
})()