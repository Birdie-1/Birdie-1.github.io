import React from 'react';
import { ArrowDown, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <header className="mb-14">
      {/* Top Profile Bar */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 mb-8">
        <div>
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-600/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              {profile.statusBadge}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3.5xl font-extrabold text-theme-main tracking-tight flex flex-wrap items-baseline gap-2">
            <span>{profile.nameEn}</span>
            <span className="text-sm sm:text-base font-normal text-theme-dim font-sans">({profile.nameTh})</span>
          </h1>

          <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs font-mono text-theme-sub mt-2.5 font-medium">
            <span className="flex items-center gap-1 text-theme-main font-bold">
              <MapPin size={13} className="text-theme-accent" />
              <span>{profile.location}</span>
            </span>
            <span className="flex items-center gap-1 text-theme-sub">
              <Phone size={13} className="text-theme-accent" />
              <span>{profile.phone}</span>
            </span>
            <span className="flex items-center gap-1 text-theme-sub">
              <Mail size={13} className="text-theme-accent" />
              <span>{profile.email}</span>
            </span>
          </div>
        </div>

        {/* Profile Image Avatar */}
        <div className="relative group self-start sm:self-auto">
          <div className="absolute -inset-1 rounded-2xl bg-theme-accent opacity-50 blur-xs group-hover:opacity-100 transition-opacity" />
          <img
            src={profile.avatar}
            alt={profile.nameEn}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-theme-strong group-hover:border-theme-accent transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Main Punchy Statement */}
      <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-theme-main mb-4">
        Backend Engineering with{' '}
        <span className="bg-theme-accent px-1.5 py-0.5 rounded text-theme-accent-text inline-block shadow-sm">
          API Integration & Webhook Security.
        </span>
      </h2>

      {/* Bio Paragraphs */}
      <div className="space-y-3 text-theme-sub text-sm sm:text-base leading-relaxed mb-6">
        <p className="text-theme-sub font-medium">
          {profile.bioEn}
        </p>
        <p className="text-xs sm:text-sm text-theme-dim border-l-3 border-theme-accent pl-3 italic font-medium">
          {profile.bioTh}
        </p>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-theme-accent hover:bg-codecademy-yellowHover text-theme-accent-text font-extrabold text-sm border-2 border-theme-strong shadow-codecademy-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
        >
          <span>Explore Projects</span>
          <ArrowDown size={15} />
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-theme-card hover:bg-theme-card-hover border-2 border-theme hover:border-theme-strong text-theme-main text-sm font-bold transition-all shadow-sm"
        >
          <span>GitHub: Birdie-1</span>
          <ExternalLink size={14} className="text-theme-main" />
        </a>
      </div>
    </header>
  );
}
