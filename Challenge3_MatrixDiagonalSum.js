/*

First thoughts 
    - first confirm that the data is a square matrix
    - use index position to figure out where the diagonal are going
    - for primary diagonal from the start point, the next point will be 1 down and 1 to the right
    - for secondary diagonal from the start point, the next point will be 1 down and 1 to the left 
    - figure out starting point for both
    - need a check that if there is a data point at the middle of the two diagonal that it isn't counted twice
    - collect the data 
    - return sum of the data 


This was my first attept in the process, until I did some researched and worked out that you could do the logic in the same step for both lines
Step 1 primary diagonal  - Start point 0,0 and then 1,+1 until the end 
Step 2 - Get the data and start a data set
Step 3  - secondary diagonal Start point 0,-1 indicating last point  +1-1
Step 4 - Get the data and add to data set 
Step 5 - Check if there are data from the same data coordinate, remove one
Step 6 -  add all of data 
Step 7 return the total of

*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    const dataSet = new Set();

    // Step 1: Collect primary diagonal elements
    for (let i = 0; i < n; i++) {
        dataSet.add(`${i},${i}`);
    }

    // Step 2: Collect secondary diagonal elements
    for (let i = 0; i < n; i++) {
        const j = n - 1 - i;
        dataSet.add(`${i},${j}`);
    }

    // Step 3: Sum the unique diagonal elements
    let totalSum = 0;
    dataSet.forEach(coord => {
        const [i, j] = coord.split(',').map(Number);
        totalSum += mat[i][j];
    });

    return totalSum;
};

/* After I did the above, I did some reserach and worked out that you could do the logic for the two lines together.
Step 1: Initialize the total sum
Step 2: Iterate through the matrix once
Step 4: Sum secondary diagonal elements. Ensure we do not double count the center element for odd-length matrix
Step 5: Return the total sum

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // Step 1: Initialize the total sum
    let totalSum = 0;

    // Step 2: Iterate through the matrix once
    for (let i = 0; i < mat.length; i++) {
        // Step 3: Sum primary diagonal elements
        totalSum += mat[i][i];

        // Step 4: Sum secondary diagonal elements
        // Ensure we do not double count the center element for odd-length matrix
        if (i !== mat.length - 1 - i) {
            totalSum += mat[i][mat.length - 1 - i];
        }
    }

    // Step 5: Return the total sum
    return totalSum;
};

