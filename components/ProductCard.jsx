import React from "react";

const ProductCard = ({ product }) => {

  return (

    <div className="border rounded-lg p-4 shadow bg-white">

      <img

        src={product.image}

        alt={product.title}

        className="h-40 mx-auto object-contain"

      />

      <h3 className="font-semibold mt-3 text-sm">{product.title}</h3>

      <p className="text-green-600 font-bold mt-2">${product.price}</p>

    </div>

  );

};

export default ProductCard;