import createID from "../Resorces/CreateID.js"
import User from "../apiArquitecture/Users/User.js"

export default function createUser(userData){ 
    // const newUser = new User({
    //                         userData.name, 
    //                         lastname, 
    //                         email, 
    //                         password, 
    //                         admin})
    const newUser = new User({ 
        name:userData.name, 
        lastname: userData.lastname, 
        email: userData.email, 
        password: userData.password, 
        admin:userData.admin,
        card:userData.card, 
        id:userData.id
    })

    return newUser
}