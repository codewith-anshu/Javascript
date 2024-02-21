const name = "anshu"
const repoCount = 10

// console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // * Use this syntex now days . eg: `xyz` , ${} . 

const gameName = new String('anshu-kr-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__); // to access the prototype

 /*console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) // to see position of char of string.
console.log(gameName.indexOf('n')) */ // char position 


const newString = gameName.substring(0 , 4) // we cant put here for neg value
console.log(newString)

const anotherString = gameName.slice (-3 , 4)
console.log(anotherString)

const newStringOne = "  anshu  "
console.log(newStringOne)
console.log(newStringOne.trim()) // * trim remove strating space and ending space .

const url = "https://anshu.com/anshu%20kumar"

console.log (url.replace('%20', '-')) // .replace is help to replace url word . e.g : https://anshu.com/anshu-kumar

console.log (url.includes('anshu')) // .includes is use to check in url any keywords exits or not.

console.log(gameName.split('-'))
