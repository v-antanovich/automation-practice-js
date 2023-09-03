// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом. 
// Пример: 
// showExperience(personalPlanPeter) => '1 month' 
//P.S. желательно использовать деструктуризацию, но не обязательно 
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

function showExperience({skills: {exp}}) { 
    return exp;
} 
const experience = showExperience(personalPlanPeter);
console.log(experience);


// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде. 
// Пример: 
// showProgrammingLangs(personalPlanPeter)  => 
// "Язык js изучен на 20% Язык php изучен на 10%" 
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка. 
// P.S. Для переноса строки используется \n в конце строки. 

function showProgrammingLangs(languagesPlan) {
    const { skills: { programmingLangs } } = languagesPlan;

    const langEntries = Object.entries(programmingLangs);

    if (langEntries.length === 0) {
        return ''; // Если ни один язык не указан, то возвращается пустая строка
    }

    const langString = langEntries.map(([lang, percentage]) => `Язык ${lang} изучен на ${percentage}`);
    return langString.join('\n');
}

const programmingLanguagesInfo = showProgrammingLangs(personalPlanPeter);
console.log(programmingLanguagesInfo);

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде. 

// Пример: 

// personalPlanPeter.showAgeAndLangs(personalPlanPeter) 

// => 'Мне 29 и я владею языками: RU ENG' 

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится. 

// const personalPlanPeter = { 
//     name: "Peter", 
//     age: "29", 
//     skills: { 
//         languages: ['ru', 'eng', 'by', 'fr', 'ukr'], 
//         programmingLangs: { 
//             js: '20%', 
//             php: '10%'
//         }, 
//         exp: '1 month' 
//     },
    showAgeAndLangs: function() {
        const { age, skills: { languages } } = this;
        const capitalLanguages = languages.map(lang => lang.toUpperCase()).join('\n');

        return `Мне ${age} и я владею языками:\n${capitalLanguages}`;
    }
};

const message = personalPlanPeter.showAgeAndLangs();
console.log(message);

