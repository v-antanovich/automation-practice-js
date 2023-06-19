// task 1
const login = "админ";

if (login === "админ") {
  console.log("Ты можешь всё");
} else if (login === "юзер") {
  console.log("привет юзер");
} else if (login === "неизвестный") {
  console.log("Я тебя не знаю");
} else if (login === "отмена") {
  console.log("пока");
}

// task2 random array elements
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(getRandomArbitrary(0, 11));
}
console.log(`Random array is  ${randomArray}`);

// task 3 Increase each element with 1
let newArray = [];
for (let i = 0; i < randomArray.length; i++) {
  newArray[i] = randomArray[i];
  newArray[i]++;
}
console.log(`New array is ${newArray}`);
// one more approach
// let newArray1 = randomArray.map(x => x+1);

// task 4 find min and max value
let minValue = randomArray[0];
let maxValue = randomArray[0];

for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] < minValue) {
    minValue = randomArray[i];
  }
  if (randomArray[i] > maxValue) {
    maxValue = randomArray[i];
  }
}
console.log(`minValue is ${minValue}`);
console.log(`maxValue is ${maxValue}`);

// task 5 count number of array elements more than 5
let counter = 0;
for (let item of randomArray) {
  if (item > 5) {
    counter++;
  }
}
console.log(`number of elements more than five is ${counter}`);

// taks 6 reverse array
let reversedArray = [];
for (let i = randomArray.length - 1; i >= 0; i--) {
  reversedArray.push(randomArray[i]);
}
console.log(`reversed array is ${reversedArray}`);

// task 7 rewrite if statement
let result,
  x = 4,
  y = 3;
result = x + y < 7 ? "less" : x + y > 7 ? "more" : "equal";
console.log(result);

// task 8
let str = "";
for (let i = 0; i < 6; i++) {
  str = "*" + str;
  if (str.length % 2 == 0) {
    str = str + "*";
  }
  console.log(str);
}

// task 9 bubble sorting
let stringArray = ["zip", "sober", "sale", "class", "lecture", "alexander"];
for (let i = 0; i < stringArray.length; i++) {
  for (let j = 0; j < stringArray.length - i - 1; j++) {
    if (stringArray[j + 1] < stringArray[j]) {
      let temp = stringArray[j];
      stringArray[j] = stringArray[j + 1];
      stringArray[j + 1] = temp;
    }
  }
}
console.log(`sorted array is: ${stringArray}`);
