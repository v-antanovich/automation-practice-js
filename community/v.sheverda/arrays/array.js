// 1. Дан массив array, получите сумму положительных элементов

let array = [1, -4, 7, 12, -3, 0, 2];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
  }
}
console.log(sum);

// 2. Давайте произведём 5 операций с массивом.

let style = ["Jazz", "Blues"];
style.push("Rock-n-Roll");
style.splice(Math.round(style.length) / 2, 1, "Classics");
console.log(style.shift());
style.unshift("Rap", "Reggae");
console.log(style);

// 3. Преобразовать число в перевернутый массив цифр.

let number = 35231;
const arrayOfNumbers = Array.from(String(number), Number);
arrayOfNumbers.reverse();
console.log(arrayOfNumbers);

// 4. Преобразовать строку в массив.

let sentence = "I love arrays they are my favorite";
let arrayWords = sentence.split(" ");
console.log(arrayWords);

// 5. ** Переведите текст вида border-left-width в borderLeftWidth.

let text = "border-left-width";

function convertToCamelCase(str) {
  let words = str.split("-");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}
console.log(convertToCamelCase(text));

// 6.  ** Трансформировать в массив имён

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
console.log(names);

// 7.  ** Отсортировать пользователей по возрасту и получить средний возраст

users.sort((a, b) => a.age - b.age);
console.log(users);

let totalAge = users.reduce((sum, user) => sum + user.age, 0);

let averageAge = Math.round(totalAge / users.length);
console.log(averageAge);
