import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [modal, setModal] = useState({
    isOpen: false,
    imageSrc: '',
    title: '',
    subtitle: ''
  });
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fff0e4';
      document.body.style.color = '#10162f';
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = '#11100f';
      document.body.style.color = '#f5f0e6';
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fff0e4';
      document.body.style.color = '#10162f';
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = '#11100f';
      document.body.style.color = '#f5f0e6';
      localStorage.setItem('portfolio-theme', 'dark');
    }
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setToastMessage('Copied email to clipboard!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }).catch(() => {
      prompt('Copy email:', email);
    });
  };

  const handleCopyPhone = (phone) => {
    navigator.clipboard.writeText(phone).then(() => {
      setToastMessage('Copied phone number to clipboard!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }).catch(() => {
      prompt('Copy phone:', phone);
    });
  };

  const handleOpenImage = (imageSrc, title, subtitle) => {
    setModal({
      isOpen: true,
      imageSrc,
      title,
      subtitle
    });
  };

  const handleCloseModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-theme-page text-theme-main relative overflow-x-hidden transition-colors duration-200">
      {/* Subtle warm radial spotlight (visible in dark mode) */}
      <div className="ambient-warmth" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
        
        <main>
          <Hero 
            profile={portfolioData.profile} 
            onCopyEmail={handleCopyEmail}
            onCopyPhone={handleCopyPhone}
          />
          
          <hr className="border-theme my-12" />
          
          <Projects projects={portfolioData.projects} onOpenImage={handleOpenImage} />
          
          <hr className="border-theme my-12" />
          
          <Skills skills={portfolioData.skills} />
          
          <hr className="border-theme my-12" />
          
          <Experience experience={portfolioData.experience} />
          
          <hr className="border-theme my-12" />
          
          <Education education={portfolioData.education} />
          
          <hr className="border-theme my-12" />
          
          <Certificates certificates={portfolioData.certificates} onOpenImage={handleOpenImage} />
          
          <hr className="border-theme my-12" />
          
          <Contact 
            profile={portfolioData.profile} 
            onCopyEmail={handleCopyEmail}
            onCopyPhone={handleCopyPhone}
          />
        </main>

        <Footer name={portfolioData.profile.nameEn} />
      </div>

      {/* Image Lightbox Modal */}
      <ImageModal
        isOpen={modal.isOpen}
        onClose={handleCloseModal}
        imageSrc={modal.imageSrc}
        title={modal.title}
        subtitle={modal.subtitle}
      />

      {/* Copy Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-lg bg-theme-card border-2 border-theme-strong text-theme-main font-mono text-xs shadow-lg transition-all duration-300 pointer-events-none flex items-center gap-2 ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-theme-accent" />
        <span className="font-bold">{toastMessage}</span>
      </div>
    </div>
  );
}
