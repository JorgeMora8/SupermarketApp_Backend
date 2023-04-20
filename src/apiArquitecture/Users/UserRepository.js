import User from "./User.js"


export default class UserRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async save(user){ 
        await this.dao.save(user.asDTO())
    }

    async getAllUser(){ 
       //Create a function to bring all users and do a foreach
       const users = await this.dao.getAll()
       return users.map(user => new User(user))
    }

    async getById(userId){ 
        const userInfo = await this.dao.getById(userId)
        const user = new User(userInfo)
        return user
    }

    async getByEmail(userEmail){
        const userInfo = await this.dao.getByEmail(userEmail)
        if(userInfo == null) throw new Error("User not found")
        
        const user = new User(userInfo)
        return user      
        }

    async chargeCard(userId, quanity){ 
        await this.dao.chargeCard(userId, quanity)
    }

    async checkIfUserExits(userEmail){ 
        const userInfo = await this.dao.getByEmail(userEmail)
        if(userInfo) throw new Error("This user is already in user, please select other")
    }
    }
