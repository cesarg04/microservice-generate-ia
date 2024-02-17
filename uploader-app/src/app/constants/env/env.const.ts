import dotenv from 'dotenv'
dotenv.config()

export const ENVIRONMENT: IEnvironment = {
    port: process.env.PORT,
    database: process.env.DB_DATABASE,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbUrl: process.env.DB_URL,
    amqpUrl: process.env.AMQP_URL,
    jwtSecret: process.env.JWT_SECRET
};

export interface IEnvironment {
    port: string;
    database: string;
    dbHost: string;
    dbPassword: string;
    dbPort: string;
    dbUser: string;
    dbUrl: string;
    amqpUrl: string;
    jwtSecret: string
}