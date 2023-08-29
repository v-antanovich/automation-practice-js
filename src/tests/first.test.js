function sum(a, b) {
  return a + b;
}

test("1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(5);
});

test("Math test", () => {
  expect(Math.max(1, 5, 10)).toBe(10);
});

const arr = ["apple", "orange", "banana"];
test("Contain", () => {
  expect(arr).toContain("banana");
  expect(new Set(arr)).toContain("banana");
  expect("apple, orange, banana").toContain("banana");
});

const area = (radius) => Math.PI * radius ** 2;
const circumference = (radius) => 2 * Math.PI * radius;

test("Circle area", () => {
  expect(area(5)).toBeCloseTo(78.54);
  expect(area()).toBeNaN();
});

test("Circumference", () => {
  expect(circumference(11)).toBeCloseTo(69.1, 1);
  expect(circumference()).toBeNaN();
});

const byPriceRange = (products, min, max) =>
  products.filter((item) => item.price >= min && item.price <= max);

const products = [
  { name: "onion", price: 12 },
  { name: "tomato", price: 26 },
  { name: "banana", price: 29 },
  { name: "orange", price: 38 },
];

test("Test product filter by range", () => {
  const FROM = 15;
  const TO = 30;
  const filteredProducts = byPriceRange(products, FROM, TO);

  expect(filteredProducts).toHaveLength(2);
  expect(filteredProducts).toContainEqual({ name: "tomato", price: 26 });
  expect(filteredProducts).toEqual([
    { name: "tomato", price: 26 },
    { name: "banana", price: 29 },
  ]);
  expect(filteredProducts[0].price).toBeGreaterThanOrEqual(FROM);
  expect(filteredProducts[1].price).toBeLessThanOrEqual(TO);
  expect(filteredProducts).not.toContainEqual({ name: "orange", price: 38 });
});
