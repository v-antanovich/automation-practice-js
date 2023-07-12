const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
};

//1 Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
function showExperience(plan) {
  return plan.skills.exp;
}
console.log(showExperience(personalPlanPeter));

//2 Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

function showProgrammingLangs(plan) {
  const { programmingLangs } = plan.skills;
  let result = "";
  for (let key in programmingLangs) {
    result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return result;
}

console.log(showProgrammingLangs(personalPlanPeter));

//3 Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
const personalPlanPeterNew = {
  personalPlanPeter,
  showAgeAndLangs: function showAgeAndLangs(plan) {
    let age = plan.age;
    const { languages } = plan.skills;
    const upperCaseLanguages = languages.map((item) => item.toUpperCase());
    let result2 = "";

    result2 = `Мне ${age} и я владею языками: ${upperCaseLanguages}`;

    return result2;
  },
};

console.log(personalPlanPeterNew.showAgeAndLangs(personalPlanPeter));
