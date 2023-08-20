type A = [string, number];
type B = [boolean, A]; // [boolean, [string, number]]
type C = [boolean, ...A]; //[boolean, string, number]

type Arr = (string | number)[];
type Brr = [boolean, Arr];
type Crr = [boolean, ...Arr];

const b: B = [false, ['a', 0]];
const c: C = [false, 'a', 0];

const bb: Brr = [false, [1, 'a', 10]];
const cc: Crr = [false, 1, 'a', 10];

