import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { AppDataSource } from '../database/database-connection';
import { routesPath } from '../app/constants/routes/routes.const';
import {pagination} from 'typeorm-pagination'
import authRoutes from '../app/routes/auth/auth.route'
import resourcesRoutes from '../app/routes/resources/resources.route'
import { listenErrorResource, listenResponseResource } from './rabbitqmListen';
import SocketIo from 'socket.io'
import http from 'http'

class Server {

    private app: express.Application;
    private port: string;
    private httpServer: http.Server; // Agrega una variable para el servidor HTTP
    private io: SocketIo.Server; // Agrega una variable para el servidor de Socket.IO

    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.dbConnection()
        this.middlewares()
        this.routes()
        this.rabbitQmListen()

         // Crea un servidor HTTP utilizando el servidor Express
         this.httpServer = http.createServer(this.app);
         // Crea un servidor de Socket.IO y únelo al servidor HTTP
         this.io = new SocketIo.Server(this.httpServer, {
            cors: {
                origin: '*'
            }
         });
    }


    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(pagination)
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp',
            createParentPath: true
        }))
    }

    async dbConnection() {
        try {
            await AppDataSource.initialize()
            console.log('Database running');

        } catch (error) {
            console.log('Error running the database');
            console.log(error);
        }
    }

    routes() {
        this.app.use(routesPath.auth, authRoutes)
        this.app.use(routesPath.resources, resourcesRoutes)
    }

    async rabbitQmListen(){
        await listenResponseResource()
        await listenErrorResource()
    }

    listen(){
        this.httpServer.listen(this.port, () => {
            console.log(`Server on Port ${ this.port }`);
        })
    }
}

export default Server;