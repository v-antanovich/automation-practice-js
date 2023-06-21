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

// Fourth task
let minValue = randomNumbersArray[0];
let maxValue = randomNumbersArray[0];

for (let i = 1; i < randomNumbersArray.length; i++) {
  let current = randomNumbersArray[i];

  if (current < minValue) {
    minValue = current;
  } else if (current > maxValue) {
    maxValue = current;
  }
}

// Fifth task
let countOfNumbersGreaterThanFive = 0;
for (let i = 0; i < randomNumbersArray.length; i++) {
  if (randomNumbersArray[i] > 5) {
    ++countOfNumbersGreaterThanFive;
  }
}

// Sixth task
let result,
  x = 4,
  y = 3;
result = x + y < 7 ? "less" : x + y > 7 ? "more" : "equal";
