// Create an object called personAccount. 
// It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// My solution
const personAccount = {
    firstname: 'Lizer', 
    lastname: 'Muriuki', 
    incomes: { rent: 60000, office: 80000, investments: 25000},
    expenses:{ shopping: 25000, bills: 9000, family:15000, travel: 5000, maintenance: 4000},
    totalIncome(){
        const sum = Object.values(this.incomes).reduce((acc, cur)=> acc + cur, 0);
        return sum
    },
    totalExpenses(){
        const sum = Object.values(this.expenses).reduce((acc, cur)=> acc + cur, 0);
        return sum
    },
    addIncome(description, amount) {
        if (typeof amount === 'number') {
            this.incomes[description] = amount;
        } else {
            console.error('Amount should be a number.');
        }
    },
    addExpense(description, amount) {
        if (typeof amount === 'number') {
            this.expenses[description] = amount;
        } else {
            console.error('Amount should be a number.');
        }
    },
    accountBalance(){
        return this.totalIncome()-this.totalExpenses();
    },
    accountInfo(){
        return `This is ${this.firstname} ${this.lastname} account. They earn a total of ${this.totalIncome()}sh monthly and have ${this.totalExpenses()} sh in monthly expenses. The account's balance comes to:${this.accountBalance()}`
    }
}
console.log(personAccount.accountInfo())