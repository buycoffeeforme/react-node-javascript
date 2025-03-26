function sortDescending(arr) {
    let newArr = []
    for (let i =0; i < arr.length; i++) {
        for (let j =i; j < arr.length; j++) {
            newArr.push(arr.slice(i, j + 1));
        }
    }
    return newArr;
}
let mainArray = [-2,-5,6,-2,-3,1,5,-6];
let pp = sortDescending(mainArray);
console.log(pp);