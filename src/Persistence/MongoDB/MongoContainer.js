import mongoose from "mongoose"


function connectToDB(){ 
    try{
        mongoose.connect("mongodb+srv://jorgemora:yu1hyObsMeXUeFWf@clustermain.fmym9iy.mongodb.net/?retryWrites=true&w=majority")
     }catch(err){ 
        console.log(err)
        setTimeout(connectToDB, 4000)
     }
}

connectToDB()

export default class Container{ 
    constructor(schema) {
        this.schema = schema
    }

    async save(data) {         
        await this.schema.create(data)
    }

    async getAll() { 
        return this.schema.find({}, {_id:0, __v:0}).lean()
    }

    async getById(id) { 
        const item = await this.schema.findOne({id:id}, {_id:0, __v:0})
        return item    
    }

    async getByAuthor(author){ 
        return this.schema.find({author:author}, {_id:0, __v:0}).lean()
    }

    async getByEmail(email) { 
        const userFound = await this.schema.findOne({email:email}, {_id:0, __v:0})
        return userFound
    }

    async getByName(productName){
        const products = await this.schema.findOne({name: productName}, {_id:0, __v:0})
        return products
    }

    async getByCategory(category){ 
        const products = await this.schema.find({category:category}, {_id:0, __v:0})
        return products
    }

    async deleteById(id){ 
        return await this.schema.deleteOne({id: id})
    }

    async deleteAll(){ 
        await this.schema.deleteMany()
    }

    async updateProduct(id, productInfo){ 
        const {name, price, units, category} = productInfo
        const productUpdated = await this.schema.updateOne({id:id}, {$set:{name, price, units, category}})
        return productUpdated
    }

    async update(id, data) { 
        const {text, plate} = data
        await this.schema.updateOne({id:id}, {$set:{text, plate}})
    }

    async searchLessThan(quanity){ 
        const products = await this.schema.find({price: {$lt: quanity}})
        return products
    }

    async chargeCard(userId, quanity){ 
        await this.schema.updateOne({id:userId}, {$set:{card:quanity}})
    }

    async addProductInCar(productId){ 
        const product = await this.getById(productId)
        console.log(product)
        // await this.schema.updateOne({id:carId}, {$push:{prods:product}})
    }

    async getCarByUser(id){ 
        return await this.schema.findOne({clientId:id}, {_id:0, __v:0})
    }

    async saveInCar(carId, {id, name, category, price, units, image}){
        await this.schema.updateOne({clientId:carId}, {$push:{prods:{
                                                                id:id, 
                                                                name:name, 
                                                                category: category, 
                                                                price:price, 
                                                                units:units, 
                                                                image:image
        }}})
        // console.log(name)
    }

    async deleteProductInCar(carId, productId){ 
        await this.schema.updateOne({clientId:carId }, {$pull:{prods:{id:productId}}})
    }

    async deleteAllProducts(carId) { 
        await this.schema.updateOne({id:carId}, {prods:[]})
    }
}