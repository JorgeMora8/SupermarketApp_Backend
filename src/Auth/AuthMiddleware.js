import jwt from "jsonwebtoken"
import {SECRET_WORD} from '../config/Env.js'
import { userService } from "../apiArquitecture/Users/UserService.js"


export async function AuthUser(req, res, next) { 
    if(!req.headers.authorization) {res.status(404).json({state:"unauthenticated , please register or login", 
                                                        error:"Token missing"})
        return}
    const token = req.headers.authorization.split(' ')[1];
    if (!token) res.status(404).json({Error: "Log in or signup, your unathenticated"})
    else { 
        try { 
            const data = await jwt.verify(token, SECRET_WORD)
            const user = await  userService.getByEmail(data.email)
            req.user = user
            next()
        }catch(error){
            res.status(400).json({
                Error:"Unauthenticaed", 
                Details:error
            })
        }
    
    }
}