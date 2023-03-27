import Cart from "./cart.js"

export default class CartRepository{ 
    constructor(dao){ 
        this.dao = dao
    }

    async saveCar(car){ 
        // console.log(car)
        await this.dao.save(car.asDTO())
    }

    async getCar(carId){ 
        const car = await this.dao.getCarByUser(carId)
        return new Cart(car)
    }

    async addProduct(carId, productData){ 
        await this.dao.saveInCar(carId, productData)
    }

    async deleteProduct(carId, productData){ 
        await this.dao.deleteProductInCar(carId, productData)
    }

    async getProduct(){ 

    }

    async deleteAllProduct(carId){ 
        await this.dao.deleteAllProducts(carId)
    }
}