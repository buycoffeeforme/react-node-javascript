
function findMinNumber (arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let minNumber = findMinNumber(mainArray);

console.log("Min Number in Array :", minNumber);