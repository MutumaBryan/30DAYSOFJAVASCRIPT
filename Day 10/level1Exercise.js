const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// Q1
// create an empty set
const set = new Set();

// Q2
// Create a set containing 0 to 10 using loop
for (let index = 0; index < 11; index++) {
    set.add(index)    
}

// Q3
// Remove an element from a set
set.delete()

// Q4
// Clear a set
set.clear();

// Q5
// Create a set of 3 string elements from array
const set2 = new Set([...countries]);

// Q6
// Create a map of countries and number of characters of a country
const map = new Map();
const arr = countries.map(country => ({ key: country, value: country.length }));
for (const iterator of arr) {
    map.set(iterator.key, iterator.value);
}
