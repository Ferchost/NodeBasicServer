const express = require('express');
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares()
        
        //rutas
        this.routes();
    }

    middlewares() {
        //
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes() {
       this.app.use('/api/users/', require('../routes/user'))

    }

    listen() {
        this.app.listen(this.port)
    }



}
module.exports = Server;