/**
 * This file contains two implementations of the Bubble Sort algorithm:
 * 1. worseBubble: A basic (but inefficient) implementation of Bubble Sort.
 * 2. bestBubble: An optimized implementation of Bubble Sort.
 */

// Define the array to be sorted.
let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];

/**
 * Implements a basic (inefficient) Bubble Sort.
 * This version compares and swaps elements multiple times unnecessarily.
 * @param {number[]} mainArray - The array to be sorted.
 * @returns {number[]} The sorted array.
 */
function worseBubble(mainArray) {
  // Outer loop: Iterate through the array for each pass.
  for (let i = 0; i < mainArray.length; i++) {
    // Inner loop: Compare and swap adjacent elements.
    for (let j = 0; j < mainArray.length; j++) {
      // If the current element is smaller than the element at j, swap them.
      if (mainArray[i] < mainArray[j]) {
        // Swap the elements using a temporary variable.
        let temp = mainArray[i];
        mainArray[i] = mainArray[j];
        mainArray[j] = temp;
      }
    }
  }
  // Return the sorted array.
  return mainArray;
}

// Sort the array using worseBubble and log the result.
let avgNumWorse = worseBubble([...mainArray]);//pass copy of array
console.log("Worst Bubble Sort :", avgNumWorse);

/**
 * Implements an optimized Bubble Sort.
 * This version uses a 'swapped' flag to exit early if no swaps are made in a pass.
 * @param {number[]} mainArray - The array to be sorted (modified in place).
 */
function bestBubble(mainArray) {
    let swapped; // Flag to track if any swaps were made in a pass.
    do {
      swapped = false; // Reset the flag at the beginning of each pass.
      // Iterate through the array (excluding the last element in each pass, as it's already in the correct place).
      for (let i = 0; i < mainArray.length-1; i++) {
        // If the current element is less than the next element (out of order).
        if (mainArray[i] < mainArray[i + 1]) {
          // Swap the elements.
          let temp = mainArray[i];
          mainArray[i] = mainArray[i + 1];
          mainArray[i + 1] = temp;
          swapped = true; // Set the flag to true because a swap was made.
        }
      }
    } while (swapped); // Continue looping as long as swaps were made in the previous pass.
}

// Sort the array using bestBubble and log the result.
bestBubble(mainArray);
console.log("Best Bubble Sort :", mainArray);
