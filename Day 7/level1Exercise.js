/**
 * Declare a function fullName and it print out your full name.
 * Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
 * Declare a function addNumbers and it takes two two parameters and it returns sum.
 * An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
 * A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
 * A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
 * Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
 * Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
 * Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
 * Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
 * Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
 * Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
 * Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

        The same groups apply to both men and women.
        Underweight: BMI is less than 18.5
        Normal weight: BMI is 18.5 to 24.9
        Overweight: BMI is 25 to 29.9
        Obese: BMI is 30 or more
 * Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
 * Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
0
 */

//question 1
function fullName0() {
    console.log(`Timothy Mutuma`)
}

//question 2
let fullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
}
fullName(`Timothy`, `Mutuma`)

//question 3
let addNumbers = (a,b)=> a += b;
console.log(addNumbers(5,4))

//question 4
let areaOfRectangle = (length, width) => length*width
console.log(areaOfRectangle((Math.ceil(Math.random()*10)), (Math.ceil(Math.random()*10))))

//question 5
let perimeterOfRectangle = (length, width) => 2*length+ 2*width
console.log(perimeterOfRectangle((Math.ceil(Math.random()*10)),(Math.ceil(Math.random()*10))))

//question 6
let volumeOfRectPrism = (length, width,height) => length*width*height
console.log(volumeOfRectPrism((Math.ceil(Math.random()*10)),(Math.ceil(Math.random()*10)),(Math.ceil(Math.random()*10))))

//question 7
let areaOfCircle = (r, pi = 3.142) => pi*(r**2)
console.log(areaOfCircle((Math.ceil(Math.random()*10))))

//question 8
let circumOfCircle = (r, pi = 3.142) => pi*(r*2)
console.log(circumOfCircle((Math.ceil(Math.random()*10))))

//question 9
let density = (mass, volume) => mass/volume
console.log(density((Math.ceil(Math.random()*10)),(Math.ceil(Math.random()*10))))

//question 10
let speed = (distance, time) => distance/time
console.log(speed((Math.ceil(Math.random()*10)),(Math.ceil(Math.random()*10))))

//question 12
function convertCelsiusToFahrenheit(c) {
    let f = (c * (9/5))+32;
    return f;
}
console.log(convertCelsiusToFahrenheit((Math.ceil(Math.random()*10))))

//question 13
function bmi(){
    let weight = prompt('Enter your weight in kilograms:');
    let height = prompt('Enter your height in meters:');

    // Convert input to numbers
    weight = parseFloat(weight);
    height = parseFloat(height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return 'Invalid input. Please enter valid numbers for weight and height.';
    }
    let bmiValue = weight/(height**2)
    switch (true) {
        case bmiValue < 18.5:
            return `Underweight`;
        case bmiValue <= 24.9:
            return `Normal`;
        case bmiValue <= 29.9:
            return `Overweight`
        case bmiValue >= 30:
            return `Obese`;
        default:
            return `Please enter valid values for weight and height`;
    }
    
}

//question 15
function findMax(a, b, c) {
    let max = 0
    const arr = [a,b,c]

    for (let index = 0; index < 3; index++) {
          if(max<arr[index]){
            max =arr[index];
          }else if(max = arr[index]){

          }      
    }
    return max;
}
function findMax1() {
    if (arguments.length === 0) {
        return "No arguments provided";
    }

    // Check if all arguments are equal
    const allEqual = Array.from(arguments).every((value, index, array) => value === array[0]);

    if (allEqual) {
        return "All values are equal";
    }

    // Find the maximum value
    let max = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        if (max < arguments[index]) {
            max = arguments[index];
        }
    }

    return max;
}

// Example usage:
let result1 = findMax1(10, 10, 10);
console.log(result1);  // Output: "All values are equal"

let result2 = findMax1(10, 5, 8);
console.log(result2);  // Output: 10

let result3 = findMax1(15, 20, 10, 25, 18);
console.log(result3);  // Output: 25

let result4 = findMax1();
console.log(result4);  // Output: "No arguments provided"
