import React from "react";
import Products from "./Products";

const products =[
    {
    name: "computer",
        price: 100
    },
    {
        name: "computer",
        price: 200
    },{
        name: "computer",
        price: 300
    },{
        name: "computer",
        price: 400
    }
]

const ProductList=()=>{
    // const callback=(element)=>{
    //     return <Products{...element}/>;
    // }

    // const productlist = products.map(callback);
 

   return (
    <div>
        {products.map((element)=>{
            return <Products {...element}/>
        })}
    </div>
   )
}

export default ProductList;