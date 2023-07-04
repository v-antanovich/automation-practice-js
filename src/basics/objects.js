//Объекты же используются для хранения коллекций различных значений и более сложных сущностей.
// В JavaScript объекты используются очень часто, это одна из основ языка.
//В JavaScript объект — это самостоятельная единица, имеющая свойства и определённый тип. Сравним, например, с чашкой. 
//У чашки есть цвет, форма, вес, материал, из которого она сделана, и т.д. 
//Точно так же, объекты JavaScript имеют свойства, которые определяют их характеристики.

let user = new Object(); // синтаксис "конструктор объекта"
let user2 = {};  // синтаксис "литерал объекта"


let person = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};

let personData = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};


console.log(options["colors"]["border"]);
//black
console.log(options.colors.bg);
//red

//удалить свойство объекта пару ключ значение

delete options.name;
console.log(options)



console.log(Object.keys(options));
//[ 'name', 'width', 'height', 'colors' ]
console.log(Object.keys(options).length);



//перебрать все свойства объекта for in
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};


for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`)
}

// Свойство name имеет значение test
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство colors имеет значение[object Object] -> это стринговое представление JS вложенного объекта


for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}
/*Свойство name имеет значение test
Свойство width имеет значение 1024
Свойство height имеет значение 1024
Свойство border имеет значение black
Свойство bg имеет значение red*/


//узнать количество свойств в обьекте

let counter = 0;
for (let key in options) {
    counter++;
}
console.log(counters);


//создание методов для обьекта

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();
//Test


//Деструктуризация объекта
const { border, bg } = options.colors;
console.log(border, bg);
//balck


options2 = {
    ...options,
    name: 'new test'
}

console.log(options2)


//массивы в объектах
let country = {

    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital: {

        name: "Берн",
        population: 126598
    },
    cities: [
        { name: "Цюрих", population: 378884 },
        { name: "Женева", population: 188634 },
        { name: "Базель", population: 164937 }
    ]
};

// вывод всех элементов из country.languages
console.log("Официальные языки Швейцарии");
for (var i = 0; i < country.languages.length; i++)
    console.log(country.languages[i]);

// вывод всех элементов из country.cities
console.log("Города Швейцарии");
for (var i = 0; i < country.cities.length; i++)
    console.log(country.cities[i].name);
