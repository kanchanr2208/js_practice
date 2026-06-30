let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = users.reduce((accumulator, currentItem) => {
    accumulator[currentItem.id] = currentItem;
    return accumulator;
}, {});

console.log(usersById);