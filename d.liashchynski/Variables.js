// ------------------------ Task 1 ------------------------
let myStore = 'MegaStore';
let evaluate = 'Super';

console.log(`${evaluate} ${myStore}`);

let storeDescription = {
    goods : 1000,
    employees : ['Mark', 'Giles', 'John'],
    products : {
        meat : 100,
        milk : 5,
        bred : 1
    },
    open : true
};

console.log(storeDescription);


// ------------------------ Task 2 ------------------------
const user = {
    name : 'Dzmitry',
    surname : 'Liashchynski',
    gender : 'male',
    height : 180,
    qa : true,
    isMaried : true,
    hobbies : ['Guitar', 'Photo', 'Traveling'],
    project1 : 'Cabot',
    project2 : 'Wescot',
};
console.log(`The user is ${user.name} ${user.surname}\nProjects: '${user.project1}' and '${user.project2}'`);

let age = 30;
console.log(`Age in the current year ${age++}`);
console.log(`Age in the next year ${age}`);
console.log(`Height: ${user.height}\nGender: ${user.gender}\nIs maried: ${user.isMaried}`);
