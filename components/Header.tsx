import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('problem'), href: '#problem' },
    { name: t('solution'), href: '#solution' },
    { name: t('methodology'), href: '#neuro' },
    { name: t('sasha'), href: '#sasha' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'dark:bg-[#121212]/50 light:bg-white/50 backdrop-blur-2xl dark:border-white/10 light:border-black/10 py-4 shadow-lg dark:shadow-black/20 light:shadow-gray-200/20'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/bMQg7tQJ/bhive-academy-t-pdf.png"
            alt="Bhive Academy Logo"
            className="h-8 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium dark:text-bhive-subtext light:text-gray-600 dark:hover:text-white light:hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Language Switcher, Theme Switcher & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher />

          <button
            className="md:hidden dark:text-white light:text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 dark:bg-[#121212]/95 light:bg-white/95 backdrop-blur-xl dark:border-white/10 light:border-black/10 border-b p-6 md:hidden flex flex-col gap-4 animate-slide-down">
           {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium dark:text-bhive-subtext light:text-gray-600 dark:hover:text-white light:hover:text-black py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};