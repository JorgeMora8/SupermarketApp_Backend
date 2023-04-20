import { carService } from "../apiArquitecture/cart/cartService.js";
import {Store} from "../apiArquitecture/Product/StoreService.js"


export async function getCart(req, res){ 
    try{
        const userId = req.user.id
        const car = await carService.getCarByUser(userId)
        // res.send(car)
        // console.log(car)
        res.render("cartView", {"cart":car['prods']})
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}

export async function addProductInCart(req, res){ 
    try{
    const product = await Store.getById(req.params.id)
    await carService.addProduct(req.user.id, product)
    res.status(201).json({ 
        State:"Success", 
        detail:"Product added succesfully"
    })
    }catch(error){ 
        res.status(400).json({ 
            Error: error
        })
    }
}

export async function deleteCart(req, res){ 
    try{
    await carService.deleteProduct(req.user.id, req.params.id)
    res.status(204).json({"Success":"Product deleted"})
    }catch(error){ 
        res.status(400).json({
            Error:error
        })
    }
}