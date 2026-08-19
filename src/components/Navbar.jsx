import { useState } from "react";

import {
  Download,
  Menu,
  X,
} from "lucide-react";

import { profile } from "../data/portfolioData";


export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);


  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];


  return (
    <header className="navbar">

      <a
        href="/"
        className="brand"
      >

        <span className="brand-mark">
          JM
        </span>

        <span>
          {profile.shortName}
        </span>

      </a>


      <button
        className="menu-button"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {menuOpen ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}

      </button>


      <nav
        className={`nav-links ${
          menuOpen ? "open" : ""
        }`}
      >

        {links.map(
          ([label, href]) => (

            <a
              key={href}
              href={href}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {label}
            </a>

          )
        )}


        <a
          href={profile.resume}
          download
          className="nav-cta"
        >

          Resume

          <Download size={15} />

        </a>

      </nav>

    </header>
  );
}