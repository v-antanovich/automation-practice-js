//1. Дан массив array, получите сумму положительных элементов

let array = [1, -4, 7, 12, -3, 0, 2];
let sum = 0;
let sum1 = 0;

for (i = 0 ; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
    }
}
console.log(sum);

array.forEach(element => {
    if (element > 0) {
    sum1 += element;
    }
});
console.log(sum1);

const sumWithInitial = array.filter(moreZero => moreZero >= 0).reduce((accumulator, element) => accumulator + element);
console.log(sumWithInitial);

/* 2. Давайте произведём 5 операций с массивом. 
Создайте массив styles с элементами “Jazz” и “Blues”. 
Добавьте “Rock-n-Roll” в конец. 
Замените значение в середине на “Classics”. Расчет центрального элемента в данном массиве 
Удалите первый элемент массива и покажите его. 
Вставьте “Rap” и “Reggae” в начало массива. */

let array2 = ['Jazz', 'Blues'];
array2.push('Rock-n-Roll');
const foundAverage = Math.round(array2.length - 1) / 2;
array2[foundAverage] = 'Classics';
let removeFirstElement = array2.shift();
console.log(removeFirstElement);
array2.unshift('Rap', 'Reggae');

//3. Преобразовать число в перевернутый массив цифр. 

let number = 35231; 
const arrOfStrs = Array.from(String(number));
const arrOfNums = arrOfStrs.map((str) => Number(str));
console.log(arrOfNums.reverse());

//4. Преобразовать строку в массив. 

//"I love arrays they are my favorite" => ["I", "love", "arrays", "they", "are", "my", "favorite"]

let someStr = "I love arrays they are my favorite";
const arrOfStrs2 = someStr.split(' ');
console.log(arrOfStrs2);

//5. ** Переведите текст вида border-left-width в borderLeftWidth. 

//'background-color' => 'backgroundColor'

let newStr = 'background-color';
const arr = newStr.split("-");
for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join("").charAt(0).toLowerCase() + arr.join("").slice(1);

console.log(str2);
 
//6.  ** Трансформировать в массив имён 
//У вас есть массив объектов users, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён. 
 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = [];

for (i = 0; i < users.length; i++) {
        names.push(users[i].name);
}

let namesSecond = users.map(element => element.name);
console.log(namesSecond);

//7.  ** Отсортировать пользователей по возрасту и получить средний возраст

let ageSort = users.sort((a,b) => a.age - b.age);
console.log(ageSort);

let getAverage = users.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / users.length;
console.log(getAverage);