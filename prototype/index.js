class Bank{
    #name
    constructor(name){
      this.#name=name;
    }

    get name(){
        return this.#name;
    }
}

let c1=new Bank("Abhishek");
console.log(c1);
console.log(c1.name);

class Account extends Bank{
    #balance
    constructor(name,balance){
        super(name);
        this.#balance=balance;
    }

    get balance(){
        return this.#balance;
    }
}

let b1=new Account("Abhishek",10000);

console.log(b1)
console.log(b1.name)
console.log(b1.balance);

class SavingsAccount extends Account{
#interestRate
constructor(name,balance,interestRate){
super(name,balance);
this.#interestRate=interestRate;
}

get interestRate(){
    return this.#interestRate
}

set interestRate(value){
 this.#interestRate=value;
}
}


let r1=new SavingsAccount("Abhishek",20000,10)



console.log(r1)
console.log(r1.name)
console.log(r1.balance)
console.log(r1.interestRate)
r1.interestRate=20;
console.log(r1.interestRate)
