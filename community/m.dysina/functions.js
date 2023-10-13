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

//1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

//Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

function showExperience(personalPlan) {
    return personalPlan.skills.exp
}

showExperience(personalPlanPeter)

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(personalPlan) {
    let langs = personalPlan.skills.programmingLangs
    let string5 = ''
    for (key in langs){
       string5 = string5 + `Язык ${key} изучен на ${langs[key]} `
    }
    
    return string5
    
}

showProgrammingLangs(personalPlanPeter)
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

personalPlanPeter.showAgeAndLangs = function(personalPlan){
    let newString = personalPlan.skills.languages.map(lang => lang.toUpperCase()).join(' ')

    return `Мне ${personalPlan.age} и я владею языками: ${newString}`
}
personalPlanPeter.showAgeAndLangs(personalPlanPeter)

console.log(personalPlanPeter)

