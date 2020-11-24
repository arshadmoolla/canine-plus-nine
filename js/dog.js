const dogValue = document.querySelector(".dog-value");
const dogSubmitButton = document.querySelector(".dog-submit-button");
const dogInfo = document.querySelector(".dog-age-info");
const dogForm = document.querySelector(".dog-form");

const convertDogAge = (dogAge) => {
    return Math.round(16 * Math.log(dogAge) + 31);
}

dogSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const dogToHumanAge = convertDogAge(dogValue.value);
    dogInfo.innerHTML = `At the age of ${dogValue.value}, your dog's human age is ${dogToHumanAge} years old.`;
    dogForm.reset();
});
