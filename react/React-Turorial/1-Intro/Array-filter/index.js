/**
 * @param {number[]} numbers
 */
function getPositiveNumbers(numbers) {
    console.log(numbers);
    return numbers.filter(number => number > 0);
}

// sample usage (do not modify)
console.log(getPositiveNumbers([10, -5, 2, -4]));
