//task#1

let twoLetterCode = "BY";
let shopName = `Wildberries ${twoLetterCode}`;
console.log(shopName);

let storeDescription = {
    goods: 10000,
    employees: ["John Lennon", "Freddy Mercury", "Ozzy Osbourn"],
    products: {
        guitar: 1000,
        bass_guitar: 800,
        drums: 1200
    },
    isOpen: true

}

//task#2

let person = {
    name: "Larysa",
    lastName: "Shornikava",
    location: "BY",
    age: 39,
    isSingle: false,   
    hobbies: ["cinema", "music", "travelling"],
    kids: [true, "Ksenia", 10],
    getFullName: function () {
        return `${this.name} ${this.lastName}`;
    }
}

console.log(person.getFullName());




