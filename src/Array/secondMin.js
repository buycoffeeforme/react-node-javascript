
function findSecondMinNumber (arr) {
    let min = arr[0], secondMin = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] > min && arr[i] < secondMin) {
            secondMin = arr[i];
        }
    }
    return secondMin;
}

let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let minNumber = findSecondMinNumber(mainArray);

console.log("Second Min Number in Array :", minNumber);