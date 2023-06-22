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

// Seventh task
let randomNumbersArrayReversed = [];
for (let i = randomNumbersArray.length - 1; i >= 0; i--) {
  randomNumbersArrayReversed[randomNumbersArrayReversed.length] =
    randomNumbersArray[i];
}

// Eighth task
let treeHeight = 6;

for (let i = 1; i <= treeHeight; i++) {
  let spaces = " ".repeat(treeHeight - i);
  let stars = "*".repeat(2 * i - 1);
  let tree = spaces + stars;
  console.log(tree);
}

// Ninth task
let wordsArray = ["zip", "sober", "sale", "class", "lecture", "alexander"];

for (let i = 0; i < wordsArray.length - 1; i++) {
  for (let j = 0; j < wordsArray.length - i - 1; j++) {
    if (wordsArray[j] > wordsArray[j + 1]) {
      let swapElement = wordsArray[j];
      wordsArray[j] = wordsArray[j + 1];
      wordsArray[j + 1] = swapElement;
    }
  }
}
