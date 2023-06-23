//Hometask #2 Operators and Dynamic Typing
//Что выведет в консоль? (ответы свои можно вписать комментами)

//2
console.log(NaN || 2 || undefined);
//NaN
console.log(NaN && 2 && undefined);

//&& ищет первый false результат, если не находит его, то берется последний true
console.log(1 && 2 && 3); //Ответ 3
console.log(NaN && null && undefined); // ответ NaN

//|| ищет первый true результат, если не находит его, берется последний false
console.log(1 || 2 || 3); //Ответ 1
console.log(NaN || null || undefined); //Ответ undefined
//false
console.log(!1 && 2 || !3);
//25
console.log(25 || null && !3);
//5
console.log(NaN || null || !3 || undefined || 5);
//5
console.log(NaN || null && !3 && undefined || 5);
//true
console.log(5 === 5 && 3 > 1 || 5);

//выполняется ли условие? объясните почему именно так

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

// Условие выполняется так как:
//3 === 3 is true
//true && 0 is 0
//3 === 3 is true
//true && 2 is 2
//0 || 2 is 2
//2 is true
if (hamburger === 3 && cola || fries === 3 && nuggets) {

    console.log('Done!')

}

//2 выполняется ли условие? объясните почему именно так
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

//Условие выполняется, так как || ищет первый true результат, а nuggets is true
if (hamburger || cola || fries === 3 || nuggets) {

    console.log('Done!')

}

//3 //выполняется ли условие? объясните почему именно так
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

//Условие не выполняется так как:
//undefined && 0 = undefined
//false && 2 is false
//undefined || false is false
if (hamburger && cola || fries === 3 && nuggets) {

    console.log('Done!')

}
 

// 4Преобразовать число в строку(несколько способов) (преобразуйте num в строку):
let num = 543, result;
result = String(num);
//result = num + "two";
//result = `${num} to string`;
if(typeof(result)=="string") {
console.log('Done') } else { console.log('Try again')}


//Преобразовать строку в число(несколько способов) (преобразуйте str в число):
let str = '129', result;
result = Number(str);
//result = + str;
//result = parseInt(str, 10);
if(typeof(result)=="number") {
console.log('Done') } else { console.log('Try again')}