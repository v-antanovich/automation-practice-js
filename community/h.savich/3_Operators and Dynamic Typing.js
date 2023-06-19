console.log(NaN || 2 || undefined);
//true //2

console.log(NaN && 2 && undefined);
//false //NaN - почему? как определить, что NaN, а не undefined, например?

console.log(1 && 2 && 3);
//3 

console.log(!1 && 2 || !3);
//false

console.log(25 || null && !3);
//25


console.log(NaN || null || !3 || undefined || 5);
//5


console.log(NaN || null && !3 && undefined || 5);
//5

console.log(5 === 5 && 3 > 1 || 5);
//true - не всегда понятно, когда || будет true, а когда число - почему true || 5 выводит true,  f NaN || 2  -> 2?

//выполняется ли условие? объясните почему именно так

const hamburger = 3;

const fries = 3;

const cola = 0;

const nuggets = 2;

 

if (hamburger === 3 && cola || fries === 3 && nuggets) {

    console.log('Done!')

}

//3 && cola -3
//hamburger === 3 - true
//3 && nuggets - 3
//fries === 3 -3
//3 || 3 -> 3
//if(3) -> true -> 'Done!'

//2 выполняется ли условие? объясните почему именно так

let hamburger;

const fries = NaN;

const cola = 0;

const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {

    console.log('Done!')

}
// undefined || 0 -> 0
// NaN || 0 -> NaN
// NaN ===3 - > false
// false || 2  - > 2 ->'Done!'

//3 //выполняется ли условие? объясните почему именно так

let hamburger;

const fries = NaN;

const cola = 0;

const nuggets = 2;

 

if (hamburger && cola || fries === 3 && nuggets) {

    console.log('Done!')

}

//undefined || 0 -> 0
//3 && nuggets -> 3
// 0 || NaN -> NaN
// NaN ===3 -> false
// не выполнится


 

// 4Преобразовать число в строку(несколько способов) (преобразуйте num в строку):

 

let num = 543, result;
// code here result = ...
// result = ('' +num)
// result = (String(num))
if(typeof(result)=="string")  {
console.log('Done') } else { console.log('Try again')}

 

//Преобразовать строку в число(несколько способов) (преобразуйте str в число):
let str = '129', result;
// code here result = ...
// result = (+str)
// result = Number(str)
result = parseInt(str)
if(typeof(result)=="number")  {
console.log('Done') } else { console.log('Try again')}
