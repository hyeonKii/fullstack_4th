//test 2-1
// const today = new Date();
// const date = today.getDay();

// switch (date) {
//     case 0:
//         console.log('오늘은 일요일입니다.');
//         break;
//     case 1:
//         console.log('오늘은 월요일입니다.');
//         break;
//     case 2:
//         console.log('오늘은 화요일입니다.');
//         break;
//     case 3:
//         console.log('오늘은 수요일입니다.');
//         break;
//     case 4:
//         console.log('오늘은 목요일입니다.');
//         break;
//     case 5:
//         console.log('오늘은 금요일입니다.');
//         break;
//     case 6:
//         console.log('오늘은 토요일입니다.');
//         break;
//     default:
//         console.log('해당하는 요일이 없습니다.')
    
// }


//오늘 날짜의 요일을 출력하는 알고리즘 작성 1
function getDate() {
    for (let i = 0; i < week.length; i++) {
        if (today != i)
            continue
        else console.log(`오늘은 ${week[i]}요일 입니다.`);
    }
}

//오늘 날짜의 요일을 출력하는 알고리즘 작성 2
function getDate() {
    const result = week.filter((_, idx) => idx == today);
    console.log(`오늘은 ${result[0]}요일 입니다.`);
}

const today = new Date().getDay();
const week = ['일', '월', '화', '수', '목', '금', '토'];
getDate();