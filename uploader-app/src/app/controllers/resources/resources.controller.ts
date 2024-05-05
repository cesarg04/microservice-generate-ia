import { AppDataSource } from "../../../database/database-connection";
import { Resource } from "../../entities/report.entity";
import { Request, Response } from 'express'
import { RequestCustom } from "../../middlewares/validate-jwt.middleware";
import { ICreateResource } from "../../types/resources/create-resource.type";
import { ResourcesQueues } from "../../constants/queues/resources-queues.const";
import { connectToRabbitMQ } from "../../../server/rabbitqmConnection";


const resourcesService = AppDataSource.getRepository(Resource);


export const getResources = async (req: RequestCustom, res: Response) => {
    const resources = await resourcesService.find({ 
        where: {  user: req.user}, 
        order: { createdAt: 'DESC' }
    })
    return res.json(resources)
}

export const createResource = async (req: RequestCustom, res: Response) => {
    const { title } = req.body as ICreateResource;
    try {
        const resource = resourcesService.create({ title, user: req.user })
        await resourcesService.save(resource)
        const { channel } = await connectToRabbitMQ()
        channel.sendToQueue(ResourcesQueues.SEND, Buffer.from(JSON.stringify(resource)))
        return res.json({
            msg: 'Resource created successfully',
            resource
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send('Server error')
    }

}


export const getResourceById = async (req: RequestCustom, res: Response) => {
    const { id } = req.params as { id: string };
    const resource = await resourcesService.findOneBy({ id })
    if (!resource) {
        res.status(404).json({
            msg: 'Resource not found'
        })
    }
    return res.json(resource)
}


