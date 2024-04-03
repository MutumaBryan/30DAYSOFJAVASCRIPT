function emp() {
    console.log(`My first Javascript function`);
}
emp()

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers(10, 20)
//
let a = parseInt(prompt(`Enter number`))
const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
  }
console.log(areaOfCircle(a))

// Lets use the arguments object
function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]


function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

let makeUpperCase = (...arraUpper) => {
    const arr = [];
    for (let iterator of arraUpper) {
        if (typeof iterator === `String`){
        iterator = iterator.toUpperCase();
        arr.push(iterator);}
        else{
            arr.push(iterator);
        }
    }
    return arr;
}
console.log(makeUpperCase(...['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']))