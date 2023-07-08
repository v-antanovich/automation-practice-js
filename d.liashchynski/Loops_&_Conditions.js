/* 1. Используя конструкции if или switch напишите код, который проведет логин
Кто ты?  Если админ - вывести "Ты можешь все", если юзер - вывести "Привет юзер", 
если неизвестный - вывести "Я тебя не знаю", если отмена - вывести "Пока" */

let login = 'admin';

switch (login) {
  case 'admin' :
    console.log('Ты можешь все');
    break;
  case 'user' :
    console.log('Привет юзер');
    break;
  case null :
    console.log('Пока');
    break;
  default : 
    console.log('Я тебя не знаю');
    break;
};

/* if (login == 'admin') {
    console.log('Ты можешь все') 
} else if (login == 'user') {
    console.log('Привет юзер')
} else if (login === null) {
    console.log('Пока')
} else {
    console.log('Я тебя не знаю')
}; */




//2. Заполните массив из 10-и элементов случайными числами от 0 до 10.
let arr = [];

for (let i = 0; i < 10; i++) {
  let randomArr = Math.floor(Math.random() * 11);
  arr.push(randomArr);
}

console.log(arr);


//3. Сделайте копию массива из первого задания, добавив к каждому числу +1.
//Execute the script with the previuos one (№2)
let copyRandomArr = [];

for (let i = 0; i < arr.length; i++) {
  let newValue = arr[i] + 1;
  copyRandomArr.push(newValue);
}

console.log(copyRandomArr);


// 4. Найдите минимальное и максимальные числа в массиве из второго задания.
let minNumber = Math.min(...arr);
let maxNumber = Math.max(...arr);

console.log('Min number: ' + minNumber);
console.log('Max number: ' + maxNumber);

 
// 5. Посчитайте количество чисел больше 5 в массиве из второго задания.
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    count++;
  }
}

console.log('Amount of numbers greater than 5: ' + count);

 
/* 6. Сделайте копию массива из второго задания, развернув все его значения наоборот.
 Пример: Дан массив [0, 1, 2, 3, 4, 5]. Ответ должен быть [5, 4, 3, 2, 1, 0] */
let copyArr = arr.slice().reverse();
console.log('Reversed array: ' + copyArr);


// 7** Перепишите конструкцию if с использованием условного оператора '?'
let result, x=4, y=3;
/* if (x + y < 7) {
 result = 'less';
} else if (x + y > 7) {
 result = 'more';
} else {
 result = 'equel';
};
console.log(result); */

result = (x + y < 7) ? 'less' : (x + y > 7) ? 'more': 'equel';
console.log(result);

/* result = (x + y < 7) ? 'less' :
result = (x + y > 7) ? result = 'more' : 'equel';
console.log(result); */


 
/* 8** вывести в консоль такую фигуру
      *
     ***
    *****
   *******
  *********
 *********** 
 */

for (let i = 1; i <= 6; i++) {
    let stars = "*".repeat(2 * i - 1);
    let spaces = " ".repeat(6 - i);
        console.log(spaces + stars);
  };





