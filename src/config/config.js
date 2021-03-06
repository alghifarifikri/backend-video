require('dotenv/config')
const mysql = require('mysql')

dbConn = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
})

dbConn.connect((err)=>{
    if(err)
    console.log('Not Connect to Database', err)
    else
    console.log('Server Activated!')
})
module.exports = dbConn