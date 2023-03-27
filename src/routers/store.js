import { Router } from "express";
import { StoreService } from "../apiArquitecture/Menu/FoodService.js";


export const StoreRouter = Router()


StoreRouter.get("/", async (req, res) => { 
    const products = await StoreService.getAllProducts()
    console.log(products)
    res.render("index", {products: products})
})

StoreRouter.get("/search", async (req, res) => { 
    // const ProductNameQuery = req.query.name
    // const ProductPriceLower = req.query.price
    // const queryCleaned = ProductNameQuery.replace("-", " ")
    // // const products = await StoreService.getByName(queryCleaned)
    // const products = await StoreService.getLowerPrice(ProductPriceLower)
    // res.send(products)
    // console.log("La peticion llego")
})


StoreRouter.get("/products/:category", async (req, res) => { 
    const CategoryParams = req.params.category
    // console.log(CategoryParams)
    const productList = await StoreService.getByCategory(CategoryParams)
    res.send(productList)
})


StoreRouter.get("/ondemand", async (req, res) => { 
    res.send("Muestra los productos mas en demanda")
})


StoreRouter.post("/", async (req, res) => {
    try{ 
    await StoreService.save(req.body)
    res.status(201).json({Success:"The product was added succesfully... "})
    }catch(error){ 
        res.status(400).json({Something_happens:`${error}`})
    }
})

StoreRouter.put("/:id", async (req, res) => { 
    const ProductId = req.params.id
    const newProductInfo = req.body
    // console.log(newProductInfo)
    await StoreService.updateProduct(ProductId, newProductInfo)
    res.send("Product updated succesfully")
})


StoreRouter.delete("/:id", async (req, res) => { 
    try{
    await StoreService.delete(req.params.id)
    res.status(204).json({Success:`The product #${req.params.id} was deleted succesfully`})
    }catch(error){ 
    res.status(400).json({Something_happens:`${error}`})
    }
})