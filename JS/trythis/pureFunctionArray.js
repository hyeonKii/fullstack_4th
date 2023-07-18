const arr = [1,2,3,4];

const push = (arr, ...appendValues) => [...arr, ...appendValues];
const pop = (arr, cnt = 1) => {
    let result = [];
    for (let i = 0; i < cnt; i += 1) {
        result = [arr[arr.length - (i + 1)], ...result];
    }
    return result?.length === 1 ? result[0] : result;
}

const unshift = (arr, ...appendValues) => [...appendValues, ...arr];

const shift = (arr, cnt = 1) => {
    let result = [];
    for (let i = cnt; i < arr.length; i += 1) {
        result = [...result, arr[i]];
    }
    return result;
}

console.log(push(arr,5,6));
console.log(pop(arr));
console.log(pop(arr, 2));
console.log(unshift(arr,0));
console.log(unshift(arr, 7, 8));
console.log(shift(arr));
console.log(shift(arr,2));

console.log(arr);