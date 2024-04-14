// Q1
// Store you first name, last name, age, country, city in your browser localStorage.
const person ={
    firstname: 'Timothy',
    lastName: 'Mutuma', 
    age: '26', 
    country: 'Kenya', 
    city: 'Nairobi'
}
const personStringify = JSON.stringify(person)
localStorage.setItem('person',personStringify)
console.log(localStorage)