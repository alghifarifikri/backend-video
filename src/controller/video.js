const video = require('../model/video')
const { response } = require('../helper/index')
const moment = require('moment')

module.exports = {
    readVid: async(req, res) => {
        try{
            const result = await video.readMovie();
            response(res, 200, {movies: result})
        }catch(error){
            response(res, 500, {message: "server error", error:error})
        }
    },
    addVid: async(req, res) => {
        try{
            const {
                link,
                id,
                title,
                description
            } = req.body;

            const body = {
                link,
                user_id: id,
                like: 0,
                dislike: 0,
                title,
                description
            };
            console.log(body);
            
            const result = await video.addMovie(body);
            response(res, 200, {message: "user is added"})
        }catch(error){
            response(res, 200, {message: "user was there", error:error})
        }
    }
}