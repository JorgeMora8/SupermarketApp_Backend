import {orderService} from "../apiArquitecture/Orders/OrderService.js"

export async function getOrders(req, res){ 
    res.send("Muestra de ordenes")
}

export async function createOrder(req, res){
    try{ 
    const clientName = req.user.name
    const clientEmail = req.user.email
    const clientId = req.user.id  
    await orderService.createOrder(clientId, clientName, clientEmail)
    }catch(error){ 
        res.status(400).json({Error:error})
    }
}