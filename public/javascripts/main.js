// const cartIcon = document.getElementById("cartIcon")

// const message = {"id":"cartid"}
// cartIcon.addEventListener("click", (e)=> { 
//     fetch("http://localhost:8080/api/products", {
//         method: 'POST',
//         body: JSON.stringify(message),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
// })

// import axios from "axios";




//Function to add a product in cart
function addProductInCart(productId){ 

    const data = {"productId":productId}; 
    fetch(`http://localhost:8080/api/cart/${productId}`, {
        method: 'POST',
        // body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Product added'
      })
}

//Function to each product
const addProductBtn = document.querySelectorAll(".btnAddProduct"); 
console.log(addProductBtn)
addProductBtn.forEach(btn=> { 
    btn.addEventListener("click", (e)=> { 
        addProductInCart(e.target.id)
    })
})

