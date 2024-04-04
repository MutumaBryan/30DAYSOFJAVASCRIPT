// question 1
// Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

const mostSkills = () => {
    let maxSkillsCount = 0;
    let personWithMostSkills = null;

    for (const user in users) {
        if (users.hasOwnProperty(user)) {
            const skillsCount = users[user].skills.length;
            if (skillsCount > maxSkillsCount) {
                maxSkillsCount = skillsCount;
                personWithMostSkills = user;
            }
        }
    }

    return personWithMostSkills;
};

// Question 2
// Count logged in users, count users having greater than equal to 50 points from the following object.
const count = () =>{
    let numberOfUsers = 0
    let atleastFiftyPoints = 0

    for (const user in users) {
        if (users.hasOwnProperty(user)) {
            if (users[user].isLoggedIn) {
                numberOfUsers++
            }
            const points = users[user].points;
            if (points >= 50){
                atleastFiftyPoints++
            }
        }
    }
    return `Number of users logged in:${numberOfUsers}, while those with at least 50 points are:${atleastFiftyPoints}`
}

// question 3
// Find people who are MERN stack developer from the users object

const mern = () => {
    const userList = Object.keys(users);
    const hasMern = userList.filter(userKey =>
        users[userKey].skills.includes("MongoDB") &&
        users[userKey].skills.includes("Express") &&
        users[userKey].skills.includes("React") &&
        users[userKey].skills.includes("Node.js")
    );
    return hasMern;
};

// question 4
// Set your name in the users object without modifying the original users object
const myName = Object.assign({}, users);
myName.Timothy = {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30
}

// question 5
// Get all keys or properties of users object
const usersKeys = Object.keys(users)

//  Question 6
//  Get all the values of users object
const userValues = Object.values(users)
