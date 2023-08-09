// 1. Дан массив array, получите сумму положительных элементов 

let array = [1, -4, 7, 12, -3, 0, 2] 
let sum = 0

for (let numbers of array){
    if (numbers > 0) 
    sum += numbers
}

console.log(sum)

// 2. Давайте произведём 5 операций с массивом. 

// Создайте массив styles с элементами “Jazz” и “Blues”. 

// Добавьте “Rock-n-Roll” в конец. 

// Замените значение в середине на “Classics”. (рассчитайте индекс среднего элемента) 

// Удалите первый элемент массива и покажите его. 

// Вставьте “Rap” и “Reggae” в начало массива. 

let styles = ["Jazz", "Blues"]
styles.push("Rock-nRoll")

let middleIndex = Math.floor((styles.length-1)/2)
styles[middleIndex] = "Classics";

let firstElement = styles.shift()

styles.unshift("Rap", "Reggae")

console.log(styles)
console.log(firstElement)


  

// 3. Преобразовать число в перевернутый массив цифр. 

let number = 35231; 
let string = String(number)
let arr2 = string.split('')
console.log(arr2.reverse())

 

// 4. Преобразовать строку в массив. 

//  "I love arrays they are my favorite" => ["I", "love", "arrays", "they", "are", "my", "favorite"] 

 let string2 = 'I love arrays they are my favorite'
 let arr3 = string2.split(' ')
 console.log(arr3)

// 5. ** Переведите текст вида border-left-width в borderLeftWidth. 

//  ‘background-color' => 'backgroundColor' 

 let text = 'background-color'
 let arr4 = text.split('-')
for (let i = 1; i < arr4.length; i++){
    arr4[i] = arr4[i][0].toUpperCase() + arr4[i].slice(1);
}
 let string3 = arr4.join('');
 console.log(string3)


// 6.  ** Трансформировать в массив имён 

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён. 

let john = { name: "John", age: 25 };  

let pete = { name: "Pete", age: 30 };  

let mary = { name: "Mary", age: 28 };  

let users = [ john, pete, mary ];  

let names = users.map((user) => user.name)
console.log(names)

// 7.  ** Отсортировать пользователей по возрасту и получить средний возраст 

users.sort((a, b) => a.age - b.age)
console.log(users)

let totalAge = users.reduce((sum, users) => sum + users.age, 0)
console.log(totalAge)

let averageAge = Math.round(totalAge / users.length)
console.log(averageAge)