/*

//Exercise 06 - repeatString
const repeatString = function(string, repetitionNumber) {
    if (typeof string != "string") {
        return "Error"
    } else if (typeof repetitionNumber != "number") {
         return "Error"
    } else if (((typeof repetitionNumber === "number") && (repetitionNumber < 0)) || !Number.isInteger(repetitionNumber)) {
        return "Error"
    } else {
        let finalString = "";
        for (let i = 1; i <= repetitionNumber; i++) {
            finalString = finalString + string;
        }
       return(finalString);
    }
};

console.log(repeatString("hello", 5));

*/

/*
//Exercise 07 - Reverse a String
let string = "hello world";

function reverseString(str) {
    let reversed = "";
    for (let i = (str.length - 1); i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return(reversed);
}

console.log(reverseString(string));
*/

/*
Exercise 08 - removeFromArray

let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6] 
function removeFromArray(arr, ...toBeRemoved) {
    let filteredArray = arr;
       for (let i = 0; i < toBeRemoved.length; i++) {
        filteredArray = filteredArray.filter(item => item != toBeRemoved[i]);
       }
       console.log(filteredArray)
}

removeFromArray(array, 2);
*/
