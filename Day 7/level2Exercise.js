/**
 * Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08
Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
Writ a function which generates a randomUserIp.

Write a function which generates a randomMacAddress
Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
 */

//question 1
function solveLinEquation(a, b, c) {
    let x, y;

    // Check if 'a' is not zero to avoid division by zero
    //find x-intercept where y=0
    if (a !== 0) {
        x = -c / a;
    } else {
        x = "Undefined (a is zero)";
    }

    // Check if 'b' is not zero to avoid division by zero
    //find y-intercept where x=0
    if (b !== 0) {
        y = -c / b;
    } else {
        y = "Undefined (b is zero)";
    }
    console.log(`x-intercept:(${x},0) y-intercept: (0,${y})`)

    return { x, y };
}

// Example usage:
let result = solveLinEquation(2, 3, -6);
console.log(result);  // Output: { x: 3, y: 2 }

//question 2
function solveQuadratic(a, b, c) {
    let x1
    let x2

    // Check if 'a' is not zero to avoid division by zero
    if (a !== 0)    {
        let discriminant = b ** 2 - 4 * a * c;

        if (discriminant >= 0) {
            x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        } else {
            // Complex roots (non-real solutions)
            x1 = "Complex root";
            x2 = "Complex root";
        }
    }
    else{
        x1 = "Undefined (a is zero)";
        x2 = "Undefined (a is zero)";
    }

    return (x1, x2);
}

//question 3
function printArray(array) {
    if (!Array.isArray(array)) {
        console.log(`Kindly pass an array as an argument`);
    } else {
        array.forEach(element => {
            console.log(element);
        });
    }
}

//question 4
function showDateTime(){
    let time = new Date()
    let result = `${formatNumber(time.getDate())}/${formatNumber(time.getMonth() + 1)}/${time.getFullYear()} ${formatNumber(time.getHours())}:${formatNumber(time.getMinutes())}`;
    return (result);
}
console.log(showDateTime())

function formatNumber(number) {
    return number < 10 ? '0' + number 
                       : number;
}

//question 5
function swapValues(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log('Input only numbers, not strings');
        return;
    }

    let temp = x;
    x = y;
    y = temp;

    console.log(`Values after swapping: x = ${x}, y = ${y}`);
}

// Example usage:
swapValues(5, 10); // Output: Values after swapping: x = 10, y = 5

//question 6
function reverseArray(array) {
    let len = array.length;

    // If the array has less than 2 elements, it's already reversed
    if (len < 2) {
        console.log('Not enough values');
        return array;
    }

    // Swap elements from the start and end of the array until reaching the middle
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let temp = array[i];
        array[i] = array[len - 1 - i];
        array[len - 1 - i] = temp;
    }

    return array;
}

//question 7
function capitalizeArray(array) {
    
    for (let index = 0; index < array.length; index++) {
        if (typeof array[index] === 'string'){
            array[index] = array[index].toUpperCase()
        }
    }
    return array;
}

//question 8
function addItem(item) {
    const arr = Array();
    arr.push(item);
    return arr
}

//question 9
function removeItem(index){
    const arr = [1,2,3,4,5,6,7,8,9,10];
    arr.splice(index, 1);
    return arr;
}

//question 10
function sumOfNumbers(number) {
    if (typeof number !== 'number') {
        console.log('Please provide a number as an argument');
        return;
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

//question 11
function sumOfOdds(number) {
    if(typeof number !== 'number')
    {
        console.log('Please provide a number as an argument');
        return;
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if(i%2 !== 0){
            sum += i; 
        }
    }
    return sum;
}

//question 13
let evensAndOdds = (number, sumEven = 0, sumOdd = 0) => {
    number = Math.abs(number)
    for(let i=1; i<=number; i++){
        if(i%2 === 0){
            sumEven++;
        }
        else{
            sumOdd++;
        }
    }
    return [sumEven, sumOdd];
}

//question 14
let summation = (...args) =>{
    let sum = 0
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}

//question 15
let randomUserIp = () => {
    // Generate random numbers for each class of IP address
    let classA = Math.floor(Math.random() * 256);
    let classB = Math.floor(Math.random() * 256);
    let classC = Math.floor(Math.random() * 256);
    let classD = Math.floor(Math.random() * 256);

    // Concatenate the numbers to form the IP address string
    let ipAddress = `${classA}.${classB}.${classC}.${classD}`;

    return ipAddress;
}

//question 16
let randomMacAddress = () => {
    const hex = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`A`,`B`,`C`,`D`,`E`,`F`]
    let len = hex.length
    let a = hex[Math.floor(Math.random() * len)]+hex[Math.floor(Math.random() * len)];
    let b = hex[Math.floor(Math.random() * len)]+hex[Math.floor(Math.random() * len)];
    let c = hex[Math.floor(Math.random() * len)]+hex[Math.floor(Math.random() * len)];
    let d = hex[Math.floor(Math.random() * len)]+hex[Math.floor(Math.random() * len)];
    let e = hex[Math.floor(Math.random() * len)]+hex[Math.floor(Math.random() * len)];
    let f = hex[Math.floor(Math.random() * len)]+hex[Math.floor(Math.random() * len)];

    let macAddress = `${a}-${b}-${c}-${d}-${e}-${f}`
    return macAddress;
}
console.log(randomMacAddress());