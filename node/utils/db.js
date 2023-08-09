const my = require("mysql2");
const mysql = require("mysql2/promise");
const sqls = require("../sqls.json");
require("dotenv").config();

const DB_INFO = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

module.exports = {
    async getConn() {
        return mysql.createConnection(DB_INFO);
    },

    getConnection() {
        return my.createConnection(DB_INFO);
    },

    async execute(sql, params) {
        let conn;
        try {
            conn = await this.getConn();
            const data = await conn.execute(sql, params);
            conn.end();
            return data;
        } catch (error) {
            console.log("Error on db.execute>>", error.message);
            console.error("-> SQL:", sql, params);
            throw error;
        }
    },

    async get(table = "Emp", id = 0) {
        const [[data]] = await this.execute(
            `select * from ${table} where id = ${id}`
        );
        return data;
    },

    async gets(table, limit = 100) {
        const [data] = await this.execute(
            `select * from ${table} limit ${limit}`
        );
        return data;
    },

    async finds(table, searchParam) {
        const where = Object.entries(searchParam)
            .map(([k, v]) => `${k} = ${v}`)
            .join(" and ");
        // console.log("🚀  where:", where);

        const [data] = await this.execute(
            `select * from ${table} where ${where}`
        );
        // console.log('🚀  rows:', data);
        return data;
    },

    getDbInfo() {
        return DB_INFO;
    },
};
