import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignatureSection from "./components/SignatureSection";
import HolidaySection from "./components/HolidaySection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/cakes")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setLoading(false);
      });
  }, []);

  const signature = items.filter((i) => i.category === "cakes").slice(0, 3);
  const gridItems = items;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignatureSection items={signature} />
        <HolidaySection />
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <ProductGrid products={gridItems} />
        )}
      </main>
      <Footer />
    </>
  );
}
