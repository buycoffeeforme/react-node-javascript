
function findMinMax (arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return {min , max}
}

let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68, 1];
let minNumber = findMinMax(mainArray);
console.log("Index Present :", minNumber)