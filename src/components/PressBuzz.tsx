'use client';

import { useEffect, useRef } from 'react';
import { revealStagger } from '@/lib/scrollReveal';

const pressItems = [
  {
    title: 'Meet Vaishnavi Padmanathan,',
    author: 'Staff Writer, Voyage LA',
    url: 'https://voyagela.com/interview/meet-vaishnavi-padmanathan-of-koreatown/',
  },
  {
    title: 'Meet Writer Vaishnavi Padmanathan,',
    author: 'Staff Writer, Shoutout LA',
    url: 'https://shoutoutla.com/meet-vaishnavi-padmanathan-writer/',
  },
  {
    title: 'Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,',
    author: 'Staff Reporter, She Sight Magazine',
    url: 'https://shesightmag.com/la-based-vaishnavi-padmanathan-wants-to-writestories-that-make-people-seen/',
  },
  {
    title:
      'On A Mission: Vaishnavi Padmanathan Wants To Write Stories That Make People Seen',
    author: 'Zee News',
    url: 'https://zeenews.india.com/blogs/on-a-mission-la-based-vaishnavi-padmanathan-wants-to-write-stories-that-make-people-seen-2588827.html',
  },
];

const PressBuzz = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    revealStagger(containerRef.current, '.press-item');
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <p className="eyebrow mb-10">04 &mdash; Press Buzz</p>

      <div ref={containerRef}>
        {pressItems.map((item, index) => (
          <div key={index} className="press-item py-7 border-b border-line">
            <p className="text-xs uppercase tracking-[0.15em] text-muted mb-3">
              {item.author}
            </p>
            <h3 className="font-serif text-xl md:text-2xl leading-snug">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent transition-colors border-b border-transparent hover:border-accent"
              >
                &ldquo;{item.title}&rdquo;
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressBuzz;
