import { Router } from "express";
import { addProductInCart, deleteCar, getCart } from "../controllers/CarController.js";

export const CarRouter = Router()

CarRouter.get("/", await getCart)
CarRouter.post("/:id", await addProductInCart)
CarRouter.delete("/:id", await deleteCar)