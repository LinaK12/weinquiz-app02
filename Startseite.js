function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('show');
}

const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
} else {
    console.error("Menu-Button nicht gefunden!");
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const hiddenElements = document.querySelectorAll(".timeline__hidden");

    if (toggleButton && hiddenElements.length > 0) {
        toggleButton.addEventListener("click", () => {
            hiddenElements.forEach(element => {
                element.classList.toggle("visible");
            });

            toggleButton.textContent = 
                toggleButton.textContent === "Mehr anzeigen" 
                ? "Weniger anzeigen" 
                : "Mehr anzeigen";
        });
    } else {
        console.error("Button oder versteckte Elemente nicht gefunden!");
    }
});

