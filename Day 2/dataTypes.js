const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10 and floor fuction rounds it down
console.log(num)

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically, Template strings

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`) //ability to use operations using ES6 method

let js = 'JavaScript'
console.log(js.length) // 10 The string length method returns the number of characters in a string included empty space.

console.log(fullName.length)  // 16
let personInfoOne = `I am ${fullName}.`
console.log(personInfoOne.length) // 22

let lastInitial = firstName.length - 1
console.log(firstName[lastInitial])//returns the last character in the string

let example = `Javascript`
console.log(example.substr(4,6)) //splices out from a string the characters between and including the index stated
// output will be: script

console.log(example.substring(0,4)) //splices out from a string the characters between the index stated.
// does not include the stopping index, in this case, character at index 4 will be excluded
// output will be Java

let example1 = `This is a sentence, with 7 words`
console.log(example1.split())//changes it into an array with one value [This is a sentence with 7 words]
console.log(example1.split(' '))// Split to an array at space -> [This,is,a,sentence,with,seven,words]
console.log(example.split(''))//makes every letter a value in the array -> [J,a,v,a,s,c,r,i,p,t]
console.log(example1.split(','))//split the array values at comma ->['This is a sentence', ' with 7 words']

console.log(example1.includes(7))//checks whether a substring character exists in string, returns a boolean
// it is case sensitive!

console.log(example.replace(`Java`,``))// replaces substring with new substring
//it is case sensitive

console.log(example.charAt(0))//returns character at the index mentioned. Output will be J
console.log(example.charCodeAt(0))//Takes index and it returns char code (ASCII number) of the value at that index

console.log(example.indexOf(`Java`))//takes a substring and returns the index of the first character in substring
//if  substring does not exist it returns -1
//it is case sensitive
//output will be 0

let one = 'I Love JavaScript. If you do not love JavaScript what else can you love.'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
console.log(one.match('love')) //output ['love', index: 33, input: 'I Love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]
console.log(one.match(patternOne))//same output returns only first instance
//['love', index: 33, input: 'I Love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]
console.log(one.match(patternTwo))//output ['Love', 'love', 'love']