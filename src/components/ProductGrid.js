import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="product-list container">
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
