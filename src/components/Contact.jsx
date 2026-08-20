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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
          {/* Email Card */}
          <div className="p-4 rounded-lg bg-theme-inset border-2 border-theme hover:border-theme-strong flex flex-col justify-between gap-2 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-theme-dim flex items-center gap-1.5 font-bold">
                <Mail size={13} className="text-theme-main" />
                <span>EMAIL ADDRESS</span>
              </span>
              <button
                onClick={() => onCopyEmail(profile.email)}
                className="text-xs font-mono text-theme-main bg-theme-accent px-2 py-0.5 rounded font-extrabold hover:underline flex items-center gap-1 cursor-pointer shadow-xs border border-theme-strong"
                title="Copy to clipboard"
              >
                <Copy size={11} />
                <span>Copy</span>
              </button>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-bold text-theme-main hover:underline transition-colors break-all"
            >
              {profile.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-4 rounded-lg bg-theme-inset border-2 border-theme hover:border-theme-strong flex flex-col justify-between gap-2 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-theme-dim flex items-center gap-1.5 font-bold">
                <Phone size={13} className="text-theme-main" />
                <span>PHONE NUMBER</span>
              </span>
              {onCopyPhone && (
                <button
                  onClick={() => onCopyPhone(profile.phone)}
                  className="text-xs font-mono text-theme-main bg-theme-accent px-2 py-0.5 rounded font-extrabold hover:underline flex items-center gap-1 cursor-pointer shadow-xs border border-theme-strong"
                  title="Copy phone"
                >
                  <Copy size={11} />
                  <span>Copy</span>
                </button>
              )}
            </div>
            <a
              href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
              className="text-sm font-bold text-theme-main hover:underline transition-colors"
            >
              {profile.phone}
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-4 rounded-lg bg-theme-inset border-2 border-theme hover:border-theme-strong flex flex-col justify-between gap-2 transition-all">
            <span className="text-xs font-mono text-theme-dim flex items-center gap-1.5 font-bold">
              <GithubIcon size={14} className="text-theme-main" />
              <span>GITHUB PROFILE</span>
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-theme-main hover:underline transition-colors flex items-center justify-between mt-2"
            >
              <span>github.com/Birdie-1</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Direct Action */}
        <div className="flex flex-wrap gap-3 items-center pt-2">
          <a
            href={`mailto:${profile.email}?subject=Internship/Co-op Opportunity`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-theme-accent hover:bg-codecademy-yellowHover text-theme-accent-text font-extrabold text-sm border-2 border-theme-strong shadow-codecademy-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <Send size={15} />
            <span>Send Direct Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
