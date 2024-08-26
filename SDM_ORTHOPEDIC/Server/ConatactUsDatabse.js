import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  // host: process.env.MYSQL_HOST,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.MYSQL_DATABASE
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'contactus'
}).promise()

export async function getUsers() {
    const [rows] = await pool.query(`
    SELECT * 
    FROM users`)
    return rows;
  }

// const result = await pool.query("select * from notes")
// console.log(result)

export async function getUser(userid) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM users
    WHERE userid = ?
    `, [userid])
    return rows[0]
  }
  
//   const note = await getNote(3)
//   console.log(note)

export async function createUser(username, email,phone_number,company_name,message) {
    const [result] = await pool.query(`
    INSERT INTO users (username, email,phone_number,company_name,message)
    VALUES (?, ?, ?, ?, ?)
    `, [username, email,phone_number,company_name,message])
    return result
  }
