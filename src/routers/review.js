import { Router } from "express";
import {AuthUser} from "../Auth/AuthMiddleware.js"
import { reviewService } from "../apiArquitecture/Reviews/ReviewService.js";
import reviewValidations from "../apiArquitecture/Reviews/ReviewValidations.js";


export const reviewRouter = Router()

reviewRouter.get("/",AuthUser, async (req, res) => { 
    const reviewList = await reviewService.getReviews()
    res.send(reviewList)
})

reviewRouter.get("/:id", async (req, res) => { 
    const review = await reviewService.getReviewById(req.params.id)
    res.send(review)
})

// reviewRouter.get("/search/", (req, res) => { 
//     res.send("Obtiene una review por su query")
// })

reviewRouter.post("/", async (req, res) => { 
    const reviewData = req.body
    reviewValidations(req.body)
    await reviewService.saveReview(reviewData, req.user.email)
    res.status(201).json({Success:"Review created"})
})

reviewRouter.put("/:id", async (req, res) => { 
    try{
    const reviewUpdated = await reviewService.updateReview(req.params.id, req.body, req.user.email)
    res.status(201).json({Review_Updated:reviewUpdated})
    }catch(error){ 
        res.status(400).json({Something_happens:`${error}`})
    }
})

reviewRouter.delete("/:id", async (req, res) => { 
    try{
    await reviewService.deleteReview(req.params.id, req.user.email)
    res.status(204).send(`Review with ID #${req.params.id} was deleted`)
    }catch(error){ 
       res.status(400).json({Something_happens:`${error}`})
    }
})

