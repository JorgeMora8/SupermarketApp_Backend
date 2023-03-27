import createUser from "../../Utils/CreateUser.js"
import createToken from "../../Auth/token.js"
import UserRepository from "./UserRepository.js"
import { UserDao } from "../../Persistence/DAO.js"
import { carService } from "../cart/cartService.js"


import {userValidations} from "./UserValidations.js"
import createID from "../../Resorces/CreateID.js"


export default class UserService { 
    constructor(){ 
        this.repository = new UserRepository(UserDao)
    }

    async saveUser(user){ 
    console.log(user)
    await userValidations(user)
    user['card'] = 0
    user['id'] = createID()
    const userCreated = createUser(user)
    await carService.createCar(user['id'])
    await this.repository.save(userCreated)
    const token = await createToken(user.email)
   return {"ACCESS-TOKEN": `bearer ${token}`}

}

    async getByEmail(userEmail){ 
        const user = await this.repository.getByEmail(userEmail)
        return await user.asDTO()

    }
    
    async getById(userId){ 
        const user = await this.repository.getById(userId)
        return await user.asDTO()
    }

    async chargeCard(userId, quanity){ 
        // console.log(userId)
        // console.log(quanity)
        await this.repository.chargeCard(userId, quanity)
    }

    
}

export const userService = new UserService()