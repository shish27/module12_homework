const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};
function func(str, user) {
    return str in user;
}
console.log(func('age', user));