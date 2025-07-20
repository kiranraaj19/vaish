'use client';

import Image from 'next/image';

const Credits = () => {
  const credits = [
    {
      image: '/static/accomplishments/credits/BennyBirthdayBook.png',
      title: 'HOP Series',
      subtitle: 'Episodic Writer'
    },
    {
      image: '/static/accomplishments/credits/Shpringadink.png',
      title: 'HOP Series',
      subtitle: 'Episodic Writer'
    },
    {
      video: 'https://www.youtube.com/watch?v=kgnJFZZV728',
      title: 'OH! BABY',
      subtitle: 'Feature Film',
      role: 'Assistant Producer'
    },
    {
      image: '/static/accomplishments/credits/SearchingForTheGood.jpeg',
      title: 'SEARCHING FOR THE GOOD',
      subtitle: 'Audio Play',
      role: 'Co-writer'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">📺 Credits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {credits.map((credit, index) => (
          <div key={index} className="beautiful-card">
            {credit.image ? (
              <div className="relative h-48">
                <Image
                  src={credit.image}
                  alt={credit.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : credit.video ? (
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                <iframe
                  src={credit.video.replace('watch?v=', 'embed/')}
                  title={credit.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}
            
            <div className="p-6">
              <h4 className="font-serif text-lg font-medium mb-2 text-foreground">{credit.title}</h4>
              <p className="text-sm text-muted mb-1">{credit.subtitle}</p>
              {credit.role && (
                <p className="text-sm text-muted/80">{credit.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits; 