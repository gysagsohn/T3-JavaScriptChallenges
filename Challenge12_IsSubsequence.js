
/*
I could not work out how to do this on my own. So the below solution is based on my search. 

My solution is based off
https://www.youtube.com/watch?v=99RVfqklbCE

Use two pointers to traverse both strings.
Initialize both pointers at the beginning of s and t.
Move the pointer for t in each iteration.
Only move the pointer for s when there is a match between characters of s and t.
If we reach the end of s while still having characters in t, then s is a subsequence of t.

*/



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // Step 1: Initialize pointers
    let pointerS = 0;
    let pointerT = 0;
    
    // Step 2: Traverse the string t
    while (pointerT < t.length) {
        // Step 3: If characters match, move the pointer for s
        if (s[pointerS] === t[pointerT]) {
            pointerS++;
        }
        // Step 4: Always move the pointer for t
        pointerT++;
        
        // Step 5: If pointerS has reached the end of s, return true
        if (pointerS === s.length) {
            return true;
        }
    }
    
    // Step 6: If we finished traversing t but didn't match all of s, return false
    return pointerS === s.length;
};

// Example usage:
console.log(isSubsequence("abc", "ahbgdc")); // Output: true
console.log(isSubsequence("axc", "ahbgdc")); // Output: false
