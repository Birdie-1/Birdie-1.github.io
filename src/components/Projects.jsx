import React, { useState } from 'react';
import { ExternalLink, Layers, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ projects, onOpenImage }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'academic') return p.type.includes('Academic');
    if (filter === 'side') return p.type.includes('Side') || p.type.includes('Algorithmic');
    return true;
  });

  return (
    <section id="projects" className="mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-theme-main font-bold">
            // 01. Selected Projects
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-theme-main mt-1">
            Engineering & Software Projects
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-theme-card p-1 rounded-md border-2 border-theme-strong self-start shadow-codecademy-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 text-xs rounded font-mono font-bold transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-theme-accent text-theme-accent-text'
                : 'text-theme-sub hover:text-theme-main'
            }`}
          >
            All ({projects.length})
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-2.5 py-1 text-xs rounded font-mono font-bold transition-colors cursor-pointer ${
              filter === 'academic'
                ? 'bg-theme-accent text-theme-accent-text'
                : 'text-theme-sub hover:text-theme-main'
            }`}
          >
            Academic
          </button>
          <button
            onClick={() => setFilter('side')}
            className={`px-2.5 py-1 text-xs rounded font-mono font-bold transition-colors cursor-pointer ${
              filter === 'side'
                ? 'bg-theme-accent text-theme-accent-text'
                : 'text-theme-sub hover:text-theme-main'
            }`}
          >
            Side & Algorithm
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-theme-card hover:bg-theme-card-hover border-2 border-theme hover:border-theme-strong rounded-xl p-5 sm:p-6 transition-all shadow-sm hover:shadow-codecademy"
          >
            {/* Project Header */}
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs text-theme-accent-text bg-theme-accent border border-theme-strong px-2 py-0.5 rounded font-extrabold shadow-xs">
                    {project.type}
                  </span>
                  <span className="text-xs font-mono text-theme-dim font-bold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-theme-main group-hover:text-theme-purple transition-colors flex items-center gap-1.5">
                  <span>{project.title}</span>
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-theme-sub text-sm leading-relaxed mb-4 font-medium">
              {project.description}
            </p>

            {/* Specific Bullet Points from Resume */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-2 text-xs sm:text-sm text-theme-sub mb-4 bg-theme-inset p-3.5 rounded-lg border border-theme">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-theme-main mt-0.5 shrink-0" />
                    <span className="leading-relaxed font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Architecture Highlight Box */}
            <div className="bg-theme-inset border-l-4 border-theme-accent px-3.5 py-2.5 rounded-r-md text-xs text-theme-sub mb-4">
              <div className="flex items-center gap-1.5 text-theme-main font-bold mb-0.5 font-mono">
                <Layers size={13} className="text-theme-main" />
                <span>Architecture Highlight:</span>
              </div>
              <p className="text-theme-sub leading-relaxed text-xs font-medium">
                {project.architecture}
              </p>
            </div>

            {/* Screenshots (if available) */}
            {project.images && project.images.length > 0 && (
              <div className="mb-4">
                <div className="text-xs font-mono text-theme-dim mb-2 flex items-center gap-1 font-bold">
                  <ImageIcon size={13} className="text-theme-main" />
                  <span>Screenshots & UI Previews (Click to zoom):</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => onOpenImage(img, project.title, `Preview ${idx + 1}`)}
                      className="group/img relative rounded-lg overflow-hidden border-2 border-theme hover:border-theme-strong aspect-video bg-theme-inset focus:outline-none focus:ring-2 focus:ring-amber-500 text-left cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-codecademy-navy/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-2.5 py-1 text-xs bg-codecademy-yellow text-codecademy-navy font-extrabold rounded font-mono border border-codecademy-navy shadow-sm">
                          🔍 Zoom Preview
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Project Footer: Tech stack & Links */}
            <div className="pt-3 border-t border-theme flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-theme-inset border border-theme text-theme-sub font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-extrabold text-theme-main hover:underline hover:translate-x-0.5 transition-transform"
                  >
                    <GithubIcon size={14} />
                    <span>View Repository ↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
