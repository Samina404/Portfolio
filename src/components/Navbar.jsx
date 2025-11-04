import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["home", "portfolio", "services", "resume", "contact"];

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#0f172a]/80 backdrop-blur-md flex justify-between items-center px-10 py-4">
      <h1 className="text-2xl font-bold text-green-400">Samina.</h1>

      {/* Desktop */}
      <div className="hidden md:flex space-x-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-5 bg-[#1e293b] rounded-lg flex flex-col p-4 space-y-3 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
