//Hometask #1

let storeName = 'Biedronka';
let storeLocation = 'Poznań';
console.log(`Welcome to ${storeName} ${storeLocation}!`)

let storeDescription = {
    goods: 1000,
    employees: ['Olivia Ponton', 'Indina Menzel', 'Jake Short'],
products:{
    olej: 14.99,
    piwo: 1.99,
    kinder: 4.49
    },
    isOpen: true
}
console.log(storeDescription.employees[0]);
console.log(storeDescription.products.kinder);

//Hometask #2
let firstName = "Sergei";
let lastName = "Mikhailov";
let fullName = function() {
    return firstName + " " + lastName;
  };
let personPhysicalAppearance = {
    sex: "male",
    age: 39,
    height: 192,
    build: "slim",
    face: "oval",
    eyes: "brown"
};
let godelProjects = ["Sorted", "Intelliflo", "Aon"];

let isMarried = true;
let maritalStatus;
if (isMarried == true) {
    maritalStatus = "married"
} else {
    maritalStatus = "single"
};
console.log(`${fullName()} is a ${personPhysicalAppearance.age}-year-old ${maritalStatus} man.`);
