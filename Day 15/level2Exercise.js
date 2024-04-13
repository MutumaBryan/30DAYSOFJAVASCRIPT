import { Animal } from "./level1Exercise.js";
// Q1
// Override the method you create in Animal class
// My Solution
class Squirrel extends Animal {
    constructor(name, age, color, legs, weight){
        super(name, age, color, legs)
        this.weight;
    }

    get getInfo(){
        return `${super.getInfo()} It weighs ${this.weight} grams.`;
    }
}