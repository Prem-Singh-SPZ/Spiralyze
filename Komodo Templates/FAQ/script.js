$().ready(function () {
    console.log('test')

    document.addEventListener("DOMContentLoaded", (event) => {
        window.addEventListener('click', function (el) {
            el.target.classList.toggle('collapsed');
            let id = el.target.getAttribute('data-bs-target');
            this.document.querySelector(id).classList.toggle('show');
        },);
    });

});
