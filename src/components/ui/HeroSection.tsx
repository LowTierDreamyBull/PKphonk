import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/70 to-gray-900"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Experience the Groove of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Funk Music</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover the rhythm, soul, and energy of funk — from classic tracks to modern hits. 
            Dive into the world of infectious basslines, syncopated rhythms, and soulful vocals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-xl">
              Explore Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-medium rounded-full transition-colors">
              Popular Tracks
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-4">
            <span className="text-gray-400">Featuring:</span>
            <div className="flex space-x-2">
              <img 
                src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Artist" 
                className="h-8 w-8 rounded-full border-2 border-blue-400 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Artist" 
                className="h-8 w-8 rounded-full border-2 border-blue-400 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/3692702/pexels-photo-3692702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Artist" 
                className="h-8 w-8 rounded-full border-2 border-blue-400 object-cover"
              />
              <div className="h-8 w-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-medium">
                +50
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 w-full h-20 text-gray-900 fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C10,10,40,32,100,42c57,10,150,8,250-12C432,12,517-2,571,1,605,3,658,22,700,40s100,46,200,50,300-10,350-20Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;