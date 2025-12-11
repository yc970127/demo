import mysql from 'mysql2/promise'

const dbConfig = {
  host: '139.196.147.148',
  user: 'briquetting-machine',
  password: 'yebzRj24Jk7FKemh',
  database: 'briquetting-machine',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

// 创建连接池
const pool = mysql.createPool(dbConfig)

export async function query(sql, params) {
  try {
    const [rows] = await pool.execute(sql, params || [])
    return rows
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

export default pool