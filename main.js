const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const ally_slider = document.querySelector(".slider");


if (navToggle != null) {
    navToggle.addEventListener('click', () => {
        //determines whether the hamburger is clicked or not
        primaryNav.hasAttribute("data-visible") 
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);


        primaryNav.classList.toggleAttribute("data-visible");
        primaryHeader.toggleAttribute("data-overlay");
    });
}


if(ally_slider != null) {
    const slider = new A11YSlider(ally_slider, {
        adaptiveHeight: false,
        dots: true,
        centerMode: true,
        arrows: false,
    });
}