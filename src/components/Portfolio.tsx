'use client';

import Image from 'next/image';

interface PortfolioItem {
  image: string;
  title: string;
  genre: string;
  description: string;
}

const Portfolio = () => {
  const tvPilots: PortfolioItem[] = [
    {
      image: '/static/tvpilots/JustMiddleClassThings.png',
      title: 'JUST MIDDLE CLASS THINGS',
      genre: 'half-hour comedy',
      description: 'In the late 90s, when the Menons move into a house provided by the father’s job, everyone struggles to fit in with the new neighbor who are the father’s coworkers.'
    },
    {
      image: '/static/tvpilots/ThePostGraduate.png',
      title: 'THE POSTGRADUATE',
      genre: 'half-hour dramedy',
      description: 'A postgraduate student begins a relationship with her academic mentor\'s husband.'
    },
    {
      image: '/static/tvpilots/PregnantPause.jpeg',
      title: 'PREGNANT PAUSE',
      genre: 'half-hour comedy',
      description: 'An Indian female standup\'s rise to fame and the lengths she will go to make her dream a reality.'
    }
  ];

  const screenplays: PortfolioItem[] = [
    {
      image: '/static/screenplays/RiteOfPassage.png',
      title: 'RITE OF PASSAGE',
      genre: 'drama',
      description: 'When Velli\'s father dies suddenly while visiting his hometown in Tamil Nadu, city-bred Velli is forced to sit through a number of Hindu mourning rituals, none of which allows a daughter to grieve her father in the way she wishes to.'
    },
    {
      image: '/static/screenplays/OwnWorstEnemy.png',
      title: 'I AM MY OWN WORST ENEMY',
      genre: 'comedy',
      description: 'A 30-year-old Riya gets the opportunity to go back in time and guide her teenage self so that she can marry her long-time crush in the present.'
    },
    {
      image: '/static/screenplays/AnybodyCanBeACrorepati.png',
      title: 'ANYBODY CAN BE A CROREPATI',
      genre: 'action-comedy',
      description: 'Inspired by real-life events, a lottery winner must find a way to collect his windfall without losing his life or sanity in the process.'
    }
  ];

  const PortfolioItemComponent = ({ item }: { item: PortfolioItem }) => (
    <div className="beautiful-card">
      <div className="relative h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h4 className="font-serif text-xl font-medium mb-2 text-foreground">{item.title}</h4>
        <p className="text-sm text-muted mb-3 font-medium">{item.genre}</p>
        <p className="text-foreground/80 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Portfolio</h2>
      
      {/* TV Pilots Section */}
      <div className="mb-20">
        <h3 className="font-serif text-2xl md:text-3xl mb-12 text-center">📺 TV Pilots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tvPilots.map((pilot, index) => (
            <PortfolioItemComponent key={index} item={pilot} />
          ))}
        </div>
      </div>

      {/* Screenplays Section */}
      <div className="mb-12">
        <h3 className="font-serif text-2xl md:text-3xl mb-12 text-center">🎬 Screenplays</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenplays.map((screenplay, index) => (
            <PortfolioItemComponent key={index} item={screenplay} />
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <p className="text-sm text-muted italic">*Images used purely for representation</p>
      </div>
    </div>
  );
};

export default Portfolio; 