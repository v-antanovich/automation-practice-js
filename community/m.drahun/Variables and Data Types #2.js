let aboutMyself = {
    firstName: "Maryna",
    middleName: "Viachaslavauna",
    lastName: "Drahun",
    nationality: "Belarus",
    country_of_residence: "Poland",
    city_of_residence: "Poznan",
    appearance: {
        eyes: "blue",
        hair: "brown",
        height: 170
    },
    hobbies: ['Pool', 'Skiing', 'Poker'],
    place_of_work: "Godel",
    position: "Quality Assuarance Engineer"
};
aboutMyself.hobbies.push("Foreign languages");
console.log(`Hello! My name is ${aboutMyself.firstName.toUpperCase()} ${aboutMyself.lastName.toUpperCase()}`);
console.log(`I\'m from ${aboutMyself.nationality}`);
console.log(`I live in ${aboutMyself.country_of_residence} in ${aboutMyself.city_of_residence} city`);
console.log(`I\'ve got ${aboutMyself.appearance.eyes.at(0)}lue eyes and ${aboutMyself.appearance.hair.slice(0,2)}own hair`);
console.log(`I like ${aboutMyself.hobbies[1].toLowerCase(0)} in winter and playing ${aboutMyself.hobbies[0].toLowerCase(0)} in weekends`); 
console.log(`I work for ${aboutMyself.place_of_work.toUpperCase()} as a ${aboutMyself.position.at(0)}${aboutMyself.position.at(8)} ${aboutMyself.position.slice(19,27)}`);