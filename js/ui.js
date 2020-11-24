const dogContainer = document.querySelector(".dog-container");
const catContainer = document.querySelector(".cat-container");

const dogSection = document.querySelector(".dog-section");
const catSection = document.querySelector(".cat-section");

dogContainer.addEventListener("click", () => {
    if (window.getComputedStyle(dogSection).display === "none") {
        dogSection.style.display = "block";
        catSection.style.display = "none";
    }
    else if (window.getComputedStyle(dogSection).display === "block") {
        dogSection.style.display = "none";
    }
});

catContainer.addEventListener("click", () => {
    if (window.getComputedStyle(catSection).display === "none") {
        catSection.style.display = "block";
        dogSection.style.display = "none";
    }
    else if (window.getComputedStyle(catSection).display === "block") {
        catSection.style.display = "none";
    }
});

