import React from "react";

const Products = ({name, price,image, children})=>{
    return (
        <div>
            <img src={image} alt="" />
            <h3 className="name">{name}</h3>
            <h4>{price}</h4>
            {children}
        </div>
    )
}

export default Products;