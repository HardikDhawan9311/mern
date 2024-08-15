// import mysql from 'mysql2';

// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'productapi',
//   port: 3306,
// };

// let pool;

// try {
//   pool = mysql.createPool(config);
//   console.log('Connected to MySQL Server');
// } catch (err) {
//   console.error('Database Connection Failed!', err);
// }

// export { mysql, pool };
import mysql from 'mysql2';

// export const pool = mysql.createPool({
//    host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   database: 'productsapi',
//   port: 3306
// })

// export const pool1 = mysql.createPool({
//   host: '127.0.0.1',
//  user: 'root',
//  password: 'root',
//  database: 'productsapi',
//  port: 3306
// }).promise()



export const pool = mysql.createPool({
  host: 'localhost',

  user: 'root',
  password: '1234',
  database: 'productapi',
  port: 3306,
})

export const pool1 = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'productapi',
  port: 3306,

}).promise()


// export const pool = mysql.createPool({
//   host: 'localhost',
//  user: 'root',
//  password: 'Hardik@9311',
//  database: 'productapi',
//  port: 3306
// })

// export const pool1 = mysql.createPool({
//  host: 'localhost',
// user: 'root',
// password: 'Hardik@9311',
// database: 'productapi',
// port: 3306
// }).promise()



