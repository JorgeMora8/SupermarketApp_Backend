export function Homepage(req, res){ 
        res.status(200).json({ 
            Status:"Success", 
            Products:"/api/products", 
            Reviews:"/api/reviews", 
            User:"/api/user", 
            Authentication:"/api/auth"
        })
    }