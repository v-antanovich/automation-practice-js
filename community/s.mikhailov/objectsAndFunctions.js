//Hometask #5. Objects and Functions

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
    },
    // решение задания 3
    showAgeAndLangs: function () {
        return `Мне ${this.age} и я владею языками: ${this.skills.languages.join(' ').toUpperCase()}`
    }
};

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и
//возвращать строку с опытом. 
// Пример: 
// showExperience(personalPlanPeter) => '1 month' 
// P.S. желательно использовать деструктуризацию, но не обязательно 

function showExperience(plan) {
    let { skills: { exp } } = plan;
    return exp;
} 

console.log(showExperience(personalPlanPeter));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными
// и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан,
// то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {
    let { skills: { programmingLangs } } = plan;
    let result = '';
    if (Object.keys(programmingLangs).length === 0) {
        return '';
    }

    for (const language in programmingLangs) {
        result += `Язык ${language} изучен на ${programmingLangs[language]}\n`;

    }

    return result;

}

console.log(showProgrammingLangs(personalPlanPeter));

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект
//и возвращать строку в нужном виде.

// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами).
//Если данные в объекте поменяются, то и сообщение тоже изменится. 

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
