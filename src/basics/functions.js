//функции наши действия в джава скрипте это как калькулятор который делает все за нас, не важно что мы делаем: суммируем, вычитаем, 
//умножаем
// калькулятор делает это самостоятельно, только пиши что складывать и вычитай

//Любая функция это объект, и следовательно ею можно манипулировать как объектом, в частности:
//передавать как аргумент и возвращать в качестве результата при вызове других функций функций высшего порядка;
//создавать анонимно и присваивать в качестве значений переменных или свойств объектов.



let number = 20; //глобальная переменная

//мы можем передавать переменные в функцию например text
function showFirstMessage(text) {
    console.log(text);//функция 
    let number = 10;//локальная переменная
    console.log(number);
}
showFirstMessage("Hello"); //вызов функции очень важно ее вызывать 
//функция сначала ищет переменную внутри себя в случае если не находит то она идет искать на уровень выше

//console.log(num);


//существует до того как объявлена
// Function Declaration
//Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.
//поэтому их можно вызывать до того как они объявлены

console.log(calc(4, 5));//мы можем ее переиспользовать 
console.log(calc(2, 3));//мы можем ее переиспользовать 
console.log(calc(5, 2));//мы можем ее переиспользовать 


function calc(a, b) {
    return a + b; //как только функция увидит ретурн так она прекратит свои действия
}

function ret() {
    let num = 50;

    return num;
}

let anotherNum = ret();
console.log(anotherNum);


//Function Expression
const logger = function () {
    console.log("Hello");
};
logger(); //не можем вызвать до того как она объявлена  + в данном случае у функции нет имени но оно может быть



const calc = (a, b) => { a + b }; //стрелочная функция


const usdCurr = 28;
const discount = 2;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    return result * discount;
}

console.log(promotion(convert(500, usdCurr)));


let res = convert(500, usdCurr);//создаем промежуточную переменную

promotion(res); //переменной которую мы передаем в функцию может быть результат вызова другой функции (другая функция)


function test() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) return;
        console.log(i)
    }
    console.log("Done");
}

test();

function doNothing() {
}


console.log(doNothing() === undefined); //функция все равно нам что-то возвращает даже если нет ничего

//1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности
//Эта функция принимает в себя целое число со значением длины ребра куба.
//Ответ выведите в формате строки.
//Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку 
//"При вычислении произошла ошибка"

function calcVolumeSquare(side) {
    if (typeof (side) !== 'number' || side < 0 || !Number.isInteger(side)) {
        return "При вычислении произошла ошибка"
    }

    let volume = 0,
        area = 0;

    volume = side ** 3;
    area = 6 * side ** 2;

    return `Объем куба: ${volume} и площадь всей поверхности: ${area}`;

}
console.log(calcVolumeSquare(6));



//1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
//(Смотри пример).Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
//Если вместо аргумента приходит не число, дробное или отрицательное число - 
//функция возвращает строку "Ошибка, проверьте данные"
//Внимание! Давайте пока ограничимся максимум 600ю минутами(10 часов).

function getTime(givenMinutes) {
    if (typeof (givenMinutes) !== 'number' || givenMinutes < 0 || !Number.isInteger(givenMinutes)) {
        return "При вычислении произошла ошибка"
    }

    let hour = Math.floor(givenMinutes / 60);
    let minutes = givenMinutes % 60;

    lastDigit = minutes % 10;

    let hourStr = '';
    let minutStr = '';

    switch (hour) {
        default:
            hourStr = 'часов';
        case 1:
            hourStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hourStr = 'часa';
            break;
    }

    switch (lastDigit) {
        default:
            minutStr = 'минут';
        case 1:
            minutStr = 'минута';
            break;
        case 2:
        case 3:
        case 4:
            minutStr = 'минуты';
            break;

    }

    return `Это ${hour} ${hourStr} и ${minutes} ${minutes === 11 ? "минут" : minutStr}`
}

console.log(getTime(131));
