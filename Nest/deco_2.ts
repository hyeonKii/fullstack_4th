function decorate(value: string) {
    console.log('데코레이터 평가');
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        console.log(value);
    }  
};

class TestClass1 {
    @decorate('hello')
    test() {
        console.log('함수 호출됨');
    }
}

const t1 = new TestClass();
t1.test();