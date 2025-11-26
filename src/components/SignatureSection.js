import React from "react";

export default function SignatureSection({ items = [] }) {
  const cards =
    items.length >= 3
      ? items
      : [...items, ...items.slice(0, Math.max(0, 3 - items.length))];

  return (
    <section className="signature container">
      <h2 className="section-title">Signature</h2>

      <div className="signature-grid">
        {cards.map((it, idx) => (
          <div className="sig-card" key={it?.id || idx}>
            <div className="sig-thumb">
              <img src={it.image} alt={it.name} />
            </div>
            <h3 className="sig-title">{it.name}</h3>
            <p className="sig-sub">{it.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
