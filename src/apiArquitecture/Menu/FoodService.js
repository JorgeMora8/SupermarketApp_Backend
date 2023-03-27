
import Product from "./Product.js"
import { ProductDao } from "../../Persistence/DAO.js"
import FoodRepository from "./FoodRepository.js"
import {productValidation, ensureUniqueProduct} from "./FoodValidation.js"

export class FoodService { 
    constructor(){ 
        this.repository = new FoodRepository(ProductDao)
    }

    async getAllProducts(){ 
        const productList = await this.repository.getAll()
        return productList.map(product => product.asDTO())
    }

    async save(productData){ 
        // await ensureUniqueProduct(productData)
        productValidation(productData)
        const newPlate = new Product(productData)
        await this.repository.save(newPlate)
    }

    async getByName(productName){ 
        const products = await this.repository.getByName(productName)
        return products.asDTO()
    }

    async getByCategory(category){ 
        const products = await this.repository.getByCategory(category)
        return products.map(product => product.asDTO())
    }

    async updateProduct(productId, productData) { 
        // console.log(productData)
        await this.repository.updateProduct(productId, productData)
    }

    async getLowerPrice(quanity){ 
        const products = await this.repository.getLowerPrice(quanity)
        return products.map(product => product.asDTO())
    }

    async getById(productId){ 
        const product = await this.repository.getById(productId)
        return product.asDTO()
    }

    async update(){ 

    }

    async delete(productId){ 
        await this.repository.deleteProduct(productId)
    }
}

export const StoreService = new FoodService()