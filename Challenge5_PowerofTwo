/* 
Step1 - check if n = 1
Step2 - check if n is divisible by 2 and has no reminder
Step 3 - if any of the above is true return true
Step 4 - if not reutrn false

*/


/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // Step 1: Check if n is equal to 1
    if (n === 1) {
        return true; // 2^0 = 1, so return true
    }

    // Step 2: Check if n is divisible by 2 and has no remainder
    // Loop through dividing n by 2 until n is no longer divisible by 2
    while (n > 1) {
        if (n % 2 !== 0) {
            return false; // If n is not divisible by 2, it's not a power of two
        }
        n = n / 2; // Divide n by 2
    }

    // Step 3: If n becomes 1 after divisions, return true, otherwise return false
    return n === 1;
};

/*  Without using loops
I had to google search how to do this one. I got Step 1 on my own but wasn't sure how to do step 2. 

Step1 - check if n is greater then zero (as it has to be a positive number)
Step2 - Use the bitwise AND operation to determine if n is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // Step 1: Check if n is greater than 0
    if (n <= 0) {
        return false; // Powers of two are always positive
    }

    // Step 2: Use bitwise AND to check if n has exactly one bit set
    // n & (n - 1) will be 0 if n is a power of two
    // Explanation: 
  
    return (n & (n - 1)) === 0;
};
