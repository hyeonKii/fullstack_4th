function deco(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('decorator 평가');
};

class TestClass {
    @deco
    test() {
        console.log('함수 호출')
    }
}

const t = new TestClass();
t.test();