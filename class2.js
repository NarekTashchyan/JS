1;
class Parent{
    constructor(name , age, salary){
        this.name = name
        this.age = age
        this.salary = salary
    }

}

class Child{
    constructor(name, age, mother, father){
        this.name = name
        this.age = age
        this.mother = mother
        this.father = father
    }
}

let children = [
    new Child("Narek", 5, new Parent("Liana", 40, 350000),new Parent("Arman", 45, 300000)),
    new Child("Ava", 5, new Parent("Liana", 42, 38000), new Parent("Arman", 47, 42000)),
    new Child("Ethan", 5, new Parent("Sophia", 38, 45000), new Parent("Michael", 43, 50000)),
    new Child("Mia", 2, new Parent("Emma", 41, 55000), new Parent("William", 44, 48000)),
    new Child("Noah", 5, new Parent("Olivia", 39, 60000), new Parent("James", 41, 58000)),
    new Child("Isabella", 5, new Parent("Ava", 45, 52000), new Parent("Alexander", 49, 55000)),
    new Child("Liam", 4, new Parent("Mia", 36, 42000), new Parent("Benjamin", 39, 40000)),
    new Child("Olivia", 5, new Parent("Emily", 44, 48000), new Parent("Jacob", 46, 45000)),
    new Child("Sophia", 7, new Parent("Charlotte", 47, 50000), new Parent("Jack", 50, 55000)),
    new Child("Jackson", 5, new Parent("Harper", 37, 35000), new Parent("Matthew", 40, 38000)),
    new Child("Aiden", 6, new Parent("Abigail", 40, 42000), new Parent("Daniel", 43, 45000))
]

2;

class Credit {
    constructor(amount, duration, percentage) {
        this.amount = amount;
        this.duration = duration;
        this.percentage = percentage;
    }

    total() {
        return this.amount * (1 + this.percentage / 100 * this.duration);
    }
}

class Client {
    constructor(name) {
        this.name = name;
        this.credits = [];
    }

    addCredit(credit) {
        this.credits.push(credit);
    }

    calculate() {
        let totalAmount = 0;
        for (let credit of this.credits) {
            totalAmount += credit.total();
        }
        return totalAmount;
    }

    preMonth() {
        let totalMonths = this.credits.reduce((total, credit) => total + credit.duration * 12, 0);
        return this.calculate() / totalMonths;
    }

    info() {
        return {
            name: this.name,
            monthlyCost: this.preMonth(),
            finalAmount: this.calculate()
        };
    }
}

