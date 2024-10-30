"use client";
import "./navbar.css"


import Link from "next/link";
import { useState } from "react";
import Sidebar from "./sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css"; // Import the new CSS file

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">Hashtag Caffè</h1>
          <ul className="navbar-links">
            {["Home", "About", "Menu", "Reservation", "Contact"].map((item) => (
              <li key={item}>
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="navbar-link">
                  <span>{item}</span>
                  <span className="underline" />
                </Link>
              </li>
            ))}
          </ul>
          <button className="menu-button" onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}
