import React from "react";

const Products = ({name, price})=>{
    return (
        <div>
            <h2>Images</h2>
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    )
}

export default Products;