//var c = 300
let a = 300

if (true){ // inside if "block scope "
    let a = 10
    const b = 20
    //var c = 30
    //console.log("INNER: ", a) // print global inside block
}
// outside if global scope , global scope value available inside block scope but block scope dont go outside of "if"
/*for (let i  = 0; i < array.length; i++) {
    const element = array[i];
    
}*/

//console.log(a);
//console.log(b);
//console.log(a); 

//////PART 2 -> Scope and all/

function one(){
    const username = "anshu"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
//one()
/// when nested function happens chlid function access parents variable.\
if (true){
    const username = "anshu"
    if (username === "anshu"){
        const website = "youtube"
        //console.log(useranme + website );
    
}
    // comsole.log(website)
       
}
// console.log(username);


//////// +++++ interesting ----////>>>>
console.log(addone(5));
function addone(num){
    return num + 1
}

addTwo(5) // hoisting method  that why we get error.
const addTwo = function(num){
    return num + 2
}
