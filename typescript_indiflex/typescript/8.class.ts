// 클래스 메서드
class Greeter {
    greet(name: string) {
        console.log(`${name}, do your self`);
    }
}

new Greeter().greet('kim');

// 클래스 생성자
class Greeted {
    constructor(message: string) {
        console.log(`you know I'm saying ${message}`);
    }
}

new Greeted('get messi');

// 클래스 속성
class FieldTrip {
    destination: string;

    constructor(destination: string) {
        this.destination = destination;
        console.log(`we are going to ${destination}`);
    }
}

// 함수 속성 - 메서드 접근 방식
class WithMethod {
    myMethod() {}
}

new WithMethod().myMethod() === new WithMethod().myMethod(); //true

// 함수 속성 - 값이 함수인 속성을 선언하는 방식
class WithProperty {
    myProperty!: () => {}; // 초기화 되지 않았으며, construtor에도 할당되지 않았기 때문에 오류 발생 따라서 엄격한 초기화 검사를 비활성화하려면 프로퍼티 이름에 !를 붙인다.

}

new WithProperty().myProperty === new WithProperty().myProperty; // false

//초기화 검사
class MissingInitializer {
    property: string;
}

new MissingInitializer().property.length;


class ActivitieQueue {
    pending!: string[];

    initialize(pending: string[]) {
        this.pending = pending;
    }

    next() {
        return this.pending.pop();
    }
}

const activities = new ActivitieQueue();

activities.initialize(['eat', 'sleep', 'learn']);
activities.next();

//선택적 속성
class MissingInitialization {
    property?: string;
}

new MissingInitialization().property?.length;

//읽기 전용 속성
class Quote {
    readonly text: string;

    constructor(text: string) {
        this.text = 
    }

    emphasize() {
        this.text += '!';
    }
}

// 타입으로서의 클래스 - 타입 시스템에서 클래스는 클래스 자체(런타임 값)와 타입 어노테이션에서 사용할 수 있는 타입을 모두 생성한다
class Teacher {
    sayHello() {
        console.log('Take Chances');
    }
}

let teacher: Teacher;

teacher = new Teacher()


//클래스와 인터페이스
interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours:number) {
        console.log('studying');
    }
}

// 클래스 확장
class CTeacher {
    teach() {
        console.log('I will teach you');
    }
}

class StudentTeacher extends CTeacher {
    learn() {
        console.log('I will teach students');
    }
}

const professor = new StudentTeacher();

professor.teach();
professor.learn();

// 할당 가능성 확장
class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject;
    }
}

class OnlineLesson extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
        super(subject);
        this.url = url;
    }
}

let lesson: Lesson;
lesson = new Lesson('code');
lesson = new OnlineLesson('code', 'typescript');

class GradeAnnouncer {
    message: string;

    constructor(grade: number) {
        this.message = grade >= 65 ? 'do your best' : 'pass!';
    }
}

class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100)
    }
}

// 재정의된 메서드
class GradeCounter {
    countGrades(grades: string[], letter: string) {
        return grades.filter(grade => grade === letter).length;
    }
}

class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
        return super.countGrades(grades, 'F');
    }
}

// 재정의된 속성
class Assignment {
    grade?: number;
}

class GradeAssignment extends Assignment {
    grade: number;

    constructor(grade: number) {
        super();
        this.grade = grade;
    }
}


//추상 클래스
abstract class School {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getStudentTypes(): string[];
}

class Preschool extends School {
    getStudentTypes() {
        return ['preschooler']
    }
}

class Base {
    public isPublic = 1;
    protected isProtected = 2;
    private isPrivate = 3;
}

class Subclass extends Base {
    examples() {
        this.isPublic;
        this.isProtected;
        this.isPrivate;
    }
}

class TwoKeywords {
    private readonly name: string;
    
    constructor() {
        this.name = 'martin suliv'
    }

    log() {
        console.log(this.name);
    }
}

const two = new TwoKeywords();