const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

//Task 1. Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
function showExperience({ skills: { exp: exp } } = personalPlanPeter) {
    return exp
};
console.log(showExperience(personalPlanPeter))


//Task 2. Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.
function showProgrammingLangs({ skills: { programmingLangs: programmingLangs } } = personalPlanPeter) {
    for (let lang in programmingLangs) { console.log(`Язык ${lang} изучен на ${programmingLangs[lang]}`) };
    if (Object.keys(programmingLangs).length !== 0) {
        return ''
    }
};
console.log(showProgrammingLangs(personalPlanPeter))


//Task 3. Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект 
// и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). 
// Если данные в объекте поменяются, то и сообщение тоже изменится.
function showAgeAndLangs({ age, skills: { languages: languages } } = personalPlanPeter) {
    languages = languages.map(function (changeCase) { return changeCase.toUpperCase(); })
    { return `Мне ${age} и я владею языками: ${languages}` };
};
console.log(showAgeAndLangs(personalPlanPeter))