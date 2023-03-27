import OrderRepository from "./OrderRepository.js"
import { OrderDao } from "../../Persistence/DAO.js"
import {carService} from "../cart/cartService.js"
import createID from "../../Resorces/CreateID.js"
import Order from "./Order.js"

class OrderService{ 
    constructor(){ 
        this.repository = new OrderRepository(OrderDao)
    }

    async createOrder( clientId ,clientName, clientEmail){ 
        const car = await carService.getCarByUser(clientId)
        const productInCar = car['products']
    
        let total = 0
        for(let p=0; p< productInCar.length; p++){ 
        total += productInCar[p]["price"]
        }

        const OrderData = { 
            id:createID(), 
            clientName:clientName, 
            clientEmail:clientEmail, 
            date: new Date(), 
            prods: productInCar, 
            total:total
        }

        const newOrder = new Order(OrderData)
        // console.log(newOrder)
        await this.repository.createOrder(newOrder)
        await carService.emptyCar(car['id'])

    }
}

export const orderService = new OrderService()
