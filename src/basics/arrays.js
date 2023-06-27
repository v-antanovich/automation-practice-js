//          Массивы

// массив является объектом:
let cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars);

Array.isArray(cars);
cars instanceof Array;

// const
cars = ["Toyota", "Volvo", "Audi"];
let brands = cars; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
console.log(brands === cars);
cars.push("Porsche"); // массив меняется по ссылке
console.log(brands); // теперь два элемента

let arrayObject = []; // создаём массив
arrayObject[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива
arrayObject.age = 25; // создаём свойство с произвольным именем
console.log(arrayObject);

// В массиве могут храниться элементы любого типа.
// разные типы значений
arrayObject = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hi");
  },
];

// oбъявление массива
let array = new Array(8);
let example = [8];
console.log(array);
console.log(example);

// получить элемент, указав его номер в квадратных скобках:
let browsers = ["Firefox", "Edge", "Chrome"];
console.log(browsers[0]); // Firefox
console.log(browsers[1]); // Edge
console.log(browsers[2]); // Google
// заменить элемент:
browsers[1] = "IE";
// добавить новый к существующему массиву:
browsers[3] = "Safari";
console.log(browsers);

// перебор элементов
let buttons = ["Cancel", "Submit", "Clean"];

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
}

for (let button of buttons) {
  console.log(button);
}

for (let key in buttons) {
  console.log(buttons[key]);
}

// length
let str = [];
str[123] = "string";

console.log(str.length); // 124

let num = [1, 2, 3, 4, 5];

num.length = 2;
console.log(num);

num.length = 5;
console.log(num[3]);

// многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]);

// cравнение
// массивы не следует сравнивать при помощи оператора ==
console.log(0 == []);
console.log("0" == []);

// Методы массивов

// JavaScript - очередь и стек. Мы можем добавлять/удалять элементы как в начало, так и в конец массива
// методы, работающие с концом массива:
// pop/push
let elements = ["Button", "Checkbox", "Input"];
console.log(elements.pop());
console.log(elements);
elements.push("Link");
console.log(elements);
// методы, работающие с началом массива:
// shift/unshift
console.log(elements.shift());
console.log(elements);
elements.unshift("Table");
console.log(elements);

let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hi");
  },
];

// получить элемент с индексом 1 (объект) и затем показать его свойство
console.log(arr[1].name); // John
// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // hi
// получить последний элемент массива
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[fruits.length - 1]); // Plum
// console.log(fruits.at(-1));


// toString
let newArray = [1, 2, 3];

console.log(newArray.toString());
console.log(String(newArray) === "1,2,3");

// splice
// arr.splice(start[, deleteCount, elem1, ..., elemN])
let arrSplice = ["I", "go", "home"];

delete arrSplice[1]; // удалить "go"
// arrSplice.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
// arrSplice.splice(1, 1, "am", "going"); // удалить 1 элемент и заменить его двумя другими
// arrSplice.splice(1, 0); // вставить элементы без удаления
// console.log(arrSplice.toString());
console.log(arrSplice[1]); // undefined

// теперь arrSplice = ["I",  , "home"];
console.log(arrSplice.length); // 3

let removed = arrSplice.splice(0, 1); // возвращает массив из удалённых элементов
console.log(removed);

let numArr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
numArr.splice(-1, 0, 3, 4);
console.log(numArr); // 1,2,3,4,5

// slice
// arr.slice([start], [end])
let arrSlice = ["t", "e", "s", "t"];
console.log(arrSlice.slice(1, 3)); // e,s (копирует с 1 до 3)
console.log(arrSlice.slice(-2)); // s,t (копирует с -2 до конца)

// concat
// arr.concat(arg1, arg2...)

let arrConcat = [1, 2];
// создать массив из: arr и [3,4]
console.log(arrConcat.concat([3, 4])); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
console.log(arrConcat.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
console.log(arrConcat.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
let arrayLike = {
  0: "string",
  length: 1,
  // [Symbol.isConcatSpreadable]: true,
};
console.log(arrConcat.concat(arrayLike));

// forEach
// arr.forEach(function(item, index, array) {});
let arrForEach = ["1", "2", "3"];
arrForEach.forEach((item, index, array) => {
  console.log(`У ${item} индекс ${index} в ${array}`);
});

// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1,
// если ничего не найдено.
let arrIndex = [1, 0, false, 0];
console.log(arrIndex.indexOf(0));
console.log(arrIndex.indexOf(false));
console.log(arrIndex.indexOf(null));
console.log(arrIndex.lastIndexOf(0));

// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false
console.log(arrIndex.includes(1));
const arrNan = [NaN];
console.log(arrNan.indexOf(NaN));
console.log(arrNan.includes(NaN));

// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении
// которых через функцию возвращается true
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Mary" },
];
let user = users.find((item) => item.id == 1);
console.log(user.name);

let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers.length);

// findIndex похож на find, но возвращает индекс вместо значения
console.log(users.findIndex((user) => user.name == "John"));
console.log(users.findLastIndex((user) => user.name == "Mary"));

// Методы преобразования и упорядочения массивов
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента
let lengths = ["String", "Number", "Boolean", "Undefined", "Null"].map(
  (item) => item.length
);
console.log(lengths);

// sort(func) – сортирует массив «на месте», а потом возвращает его
let arrSort = [1, 2, 15];
arrSort.sort();
console.log(arrSort);
arrSort.sort((a, b) => a - b);
console.log(arrSort);

// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив
let arrReverse = [1, 2, 3, 4, 5];
arrReverse.reverse();
console.log(arrReverse);

// split/join – преобразует строку в массив и обратно
let names = "Julia, Peter, Mike, Helen";
let arrNames = names.split(", ");
console.log(`Message for ${arrNames[2]}.`);

let arrJoin = ["Julia", "Peter", "Mike", "Helen"];
let stringFromArray = arrJoin.join("_");
console.log(stringFromArray);

// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func
// для каждого элемента и передавая промежуточный результат между вызовами
// let value = arr.reduce(function(accumulator, item, index, array) {}, [initial]);
// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.
let arrReduce = [1, 2, 3, 4, 5];
let result = arrReduce.reduce((sum, current) => sum + current);
console.log(result);
// arr.reduceRight работает аналогично, но проходит по массиву справа налево



// Псевдомассивы – это объекты, у которых есть индексы и свойство length, 
// выглядят как массивы.
let arrayLikeNotIterable = {
  // есть индексы и свойство length => псевдомассив
  0: "Hello",
  1: "World",
  length: 2,
};


// Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator
let range = {
  from: 1,
  to: 5,
};
// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}


