// 1 //Используя конструкции if или switch напишите код, который проведет логин
// Кто ты?  Если админ - вывести "Ты можешь все",
// если юзер - вывести "Привет юзер",
// если неизвестный - вывести "Я тебя не знаю",
// если отмена - вывести "Пока"

switch (userRole) {
  case admin:
    console.log("Ты можешь все");
    break;
  case user:
    console.log("Привет юзер");
    break;
  case unknown:
    console.log("Я тебя не знаю");
    break;
  case cancel:
    console.log("Пока");
    break;
}

// 2 //Заполните массив из 10-и элементов случайными числами от 0 до 10.

let randomArr = [];
for (let i = 0; i < 10; i++) {
  randomArr.push(Math.round(Math.random() * 10));
}
console.log(randomArr);

// 3 //Сделайте копию массива из первого задания, добавив к каждому числу +1.
let randomArr2 = [];
for (let i = 0; i < 10; i++) {
  randomArr2[i] = ++randomArr[i];
}
console.log(randomArr2);

// 4 //Найдите минимальное и максимальные числа в массиве из второго задания.
let min = 0;
let max = 0;
for (let i = 0; i < 10; i++) {
  if (randomArr[i] > max) {
    max = randomArr[i];
  }
}
console.log(max);

for (let i = 0; i < 10; i++) {
  if (randomArr[i] < min) {
    min = randomArr[i];
  }
}
console.log(min);

// 5 //Посчитайте количество чисел больше 5 в массиве из второго задания.
let count = 0;
for (let i = 0; i < 10; i++) {
  if (randomArr[i] > 5) {
    count++;
  }
}
console.log(count);

// 6 //Сделайте копию массива из второго задания, развернув все его значения наоборот.

let randomArr3 = [];
for (i = randomArr.length - 1; i >= 0; i--) {
  for (let j = 0; j < 10; j++) {
    randomArr3[j] = randomArr[i];
    i--;
  }
}
console.log(randomArr3);

// for (let i = randomArr.length - 1; i >= 0; i--) {
//     console.log(randomArr[i]);
// }

// 7 //Перепишите конструкцию if с использованием условного оператора '?'

let result,
  x = 4,
  y = 3;

result = x + y < 7 ? "less" : x + y > 7 ? "more" : "equel";

console.log(result);

// 8 //вывести в консоль такую фигуру
let str = "*";
for (let i = 0; i < 11; i++) {
  str = "*" + str + "*";
  console.log(str);
}

// 9 // Используя сортировку пузырьком, отсортируйте массив в алфавитном порядке.
// Помните, что несколько строк могут начинаться с одинаковой буквы, и это нужно учитывать

let arr = ["zip", "sober", "sale", "class", "lecture", "alexander"];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j + 1] < arr[j]) {
      //if next value is less then swap
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
    console.log("i = " + i + " j = " + j + " " + arr);
  }
}
console.log(arr);
//получается мы никак специально не учитывали,
//что слова могут начинаться с одинаковой буквы и оно просто по правилам сравнения это сделало?
