const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

// Exercises: Level 2
// Q1
// Iterate through the users array and get all the keys of the object using destructuring
//My solution
const getKeys = () => {
    const keysArray =  Object.values(users).flatMap(user => {
        const { ...keys } = user
        return Object.keys(keys)
    });
    const uniqueKeys = new Set(keysArray);
    const uniqueKeyArray = Array.from(uniqueKeys);
    return uniqueKeyArray;
}

// Q2
// Find the persons who have less than two skills
// My Solution
const lessThanTwo = Object.values(users).filter(user => user['skills'].length < 2)