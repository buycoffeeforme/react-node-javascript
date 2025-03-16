/**
 * @fileoverview This file contains a function to find the single non-repeating element in an array where all other elements repeat twice.
 * @description The function uses the XOR (^) bitwise operator to efficiently find the unique element. XORing a number with itself results in 0, and XORing any number with 0 returns the number itself.
 */

/**
 * Finds the single non-repeating element in an array.
 *
 * @param {number[]} arr - The input array containing numbers, where all but one number repeat twice.
 * @returns {number} The single non-repeating element.
 */
function findSingleNonRepeating(arr) {
    let result = 0;
    for (let num of arr) {
      result ^= num; // XOR all numbers
    }
    return result;
  }
  
  const mainArray = [1, 2, 1, 4, 4];
  const singleNonRepeatingItem = findSingleNonRepeating(mainArray);
  
  console.log("Single Non-Repeating Array:", singleNonRepeatingItem); // Output: 2
  
  