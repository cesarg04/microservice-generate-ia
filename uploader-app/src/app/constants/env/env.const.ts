import dotenv from 'dotenv'
dotenv.config()

export const ENVIRONMENT: IEnvironment = {
    port: process.env.PORT,
    cloudinaryApiKey: process.env.CLOUD_API_KEY,
    cloudinaryApiSecret: process.env.CLOUD_API_SECRET,
    cloudinaryName: process.env.CLOUD_NAME,
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
    cloudinaryApiKey: string;
    cloudinaryApiSecret: string;
    cloudinaryName: string;
    database: string;
    dbHost: string;
    dbPassword: string;
    dbPort: string;
    dbUser: string;
    dbUrl: string;
    amqpUrl: string;
    jwtSecret: string
}