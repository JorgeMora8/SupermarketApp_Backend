import { Router } from "express";
import { reviewService } from "../apiArquitecture/Reviews/ReviewService.js";
import { userService } from "../apiArquitecture/Users/UserService.js";

export const userRouter = Router()


userRouter.get("/",(req, res) => { 
    res.status(200).json({User_info: req.user})
})


userRouter.get("/reviews",async (req, res) => { 
    const reviewList = await reviewService.getReviewByAuthor(req.user.email)
    if(reviewList.length == 0) { 
        res.status(200).json({User_reviews:"This user has no reviews uploaded"})
    }else{
    res.send(reviewList)
    }
})

userRouter.get("/orders", (req, res) => { 
    res.send("Muestra las ordenes generadas por el usuario")
})

userRouter.post("/card", async(req, res) => { 
    const cardID = req.body.card_code
    const cardPassword = req.body.card_password
    await userService.chargeCard(req.user.id, req.body.cant)
})