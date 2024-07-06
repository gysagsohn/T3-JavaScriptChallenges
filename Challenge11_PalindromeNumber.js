/* First solution that came to be is I can use a similar solution to challenge 2

I can split the integer to create multiple array, and check each array in the different orders
This method cannot be efficient, so after doing this method, I will try to make another method without research 

Step 1 - convert to string
Step 2 - Create an array from the string
Step 3 - Reverse the array
Step 4 - Join the reversed array back into a string
Step 5 - Compare the original string with the reversed string


*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Step 1: Convert the integer to a string
    const str = x.toString();
    
    // Step 2: Create an array from the string
    const arr = str.split('');
    
    // Step 3: Reverse the array
    const reversedArr = arr.reverse();
    
    // Step 4: Join the reversed array back into a string
    const reversedStr = reversedArr.join('');
    
    // Step 5: Compare the original string with the reversed string
    return str === reversedStr;
};

console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10));   // Output: false

/*

As stated by the challenge, I tried to find a method where I don't convert the data to a string. I thought that I know that if it has a minus at the start or zero at the end it can't be a Palindrome.

However, I could not work out how to check the other digits. So after some searching I find the below solution.

Step 1 - check if the number is negative
Step 2 - check if the last digit is zero 
Step 3 - Reverse the second half of the number
Step 4 - compare the second half of the number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Step 1: Check if the number is negative or if the last digit is zero (and the number is not zero)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;
    // Step 2: Reverse the second half of the number
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // Step 3: Compare the first half and the reversed second half
    // Also handle the case where the number of digits is odd by dividing reversedHalf by 10
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

// Example usage:
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10));   // Output: false


