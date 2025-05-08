import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid3X3, List, ChevronDown, Clock, Star } from 'lucide-react';
import { mockSongs } from '../data/mockData';
import SongCard from '../components/song/SongCard';

type SortOption = 'popular' | 'newest' | 'highest-rated' | 'name';
type ViewMode = 'grid' | 'list';

const PopularPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  
  // Get all unique genres
  const allGenres = Array.from(new Set(mockSongs.flatMap(song => song.genre || [])));
  
  // Sort and filter songs
  const sortedAndFilteredSongs = [...mockSongs]
    .filter(song => selectedGenres.length === 0 || song.genre?.some(g => selectedGenres.includes(g)))
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.rating - a.rating; // For simplicity, using rating as popularity
        case 'highest-rated':
          return b.rating - a.rating;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'newest':
          // In a real app, would use release date, using random for demo
          return Math.random() - 0.5;
        default:
          return 0;
      }
    });
  
  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Most Popular Funk</h1>
          <p className="text-xl text-gray-300">
            Discover the hottest funk tracks our community is loving right now.
          </p>
        </div>
        
        {/* Controls Bar */}
        <div className="bg-blue-900 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-800 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ml-2 ${viewMode === 'list' ? 'bg-blue-800 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <List className="h-5 w-5" />
            </button>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="ml-4 text-gray-300 hover:text-white flex items-center"
            >
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-400 mr-3">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-blue-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="highest-rated">Highest Rated</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
        
        {/* Filters (Conditional) */}
        {showFilters && (
          <div className="bg-blue-900 rounded-lg p-4 mb-8 animate-fade-in">
            <h3 className="text-white font-medium mb-3">Filter by Genre</h3>
            <div className="flex flex-wrap gap-2">
              {allGenres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedGenres.includes(genre)
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-800 text-gray-300 hover:bg-blue-700'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedAndFilteredSongs.map((song) => (
              <SongCard
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                coverImage={song.coverImage}
                rating={song.rating}
              />
            ))}
          </div>
        )}
        
        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-2">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 py-2 border-b border-blue-800 text-gray-400 text-sm">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Title</div>
              <div className="col-span-3">Artist</div>
              <div className="col-span-2">Genre</div>
              <div className="col-span-1 flex items-center"><Clock className="h-4 w-4" /></div>
              <div className="col-span-1 flex items-center"><Star className="h-4 w-4" /></div>
            </div>
            
            {sortedAndFilteredSongs.map((song, index) => (
              <Link 
                key={song.id}
                to={`/song/${song.id}`}
                className="grid grid-cols-12 gap-4 py-3 px-2 rounded-lg hover:bg-blue-900 transition-colors items-center"
              >
                <div className="col-span-1 text-gray-400">{index + 1}</div>
                <div className="col-span-4 flex items-center">
                  <img 
                    src={song.coverImage} 
                    alt={song.title} 
                    className="h-10 w-10 object-cover rounded mr-3"
                  />
                  <span className="text-white font-medium">{song.title}</span>
                </div>
                <div className="col-span-3 text-gray-300">{song.artist}</div>
                <div className="col-span-2 text-gray-400 text-sm">
                  {song.genre?.slice(0, 2).join(', ')}
                  {(song.genre?.length || 0) > 2 && '...'}
                </div>
                <div className="col-span-1 text-gray-400">3:45</div>
                <div className="col-span-1 flex items-center text-yellow-400">
                  <Star className="h-4 w-4 fill-yellow-400 mr-1" />
                  <span>{song.rating.toFixed(1)}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {/* Empty State */}
        {sortedAndFilteredSongs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-300 text-xl mb-4">
              No songs found matching your filters
            </p>
            <button
              onClick={() => setSelectedGenres([])}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularPage;