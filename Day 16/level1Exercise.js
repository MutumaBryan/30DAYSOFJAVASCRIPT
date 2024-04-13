const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
    }

// Q1
// Change skills array to JSON using JSON.stringify()
    const skillsObj = Object.entries(users).flatMap(([key, value])=>{
        return {[key]: JSON.stringify(value.skills)}
    })
    const txt = JSON.stringify(skillsObj)
    console.log(skillsObj)

// Q2
// Stringify the age variable
const ageObj = Object.entries(users).flatMap(([key, value])=> {
    return {[key]: JSON.stringify(value.age)}
})
const ageJSON = JSON.stringify(ageObj)
console.log(ageJSON);

// Q3
// Stringify the isLoggedIn variable
const isMarriedObj = Object.entries(users).flatMap(([key, value]) => {
    return {[key]:JSON.stringify(value.isLoggedIn)}
})
const isMarriedJSON = JSON.stringify(isMarriedObj)
console.log(isMarriedJSON)