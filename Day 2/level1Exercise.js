/*
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
*/

let challenge = `30 Days of JavaScript`
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
let firstIn = challenge.indexOf(`Days`)
let lastIn = challenge.length - 1
console.log(challenge.substr(firstIn,lastIn))
console.log(challenge.includes(`Script`))
console.log(challenge.split())
console.log(challenge.split(' '))
let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(social.split(','))
console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf(`Java`)))
console.log(challenge.indexOf(`a`))
console.log(challenge.lastIndexOf(`a`))
let findBecause = 'You cannot end a sentence with because because because is a conjunction'
console.log(findBecause.indexOf(`because`))
console.log(findBecause.lastIndexOf(`because`))
console.log(findBecause.search(`because`))
let challenge1 = challenge.replace(`30 Days of JavaScript`,` 30 Days of JavaScript `)
console.log(challenge1.trim())
console.log(challenge.startsWith(`30`))
console.log(challenge.endsWith(`t`))
let findA = /a/gi
console.log(challenge.match(findA))
let piece = '30 Days of '
let piece1 = 'JavaScript'
console.log(piece.concat(piece1))
console.log(challenge.repeat(2))
