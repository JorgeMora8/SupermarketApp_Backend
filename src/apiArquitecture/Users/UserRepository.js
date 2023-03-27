import User from "./User.js"


export default class UserRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async save(user){ 
        await this.dao.save(user.asDTO())
    }

    async getById(userId){ 
        const userInfo = await this.dao.getById(userId)
        const user = new User(userInfo)
        return user
    }

    async getByEmail(userEmail){
        const userInfo = await this.dao.getByEmail(userEmail)
        const user = new User(userInfo)
        return user      
        }

    async chargeCard(userId, quanity){ 
        // console.log(userId)
        // console.log(quanity)
        await this.dao.chargeCard(userId, quanity)
    }
    }
