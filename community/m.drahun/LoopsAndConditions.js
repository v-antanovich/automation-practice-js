//Task 1 Используя конструкции if или switch напишите код, который проведет логин
let login = "User";
switch (login) {
    case "Admin":
        console.log("You can do everything");
        break;
    case "User":
        console.log("Hi User");
        break;
    case "Undefined":
        console.log("I don't know you");
        break;
    default:
        console.log("Bye");
        break;
};

//Tasks 2 Заполните массив из 10-и элементов случайными числами от 0 до 10.
let numbersArray = [];
let min = 0;
let max = 10;
let count = 10;

for (let i = min; i < count; ++i) {
    numbersArray.push(Math.round(Math.random() * 10));
}

console.log(numbersArray);

//Task 3 Сделайте копию массива из первого задания, добавив к каждому числу +1.
for (let i = 0; i < numbersArray.length; i++) {
    numbersArray[i]++;
};
console.log(numbersArray);

//Task 4 Найдите минимальное и максимальные числа в массиве из второго задания
//Method 1 
for (let i = 0; i < numbersArray.length; i++) {
    for (let j = 0; j < numbersArray.length - i - 1; j++) {
        if (numbersArray[j + 1] < numbersArray[j]) {
            let tempArray = numbersArray[j];
            numbersArray[j] = numbersArray[j + 1];
            numbersArray[j + 1] = tempArray;
        }
    }
}
console.log(`Min: ${numbersArray[0]}`);
console.log(`Max: ${numbersArray[9]}`);

//Task 4 Method 2
let minimum = numbersArray[0];
let maximum = numbersArray[0];
for (numbers of numbersArray) {
    if (numbers < minimum) {
        minimum = numbers;
    }
    if (numbers > maximum) {
        maximum = numbers;
    }
}
console.log(`Min: ${minimum}`);
console.log(`Max: ${maximum}`);

//Task 5 Посчитайте количество чисел больше 5 в массиве из второго задания.
let countNumbers = 0;
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 5) {
        countNumbers++;
    }
}
console.log(`Count is ${countNumbers}`);

//Task 6 Сделайте копию массива из второго задания, развернув все его значения наоборот.
for (let i = numbersArray.length - 1; i >= 0; i--) {
    console.log(numbersArray[i]);
};

//Task 7 Перепишите конструкцию if с использованием условного оператора '?'
let result, x = 4, y = 3;
console.log((x + y < 7) ? "less" : (x + y > 7) ? "more" : "equal");

//Task 9 
//Дан массив из буквенных строк разного размера, например: ["zip", "sober", "sale", "class", "lecture", "alexander"]
//Используя сортировку пузырьком, отсортируйте массив в алфавитном порядке.
let lettersArray = ["zip", "sober", "sale", "class", "lecture", "alexander"];
for (let i = 0; i < lettersArray.length; i++) {
    for (let j = 0; j < lettersArray.length - i - 1; j++) {
        if (lettersArray[j + 1] < lettersArray[j]) {
            let tempArray = lettersArray[j];
            lettersArray[j] = lettersArray[j + 1];
            lettersArray[j + 1] = tempArray;
        }
    }
}
console.log(lettersArray);

//Task 8
let
    lines = 6,
    space = ''
star = "*";

for (s = 0; s < lines - 1; s++) {
    space += ' ';
}

for (i = 0; i < lines; i++) {
    if (i == 0)
        console.log(space + star);
    else {
        let tree = '';
        for (j = 0; j < i + 1; j++) {
            tree += star;
        }
        for (k = 0; k < i; k++) {
            tree += star;
        }
        space = space.substring(0, space.length - 1);
        console.log(space + tree);
    }
};