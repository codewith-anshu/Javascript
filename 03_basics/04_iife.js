// Immediately Invoked Function Expressions (IIFE)

(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // here we ";" to end function 

//( function aurcode() {
    //console.log(`DB CONNECTED TWO`);
//})()
// () globel scope ke polution se problem hote he bhut baar toh uske variable ya jo bhi decleration ko htane ke liye use kiya. 
( (name) => {
    // un named IIFE
      console.log(`DB Connect Two ${name}`);

} )('anshu') 