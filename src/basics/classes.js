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
// отражающим способность метода возвращать разные значения, согласно определённым условиям.(один метод - множество реализаций)

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

// rabbit.__proto__ = animal;

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

console.log(rabbit.eats);
console.log(rabbit.jumps);
rabbit.walk();

// Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.
// Значение __proto__ может быть объектом или null. Другие типы игнорируются.

// Object.getPrototypeOf/Object.setPrototypeOf

for (let prop in longEar) console.log(prop);






// Классы

class User {
  name;
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

// Использование:
let user = new User("Ivan");
console.log(user.name);
user.sayHi();

// класс - это функция
console.log(typeof User);

// Методы находятся в User.prototype, например:
console.log(User.prototype.sayHi); // sayHi() { console.log(this.name); }

// в прототипе ровно 2 метода
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi






// Ключевое слово this

let person = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" - это "текущий объект"
    console.log(this.name);
  },
};

let admin = {
  name: "Admin",
  sayHi() {
    console.log(this.name);
    // let arrow = () => console.log(this.name);
    // arrow();
  },
};

admin.sayHi();
person.sayHi();

// Значение this определяется во время исполнения кода.

// Создаётся новый пустой объект, и он присваивается this
// Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства
// Возвращается значение this
// Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this. Когда внутри стрелочной функции обращаются к this, то его значение берётся извне.







class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
  }
}

let anyAnimal = new Animal("Мой питомец");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
  // stop() {
  //   super.stop(); // вызываем родительский метод stop
  //   this.hide(); // и затем hide
  // }
}

let krol = new Rabbit("Белый кролик");

krol.run(5);
krol.stop();
krol.hide();







class Pet {
  name;
  constructor(name) {
    this.name = name;
  }
  say() {}
}

class Cat extends Pet {
  sleep() {
    console.log(`${this.name} спит!`);
  }
  say() {
    console.log(`Мур!`);
  }
}

class Dog extends Pet {
  play() {
    console.log(`${this.name} принеси мяч!`);
  }
  say() {
    console.log(`Ав!`);
  }
}

let pet = new Pet("Бони");
let cat = new Cat("Домино");
let dog = new Dog("Мартин");
pet.say();
cat.say();
dog.say();

cat.sleep();
dog.play();








class Human {
  #weight = 60;
  constructor(name) {
    this.name = name;
  }

  get weight() {
    return this.#weight;
  }
  set weight(value) {
    if (value < 0) throw new Error("Вес должен быть больше нуля");
    this.#weight = value;
  }
}

class Programmer extends Human {
  constructor(name) {
    super(name);
  }
}

const leo = new Programmer("Leo");
// leo.weight = 79;
// console.log(leo.weight);
// console.log(leo.#weight);


// const max = new Human("Max");
// max.weight = 30;
// console.log(max.weight);
// console.log(max._weight);
// max.weight = 30;
// console.log(max._weight);
// console.log(max.weight);
