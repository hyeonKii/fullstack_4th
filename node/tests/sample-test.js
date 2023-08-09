//describe 는 병렬로 실행된다 (비동기)
// it는 직렬로 실행 (동기적)

const chai = require("chai");
const chaiHttp = require("chai-http");
const {expect} = require("chai");
const db = require("../utils/db.js");

require("dotenv").config();

function f() {
    return [1, 2, 3];
}

// before(() => console.log('before'));
// beforeEach(() => console.log('before-each'));
// after(() => console.log('after'));
// afterEach(() => console.log('after-each'));

describe("회원", () => {
    it("login", () => {
        // setTimeout(() => console.log('login'), 1000);
        const arr = f();
        // console.log("🚀  it  arr:", arr);
        expect(arr).to.deep.equal([1, 2, 3]);
    });
});

describe("dotenv", () => {
    it("get", () => {
        expect(process.env.TEST).to.be.equal("12345");
    });
});

describe.only("db utils", () => {
    it("db-gets-finds", async () => {
        const emps = await db.finds("Emp", {dept: 3});
        console.log("🚀  emps:", emps);
    });

    it("db-get", async () => {
        const emp1 = await db.get("Emp", 1);
        // console.log('🚀  emp1:', emp1);
        expect(emp1).to.deep.equal({
            id: 1,
            ename: "유태찬",
            dept: 2,
            salary: 200,
        });
    });

    it("db-info", () => {
        // setTimeout(() => console.log('login'), 1000);
        // const arr = f();
        // console.log("🚀  it  arr:", arr);
        const dbInfo = db.getDbInfo();
        expect(dbInfo).to.deep.equal({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
    });
});

const should = chai.should();
chai.use(chaiHttp); // DI

describe("서버", () => {
    it("get", (done) => {
        chai.request("http://localhost:8088")
            .get("/")
            .end((err, res) => {
                // console.log(res);
                should.not.exist(err);
                should.exist(res);

                const {text} = res;
                text.should.eq("hello world");

                // const {body} = res;
                // const {id, name} = body;
                // id.should.to.be.a("number");
                // id.should.to.be.eq(1);
                // id.should.eq(1);
                // id.should.not.to.be.eq(0);
                // id.should.not.eq(0);
                // name.should.to.be.a("string");

                // const user2 = {...user, name: "홍길동"};
                // body.should.to.be.deep.eq(user2);
                // body.should.deep.eq(user2);
                // expect(body).deep.eq(user2);

                // body.should.have.property("id");
                // body.should.have.property("id").and.eq(1);

                done();
            });
    });
});
