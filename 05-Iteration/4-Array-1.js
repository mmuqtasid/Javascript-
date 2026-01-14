const Coding = ["js" , "pyhton" , "cpp" , "java" , "ruby"] ;
Coding.forEach(function (val){
console.log(val)
}
)

Coding.forEach( (items) =>{
    console.log(items)
}
)

function PrintMe(item){
    console.log(item)
}
Coding.forEach(PrintMe)


Coding.forEach( (item , index  , arr)=>{
    console.log(item , index , arr)
})


const myLanguage = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"dotjava"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"CShap",
        languageFileName:"cs"
    }
];

myLanguage.forEach((item)=>{
    console.log(item.languageFileName)
})