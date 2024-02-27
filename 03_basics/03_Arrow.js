const user = {
    username: "anshu",
    price: 999,
   
    welcomeMessage: function() {
        console.log ( `${this.username} , welcome to website`);
        console.log(this)
    }
}
/*user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()*/
//console.log(this);

/*function coffee(){
    let username = "anshu"
    console.log(this.username);
}
coffee()*/

/*const chai = function () {
    let username = "anshu"
    console.log(this.username)
}*/

const coffee = () => {
    let username = "anshu"
    console.log(this.username);
}

//coffee()

/*const addTwo = (num1, num2) => {
    return num1 + num2
}*/

//const addTwo = (num1, num2) => num1 + num2
// if we wrrap in "{}" then we have to write return keyword & if we wrrap it in "()" then no need to use return keyword
//const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => ({username: "anshu"})


console.log(addTwo(4 , 5))

// const myArray = [ 2, 3, 4, 5, 6 ]
// myArray.forEach()