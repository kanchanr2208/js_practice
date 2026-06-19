
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(object) {
    for (key in object) {
        if (typeof object[key] == "number") {
            object[key] = object[key]*2;
        }
    }
    return object; 
}

console.log(multiplyNumeric(menu));