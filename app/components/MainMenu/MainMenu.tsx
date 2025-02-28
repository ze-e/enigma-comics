"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { alegreyaClass } from "../Fonts/Fonts";
import { Menu, X } from "lucide-react"; 

export default function MainMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Don't show the menu on the root page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav>
      {/* Desktop Menu */}
      <ul className={`${alegreyaClass} text-white hidden md:flex space-x-4 text-2xl`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/placeholder">Artists</Link>
        </li>
        <li>
          <Link href="/placeholder">Contact</Link>
        </li>
        <li>
          <Link href="/placeholder">Feedback</Link>
        </li>
        <li>
          <Link href="/placeholder">Series</Link>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={32} />
      </button>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button 
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Mobile Menu Links */}
          <ul className={`${alegreyaClass} text-white text-3xl space-y-6 text-center`}>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/placeholder" onClick={() => setMenuOpen(false)}>Artists</Link>
            </li>
            <li>
              <Link href="/placeholder" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link href="/placeholder" onClick={() => setMenuOpen(false)}>Feedback</Link>
            </li>
            <li>
              <Link href="/placeholder" onClick={() => setMenuOpen(false)}>Series</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
