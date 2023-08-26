interface Avengers {
    moveout(): void;
}

// class SpiderMan implements Avengers {
//     constructor(public name: string) {

//     }

//     moveout() {
//         console.log('spider');
//     }
// }

// class IronMan implements Avengers {
//     constructor(public name: string) {

//     }
//     moveout() {
//         console.log('fire');
//     }
// }

// const s = new SpiderMan('spiderMan');
// s.moveout();

class Avengers {
    moveout() {}
}

class BaseAvengers implements Avengers {
    constructor(public name: string) {}
    moveout() {}
}

class SpiderMan extends Avengers {
    moveout() {
        super.moveout();
        console.log("spiderweb!");
    }
}

class IronMan implements Avengers {
    constructor(public name: string) {}
    moveout() {
        console.log("fire");
    }
}

const s = new IronMan(new SpiderMan);
s.moveout();
