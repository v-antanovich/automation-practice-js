// if statement 

let condition = false;

if (condition) {
    console.log("code executed");
}

// if else 

let age = 18;

if (age >= 18) {
    console.log("drinking is allowed");
} else {
    console.log("drinking is not allowed");
}

// else if 

let time = 19;

if (time < 10) {
    console.log("good morning");
} else if (time < 18) {
    console.log("good day");
} else {
    console.log("good evening");
}

// ? : - тернарный оператор
// (condition) ? (statement if condition is true) : (statement if condition is false)
// p.s. можно использовать со скобками или без

condition = false;

console.log(condition ? "statement 1" : "statement 2");

if(condition){
    console.log("statement 1");
}else{
    console.log("statement 2");
}

let number = 5;
let abs = number >= 0 ? number : -number;
console.log(abs);

//switch statement and break

let broswer = "1";

switch (broswer) {
    default:
        console.log("Browser is not supported");
        break;
    case "Chrome":
        console.log("Open Google Chrome...");
        break;
    case "IE":
        console.log("Open Internet Explorer...");
        break;
    case "Opera":
        console.log("Open Opera...");
        break;
}


// loops

// for loop

for (let i = 0;;i++) {
    console.log(i);

    if(i == 10){
        break;
    }
}

for (let i = 0, a = 1, b = 2; i < a + b; ++i) {
    console.log(i);
}

// nested loops

let twoDimensionalArray = [[1,2], [2,3,4], [5,6,7]];

for(let i = 0; i < twoDimensionalArray.length; ++i){
    console.log(twoDimensionalArray[i]);
}

for(let i = 0; i < twoDimensionalArray.length; ++i){
    for(let j = 0; j < twoDimensionalArray[i].length; ++j){
        console.log(twoDimensionalArray[i][j]);
    }
}

// for in

let object = {
    a: 1,
    b: "string",
    c: 12.2
};

for(property in object){
    console.log(property);
}

for (property in object) {
    console.log(property + ": " + object[property]);
}

let array = [5, 3, 2, 15, 22, 65];
for (idx in array) {
    console.log(idx + ": " + array[idx]);
}

// for of

let browsers = ["Chrome", "Safari", "Opera", "Edge"];
for (let browser of browsers) {
    console.log(browser);
}

// while

i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// while with break

i = 0;
while (i < 10) {
    console.log(i);
    i++;

    if (i === 2) {
        break;
    }
}

// do while

i = 0;
while (i > 1) {
    console.log("code executed");
}

i = 0;
do {
    console.log("code executed");
} while (i > 1);

// basic examples of usage

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let numbers = [5, 6, 3, 2, 1, 11, 15, 18, 22];
let sum = 0;
for (number of numbers) {
    sum += number;
}
console.log(sum);
console.log("Average num is :" + sum/numbers.length);

let numberToFindIndex = 1;
let indexFound = -1;
for(let i = 0; i < numbers.length; ++i){
    if(numbers[i] === numberToFindIndex){
        indexFound = i;
        break;
    }
}
console.log(indexFound);

for (let i = 0; i < numbers.length; ++i) {
    numbers[i]++;
}

console.log(numbers);

// bubble sort
let arr = [5, 61, 1, 55, 60, 120, 3, 1, 14];

for(let i = 0; i < arr.length; ++i){
    for(let j = 0; j < arr.length - i - 1; ++j){
        if(arr[j + 1] < arr[j]){
            //if next value is less then swap
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        console.log("i = " + i + " j = " + j + " " + arr);
    }
}
console.log(arr);
