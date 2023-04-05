export default class Cart { 
    #id
    #clientId
    #products
    constructor({id, clientId, products= []}){ 
        this.#id = id
        this.#clientId = clientId
        this.#products = products
    }

    asDTO(){ 
        return Object.freeze({ 
            id: this.#id, 
            clientId: this.#clientId, 
            products: this.#products
        })
    }
}