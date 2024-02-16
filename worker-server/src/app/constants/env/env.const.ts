
import dotenv from 'dotenv'
dotenv.config()

export const ENVIRONMENT: IEnvironment = {
    port: process.env.PORT,
    cloudinaryApiKey: process.env.CLOUD_API_KEY,
    cloudinaryApiSecret: process.env.CLOUD_API_SECRET,
    cloudinaryName: process.env.CLOUD_NAME,
    amqpUrl: process.env.AMQP_URL,
    openAiKey: process.env.OPENAI_API_KEY
};



interface IEnvironment {
    port: string;
    cloudinaryApiKey: string;
    cloudinaryApiSecret: string;
    cloudinaryName: string;
    amqpUrl: string;
    openAiKey: string;
}
