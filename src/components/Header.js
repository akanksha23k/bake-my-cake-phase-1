import React from "react";

export default function Header() {
  return (
    <header className="patt-header">
      <div className="patt-topbar">
        <div className="container">Freshly baked • Daily specials • Premium quality</div>
      </div>

      <div className="patt-nav container">
        <div className="logo">
          <span className="logo-script">Bake my Cake</span>
        </div>

        <nav className="main-nav">
          <ul>
            <li>HOME</li>
            <li>MENU</li>
            <li>CAKES</li>
            <li>CONTACT</li>
          </ul>
        </nav>

        <div className="nav-icons">
          <button className="btn-cart">Cart</button>
        </div>
      </div>
    </header>
  );
}
