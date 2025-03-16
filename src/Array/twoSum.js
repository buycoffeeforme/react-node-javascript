function twoSum(nums, target) {
    let numMap = {}; // Store seen numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Find required number

        if (numMap[complement] !== undefined) { // Check if complement exists
            return [numMap[complement], i]; // Return indices
        }

        numMap[nums[i]] = i; // Store the current number with its index
    }
}

// Example usage:
console.log(twoSum([2, 11, 15, 9, 7])); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
