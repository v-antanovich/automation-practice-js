/* 1. Дан массив array, получите сумму положительных элементов
let array = [1, -4, 7, 12, -3, 0, 2] => 1 + 7 + 12 + 2 = 22 */

let array = [1, -4, 7, 12, -3, 0, 2];
let sum = 0;
for (let i = 0; i < array.length; ++i) {
    if (array[i] > 0) {
        sum = sum + array[i];
    }
};
console.log(sum);

/* 2. Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами “Jazz” и “Blues”.
Добавьте “Rock-n-Roll” в конец.
Замените значение в середине на “Classics”. (рассчитайте индекс среднего элемента)
Удалите первый элемент массива и покажите его.
Вставьте “Rap” и “Reggae” в начало массива. */

let arr = ['Jazz', 'Blues'];
arr[2] = 'Rock-n-Roll';

let midNum = Math.floor(arr.length / 2);
arr[midNum] = "Classics"; 
//arr[arr.length-2] = 'Classics';
console.log(arr.shift());
arr.unshift('Rap', 'Reggae');
console.log(arr);


/*3. Преобразовать число в перевернутый массив цифр.
let number = 35231; */
let number = 35231;
let arrayDigits = String(number).split('').map(Number).reverse();
console.log(arrayDigits);
// Result array = [1,3,2,5,3]


/* 4. Преобразовать строку в массив.
 "I love arrays they are my favorite" => ["I", "love", "arrays", "they", "are", "my", "favorite"] */

 let string = 'I love arrays they are my favorite'
 let arr = string.split(' ');
 console.log(arr);





