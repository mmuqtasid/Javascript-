//Arrow Function

const add = (a, b) => a + b;
console.log(add(5, 3));

const twoNum = (a, b) => {
  return a + b;
};
console.log(twoNum(5, 3));


const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); 


const createUser = (name, age) => ({
  name: name,
  age: age
});

console.log(createUser("Ali", 25));

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log(doubled); 



const Muqtasid = (age, desig) =>({
    age: age,
    desig: desig
});

console.log(Muqtasid("26" , SE))