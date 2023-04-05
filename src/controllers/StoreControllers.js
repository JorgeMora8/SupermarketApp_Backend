import { Router } from "express";
import { Store } from "../apiArquitecture/Menu/StoreService.js";
import { updateProductValidation } from "../Resorces/ensureCorrectData.js";


export async function getProducts(req, res){ 
    try{
    const products = await Store.getAllProducts()
    res.send(products)
    }catch(err){ 
        res.status(400).json({ 
            Error:err
        })
    }
}

export async function searchProduct(req, res){ 
    const ProductNameQuery = req.query.name
    const ProductPriceLower = req.query.price
    const queryCleaned = ProductNameQuery.replace("-", " ")
    const products = await Store.getLowerPrice(ProductPriceLower)
    res.send(products)
}

export async function getByCategory(req, res) { 
    const CategoryParams = req.params.category
    const productList = await Store.getByCategory(CategoryParams)
    res.send(productList)
}

export async function addProduct(req, res) { 
        try{ 
        await Store.save(req.body)
        res.status(201).json({Success:"The product was added succesfully... "})
        }catch(error){ 
            res.status(400).json({Something_happens:`${error}`})
        }
}

export async function updateProduct(req, res) { 
    try{
    const ProductId = req.params.id
    const newProductInfo = req.body
    await updateProductValidation(newProductInfo)
    const product = await Store.updateProduct(ProductId, newProductInfo)
    res.status(201).json({ 
        Success:"Product updated", 
        product
    })
    }catch(error){ 
        res.status(404).send(error)
    }
}

export async function deleteProduct(req, res){ 
    try{
    await Store.delete(req.params.id)
    res.status(204).json({Success:`The product #${req.params.id} was deleted succesfully`})
    }catch(error){ 
    res.status(400).json({Something_happens:`${error}`})
    }
}


export async function getProductById(req, res){ 
try{
    const product = await Store.getById(req.params.id)
    res.send(product)
}catch(err){ 
    res.status(404).json({Error:"Product dont found"})
}
}