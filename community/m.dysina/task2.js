const isMarried = user => {
    return user.married ? '' : 'not '
}
const hasBadHabits = user => {
    return user.badHabits ? '' : 'do not'
}
const preferenceDescription = user => {
    return `My favorite color is ${user.preferences.color}. I prefer to drink ${user.preferences.drink} and I wish to live in ${user.preferences.country}.`
}

const user = {
    name: 'Maryia',
    surname: 'Dysina',
    height: 148.5,
    married: true,
    hobbies: ['piano', 'singing', 'travelling'],
    badHabits: null,
    preferences: {
        color: 'blue',
        drink: 'coffee',
        country: 'Italy'
    }
}

console.log(`My name is ${user.name} ${user.surname}, I'm ${user.height} cm height. I'm ${isMarried(user)}married. I have a lot of hobbies, such as ${user.hobbies.join(', ')}. I ${hasBadHabits(user)} have bad habits. ${preferenceDescription(user)}`)
