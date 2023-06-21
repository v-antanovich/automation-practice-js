/* 1. Используя конструкции if или switch напишите код, который проведет логин 
Кто ты?  Если админ - вывести "Ты можешь все", если юзер - вывести "Привет юзер", 
если неизвестный - вывести "Я тебя не знаю", если отмена - вывести "Пока" */

//Note: through debugging html - open with live server

/* let role = prompt("What is your role?");

if (role!= '' && role != null) {
    switch (role) {
    case 'admin': 
        alert('Ты можешь все');
        break;
    case 'user':
        alert('Привет юзер');
        break;
    default:
        alert('Я тебя не знаю');
        break;
    }
} else alert('Пока');

location.reload(); */

/* 2. Заполните массив из 10-и элементов случайными числами от 0 до 10. */

const randomNumber = new Array(10);

for (i = 0; i < randomNumber.length; i++) {
    randomNumber[i] = Math.floor(Math.random() * 10);
};

console.log(randomNumber);

/* 3. Сделайте копию массива из первого задания, добавив к каждому числу +1. */

let copyOneRandomNumberArray = [...randomNumber];

for (i = 0; i < copyOneRandomNumberArray.length; i++) {
    copyOneRandomNumberArray[i] = copyOneRandomNumberArray[i] + 1;
};

console.log(copyOneRandomNumberArray);

/* 4. Найдите минимальное и максимальные числа в массиве из второго задания. */

let minArrayNumber = randomNumber[0];
let maxArrayNumber = randomNumber[0];

for (i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] < minArrayNumber) {
        minArrayNumber = randomNumber[i]
    } else if (randomNumber[i] > maxArrayNumber) {
        maxArrayNumber = randomNumber[i]
    }
}

console.log(randomNumber);
console.log(minArrayNumber);
console.log(maxArrayNumber);

/* 5. Посчитайте количество чисел больше 5 в массиве из второго задания. */

let amountNumberOverFive = 0;
for (i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] > 5) {
        amountNumberOverFive = amountNumberOverFive + 1;
    }
};

console.log(amountNumberOverFive);

/* 6. Сделайте копию массива из второго задания, развернув все его значения наоборот.
 Пример: Дан массив [0, 1, 2, 3, 4, 5]. Ответ должен быть [5, 4, 3, 2, 1, 0] */

let copyTwoRandomNumberArray = [...randomNumber];
let result = [];

for (i = copyTwoRandomNumberArray.length - 1; i >= 0; i--) {
    result.push(copyTwoRandomNumberArray[i])
}

console.log(result);

/* 7. Перепишите конструкцию if с использованием условного оператора '?'

let result;
x = 4;
y = 5;

if (x + y < 7) {
    result = 'less';
} else if (x + y > 7) {
    result = 'more';
} else {
    result = 'equel';
};
console.log(result); */

x = 4;
y = 5;

x + y < 7 ? result = 'less' : x + y > 7 ? result = 'more' : result = 'equel'

console.log(result);

/* 8. Вывести в консоль такую фигуру */

for (let i = 1; i < 13; i += 2) { //рисуем строки
    let space = "";
  for (let n = i; n < 13; n += 2) { // рисуем пробелы
    space = space + " ";
  }
  for (let k = 0; k < i; k++) { // рисуем *
    space = space + '*';
  }  
  console.log(space);
}

/* 9. Дан массив из буквенных строк разного размера, например: ["zip", "sober", "sale", "class", "lecture", "alexander"]
Используя сортировку пузырьком, отсортируйте массив в алфавитном порядке.
Помните, что несколько строк могут начинаться с одинаковой буквы, и это нужно учитывать */

let randomWords = ["zip", "sober", "sale", "class", "lecture", "alexander"];

for (i = 0; i < randomWords.length; i++) {
    for (j = 0; j < (randomWords.length - i - 1); j++) {
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if (randomWords[j] > randomWords[j + 1]) {
            // If the condition is true
            // then swap them
            let swap = randomWords[j]
            randomWords[j] = randomWords[j + 1]
            randomWords[j + 1] = swap
        }
    }
}

console.log(randomWords);