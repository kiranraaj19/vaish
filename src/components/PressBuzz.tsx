const PressBuzz = () => {
  const pressItems = [
    {
      title: "Meet Vaishnavi Padmanathan,",
      author: "by Staff Writer",
      publication: "Voyage LA"
    },
    {
      title: "On A Mission: LA-based Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,",
      author: "by Zee Media Bureau",
      publication: "Zee News"
    },
    {
      title: "LA-based Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,",
      author: "by Staff Writer",
      publication: "She Sight Magazine"
    },
    {
      title: "On A Mission: LA-based Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,",
      author: "by Vishal Jasani",
      publication: "The Free Press Journal"
    },
    {
      title: "Vaishnavi Padmanathan, LA-based Young Writer: Most of my stories are deeply personal inspired by a truth in life that I have learned,",
      author: "by Staff Writer",
      publication: "Outlook India"
    },
    {
      title: "On A Mission: LA-Based Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,",
      author: "by Staff Writer",
      publication: "Ahmedabad Mirror"
    },
    {
      title: "On A Mission: LA-based Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,",
      author: "by Staff Writer",
      publication: "PTI News"
    },
    {
      title: "On A Mission LA-based Vaishnavi Padmanathan Wants To Write Stories That Make People Seen,",
      author: "by Staff Writer",
      publication: "The Week"
    },
    {
      title: "Meet LA-Based Vaishnavi Padmanathan: A Young Writer With A Lot of Stories To Tell,",
      author: "by Staff Writer",
      publication: "Mid-Day"
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
                "{item.title}"
              </h3>
              <div className="text-sm text-gray-600">
                <span>{item.author}</span>
                <span className="mx-2">•</span>
                <span className="font-medium">{item.publication}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressBuzz; 