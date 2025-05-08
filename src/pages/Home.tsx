import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import SongCarousel from '../components/song/SongCarousel';
import SectionSlider from '../components/ui/SectionSlider';
import { mockSongs, trendingSongs, classicFunk, newReleases, sectionSlides } from '../data/mockData';
import { Disc3, Headphones, Music2, Users } from 'lucide-react';

const featuresData = [
  {
    icon: <Headphones className="h-8 w-8 text-blue-400" />,
    title: 'High-Quality Audio',
    description: 'Experience all the nuances of funk music with our premium audio streaming.'
  },
  {
    icon: <Music2 className="h-8 w-8 text-blue-400" />,
    title: 'Curated Playlists',
    description: 'Discover expertly curated playlists that showcase the best of funk across eras.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: 'Community Ratings',
    description: 'See what the funk community loves and contribute your own ratings.'
  },
  {
    icon: <Disc3 className="h-8 w-8 text-blue-400" />,
    title: 'Artist Spotlights',
    description: 'Deep dive into the stories and catalogs of legendary funk artists.'
  }
];

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <SongCarousel 
        title="Trending Now" 
        description="The hottest funk tracks our community is loving"
        songs={trendingSongs}
      />
      
      <SectionSlider slides={sectionSlides} />
      
      <SongCarousel 
        title="Classic Funk Collection" 
        description="Timeless funk tracks from the golden era"
        songs={classicFunk}
      />
      
      {/* Features Section */}
      <section className="py-16 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The Ultimate Funk Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              FunkHub offers everything you need to discover, enjoy, and connect through the power of funk music.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={index}
                className="bg-blue-900 p-6 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SongCarousel 
        title="New Releases" 
        description="Fresh funk tracks to keep your groove going"
        songs={newReleases}
      />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay in the Groove</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and be the first to know about new funk releases, 
              exclusive content, and upcoming events.
            </p>
            <form className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[280px] sm:min-w-[320px]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;