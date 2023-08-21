const weeks = ['일', '월', '화', '수', '목', '금', '토'];

let widx = -1;
const getNextWeek= () => {
    widx += 1;
    if (widx >= widx.length) widx = 0;
    return `${weeks[widx]}요일`;
};

const getNextWeek_closure = (() => {
    let widx = 0;
    return () => widx >= widx.length ? widx = 0 : `${weeks[widx++]}요일`;
})();


let cnt = 0;
const intl = setInterval(() => {
    console.log('call', cnt, getNextWeek_closure());
    if((cnt += 1) === 7) clearInterval(intl);
}, 1000);