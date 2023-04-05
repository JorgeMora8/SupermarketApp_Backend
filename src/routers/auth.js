import { Router } from "express";
import { loginUser, registerUser } from "../controllers/AuthController.js";
export const userRouter = Router()

export const AuthRouter = Router()

AuthRouter.post("/register", await registerUser)
AuthRouter.post("/login", await loginUser)