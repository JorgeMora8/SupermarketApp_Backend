import { Router } from "express";
import { reviewService } from "../apiArquitecture/Reviews/ReviewService.js";
import { userService } from "../apiArquitecture/Users/UserService.js";
import { chargeCard, getReviewsFromUser, infoUser } from "../controllers/UserController.js";

export const userRouter = Router()

userRouter.get("/",await infoUser)
userRouter.get("/reviews", await getReviewsFromUser)
userRouter.post("/card", await chargeCard)

userRouter.get("/logout", (req, res)=> { 
    res.clearCookie("token")
    res.render("logoutPage")
})