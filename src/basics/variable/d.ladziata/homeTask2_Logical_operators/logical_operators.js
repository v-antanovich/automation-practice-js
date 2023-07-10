/* 
Logical OR: Returns expr1 if it can be converted to true; otherwise, returns expr2
Logical AND: Returns expr1 if it can be converted to false; otherwise, returns expr2
*/

/*                                                        Task 1                                                 */
//console.log(NaN || 2 || undefined); //answer : 2 
/* Explanation
1. NaN || 2 = 2,  because logical OR returns expr1, in our case it's NaN, if it can be converted to true, NaN it's false than we return 2 
2. 2 || undefined = 2, because logical OR returns expr1, in our case it's 2, if it can be converted to true, 2 it's true than we return 2
*/

//console.log(NaN && 2 && undefined); //answer : NaN
//console.log(1 && 2 && 3); // answer: 3
//console.log(!1 && 2 || !3); // answer: false
//console.log(25 || null && !3); //answer: 25
//console.log(NaN || null || !3 || undefined || 5); //answer: 5

//console.log(NaN || null && !3 && undefined || 5); //answer: 5
/* Explanation
1. !3 - it's false, it's the first operation because importance of the logical negation equals 15
2. null && !3 - it's false, because logical AND returns expr1 if it can be converted to false, therefore we return the first false (null) 
3. null && undefined - false, because logical AND returns expr1 if it can be converted to false, therefore we return the first false (null)
4. NaN || null - false, because logical OR returns expr1 if it can be converted to true, therefore we return the second false (null) 
5. null || 5 - 5 because logical OR returns expr1 if it can be converted to true, therefore we return 5
*/

//console.log(5 === 5 && 3 > 1 || 5); //answer: true
/* Explanation
1. 3 > 1 - it's true, and it's the first operation because importance of the ">" equals 10
2. 5 === 5 - it's true, and it's the second operation because importance of the "===" equals 9
3. true(5 === 5) && true(3 > 1),  because logical AND returns expr1 if it can be converted to false, therefore we return the second true (3>1) 
4. true(3 > 1) || 5, because logical OR returns expr1 if it can be converted to true, 3 > 1 it's true we now it after the step 1, therefore we return true
*/

/*                                                        Task 2                                                 */
/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
} */
//answer: yes, expression answer: 2
/* Explanation
1. (hamburger === 3 && cola || fries === 3 && nuggets) it's (3 === 3 && 0 || 3 === 3 && 2)
2. 3 === 3 (hamburger === 3) - true, it's the first operation because importance of the "===" equals 9, 
and it's quicker then the second step because left-right
2. 3 === 3 (fries === 3) - true, it's the second operation because importance of the "===" equals 9
3. true && 0 - 0 (false), because logical AND returns expr1 if it can be converted to false, therefore we return the second exp
4. true && 2 - 2, because logical AND returns expr1 if it can be converted to false, therefore we return the second exp
4. 0 || 2 - 2, because logical OR returns expr1 if it can be converted to true, therefore we the second exp
*/

/*                                                        Task 3                                                */
/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!')
} */
//answer: yes, expression answer: 2

/*                                                        Task 4                                                 */
/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
} */
//answer: no, expression answer: false

/*                                                        Task 5                                                 */
//First:
/* let num = 543;
let result = num.toString();
//let result = `${num} - it's the string`;
//let result = `${num}` + 1;
//let result = String(num);
if (typeof(result) == "string") {
    console.log('Done')
}
    else {
    console.log('Try again')
}; */

//Second:
/* let str = '129';
let result = parseInt(str);
//let result = parseFloat(str);
//let result = Number(str);
//let result = + str;
//let result = Math.floor(str);
//let result = str * 1;
//let result = ~~str;

if (typeof(result) == "number") {
    console.log('Done')
}
    else {
    console.log('Try again')
}; */