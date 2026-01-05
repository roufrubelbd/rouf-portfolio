'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Education', href: '/education' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-purple-400">
          Rouf<span className="text-white">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition hover:text-purple-400 ${
                  pathname === link.href
                    ? 'text-purple-400'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg transition ${
                    pathname === link.href
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
