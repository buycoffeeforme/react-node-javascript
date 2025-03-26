// This program calculates the average of a given array of numbers.
// It initializes a sum variable with the first element of the array.
// Then, it iterates through the array, adding each element to the sum.
// Finally, it divides the total sum by the number of elements in the array to get the average.

function averageNumber (arr) {
    let sum = arr[0];
    for(let i = 0; i < arr.length; i++) {
        sum = (sum + arr[i]);
    }
    return (sum / arr.length);
}
let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let avgNum = averageNumber(mainArray);
console.log("Avarage in Array :", avgNum);

