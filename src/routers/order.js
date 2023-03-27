import {Router} from "express"
import { carService } from "../apiArquitecture/cart/cartService.js"
import {orderService} from "../apiArquitecture/Orders/OrderService.js"
import createID from "../Resorces/CreateID.js"

export const orderRouter = Router()

orderRouter.get("/", (req, res) => { 
    res.send("Muestra la orden con los platos agregados")
})

orderRouter.post("/", async (req, res) => { 
    const clientName = req.user.name
    const clientEmail = req.user.email
    const clientId = req.user.id
    
    const orderCreated = await orderService.createOrder(clientId, clientName, clientEmail)
    
})

orderRouter.delete("/", (req, res) => { 
    res.send("Elimina un plato de la orden")
})