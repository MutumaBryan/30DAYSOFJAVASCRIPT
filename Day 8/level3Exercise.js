//  Question 1
// Create an object literal called personAccount. 
// It has 
// firstName, 
// lastName, 
// incomes, 
// expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of expesnses and its description

const personAccount = {
    firstName: `Timothy`,
    lastName:  `Mutuma`,
    incomes: {
        taxiDriver: 20000,
        barber: 40000,
        chef: 80000
    },
    expenses: {
        food: 10000,
        rent: 20000,
        waterBill: 1000,
        powerBill: 1500,
        Subscriptions: 2000
    },
    totalIncome: function () {
        const incomeArray = Object.values(this.incomes)
        let sum = 0
        for (let index = 0; index < incomeArray.length; index++) {
           sum += incomeArray[index]; 
        }
        return sum;
    },
    totalExpense: function () {
        const expenseArray = Object.values(this.expenses)
        let sum = 0
        for (let index = 0; index < expenseArray.length; index++) {
           sum += expenseArray[index]; 
        }
        return sum;
    },
    accountInfo: function () {
        return `My name is:${this.firstName} ${this.lastName}, I have a total Income of:${this.totalIncome()} and my expenses amount to:${this.totalExpense()}`
    },
    accountBalance: function () {
        return `My account balance is ${this.totalIncome()-this.totalExpense()}`
    }
}

// Question 2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. 
// If user exists, inform the user that he has already an account.
const generateId = () => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function signUp() {
    const idList = users.map(user => user.username); // Extract usernames to check for duplicates

    let userName = prompt(`Enter your username`);
    if (idList.includes(userName)) {
        alert(`Username already exists. Please choose a different username.`);
        return; // Exit function if username already exists
    }

    let email = prompt(`Enter email`);
    let password = prompt(`Enter password`);
    let timeToday = new Date();
    let createdAt = `${timeToday.getDate()}/${timeToday.getMonth() + 1}/${timeToday.getFullYear()} ${timeToday.getHours()}:${timeToday.getMinutes()}`;

    users.push({
        _id: generateId(),
        username: userName,
        email: email,
        password: password,
        createdAt: createdAt
    });

    alert(`Account created successfully!`);
}
