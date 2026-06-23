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