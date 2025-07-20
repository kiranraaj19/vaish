'use client';

import Image from 'next/image';

const Accomplishments = () => {
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

  const accolades = [
    {
      image: '/static/accomplishments/accolades/CMAFellowShip.png',
      title: 'CMA FELLOWSHIP 2025',
      subtitle: 'SEMIFINALIST'
    },
    {
      image: '/static/accomplishments/accolades/MentorshipMatters.png',
      title: 'MENTORSHIP MATTERS 2024',
      subtitle: 'SEMIFINALIST'
    },
    {
      image: '/static/accomplishments/accolades/FusionFilmFestival.png',
      title: 'FUSION FILM FESTIVAL 2024',
      subtitle: 'WINNER',
      category: 'GRADUATE HALF HOUR PILOT'
    },
    {
      image: '/static/accomplishments/accolades/WritersAccessSupportStaff.png',
      title: 'WRITERS\' ACCESS SUPPORT STAFF TRAINING PROGRAM 2023',
      subtitle: 'SEMIFINALIST'
    },
    {
      image: '/static/accomplishments/accolades/FusionFilmFestival.png',
      title: 'FUSION FILM FESTIVAL 2023',
      subtitle: 'HONORABLE MENTION',
      category: 'GRADUATE HALF HOUR PILOT'
    },
    {
      image: '/static/accomplishments/accolades/GroupEffortInitiative.png',
      title: 'GROUP EFFORT INITIATIVE MENTORSHIP PROGRAM 2022',
      subtitle: 'MENTEE'
    },
    {
      image: '/static/accomplishments/accolades/NickelodeonWritingProgram.png',
      title: 'NICK WRITING PROGRAM 2022',
      subtitle: 'SEMIFINALIST'
    },
    {
      image: '/static/accomplishments/accolades/NyuTischGraduateAward.png',
      title: 'NYU TISCH GRADUATE AWARD FOR TV WRITING, 2022',
      subtitle: 'RECIPIENT'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Accomplishments</h2>
      
      {/* Credits Section */}
      <div className="mb-20">
        <h3 className="font-serif text-2xl md:text-3xl mb-12 text-center">📺 Credits</h3>
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

      {/* Accolades Section */}
      <div>
        <h3 className="font-serif text-2xl md:text-3xl mb-12 text-center">🏆 Accolades</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {accolades.map((accolade, index) => (
            <div key={index} className="beautiful-card">
              <div className="relative h-48">
                <Image
                  src={accolade.image}
                  alt={accolade.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-sm font-medium mb-2 text-foreground">{accolade.title}</h4>
                <p className="text-xs text-muted mb-1">{accolade.subtitle}</p>
                {accolade.category && (
                  <p className="text-xs text-muted/80">{accolade.category}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accomplishments; 