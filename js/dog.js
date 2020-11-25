const dogValue = document.querySelector(".dog-value");
const dogSubmitButton = document.querySelector(".dog-submit-button");
const dogInfo = document.querySelector(".dog-age-info");
const dogAgeVaries = document.querySelector(".dog-age-varies");
const dogForm = document.querySelector(".dog-form");

const convertDogAge = (dogAge) => {
    return Math.round(16 * Math.log(dogAge) + 31);
}

dogSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const dogToHumanAge = convertDogAge(dogValue.value);
    if (dogValue.value < 0.15 || dogValue.value == "") {
        dogInfo.innerHTML = `Please enter a valid age.`;
        dogAgeVaries.innerHTML = ``;
    }
    else {
        dogInfo.innerHTML = `At the age of ${dogValue.value}, your dog's human age is ${dogToHumanAge} years old.`;
        dogAgeVaries.innerHTML = `Note: Age varies according to the adult size of the breed.`;
    }
    dogForm.reset();
});
