// setTimeout( function() {
//     console.log('depth1', new Date());
//     setTimeout(function() {
//         console.log('depth2', new Date());
//         setTimeout( function() {
//             console.log('depth2', new Date());
//             throw new Error('Already 3-depth')
//         },3000)
//     },2000)
// },1000);


const promiseFn = (time = 1) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`depth${time}`, new Date());
            time < 3 ? resolve(time + 1) : reject(new Error('Already 3-depth'));
        }, time * 1000);
    })

promiseFn()
    .then(promiseFn)
    .then(promiseFn)
    .catch(err => console.log(err));

console.log('Start!', new Date());