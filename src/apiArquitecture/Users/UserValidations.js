import { userService } from "./UserService.js"

export function userValidations(user){ 
    if (!user.name) throw new Error("Name is missing")
    if (!user.lastname) throw new Error("lastname is missing")
    if (!user.email) throw new Error("email is missing")
    if (!user.password) throw new Error("password is missing")
    if (user.admin == null || undefined) throw new Error("Admin is missing")
}

export async function uniqueUser(user) { 
    const userSearch = await userService.getByEmail(user.email)
    if (userSearch == null) { 
        return false
    }

    return true
}