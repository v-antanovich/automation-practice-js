//Hometask #4. Arrays

// 1. Дан массив array, получите сумму положительных элементов 
//let array = [1, -4, 7, 12, -3, 0, 2] => 1 + 7 + 12 + 2 = 22
let array = [1, -4, 7, 12, -3, 0, 2];
let sum = 0;
for (const item of array) {
    if (item > 0) {
        sum += item;
    }
}
console.log(sum);

// 2. Давайте произведём 5 операций с массивом. 
// Создайте массив styles с элементами “Jazz” и “Blues”. 
// Добавьте “Rock-n-Roll” в конец. 
// Замените значение в середине на “Classics”. (рассчитайте индекс среднего элемента) 
// Удалите первый элемент массива и покажите его. 
// Вставьте “Rap” и “Reggae” в начало массива. 
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
//styles[parseInt((styles.length/2))] = "Classics";
styles[Math.floor(styles.length / 2)] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);

// 3. Преобразовать число в перевернутый массив цифр. 
let number = 35231;
let array3 = ("" + number).split("").map(Number).reverse();
console.log(array3);
//Result array = [1,3,2,5,3] 

// 4. Преобразовать строку в массив. 
//  "I love arrays they are my favorite" => ["I", "love", "arrays", "they", "are", "my", "favorite"]
let string4 = "I love arrays they are my favorite";
let array4 = Array.from(string4.split(" "));
console.log(array4);

// 5. ** Переведите текст вида border-left-width в borderLeftWidth. 
//  ‘background-color' => 'backgroundColor' 
let string5 = "border-left-width";
let array5 = string5.split("-");
for (let index = 1; index < array5.length; index++) {
    array5[index] = array5[index].charAt(0).toUpperCase() + array5[index].slice(1);

}
string5 = array5.join("");
console.log(string5);

// 6.  ** Трансформировать в массив имён 
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён. 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
let names = [];
for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);

}
console.log(`Array of names: ${names}`);

// 7.  ** Отсортировать пользователей по возрасту и получить средний возраст
users.sort((a, b) => a.age - b.age);
console.log(users);
let averageAge = (users.reduce((sum, current) => sum + current.age, 0)) / users.length;
console.log(`Average age is ${averageAge}`);