/*console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);*/


//console.log("2" > 1);
//console.log("02" > 1);

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
/* the reason is that an equality check == and comparisons > < >= <= work differently
Comparisons convert null to a number , treating it as 0.
Thats why (3) null >=0 is true and (1) null > 0 is false */

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// strict check === 
console.log("2" === 2)