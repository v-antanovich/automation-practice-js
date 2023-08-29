// 1. Дан массив array, получите сумму положительных элементов
// => 1 + 7 + 12 + 2 = 22

let array = [1, -4, 7, 12, -3, 0, 2];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum = sum + array[i];
  }
}
console.log(sum); //22
// 2 option - just for me
let array1 = [1, -4, 7, 12, -3, 0, 2];
let sum1 = 0;
for (arr of array1) {
  if (arr > 0) {
    sum1 = sum1 + arr;
  }
}
console.log(sum1); //22

// 2. Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами “Jazz” и “Blues”.
let styles = ["Jazz", "Blues"];
// Добавьте “Rock-n-Roll” в конец.
styles.push("Rock-n-Roll");
// Замените значение в середине на “Classics”.
//(рассчитайте индекс среднего элемента, чтобы сработало с любым массивом нечетной длины)
for (let i = 0; i < styles.length; i++) {
  if (styles.length - 1 - i == 0 + i) {
    console.log(i);
  }
}
// Удалите первый элемент массива и покажите его.
console.log(styles.shift());
// Вставьте “Rap” и “Rap” в начало массива.
styles.unshift("Rap", "Rap");
console.log(styles);

//3. Преобразовать число в перевернутый массив цифр.
let number = 35231;
let numbersArray = Array.from(String(number), Number).reverse();
console.log(numbersArray); // [1,3,2,5,3]

//4. Преобразовать строку в массив.
let loveString = "I love arrays they are my favorite";
let loveArray = loveString.split(" ");
console.log(loveArray);

//5. ** Переведите текст вида border-left-width в borderLeftWidth.
let borderString = "border-left-width";
let mergedString = borderString.split("-").join("");
console.log(mergedString);
// ‘background-color' => 'backgroundColor'
let backgroundString = "background-color";
let mergedString2 = backgroundString.split("-").join("");
console.log(mergedString2);
// не нашла быстрое и рабочее решение, чтобы Cоlor было с Upper-case без цикла для стринги

//6. ** Трансформировать в массив имён

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let users = [
  (john = { name: "John", age: 25 }),
  (pete = { name: "Pete", age: 30 }),
  (mary = { name: "Mary", age: 28 }),
];

let names = [];

// for (let i = 0; i < users.length; i++) {
//   for (let key in users[i]) {
//     if (key == 'name') {
//       names.push(users[i][key]);
//     }
//   }
// }

//improved:
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

console.log(names);
// 7. ** Отсортировать пользователей по возрасту и получить средний возраст
users.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(users);

let counter = 0;
let avarageAge;
// for (let i = 0; i < users.length; i++) {
//     for (let key in users[i]) {
//       if (key == 'age') {
//         counter = counter+users[i][key];
//       }
//     }

//   }

//improved:
for (let i = 0; i < users.length; i++) {
  counter = counter + users[i].age;
}

console.log((avarageAge = Math.round(counter / users.length)));
