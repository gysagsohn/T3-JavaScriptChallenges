/*
Without doing any research I can think of 2 option:
    1) brut force: where you check version from the current and if it false go 1 back and keep checking until you get truck
        Step 1 - Start from the first version.
        Step 2 - Check if the current version is bad using the isBadVersion(version) API.
        Step 3 - If the current version is bad, return it as the first bad version.
        Step 4 - If not, move to the next version and repeat the process.
    2) Binary search: divide by half and check 

I did some research after doing my two solutions (three if you consider the two different brut force solution), and it seem Binary search is considered the efficient solution. 

*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        for(let i = 1; i <=n; i++1) {
            if (isBadVersion(i)){
                return i;
            }
        }
    return -1;
    };
};

// same brute force function, but starting from the end of the data set
/**
 * @param {function} isBadVersion
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        for (let i = n; i >= 1; i--) {
            if (isBadVersion(i) && !isBadVersion(i - 1)) {
                return i;
            }
        }
        return 1; // If all versions are bad, return 1 as the first bad version
    };
};


/* Binary Search

    Step 1 - Initialise two pointers, left at 1 and right at n.
    Step 2 - While left is less than right:
    Step 2a - Find the middle point mid = Math.floor((left + right) / 2).
    Step 2b -If isBadVersion(mid) is true, then the first bad version must be at mid or before mid, so set right = mid.
    Step 2c -If isBadVersion(mid) is false, then the first bad version must be after mid, so set left = mid + 1.
    Step 3 - When left equals right, it will be the first bad version.

*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        
        while (left < right) {
            // Calculate the middle point
            let mid = Math.floor((left + right) / 2);
            
            // Check if mid version is bad
            if (isBadVersion(mid)) {
                // If mid is bad, the first bad version is at mid or before it
                right = mid;
            } else {
                // If mid is not bad, the first bad version is after mid
                left = mid + 1;
            }
        }
        
        // When left equals right, we have found the first bad version
        return left;
    };
};