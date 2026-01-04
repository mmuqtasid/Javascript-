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