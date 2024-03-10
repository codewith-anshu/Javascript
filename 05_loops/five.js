const coding = [ "js" , "ruby" ,"java" , "python", "cpp"]

/*coding.forEach( function (val){
    console.log(val);
})*/
/*coding.forEach((iteam) => {
    console.log(iteam);
})*/

/*function printMe (iteam){
    console.log(iteam);
}
coding.forEach(printMe)*/

/*coding.forEach((iteam , index , arr) => {
    console.log(iteam , index , arr);
})*/

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "swift",
        languageFileName: "swift"
    },
]

myCoding.forEach((iteam) =>{
    console.log(iteam.languageName);
})