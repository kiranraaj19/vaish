'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { revealStagger } from '@/lib/scrollReveal';

const Credits = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    revealStagger(containerRef.current, '.credit-item');
  }, []);

  const credits = [
    {
      image: '/static/accomplishments/credits/BennyBirthdayBook.png',
      title: 'HOP',
      subtitle: 'Series',
      role: 'Episodic Writer',
      link: 'https://www.imdb.com/title/tt33113396/?ref_=nm_flmg_job_1_cdt_eps_tt_1',
      centered: true,
    },
    {
      image: '/static/accomplishments/credits/Shpringadink.png',
      title: 'HOP',
      subtitle: 'Series',
      role: 'Episodic Writer',
      link: 'https://gem.cbc.ca/hop',
    },
    {
      video: 'https://www.youtube.com/watch?v=kgnJFZZV728',
      title: 'OH! BABY',
      subtitle: 'Feature Film',
      role: 'Assistant Producer',
      link: 'https://www.youtube.com/watch?v=kgnJFZZV728',
    },
    {
      image: '/static/accomplishments/credits/SearchingForTheGood.jpeg',
      title: 'SEARCHING FOR THE GOOD',
      subtitle: 'Audio Play',
      role: 'Co-writer',
      link: 'https://soundcloud.com/goodsearchpodcast/play',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <p className="eyebrow mb-10">02 &mdash; Credits</p>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {credits.map((credit, index) => (
          <a
            key={index}
            href={credit.link}
            target="_blank"
            rel="noopener noreferrer"
            className="credit-item clipping block group"
          >
            {credit.image ? (
              <div
                className={`relative h-48 flex items-center justify-center ${
                  credit.centered ? 'bg-paper-soft' : ''
                }`}
              >
                <Image
                  src={credit.image}
                  alt={credit.title}
                  fill
                  className={credit.centered ? 'object-contain p-4' : 'object-cover'}
                />
              </div>
            ) : credit.video ? (
              <div className="relative h-48 bg-paper-soft flex items-center justify-center">
                <iframe
                  src={credit.video.replace('watch?v=', 'embed/')}
                  title={credit.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}
            <div className="p-5 border-t border-line">
              <h4 className="font-serif text-base font-medium mb-1 text-ink group-hover:text-accent transition-colors">
                {credit.title}
              </h4>
              <p className="text-xs uppercase tracking-wide text-muted mb-1">
                {credit.subtitle}
              </p>
              {credit.role && <p className="text-sm text-muted/80">{credit.role}</p>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Credits;
