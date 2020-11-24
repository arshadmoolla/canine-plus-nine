const catValue = document.querySelector(".cat-value");
const catSubmitButton = document.querySelector(".cat-submit-button");
const catInfo = document.querySelector(".cat-age-info");
const catForm = document.querySelector(".cat-form");

const convertCatAge = (catAge) => {
    if (catAge == 1) {
        return Math.round(16.6364);
    } 
    else if (catAge >= 1.5) {
        return Math.round(4.1364 * catAge + 15);
    }
    else {
        return undefined;
    }
}

catSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const catToHumanAge = convertCatAge(catValue.value);
    if (catToHumanAge != undefined) {
        catInfo.innerHTML = `At the age of ${catValue.value}, your cat's human age is ${catToHumanAge} years old.`;
    }
    else {
        catInfo.innerHTML = `According to the equation used, age is ${catToHumanAge} between 1 and 1.5.`;
    }
    catForm.reset();
});