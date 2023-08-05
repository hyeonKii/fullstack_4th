// 함수를 한번만 실행하게 하는 once 함수를 작성하시오

//사용된 개념: 그룹 연산자, Function.prototype.call
// Function.prototype.call 메서드는 기본적으로 함수를 호출하는 것이다.
// Function.prototype.call 메서드는 this로 사용할 객체와 인수 리스트를 인수로 전달 받는다.

const hong = {id: 1, name: "hong"};
const kim = {id: 2, name: "kim"};

//1
const once = (f) => {
  let done = true;
  return (...args) =>
    done ? ((done = false), f.call(this, ...args)) : undefined;
};

//2
// const once = (f) => {
//   let done = true;
//   return (...args) =>
//     done ? ((done = false), f.apply(this, [...args])) : undefined;
// };

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다`);

console.log(fn(1, 6));
console.log(fn(2, 7));


const printInfo = function (...x) {
  console.log('Info11>>', ...x, this.id, this.name);
};

const bindFn = once(printInfo.bind(kim));
// bindFn(1, 2, 3, 4);
bindFn(1);
// bindFn(2);