//const coding = [ "js", "ruby", "java", "python", "cpp"]

/*const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values);*/

const myNums = [ 1, 2, 3, 4, 5,6,7]

/*const newNums=myNums.filter ((num) =>  {
   return num > 4
})*/

/*const newNums = []
myNums.forEach((num) => {
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums);*/

const books = [
    { title: 'Book One' , genre: 'Function', publish: 1980,
    edition: 2002},
    {title: 'Book Two' , genre: 'Non-Function', publish: 2001,
    edition: 2004},
    {title: 'Book Three' , genre: 'History', publish: 2000,
    edition: 2003},
    {title: 'Book Four' , genre: 'Politics', publish: 1970,
    edition: 2001},
    {title: 'Book Five' , genre: 'CN', publish: 1977,
    edition: 2005},
    {title: 'Book Six' , genre: 'Function', publish: 1989,
    edition: 2022},
    {title: 'Book Seven' , genre: 'Non Function', publish: 2014,
    edition: 2021},
];

let userBooks = books.filter ((bk) => bk.genre === 'History')

userBooks = books.filter ((bk) => {
    return bk.publish>=1995 && bk.genre === 'History'
})
console.log(userBooks)