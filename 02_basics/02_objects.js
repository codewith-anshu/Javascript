// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "anshu",
    "full name": "anshu singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "anshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", " Saturday"]
}

/*console.log(JsUser.email) // access obj
console.log(JsUser["email"]) // another method to access object 
console.log(JsUser["full name"])
console.log(JsUser[mySym])*/

JsUser.email = "anshu@chatgpt.com" ///  value change \
//Object.freeze(JsUser) // Freeze chnage value 
JsUser.email = "anshu@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
//console.log(JsUser.greeting())
//console.log(JsUser.greetingTwo())

// when we access value maximum time we use "."

//// Part 2 OBJECT -----////'''

//const tinderUser = new Object() // singleton obj

const tinderUser ={} // non singleton obj

tinderUser.id = "123xyz"
tinderUser.name = "dummy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser ={
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname:"anshu",
            lastname:"singh"
        }

    }
}
//console.log(regularUser.fullname.userfullname.lastname) // fullname"?" it protect means if firstname cant exists.

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 5: "b"}
const obj4 ={6: "a", 4: "b"}

//const obj3 = { obj1 , obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1 , ...obj2}
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
    },
    {
    },
]
users[1].email
/*console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggeIn'))*/

/// OBJECT DE-STR & JSON AP ---////'''

const course = {
    coursname: "jsfullconcept",
    price:"1000",
    Instructor: "hitesh"
}

// course.Instructor

const {Instructor} = course

console.log(Instructor) 

/*const navbar = ({company}) => {

}

navbar(company = "hitesh")*/ // Used in React 

/// APIs //

/*{
    "name": "anshu",
    "coursename": "jsfullconcept",
    "price": "free"
}*/
[
    {},
    {},
    {}
]
