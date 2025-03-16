
function secondLargest (arr) {
    let max = arr[0], secondMax;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}

let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let maxNumber = secondLargest(mainArray);

console.log("Max Number in Array :", maxNumber);