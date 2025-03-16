
function reverseArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}
let reverseArr = [];
let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
reverseArray(mainArray);
console.log("Array before reverse :", mainArray);
console.log("Array after reverse:", reverseArr);