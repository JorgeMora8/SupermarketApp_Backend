import {Router} from "express"
import { createOrder, 
         getOrders } from "../controllers/OrderController.js"
import { carService } from "../apiArquitecture/cart/cartService.js"


export const orderRouter = Router()

// orderRouter.get("/", await getOrders)
orderRouter.get("/", async (req, res) => { 
    const cart = await carService.getCarByUser(req.user.id)
    const productsInCart = cart['prods']
    let total = 0;
    for(let i=0; i<productsInCart.length; i++){ 
        total += productsInCart[i].price
    }
    res.render("infoOrder", {products: productsInCart, total:total.toFixed(2), user:req.user})
})
orderRouter.post("/", await createOrder)
