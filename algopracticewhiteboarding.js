// circularLinkedList"Given a circular linked list, implement an
// algorithm which returns the node at the beginning of a loop.
// Example: A -> B -> C -> D -> E -> C    (answer is C)"

function circularLinkedList(node, cache = []) {
	//base case
  if(cache.includes(node)) return node;

  cache.push(node);
	// recursive case
	return circularLinkedList(node.next, cache);
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node = new Node('A');
node.next = new Node('B');
node.next.next = new Node('C');
node.next.next.next = new Node('D'); 
node.next.next.next.next = new Node('E');
node.next.next.next.next.next = node.next.next;
// console.log(circularLinkedList(node));

// "Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: ""abc""
// Output: 3
// Explanation: Three palindromic strings: ""a"", ""b"", ""c"".
 

// Example 2:

// Input: ""aaa""
// Output: 6
// Explanation: Six palindromic strings: ""a"", ""a"", ""a"", ""aa"", ""aa"", ""aaa""."

// Input : string
// Output: number of palindromes in this string

// input: str
// output: bool
// isPalindrome(str)
  // return if the reversed string is equal to the input str

  function isPalindrome(str) {
    return str.split('').reverse().join('') === str
  }
  
  // countPalindromesFunction
   // count variable and initialize to zero
   // Loop over the input str
     // create a variable and set it to an empty string
     // Loop again starting at current index
       // Add that character to variable above
     // Check if substring is a palindrome and increase if count if so
  
  // Iterate over the substrings array and count the palindromes
  // 'abc'
  
  function countPalindromes(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      let substring = '';
      for(let j = i; j < str.length; j++) {
        substring += str[j]
        if(isPalindrome(substring)) count++;
      }
    }
  
    return count;
  }
  

  // console.log(countPalindromes('abc')) // 3
  // console.log(countPalindromes('aaa')) // 6
  // console.log(countPalindromes('aabcc')) // 7



// "Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3."

// input: binary search tree
// output: number (depth)

// Recursively make our way through the tree, going from top (root node) to bottom (farthest leaf node)
function maxDepth(root) {
  // Store left maximum depth
  let leftMaxDepth = 1;
  // Store right maximum depth
  let rightMaxDepth = 1;

  // Check if a given node has a left leaf.
  if (root.left) {
    // If so, recursively invoke function passing in the left leaf as the new starting node
    // Return out the maximum depth of that recursive call
    leftMaxDepth += maxDepth(root.left);
  }
  // Also check if a given node has a right leaf
  if (root.right) {
    // If so, recursively invoke function passing in the right leaf as the new starting node
    // Return out the maximum depth of that recursive call
    rightMaxDepth += maxDepth(root.right);
  }
  // Determine and return maximum depth of right and left invocations
  return Math.max(leftMaxDepth, rightMaxDepth);
}

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
// create a bst
  //   4
  //  / \ 
  // 2   7
//  / \   \
// 1   3   9
//        /
//       8
const tree = new BinarySearchTree(4);
tree.left = new BinarySearchTree(2);
tree.left.left = new BinarySearchTree(1);
tree.left.right = new BinarySearchTree(3);
tree.right = new BinarySearchTree(7);
tree.right.right = new BinarySearchTree(9);
tree.right.right.left = new BinarySearchTree(8);

// console.log(maxDepth(tree));

// Longest Consecutive Sequence	"Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

// Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4."

//sort the input array
//iterate over the sorted array
//keep counter for current sequence length
//keep a longest sequence result var
//if the diff between any consecutive nums is the same, update longest sequence
//if the diff changes then start a new subarray/counter will reset to 0

function longestSeq(array) {
  const sorted = array.sort((a, b) => a - b)
  let currCount = 0;
  let longest = 0;
  let currDiff;
   for (let i = 0; i < sorted.length; i++) {
    if (!currDiff) {
      currDiff = sorted[i + 1] - sorted[i];
      currCount++;
    }
    if (sorted[i + 1] - sorted[i] === currDiff) currCount++
    else {
      if (currCount > longest) longest = currCount; 
      currCount = 0;
      currDiff = 0;
    }
   }
    return longest;
  };
// function longestSeq(array) {
//   const set = new Set(array);
//   let maxCount = 0;
//   for(let num of set) {
//     if(set.has(num - 1)) continue;
//     let count = 1;
//     while(set.has(num + 1)) {
//       num++
//       count++;
//     }
//     if(count > maxCount) maxCount = count; 
//   }
//   return maxCount;
// }

  // console.log(longestSeq([100, 4, 200, 1, 3, 2]))
  // console.log(longestSeq([100, 6, 5, 300, 1, 8, 2]))
  // console.log(longestSeq([100, 6, 5, 300, 1, 7, 2, 12, 13, 14, 15, 16, 17]))

  // "You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin."

// input: arr of nums, amount
// output: number

// amount - 11
// arr [1, 2, 5]
// if (currentCoin + coinSum(arr, target-curr)) equal return numCoins

function coinSum(arr, amount) {
  let count = -1;
  
  function generate(arr, amount, numCoins) {
    for(let i = 0; i < arr.length; i++) {
      let currentCoin = arr[i];
      if (amount < 0) return;
      if (amount === 0) {
        if (count === -1) {
          count = numCoins;
        } else if (numCoins < count) {
          count = numCoins;
        }
        return;
      }
      let newAmount = amount - currentCoin;
      generate(arr, newAmount, numCoins + 1);
    }
  }
  generate(arr, amount, 0);
  return count;
}
// console.log(coinSum([1, 2, 5], 11))

// "Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?"

//find the location of each 0, by row (subarray) and by index (column)
//go back after and change rows/columns to 0

function setMatrixZeroes(arrOfArrays) {
  //store coordinates of each 0
  const store = [];
  
  for (const i in arrOfArrays) {
    for (let j = 0; j < arrOfArrays[i].length; j++) {
      if (arrOfArrays[i][j] === 0) {
        store.push([i, j])
      }
    }
  }
  if (store.length) {
  for (const coord of store) {
    // [0, 0]
    const row = coord[0]; //0
    const column = coord[1]; //0
    for (const subArr in arrOfArrays) {
      arrOfArrays[subArr][column] = 0;
      if (subArr === row) {
        for (const num in arrOfArrays[subArr]) {
          arrOfArrays[subArr][num] = 0;
        }
      }
    }
  }
  }
  return arrOfArrays;
  }
  
  const input = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
    ]
  // console.table(setMatrixZeroes(input))

  const twoSum = (arr, target) => { 
    const cache = {};
      for (let i = 0; i < arr.length; i++) { 
        if (cache[arr[i]]) return true;
        cache[target - arr[i]] = true;  
      }
      return false;   
    }

  const twoSumAlt = (arr, target) => { 
     const cache = {};
       for (let i = 0; i < arr.length; i++) { 
         if (cache[arr[i]]) return [ arr[i], cache[arr[i]] ];
         cache[target - arr[i]] = arr[i];  
       }
       return [];   
     }

const target = 6
const array = [1, 2, 3, 4, 5]
// console.log(twoSum(array, target))
// console.log(twoSumAlt(array, target))