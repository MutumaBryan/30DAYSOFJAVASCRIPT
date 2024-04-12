import { countries } from "../Day 10/countries.js";
// Q1
// Display the countries array as a table
const countriesLocal = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
    ]
    console.table(countriesLocal)

// Q2
// Display the countries object as a table
// Solution: console.table(countries)

// Q3
// Use console.group() to group logs
console.group('Countries')
console.log(countriesLocal)
console.log(countries)
console.groupEnd('Countries')