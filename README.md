# T3-JavaScriptChallenges

Welcome to my repository for weekly coding challenge solutions. These challenges are part of my bootcamp, and I've finally found the time to work on them since transitioning to part-time work.

For each challenge, I will include a description of the problem in the README file and provide a separate file with my solution.

---

## JavaScript Challenge 1: Rotate String

[Rotate String - LeetCode](https://leetcode.com/problems/rotate-string/)

**Problem**:  
Given two strings `s` and `goal`, return `true` if and only if `s` can become `goal` after some number of shifts on `s`.  
A shift on `s` consists of moving the leftmost character of `s` to the rightmost position.

**Example**:  
- Input: `s = "abcde", goal = "cdeab"`  
- Output: `true`  
- Input: `s = "abcde", goal = "abced"`  
- Output: `false`

**Concepts**:  
- String manipulation, rotations.

**Why**:  
This problem is useful for understanding string rotations and basic traversal techniques, which are commonly tested in technical interviews.

---

## JavaScript Challenge 2: Length of Last Word

**Problem**:  
Given a string `s` consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.

**Example**:  
- Input: `s = "Hello World"`  
- Output: `5`  
- Input: `s = "   fly me   to   the moon  "`  
- Output: `4`

**Concepts**:  
- String manipulation, trimming, finding the last word.

**Why**:  
This challenge reinforces your understanding of basic string operations, such as trimming and splitting.

---

## JavaScript Challenge 3: Matrix Diagonal Sum

[Matrix Diagonal Sum - LeetCode](https://leetcode.com/problems/matrix-diagonal-sum/)

**Problem**:  
Given a square matrix `mat`, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

**Example**:  
- Input: `mat = [[1,2,3], [4,5,6], [7,8,9]]`  
- Output: `25`

**Concepts**:  
- Matrix manipulation, diagonal traversal.

**Why**:  
This helps you practice matrix operations, particularly when working with multi-dimensional arrays.

---

## JavaScript Challenge 4: Two Sum

[Two Sum - LeetCode](https://leetcode.com/problems/two-sum/description/)

**Problem**:  
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

**Example**:  
- Input: `nums = [2,7,11,15], target = 9`  
- Output: `[0,1]`  
- Input: `nums = [3,2,4], target = 6`  
- Output: `[1,2]`

**Concepts**:  
- Array manipulation, hashing.

**Why**:  
This problem helps you practice handling arrays and applying efficient solutions using hashmaps.

---

## JavaScript Challenge 5: Power of Two

[Power of Two - LeetCode](https://leetcode.com/problems/power-of-two/description/)

**Problem**:  
Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

**Example**:  
- Input: `n = 1`  
- Output: `true`  
- Input: `n = 16`  
- Output: `true`

**Concepts**:  
- Bitwise operations, number theory.

**Why**:  
This challenge reinforces your understanding of powers of two and bit manipulation techniques.

---

## JavaScript Challenge 6: Move Zeroes

[Move Zeroes - LeetCode](https://leetcode.com/problems/move-zeroes/description/)

**Problem**:  
Given an integer array `nums`, move all `0's` to the end of it while maintaining the relative order of the non-zero elements.

**Example**:  
- Input: `nums = [0,1,0,3,12]`  
- Output: `[1,3,12,0,0]`  
- Input: `nums = [0]`  
- Output: `[0]`

**Concepts**:  
- Array manipulation, in-place modification.

**Why**:  
This problem teaches you how to efficiently modify arrays in-place without using extra space.

---

## JavaScript Challenge 7: Pascal's Triangle

[Pascal's Triangle - LeetCode](https://leetcode.com/problems/pascals-triangle/description/)

**Problem**:  
Given an integer `numRows`, return the first `numRows` of Pascal's triangle.

**Example**:  
- Input: `numRows = 5`  
- Output: `[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]`

**Concepts**:  
- Dynamic programming, arrays.

**Why**:  
This problem is great for practicing how to build up solutions step-by-step using a dynamic approach.

---

## JavaScript Challenge 8: Valid Anagram

[Valid Anagram - LeetCode](https://leetcode.com/problems/valid-anagram/description/)

**Problem**:  
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Example**:  
- Input: `s = "anagram", t = "nagaram"`  
- Output: `true`  
- Input: `s = "rat", t = "car"`  
- Output: `false`

**Concepts**:  
- String sorting, hashmaps.

**Why**:  
This problem helps improve your understanding of how to compare strings and track frequencies of characters efficiently.

---

## JavaScript Challenge 9: Excel Sheet Column Title

**Problem**:  
Given an integer `columnNumber`, return its corresponding column title as it appears in an Excel sheet.

**Example**:  
- Input: `columnNumber = 1`  
- Output: `"A"`  
- Input: `columnNumber = 28`  
- Output: `"AB"`

**Concepts**:  
- Number base conversion, string manipulation.

**Why**:  
This challenge helps you understand how to convert between different bases and manage such conversions efficiently.

---

## JavaScript Challenge 10: First Bad Version

**Problem**:  
You are given an API `isBadVersion(version)` that returns whether the version is bad. Implement a function to find the first bad version. Minimize the number of calls to the API.

**Example**:  
- Input: `n = 5, bad = 4`  
- Output: `4`

**Concepts**:  
- Binary search, optimization.

**Why**:  
This problem is great for practicing binary search, a common algorithm used for optimization problems.

---

## Future Challenges for Weekly Practice

Starting from **28/02/2025**, I plan to revisit the following challenges weekly, focusing on improving and building on the concepts learned:

### 1. [Linked List Cycle Detection](https://leetcode.com/problems/linked-list-cycle/)
   - **Concepts**: Linked lists, cycle detection using Floyd's Tortoise and Hare algorithm.
   - **Why**: Linked list problems are common in interviews, and cycle detection can help you get comfortable with traversal techniques.

### 2. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
   - **Concepts**: Sorting, interval merging.
   - **Why**: This problem is a classic example of how to handle overlapping intervals efficiently.

### 3. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
   - **Concepts**: Prefix and suffix products.
   - **Why**: This problem will help you get comfortable with array manipulation and optimization techniques that avoid division.

### 4. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
   - **Concepts**: Sliding window, string manipulation.
   - **Why**: This is a common question in technical interviews that tests your ability to manipulate strings and arrays with a sliding window approach.

### 5. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
   - **Concepts**: Binary search.
   - **Why**: You'll practice applying binary search, a technique that is often tested in interviews, especially for optimization problems.

### 6. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
   - **Concepts**: Binary trees, recursion.
   - **Why**: This problem helps you master tree traversal and understanding binary search trees, a fundamental data structure.

### 7. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
   - **Concepts**: Hashmaps, string sorting.
   - **Why**: Interviewers love testing your ability to solve problems that involve sorting and grouping elements based on specific criteria.

### 8. [Clone Graph](https://leetcode.com/problems/clone-graph/)
   - **Concepts**: Graph traversal, DFS/BFS.
   - **Why**: This problem introduces graph traversal and manipulation, which are often seen in more advanced technical interviews.

### 9. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
   - **Concepts**: BFS, queues, binary trees.
   - **Why**: BFS is a technique you'll use for tree and graph problems, and this problem helps you practice it.

### 10. [Find the Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
   - **Concepts**: Heaps, quickselect.
   - **Why**: You'll practice using heaps or partitioning techniques (like quickselect) to solve problems efficiently.
