/* brute force solution:
Step 1 - take the first value of the array (x)
Step 2 - add to the next value (y)
Step 3 - see if it equals
Step 4 - if equals reutrn value
Step 5 - if not then add next value
Step 6 - repeat above stepes
Step 7 - if the end of value then move (x) by 1 and repeat the above process until value is found

*/

var twoSum = function(nums, target) {
    // Iterate over each element in the array
    for (let i = 0; i < nums.length; i++) {
        // For each element, iterate over the elements that come after it
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of the two elements is equal to the target
            if (nums[i] + nums[j] === target) {
                // If they add up to the target, return their indices
                return [i, j];
            }
        }
    }
    // If no such pair is found, return an empty array (though the problem guarantees one solution)
    return [];
};


/* 
Hash Map Solution:
Step 1 - Initialize an empty hash map.
Step 2 - Iterate through the array of numbers.
Step 3 - For each number, calculate its complement with respect to the target.
Step 4 - Check if the complement exists in the hash map.
Step 5 - If the complement exists, return the indices of the current number and the complement.
Step 6 - If the complement does not exist, add the current number and its index to the hash map.
Step 7 - Repeat steps 3-6 until the target sum is found.
*/

var twoSum = function(nums, target) {
    // Step 1: Initialize an empty hash map to store numbers and their indices
    const map = new Map();
    
    // Step 2: Iterate through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Step 3: Calculate the complement of the current number
        const complement = target - nums[i];
        
        // Step 4: Check if the complement exists in the hash map
        if (map.has(complement)) {
            // Step 5: If the complement exists, return the indices of the current number and the complement
            return [map.get(complement), i];
        }
        
        // Step 6: If the complement does not exist, add the current number and its index to the hash map
        map.set(nums[i], i);
    }
    
    // Step 7: The problem guarantees that there is one solution, so we should never reach here.
    return [];
};


