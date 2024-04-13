// Q1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// My Solution
export class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    get getColor(){
        return this.color;
    }
    get getLegs(){
        return this.legs;
    }
    get getInfo(){
        return `This is a ${this.getName}. It is ${this.getAge} years old. It's ${this.getColor} in color and has ${this.getLegs} legs.`
    }
}
// Create a Dog and Cat child class from the Animal Class.
// My solution
class Dog extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs);
    }
}
class Cat extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs);
    }
}