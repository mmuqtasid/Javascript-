const promiseOne = new Promise((resolve, reject) => {
    //Do any Async task
    //DB Call , cryptpgraphy , network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000 )
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000);

}).then(function(){
console.log("Async 2 Resolved")
})

const threePromise = new Promise((resolve , reject)=>{
    setTimeout(function(){
        resolve({
            username:"Muqtasid" , email:"mmuqtasid875@gmail.com"
        }, 1000)
    })
})

threePromise.then(function(user){
    console.log(user)
})


//Promise 4

const promiseFour = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "muqtasid" , password:"1234"})
        }else {
            reject('ERROR:Something went to Wrong')
        }
    } , 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("Promise is either resolved or rejected"));


//Promise 5
const promiseFive = new Promise (function(resolve , reject){
     setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "username" , password:"1234"})
        }else {
            reject('ERROR:Promsie Five Error')
        }
    } , 1000)
})
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try{
        const response = await promiseFive
        console.log(response)
    }catch (error){
     console.log(error)
    };
    
}

consumePromiseFive();