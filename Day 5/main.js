/*
Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13
In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added

add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

import {countries} from './countries.js'
import {webTechs} from './web_techs.js'

let p = /[.,]/g
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words=text.replace(p,'')
console.log(words)
console.log(words.split(' '))

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.splice(2,1,`Onions`)
shoppingCart.unshift(`Meat`)
shoppingCart.push(`Sugar`)
shoppingCart.splice(shoppingCart.indexOf(`Honey`),1)
shoppingCart.splice(shoppingCart.indexOf(`Onions`),1,`Green Tea`)
console.log(shoppingCart)

switch (countries.includes(`Ethiopia`)){
    case true:
        console.log('ETHIOPIA');
        break;
    case false:
        countries.unshift(`Ethiopia`)
        console.log(countries)
        break;
}

switch (webTechs.includes(`Sass`)) {
    case true:
        console.log('Sass is a CSS preprocess');
        break;

    default:
        webTechs.unshift(`Sass`);
        console.log(webTechs)
        break;
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)