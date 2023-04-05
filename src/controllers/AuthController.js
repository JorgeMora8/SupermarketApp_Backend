import { Router } from "express";
import {userService} from "../apiArquitecture/Users/UserService.js";
import createToken from "../Auth/token.js";
import { loginValidation } from "../Resorces/searchUser.js";


export async function registerUser(req, res){ 
    try{
        const token = await userService.saveUser(req.body)
        res.status(201).json({Access_token:`Bearer ${token}`})
    }catch(error){ 
        res.status(400).send(`There was an error ${error}`)
    } 
}

export async function loginUser(req, res){ 
    try {
        const user = await loginValidation(req.body)
        const token = await createToken(user.email)
        res.status(200).json({"Access token": `Bearer ${token}`})
    } catch (error) {
       res.status(400).send( {Something_happens:`${error}`})
    }
}