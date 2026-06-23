let strings = [
        "Hare", "Ram", "Hare", "Ram", "Ram", "Ram", "Hare", "Hare", "Hare", 
        "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];


function findUnique(array) {
    let uniqueArray = [];
    for (item of array) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    console.log(uniqueArray);
}

findUnique(strings);