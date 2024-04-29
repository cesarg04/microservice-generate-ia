import { Request, Response } from "express";
import { AppDataSource } from "../../../database/database-connection";
import { User } from "../../entities/auth.entity";
import { ILoginUser, IRegisterUser } from "../../types";
import bcrypt from 'bcrypt';
import { generate_jwt } from "../../helpers/generate-jwt.helper";
import { RequestCustom } from "../../middlewares/validate-jwt.middleware";


const userService = AppDataSource.getRepository(User)

export const registerUser = async(req: Request, res: Response) => {

    const { password, ...rest } = req.body as IRegisterUser

    try {
        const oldUser = await userService.findOneBy({ email: rest.email })
        if (oldUser) {
            return res.status(400).json(`El correo electronico ${ rest.email } ya existe`)
        }
        const user = userService.create({
            ...rest,
            password: bcrypt.hashSync(password, 10)
        })
        await userService.save(user);
        const token = await generate_jwt(oldUser?.id);
        delete user.password;
        return res.json({
            msg: 'Login successfully',
            user,
            token
        })

    } catch (error) {
        return  res.status(500).send('Server error')
    }
}   

export const loginUser = async(req: Request, res: Response) => {

    const { email, password } = req.body as ILoginUser;
    try {
        
        const user = await userService.findOneBy({ email })
        if (!user) {
            return res.status(400).json(`El correo electronico ${ email } no existe`)
        }

        if(!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json('La contraseña es incorrecta')
        }

        const token = await generate_jwt(user.id);
        delete user.password;

        return res.json({
            msg: 'Login successfully',
            user,
            token
        })

    } catch (error) {
        return  res.status(500).send('Server error')
    }

}

export const getCurrentUser = async(req: RequestCustom, res: Response) => {
    const token = req.header('x-token') as string;
    const { user } = req;
    if (!user) {
        return res.status(401).json("Usuario no autenticado")
    }
    return res.status(200).json({
        token,
        user
    })

}