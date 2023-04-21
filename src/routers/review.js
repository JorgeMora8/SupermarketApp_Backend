import { Router } from "express";
import { addReview, getReviewById, getReviews, updateReview } from "../controllers/ReviewController.js";
import { deleteProduct } from "../controllers/StoreControllers.js";

export const reviewRouter = Router()

reviewRouter.get("/", await getReviews)
reviewRouter.post("/", await addReview)
