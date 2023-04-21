import { reviewService } from "../apiArquitecture/Reviews/ReviewService.js";
import reviewValidations from "../apiArquitecture/Reviews/ReviewValidations.js";


export async function getReviews(req, res){ 
    try{
        const reviewList = await reviewService.getReviews()
        res.render("reviewList", {reviewList: reviewList}); 
    }   catch(error){ 

    }
}

export async function getReviewById(req, res){
    try{ 
        const review = await reviewService.getReviewById(req.params.id)
        res.send(review)
    }   catch(error){ 

    }
}

export async function addReview(req, res){ 
    try{ 
        const reviewData = req.body
        reviewValidations(req.body)
        await reviewService.saveReview(reviewData, req.user.email)
        res.redirect("/api/reviews")
    }   catch(error){ 

    }
}


export async function updateReview(req, res) { 
    try{
        const reviewUpdated = await reviewService.updateReview(req.params.id, req.body, req.user.email)
        res.redirect("/api/reviews/")
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}

export async function deleteProduct(req, res) { 
    try{
        await reviewService.deleteReview(req.params.id, req.user.email)
        res.status(204).send(`Review with ID #${req.params.id} was deleted`)
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}