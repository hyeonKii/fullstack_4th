// 1 - 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.

function getSqrt() {
    for (let i = 1; i < num + 1; i++) {
        result = String(Math.sqrt(i)).slice(0,5);
        if (result.length == 1) continue
        
        console.log(result);
    }
}

const num = 10;
getSqrt();