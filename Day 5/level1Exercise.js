/*
Declare an empty array;
Declare an array with more than 5 number of elements
Find the length of your array
Get the first item, the middle item and the last item of the array
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies*/

const arr = Array()
const arra = Array(5)

arra.splice(0,5,`Hello`, false,1,2,3)
let len = arra.length

console.log(arra[0]) // first element
let lastIndex = len - 1
console.log(arra[lastIndex]) // last element

//middle element
if (len%2 == 0){
    len = len/2
    console.log(arr[len])
}
else{
    len = Math.floor(len/2)
    console.log(arra[len])
}

const mixedDataTypes = [
    `Hello`,
    true,
    1998,
    NaN,
    {name: `Timothy`, age: 25},
    arra
]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

const itCompanies = [
    `Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`
]
console.log(itCompanies)

let x = itCompanies.includes(`Microsoft`)
if (x===true){
    console.log(itCompanies[itCompanies.indexOf(`Microsoft`)])
}else{
    console.log(`not found`)
}

for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index];
    if (element.indexOf(`o`) == element.lastIndexOf(`o`)){}
    else{
        console.log(element)
    }
}
//itCompanies.sort()
//itCompanies.reverse()

//itCompanies.slice(0,3)
console.log(itCompanies.slice(-3))

let y = itCompanies.length
console.log(y)
if (y%2 == 0){
    let a = Math.floor((y-1)/2)
    console.log(itCompanies.slice(a,a+2))
}else{
    let a = (y-1)/2
    console.log(itCompanies.slice(a,a+1))
}

itCompanies.splice(0,1)
console.log(itCompanies)

y = itCompanies.length
console.log(y)  
if (y%2 == 0){
    let a = Math.floor((y-1)/2)
    itCompanies.splice(a,2)
    console.log(itCompanies)
}else{
    let a = (y-1)/2
    itCompanies.splice(a,1)
    console.log(itCompanies)
}

itCompanies.splice(-1,1)
console.log(itCompanies)

itCompanies.splice()