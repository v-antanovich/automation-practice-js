// part 1

console.log(NaN || 2 || undefined); 
// return 2, because || operator goes from left to right and if the result true, stops and return original value. It's 2

console.log(NaN && 2 && undefined); 
// retrun NaN, because && operator goes from left to right and if the result false, stops and return original value. It's NaN

console.log(1 && 2 && 3); 
// return 3, because && operator goes from left to right and if all operands were truthy, returns the last operand. It's 3

console.log(!1 && 2 || !3); 
// return false, because !1 && 2 => false, false || !3 (false) => false 

console.log(25 || null && !3); 
// return 25, because null && !3 => false, 25 || false => 25, because || operator goes from left to right and if the result true, stops and return original value. It's 25

console.log(NaN || null || !3 || undefined || 5);
// retrun 5, because NaN || null => null, null || !3 => false, false || undefined => undefined, undefined || 5 => 5
// retrun the first truthy value

console.log(NaN || null && !3 && undefined || 5);
// retrun 5, because null && !3 => null, null && undefined => null, NaN || undefined => undefined, undefined || 5 => 5

console.log(5 === 5 && 3 > 1 || 5); // true
// 5===5 - true
// 3 >1 - true
// true && true - true
// true || 5 - true


// part 2 выполняется ли условие? объясните почему именно так
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
console.log('Done!') } 
// hamburger === 3 -> true, true && cola -> true
// fries === 3 -> true, true && nuggets -> true
// true || true - > true
// result: Done!


//part 3 выполняется ли условие? объясните почему именно так
let hamburger1;
const fries1 = NaN;
const cola1 = 0;
const nuggets1 = 2;

if (hamburger1 || cola1 || fries1 === 3 || nuggets1) {
console.log('Done!')
}
// fries1 === 3 -> false
// hamburger1 || cola1 -> 0
// 0 || 3 -> 3
// 3 || 2 => 3
// result: Done!


//part 4 выполняется ли условие? объясните почему именно так
let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 && cola2 || fries2 === 3 && nuggets2) {
console.log('Done!')
}
// fries2 === 3 -> false
// undefined && 0 -> undefined
// false && 2 -> false
// false || false -> false
// Result: won't be executed



//part 5 Преобразовать число в строку(несколько способов) (преобразуйте num в строку):
let num = 543, result;
// code here result = ...
// result = num.toString();
// result = String(num);
// result = '' + num;
// result = `${num}`;

if(typeof(result)=="string") {
console.log('Done') } else { console.log('Try again')}




//part 6
 //Преобразовать строку в число(несколько способов) (преобразуйте str в число):
let str = '129', result1;
// code here result = ...
// result1 = Number(str);
// result1 = parseInt(str);
// result1 = +str;
// result1 = parseFloat(str);
// result1 = 1* str;
// result1 = ~~str;
// result1 = Math.floor(str);
if(typeof(result)=="number") {
console.log('Done') } else { console.log('Try again')}