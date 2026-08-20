import React from 'react';
import { Code2, Server, Database, Layout, Wrench } from 'lucide-react';

export default function Skills({ skills }) {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={16} className="text-theme-main" />,
      items: skills.languages,
    },
    {
      title: 'Backend Frameworks & APIs',
      icon: <Server size={16} className="text-theme-main" />,
      items: skills.backend,
    },
    {
      title: 'Database & ORM',
      icon: <Database size={16} className="text-theme-main" />,
      items: skills.databaseOrm,
    },
    {
      title: 'Frontend & Styling',
      icon: <Layout size={16} className="text-theme-main" />,
      items: skills.frontend,
    },
    {
      title: 'Developer Tools & QA Testing',
      icon: <Wrench size={16} className="text-theme-main" />,
      items: skills.tools,
    },
  ];

  return (
    <section id="skills" className="mb-16">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-theme-main font-bold">
          // 02. Technical Skills
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-theme-main mt-1">
          Technical Arsenal & Core Stack
        </h2>
      </div>

      <div className="bg-theme-card border-2 border-theme-strong rounded-xl overflow-hidden shadow-codecademy">
        <div className="divide-y-2 divide-theme">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-start p-4 sm:p-5 gap-3 sm:gap-6 hover:bg-theme-card-hover transition-colors"
            >
              {/* Category Title */}
              <div className="sm:w-1/3 flex items-center gap-2 text-theme-main font-extrabold text-xs sm:text-sm">
                {cat.icon}
                <span>{cat.title}</span>
              </div>

              {/* Skill Tags */}
              <div className="sm:w-2/3 flex flex-wrap gap-1.5">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-theme-inset border border-theme-strong text-theme-main font-bold hover:bg-theme-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
