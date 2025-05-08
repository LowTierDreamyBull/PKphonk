import React from 'react';
import { Link } from 'react-router-dom';

const genres = [
  {
    id: 'classic-funk',
    name: 'Classic Funk',
    description: 'The foundational funk sounds from the 1960s and 1970s.',
    imageUrl: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'p-funk',
    name: 'P-Funk',
    description: 'Psychedelic funk pioneered by Parliament-Funkadelic.',
    imageUrl: 'https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'funk-rock',
    name: 'Funk Rock',
    description: 'A fusion of funk and rock elements with electric guitars and heavy grooves.',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'jazz-funk',
    name: 'Jazz Funk',
    description: 'A jazzy take on funk with complex harmonies and improvisations.',
    imageUrl: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'disco-funk',
    name: 'Disco Funk',
    description: 'Funk with a disco influence, featuring dance floor-ready beats.',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'neo-funk',
    name: 'Neo Funk',
    description: 'Modern interpretations of funk music with contemporary production techniques.',
    imageUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'electro-funk',
    name: 'Electro Funk',
    description: 'Funk with electronic elements and synthesizers.',
    imageUrl: 'https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'funk-soul',
    name: 'Funk Soul',
    description: 'A soulful take on funk with emotional vocals and melodic hooks.',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const GenrePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Funk Genres</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the different styles and subgenres that make funk music so diverse and vibrant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <Link 
              key={genre.id}
              to={`/genres/${genre.id}`}
              className="group relative block rounded-lg overflow-hidden bg-blue-900 hover:bg-blue-800 transition-colors"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={genre.imageUrl}
                  alt={genre.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent"></div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0">
                <h2 className="text-xl font-bold text-white mb-1">{genre.name}</h2>
                <p className="text-gray-300 text-sm">{genre.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-900 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">Funk Music History</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Funk originated in the mid-1960s, combining elements of soul, jazz, and R&B. 
              It's characterized by a strong rhythmic groove with emphasis on the first beat of the bar, 
              and is known for its syncopated basslines, electric guitars, and horn sections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-800 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">1960s - Origins</h3>
              <p className="text-gray-300">
                James Brown and his band pioneered the funk sound, with hits like "Papa's Got a Brand New Bag" 
                showcasing the emphasized downbeat and rhythmic complexity that would define the genre.
              </p>
            </div>
            <div className="bg-blue-800 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">1970s - Golden Era</h3>
              <p className="text-gray-300">
                Artists like Parliament-Funkadelic, Sly and the Family Stone, and Earth, Wind & Fire took funk 
                to new heights with elaborate arrangements and psychedelic influences.
              </p>
            </div>
            <div className="bg-blue-800 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Modern Evolution</h3>
              <p className="text-gray-300">
                Funk continues to evolve through artists like Bruno Mars and Anderson .Paak, while its DNA lives on 
                in hip-hop sampling, electronic dance music, and contemporary R&B.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrePage;