const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

const numbers = [1, 2, 3, 4, 5,6, 7, 8, 9]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

const arra = Array() // creates an empty array
const eightEmptyValues = Array(8)// creates 8 empty slots in the array
const eightX = eightEmptyValues.fill(`X`) // fills all 8 slots with charater X
const five0 = Array(5).fill(0)
let zeroStr = five0.join()
let siX = numbers.slice(1,3)

console.log(siX)// it doesn't include the ending position, results: [20, 3]