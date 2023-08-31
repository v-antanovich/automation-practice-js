const calculator = require("./calculator.js");

test("sum is equal 9", () => {
  calculator.a = 3;
  calculator.b = 6;
  expect(calculator.sum()).toBe(9);
});

test("mul is equal 0", () => {
  calculator.a = 6;
  calculator.b = 0;
  expect(calculator.mul()).toBe(0);
});

test("sub is equal 2.5", () => {
  calculator.a = 5;
  calculator.b = 2.5;
  expect(calculator.sub()).toBe(2.5);
});

test("div is equal 2", () => {
  calculator.a = 6;
  calculator.b = 3;
  expect(calculator.div()).toBe(2);
});

test("pow is equal 1", () => {
  calculator.a = 1;
  expect(calculator.pow()).toBe(1);
});

// test("read is equal 1", () => {
//   calculator.a = "a";
//   expect(calculator.read()).calculator.a.toBe(NaN);
// });

test("name is equal Vanya", () => {
  expect(calculator.sayHi("Vanya")).toBe("Hi, Vanya");
});
