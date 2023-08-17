function f() {
    const a = arguments;
    console.log(arguments);
}

function f2(g: string, ...args: string[]) {
    console.log(g, args);
}

const arr2 = ['aa', 'bb'];
const arr3 = ['aa', 'bb'] as const;
const arr4 = [...arr2] as const

f2(arr2[0], ...arr2.slice(1));
f2(arr2[0], ...[...arr2] as const)
f2(arr2[0], ...arr4)

function f3() : [string, number] {
    return ['a', 1];
}

const rets = f3();

type TUser = {
    id: number,
    name: string
};

type TAddrUser = TUser & {
    addr: string,
}

interface User {
    id: number;
    name: string;
}

interface AddrUser extends User {
    addr: string;
}

const au1: AddrUser = {id: 1, name: 'hong', addr: 'seoul'};

class Member implements User {
    id;
    constructor(id: number, public name: string) {
        this.id = id;
    }
}



interface FunctionWithCount {
    count: number;
    () : void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`${keepsTrackOfCalls.count}`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;


interface WC {
    [i: string] : number | string;
    name: string
}
