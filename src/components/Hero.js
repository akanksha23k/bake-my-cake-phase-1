import React from "react";

export default function Hero() {
  return (
    <section className="hero-pat">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-script">Delight in every bite!</h1>
          <p className="hero-desc">
            Elegant handcrafted cakes, macarons & cupcakes made fresh daily.
          </p>
          <button className="hero-cta">Order Now</button>
        </div>

        <div className="hero-right">
          <img src="/images/Classic Cheesecake.jpg" alt="Cake" />
        </div>
      </div>
    </section>
  );
}
