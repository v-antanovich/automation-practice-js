// Объектно-ориентированное программирование (ООП) — это шаблон проектирования программного обеспечения,
// который позволяет решать задачи с точки зрения объектов со своими свойствами и методами и их взаимодействий.

// 4 основных принципа:
// Наследование
// Инкапсуляция
// Абстракция
// Полиморфизм

// Наследование – это возможность создавать классы на основе других классов.
// С помощью этого принципа можно определять родительский класс (с нужными свойствами и методами),
// а затем дочерний класс, который будет наследовать от родителя все свойства и методы.

// Инкапсуляция – это ещё один принцип ООП, который означает способность объекта «решать»,
// какую информацию он будет раскрывать для внешнего мира, а какую нет.
// Реализуется этот принцип через публичные и закрытые свойства и методы.

// Абстракция – это способ создания простой модели, которая содержит только важные свойства
// с точки зрения контекста приложения, из более сложной модели.

// Полиморфизм означает «множество форм», являясь, по сути, довольно простым принципом,
// отражающим способность метода возвращать разные значения, согласно определённым условиям.

// JavaScript реализует ООП через прототипы (функции-конструкторы).
// Объекты js имеют специальное скрытое свойство [[Prototype]], которое либо равно null, либо ссылается на другой объект.

// Прототипное наследование.
// В прототипном наследовании классы не используются совсем. Вместо этого объекты создаются из других объектов.
// Мы начинаем с обобщённого объекта — прототипа. Прототип можно использовать для создания других объектов путём его клонирования или расширять его разными функциями.
// По сути, JavaScript — прототипно-ориентированный язык.

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
};

// rabbit.walk = function () {
//   console.log("Rabbit! Bounce-bounce!");
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

rabbit.__proto__ = animal;

// теперь мы можем найти оба свойства в rabbit:
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
rabbit.walk();

// Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.
// Значение __proto__ может быть объектом или null. Другие типы игнорируются.

// Object.getPrototypeOf/Object.setPrototypeOf

// for (let prop in longEar) console.log(prop);




// Классы

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Использование:
let user = new User("Ivan");
user.sayHi();

// класс - это функция
console.log(typeof User);

// ...или, если точнее, это метод constructor
console.log(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
console.log(User.prototype.sayHi); // sayHi() { console.log(this.name); }

// в прототипе ровно 2 метода
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

class Human {
  //#weight = 60;
  constructor(name) {
    this.name = name;
  }

  say() {
    return `Hello, my name is ${this.name}, I like travelling`;
  }

  //   get weight() {
  //     return this.#weight;
  //   }

  //   set weight(value) {
  //     if (value < 0) throw new Error("Вес должен быть больше нуля");
  //     this.#weight = value;
  //   }
}

class Men extends Human {
  constructor(name) {
    super(name);
  }
  // Берем метод say у родителя.
}

class Programmer extends Human {
  constructor(name) {
    super(name);
  }

  say() {
    // Переопределяем метод родителя say для отображения нового значения.
    return `Hello, my name is ${this.name}, I like coding`;
  }
}

const alex = new Men("Alex");
const leo = new Programmer("Leo");

console.log(alex.say());
console.log(leo.say());

// leo.weight = 79;
// console.log(leo.weight);

// const child = new Human("Max");
// child.weight = 30;
// console.log(child.weight);




// Ключевое слово this

let person = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" - это "текущий объект".
    console.log(this.name);
  },
};

// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }
// admin.f = sayHi;

// admin.f();

person.sayHi(); // John

// Значение this определяется во время исполнения кода.

// При объявлении любой функции в ней можно использовать this, но этот this не имеет значения до тех пор, пока функция не будет вызвана.
// Функция может быть скопирована между объектами (из одного объекта в другой).
// Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова является object.
// Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this. Когда внутри стрелочной функции обращаются к this, то его значение берётся извне.
