let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
let totalAge = 0;


for (let i = 0; i< arr.length; i++) {
    totalAge = totalAge + arr[i].age;
}

let averageAge = totalAge/arr.length

console.log(averageAge);