document.addEventListener("DOMContentLoaded", (event) => {
    var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
        document.body.classList.toggle("no-scroll");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    window.addEventListener("click", function (e) {
        if (e.target.classList.contains('card-img')) {
            document.querySelector(".modal .modal-header .profile-image").innerHTML = e.target.innerHTML;
            document.querySelector(".modal .modal-header .profile .name").textContent = e.target.parentElement.querySelector('.card-content .speaker-name').textContent;
            document.querySelector(".modal .modal-header .profile .designation").textContent = e.target.parentElement.querySelector('.card-content .speaker-position').textContent;
            document.querySelector(".modal .modal-header .profile .organzation").textContent = e.target.parentElement.querySelector('.card-content .speaker-company').textContent;
            document.querySelector(".modal .modal-copy").innerHTML = e.target.parentElement.querySelector('.card-content .about-speaker').innerHTML;
            toggleModal();
        }
    });

    // trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});