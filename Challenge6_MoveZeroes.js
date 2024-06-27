
/* 
Step 1 - go through the array start at [0]
step 2 - see if value === 0 
step 3 - if it equals zero send to the end
step 4 - if not then stay where it is 


*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // step 1 - start the index from the beginning
    let index = 0;

    while (index < nums.length){
        //step 2 - check if that element is zero
        if (nums[index] === 0){
            //Step 3 - remove the zero and push it to the end of the array
            nums.splice(index, 1) // remove it from current position
            nums.push(0); // Append a zero to the end of the array
        } else {
            //Step 4 - if the element is not zero, move to the next element
            index++;
        }
    }

};



/*
Solution 2
I did some research and found another method to perform the same function. 
Step 1 - Initialize a pointer to track the position of the next non-zero element
Step 2 - Iterate through the array
Step 3 - If the current element is not zero
Step 4 - Move the non-zero element to the position of lastNonZeroFoundAt
Step 5 - Increment lastNonZeroFoundAt to the next position
Step 6 - Fill the remaining positions with zeros

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Step 1: Initialize a pointer to track the position of the next non-zero element
    let lastNonZeroFoundAt = 0;

    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Step 3: If the current element is not zero
        if (nums[i] !== 0) {
            // Step 4: Move the non-zero element to the position of lastNonZeroFoundAt
            nums[lastNonZeroFoundAt] = nums[i];
            // Step 5: Increment lastNonZeroFoundAt to the next position
            lastNonZeroFoundAt++;
        }
    }

    // Step 6: Fill the remaining positions with zeros
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/* Solution 3
After reading the LeetCode Editorial and its explanation of Optimal solution, I attempted the below. The Editorial had the solution in C++

``` C++
void moveZeroes(vector<int>& nums) {
    for (int lastNonZeroFoundAt = 0, cur = 0; cur < nums.size(); cur++) {
        if (nums[cur] != 0) {
            swap(nums[lastNonZeroFoundAt++], nums[cur]);
        }
    }
}
```

I used chatGPT to covert the code, as I could not work out how to do it in JS 
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Step 1: Define a helper function to swap elements in the array
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Step 2: Initialize pointers
    let lastNonZeroFoundAt = 0;

    // Step 3: Iterate through the array
    for (let cur = 0; cur < nums.length; cur++) {
        // Step 4: If the current element is non-zero, swap it with the element at lastNonZeroFoundAt
        if (nums[cur] !== 0) {
            swap(nums, lastNonZeroFoundAt, cur);
            lastNonZeroFoundAt++; // Step 5: Increment lastNonZeroFoundAt after the swap
        }
    }
};

