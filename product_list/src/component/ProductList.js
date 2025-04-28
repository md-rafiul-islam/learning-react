import React from "react";
import Products from "./Products";

const product1={
    name: "computer",
    price: 100
}

const product2={
    name: "computer",
    price: 200
}
const product3={
    name: "computer",
    price: 300
}
const product4={
    name: "computer",
    price: 400
}

const ProductList=()=>{
   return (
    <div>
        <Products name={product1.name} price={product1.price} />        
        <Products {...product2}/>   {/* this technic is called spread operator */}
        <Products {...product3}/>
        <Products {...product4}/> 
    </div>
   )
}

export default ProductList;