import dotenv from 'dotenv'
import { connectToRabbitMQ } from './app/config/rabbitqm.config'
import { ResourcesQueues } from "./app/constants/queues/resources-queues.const";
import { IPayloadResource } from "./app/types/payload-resource.type";
import { generateInfoIa } from "./app/helpers/generate-info-ia.helper";
import { generatePdf } from "./app/helpers/generate-pdf.helper";
import { uploadFileToCloud } from "./app/helpers/upload-file-to-server";

dotenv.config()


async function main() {

  const { channel } = await connectToRabbitMQ()

  channel.assertQueue(ResourcesQueues.SEND, {
    durable: true
  })

  channel.consume(ResourcesQueues.SEND, async (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString()) as IPayloadResource
      try {
        const { iaContent } = await generateInfoIa(content.title)
        await generatePdf(content.title, iaContent, content.id)
        const { url } = await uploadFileToCloud(content.id, content.title)
        channel.sendToQueue(ResourcesQueues.SUCCESS, Buffer.from(JSON.stringify({ id: content.id, url: url })))
        channel.ack(msg)
        
      } catch (error) {
        console.log(error);
        channel.sendToQueue(ResourcesQueues.ERROR, Buffer.from(JSON.stringify({ id: content.id })))
      }
    }
  })


}

main();