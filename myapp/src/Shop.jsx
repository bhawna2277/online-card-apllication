import { useEffect, useState } from "react"
import Products from "./data"
import Navbar from "./navbar"
import ShoppingCart from "./cart"

const MyShop=()=>{
    const[cartVisibilty,setCartVisibilty,]=useState(false)

    const[ProductInCart,SetProducts,]= useState(
        JSON.parse(localStorage.getItem('myshop-data')) || []
    )
    useEffect(()=>{
    localStorage.setItem('myshop-data',JSON.stringify(ProductInCart))
    },[ProductInCart])

 //AddProductToCart

const AddProductToCart=(product)=>{
const newProduct ={
    ...product,
    count:1
}
SetProducts([...ProductInCart,newProduct])

 } 

 // onProductRemove
 
 const onProductRemove = (productToRemove)=>
 { 
    const updateCart = ProductInCart.filter((product)=>product.id !== productToRemove.id)
    SetProducts (updateCart) 
 }

return(
<>

<ShoppingCart  
    visibility ={cartVisibilty}
    products ={ProductInCart}
    onClose ={()=> setCartVisibilty(false)}
    onProductRemove={onProductRemove}/>

<Navbar ProductInCart={ProductInCart} setCartVisibilty={setCartVisibilty}/>
<main>
    <h1 className="title">SHOP PAGE</h1>
    <div className="products">
    {
    Array.isArray(Products)
        ? Products.map((product)=>(
            <div className="product" key={product.id}>
              <img className="product-img" src={product.image} alt={product.name}/> <br></br>
                 <h3 className="product-name">{product.name}</h3><br></br>
                 <span className="product-price">{product.price} $</span><br></br><br></br>
                 <div className="button">
                   <button onClick={()=>AddProductToCart(product)}>ADD TO CARD</button>
                 </div>

            </div>
        ))
     :null
     }
    </div>        
</main>
</>
)
}
export default MyShop