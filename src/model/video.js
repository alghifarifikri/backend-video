const conn = require('../config/config')

module.exports = {
    readVid: async() => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT id, title, description, link, like, dislike, email FROM video 
            LEFT JOIN user ON video.user_id = user.id`,
            (err, result) => {
                if(err) reject(err)
                resolve(result)
            });
        })
    },
    addVid: async(body) => {
        return new Promise ((resolve, reject) => {
            conn.query(`INSERT INTO share SET ?`, body, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}