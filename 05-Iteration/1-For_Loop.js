// for
for (let i = 0 ; i <= 10 ; i++) {
    console.log(i)
}


// for (let j = 0 ; j < 10 ; j++) {
//     for (let k = 0 ; k < 10 ; k++){
//         console.log(j*k);
//     }
// }
// let myArray = ["flash", "batman", "superman"]
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     //console.log(element);
    
// }


// for(let i = 0 ; i <= 10 ; i++) {
//     console.log(`Outer Loop Value: ${i}`);
//     for (let j = 0 ; j <= 10 ; j++);
//     {
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// let myArr = ["flash" , "Batmen" , "supermen"];
// console.log(myArr.length)
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }

//Brake Continue
for (let index = 1 ; index <= 20 ; index++){
    if (index == 5 ){
        console.log("Detected");
        break;
    }
    console.log(`value of index ${index}`)
}

for (let index = 1 ; index <= 20 ; index++){
    if (index == 5 ){
        console.log("Detected");
        continue;
    }
    console.log(`value of index ${index}`)
}
