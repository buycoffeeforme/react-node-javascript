
function countOccurrences (arr) {
    let countMap = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(countMap[num] === undefined) {
            countMap[num] = 1;
        }else{
            countMap[num]++;
        }
    }
    console.log("countMap ::", countMap);
}
let mainArray = [95, 57, 99, 85, 36, 57, 27, 95, 95];
let minNumber = countOccurrences(mainArray);