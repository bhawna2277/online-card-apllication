

const ShoppingCart = ({visibility, onProductRemove,products,onClose})=>{ 
   
     
    return(
    <>
     <div className="modal" style={{ display:visibility ? "block": "none"}}>
        <div className="shoppingCart">
            <div className="header">
              <h2> Shopping Cart</h2>
              <button className="btn-close-btn" onClick={onClose}>x</button>
            </div>
     
            
            <div className="cart-products">
                {
                products.length ===0 ? (
                        <h2> your Cart Is Empty</h2>
                  ):
                  (
                    Array.isArray(products)
                    ? products.map((product)=>(
                        <div className="cart-products">
                            <img src={product.image} alt={product.name}/><br></br>
                            <h3>{product.name}</h3><br></br>
                            <span>{product.price}</span><br></br>
        
                         <button className="remove-btn" onClick={()=>onProductRemove(product)}>remove item</button>
                         
                        </div>
                         

                    )):null
                    )  
            }   
            </div>
        </div>
     </div>
     
    

    </>)

}

export default ShoppingCart