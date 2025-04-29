import React from "react";

const Products = ({name, price,image})=>{
    return (
        <div>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    )
}

export default Products;