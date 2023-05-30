import OrderRepository from "./OrderRepository.js"
import { OrderDao } from "../../Persistence/DAO.js"
import createID from "../../Resorces/CreateID.js"
import Order from "./Order.js"
import { getTotalPrice } from "../../Resorces/getTotalPrice.js"
import { sendEmail } from "../../nodemailer/nodemailerConfig.js"

class OrderService{ 
    constructor(){ 
        this.repository = new OrderRepository(OrderDao)
    }

    async createOrder( clientCart ,clientName, clientEmail){ 
        // const car = await cartService.getCarByUser(clientId)
        const total = getTotalPrice(clientCart)

        const OrderData = { 
            id:createID(), 
            clientName:clientName, 
            clientEmail:clientEmail, 
            date: new Date(), 
            products: clientCart, 
            total:total
        }

        const newOrder = new Order(OrderData)

        await sendEmail(clientEmail, clientCart, total)
    }
}

export const orderService = new OrderService()
