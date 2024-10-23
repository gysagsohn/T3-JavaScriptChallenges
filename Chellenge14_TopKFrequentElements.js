/*
My initial thought is to use bubble sort and mapping to solve this problem. However, I do not believe that will meet the requirement of O(n log n). Bubble sort should be O(n^2)

After doing some research I believe QuickSelect would be the efficient method. 
https://www.geeksforgeeks.org/quickselect-algorithm/

Based of that method I would need to do the following:
step 1 - frequency map
step 2 - create a unique element array
step 3 - partition function
step 4 - Quickselect function
step 5 - return result 

I am not sure how to code this. I will do more research and come back to it
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1: Frequency Map - Count the occurrences of each element
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Step 2: Create an array of unique elements
    const uniqueElements = Array.from(freqMap.keys());
    
    // Partition function for Quickselect
    function partition(left, right, pivotIndex) {
        const pivotFreq = freqMap.get(uniqueElements[pivotIndex]);
        // Move pivot to the end
        [uniqueElements[pivotIndex], uniqueElements[right]] = [uniqueElements[right], uniqueElements[pivotIndex]];
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (freqMap.get(uniqueElements[i]) > pivotFreq) {
                [uniqueElements[storeIndex], uniqueElements[i]] = [uniqueElements[i], uniqueElements[storeIndex]];
                storeIndex++;
            }
        }
        // Move pivot to its final place
        [uniqueElements[right], uniqueElements[storeIndex]] = [uniqueElements[storeIndex], uniqueElements[right]];
        return storeIndex;
    }
    
    // Quickselect function to partition the array around the k-th largest frequency
    function quickselect(left, right, kSmallest) {
        if (left === right) return;
        
        // Select a random pivot index
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotFinalIndex = partition(left, right, pivotIndex);
        
        if (kSmallest === pivotFinalIndex) return;
        else if (kSmallest < pivotFinalIndex) {
            quickselect(left, pivotFinalIndex - 1, kSmallest);
        } else {
            quickselect(pivotFinalIndex + 1, right, kSmallest);
        }
    }
    
    const n = uniqueElements.length;
    // Step 3: Perform Quickselect to find the top k frequent elements
    quickselect(0, n - 1, n - k);
    
    // Step 4: Return the top k elements
    return uniqueElements.slice(n - k);
};


/*
Solution 2: Using a Min-Heap (Priority Queue)

Step 1 - Frequency Map: Create a frequency map to count the occurrences of each element.
Step 2 - Min-Heap: Use a min-heap to keep track of the top k frequent elements. The heap will store elements such that the root of the heap is the least frequent element among the k.
Step 3 - Push elements into the heap: Push the elements into the heap and if the size of the heap exceeds k, remove the element with the smallest frequency.
Step 4 - Extract the elements from the heap: Once we've processed all elements, extract the elements from the heap and return them.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1: Frequency Map - Count the occurrences of each element
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Min-Heap
    const minHeap = new MinPriorityQueue({ priority: (element) => element[1] });

    // Step 3: Iterate over the frequency map
    for (let [num, count] of freqMap) {
        minHeap.enqueue([num, count]);
        // If the heap size exceeds k, remove the element with the smallest frequency
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    // Step 4: Extract the k most frequent elements from the heap
    const result = [];
    while (minHeap.size()) {
        result.push(minHeap.dequeue().element[0]);
    }
    
    return result;
};
