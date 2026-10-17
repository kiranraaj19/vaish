'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  revealStagger,
  gsap,
  ensureRegistered,
  prefersReducedMotion,
} from '@/lib/scrollReveal';

const accolades = [
  {
    image: '/static/accomplishments/accolades/CMAFellowShip.png',
    title: "CHILDREN'S MEDIA ASSOCIATION FELLOWSHIP 2025",
    subtitle: 'SEMIFINALIST',
  },
  {
    image: '/static/accomplishments/accolades/MentorshipMatters.png',
    title: 'MENTORSHIP MATTERS 2024',
    subtitle: 'SEMIFINALIST',
  },
  {
    image: '/static/accomplishments/accolades/FusionFilmFestival.png',
    title: 'FUSION FILM FESTIVAL 2024',
    subtitle: 'WINNER',
    category: 'GRADUATE HALF HOUR PILOT',
  },
  {
    image: '/static/accomplishments/accolades/WritersAccessSupportStaff.png',
    title: "WRITERS' ACCESS SUPPORT STAFF TRAINING PROGRAM 2023",
    subtitle: 'SEMIFINALIST',
  },
  {
    image: '/static/accomplishments/accolades/FusionFilmFestival.png',
    title: 'FUSION FILM FESTIVAL 2023',
    subtitle: 'HONORABLE MENTION',
    category: 'GRADUATE HALF HOUR PILOT',
  },
  {
    image: '/static/accomplishments/accolades/GroupEffortInitiative.png',
    title: 'GROUP EFFORT INITIATIVE MENTORSHIP PROGRAM 2022',
    subtitle: 'MENTEE',
  },
  {
    image: '/static/accomplishments/accolades/NickelodeonWritingProgram.png',
    title: 'NICK WRITING PROGRAM 2022',
    subtitle: 'SEMIFINALIST',
  },
  {
    image: '/static/accomplishments/accolades/NyuTischGraduateAward.png',
    title: 'NYU TISCH GRADUATE AWARD FOR TV WRITING, 2022',
    subtitle: 'RECIPIENT',
  },
];

const Accolades = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const strokeRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    ensureRegistered();
    const path = strokeRef.current;
    if (path) {
      const length = path.getTotalLength();
      if (prefersReducedMotion()) {
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
      } else {
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: path, start: 'top 85%', once: true },
        });
      }
    }

    revealStagger(containerRef.current, '.accolade-row', { stagger: 0.08 });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <p className="eyebrow mb-10">03 &mdash; Accolades</p>

      <svg
        viewBox="0 0 400 14"
        preserveAspectRatio="none"
        className="w-full h-3 mb-2"
        aria-hidden="true"
      >
        <path
          ref={strokeRef}
          d="M2,8 C50,2 90,13 140,6 C190,-1 230,12 280,5 C320,0 360,10 398,6"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div ref={containerRef}>
        {accolades.map((accolade, index) => {
          const isWinner = accolade.subtitle.toUpperCase().includes('WINNER');
          return (
            <div
              key={index}
              className="accolade-row flex items-center gap-5 md:gap-6 py-5 border-b border-line"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-paper-soft border border-line">
                <Image
                  src={accolade.image}
                  alt={accolade.title}
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-sm md:text-base text-ink leading-snug">
                  {accolade.title}
                </h4>
                {accolade.category && (
                  <p className="text-xs text-muted mt-1 tracking-wide">
                    {accolade.category}
                  </p>
                )}
              </div>
              <span className="flex-shrink-0 flex items-center gap-1.5">
                {isWinner && (
                  <span className="marginalia text-xl" aria-hidden="true">
                    &#10003;
                  </span>
                )}
                <span
                  className={`text-xs font-semibold uppercase tracking-wide text-right ${
                    isWinner ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {accolade.subtitle}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accolades;
