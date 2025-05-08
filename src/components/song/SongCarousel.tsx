import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SongCard from './SongCard';
import { SongData } from '../../types';

interface SongCarouselProps {
  title: string;
  description?: string;
  songs: SongData[];
}

const SongCarousel: React.FC<SongCarouselProps> = ({ title, description, songs }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      setMaxScroll(scrollWidth - clientWidth);
    }
    
    const handleResize = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        setMaxScroll(scrollWidth - clientWidth);
        
        // Adjust scroll position if needed
        if (scrollPosition > scrollWidth - clientWidth) {
          setScrollPosition(Math.max(0, scrollWidth - clientWidth));
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [songs, scrollPosition]);
  
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);
      
      setScrollPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            {description && (
              <p className="text-gray-400 mt-1">{description}</p>
            )}
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              disabled={scrollPosition <= 0}
              className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${scrollPosition <= 0 ? 'text-gray-600 bg-blue-900/50 cursor-not-allowed' : 'text-white bg-blue-800 hover:bg-blue-700'}`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={scrollPosition >= maxScroll}
              className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${scrollPosition >= maxScroll ? 'text-gray-600 bg-blue-900/50 cursor-not-allowed' : 'text-white bg-blue-800 hover:bg-blue-700'}`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth"
        >
          {songs.map((song) => (
            <div 
              key={song.id} 
              className="min-w-[250px] sm:min-w-[280px] flex-shrink-0 pr-4"
            >
              <SongCard 
                id={song.id}
                title={song.title}
                artist={song.artist}
                coverImage={song.coverImage}
                rating={song.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongCarousel;