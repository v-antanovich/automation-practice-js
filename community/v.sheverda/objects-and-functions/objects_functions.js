const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: { js: "20%", php: "10%" },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    let {
      age,
      skills: { languages: langs },
    } = plan;

    let languageList = "";
    for (let key in langs) {
      languageList += ` ${langs[key]}`.toUpperCase();
    }

    return `Мне ${age} и я владею языками:${languageList}`;
  },
};

function showExperience(plan) {
  let { exp } = plan.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  let { programmingLangs } = plan.skills;

  if (Object.keys(programmingLangs).length === 0) {
    return "";
  } else {
    let result = "";
    for (let [languages, percentage] of Object.entries(programmingLangs)) {
      result += `Язык ${languages} изучен на ${percentage} \n`;
    }
    return result;
  }
}

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
console.log(showExperience(personalPlanPeter));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter) =>"Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
console.log(showProgrammingLangs(personalPlanPeter));

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами).
// Если данные в объекте поменяются, то и сообщение тоже изменится.

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
