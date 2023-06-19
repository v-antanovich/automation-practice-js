// 1. что выведет в консоль?

console.log(NaN || 2 || undefined);
//return 2

console.log(NaN && 2 && undefined);
//return NaN

console.log(1 && 2 && 3);
//return 3

console.log(!1 && 2 || !3);
//return false

console.log(25 || null && !3);
//return 25

console.log(NaN || null || !3 || undefined || 5);
//return 5

console.log(NaN || null && !3 && undefined || 5);
//return 5

console.log(5 === 5 && 3 > 1 || 5);
//return true

//2.выполняется ли условие? объясните почему именно так

const hamburger = 3;

const fries = 3;

const cola = 0;

const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {

    console.log('Done!')

}
// return 'Done!'
// hamburger === 3 - true
// cola === 0 - false
// true && false - false
// fries === 3 - true
// nuggets === 2 - true
// true && true - true
// false || true - true ('Done!)

//3. выполняется ли условие? объясните почему именно так

let hamburger2;

const fries2 = NaN;

const cola2 = 0;

const nuggets2 = 2;

if (hamburger2 || cola2 || fries2 === 3 || nuggets2) {

    console.log('Done!')

}

// return 'Done!'
// hamburger2 === undefined - false
// cola2 === 0 - false
// fries2 === 3 - false
// nuggets2 = 2 - true
// false || false || false|| true - true

//4. выполняется ли условие? объясните почему именно так

let hamburger3;

const fries3 = NaN;

const cola3 = 0;

const nuggets3 = 2;

if (hamburger3 && cola3 || fries3 === 3 && nuggets3) {

    console.log('Done!')

}

//return - не выполнится
//hamburger3 === undefined - false
//cola3 === 0 - false
//false&&false - false
//fries3 === 3 - false
//nuggets3 === 2 - true
//false && true - false
//false || false - false

//5. Преобразовать число в строку(несколько способов) (преобразуйте num в строку):

let num = 543, result;
// code here result =
result = String(num)
// result = num.toString
// result = '' + num
// result = `${num}`
if(typeof(result)=="string")  {
    console.log('Done') } else { console.log('Try again')}



// 6.Преобразовать строку в число(несколько способов) (преобразуйте str в число):
let str = '129', result2;
// code here result = ...
result = Number(str)
// result = +str
// result = parseInt(str)
// result = parseFloat(str)
if(typeof(result2)=="number")  {
    console.log('Done') } else { console.log('Try again')}