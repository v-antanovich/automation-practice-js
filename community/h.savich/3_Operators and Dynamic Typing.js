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

// hamburger === 3 => true;
// fries === 3 => true;
// true && 0 | | true && 2;
// true && 0 => 0;
// true && 2 => 2;
// 0 | | 2 => 2;
//if(2) -> true -> 'Done!'

//2 выполняется ли условие? объясните почему именно так

let hamburger;

const fries = NaN;

const cola = 0;

const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {

    console.log('Done!')

}
// fries === 3 ->3
// undefined || 0 -> 0
// 0 || 3 -> 3
// 3 || 2  - > 3 ->'Done!'

//3 //выполняется ли условие? объясните почему именно так

let hamburger;

const fries = NaN;

const cola = 0;

const nuggets = 2;

 

if (hamburger && cola || fries === 3 && nuggets) {

    console.log('Done!')

}

// fries === 3 ->3
//undefined && 0 -> 0
//0 && nuggets -> 0
// 0 ||0 -> false
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
