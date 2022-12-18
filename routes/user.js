const {Router} = require('express');
const { userGet, userPut, userPost, userDelete } = require('../controllers/user');

const route = Router();

route.get('/', userGet);
 
route.put('/:id', userPut)

route.post('/', userPost)

route.delete('/', userDelete)

module.exports = route;