import React from "react";

function Menu() {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Braille Bum</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Features</a>
            </li>
            <li>
              <a href="index.html">Docs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
