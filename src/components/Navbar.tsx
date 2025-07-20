'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('landing')}
            className="font-serif text-xl font-medium hover:text-accent transition-colors"
          >
            VP
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('accomplishments')}
              className="text-sm hover:text-accent transition-colors"
            >
              Accomplishments
            </button>
            <button
              onClick={() => scrollToSection('press')}
              className="text-sm hover:text-accent transition-colors"
            >
              Press
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm hover:text-accent transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-sm hover:text-accent transition-colors">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 