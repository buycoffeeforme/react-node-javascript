let mainArray = [12, 56, 99, 85, 36, 57, 27, 95, 68];

function sortAscending(arr) {
    for (let i =0; i < arr.length; i++) {
        for (let j=0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log("Ascending Oder :", arr);
}
sortAscending(mainArray);

function sortDescending(arr) {
    for (let i =0; i < arr.length; i++) {
        for (let j=0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log("Descending Oder :", arr);
}
sortDescending(mainArray);