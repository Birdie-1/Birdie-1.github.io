import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, imageSrc, title, subtitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-theme-card border border-theme rounded-2xl overflow-hidden shadow-modal p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-theme">
          <div>
            <h3 className="text-lg font-bold text-theme-main">{title || 'Preview'}</h3>
            {subtitle && <p className="text-xs font-mono text-theme-accent font-semibold">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={imageSrc} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 text-theme-sub hover:text-theme-accent transition-colors rounded-lg hover:bg-theme-inset cursor-pointer"
              title="Open full image in new tab"
            >
              <ExternalLink size={18} />
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-theme-sub hover:text-theme-main transition-colors rounded-lg hover:bg-theme-inset cursor-pointer"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Image */}
        <div className="flex items-center justify-center max-h-[75vh] overflow-auto rounded-xl bg-theme-inset p-2">
          <img 
            src={imageSrc} 
            alt={title || 'Modal preview'} 
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
