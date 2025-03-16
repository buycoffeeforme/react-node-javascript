
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