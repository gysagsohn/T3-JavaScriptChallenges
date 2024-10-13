/**  
 Step 1 - start sum of zero
 Step 2 - search each array for highest number - use bubble search 
 Step 3 - when number found remove from list and make new array
 Step 4 - repeat for each array
 Step 5 - Add all values
 Step 6 - repeat process until array is empty 
 * 
 */


/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    // Step 1: Initialize sum as 0
    let score = 0;

    // Step 2: Sort each row in the matrix in descending order using bubble sort
    const bubbleSort = (arr) => {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    // Swap elements if the current element is smaller
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    };

    // Step 3: Sort each row in nums
    for (let i = 0; i < nums.length; i++) {
        bubbleSort(nums[i]);
    }

    // Step 4: Repeat the process until all arrays are empty
    while (nums[0].length > 0) {
        let maxRemoved = 0;

        // Step 5: Remove the largest element from each row and keep track of the max
        for (let i = 0; i < nums.length; i++) {
            let removed = nums[i].shift(); // Remove the first (largest) element
            maxRemoved = Math.max(maxRemoved, removed); // Find the maximum of removed values
        }

        // Step 6: Add the maximum value to the score
        score += maxRemoved;
    }

    // Step 7: Return the final score
    return score;
};

/** The above is the first solution I came up with. 
 
 I do believe it is inefficient, so after some searching I came up with the below
 
Step 1: We initialize the score to 0.
Step 2: For each row, we use the built-in .sort() method to sort it in descending order.
Step 3: We use a while loop to repeat the process until all rows are empty.
Step 4: We remove the first (largest) element from each row and find the maximum among them.
Step 5: The maximum value is added to the score.
Step 6: After all rows are empty, we return the final score.
 */

/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    // Step 1: Initialize sum as 0
    let score = 0;

    // Step 2: Sort each row in descending order
    for (let i = 0; i < nums.length; i++) {
        nums[i].sort((a, b) => b - a); // Sort each row in descending order
    }

    // Step 3: Repeat the process until all arrays are empty
    while (nums[0].length > 0) {
        let maxRemoved = 0;

        // Step 4: Remove the largest element from each row and keep track of the max
        for (let i = 0; i < nums.length; i++) {
            let removed = nums[i].shift(); // Remove the first (largest) element
            maxRemoved = Math.max(maxRemoved, removed); // Find the maximum of removed values
        }

        // Step 5: Add the maximum value to the score
        score += maxRemoved;
    }

    // Step 6: Return the final score
    return score;
};
