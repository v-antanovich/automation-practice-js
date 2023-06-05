// Variables
let greeting = "Hello!";
console.log(greeting);


let message;
message = "any message";
console.log(message);


let number = 1;
number = 2;
console.log(number);


const PI = 3.14;
PI = 4;
console.log(PI);

var _umber = 5;
console.log(_umber); // undefined​ because var  


// Naming
let userName; // Letters, $, _, numbers (but not the first)​
let Username, Age, Gender; 
let _address;
let $tatus;
let a=1, b, c=3;
const Jar = 3, MAR = 6;
console.log(c)


// Repeated variable
// let fuel = "E95";
// let fuel = "E98";


// Math operations​
a = 10, b = 4;
console.log(a + b);   // 14​
console.log(a - b);   // 6​
console.log(a * b);   // 40​
console.log(a / b);   // 2.5​
console.log(a % b);   // 2​
console.log(a ** b);  // 10000​
console.log(a++);     // 10​
// a = 10
console.log(++a);     // 11​
console.log(b--);     // 4​
// b = 4
console.log(--b);     // 3​

let number1 = Math.min(4, 3, 19) 
console.log(number1)


// Strings
let single = 'single-quoted'; 
let double = "double-quoted";
let backticks = `backticks`;
console.log(single, double, backticks);

let newString = single.toUpperCase() + " additional part";
console.log(newString);
console.log(single);


// Interpolation (Uses backticks)​
let user = "Tom", age = 37, isMarried = false;
console.log(`Name: ${user} Age: ${age} IsMarried: ${isMarried}`); 


//  Special characters​
//  \n - new line
//  \', \", \`   - quotes
//  \\   - backslach
//  \t  - tab
console.log('\tI\'m \n\\Jane\\');


// String methods
// .length is  property
console.log("string".length); // 6​

// Accessing characters
let str = `Hello`; 

// the first character ​
console.log( str[0] ); // H ​
console.log( str.at(0) ); // H ​

// the last character ​
console.log( str[str.length - 1] ); // o ​
console.log( str[1] ); // -1 -> udefined
console.log( str.at(-1) );

// slice()
console.log("string".slice(1, 4)); // tri​

// replace()
let text = "Please open!";
let newText = text.replace("open", "close");

// toUpperCase() / toLowerCase()
console.log("string".toUpperCase()); // STRING​

// concat()
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
console.log(text);

// trim()
console.log("   string   ".trim()); // string​

// split()
text.split(",")    // Split on commas​
text.split(" ")    // Split on spaces​
text.split("|")    // Split on pipe​


// Arrays
let arr = [];  // Create an empty array​
let userNames = ['Jack', 'Tom', 'Ralf'];

console.log(userNames[0]) // Get an item by index -> Jack​

userNames[0] = 'Jane';    // Edit value​
console.log(userNames[0]) // Jane​

console.log(userNames.length) // 3


// Arrays are mutable
let fruits = ["Banana", "Lemon"] 
let arr1 = fruits;        // copied by link (both variables are pointed to the same array) ​
arr1.push("Apple");       // new item has been added to array ​
console.log( fruits );   // ? ))​


// Objects
let user1 = {      // object ​
    fn:"John",     // key(property) "name" keeps "John" value ​
    age:30         // key(property) "age" keeps 30 value ​
  };

console.log(user1.fn); 
console.log(user1["fn"]);   // John​

console.log(user1.age);  
console.log(user1["age"]);   // 30




// More complex object with properties and method
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return person.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());