let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];


let totalAge = arr.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.age
}, 0)

let averageAge = totalAge/arr.length
console.log(averageAge)