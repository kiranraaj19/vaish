'use client';

import Landing from '@/components/Landing';
import About from '@/components/About';
import Credits from '@/components/Credits';
import Accolades from '@/components/Accolades';
import PressBuzz from '@/components/PressBuzz';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section id="landing">
        <Landing />
      </section>

      <section id="about" className="py-24 md:py-36 px-6">
        <About />
      </section>

      <section id="credits" className="py-24 md:py-36 px-6">
        <Credits />
      </section>

      <section id="accolades" className="py-24 md:py-36 px-6">
        <Accolades />
      </section>

      <section id="press" className="py-24 md:py-36 px-6">
        <PressBuzz />
      </section>

      <section id="portfolio" className="py-24 md:py-36 px-6">
        <Portfolio />
      </section>

      <section id="contact" className="py-24 md:py-36 px-6">
        <Contact />
      </section>
    </main>
  );
}
