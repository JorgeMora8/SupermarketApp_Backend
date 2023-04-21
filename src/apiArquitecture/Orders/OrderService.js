import OrderRepository from "./OrderRepository.js"
import { OrderDao } from "../../Persistence/DAO.js"
import {carService} from "../cart/cartService.js"
import createID from "../../Resorces/CreateID.js"
import Order from "./Order.js"
import { getTotalPrice } from "../../Resorces/getTotalPrice.js"
import { sendEmail } from "../../nodemailer/nodemailerConfig.js"

class OrderService{ 
    constructor(){ 
        this.repository = new OrderRepository(OrderDao)
    }

    async createOrder( clientId ,clientName, clientEmail){ 
        const car = await carService.getCarByUser(clientId)
        const productInCar = car['prods']
        const total = getTotalPrice(productInCar)

        const OrderData = { 
            id:createID(), 
            clientName:clientName, 
            clientEmail:clientEmail, 
            date: new Date(), 
            prods: productInCar, 
            total:total
        }

        //Create the order instance
        const newOrder = new Order(OrderData)

        //Save the order
        await this.repository.createOrder(newOrder)

        //Send the emails
        await sendEmail(clientEmail, productInCar, total)

        //Clear up the cart
        await carService.emptyCar(car['id'])
        

    }
}

export const orderService = new OrderService()
