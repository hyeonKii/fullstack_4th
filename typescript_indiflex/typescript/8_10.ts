const Myname = 'hyeonKii';

const fy = (n: number | boolean) => console.log(n);
let y = typeof Myname === 'string' ? 1 : false;
console.log('y', y, typeof y);

y = 1;
fy(y);

y = true;
fy(y);


const S = 100; // runtime에 값이 정해지기 때문에 타입스크립트는 yy의 타입을 1가지로 고정할 수 없다
let yy = Math.random() > 0.5 ? 'String' : false;
fy(yy);

const Y = typeof yy === 'number' ? yy : 0;
fy(Y)

let nu = Math.random() > 0.5 ? 1 : null;
console.log(nu.toString());



const s: string = 'aaa';
const ss = 'bbb';
const obj = {id: 1, name: 'hong'};
type t = {id: number, name: string};

const obj2: t = {id: 2, name: 'kim'};

function f(x: t) {
    console.log(x);
}

const x1: t = {id: 3, name: 'Park'};
f(x1);

const x2 = {id: 4, name: 'choi'};
f(x2);

class Animal {
    name;
    constructor(name: string) {
        this.name = name;
    }
}

const Dog: Animal = new Animal('lucy');