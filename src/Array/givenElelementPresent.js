
function findMinNumber (arr, ele) {
    let isPresent = true;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ele) {
            return true;
        }
    }
}
let givenElement = 121;
let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let minNumber = findMinNumber(mainArray, givenElement);
if(minNumber){
    console.log("We found given element in array :", givenElement);
}else{
    console.log("We didnt found given element in array :", givenElement);
}