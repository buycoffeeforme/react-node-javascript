function factorial(n) {
    if(n==0 || n==1) return 1;
    return n * factorial(n-1)
}
let factNum = factorial(9);
console.log("printNumber1toN ::", factNum);