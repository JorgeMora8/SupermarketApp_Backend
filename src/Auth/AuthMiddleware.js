import jwt from "jsonwebtoken"
import {SECRET_WORD} from '../config/Env.js'
import { userService } from "../apiArquitecture/Users/UserService.js"


export async function AuthUser(req, res, next) { 
    const token = req.get("Authorization")
    if (!token) res.status(404).json({Error: "Log in or signup, your unathenticated"})
    else { 
        try { 
            const data = await jwt.verify(token, SECRET_WORD)
            const user = await  userService.getByEmail(data.email)
            req.user = user
            next()
        }catch(error){
            console.log(error)
        }
    }
}