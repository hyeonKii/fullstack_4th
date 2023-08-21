// hoisting을 반영한 실행컨텍스트 예제

var gg = 1;
let bb = 2;

function f1(x, y) {
    var gg = 11;
    let bb = 22;
    var zz; // 변수 선언은 호이스팅이 된다. 변수 선언이 함수 선언보다 우선한다는 것

    function f2(t, u) {
        console.log(t, "inner", xx, zz);
    }
    function f2(t, u, v) {
        console.log(t, "inner2", xx, zz);
    }

    console.log("f1>", gg, bb, zz, f2, f2.length);

    f2("first");

    {
        var zz;

        let lll = 0;
        const xx = 99;

        function f2(t) {
            console.log(t, "nested", xx, zz, lll);
        }
        f2("nest-first");
        zz = 88;
    } // 블록 스코프도 호이스팅이 발생å
    zz = 800;
    f2("second");
}

function f2(g) {
    console.log(g, "global f2>", gg, bb, xx, kk); // ?
}

console.log("----------------------- start!!");
let xx = 9; //호이스팅이 발생하나 초기화되지 않으므로 referenceError: not initialized 발생
if (gg > 0) {
    var kk = 33;
    const yy = 9;
}
f1(1, 2);

console.log(kk);

f2("third");
