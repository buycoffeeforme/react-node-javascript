function calculateComplexity(fn, ...args) {
    const iterations = 5; // Number of times to run the function for more accurate results
    let totalMemoryUsed = 0;
    let totalTimeTaken = 0;

    // Run the function multiple times to smooth out the variations in performance
    for (let i = 0; i < iterations; i++) {
        const start = Date.now(); // Start the timer for time complexity measurement
        const startMemory = process.memoryUsage().heapUsed; // Start memory measurement

        // Execute the function
        fn(...args);

        const endMemory = process.memoryUsage().heapUsed; // End memory measurement
        const end = Date.now(); // End the timer for time complexity measurement

        const memoryDifference = endMemory - startMemory; // Difference in memory usage
        const timeDifference = end - start; // Difference in time taken

        totalMemoryUsed += memoryDifference;
        totalTimeTaken += timeDifference;
    }

    // Average out the memory and time across all iterations
    const avgMemoryUsed = totalMemoryUsed / iterations;
    const avgTimeTaken = totalTimeTaken / iterations;

    // Analyze Time Complexity based on time taken
    const timeComplexity = analyzeTimeComplexity(avgTimeTaken, args[0]);

    // Analyze Space Complexity based on memory used
    const spaceComplexity = analyzeSpaceComplexity(avgMemoryUsed, args[0]);

    return {
        avgMemoryUsed,
        avgTimeTaken,
        timeComplexity,
        spaceComplexity
    };
}

// Analyze Time Complexity based on time taken
function analyzeTimeComplexity(timeTaken, n) {
    if (timeTaken > Math.pow(n, 2)) {
        return 'O(n^2)'; // Quadratic time complexity
    } else if (timeTaken > Math.pow(2, n)) {
        return 'O(2^n)'; // Exponential time complexity
    } else if (timeTaken > n * Math.log(n)) {
        return 'O(n log n)'; // Log-linear time complexity
    } else if (timeTaken > n) {
        return 'O(n)'; // Linear time complexity
    } else if (timeTaken > Math.log(n)) {
        return 'O(log n)'; // Logarithmic time complexity
    } else {
        return 'O(1)'; // Constant time complexity
    }
}

// Analyze Space Complexity based on memory used
function analyzeSpaceComplexity(memoryUsed, n) {
    if (memoryUsed > Math.pow(n, 2)) {
        return 'O(n^2)'; // Quadratic space complexity
    } else if (memoryUsed > Math.pow(2, n)) {
        return 'O(2^n)'; // Exponential space complexity
    } else if (memoryUsed > n * Math.log(n)) {
        return 'O(n log n)'; // Log-linear space complexity
    } else if (memoryUsed > n) {
        return 'O(n)'; // Linear space complexity
    } else if (memoryUsed > Math.log(n)) {
        return 'O(log n)'; // Logarithmic space complexity
    } else {
        return 'O(1)'; // Constant space complexity
    }
}

module.exports = { calculateComplexity }
