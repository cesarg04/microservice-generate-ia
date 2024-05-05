import { DataSource } from "typeorm";
import { ENVIRONMENT } from "../app/constants/env/env.const";
import { Resource } from "../app/entities/report.entity";
import { User } from "../app/entities/auth.entity";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: ENVIRONMENT.dbHost,
    port: +ENVIRONMENT.dbPort,
    username: ENVIRONMENT.dbUser,
    password: ENVIRONMENT.dbPassword,
    database: ENVIRONMENT.database,
    entities: [
        Resource,
        User
    ],
    synchronize: false,
    logging: ['error'],
    url: ENVIRONMENT.dbUrl,
});