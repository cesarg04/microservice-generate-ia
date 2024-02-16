import jwt from 'jsonwebtoken'
import { ENVIRONMENT } from '../constants/env/env.const'

export const generate_jwt  = (uid: string) => {

    return new Promise((resolve, reject) => {
        const payload = { uid }
        jwt.sign(payload, ENVIRONMENT.jwtSecret, {
            // expiresIn: '1h'
        }, (err, token) => {
            
            if (err) {
                console.log(err);
                reject( 'Generate the token is dificult' )
            }else{
                resolve(token)
            }
        })

    })


}