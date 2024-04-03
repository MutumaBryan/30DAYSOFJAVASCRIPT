let firstName, lastName, country, city, age, isMarried, year
firstName = `Timothy`
lastName = `Mutuma`
country = `Kenya`
city = `Nairobi`
age = 25
isMarried = false
year = 2023

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)

console.log(typeof `10` == typeof 10)
console.log(parseInt(`9.8`) == 10)

console.log(10 > 9, `hello` == `hello`, true == true)
console.log(NaN == false, 10 == true, `` == true)
console.log(4 >= 3, 4 <= 3, 4 == '4', 4 === '4')
console.log(`python`.length > `jargon`.length)

const tell = new Date()
console.log(`${tell.getFullYear()}\/${tell.getMonth()+1}/${tell.getDate()}, ${tell.getHours()}:${tell.getMinutes()}`)
console.log(tell.getTime()/100)