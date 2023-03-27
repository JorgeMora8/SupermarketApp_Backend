import express from "express"
import {StoreRouter} from "../routers/store.js"
import {orderRouter} from "../routers/order.js"
import {userRouter} from "../routers/user.js"
import {reviewRouter} from "../routers/review.js"
import { AuthRouter } from "../routers/auth.js"
import { AuthUser } from "../Auth/AuthMiddleware.js"
import { CarRouter } from "../routers/car.js"



export const app = express()


//Activating functions and attributes
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(express.static("./public"))

app.set("view engine", "ejs")
app.set("views", "./views")




// app.get("/", (req, res) => { 
//     res.render("index", {titulo:"Titulo dinamico"})
// })

app.use("/car", CarRouter)
app.use("/user",AuthUser ,userRouter)
app.use("/auth", AuthRouter)
app.use("/" ,StoreRouter)
app.use("/order", AuthUser ,orderRouter)
app.use("/reviews",AuthUser ,reviewRouter)




