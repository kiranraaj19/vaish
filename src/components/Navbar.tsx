'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'credits', label: 'Credits' },
  { id: 'accolades', label: 'Accolades' },
  { id: 'press', label: 'Press' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on nav click (for mobile)
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card-bg/90 backdrop-blur-md shadow-lg border-b border-card-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('landing')}
            className="font-serif text-xl font-medium hover:text-accent transition-colors"
          >
            Vaishnavi Padmanathan
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-sm hover:text-accent transition-colors focus:outline-none"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-2 bg-card-bg border-t border-card-border shadow-lg rounded-b-lg py-4 flex flex-col items-center space-y-4 animate-fade-in z-50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-base font-medium hover:text-accent transition-colors px-4 py-2 w-full text-center"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 