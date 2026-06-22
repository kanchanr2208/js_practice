let numbers = [5, 2, 1, -10, 8];

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > numbers[i+1]) {
       numbers = numbers.push(numbers[i])
    }
    console.log(numbers);
}