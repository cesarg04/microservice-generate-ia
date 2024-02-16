import { v2 as cloudinary } from "cloudinary";
import { ENVIRONMENT } from "../constants/env/env.const";

import dotenv from 'dotenv'
dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    
});


export const uploadResource = async (file_path: string, id_resource: string) => {
    return await cloudinary.uploader.upload(file_path, {
        resource_type: 'raw',
        folder: `resources/${ id_resource }`,
        use_filename: true
    })
}


export const delete_image = async( public_id: string ) => {
    return await cloudinary.uploader.destroy(public_id)
}
