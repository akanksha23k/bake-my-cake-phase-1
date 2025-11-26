import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <div className="card-thumb">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-price">₹ {product.price}</p>
      </div>
    </article>
  );
}
