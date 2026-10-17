'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { revealLines, prefersReducedMotion } from '@/lib/scrollReveal';

const TAGLINE = 'You will probably find me typing away with fury at my desk.';

const Landing = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      if (prefersReducedMotion()) {
        setTyped(TAGLINE);
        setTypingDone(true);
        return;
      }

      let i = 0;
      const id = setInterval(() => {
        i += 1;
        setTyped(TAGLINE.slice(0, i));
        if (i >= TAGLINE.length) {
          clearInterval(id);
          setTypingDone(true);
        }
      }, 32);

      return () => clearInterval(id);
    };

    revealLines(revealRef.current, { delay: 0.3, onComplete: startTyping });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-ink text-paper flex flex-col items-center justify-center overflow-hidden px-6 py-32">
      <div
        ref={revealRef}
        className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-72 lg:h-96 flex-shrink-0 border border-paper/30">
          <Image
            src="/static/profilepic/VaishPicture.jpg"
            alt="Vaishnavi Padmanathan"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 14rem, 12rem"
            priority
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="eyebrow eyebrow-on-ink mb-8">
            Writer from India &middot; She/Her
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
            Vaishnavi
            <br />
            Padmanathan
          </h1>
        </div>
      </div>

      <p
        className="mt-10 max-w-sm text-center font-serif italic text-lg sm:text-xl text-paper/80 min-h-[3.5rem]"
        aria-label={TAGLINE}
      >
        <span aria-hidden="true">{typed}</span>
        {!typingDone && <span className="typewriter-caret" aria-hidden="true" />}
      </p>

      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-3 opacity-50">
        <span className="eyebrow eyebrow-on-ink">Scroll</span>
        <span className="block w-px h-10 bg-paper/30" />
      </div>
    </div>
  );
};

export default Landing;
