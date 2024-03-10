const myNums = [ 1,2,3]

/*const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc : ${acc} and currval: ${currval}`);
    return acc + currval
},0)*/

const myTotal = myNums.reduce((acc, curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "swift course",
        price: 3999
},
{
    itemName: "ruby course",
    price: 6999
},
 {
    itemName: "fullstack course",
    price: 7999
 }
]
const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(priceToPay);