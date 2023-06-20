// First task
let login = prompt("Please enter your login");

switch (login) {
  case "admin":
    console.log("You can do everything");
    break;
  case "user":
    console.log("Hello user");
    break;
  case null:
    console.log("Bye");
    break;
  default:
    console.log("I don't know who you are");
    break;
}

// Second task
let randomNumbersArray = [];

do {
  randomNumbersArray.push(Math.floor(Math.random() * 11));
} while (randomNumbersArray.length < 10);

// Third task
const randomNumbersArrayCopy = [...randomNumbersArray];

for (let i = 0; i < randomNumbersArrayCopy.length; i++) {
  randomNumbersArrayCopy[i] += 1;
}
