import { countries } from "../Day 10/countries.js";

// Q1
// Destructure the countries object print name, capital, population and languages of all countries
countries.forEach(({ name, capital, population, languages }) => {
    // console.log('Name:', name);
    // console.log('Capital:', capital);
    // console.log('Population:', population);
    // console.log('Languages:', languages.join(', ')); // Assuming languages is an array
    // console.log('------------------------');
})

// Q2
// A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
// Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const studentArray = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//   console.log(name, skills, jsScore, reactScore)

// My Solution
const [name, skills, [jsScore, , , reactScore]] = studentArray;
console.log(name, skills, jsScore, reactScore);

// Q3
// Write a function called convertArrayToObject which can convert the array to a structure object.
    // const students = [
    //     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    //     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    //   ]
    // console.log(convertArrayToObject(students))
    // [
    //   {
    //     name: 'David',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [98,85,90,95]
    //   },
    //   {
    //     name: 'John',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [85, 80,85,80]
    //   }
    // ]
const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  const convertArrayToObject = (students) => {
    return students.map(([name, skills, scores]) => {
        return { name, skills, scores };
    });
};

// Q4
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// - Add Bootstrap with level 8 to the front end skill sets
// My solution
const newStudent = {...student};
newStudent.skills.frontEnd.push({skill:'Bootstrap', level: 8});

// - Add Express with level 9 to the back end skill sets
// My solution
newStudent.skills.backEnd.push({skill:'Express', level: 9});

// - Add SQL with level 8 to the data base skill sets
// My solution
newStudent.skills.dataBase.push({skill:'SQL',level: 8});

// - Add SQL without level to the data science skill sets
// My solution
newStudent.skills.dataScience.push('SQL');
console.log(newStudent)
//  The copied object output should look like this:
// js
//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }