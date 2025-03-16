
function findMinNumber (arr, ele) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ele) {
            return i;
        }
    }
}
let givenElement = 121;
let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let minNumber = findMinNumber(mainArray, givenElement);
console.log("Index Present :", minNumber)