import path from "path"
import { uploadResource } from "../config/cloudinary.config";
import fs from 'fs';

export const uploadFileToCloud = async (id: string, name: string) => {
    const route = path.join(__dirname, `../../../temp/${ name }.pdf`)
    const { secure_url } = await uploadResource(route, id)

    if (fs.existsSync(route)) {
        fs.unlink(route, (err) => {
            if (err) {
                console.error(err);
                return;
            };
        });
    }

    return {
        url: secure_url
    }
}