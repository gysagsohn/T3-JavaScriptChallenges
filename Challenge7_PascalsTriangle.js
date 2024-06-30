/*
I could not work out this one on my own. So I did a gogole search and found two answers:
https://medium.com/@terencepataneronan/solving-pascals-triangle-in-javascript-f7498ebc1034

This explained the mathematical solution in greater detail. I took away that by understanding the mathematical principal behind it, it would be easier to understand it.


https://www.geeksforgeeks.org/javascript-program-to-print-pascals-pattern-triangle-pyramid/
Geekforgeeks provided two solutions. I broken them down in steps so that I could understand them better. 

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // Step 1: Initialize the result array
    const result = [];

    // Step 2: Generate each row
    for (let i = 0; i < numRows; i++) {
        // Step 3: Create a new row
        const row = [1]; // Every row starts with 1

        // Step 4: Generate the values for the row (excluding the first and last element which are always 1)
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j]; // Sum of the two elements above
        }

        if (i > 0) {
            row.push(1); // Every row (except the first) ends with 1
        }

        // Step 5: Add the generated row to the result
        result.push(row);
    }

    return result;
};

// Function to print the results
function printPascalsTriangle(triangle) {
    triangle.forEach(row => {
        console.log(row.join(' '));
    });
}

// Example usage
let numRows1 = 5;
let triangle1 = generate(numRows1);
printPascalsTriangle(triangle1); // Output: 

/*
binomial coefficients

Element (i, j) = C(i, j) = i! / (j! * (i - j)!) 
I had to google this and have used it in the below code based off what I found on GeekforGods, but I accept that I don't understand this.

Step 1 - Initialize an empty array: This array will store all the rows of Pascal's Triangle.
Step 2 - Iterate through the rows: Use a loop to iterate from 0 to numRows - 1.
Step 3 - Create each row: For each row, use another loop to calculate each element using the binomial coefficient formula.
Step 4 - Calculate binomial coefficient: Use a helper function to calculate the binomial coefficient for each element.
Step 5 - Add the row to the result: Append each generated row to the result array.
Step 6 - Return the result: After all rows are generated, return the result array.

*/

var generate = function(numRows) {
    // Step 1: Initialize an empty array to store the rows
    const result = [];

    // Step 2: Loop through from 0 to numRows - 1 to generate each row
    for (let i = 0; i < numRows; i++) {
        // a. Create a new row
        const row = [];

        // Step 3: Loop through each element of the row
        for (let j = 0; j <= i; j++) {
            // a. Calculate each element using the binomial coefficient formula
            row.push(binomialCoefficient(i, j));
        }

        // Step 5: Append the generated row to the result array
        result.push(row);
    }

    // Step 6: Return the result array containing all rows of Pascal's Triangle
    return result;
};

// Helper function to calculate binomial coefficient
function binomialCoefficient(n, k) {
    let res = 1;

    // Calculate nCk = n! / (k! * (n-k)!)
    for (let i = 0; i < k; i++) {
        res *= (n - i);
        res /= (i + 1);
    }

    return res;
}

// Function to print the results
function printPascalsTriangle(triangle) {
    triangle.forEach(row => {
        console.log(row.join(' '));
    });
}

// Example usage
let numRows1 = 5;
let triangle1 = generate(numRows1);
printPascalsTriangle(triangle1); // Output: 

let numRows2 = 1;
let triangle2 = generate(numRows2);
printPascalsTriangle(triangle2); // Output: 
