import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share2, MessageCircle, Star, ArrowLeft } from 'lucide-react';
import { mockSongs } from '../data/mockData';

const SongDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  
  // Find the song by id
  const song = mockSongs.find(song => song.id === id);
  
  if (!song) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Song not found</h2>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Return to home
        </Link>
      </div>
    );
  }
  
  // Get related songs (same artist or genre)
  const relatedSongs = mockSongs
    .filter(s => s.id !== song.id && (s.artist === song.artist || s.genre?.some(g => song.genre?.includes(g))))
    .slice(0, 4);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  // Mock comments
  const comments = [
    {
      id: 'c1',
      username: 'FunkMaster',
      text: 'This track never gets old! The bassline is incredible.',
      timestamp: '2 days ago',
      likes: 12
    },
    {
      id: 'c2',
      username: 'GrooveLover',
      text: 'One of my all-time favorites. Pure funk perfection!',
      timestamp: '1 week ago',
      likes: 24
    }
  ];
  
  return (
    <div className="pt-20">
      {/* Header with cover art and basic info */}
      <div 
        className="relative bg-center bg-cover h-[400px]" 
        style={{ backgroundImage: `url(${song.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-blue-900/70 to-blue-900/30"></div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <Link to="/" className="absolute top-4 left-4 text-white hover:text-blue-400 transition-colors flex items-center">
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>Back</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end">
            <div className="hidden md:block md:w-56 md:h-56 flex-shrink-0 rounded-lg overflow-hidden shadow-xl mr-8 mb-4">
              <img 
                src={song.coverImage} 
                alt={song.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="text-sm text-blue-400 mb-1">
                {song.genre?.join(' • ')}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {song.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {song.artist}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={togglePlay}
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-5 w-5 mr-2" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" fill="white" />
                      <span>Play</span>
                    </>
                  )}
                </button>
                
                <button 
                  onClick={toggleFavorite}
                  className={`flex items-center px-4 py-3 rounded-full transition-colors ${
                    isFavorite ? 'bg-pink-600 text-white' : 'bg-blue-800 text-gray-300 hover:bg-blue-700'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-white' : ''}`} />
                </button>
                
                <button className="flex items-center px-4 py-3 bg-blue-800 hover:bg-blue-700 text-gray-300 rounded-full transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Player and content */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Audio Player */}
          <div className="bg-blue-900 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipBack className="h-5 w-5" />
                </button>
                <button 
                  onClick={togglePlay}
                  className="h-10 w-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" fill="white" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-grow mx-6">
                <div className="relative h-1 bg-blue-800 rounded-full">
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-1/3 top-0 bottom-0 h-3 w-3 -mt-1 rounded-full bg-blue-400 shadow"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1:24</span>
                  <span>4:12</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Volume2 className="h-5 w-5 text-gray-400" />
                <div className="relative w-24 h-1 bg-blue-800 rounded-full">
                  <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Song Info */}
            <div className="lg:col-span-2">
              <div className="bg-blue-900 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">About this track</h2>
                <p className="text-gray-300 mb-4">
                  {song.title} is a funk masterpiece by {song.artist}, 
                  featured on the album {song.album}. This track showcases the 
                  signature funk sound with its groovy bassline, rhythmic guitar, 
                  and energetic horn section.
                </p>
                <p className="text-gray-300">
                  The song has become a fan favorite and is often cited as 
                  one of the defining tracks in the {song.genre?.join('/')} genre(s).
                </p>
                
                <div className="mt-6 border-t border-blue-800 pt-6">
                  <h3 className="text-lg font-medium text-white mb-3">Rate this track</h3>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="mr-1"
                      >
                        <Star 
                          className={`h-6 w-6 ${
                            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-gray-400">
                      {rating > 0 ? `Your rating: ${rating}/5` : 'Click to rate'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Comments */}
              <div className="bg-blue-900 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Comments</h2>
                  <span className="text-gray-400">{comments.length} comments</span>
                </div>
                
                <form className="mb-8">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full px-4 py-3 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                  ></textarea>
                  <div className="mt-3 flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
                
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-t border-blue-800 pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-semibold">
                            {comment.username.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <div className="font-medium text-white">{comment.username}</div>
                            <div className="text-xs text-gray-400">{comment.timestamp}</div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                          Reply
                        </button>
                      </div>
                      <p className="text-gray-300 mt-2">{comment.text}</p>
                      <div className="mt-3 flex items-center">
                        <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                          <Heart className="h-4 w-4 mr-1" />
                          <span className="text-xs">{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Related Songs */}
            <div>
              <div className="bg-blue-900 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">More from this artist</h2>
                <div className="space-y-4">
                  {relatedSongs.map((relatedSong) => (
                    <Link 
                      key={relatedSong.id}
                      to={`/song/${relatedSong.id}`}
                      className="flex items-center p-2 hover:bg-blue-800 rounded-lg transition-colors"
                    >
                      <img 
                        src={relatedSong.coverImage} 
                        alt={relatedSong.title} 
                        className="w-12 h-12 object-cover rounded flex-shrink-0"
                      />
                      <div className="ml-3 overflow-hidden">
                        <h3 className="font-medium text-white truncate">{relatedSong.title}</h3>
                        <p className="text-sm text-gray-400 truncate">{relatedSong.artist}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-blue-800">
                  <h3 className="text-lg font-medium text-white mb-3">Track Info</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Album</span>
                      <span className="text-white">{song.album}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Genre</span>
                      <span className="text-white">{song.genre?.join(', ')}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Rating</span>
                      <span className="text-white flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        {song.rating.toFixed(1)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;