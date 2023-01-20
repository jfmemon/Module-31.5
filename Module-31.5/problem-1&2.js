const myName = 'Emon';
let myAge = 23;

const studentObject = {
    name: 'Emon',
    id: '191-15-2497'
}
const templateString = `
Hi, my name is ${studentObject.name}.
My student id is ${studentObject.id}.
My age is ${myAge}.
`
console.log(templateString);