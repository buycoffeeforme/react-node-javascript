
function findMaxNumber (arr) {

    let max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let maxNumber = findMaxNumber(mainArray);

console.log("Max Number in Array :", maxNumber);