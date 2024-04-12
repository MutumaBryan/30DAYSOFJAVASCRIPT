// Q1
// Calculate the total annual income of the person from the following text. 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// My Solution
let txt = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
let pattern = /\d+/g
const total = txt.match(pattern).map(Number).reduce((acc, cur)=> acc + cur,0)
console.log(total)

// Q2
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
// Extract these numbers and find the distance between the two furthest particles.
// My Solution
let coordinatesTxt = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.`
let coordinatePattern = /-?\d+(\.\d+)?/g  // Updated regex pattern
let points = coordinatesTxt.match(coordinatePattern).map(Number)
let maxDistance = Math.max(...points) - Math.min(...points)
console.log(maxDistance)

// Q3
// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') // True
// is_valid_variable('first-name') // False
// is_valid_variable('1first_name') // False
// is_valid_variable('firstname') // True
// My Solution
let is_valid_variable = (text) => {
    if (typeof text !== `string`) {
        return false
    }
    let pattern = /^[a-zA-Z_]\w*$/
    return pattern.test(text)
}
console.log(is_valid_variable(`1firstname`))
