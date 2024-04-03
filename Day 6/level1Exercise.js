/**
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
Iterate 0 to 10 using for loop, do the same using while and do while loop
Iterate 10 to 0 using for loop, do the same using while and do while loop
Iterate 0 to n using for loop
Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
Use for loop to iterate from 0 to 100 and print only even numbers
Use for loop to iterate from 0 to 100 and print only odd numbers
Use for loop to iterate from 0 to 100 and print only prime numbers
Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]
Develop a small script which generate array of 5 random numbers

Develop a small script which generate array of 5 random numbers and the numbers must be unique
Develop a small script which generate a six characters random id:

5j2khz


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for (let index = 0; index < 11; index++) {
    console.log(index);
}

let i = 0
while(i <= 10){
    console.log(i);
    i++
}

let x = 0
do{
 console.log(x);
 x++
}while(x<=10)

//que 2
for (let index = 10; index >= 0; index--) {
    console.log(index);
}

let j = 10
while(j >= 0){
    console.log(j);
    j--
}

let y = 10
do{
 console.log(y);
 y--
}while(y>=0)

//question 3
let n = 3
for (let index = 0; index < n; index++) {
    console.log(index);
}

//question 4
let hash = `#`
let z = 10
do {
    console.log(hash)
    hash += `#`
    z--
} while (z>0);

//question 5
let multiply = 10
for (let index = 0; index <= multiply; index++) {
    let multiplyAns = index*index
    console.log(`${index} x ${index} = ${multiplyAns}`)
}
*/
//question 6
let q6 = `i i^2 i^3`
console.log(q6)
let answer6 = 0
do {
    q6 = answer6+' '+answer6**2+'   '+answer6**3
    answer6+=1
    console.log(q6)
} while (answer6 <= 10);

//b
const q6B = [`i`, `i^2`, `i^3`]
console.log(q6B)
let answer6b = 0
while(answer6b <= 10){
    q6B.splice(0,3,answer6b, answer6b**2, answer6b**3)
    answer6b+=1
    console.log(q6B)
    }

//question 7
/*for (let index = 0; index <= 100; index+=2) {
    console.log(index)
}*/
//question 8
/*for (let index = 1; index < 100; index+=2) {
    console.log(index);
}*/

//question 9
for (let index = 2; index <= 100; index++) {
    let prime = true
     for (let j = 2; j < index; j++) {
        if (index%j == 0){
            prime=false
            break;
        }
     }
     if (prime) {
        console.log(index);
     }
}

//question 10
let sum10 = 0
for (let index = 0; index <= 100; index++) {
    sum10 += index;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum10}`)

//question 11
let sum11 = 0
let sum11B = 0
for (let i = 0; i <=100; i++) {
    if (i%2 == 0) {
        sum11+=i;
    }
    else{
        sum11B +=i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sum11}. And the sum of all odds from 0 to 100 is ${sum11B}.`)
//question 12
const arrayTwelve = []
arrayTwelve.push(sum11);
arrayTwelve.push(sum11B);
console.log(arrayTwelve)

//question 13
const arrayThirteen = Array(5)
for (let index = 0; index < arrayThirteen.length; index++) {
    arrayThirteen[index] = Math.floor(Math.random()*101);
}
console.log(arrayThirteen)

//question 14
const arrayForteen = Array(5)
for (let index = 0; index < arrayForteen.length; index++) {
    const element = Math.floor(Math.random()*101);
    if (!arrayForteen.includes(element)){
        arrayForteen[index]=element;
    }
}
console.log(arrayForteen)

//question 15
let character =`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
let answerFifteen = ``
for (let index = 0; index < 6; index++) {
    answerFifteen += character.charAt(Math.floor(Math.random()*character.length))
}
console.log(answerFifteen)