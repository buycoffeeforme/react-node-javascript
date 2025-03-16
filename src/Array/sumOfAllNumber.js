
function sumOfAllNumbebr (arr) {
    let sum = arr[0];
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];
let sumAllNumber = sumOfAllNumbebr(mainArray);
console.log("Sum of all Number in Array :", sumAllNumber);