// Primitive 
// 7 types : String, number , boolean , null , undefined ,symbol Bigint

const score = 100
const scoreValue = 200.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 3456789069

// Reference (non primitive)

// array , obj, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "anshu",
    age : 21,
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp)


// ******************************** STACK & HEAP ****************************************** //////
// Stack (Premitive ) Heap (non premitive)
let myInstaname = "kingofmydestiny"
let anothername = myInstaname
anothername = "codewithanshu"

console.log(myInstaname)
console.log(anothername)

let userOne = {
    email : "kumaranshu@google.com",
    upi: "anshu@ybl"
}

let userTwo = userOne
userTwo.email = "anshu@google.com"

console.log(userOne.email)
console.log(userTwo.email)
