import React from 'react';
import { Mail, Copy, ExternalLink, Send, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Contact({ profile, onCopyEmail, onCopyPhone }) {
  return (
    <section id="contact" className="mb-16">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-theme-main font-bold">
          // 06. Contact & Socials
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-theme-main mt-1">
          Let's Connect & Work Together
        </h2>
      </div>

      <div className="bg-theme-card border-2 border-theme-strong rounded-xl p-5 sm:p-7 shadow-codecademy">
        <p className="text-theme-sub text-sm leading-relaxed mb-6 font-medium">
          I am actively seeking <strong className="text-theme-main font-extrabold">Backend Engineering & Software Developer Internship / Co-op positions</strong>. 
          Feel free to reach out directly via email or phone.
        </p>

        {/* Horizontal Row Cards */}
        <div className="space-y-3">
          {/* Email Row Card */}
          <div className="p-4 rounded-lg bg-theme-inset border-2 border-theme hover:border-theme-strong flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-theme-card border-2 border-theme-strong flex items-center justify-center text-theme-main shrink-0 shadow-xs">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-theme-dim font-bold uppercase tracking-wider block">
                  Email Address
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm sm:text-base font-bold text-theme-main hover:underline transition-colors font-mono break-all sm:break-normal"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => onCopyEmail(profile.email)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-extrabold rounded-md bg-theme-card hover:bg-theme-card-hover border-2 border-theme-strong text-theme-main shadow-codecademy-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                title="Copy Email"
              >
                <Copy size={12} />
                <span>Copy</span>
              </button>
              <a
                href={`mailto:${profile.email}?subject=Internship/Co-op Opportunity`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-extrabold rounded-md bg-theme-accent hover:bg-codecademy-yellowHover border-2 border-theme-strong text-theme-accent-text shadow-codecademy-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
              >
                <Send size={12} />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Phone Row Card */}
          <div className="p-4 rounded-lg bg-theme-inset border-2 border-theme hover:border-theme-strong flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-theme-card border-2 border-theme-strong flex items-center justify-center text-theme-main shrink-0 shadow-xs">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-theme-dim font-bold uppercase tracking-wider block">
                  Phone Number
                </span>
                <a
                  href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                  className="text-sm sm:text-base font-bold text-theme-main hover:underline transition-colors font-mono"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            {onCopyPhone && (
              <div className="self-end sm:self-center shrink-0">
                <button
                  onClick={() => onCopyPhone(profile.phone)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-extrabold rounded-md bg-theme-card hover:bg-theme-card-hover border-2 border-theme-strong text-theme-main shadow-codecademy-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                  title="Copy Phone"
                >
                  <Copy size={12} />
                  <span>Copy</span>
                </button>
              </div>
            )}
          </div>

          {/* GitHub Row Card */}
          <div className="p-4 rounded-lg bg-theme-inset border-2 border-theme hover:border-theme-strong flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-theme-card border-2 border-theme-strong flex items-center justify-center text-theme-main shrink-0 shadow-xs">
                <GithubIcon size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-theme-dim font-bold uppercase tracking-wider block">
                  GitHub Profile
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm sm:text-base font-bold text-theme-main hover:underline transition-colors font-mono"
                >
                  github.com/Birdie-1
                </a>
              </div>
            </div>
            <div className="self-end sm:self-center shrink-0">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-extrabold rounded-md bg-theme-card hover:bg-theme-card-hover border-2 border-theme-strong text-theme-main shadow-codecademy-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
              >
                <span>View GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
