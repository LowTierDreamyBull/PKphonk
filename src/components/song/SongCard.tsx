import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, Star } from 'lucide-react';

interface SongCardProps {
  id: string;
  title: string;
  artist: string;
  coverImage: string;
  rating: number;
}

const SongCard: React.FC<SongCardProps> = ({ id, title, artist, coverImage, rating }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div 
      className="group relative bg-blue-900 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/song/${id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img 
            src={coverImage} 
            alt={`${title} by ${artist}`} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent opacity-80 transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
          
          {/* Play button (appears on hover) */}
          <button 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <Play className="h-6 w-6 text-white" fill="white" />
          </button>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-white truncate">
              {title}
            </h3>
            <p className="text-sm text-gray-300">
              {artist}
            </p>
          </div>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <Heart 
              className={`h-5 w-5 ${isFavorite ? 'text-pink-500 fill-pink-500' : ''}`} 
            />
          </button>
        </div>
        
        <div className="mt-3 flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="ml-1 text-sm text-gray-300">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;