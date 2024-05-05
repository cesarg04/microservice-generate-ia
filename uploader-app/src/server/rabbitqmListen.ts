import { ResourcesQueues } from "../app/constants/queues/resources-queues.const"
import { Resource, Status } from "../app/entities/report.entity"
import { IResponseSuccess } from "../app/types"
import { AppDataSource } from "../database/database-connection"
import { connectToRabbitMQ } from "./rabbitqmConnection"
import WebSocketServer from "./socketService"


const resourcesServices = AppDataSource.getRepository(Resource)


export const listenResponseResource = async() => {
    const { channel } = await connectToRabbitMQ()
    channel.assertQueue(ResourcesQueues.SUCCESS, { durable: false })
    channel.consume(ResourcesQueues.SUCCESS, async(msg) => {
        if (msg !== null) {
            try {
                const content = JSON.parse(msg.content.toString()) as IResponseSuccess;
                const query = resourcesServices.createQueryBuilder()
                query
                .update(Resource)
                .set({ url: content.url, status: Status.SUCCESS })
                .where("id = :id", { id: content.id })
                .execute()
            } catch (error) {
                console.log(error);
            }
        }

    })

}

export const listenErrorResource = async() => {
    const { channel } = await connectToRabbitMQ()
    channel.assertQueue(ResourcesQueues.ERROR, { durable: false })
    channel.consume(ResourcesQueues.ERROR, async(msg) => {
        if (msg !== null) {
            try {
                const content = JSON.parse(msg.content.toString()) as IResponseSuccess;
                const query = resourcesServices.createQueryBuilder()
                query
                .update(Resource)
                .set({ status: Status.FAIL })
                .where("id = :id", { id: content.id })
                .execute()
            } catch (error) {
                console.log(error);
            }
        }
    })

}