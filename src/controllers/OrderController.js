import {orderService} from "../apiArquitecture/Orders/OrderService.js"
import { loggerError } from "../loggers/loggerConfig.js";

export async function getOrders(req, res){ 
    try{ 
        const cart = await carService.getCarByUser(req.user.id)
        const productsInCart = cart['prods']
        let total = 0;
        for(let i=0; i<productsInCart.length; i++){ 
        total += productsInCart[i].price
        }
        res.render("infoOrder", {products: productsInCart, total:total.toFixed(2), user:req.user})
}   catch(error){ }
        loggerError.error(`PRODUCT ORDER ERROR: ${error.message}`)
}

// export async function createOrder(req, res){
//     try{ 
//     const clientName = req.user.name
//     const clientEmail = req.user.email
//     const clientId = req.user.id  
//     await orderService.createOrder(clientId, clientName, clientEmail)
//     res.render("orderFinished")
//     }catch(error){ 
//         res.render("errorPage", {message:error.message})
//     }

// }

export async function createOrder(req, res){
    try{
        const cart = await carService.getCarByUser(req.user.id)
        const productsInCart = cart['prods']
        let total = 0;
        for(let i=0; i<productsInCart.length; i++){ 
            total += productsInCart[i].price
        }
        res.render("infoOrder", {products: productsInCart, total:total.toFixed(2), user:req.user})
}   catch(error){ 
        loggerError.error(`PRODUCT ORDER ERROR: ${error.message}`)
}

}