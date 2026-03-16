import React, { useEffect, useState } from 'react';

const HN_API = 'https://hacker-news.firebaseio.com/v0';

const timeAgo = (unixTime) => {
  const seconds = Math.floor(Date.now() / 1000 - unixTime);
  if (seconds < 3600) return `${Math.floor(seconds / 60)} mins`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours`;
  return `${Math.floor(seconds / 86400)} days`;
};

const getDomain = (url) => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return 'news.ycombinator.com';
  }
};

const StoryItem = ({ story }) => {
  const domain = getDomain(story.url);
  const storyUrl = story.url || `https://news.ycombinator.com/item?id=${story.id}`;

  return (
    <div className="font-sans h-full flex flex-col justify-center">
      <a
        href={storyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block outline-none"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-[26px] h-[26px] flex items-center justify-center bg-[#f1f3f4] rounded-full shrink-0">
            <img 
              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`} 
              alt="" 
              className="w-4 h-4"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="flex flex-col max-w-full overflow-hidden">
            <span className="text-[14px] text-[#202124] leading-tight truncate">
              {domain}
            </span>
            <span className="text-[12px] text-[#4d5156] leading-tight truncate">
              https://{domain}
            </span>
          </div>
        </div>
        <h3 className="text-[20px] text-blue-500 group-hover:underline leading-[1.3] mb-1 inline-block line-clamp-2">
          {story.title}
        </h3>
      </a>
      <div className="text-[14px] text-[#4d5156] leading-[1.58] mt-0.5 line-clamp-3">
        <span className="text-[#70757a] font-medium mr-1">{timeAgo(story.time)} ago —</span>
        Top story from Hacker News discussing `{story.title}` with insights from {domain}. Click to read the full article and join the community discussion.
      </div>
    </div>
  );
};

const NewsComponent = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(`${HN_API}/topstories.json`);
        const ids = await res.json();

        // Fetch top 5 stories for the carousel
        const storyPromises = ids.slice(0, 5).map(id =>
          fetch(`${HN_API}/item/${id}.json`).then(r => r.json())
        );
        const fetched = await Promise.all(storyPromises);
        setStories(fetched.filter(s => s && s.title && s.url));
      } catch (error) {
        console.error('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    if (stories.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [stories]);

  if (loading) {
    return (
      <div className="hidden sm:flex flex-col font-sans h-full p-2">
        <div className="flex items-center gap-2 mb-6 cursor-pointer shrink-0">
           <svg focusable="false" viewBox="0 0 24 24" className="w-5 h-5 text-[#70757a]"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"></path></svg>
           <span className="text-[#202124] text-[15px] hover:underline">Loading results...</span>
        </div>
        <div className="flex-grow flex flex-col justify-center">
            <div className="animate-pulse">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[26px] h-[26px] bg-gray-200 rounded-full"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                  <div className="h-2 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
              <div className="h-5 bg-[#e8e8e8] rounded w-full max-w-[400px] mb-2"></div>
              <div className="h-5 bg-[#e8e8e8] rounded w-4/5 max-w-[350px] mb-2"></div>
              <div className="h-3 bg-[#f1f3f4] rounded w-full mt-4"></div>
              <div className="h-3 bg-[#f1f3f4] rounded w-full mt-2"></div>
              <div className="h-3 bg-[#f1f3f4] rounded w-2/3 mt-2"></div>
            </div>
        </div>
      </div>
    );
  }

  if (stories.length === 0) return null;

  return (
    <div className="hidden sm:flex flex-col font-sans h-full p-2">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#ebebeb] shrink-0">
        <div className="flex items-center gap-2">
          <svg focusable="false" viewBox="0 0 24 24" className="w-5 h-5 text-[#70757a]"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"></path></svg>
          <span className="text-[#202124] text-[16px] font-normal">Related to your interests</span>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="flex-grow relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {stories.map((story) => (
            <div key={story.id} className="min-w-full h-full px-1">
              <StoryItem story={story} />
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-1">
          {stories.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`} 
            />
          ))}
        </div>
      </div>

      <div className="mt-4 pt-2 shrink-0 flex justify-center">
        <a
          href="https://news.ycombinator.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[12px] text-blue-500 hover:underline bg-[#f8f9fa] border border-[#dadce0] rounded-full px-4 py-1.5 font-medium transition-colors hover:bg-gray-50 hover:shadow-sm"
        >
          Explore Hacker News
        </a>
      </div>
    </div>
  );
};

export default NewsComponent;

