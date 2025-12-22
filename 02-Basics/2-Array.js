const nameList = ["shahid" , "Umar" , "Ali" , "amin" , "muqtasid"];
const newList = ["adnan" , "arsam" , "hitesh"];
nameList.push(newList);
// console.log(nameList);
// console.log(nameList[3],[1]);
nameList.concat(newList);
// console.log(nameList);
const allNew = nameList.concat(newList);
// console.log(allNew);

const newListUpdate = [...nameList , ...newList];
console.log(newListUpdate);

const NumberList = [1,2,3 , [4,5,6],7,[8,9,10 , [11 , 12,13]]];
console.log(NumberList);
const real_another_arr = NumberList.flat(Infinity);
console.log(real_another_arr);

console.log(Array.isArray("Muqtasid"));
console.log(Array.from("Muqtasid"));
console.log(Array.from({name:"muqtasid"}));

