import createID from "../Resorces/CreateID.js"
import User from "../apiArquitecture/Users/User.js"
import { hashPassword } from "../Resorces/hashPassword.js"

export default async function createUser(userData){
    const passwordHashed = await hashPassword(userData.password)
    const newUser = new User({ 
        name:userData.name, 
        lastname: userData.lastname, 
        email: userData.email, 
        password: passwordHashed, 
        admin:userData.admin,
        card:userData.card, 
        id:userData.id
    })

    return newUser
}