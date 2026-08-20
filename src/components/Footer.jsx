import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-8 pb-4 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-theme-dim">
      <div>
        <p>&copy; {new Date().getFullYear()} {name} • React & Tailwind Portfolio</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-theme-accent font-semibold">Black & Cream Edition</span>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-theme-sub hover:text-theme-accent transition-colors p-1 cursor-pointer font-bold"
          title="Scroll to Top"
        >
          <span>Top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
