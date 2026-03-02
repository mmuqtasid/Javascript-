const weatherUpdate = fetch("http://goweather.xyz/weather/ISB");
weatherUpdate.then((value1) => {
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})