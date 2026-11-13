
document.addEventListener("DOMContentLoaded", function () {

    const cursor = document.createElement("div");
    const cursorDot = document.createElement("div");

    cursor.classList.add("custom-cursor");
    cursorDot.classList.add("cursor-dot");

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    document.addEventListener("mousemove", function (e) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";

    });

    const clickableElements = document.querySelectorAll(
        "a, button, input, textarea"
    );

    clickableElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {
            cursor.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", function () {
            cursor.classList.remove("cursor-hover");
        });

    });

});
