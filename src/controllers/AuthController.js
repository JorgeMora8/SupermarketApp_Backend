import {userService} from "../apiArquitecture/Users/UserService.js";
import createToken from "../Auth/token.js";
import { loginValidation } from "../Resorces/searchUser.js";



export function renderLoginPage(req, res){ 
    res.render("login")
}

export function renderRegisterPage(req, res){ 
    res.render("register")
}

//Action
export async function registerUser(req, res){ 
    try{
        let userData = req.body;
        //Needs to have a validations 
        userData['admin'] = false;
        const token = await userService.saveUser(userData)
        res.cookie("token", token)
        res.redirect("/api/products")
    }catch(error){ 
       res.render("errorPage", {message:error.message})
    } 
}


//Action
export async function loginUser(req, res){ 
    try {
        const user = await loginValidation(req.body)
        const token = await createToken(user.email)
        res.cookie("token", token)
        res.redirect("/api/products")
    } catch (error) {
        res.render("errorPage", {message:error.message})
    }
}