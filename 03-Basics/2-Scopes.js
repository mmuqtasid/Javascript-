

if(true){
let numOne = 10;
const numTwo = 20;
var numThree = 30;
}

// console.log(numOne);    //Block Scope
// console.log(numTwo);     //Block Scope
// console.log(numThree);  //Global Scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "muqtasid"
    if (username === "muqtasid") {
        const website = "linkedin"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//interesting


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}