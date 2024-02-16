import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { AppDataSource } from '../database/database-connection';
import { routesPath } from '../app/constants/routes/routes.const';
import {pagination} from 'typeorm-pagination'
import authRoutes from '../app/routes/auth/auth.route'
import resourcesRoutes from '../app/routes/resources/resources.route'
import { connectToRabbitMQ } from './rabbitqmConnection';
import { listenErrorResource, listenResponseResource } from './rabbitqmListen';

class Server {

    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.dbConnection()
        this.middlewares()
        this.routes()
        this.rabbitQmListen()
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
        this.app.listen(this.port, () => {
            console.log(`Server on Port ${ this.port }`);
        })
    }
}

export default Server;