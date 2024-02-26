//var c = 300
let a = 300

if (true){ // inside if "block scope "
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER: ", a) // print global inside block
}
// outside if global scope , global scope value available inside block scope but block scope dont go outside of "if"
/*for (let i  = 0; i < array.length; i++) {
    const element = array[i];
    
}*/

//console.log(a);
//console.log(b);
console.log(a); 

//////PART 2 -> Scope and all/