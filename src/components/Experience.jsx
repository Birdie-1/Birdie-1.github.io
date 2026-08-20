import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="mb-16">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-theme-main font-bold">
          // 03. Professional Experience
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-theme-main mt-1">
          Work & Internship
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-theme-card border-2 border-theme hover:border-theme-strong rounded-xl p-5 sm:p-6 transition-all shadow-sm hover:shadow-codecademy"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
              <h3 className="text-base sm:text-lg font-extrabold text-theme-main flex items-center gap-2">
                <Briefcase size={16} className="text-theme-main" />
                <span>{exp.role}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-theme-accent text-theme-accent-text border border-theme-strong font-extrabold">
                  {exp.type}
                </span>
              </h3>
              <span className="font-mono text-xs text-theme-main font-extrabold">
                {exp.period}
              </span>
            </div>

            {/* Company */}
            <p className="text-sm font-bold text-theme-sub mb-4">
              {exp.company}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-theme-sub mb-5 font-medium">
              {exp.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-theme-main mt-0.5 shrink-0 font-bold" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Footer */}
            {exp.techStack && (
              <div className="pt-3.5 border-t border-theme flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-theme-dim mr-1 font-bold">Stack:</span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-theme-inset border border-theme text-theme-sub font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
