import React from 'react';
import { Award, Eye } from 'lucide-react';

export default function Certificates({ certificates, onOpenImage }) {
  return (
    <section id="certificates" className="mb-16">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-theme-main font-bold">
          // 05. Credentials & Training
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-theme-main mt-1">
          Certificates & Activities
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group bg-theme-card border-2 border-theme hover:border-theme-strong rounded-xl overflow-hidden flex flex-col justify-between transition-all shadow-sm hover:shadow-codecademy"
          >
            {/* Certificate Image Thumbnail */}
            <div className="relative aspect-[4/3] bg-theme-inset overflow-hidden border-b-2 border-theme">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => onOpenImage(cert.image, cert.title, cert.issuer)}
                className="absolute inset-0 bg-codecademy-navy/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-mono text-codecademy-yellow font-extrabold cursor-pointer"
                aria-label={`View ${cert.title}`}
              >
                <Eye size={16} />
                <span>Zoom Certificate</span>
              </button>
            </div>

            {/* Certificate Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-theme-main font-extrabold mb-1">
                  <Award size={13} />
                  <span>{cert.issuer}</span>
                </div>
                <h3 className="text-sm font-extrabold text-theme-main mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-theme-sub leading-relaxed line-clamp-3 font-medium">
                  {cert.description}
                </p>
              </div>

              <button
                onClick={() => onOpenImage(cert.image, cert.title, cert.issuer)}
                className="mt-3 text-xs font-mono text-theme-main font-bold hover:underline flex items-center gap-1 transition-colors self-start cursor-pointer"
              >
                <span>View Full Size ↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
