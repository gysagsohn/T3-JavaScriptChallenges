// For this challenge, I could not think of a solution. So the first thing I did was to brut for it. Please see below for Brut force SVGTextPositioningElement

// Step 1: Initialize a counter to 0 to store the count of negative numbers.
// Step 2: Loop through each row of the matrix.
// Step 3: Loop through each element of the row.
// Step 4: Check if the element is negative - If Yes, increment the counter
// Step 5: Return the final count.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0; // Initialize a count variable to 0
    
    // Iterate over each row
    for (let row of grid) {
        // Iterate over each element in the row
        for (let num of row) {
            // If the number is negative, increment the count
            if (num < 0) {
                count++;
            }
        }
    }
    
    return count; // Return the total count of negative numbers
};


/*
I put the above problem to chat GPT and got the below solution

Steps:
Initialize a counter to store the number of negative numbers.
Start from the top-right corner of the matrix.
For each element, check:
    If it's negative, all elements to its left are also negative. Count them and move to the row below.
    If it's non-negative, move left.
Continue until you've either processed all rows or columns.
Return the final count.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0; // Initialize a count variable to 0
    let m = grid.length; // Number of rows
    let n = grid[0].length; // Number of columns
    
    // Start from the top-right corner of the matrix
    let row = 0;
    let col = n - 1;
    
    // Traverse through the matrix
    while (row < m && col >= 0) {
        // If the current number is negative
        if (grid[row][col] < 0) {
            // All numbers in this column to the left of the current number are negative
            count += (col + 1);
            row++; // Move to the next row
        } else {
            // If the current number is non-negative, move left to the next column
            col--;
        }
    }
    
    return count; // Return the total count of negative numbers
};
