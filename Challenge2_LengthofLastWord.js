/**  
 * Step 1 - remove white space at the end. Trim to get rid of it
 * Step 2 - find the last word - index to the last word
 * Step 3 - grab the last word
 * Step 4 - return the length of last word 
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Step 1: Trim the whitespace from the end
    s = s.trim();
    
    // Step 2: Find the index of the last space in the trimmed string
    const lastSpaceIndex = s.lastIndexOf(' ');
    
    // Step 3: Extract the last word using the index found
    const lastWord = s.substring(lastSpaceIndex + 1);
    
    // Step 4: Return the length of the last word
    return lastWord.length;
};


/** 
 * Method 2. Rather then using trim, thought about using filter to remove empty space. 
 * Step 1 - split the string by space and create multiple array 
 * Step 2 - use filter to remove empty space
 * Step 3 - filter to find last word
 * Step 4 - return length
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordAlternative = function(s) {
    // Split the string by spaces, creating an array of words and empty strings
    const words = s.split(' ');
    
    // Filter out empty strings from the array
    const filteredWords = words.filter(word => word.length > 0);
    
    // Get the last word from the filtered array
    const lastWord = filteredWords[filteredWords.length - 1];
    
    // Return the length of the last word
    return lastWord.length;
};

