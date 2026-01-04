//Functions
function userList() {
console.log("userOne");
console.log("userTwo");
console.log("userThree");
}

userList();


//Add Two Num

function AddTwoNum (numOne , numTwo){
    console.log(numOne + numTwo);
}
AddTwoNum(2 , 4 );




function addTwoNumer(){

}

function useLoginMessage(username){
    if(username === undefined){
        console.log("Please Enter UserName")
return;
}
return `${username} just loggedin`;
}

console.log(useLoginMessage())


//Shopping cart example

function calculateCartPrice(...num1){

   
    return num1

}

 console.log(calculateCartPrice());

 const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));