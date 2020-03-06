const conn = require('../config/config')

module.exports = {
    readVid: async() => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT video.id, video.title, video.description, video.link, video.like, video.dislike, user.email FROM video LEFT JOIN user ON video.user_id = user.id`,
            (err, result) => {
                if(err) reject(err)
                resolve(result)
            });
        })
    },
    addVid: async(body) => {
        return new Promise ((resolve, reject) => {
            conn.query(`INSERT INTO video SET ?`, body, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}