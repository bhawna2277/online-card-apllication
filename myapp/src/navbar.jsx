

const Navbar=({ProductInCart,setCartVisibilty})=>{
 
return(
<>
<div className="navbar">
   <h3 className="logo">Logo</h3>
   <ul>
     <li><a href="./Shop.jsx"> HOME</a></li>
     <li><a href="/.data.jsx">SHOP</a></li>
   </ul>
   <button onClick={ ()=> setCartVisibilty(true)}>
   {
    
    ProductInCart?.length > 0 &&(
      <span>{ProductInCart?.length}</span>
   
)
}   
    
   </button>

</div>

</>

)

}
export default Navbar