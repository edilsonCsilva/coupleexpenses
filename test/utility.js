const axios  =require("axios")
const crypto = require('crypto')


function generate(size){
    size = (size) ? size : 20
    return crypto.randomBytes(size).toString("hex")
}

function   request(url,method,data){
    return axios({url,method,data,validityState:false})
}


module.exports = { generate,request }