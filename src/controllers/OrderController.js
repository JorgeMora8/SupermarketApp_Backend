import {orderService} from "../apiArquitecture/Orders/OrderService.js"

export async function createOrder(req, res){

    const clientCart = req.body.cart
    const clientEmail = req.body.email
    const clientFirstName = req.body.firstNames
    const clientLastName = req.body.lastname
    try{ 
        await orderService.createOrder(clientCart, clientFirstName, clientEmail)
        res.status(201).json({"ORDER_STATE":"SUCCESS", "MESSAGE":"ORDER FINISHED SUCCESFULLY"})
    }   catch(error){ 
            console.log(error);
    }
}