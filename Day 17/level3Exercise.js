// Create an object called personAccount. 
// It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// My solution
const personAccount = {
    firstName: 'Timothy', 
    lastName: 'Mutuma', 
    incomes: { taxi: 20000, shop: 30000, office: 50000}, 
    expenses: { shopping: 10000, rent: 15000, bills: 5000},
    totalIncome() {
        let sum = 0
        Object.entries(personAccount.incomes).flatMap(element => {
            sum = sum + element[1]
            return sum
        })
        return sum
    },
    totalExpense(){
        let sum = 0
        Object.entries(personAccount.expenses).flatMap(element => {
            sum = sum + element[1]
            return sum
        })
        return sum
    }, accountInfo(){
        return `This is ${this.firstName} ${this.lastName}, with a total income of ${this.totalIncome()}, and total expenses of ${this.totalExpense()} and balance of ${this.accountBalance()}`
    }, accountBalance(){
        return this.totalIncome() - this.totalExpense()
    }
}
console.log(personAccount.accountInfo())