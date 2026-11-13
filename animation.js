
document.addEventListener("DOMContentLoaded", function () {

    const animatedElements = document.querySelectorAll(
        ".hero-content, .hero-image, .about-left, .about-right, .skills-grid, .projects-container, .education-container, .certificates-container, .contact-container"
    );

    animatedElements.forEach(function (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });

});
