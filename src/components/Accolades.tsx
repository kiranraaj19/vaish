'use client';

import Image from 'next/image';

const Accolades = () => {
  const accolades = [
    {
      image: '/static/accomplishments/accolades/CMAFellowShip.png',
      title: 'CHILDREN’S MEDIA ASSOCIATION FELLOWSHIP 2025',
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
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">🏆 Accolades</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {accolades.map((accolade, index) => (
          <div key={index} className="beautiful-card">
            <div className="relative h-48 flex items-center justify-center bg-white">
              <Image
                src={accolade.image}
                alt={accolade.title}
                fill
                className="object-contain"
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
  );
};

export default Accolades; 