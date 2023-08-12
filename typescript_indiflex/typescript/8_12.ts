const poem = Math.random() > 0.5 ? {id:1, name: 'kim'} : {id:2, addr: 'seoul'};


function f(s?:string, n: number = 1, ...x: number[]) {
    console.log('s>>', s, 'n', n, typeof n, x);
    if(n !== undefined) console.log(n.toFixed());
}

f('x', undefined)

type TF = (s:string) => void;
const f1 : TF = function(s) {console.log(s);}
//f1(1)
//f1('1')



// question
type UserWithEmail = {name: string, email: string}
type UserWithoutEmail = {name: string}

const hasBoth = {name: 'test', email: 'test@test.com'};

// 초과 속성 검사 문제
let userA: UserWithoutEmail = hasBoth;
// userA는 초기값이 구조적으로 UserWithoutEmail과 일치하기 때문에 타입 오류가 발생하지 않는다


let userB: UserWithoutEmail = {name: 'foo', email: 'foo@gmail.com'}
// 초과 속성 검사는 위 userB와 같이 객체 타입의 선언된 위치에서 생성되는 객체 리터럴에 대해 발생한다