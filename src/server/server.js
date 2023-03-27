import express from "express"
import http from "http"
import { app } from "./app.js"


export default async function InitializeServer(PORT){ 
    const httpServer = await http.createServer(app)
    const server = await httpServer.listen(PORT, ()=> { 
        console.log(`Server running at port #${PORT}`)
    })


    server.on("error", (error)=> { 
        console.log(error)
    })

}