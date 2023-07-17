let runCnt = 0;
function fibonacciRecursive(n) {
    runCnt++
    if (n < 2) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciLoop(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
}

function memoized(fn) {
    const memoizedTable = {};
    return function(k) {
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    }
}

const memoizedFibonacci = memoized(function() {
    runCnt += 1;
    if (n < 2) return n;
    return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
})



for (let i = 0; i <= 40; i++) {
    runCnt = 0;
    console.log(`${i} ${fibonacci(i)} ${2 ** i}`);
}

console.time('X');