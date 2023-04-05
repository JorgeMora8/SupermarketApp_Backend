import createUser from "../../Utils/CreateUser.js"
import createToken from "../../Auth/token.js"
import UserRepository from "./UserRepository.js"
import { UserDao } from "../../Persistence/DAO.js"
import { carService } from "../cart/cartService.js"


import {uniqueUser, userValidations} from "./UserValidations.js"
import createID from "../../Resorces/CreateID.js"


export default class UserService { 
    constructor(){ 
        this.repository = new UserRepository(UserDao)
    }

    async saveUser(user){
        await userValidations(user)
        await uniqueUser(user)
        // await this.repository.checkIfUserExits(user.email)
        // const userCreated = await createUser(user)
        // await this.repository.save(userCreated)
        // await carService.createCar(userCreated.asDTO()['id'])
        // const token = await createToken(user.email)

        // return token

}

    async getByEmail(userEmail){ 
        const user = await this.repository.getByEmail(userEmail)
        return user.asDTO()

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