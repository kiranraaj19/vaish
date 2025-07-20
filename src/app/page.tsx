'use client';

import { useEffect } from 'react';
import Landing from '@/components/Landing';
import About from '@/components/About';
import Accomplishments from '@/components/Accomplishments';
import PressBuzz from '@/components/PressBuzz';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section id="landing" className="min-h-screen flex items-center justify-center px-4">
        <Landing />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <About />
      </section>

      <section id="accomplishments" className="min-h-screen py-20 px-4">
        <Accomplishments />
      </section>

      <section id="press" className="min-h-screen py-20 px-4">
        <PressBuzz />
      </section>

      <section id="portfolio" className="min-h-screen py-20 px-4">
        <Portfolio />
      </section>

      <section id="contact" className="min-h-screen py-20 px-4">
        <Contact />
      </section>
    </main>
  );
}
