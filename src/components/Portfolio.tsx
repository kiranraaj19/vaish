'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, prefersReducedMotion, ensureRegistered } from '@/lib/scrollReveal';

interface PortfolioItem {
  image: string;
  title: string;
  genre: string;
  description: string;
}

const tvPilots: PortfolioItem[] = [
  {
    image: '/static/tvpilots/JustMiddleClassThings.png',
    title: 'JUST MIDDLE CLASS THINGS',
    genre: 'half-hour comedy',
    description:
      "In the late 90s, when the Menons move into a house provided by the father's job, everyone struggles to fit in with the new neighbor who are the father's coworkers.",
  },
  {
    image: '/static/tvpilots/ThePostGraduate.png',
    title: 'THE POSTGRADUATE',
    genre: 'half-hour dramedy',
    description:
      "A postgraduate student begins a relationship with her academic mentor's husband.",
  },
  {
    image: '/static/tvpilots/PregnantPause.jpeg',
    title: 'PREGNANT PAUSE',
    genre: 'half-hour comedy',
    description:
      "An Indian female standup's rise to fame and the lengths she will go to make her dream a reality.",
  },
];

const screenplays: PortfolioItem[] = [
  {
    image: '/static/screenplays/RiteOfPassage.png',
    title: 'RITE OF PASSAGE',
    genre: 'drama',
    description:
      "When Velli's father dies suddenly while visiting his hometown in Tamil Nadu, city-bred Velli is forced to sit through a number of Hindu mourning rituals, none of which allows a daughter to grieve her father in the way she wishes to.",
  },
  {
    image: '/static/screenplays/OwnWorstEnemy.png',
    title: 'I AM MY OWN WORST ENEMY',
    genre: 'comedy',
    description:
      'A 30-year-old Riya gets the opportunity to go back in time and guide her teenage self so that she can marry her long-time crush in the present.',
  },
  {
    image: '/static/screenplays/AnybodyCanBeACrorepati.png',
    title: 'ANYBODY CAN BE A CROREPATI',
    genre: 'action-comedy',
    description:
      'Inspired by real-life events, a lottery winner must find a way to collect his windfall without losing his life or sanity in the process.',
  },
];

const PortfolioRow = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const reversed = index % 2 === 1;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    ensureRegistered();

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, x: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, x: reversed ? 40 : -40 });
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  }, [reversed]);

  return (
    <div
      ref={rowRef}
      className={`flex flex-col ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 md:gap-12 items-center`}
    >
      <div className="relative w-full md:w-1/2 h-64 md:h-80 flex-shrink-0 clipping">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="w-full md:w-1/2">
        <h4 className="font-serif text-2xl md:text-3xl font-medium mb-1 text-ink">
          {item.title}
        </h4>
        <p
          className={`marginalia${reversed ? ' marginalia-tilt-right' : ''} text-2xl mb-3`}
        >
          {item.genre}
        </p>
        <p className="text-ink/80 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <p className="eyebrow mb-4">05 &mdash; Portfolio</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink">Selected Work</h2>
      </div>

      <div className="mb-28">
        <p className="eyebrow mb-10">05a &mdash; TV Pilots</p>
        <div className="space-y-20">
          {tvPilots.map((pilot, index) => (
            <PortfolioRow key={pilot.title} item={pilot} index={index} />
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-10">05b &mdash; Screenplays</p>
        <div className="space-y-20">
          {screenplays.map((screenplay, index) => (
            <PortfolioRow key={screenplay.title} item={screenplay} index={index} />
          ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="text-sm text-muted italic">
          *Images used purely for representation
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
