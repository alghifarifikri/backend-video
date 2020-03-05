const db = require('../config/config')

module.exports = {
    register : (body) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO user SET ?', body, (err, result)=>{
            if(err) reject(err)
            resolve(result)
            })
        })
    },
    login : (email, password)=> {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT id, email FROM user WHERE email = ? AND password = ?', [email, password], (err, result)=>{
                if(err) reject('error')
                resolve(result)
            })
        })
    },
    verifyUser : (status, email, password) =>{
        return new Promise((resolve, reject)=>{
            db.query(`UPDATE user SET status = ? WHERE email = ? AND password = ?`, [status, email, password], (err, result) => {
                if(err) reject('error')
                resolve(result)
            }) 
        })
    },
    logout :  (body, email, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE user SET ? WHERE email = ? AND id = ?`, [body, email, id], (err, result) => {
                if(err) reject('error')
                resolve(result)
            })
        })
    }
}