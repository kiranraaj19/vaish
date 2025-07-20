'use client';

import { useEffect, useRef, useState } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [contentScrolled, setContentScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return;
      
      const container = containerRef.current;
      const content = contentRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const contentHeight = content.scrollHeight;
      const containerHeight = container.offsetHeight;
      const maxScroll = Math.max(0, contentHeight - containerHeight);
      
      // Calculate when to start sticky behavior
      const stickyStart = windowHeight * 0.5; // Start when section is 50% in view
      const stickyEnd = windowHeight + contentHeight - containerHeight;
      
      if (rect.top <= stickyStart && rect.bottom >= stickyEnd) {
        // Sticky phase - section is fixed, content scrolls
        setIsSticky(true);
        const scrollProgress = (windowHeight - rect.top) / (stickyEnd - stickyStart);
        const currentScroll = Math.min(maxScroll, scrollProgress * maxScroll);
        setContentScrolled(currentScroll);
        content.style.transform = `translateY(-${currentScroll}px)`;
      } else if (rect.top > stickyStart) {
        // Before sticky phase
        setIsSticky(false);
        setContentScrolled(0);
        content.style.transform = 'translateY(0)';
      } else {
        // After sticky phase - allow normal scrolling
        setIsSticky(false);
        setContentScrolled(maxScroll);
        content.style.transform = `translateY(-${maxScroll}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`about-container min-h-screen flex items-center justify-center px-4 py-20 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-10' : 'relative'
      }`}
    >
      <div className="about-background"></div>
      <div 
        ref={contentRef} 
        className="about-content max-w-4xl mx-auto transition-transform duration-300 ease-out"
      >
        <div className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-center">
          <p className="mb-8">
            I am an Indian writer for television and screen who has been asking the question 'Why not?' to everything since I was a kid. As my parents did not have the answers to my constant questioning of the world, I started investigating my queries in my daydreams. Those daydreams have now taken the form of a lifelong quest for storytelling. I settled on this as my life's purpose only after majoring in journalism where I learned the useful inverted pyramid and made a bunch of zero-budget student films.
          </p>
          
          <p className="mb-8">
            Although I hold an MFA degree in Dramatic Writing from New York University's Tisch School of the Arts, I hold my (functionally dysfunctional) family more dear as they are my biggest source of inspiration in life and my writings. I tend to write all of my stories as letters to my loved ones. I also like to make sure that each story of mine has humor and specificity at its core. Once upon a time, I used to feel like I am traveling the world when I consumed a story a day, and that's what I wish and hope for the folks who experience my work.
          </p>
          
          <p>
            And one last thing to know about me, I plan to build my own secret library one day so that I can daydream (and write) in peace.
          </p>
        </div>
      </div>
      
      {/* Spacer to maintain scroll height when section is fixed */}
      {isSticky && (
        <div className="h-screen"></div>
      )}
    </div>
  );
};

export default About; 