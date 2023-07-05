//что выведет в консоль?  
console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); //NaN
console.log(1 && 2 && 3); //3
console.log(!1 && 2 || !3); //false
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3 > 1 || 5); //true

//1 выполняется ли условие? объясните почему именно так 
const hamburger = 3; 
const fries = 3; 
const cola = 0; 
const nuggets = 2; 
if (hamburger === 3 && cola || fries === 3 && nuggets) { 
console.log('Done!') 
};

/*
1. Строгое равенство 3 === 3 получим true(слева направо для hamburger === 3, fries === 3) в результате получим
true && 0 || true && 2;
2. Выполняем логическое умножение - получим 0 || 2
3. Результат - 2 Проверим console.log(hamburger === 3 && cola || fries === 3 && nuggets); 
'Done!' отобразится в консоли.
*/


//2 выполняется ли условие? объясните почему именно так
let hamburger; 
const fries = NaN; 
const cola = 0; 
const nuggets = 2; 
if (hamburger || cola || fries === 3 || nuggets) { 
console.log('Done!') 
};

/*
Проверяем условие: 
hamburger (undefined,  т.к. переменная не определена. Соответственно будет false) 
|| cola (значение переменной 0, т.е. false) 
|| fries === 3 (false, т.к. тип и значение переменной не совпадает с числом 3)
|| nuggets (значение переменной 2, т.е. true)
Соответственно, false || false || false || true вернет true, 
т.к. логический оператор || (или) возвращает первое истинное значение.
Соответственно, условие выполняется и 'Done!' отобразится в консоли.
*/


//3 выполняется ли условие? объясните почему именно так 
let hamburger; 
const fries = NaN; 
const cola = 0; 
const nuggets = 2; 
if (hamburger && cola || fries === 3 && nuggets) { 
console.log('Done!') 
} 

/*
Проверяем условие:
hamburger - undefined,  т.к. переменная не определена. Соответственно будет false.
cola - значение переменной 0, т.е. false. Значит, false && false вернет false.
Т.к. логический оператор && требует, чтобы оба значения были true, а наш результат false, 
то дальнейшее сравнение не будет выполнено. 
Соответственно, условие НЕ выполняется и Done!' НЕ отобразится в консоли.
*/

// 4 Преобразовать число в строку(несколько способов) (преобразуйте num в строку): 
let num = 543, result; 
result = num.toString();
// result = String(num);
// result = num + 'string';
// result = "text" + num;
if(typeof(result)=="string") { 
console.log('Done') } 
else { console.log('Try again')};


// 5 //Преобразовать строку в число(несколько способов) (преобразуйте str в число): 
let str = '129', result; 
result = str / 1;
// result = str - 4;
// result = Number(str);
// result = + str;
if(typeof(result)=="number") { 
console.log('Done') } else { console.log('Try again')};