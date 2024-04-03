let isRaining = true
isRaining   //? statement runs in case of true otherwise : runs
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let test = 10
test > 0
    ? console.log(`${test} is a truthy statement`)
    : console.log(`${test} is a falsy statement`)

const now = new Date()
console.log(now)
console.log(now.getFullYear())