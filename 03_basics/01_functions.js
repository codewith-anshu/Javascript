/*function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}*/

//sayMyName() // reference () -> excetute 
 
/*function addTwoNumbers(number1 , number2){
    // when you make function definition and in that whatever input takes no or string it called parameter.
    //console.log(number1 + number2);
}*/
function addTwoNumbers(number1 , number2){
    // when you make function definition and in that whatever input takes no or string it called parameter.
    /*let result = number1 + number2
    return result*/
   // console.log("anshu")// after result nothing print . 
   // one more way to write.
   return number1 + number2 // retrun ko variable me strore kr sakte he sirf console.log se nay kr sakte .
}

//addTwoNumbers ( 3 , null)
// when you call functions than the values pass in that is called arrugment. eg : "null"
const result = addTwoNumbers ( 3 , 5)
//console.log("Result: ", result)

function loginUserMessage(username = "sam"){ // default value "sam"
    //if(username === undefined){ /// one more symbol we use "!" it converts true to false and false to true.
        //console.log("please enter a username");
        //return

   // }
   // one more way to write .
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`

}

loginUserMessage("anshu") // yaha pe print nay hoga kuch kyuki humne kuch declare nay kiya h. 
//But,
// when we put Console.log and then we run than see,
//console.log(loginUserMessage("anshu")) // print
//console.log(loginUserMessage("anshu")) // value over write.

/////////////////// Part->>> " 2 " :)

//function calculateCartPrice( ...num1){ // ... rest operator 
    // interview Question -> val 1 , val2 = answer -> given no. suppose ( 100 , 200 , 300 , 400 ) when we run then we get only 2 no that is 300 , 400 
function calculateCartPrice( val1, val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,100,500)) 

const user = {
    username: "anshu",
    price: 199
}

function handleObject(anyObject){
    console.log(`Useranme is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
//more ways 
handleObject({
    username: "sam",
    price: 299
})

// array pass

const myNewArray = [200 , 300 , 400 , 700]

function returnSecondValue(getArray){
    return getArray[2]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 700 ]));
