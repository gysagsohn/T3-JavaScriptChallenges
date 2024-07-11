/*
Solution 1 - my solution without any research

The way roman numerals work is that it adds all of the values together to get the number, unless the number to the left is less then the number to the right. In that situation you minus that to get the value.

Therefore I would use the following:

Step 1 - allocate symbols to value
Step 2 - Iterate through the string from left to right, checking the value of each symbol and the next symbol to determine whether to add or subtract the current value.
Step 3 - If the current symbol is less than the next symbol, subtract the current value from the total; otherwise, add the current value to the total.

*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Step 1: Create a mapping of Roman numeral symbols to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Step 2: Initialize a variable to store the total value
    let total = 0;

    // Step 3: Iterate through the string from left to right
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current symbol
        const currentValue = romanMap[s[i]];
        
        // Get the value of the next symbol (if it exists)
        const nextValue = i < s.length - 1 ? romanMap[s[i + 1]] : 0;

        // Step 4: Check if the current symbol is less than the next symbol
        if (currentValue < nextValue) {
            // Subtract the current value from the total
            total -= currentValue;
        } else {
            // Add the current value to the total
            total += currentValue;
        }
    }

    return total;
};

// Example usage:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

/* Solution 2 - Using a single pass without lookahead

This solution is based off on research 

/*

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];

        if (currentValue >= prevValue) {
            total += currentValue;
        } else {
            total -= currentValue;
        }

        prevValue = currentValue;
    }

    return total;
};

// Example usage:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994