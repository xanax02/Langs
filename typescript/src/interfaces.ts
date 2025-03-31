interface User {
    name: string,
    age: number
}
// type use = , interface dont'

function greetUser(user: User) {
    return `hello ${user.name}`
}

let user: User = {
    name: 'abhay',
    age: 20
}

console.log(greetUser(user))