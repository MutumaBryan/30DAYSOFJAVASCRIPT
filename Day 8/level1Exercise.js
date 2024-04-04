// Question 1
// Create an empty object called dog
const dog = {}

// question 2
// Print the the dog object on the console
console.log(dog)

// question 3
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = `Alex`,
dog.legs = 4 ,
dog.color = `grey`,
dog.age = 1
dog.bark = function () {
    return `woof woof`
}

//  question 4
// Get name, legs, color, age and bark value from the dog object
console.log(`${dog[`name`]},${dog[`legs`]}, ${dog[`color`]}, ${dog[`age`]}, ${dog.bark()}`)

// question 5
// Set new properties the dog object: breed, getDogInfo
dog.breed = `husky`,
dog.getDogInfo = function () {
    return `Name:${this.name}, Number of legs:${this.legs}, Color:${this.color}, Breed:${this.breed}, Age:${this.age}`
}