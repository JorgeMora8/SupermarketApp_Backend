import { Router } from "express";
import { carService } from "../apiArquitecture/cart/cartService.js";
import {StoreService} from "../apiArquitecture/Menu/FoodService.js"

export const CarRouter = Router()

CarRouter.get("/", async (req, res) => { 
    const userId = req.user.id
    const car = await carService.getCarByUser(userId)
    res.send(car)
    res.set("messgae", "hello world")
    res.render("cart")
})

CarRouter.get("/:id", (req, res) => { 
    res.send("Here itll show one product in the car")
})

CarRouter.post("/:id", async (req, res) => { 
    const product = await StoreService.getById(req.params.id)
    await carService.addProduct(req.user.id, product)
})

CarRouter.delete("/:id", async (req, res) => { 
    await carService.deleteProduct(req.user.id, req.params.id)
})