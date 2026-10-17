'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/scrollReveal';

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
  const [activeId, setActiveId] = useState('landing');
  const underlineRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    Object.entries(underlineRefs.current).forEach(([id, el]) => {
      if (!el) return;
      gsap.to(el, {
        scaleX: id === activeId ? 1 : 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  }, [activeId]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const onIntro = !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-paper/95 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="relative z-50 max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('landing')}
            className={`font-serif text-lg tracking-tight transition-colors ${
              onIntro ? 'text-paper' : 'text-ink hover:text-accent'
            }`}
          >
            Vaishnavi Padmanathan
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-xs font-semibold uppercase tracking-[0.15em] pb-2 transition-colors ${
                  onIntro ? 'text-paper/80 hover:text-paper' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  ref={(el) => {
                    underlineRefs.current[item.id] = el;
                  }}
                  className="absolute left-0 bottom-0 h-px w-full bg-accent origin-left"
                  style={{ transform: 'scaleX(0)' }}
                />
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
              menuOpen || onIntro ? 'text-paper' : 'text-ink'
            }`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Full-screen mobile overlay */}
      {menuOpen && (
        <div className="md:hidden nav-overlay fixed inset-0 z-40 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-serif text-3xl hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
