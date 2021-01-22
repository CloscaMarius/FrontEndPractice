//1. creati o clasa Account care sa aiba location si name la constructor

class Account {
    name;
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

}
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;

class Transaction {
    sender;
    bank;
    amount;
    reference;

    constructor(sender, bank, amount, reference) {
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
        this.reference = reference;
    }

    get finalSum() {
        return this.amount - 10;
    }
}
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu

class Table {
    transactions;

    constructor() {
        this.transactions = new Array();
    }

    addTransaction(...element) {
        this.transactions.push(...element);
    }
}

const bankAccount = new Account('Mark', 'Iasi');

const transaction1 = new Transaction('Alex', 'BRD', 67, 'loan');
console.log(transaction1.finalSum);

const transaction2 = new Transaction('Ivan', 'BCR', 50, 'gift');
console.log(transaction2.finalSum);

const table = new Table();

table.addTransaction(transaction1, transaction2);

console.log(table);

// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)



