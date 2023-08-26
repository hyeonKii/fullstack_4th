class Animal {
    name;
    constructor(name: string) {
        this.name = name;
    }

    bark() {}
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark() {
        console.log('멍멍');
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }

    bark() {
        console.log('meow');
    }
}


//buildup pattern 
const fns = {
    barkCat() {
        console.log('meow meow');
        return this;
    },
    barkDog() {
        console.log('wal wal');
        return this;
    }
};

fns.barkCat().barkDog();