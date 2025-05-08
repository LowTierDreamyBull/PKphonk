import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Here you would implement the actual search functionality
  };
  
  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className={`flex items-center bg-blue-800/50 rounded-lg border ${isFocused ? 'border-blue-400' : 'border-blue-700'}`}>
        <Search className="ml-3 h-5 w-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for artists, songs, or albums..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-grow px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="text-gray-400 hover:text-white mr-1"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="ml-2 mr-3 text-gray-400 hover:text-white"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default SearchBar;