import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "Resume", to: "resume" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="bg-[#0f172a] text-white flex justify-between items-center px-10 py-6 fixed w-full z-50">
      <h1 className="text-2xl font-bold">Samina.</h1>

      {/* Desktop Menu */}
      <div className="md:flex hidden space-x-8 text-gray-300">
        {links.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400"
          >
            {link.name}
          </ScrollLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-10 bg-[#1e293b] rounded-lg flex flex-col items-start p-4 space-y-3 md:hidden">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-green-400"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
