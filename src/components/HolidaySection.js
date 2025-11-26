import React from "react";

export default function HolidaySection() {
  return (
    <section className="holiday container">
      <div className="holiday-inner">

        {/* Small Holiday Icon (Working PNG) */}
        <div className="holiday-image">
          <img
            src="/images/cake logo holi.jpg"
            alt="Holiday Cake Icon"
            style={{ width: "160px", height: "160px", objectFit: "contain" }}
          />
        </div>

        <div className="holiday-content">
          <h3>Holiday Collection</h3>
          <div className="holiday-offer">20% OFF</div>
          <button className="holiday-btn">Order Today</button>
        </div>

      </div>
    </section>
  );
}
