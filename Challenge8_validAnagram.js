/* solution 1 - What I came with before doing any research 
Step 1 - Check if lengths are different. If they are not the same then it is false
step 2 - Sort both strings
step 3 - Compare sorted strings
step 4 - function to print so I can double check that it is working
JS
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Step 1: Check if lengths are different
    if (s.length !== t.length) return false;
    
    // Step 2: Sort both strings
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
    // Step 3: Compare sorted strings
    return sortedS === sortedT;
};

// Function to print the result in VSCode terminal
function testAnagram(s, t) {
    const result = isAnagram(s, t);
    console.log(`Is "${s}" an anagram of "${t}"? ${result}`);
}

// Test cases
testAnagram("anagram", "nagaram"); // Output: true
testAnagram("rat", "car"); // Output: false

/*
Above the above method, I did some research and came across Frequency Counter method. The below is my solution based on that method.

Step 1 - check length 
Step 2 - create frequency counters for both string
Step 3 - count the frequency of each character in s
Step 4 - Count the frequency of each character in t
Step 5 - Compare the frequency counters 

*/

var isAnagram = function(s, t) {
    // Step 1: Check if lengths are different
    if (s.length !== t.length) return false;
    
    // Step 2: Create frequency counters for both strings
    let frequencyCounterS = {};
    let frequencyCounterT = {};
    
    // Step 3: Count the frequency of each character in s
    for (let char of s) {
        frequencyCounterS[char] = (frequencyCounterS[char] || 0) + 1;
    }
    
    // Step 4: Count the frequency of each character in t
    for (let char of t) {
        frequencyCounterT[char] = (frequencyCounterT[char] || 0) + 1;
    }
    
    // Step 5: Compare the frequency counters
    for (let key in frequencyCounterS) {
        if (frequencyCounterS[key] !== frequencyCounterT[key]) {
            return false;
        }
    }
    
    return true;
};

// Function to print the result in VSCode terminal
function testAnagram(s, t) {
    const result = isAnagram(s, t);
    console.log(`Is "${s}" an anagram of "${t}"? ${result}`);
}
