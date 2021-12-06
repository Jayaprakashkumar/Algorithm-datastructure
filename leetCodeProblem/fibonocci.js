// fibonocci with memoization method
function fibo(n, memo = []) {
    if (memo[n]) return memo[n];

    if (n < 2) return 1;

    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);

    console.log(n, memo);
    return memo[n];

}

// fibonocci with tabulation method
function fiboTabulation(n) {
    let table = new Array(n+1).fill(0);
    table[0] =0;
    table[1] =1;

    for(let i=2;i<table.length;i++){
        table[i] = table[i-1] + table[i-2];
    }
    return table[n];
}


console.log(fiboTabulation(6));
console.log(fiboTabulation(7));
console.log(fiboTabulation(8));
console.log(fiboTabulation(50));
    // console.log(fibo(5));