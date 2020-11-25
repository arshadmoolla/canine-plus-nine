const dogContainer = document.querySelector(".dog-container");
const catContainer = document.querySelector(".cat-container");

const dogImage = document.querySelector(".dog-image");
const catImage = document.querySelector(".cat-image");

const dogButton = document.querySelector(".dog-button");
const catButton = document.querySelector(".cat-button");

const dogCheckIcon = document.querySelector(".dog-check-icon");
const catCheckIcon = document.querySelector(".cat-check-icon");

const dogSection = document.querySelector(".dog-section");
const catSection = document.querySelector(".cat-section");

dogContainer.addEventListener("click", () => {
    if (window.getComputedStyle(dogSection).display === "none") {
        dogSection.style.display = "block";
        catSection.style.display = "none";
        dogButton.style.backgroundColor = "#0B609A";
        catButton.style.backgroundColor = "#5E92D4";
        dogImage.src = "images/dog-tongue.svg";
        catImage.src = "images/cat.svg";
        dogCheckIcon.src = "images/check-circle.svg";
        catCheckIcon.src = "";
    }
    else if (window.getComputedStyle(dogSection).display === "block") {
        dogSection.style.display = "none";
        dogButton.style.backgroundColor = "#5E92D4";
        dogImage.src = "images/dog.svg";
        dogCheckIcon.src = "";
    }
});

catContainer.addEventListener("click", () => {
    if (window.getComputedStyle(catSection).display === "none") {
        catSection.style.display = "block";
        dogSection.style.display = "none";
        catButton.style.backgroundColor = "#0B609A";
        dogButton.style.backgroundColor = "#5E92D4";
        catImage.src = "images/cat-tongue.svg";
        dogImage.src = "images/dog.svg";
        catCheckIcon.src = "images/check-circle.svg";
        dogCheckIcon.src = "";
    }
    else if (window.getComputedStyle(catSection).display === "block") {
        catSection.style.display = "none";
        catButton.style.backgroundColor = "#5E92D4";
        catImage.src = "images/cat.svg";
        catCheckIcon.src = "";
    }
});

