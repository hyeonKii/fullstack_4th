const Menu = {
    짜장: {price: 7000}, 
    짬뽕: {price: 9900}, 
    탕수육: {price: 25000, taxFree: 1}
};



// function bill() {
//     console.log('========================');
//     for (const key in Menu) {
//         console.log(`*${key}`);
//         console.log(`공급가액: ${Menu[key].price}원`);
//         console.log(`부가세액: ${Math.round((Menu[key].price/1.1) * 0.1)}원`);
//         console.log(`---------------------`);
//     }
//     console.log('========================');
// }

function bill() {
    let result = [];
    const order = (choice) => {
        result[choice] = Menu[choice].price;
    }

    const printBill = () => {
        console.log('====================');
        let sumMenu = 0;
        let sumTax = 0;
        for (const key in result) {
            let tax = (Menu[key].taxFree ? 0 : Math.round((result[key]/1.1) * 0.1));
            sumMenu += result[key];
            sumTax += tax;
            console.log(`* ${key}`)
            console.log(`공급가액: \t  ${result[key]}원`);
            console.log(`부가세액: \t  ${tax}원`);
            console.log('--------------------');
        }
        console.log(`주문합계: \t  ${sumMenu}원`);
        console.log(`세액합계: \t  ${sumTax}원`);
        console.log('====================');
    }
    return {order, printBill};
}


const table1 = bill();

table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

table1.order('탕수육');
table1.printBill();
