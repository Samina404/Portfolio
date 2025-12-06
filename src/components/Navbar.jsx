import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

import logoSr from "../assets/SR.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
   
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="flex items-center gap-2 cursor-pointer">
            <img src={logoSr} alt="SR Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold tracking-tighter hover:text-emerald-400 transition-colors">
            Samina
            </h1>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 flex flex-col p-6 space-y-4 md:hidden shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 text-lg font-medium cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
