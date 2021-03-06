const modelUsers = require('../model/user')
const {response} = require('../helper/index')
const moment = require('moment')

module.exports = {
    userStatus : async(req, res) => {
        try{
            const {
                email,
                password
            } = req.body;
            
            const body = {
                email,
                password,
                status: 1
            };
            const result = await modelUsers.verifyUser(body.status, email, password);
            console.log(result)
            let match = result.message.split(' ')[2];
            let change = result.message.split(' ')[5]
            console.log(match, change)
            if(match == 1) {
                if(change == 1){
                    const result = await modelUsers.login(email, password)
                    response(res, 200, {data: result})
                }else{
                    response(res, 200, {message: "the user is login"})
                }
                
            }else{
                await modelUsers.register(body);
                const result = await modelUsers.login(email, password)
                console.log(result)
                response(res, 200, {data: result}) 
            }
        }catch(error){
            response(res, 500, {message: "the server is error", error: error})
        }
    },
    userLogout : async(req, res) => {
        try{
            const {
                email,
                id
            } = req.body;

            const body = {
                status: 0
            };

            const result = await modelUsers.logout(body, email, id);
            console.log(result.message.split(' ')[2]);
            let match = result.message.split(' ')[2];
            if(match == 1){
                response(res, 200, {message: "the user is logout"}) 
            }else{
                response(res, 406, {message: "the user is not found"})
            }
        }catch(error){
            response(res, 500, {message: "the server is error", error: error})
        }
    },
}