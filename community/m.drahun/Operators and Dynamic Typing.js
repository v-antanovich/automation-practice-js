//TASK 1 что выведет в консоль? 
console.log(NaN || 2 || undefined);
//It means false||true||false. At least one 'true' returns 'true' when using Logical OR. Console will display true value (2).

console.log(NaN && 2 && undefined);
//The first pair returns 'false'. At least one 'false' returns 'false' when using Logical AND. Console will display the 1st false value (NaN).

console.log(1 && 2 && 3);
//It means true && true && true. The last true value will be displayed in the concole (3).

console.log(!1 && 2 || !3);
//It means false && true || false => false || false Thus,  false will be displayed in the console.

console.log(25 || null && !3);
// It means 25 || false && false => 25 || false.  At least one 'true' returns 'true' when using Logical OR. Console will display true value (25).

console.log(NaN || null || !3 || undefined || 5);
//It means false || false || false || false || true. At least one 'true' returns 'true' when using Logical OR. Console will display true value (5).

console.log(NaN || null && !3 && undefined || 5);
//It means false || ((false && false) && false) || true. It means false || false || true. At least one 'true' returns 'true' when using Logical OR. Console will display true value (5).

console.log(5 === 5 && 3 > 1 || 5);
//It means true && true || true => true || true. Thus, console will display true.


//TASK 1.2 выполняется ли условие? объясните почему именно так
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
};
// It means if (true && false || true && true) => if (false || true) => if (true). Thus, the condition is done.


//TASK 2 выполняется ли условие? объясните почему именно так
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!')
};
// hamburger is not declared. Thus, this is undefined. Undefined means false.
// Full condition means if (false || false || true || true) => if (true) because at least one 'true' returns 'true' when using Logical OR.
// Thus, the condition is done.


//TASK 3 выполняется ли условие? объясните почему именно так
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
};
// hamburger is not declared. Thus, this is undefined. Undefined means false.
// Full condition means if (false && false || false && true) => if (false || false) => false
// Thus, the condition is NOT done.


//TASK 4 Преобразовать число в строку(несколько способов) (преобразуйте num в строку):
// METHOD 1
let num = 543, result;
result = (String(num));
if (typeof (result) == "string") {
    console.log('Done')
} else { console.log('Try again') };

// METHOD 2
let num = 543, result;
result = (num + "");
if (typeof (result) == "string") {
    console.log('Done')
} else { console.log('Try again') };


//TASK 5 Преобразовать строку в число(несколько способов) (преобразуйте str в число):
// METHOD 1?
let str = '129', result;
result = (+ str);
if (typeof (result) == "number") {
    console.log('Done')
} else { console.log('Try again') };

// METHOD 2
let str = '129', result;
result = (parseInt (str,10));
if (typeof (result) == "number") {
    console.log('Done')
} else { console.log('Try again') };

// METHOD 3
let str = '129', result;
result = (parseFloat (str,10));
if (typeof (result) == "number") {
    console.log('Done')
} else { console.log('Try again') };

// METHOD 4
let str = '129', result;
result = (Number(str));
if (typeof (result) == "number") {
    console.log('Done')
} else { console.log('Try again') };