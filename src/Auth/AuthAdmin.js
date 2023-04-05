export function authAdmin(req, res, next){ 
    if(req.user.admin == false){ 
        res.status(401).send("Only user admin can execute enter in this page")
    }

    next()
}