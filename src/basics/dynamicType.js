//dynamic typization
//Если говорить простым языком, то динамическая типизация - это возможность одного типа данных превращаться в другой.

//как превратить в строку string
//1) old way to do it with String()
console.log(typeof (String(null)));
//string
console.log(String(null));
//null 
console.log(typeof (String(4)));
//string


//2) конкaтенация
//Конкатенация - это сложение/объединение строк. Или сложение строки с чем-то: с каким-либо другим типом данных.
console.log(typeof (5 + ''));
// приведет к строке "5" string
console.log(typeof (null + ''));
//string приведет к строке "null"
console.log(5 + '8');


const num = 5;
console.log("https://onliner.com/catalog/" + num)
//https://vk.com/catalog/5

console.log(`https://onliner/${num}/site`)
//Мы просто создали одну строку и «вставили» в неё в нужные места константы с помощью знака доллара и фигурных скобок ${ }.
//https://onliner/5/site


const fontSize = 26 + 'px';
//строка будет "26px" 


//to number  
//1)  через команду Number позволяет любой тип данных конвертировать в число.
console.log(typeof (Number('4')));
//number

//2) Унарный плюс более лаконичный и удобный способ конвертации различных типов данных в число.
console.log(typeof (+ '5'));
//number

//3) числовых методах parseInt() и parseFloat() используются для конвертации строк в числа.
//Значение, которое необходимо проинтерпретировать. Если значение параметра string не принадлежит строковому типу, оно преобразуется в него
//(с помощью абстрактной операции ToString). Пробелы в начале строки не учитываются.
/* radix
Целое число в диапазоне между 2 и 36, представляющее собой основание системы счисления числовой строки string, описанной выше.
В основном пользователи используют десятичную систему счисления и указывают 10. 
Всегда указывайте этот параметр, чтобы исключить ошибки считывания и гарантировать корректность исполнения и 
предсказуемость результата. Когда основание системы счисления не указано, разные реализации могут возвращать разные результаты. */

console.log(parseInt('15px', 16));

console.log(typeof (parseInt('15px', 10)));
//number

let result;
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

//to boolean 
//преобразование в булевое значение
//0, '', null, undefined, NaN - то что в логическом контексте false 

let switcher = null;
if (switcher) {
    console.log('Working ...');
}
//ничего не выведет так как в логическом контекте null это false

switcher = 1;
if (switcher) {
    console.log('Working ...');
}
//Working ... так как 1 в логическом контексте true

//2)  Команда (оператор или функция) Boolean - это 2-ой и явный способ преобразования типов данных в булевые значения.
console.log(Boolean('4'));
//boolean 

//3) Два отрицания !! - это 3-ий (и еще более редкий чем предыдущий) способ конвертации различных типов данных в булевые значения.
console.log(typeof (!!"5555"));
//boolean











result = '4' - true;
console.log(result);

result = 4 + true;
console.log(result);

result = 4 + false;
console.log(result);

console.log(24 - "2" - false + "10");

console.log('tr' + 'tt');

console.log(100 - "2" - parseInt("80px") + "10")

result = Boolean(324);
console.log(result);

result = Boolean(0);
console.log(result);

console.log(typeof ('ww' + false));

console.log('' + false);

console.log(parseInt('100px'));
