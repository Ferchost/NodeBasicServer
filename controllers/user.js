const {response} = require('express');

const userGet = (req, response) => {
    //Query params
    const {q, name, id} = req.query;

    response.json({
        ok:true,
        msg: "get API controller",
        q,
        name, 
        id
    })
}

const userPut = (req, response) => {
    const body = req.body
    const id = req.params.id;
    response.json({
        ok:true,
        msg: "put API c",
        id
    })
}
const userPost = (req, response) => {
    const body =  req.body
    response.status(201).json({
        ok:true,
        msg: "post API c",
        body
    })
}
const userDelete = (req, response) => {
    response.json({
        ok:true,
        msg: "delete API c"
    })
}
module.exports = {
    userGet,
    userDelete,
    userGet,
    userPut,
    userPost
}