<img src="/images/canine-plus-nine-logo.png" alt="Canine Plus Nine" width="400">

# Overview

This is a web application that uses mathematical equations based on scientific research to convert the age of cats and dogs into the equivalent human age. It's built with HTML, SCSS and JavaScript.

# How Does It Work?

## Dog Calculator <img src="/images/dog-tongue.png" alt="Dog" width="50">

This calculator uses an equation described in this [research article](https://doi.org/10.1016/j.cels.2020.06.006).

### Equation Used

<img src="/images/dog-equation.png" alt="Dog Equation" width="360">

That's 16 multiplied by the natural logarithm of the dog's real age with 31 added to the total.

### JavaScript Function Used to Implement Equation

```javascript
const convertDogAge = (dogAge) => {
    return Math.round(16 * Math.log(dogAge) + 31);
}
```

## Cat Calculator <img src="/images/cat-tongue.png" alt="Cat" width="50">

This calculator uses an equation described in this [research article](https://doi.org/10.21767/2572-5459.100034).

### Equation Used

<img src="/images/cat-equation.png" alt="Cat Equation" width="360">

According to this piecewise function, when a cat is 1 year old, its human age is 16.6364 years old. If a cat's age is a value greater than or equal to 1.5 then its age in human years is its age multiplied by 4.1364 with 15 added to the total. However, if any other value is provide (e.g. 0.2 or 1.3) then the output is undefined.

### JavaScript Function Used to Implement Equation

```javascript
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
```