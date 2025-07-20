'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64">
            <Image
              src="/static/profilepic/VaishPicture.jpg"
              alt="Vaishnavi Padmanathan"
              fill
              className="profile-picture object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            I am Vaishnavi Padmanathan (she/her), a writer from India, now based in Los Angeles. You will probably find me typing away with fury at my desk.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing; 