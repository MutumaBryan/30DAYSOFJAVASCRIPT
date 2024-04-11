const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// question 1
// Explain the difference between forEach, map, filter, and reduce.
/**
 * forEach takes element, index, & array arguments that returns all values from the array as individual values after iterating through the array.
 * map takes element, index & array arguments that returns an array after iterating through each of the values.
 * filter takes element, index & array arguments that returns an array of elements that satisfy a specific condition.
 * reduce takes accumulator, current value & initial value arguments that returns an arithmetic of the accumulator & current value where initial value is the starting point for the accumulator and current value is the point in the array that the iteration is in.
 */
/**
 * forEach:
 * Arguments: It takes a callback function with three parameters: the current element being processed, the index of that element, and the array itself.
 * Purpose: forEach is used for iterating through an array and executing a function on each element of the array. It does not return anything and is primarily used for its side effects, such as updating variables or performing operations for each array element.
 * map:
 * Arguments: Similar to forEach, it also takes a callback function with three parameters: the current element, the index, and the array itself.
 * Purpose: map is used for transforming each element of an array based on a function and returns a new array with the transformed elements. It creates a new array with the same length as the original array.
 * filter:
 * Arguments: It also takes a callback function with the current element, index, and array as parameters.
 * Purpose: filter is used to create a new array containing only elements that pass a specific condition or test provided by the callback function. It returns a subset of the original array based on the condition specified in the callback.
 * reduce:
 * Arguments: Unlike forEach, map, and filter, reduce takes a different set of parameters: an accumulator, the current element, the current index, and the array.
 * Purpose: reduce is used for aggregating or "reducing" an array into a single value. It iterates through the array and applies a function to each element to accumulate a single result. The accumulator holds the result of each iteration, and the final value is returned after all iterations are completed.
 */

// question 2
// Define a callback function before you use it in forEach, map, filter or reduce.
/**
 * A callback function is a function called as an argument of another function.
 */

// question 3
// Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country))

// Q4
// Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name))

// Q5
// Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number))

// Q6
// Use map to create a new array by changing each country to uppercase in the countries array.
const countryUpperCase = countries.map(country => country.toUpperCase())

// Q7
// Use map to create an array of countries length from countries array.
const countryLen = countries.map(country => {[country, country.length]})

// Q8
// Use map to create a new array by changing each number to square in the numbers array
const numSquare = numbers.map(num => num*num)

// Q9
// Use map to change to each name to uppercase in the names array
const nameUpper = names.map(country => country.toUpperCase())

// Q10
// Use map to map the products array to its corresponding prices.
const prices = products.map(item => item.price);

// Q11
// Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));

// Q12
// Use filter to filter out countries having six character.
const countriesLengthSix = countries.filter(country => country.length === 6);

// Q13
// Use filter to filter out countries containing six letters and more in the country array.
const countriesLengthOverSix = countries.filter(country => country.length >= 6);

// Q14
// Use filter to filter out country start with 'E';
    const countryStartWithE = countries.filter(country => country.toLowerCase().charAt(0) === `e`);

// Q15
// Use filter to filter out only prices with values.
    const pricesTrue = products.filter(item => !(item.price == null));

// Q16
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    return arr.filter(item => typeof item === 'string');
}

// Q17
// Use reduce to sum all the numbers in the numbers array.
const sumNum = numbers.reduce((accu, cur) =>{
    return accu + cur;
}, 0)

// Q18
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concCountries = countries.reduce((acc, cur, index) => {
    if (index === countries.length - 1) {
        return acc + cur + ' are north European countries.';
    } else if (index === countries.length - 2) {
        return acc + cur + ', and ';
    } else {
        return acc + cur + ', ';
    }
}, '');

// Q19
// Explain the difference between some and every
/**
 * some checks if at least one element meets the condition.
 * every checks if every element meets the condition
 */

// Q20
// Use some to check if some names' length greater than seven in names array
const isGreaterThanSeven = names.some(name => name.length > 7);

// Q21
// Use every to check if all the countries contain the word land
const hasLand = countries.every(country => country.toLowerCase().includes('land'))

// Q22
// Explain the difference between find and findIndex.
/**
 * find returns the first element that meets the search requirements.
 * findIndex returns the index of the the element that meets the search requirements
 */

// Q23
// Use find to find the first country containing only six letters in the countries array
const onlySixChar = countries.find(country => country.length === 6)

// Q24
// Use findIndex to find the position of the first country containing only six letters in the countries array
const onlySixCharIndex = countries.findIndex(country => country.length === 6)

// Q25
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex(country => country.toLowerCase() === 'norway');

// Q26
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex(country => country.toLowerCase() === 'russia')
