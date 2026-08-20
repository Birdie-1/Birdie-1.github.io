import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" className="mb-16">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-theme-main font-bold">
          // 04. Education
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-theme-main mt-1">
          Academic Background
        </h2>
      </div>

      <div className="bg-theme-card border-2 border-theme hover:border-theme-strong rounded-xl p-5 sm:p-6 space-y-6 shadow-sm hover:shadow-codecademy transition-all">
        {education.map((item, idx) => (
          <div
            key={idx}
            className={`relative pl-6 border-l-2 ${
              item.current ? 'border-theme-strong' : 'border-theme'
            }`}
          >
            {/* Timeline Dot */}
            <span
              className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full ${
                item.current
                  ? 'bg-theme-accent border border-theme-strong shadow-xs'
                  : 'bg-theme-subtle border border-theme'
              }`}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-sm sm:text-base font-extrabold text-theme-main flex items-center gap-1.5">
                {item.current && <GraduationCap size={16} className="text-theme-main" />}
                <span>{item.institution}</span>
                <span className="text-xs font-normal text-theme-dim font-sans">({item.institutionTh})</span>
              </h3>
              <div className="flex items-center gap-2">
                {item.gpa && (
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-theme-accent-text bg-theme-accent border border-theme-strong px-2 py-0.5 rounded font-extrabold shadow-xs">
                    <Award size={12} />
                    <span>GPA: {item.gpa}</span>
                  </span>
                )}
                <span className="font-mono text-xs text-theme-main font-extrabold">
                  {item.period}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-theme-sub font-bold">
              {item.faculty}
            </p>
            <p className="text-xs font-mono text-theme-dim mt-0.5 font-medium">
              {item.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
