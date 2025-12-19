//Array
const myNumArr = [0 , 1 , 2 , 3 , 4 , 5 , 6];
const myCollection = ["Bike" , "Car" , "Apple" , "Books"];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newLength = fruits.unshift("Strawberry", "Blueberry");
// console.log(myNumArr);
// console.log(myCollection);

const myArr2 = new Array(1 , 2 , 3 , 4);
console.log(myArr2[1]);
console.log(myCollection[0]);

//Array Methods
myNumArr.push(7 , 8);
console.log(myNumArr);
myNumArr.pop();
console.log(myNumArr);
myCollection.shift();
console.log(myCollection);
myCollection.unshift();
console.log(myCollection);
console.log(fruits);
console.log(fruits.shift())
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(newLength); 
console.log(myNumArr.includes(0));
console.log(myNumArr.push(9));
console.log(fruits.indexOf("Banana"));
const newArry = myNumArr.join(); //Convert array into string 
console.log(newArry);
console.log(myNumArr.concat(fruits));
const combined = myNumArr.concat(fruits);
console.log(combined.concat(myCollection));
//Slice and Splice
const firstArray = [0 , 1 , 2 , 3 , 4 , 5 , 6];
const sliceArr = firstArray.slice(1 , 4);
console.log("Orignal Array : " + firstArray);
console.log("After Apply Slice Method : " + sliceArr);
console.log("Orignal Array Before Apply Splice : " + firstArray);

console.log("Orignal Array : " + firstArray);
const SpliceArr = firstArray.splice(1,4);
console.log("Apply Splice Method : " + SpliceArr);
console.log("After Apply Splice Method : " + firstArray);





