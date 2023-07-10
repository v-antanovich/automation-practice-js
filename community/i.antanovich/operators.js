console.log(NaN || 2 || undefined); 
// 2 (|| returns  first true value)

console.log(NaN && 2 && undefined); 
//NaN (&& finds first false value)

сonsole.log(1 && 2 && 3); 
// 3 (all values are true, returns the last one)

console.log(!1 && 2 || !3); 
//false (firstly compare !1 && 2 -false; take first false and compare !1 || !3 - false)

сonsole.log(25 || null && !3); 
// 25 (null && !3 - null (first false value), then 25 || null returns 25 (first true value))

console.log(NaN || null || !3 || undefined || 5); 
// 5 (returns last false value)

console.log(NaN || null && !3 && undefined || 5);
// 5 (null && !3 - null; null && undefined -null, NaN || null - null, null || 5 - 5)  

console.log(5 === 5 && 3 > 1 || 5); 
// true (5===5- true; 3>1 - true; true&&true -true; true || 5 - true)

//выполняется ли условие? объясните почему именно так 

const hamburger = 3; 

const fries = 3; 

const cola = 0; 

const nuggets = 2; 

if (hamburger === 3 && cola || fries === 3 && nuggets) { 

console.log('Done!') 

} 
// hamburger === 3 returns true; true&&0 returns 0; fries ===3 returns true; true&&2 returns 2. Since the condition in the if statement evaluates to a truthy value (2),
// the code block inside the if statement will be executed.

//3 //выполняется ли условие? объясните почему именно так 

let hamburger; 

const fries = NaN; 

const cola = 0; 

const nuggets = 2; 

if (hamburger && cola || fries === 3 && nuggets) { 

console.log('Done!') 

} 
// hamburger && cola returns false; fries === 3 returns false; false && nuggets returns false
// The condition in the if statement evaluates to a falsy value (false), the statement will not be executed

// 4 //Преобразовать число в строку(несколько способов) (преобразуйте num в строку): 

let num = 543, 
let result = num.toString; 
 // let result = String(num); 
 if(typeof(result)=="string")  { 
 console.log('Done') } 
 else { console.log('Try again')} 

// 5 //Преобразовать строку в число(несколько способов) (преобразуйте str в число): 
 let str = '129', 
 let result = parseInt(str); 
 // code here result = ... 
 if(typeof(result)=="number") { 
 console.log('Done') } 
 else { console.log('Try again')} 