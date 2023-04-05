import { carService } from "../apiArquitecture/cart/cartService.js";
import {Store} from "../apiArquitecture/Menu/StoreService.js"


export async function getCart(req, res){ 
    try{
        const userId = req.user.id
        const car = await carService.getCarByUser(userId)
        res.send(car)
    }catch(error){
        res.status(400).json({
            Error:error
        })
    }
}

export async function addProductInCart(req, res){ 
    try{
    const product = await Store.getById(req.params.id)
    await carService.addProduct(req.user.id, product)
    }catch(error){ 
        res.status(400).json({ 
            Error: erro
        })
    }
}

export async function deleteCar(req, res){ 
    try{
    await carService.deleteProduct(req.user.id, req.params.id)
    res.status(204).json({"Success":"Product deleted"})
    }catch(error){ 
        res.status(400).json({
            Error:error
        })
    }
}