/*let base = prompt(`Enter base`)
console.log(base)
let height = prompt(`Enter height`)
console.log(height)
let area = 0.5 * base * height
console.log(`The are of the triangle is ${area}`)
*/
/*
let sideA = parseInt(prompt(`Enter Side A`))
let sideB = parseInt(prompt(`Enter Side B`))
let sideC = parseInt(prompt(`Enter Side C`))
let perimeter = sideA+sideB+sideC
console.log(perimeter)

let recLength = parseInt(prompt(`Enter Length`))
let recWidth = parseInt(prompt(`Enter Width`))

let recPerimeter = (2*recLength) + (2*recWidth)
let recArea = recLength * recWidth 
console.log(`This is the area:${recArea} while this is the perimeter:${recPerimeter}`)
*/
// the x-intercept = (1,0) The Y-intercept = (0,-2) the slope(Y2-Y1/X2-X1) = 2
// Slope = 2
// the two slopes are equal
// (y = x2 + 6x + 9) where y = 0, [a2 + 2ab + b2= (a + b)2] 0=(x+3)2... x=-3
let nameLength = `Timothy`
nameLength.length > 7
? console.log(`Your name is long`)
: console.log(`Your name is short`)

let firstName = `Timothy`
let surName = `Mutuma`
firstName.length > surName.length
? console.log(`Your first name ${firstName} is longer than your surname ${surName}`)
: console.log(`Your surname ${surName} is longer than your firstname ${firstName}`)

let myAge = 25
let yourAge = 26
yourAge > myAge
? console.log(`You are ${yourAge-myAge} older than me`)
: console.log(`I am ${myAge-yourAge} older than you`)

let birthyear = parseInt(prompt(`What year were you born?`))
let today = new Date()
today.getFullYear()-birthyear >= 18
? console.log(`You are ${today.getFullYear()-birthyear} years. You are permitted to drive`)
: console.log(`You are ${today.getFullYear()-birthyear} years. You will be allowed to drive after ${18-(today.getFullYear()-birthyear)} years.`)

let age = today.getFullYear()-birthyear
console.log(`You have lived ${31536000*age} seconds`)

console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`)
console.log(`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`)
console.log(`${today.getDate()}\/${today.getMonth()+1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`)

let concate = `0`
let hours = (today.getHours()).toString()
let minutes = (today.getMinutes()).toString()
let hour12 = (today.getHours()-12).toString()

if(today.getHours() < 10 && today.getMinutes() < 10){
    console.log(`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} ${concate.concat(hours)}:${concate.concat(minutes)}am`)
} //before 10am and before 10 mins in any hour
else if(today.getHours() < 10){
    console.log(`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} ${concate.concat(hours)}:${today.getMinutes()}am`)
} //before 10am and after 10 mins in any hour
else if(today.getMinutes() < 10){
        console.log(`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} ${today.getHours()}:${concate.concat(minutes)}am`)
} //at 10 & 11am and before 10 mins in any of the two hours
else if (today.getHours() > 12) {
    console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${concate.concat(hour12)}:${today.getMinutes()}pm`)
} //after 12pm and after 10 mins in any hour
else if (today.getHours() > 12 && today.getMinutes() < 10) {
    console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${concate.concat(hour12)}:${concate.concat(minutes)}pm`)
} //after 12pm and before 10 mins in any hour
else if (today.getHours() == 12){
    console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} 12:${today.getMinutes()}`)
} //at midnight or noon and after 10minutes into the hour
else {
    console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}am`)
} // at 10 or 11am and after 10 mins in any of the two hours

