//Hometask #3. Loops and Conditions

//Задача 1: используя конструкции if или switch напишите код, который проведет логин.

//Конструкция switch
let input = "админ";
switch (input) {
    case "админ":
        console.log("Ты можешь все");
        break;
    case "юзер":
        console.log("Привет юзер");
        break;
    case "неизвестный":
        console.log("Я тебя не знаю");
        break;
    default:
        console.log("Пока");
        break;
};

//Конструкция if.
//Чтобы посмотреть вариант с if: установи node.js, открой командную строку, перейди в папку s.mikhailau и заранай команду "conditionsAndLoopsInput.js"

//Задача 2: заполните массив из 10-и элементов случайными числами от 0 до 10.

let task2Array = [];
i = 0;
while (i < 10) {
    let testElement = getRandomInRange(0, 10);

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    task2Array.push(testElement);
    i++;
};
console.log(`array with 10 elements is ${task2Array}`);

//Задача 3: Сделайте копию массива из первого задания, добавив к каждому числу +1.

let task2ArrayFirstCopy = [];
for (let index = 0; index < task2Array.length; index++) {
    task2ArrayFirstCopy.push(task2Array[index] + 1);
};
console.log(`add 1 to every number in array ${task2ArrayFirstCopy}`);

//Задача 4: Найдите минимальное и максимальные числа в массиве из второго задания.
//Вариант 1
let maxNumber = Math.max(...task2Array);
console.log(`maxNumber is ${maxNumber}`);

let minNumber = Math.min(...task2Array);
console.log(`minNumber is ${minNumber}`);

//Вариант 2
let maximum = task2Array[0];
for (let j of task2Array) {
    //m = task2Array[j];
    if (j > maximum) {
        maximum = j
    }
}
console.log(`maxNumber is ${maximum}`);

minimum = task2Array[0];
for (let j of task2Array) {
    if (j < minimum) {
        minimum = j
    }
}
console.log(`minNumber is ${minimum}`);

//Задача 5: Посчитайте количество чисел больше 5 в массиве из второго задания.
m = 0;
for (let j of task2Array) {
    if (j > 5) {
        m++
    }
}
console.log(`count of numbers > 5 is  ${m}`);

//Задача 6: Сделайте копию массива из второго задания, развернув все его значения наоборот.
//Пример: Дан массив [0, 1, 2, 3, 4, 5]. Ответ должен быть [5, 4, 3, 2, 1, 0]
//Вариант 1.
let task2ArraySecondCopyOptionOne = [];
for (let index = task2Array.length - 1; index >= 0; index--) {
    task2ArraySecondCopyOptionOne.push(task2Array[index]);
};
console.log(`reverted array is ${task2ArraySecondCopyOptionOne}`);

//Вариант 2.
let task2ArraySecondCopyOptionTwo = task2Array;
task2ArraySecondCopyOptionTwo.reverse();
console.log(`reverted array is ${task2ArraySecondCopyOptionTwo}`);

//Задача 7: Перепишите конструкцию if с использованием условного оператора '?'
let result, x = 4, y = 3;
if (x + y < 7) {
    result = 'less';
} else if (x + y > 7) {
    result = 'more';
} else {
    result = 'equal';
};
console.log(result);

result = (x + y < 7) ? 'less' : (x + y > 7) ? 'more' : 'equal';
console.log(result);

//Задача 8: Вывести в консоль такую фигуру
//      *

//     ***

//    *****

//   *******

//  *********

// ***********

//Вариант 1.
console.log('      *\n\n     ***\n\n    *****\n\n   *******\n\n  *********\n\n ***********');

//Вариант 2.
let height = 6;
let asterisk = '*';
let space = ' ';
let spaceStart = height;
let asteriskStart = 1;

for (let i = 0; i < height; i++) {
    console.log(space.repeat(spaceStart) + asterisk.repeat(asteriskStart));
    spaceStart = --spaceStart;
    asteriskStart = asteriskStart + 2;
    console.log('');
};

//Задача 9: Дан массив из буквенных строк разного размера, например: ["zip", "sober", "sale", "class", "lecture", "alexander"]
//Используя сортировку пузырьком, отсортируйте массив в алфавитном порядке.
//Помните, что несколько строк могут начинаться с одинаковой буквы, и это нужно учитывать
let arr = ["zip", "sober", "sale", "class", "lecture", "alexander"];
for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
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