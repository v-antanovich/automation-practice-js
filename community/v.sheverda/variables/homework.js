const storeLocation = 'UAE';
const storeName = `Nike ${storeLocation}`;

let storeDescription = {
    goods: 10000,
    employees: ['Vlad Sheverda', 'John Doe', 'Jane Doe'],
    products: {
        airMaxSneakers: 330,
        revolutionSneakers: 335,
        downshifterSneakers: 245
    },
    storeCurrency: 'AED',
    isOpen: true
}

console.log(`Our ${storeName} has ${storeDescription.goods}`);
console.log(`The total number of employess is ${storeDescription.employees.length}`)
console.log(`The best employee is ${storeDescription.employees[0]}`);
console.log(`The price of AirMax is ${storeDescription.products.airMaxSneakers} ${storeDescription.storeCurrency}`);
if (storeDescription.isOpen) {
    console.log(`${storeName} is open`);
} else {
    console.log(`${storeName} is closed`);
}


let person = {
    name: 'Vlad',
    surname: 'Sheverda',
    age: 26,
    gender: 'Male',
    nationality: 'Belarus',
    hobbies: ['Reading', 'Football', 'Travelling'],
    getFullName: function () {
        return `${this.name} ${this.surname}`;
    }
}

console.log(person.getFullName());
