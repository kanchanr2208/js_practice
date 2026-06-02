/* Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items. */

console.log("hello");

function takeInput() {
    return prompt("Enter a number");
}
//let input1 = prompt("Enter the 1st Number");

do {
    let input = takeInput()
    console.log(input1);
}
while (input1 == "" || input1 == null || isNaN(input1)) {
    alert("you didnt enter a number")
}


