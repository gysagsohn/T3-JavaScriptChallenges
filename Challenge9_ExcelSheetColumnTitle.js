/*
I could not work out how to solve this problem, withtout doing research. Therefore, compared to other solutions, the first solution isn't my own attempt but based off what I read

Solution 1 credit foes to 
https://leetcode.com/problems/excel-sheet-column-title/editorial/


Steps 
Step 1 - Initialize an empty string ans which would store the column title.
Step 2 -Do the following as long as columnNumber is greater than 0:
Step 2a - Subtract 1 from the columnNumber
Step 2b - Find the character corresponding to columnNumber % 26 and append it to the ans in the end.
Step 2c - Assign columnNumber to columnNumber / 26.
Step 3 - Reverse the string columnNumber and return it.
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    
};


var convertToTitle = function (columnNumber) {
    let ans = "";

    while (columnNumber > 0) {
        columnNumber--; // Step 1: Adjust for 0-based index
        // Step 2: Get the character corresponding to the current position
        ans = String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + ans;
        // Step 3: Update columnNumber for the next iteration
        columnNumber = Math.floor(columnNumber / 26);
    }

    return ans;
};

console.log(convertToTitle(1));  // Output: "A"
console.log(convertToTitle(28)); // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"