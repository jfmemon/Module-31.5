// destructing specific element of an array
const array = [12, 34, 25, 62, 31, 20];
// const [first, second, third, fourth, fifth, sixth] = array;
const {2:third} = array;   // here, 2 is index of that 'array' and third is the variable
console.log(third);