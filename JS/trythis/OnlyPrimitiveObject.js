const kim = {nid: 3, name: 'hong', addr: 'Pusan'};

const copyObject = (obj) => {
    // 1
    // return Object.assign({}, kim);
    
    //2
    const {nid, name, addr} = obj;
    return {nid, name, addr};
}


const newKim = copyObject(kim);
newKim.addr = 'Daegu';


console.log(newKim.addr != kim.addr);