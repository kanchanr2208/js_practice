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
//Exercise 08 - removeFromArray

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

/*
//  Exercise 09 - sumAll
function addEverything(a, b) {
    let sum = 0;
    let smaller = 0;
    let bigger = 0
    if (a > b) {
        smaller = b;
        bigger = a; 
    } else {
        smaller = a;
        bigger = b;
    }
    for (let i = smaller; i <= bigger; i++ ) {
        sum = sum + i;
    }
    console.log(sum);
}

addEverything(5, 1);
*/

/*
//Exercise 10 - leapYears

function isLeapYear(a) {
    if ((a % 400 === 0) || ((a % 4 === 0) && (a % 100 !== 0))) {
        console.log(a + " is a leap year");
        return true;
        
    } else {
        console.log(a + " is not a leap year");
        return false;
        
    }
}

isLeapYear(1900);
*/

// Exercise 11 - tempConversion 

function convertToCelsius(a) {
    let conversion = ((a - 32) * (5/9));
    let final = Number(conversion.toFixed(1));
    console.log(final); 
   
}

function convertToFahrenheit(a) {
    let conversion = ((a * (9/5)) + 32);
    let final = Number(conversion.toFixed(1));
    console.log(final);
}

convertToCelsius(100);
convertToFahrenheit(99);



