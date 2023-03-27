import createID from "../../Resorces/CreateID.js"

export default class Review {
    #author
    #plate
    #text
    #id
    constructor({author, plate, text, id}){ 
        this.#author = author
        this.#plate = plate
        this.#text = text
        this.#id =  id
    }

    asDTO(){ 
        return Object.freeze ({ 
            author: this.#author,
            plate: this.#plate, 
            text: this.#text,
            id: this.#id
        })
    }
}