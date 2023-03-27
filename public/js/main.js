const btn = document.querySelector(".btn");
const baseUrl = "http://localhost:8080/search"
btn.addEventListener("click",async (e)=> { 
const res = await fetch(baseUrl, {
    method:"GET"
})
})

// const btnCart = document.querySelector(".btnCart")
// btnCart.addEventListener("click", async (e)=> { 
//     const req = await fetch("http://localhost:8080/car", { 
//         method:"GET"
//     })

// })