document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#heroCarousel .carousel-inner");
    
    function moveSlide() {
        carousel.classList.add("move");
        setTimeout(() => {
            carousel.classList.remove("move");
        }, 1000);
    }

    setInterval(moveSlide, 3000); // Change slide every 3 seconds
});


