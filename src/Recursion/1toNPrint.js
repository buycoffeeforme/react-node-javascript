function printNumber1toN(n) {
    if(n==1) {
        console.log(1);
    } else {
        console.log(n);
        printNumber1toN(n-1);
    }
}

function printNumberNto1(n) {
    if(n==1) {
        console.log(1);
    } else {
        printNumberNto1(n-1);
        console.log(n);
    }
}

console.log("printNumber1toN ::", printNumber1toN(5));
console.log("printNumberNto1 ::", printNumberNto1(5));
