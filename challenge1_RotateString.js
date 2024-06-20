/*
To solve this challenge I got to do three things
1) Length 
    - the lengths of `s` and `goal needs to be the same.
    - if they are not the same length `s` cannot become `goal` through rotation
2) Concatenate String
    - need to create all possible shift of `s`
3) Check if new string has `goal`
    - find if `goal` is part of the new string
    - use indexOf method, as if `goal` isn't found in `roatateString` then it would return -1 
4) if `goal` isn't found in the new string, return false
*/



/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // Step 1: Check if the lengths of s and goal are the same
    if (s.length !== goal.length) {
        return false;
    }

    // Step 2: Concatenate s with itself
    let rotateString = s + s;

    // Step 3: Check if goal is a substring of the concatenated string
    if (rotateString.indexOf(goal) >= 0) {
        return true;
    }

    // Step 4: If goal is not found in the concatenated string, return false
    return false;
};