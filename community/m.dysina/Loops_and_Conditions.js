//1. Используя конструкции if или switch напишите код, который проведет логин

//Кто ты?  Если админ - вывести "Ты можешь все", если юзер - вывести "Привет юзер",
//если неизвестный - вывести "Я тебя не знаю", если отмена - вывести "Пока"
let userRole = prompt('Кто ты?')

if (userRole === 'admin'){
    console.log('Ты можешь все')
} else if (userRole === 'user'){
    console.log('Привет юзер')
} else if (userRole === null){
    console.log('Пока')
} else {
    console.log('Я тебя не знаю')
}


//2. Заполните массив из 10-и элементов случайными числами от 0 до 10.

const arr = [];
for(let i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * 10);
}
console.log(arr);


//3. Сделайте копию массива из первого задания, добавив к каждому числу +1.

const arr2 = [];
for (let i = 0; i < arr.length; i++)
    arr2[i] = arr[i] +1;

console.log(arr2);


//4. Найдите минимальное и максимальные числа в массиве из второго задания.

let minNumber = arr2[0];
let maxNumber = arr2[0];
for (let i = 1; i < arr2.length; i++){
    if (arr2[i] < minNumber){
        minNumber = arr2[i]
    }
    else if(arr2[i] > maxNumber){
        maxNumber = arr2[i]
    }
}

console.log(minNumber)
console.log(maxNumber)

//5. Посчитайте количество чисел больше 5 в массиве из второго задания.

let arrCount = 0;
for (let i = 0; i < arr2.length; i++){
    if (arr2[i] > 5){
        arrCount++;
    }
}
console.log(arrCount)



//6. Сделайте копию массива из второго задания, развернув все его значения наоборот.
//Пример: Дан массив [0, 1, 2, 3, 4, 5]. Ответ должен быть [5, 4, 3, 2, 1, 0]

let arrReverse = [];

for (let i = arr2.length -1; i >= 0; i--){
    arrReverse[arrReverse.length] = arr2[i];
}

console.log(arrReverse)


//7** Перепишите конструкцию if с использованием условного оператора '?'

// let result, x=4, y=3;
// if (x + y < 7) {
//  result = 'less';
// } else if (x + y > 7) {
//  result = 'more';
// } else {
//  result = 'equel';
// };

// console.log(result);

let result, x = 4, y = 3;
result = (x + y < 7) ? 'less': (x + y > 7) ? 'more' : 'equal';

console.log(result)




//8** вывести в консоль такую фигуру
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// ---------------

//9** Дан массив из буквенных строк разного размера, например: ["zip", "sober", "sale", "class", "lecture", "alexander"]
//Используя сортировку пузырьком, отсортируйте массив в алфавитном порядке.

const arr3 = ["zip", "sober", "sale", "class", "lecture", "alexander"];
for (let i = 0; i < arr3.length; i++){
    for (let j = 0; j < arr3.length - i; j++){
        if (arr3[j] > arr3[j+1]){
            let arr4 = arr3[j];
            arr3[j] = arr3[j + 1];
            arr3[j + 1] = arr4;
        }
    }
}

console.log(arr3)

//Помните, что несколько строк могут начинаться с одинаковой буквы, и это нужно учитывать

