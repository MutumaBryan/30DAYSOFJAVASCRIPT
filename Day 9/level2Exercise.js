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
// Q1
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = () =>{
    const prices = products.map(price => price.price)
    const pricesTrue = prices.filter(item => !(item == null))
    const totalPrice = pricesTrue.reduce((acc, cur) => {return acc + cur}, 0)
    return totalPrice
}

// Q2
// Find the sum of price of products using only reduce reduce(callback))
const priceSum = product.reduce((acc, cur) => {
    if (cur.price !== null) {
        return acc + cur.price;
    } else {
        return acc;
    }
}, 0)

// Q3
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (patterns) => {
    const commonalities = countries.filter(country => {
        return patterns.some(pattern => country.toLowerCase().includes(pattern.toLowerCase()));
    });
    return commonalities;
}
const patternsToMatch = ['land', 'ia', 'island', 'stan'];
console.log(categorizeCountries(patternsToMatch));

// Q4
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countStartingLetters = (countries) => {
    const letterCounts = {};
    
    // Count the number of times each letter is used as the starting letter
    countries.forEach(country => {
        const firstLetter = country.charAt(0).toUpperCase();
        letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    });

    // Convert the letterCounts object to an array of objects
    const result = Object.keys(letterCounts).map(letter => ({
        letter: letter,
        count: letterCounts[letter]
    }));

    return result;
};

