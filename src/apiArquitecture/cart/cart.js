export default class Cart { 
    #id
    #clientId
    constructor({id, clientId, prods= []}){ 
        this.id = id
        this.clientId = clientId
        this.products = prods
    }

    asDTO(){ 
        return Object.freeze({ 
            id: this.#id, 
            clientId: this.#clientId, 
            products: this.prods
        })
    }
}