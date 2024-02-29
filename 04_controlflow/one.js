// if
/*const isUserloggedIn=true
const temperature = 41

if(temperature === 40){
    console.log("less than 50");
} else{
    console.log("temperature is greater than 50")
}
console.log("Execute")*/

//const isUserloggedIn = true // here '=' is used for operator assigment.

//if(2 === "2"){
    //if(3 !=2){
    //console.log("executed");

//}

//2<=2 // 3 !=2
//<, >, <= , >=, ==, != , === , !== (negative side)

//block scope:--

/*const score = 200

if (score >100) {
    var/let power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);*/


/*const balance = 1000

 // if (balance > 500) console.log("test"),console.log("test2");

 if (balance < 500) {
    console.log("less than 500");
 } else if (balance<750){
    console.log("less than 750");
 }else if (balance<800){
    console.log("less than 600");
 }else{
    console.log("less than 900")
 }*/

 const isUserloggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if (isUserloggedIn && debitCard && 2 ==3){
    console.log("Allow to buy course")
 }
 if (loggedInFromGoogle || loggedInFromEmail ){ // "||" used for multiple test .
    console.log("User logged in");
 }