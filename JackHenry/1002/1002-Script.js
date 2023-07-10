(function () { 
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-1002')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-1002');
        }
    });
})()