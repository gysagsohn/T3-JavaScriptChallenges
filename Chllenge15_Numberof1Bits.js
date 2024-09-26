/*
Step 1 convert n to binary string
Step 2 check each value if it is 1 
Step 3 return the number of 1 counted

*/


/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // Step 1: Convert the number to its binary string representation
    const binaryString = n.toString(2);
    // Step 2: Count the number of '1' in the binary string
    let count = 0;
    for (let char of binaryString) {
        if (char === '1') {
            count++;
        }
    }
    
    // Step 3: Return the count of '1' bits
    return count;
};

// Example usage
console.log(hammingWeight(11)); // Output: 3
console.log(hammingWeight(128)); // Output: 1
console.log(hammingWeight(2147483645)); // Output: 30

/* After doing some research it came to me that I misunderstood the question. 
The question is asking for us to look at n that is already a binary representation of a postivie integer, and there is no needs to change that into binary.

Bitwise method
Step 1 Bitwise AND - use the bitwise & operator to check if the least significant bit (rightmost bit) is a 1 by comparing n & 1. If it is, you increment the count.
Step 2 Right Shift - After checking the least significant bit, you shift the bits of n to the right by 1 position (using n = n >>> 1) to move the next bit into the rightmost position.
Step 3 Repeat - Repeat the process until n becomes 0

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    
    // Step 1: While n is greater than 0, keep checking the least significant bit
    while (n > 0) {
        // Step 2: Check if the least significant bit is '1'
        if ((n & 1) === 1) {
            count++;
        }
        
        // Step 3: Right shift n by 1 bit to check the next bit
        n = n >>> 1; // Use unsigned right shift to avoid negative numbers in JS
    }
    
    // Step 4: Return the count of '1' bits
    return count;
};

// Example usage
console.log(hammingWeight(11)); // Output: 3
console.log(hammingWeight(128)); // Output: 1
console.log(hammingWeight(2147483645)); // Output: 30

