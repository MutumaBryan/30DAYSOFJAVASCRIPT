// Q1
// Create a student object. 
// The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. 
// Store the student object in your browser localStorage.
const student = {
    firstName: 'Timothy', lastName: 'Mutuma', age: 26, skills: ['JavaScript'], country: 'Kenya', enrolled: true
}
const studentStringify = JSON.stringify(student)
localStorage.setItem('student',studentStringify)
console.log(localStorage)