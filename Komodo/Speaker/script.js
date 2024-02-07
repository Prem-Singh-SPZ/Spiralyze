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
            console.log(e.target)
            toggleModal();
        }
    });

    // trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});

