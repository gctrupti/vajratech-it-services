import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              VT
            </div>
            <span className="font-semibold text-lg text-gray-900">
              VajraTech
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#why" className="hover:text-blue-600 transition">Why Us</a>
            <a href="#tech" className="hover:text-blue-600 transition">Technologies</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:scale-105 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <span className="font-semibold text-lg text-gray-900">
            Menu
          </span>
          <button onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6 text-gray-700 font-medium">
          <a href="#services" onClick={closeMenu} className="block hover:text-blue-600">
            Services
          </a>
          <a href="#why" onClick={closeMenu} className="block hover:text-blue-600">
            Why Us
          </a>
          <a href="#tech" onClick={closeMenu} className="block hover:text-blue-600">
            Technologies
          </a>
          <a href="#testimonials" onClick={closeMenu} className="block hover:text-blue-600">
            Testimonials
          </a>

          <button className="w-full mt-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}