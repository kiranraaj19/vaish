'use client';

import { useEffect, useState } from 'react';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
        I am Vaishnavi Padmanathan (she/her), a writer from India, now based in Los Angeles. You will probably find me typing away with fury at my desk.
      </h1>
    </div>
  );
};

export default Landing; 