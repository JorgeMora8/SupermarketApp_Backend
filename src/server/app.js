import express from "express"
import {StoreRouter} from "../routers/store.js"
import {orderRouter} from "../routers/order.js"
import {userRouter} from "../routers/user.js"
import {reviewRouter} from "../routers/review.js"
import { AuthRouter } from "../routers/auth.js"
import { AuthUser } from "../Auth/AuthMiddleware.js"
import { CarRouter } from "../routers/car.js"
import { Homepage } from "../controllers/homepage.js"
import { pageNotFoundDELETE, pageNotFoundGET, pageNotFoundPOST, pageNotFoundPUT } from "../controllers/PageNotFound.js"


export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(express.static("./public"))
app.set("view engine", "ejs")
app.set("views", "./views")

app.use("/api/car",AuthUser, CarRouter)
app.use("/api/user",AuthUser ,userRouter)
app.use("/api/auth", AuthRouter)
app.use("/api/products" , AuthUser, StoreRouter)
app.use("/api/order", AuthUser ,orderRouter)
app.use("/api/reviews/",AuthUser ,reviewRouter)



app.get("/", Homepage)

app.get("*", pageNotFoundGET)
app.post("*", pageNotFoundPOST)
app.put("*", pageNotFoundPUT)
app.delete("*", pageNotFoundDELETE)
