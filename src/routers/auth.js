import { Router } from "express";
import {userService} from "../apiArquitecture/Users/UserService.js";
import createToken from "../Auth/token.js";
export const userRouter = Router()



export const AuthRouter = Router()



AuthRouter.post("/register", async (req, res) => { 
    // console.log(req.body)
    try{
        const token = await userService.saveUser(req.body)
        res.set("token",token)
    }catch(error){ 
        res.status(400).send(`There was an error ${error}`)
    }

})

AuthRouter.post("/login", async(req, res) => { 
    try {
        const userData = req.body
        const userSearched = await userService.getByEmail(userData.email)
        const token = await createToken(userData.email)
        res.status(200).json({"ACCESS-TOKEN": `bearer ${token}`})  
    } catch (error) {
       res.status(400).send( {Something_happens:`${error}`})
    }
})