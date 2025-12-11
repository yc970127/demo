import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
    try {
        const connection = await mysql.createConnection({
            host: '139.196.147.148',
            user: 'briquetting-machine',
            password: 'yebzRj24Jk7FKemh',
            database: 'briquetting-machine',
        });

        const [rows] = await connection.query('SELECT 1 + 1 AS result');

        return {
            success: true,
            message: 'MySQL 连接成功！',
            result: rows
        };
    } catch (error) {
        return {
            success: false,
            message: 'MySQL 连接失败！',
            error: error.message
        };
    }
});
