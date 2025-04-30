import React from "react";
import Products from "./Products";
import items from "../data/products";

const ProductList=()=>{
    return (
        <div>
            {items.map((ele, ind)=>{
                return <Products {...ele}  key={ele.id}> {ele.description}</Products>
            })}
        </div>
       )
}

export default ProductList;