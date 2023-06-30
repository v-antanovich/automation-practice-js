// Task 1. Дан массив array, получите сумму положительных элементов 
//let array = [1, -4, 7, 12, -3, 0, 2] => 1 + 7 + 12 + 2 = 22   
let array = [1, -4, 7, 12, -3, 0, 2];
let arrayPositiveNumbers = array.filter((item) => item >= 0);
let result = arrayPositiveNumbers.reduce((sum, current) => sum + current);
console.log(result);

// Task 2. Давайте произведём 5 операций с массивом. 
// Создайте массив styles с элементами “Jazz” и “Blues”. 
// Добавьте “Rock-n-Roll” в конец. 
// Замените значение в середине на “Classics”. (рассчитайте индекс среднего элемента) 
// Удалите первый элемент массива и покажите его. 
// Вставьте “Rap” и “Reggae” в начало массива. 
let music = ["Jazz", "Blues"];
music.push("Rock-n-Roll");
console.log(music);
music[music.indexOf("Blues")] = "Classics";
console.log(music);
console.log(music.splice(1, 1));
music.unshift("Rap", "Reggae");
console.log(music);

// Task 3. Преобразовать число в перевернутый массив цифр. 
// Result array = [1,3,2,5,3] 
let number = 35231;
let arr = Array.from(number.toString());
console.log(arr);
arr.reverse();
console.log(arr);

// Task 4. Преобразовать строку в массив. 
//  "I love arrays they are my favorite" => ["I", "love", "arrays", "they", "are", "my", "favorite"] 
let str = "I love arrays they are my favorite";
let newArr = str.split(" ");
console.log(newArr);

// Task 5. ** Переведите текст вида border-left-width в borderLeftWidth.
//  ‘background-color' => 'backgroundColor'
let text = "background-color";
let textArr = text.split("");
console.log(textArr);
textArr.splice(10, 1);
textArr.splice(10, 1, "C");
console.log(textArr);
let newText = textArr.join("");
console.log(newText);

// Task 6.  ** Трансформировать в массив имён 
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён. 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
let names = users.map((item) => item.name);
console.log(names);

// Task 7.  ** Отсортировать пользователей по возрасту и получить средний возраст 
let ages = users.map((item) => item.age);
ages.sort((a, b) => a - b);
console.log(ages);
let sum = 0;
for (number of ages) {
    sum += number;
}
console.log(sum);
console.log(sum / ages.length);