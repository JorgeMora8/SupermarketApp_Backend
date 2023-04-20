import jwt from "jsonwebtoken"
import {SECRET_WORD} from '../config/Env.js'
import { userService } from "../apiArquitecture/Users/UserService.js"


export async function AuthUser(req, res, next) { 
    const token = req.cookies['token']

    if(!token)  res.render("unathenticated")

    else { 
        try { 
            const data = await jwt.verify(token, SECRET_WORD)
            const user = await  userService.getByEmail(data.email)
            req.user = user
            next()
        }catch(error){
            res.render("unathenticated")

        }
    
    }
}