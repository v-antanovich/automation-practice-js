// First task

const shopNumber = 24;
const shopName = `Shop ${shopNumber}`;

const storeDescription = {
  goods: 1000,
  employees: ["Sasha", "Ira", "Sviatlana"],
  products: { apple: 1, parrot: 2, potato: 3 },
  open: true,
};

// Second task

const KeyToMe = Symbol("food");
const myPersonality = {
  name: "Aliaksandr",
  age: 26,
  employee: true,
  skills: ["JS", "React", "MaterialUI"],
  flaws: undefined,
  money: null,
  dreams: 123n,
  [KeyToMe]: "Draniki",
  introduction() {
    console.log(`Hello everyone, my name is ${this.name}`);
  },
};
