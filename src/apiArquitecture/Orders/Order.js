export default class Order{ 
    constructor({clientName, clientEmail, date, prods, total, id}){ 
        this.clientName = clientName //req.user.name
        this.clientEmail = clientEmail //req.user.email
        this.date = date //date.now()
        this.prods = prods
        this.total = total 
        this.id = id
    }

    asDTO(){ 
        return Object.freeze({ 
            id:this.id, 
            clientName: this.clientName, 
            clientEmail: this.clientEmail, 
            date: this.date, 
            prods: this.prods, 
            total: this.total
        })
    }
}