/*
The following is an array of 10 students ages:

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
Find the middle country(ies) in the countries array
Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half. 
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(`Minimum age is ${ages[0]}, while the maximum age is ${ages[ages.length-1]}`)

switch (ages.length%2 == 0) {
    case true:
        let a = ages.length-1;
        let b = Math.floor(a/2);
        console.log(ages.slice(b,b+2));
        break;

    case false:
        let d = ages.length-1;
        let e = Math.floor(d/2);
        console.log(ages.slice(e,e+1));
        break;
}

let i = 0
let sum = 0
while (i < ages.length) {
    let next = ages[i]
    sum = sum + next
    i++
}
let average = sum/ages.length
console.log(average)

let range = ages[ages.length-1] - ages[0]
console.log(range)

let minAve = Math.abs(ages[0]-average)
let maxAve = ages[ages.length-1] - average
console.log(`Here is max-average:${maxAve} while this is min-average:${minAve}`)