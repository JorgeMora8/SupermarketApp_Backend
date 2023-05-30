import {Router} from "express"
import { createOrder } from "../controllers/OrderController.js"

export const orderRouter = Router()

orderRouter.post("/", await createOrder)
