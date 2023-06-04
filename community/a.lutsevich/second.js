// First task
console.log(NaN || 2 || undefined); // 2 (|| return first true value)

console.log(NaN && 2 && undefined); // NaN (&& stops since false value)

сonsole.log(1 && 2 && 3); // 3 (all values are true && returns the last value)

console.log((!1 && 2) || !3); // false (!1 = false, it will be returned first, than !1 || !3 again false)

сonsole.log(25 || (null && !3)); // 25 (first by priority null && !3 - returns null, then 25 || null - returns 25)

console.log(NaN || null || !3 || undefined || 5); // 5 (|| return first true value, if there are no any true values it will return last false value, the last comparison will be undefined || 5)

console.log(NaN || (null && !3 && undefined) || 5); // 5 (1.null && !3 - null, 2. null && undefined - null, 3. NaN || null - null, 4. null || 5 - 5)

console.log((5 === 5 && 3 > 1) || 5); // true

// Second task
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
  console.log("Done!");
}

// 1. hamburger === 3 - true, true && cola - 0, 3. fries === 3 - true, 4. true && nuggets - 2, 5. 0 || true - true. Function condition is true that why 'Done!' is displayed.

// Third task
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
  console.log("Done!");
}

// 1. fries === 3 - false, 2. then || comparison where the last value is nuggets (2) - true, 3. function condition true -> "Done!"

// Fourth task

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
  console.log("Done!");
}

// 1. hamburger && cola - undefined,  2. fries === 3 - false, 3. false && nuggets - false, 4. undefined || false - false, 5. Function condition false -> console.log("Done!") will not work

// Fifth task

let num = 543;
let result = num.toString();
// let result = String(num);
// let result = num + '';
// let result = JSON.stringify(num);
// let result = num.toLocaleSting();
// let result = num.toFixed();

if (typeof result == "string") {
  console.log("Done");
} else {
  console.log("Try again");
}
