import { Router } from "express";
import {infoUser, logoutUser } from "../controllers/UserController.js";

export const userRouter = Router()

userRouter.get("/",await infoUser)

userRouter.get("/logout", await logoutUser)