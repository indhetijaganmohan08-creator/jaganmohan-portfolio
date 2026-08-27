import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const basePath = import.meta.env.BASE_URL;

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar navbar-fixed">
      <div className="navbar-inner">

        {/* BRAND */}
        <a
          href={basePath}
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            JM
          </span>

          <span>
            {profile.shortName}
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`${basePath}${href}`}
              onClick={handleNavClick}
            >
              {label}
            </a>
          ))}

          {/* RESUME */}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={handleNavClick}
          >
            Resume
            <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>
    </header>
  );
}