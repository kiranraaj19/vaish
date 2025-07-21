const PressBuzz = () => {
  const pressItems = [
    {
      title: 'Meet Vaishnavi Padmanathan,',
      author: 'by Staff Writer, Voyage LA',
      url: 'https://voyagela.com/interview/meet-vaishnavi-padmanathan-of-koreatown/'
    },
    {
      title: 'Meet Writer Vaishnavi Padmanathan,',
      author: 'by Staff Writer, SHOUTOUT LA',
      url: 'https://shoutoutla.com/meet-vaishnavi-padmanathan-writer/'
    },
    {
      title: 'LA-based Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,',
      author: 'by Staff Reporter, She Sight Magazine',
      url: 'https://shesightmag.com/la-based-vaishnavi-padmanathan-wants-to-writestories-that-make-people-seen/'
    },
    {
      title: 'Meet LA-Based Vaishnavi Padmanathan: A Young Writer With A Lot Of Stories To Tell,',
      author: 'by Mid-Day',
      url: 'https://www.mid-day.com/brand-media/article/on-a-mission-meet-la-based-vaishnavi-padmanathan-a-young-writer-with-a-lot-23274542'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">📰 Press Buzz</h2>
      <div className="space-y-6">
        {pressItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
              <h3 className="font-serif text-lg md:text-xl italic mb-2 md:mb-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent border-b border-muted/30 hover:border-accent transition-colors"
                >
                  &ldquo;{item.title}&rdquo;
                </a>
              </h3>
              <div className="text-sm text-gray-600">
                <span>{item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressBuzz; 