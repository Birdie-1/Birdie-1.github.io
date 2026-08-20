import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ isDark, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="border-b-2 border-theme pb-5 mb-10 transition-colors">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-3.5 h-3.5 rounded-sm bg-theme-accent border border-theme-strong shadow-xs group-hover:scale-110 transition-transform" />
          <span className="font-extrabold text-base tracking-tight text-theme-main group-hover:underline transition-all">
            Naruebordee Boonma
          </span>
        </a>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-bold text-theme-sub hover:text-theme-main hover:underline transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-extrabold rounded-md bg-theme-card hover:bg-theme-card-hover border-2 border-theme-strong text-theme-main transition-all shadow-codecademy-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={13} className="text-amber-warm" /> : <Moon size={13} className="text-theme-main" />}
            <span>{isDark ? 'Cream Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-md bg-theme-card border-2 border-theme-strong text-theme-main shadow-xs"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={15} className="text-amber-warm" /> : <Moon size={15} className="text-theme-main" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-theme-card border-2 border-theme-strong text-theme-main shadow-xs"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t-2 border-theme flex flex-col gap-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-theme-sub hover:text-theme-main py-1.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
