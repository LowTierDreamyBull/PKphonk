import { SongData, ArtistData } from '../types';

export const mockSongs: SongData[] = [
  {
    id: '1',
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    album: 'Uptown Special',
    coverImage: 'https://images.pexels.com/photos/1247671/pexels-photo-1247671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    genre: ['Funk', 'Pop']
  },
  {
    id: '2',
    title: 'Superstition',
    artist: 'Stevie Wonder',
    album: 'Talking Book',
    coverImage: 'https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    genre: ['Funk', 'Soul']
  },
  {
    id: '3',
    title: 'Get Lucky',
    artist: 'Daft Punk ft. Pharrell Williams',
    album: 'Random Access Memories',
    coverImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    genre: ['Funk', 'Electronic', 'Dance']
  },
  {
    id: '4',
    title: 'Play That Funky Music',
    artist: 'Wild Cherry',
    album: 'Wild Cherry',
    coverImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    genre: ['Funk', 'Rock']
  },
  {
    id: '5',
    title: 'September',
    artist: 'Earth, Wind & Fire',
    album: 'The Best of Earth, Wind & Fire, Vol. 1',
    coverImage: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    genre: ['Funk', 'Disco', 'Soul']
  },
  {
    id: '6',
    title: 'Jungle Boogie',
    artist: 'Kool & The Gang',
    album: 'Wild and Peaceful',
    coverImage: 'https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    genre: ['Funk', 'R&B']
  },
  {
    id: '7',
    title: 'Give Up The Funk',
    artist: 'Parliament',
    album: 'Mothership Connection',
    coverImage: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    genre: ['P-Funk', 'Funk']
  },
  {
    id: '8',
    title: '24K Magic',
    artist: 'Bruno Mars',
    album: '24K Magic',
    coverImage: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    genre: ['Funk', 'R&B', 'Pop']
  }
];

export const mockArtists: ArtistData[] = [
  {
    id: '1',
    name: 'Bruno Mars',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'American singer, songwriter, and record producer known for his retro showmanship.'
  },
  {
    id: '2',
    name: 'Stevie Wonder',
    image: 'https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'American singer, songwriter, musician and record producer, a prominent figure in popular music.'
  },
  {
    id: '3',
    name: 'Earth, Wind & Fire',
    image: 'https://images.pexels.com/photos/2118046/pexels-photo-2118046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'American band that has spanned the musical genres of R&B, soul, funk, jazz, disco, pop, dance, and Afro pop.'
  },
  {
    id: '4',
    name: 'James Brown',
    image: 'https://images.pexels.com/photos/3692702/pexels-photo-3692702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'American singer, dancer, musician, record producer, and bandleader. The founding father of funk music.'
  }
];

export const sectionSlides = [
  {
    id: 's1',
    title: 'Classic Funk Collection',
    description: 'Explore the foundational tracks that defined the funk genre from the 1960s and 1970s.',
    imageUrl: 'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkUrl: '/genres/classic-funk'
  },
  {
    id: 's2',
    title: 'Groove Studio',
    description: 'Create your own funk-inspired playlists and share them with the FunkHub community.',
    imageUrl: 'https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkUrl: '/studio'
  },
  {
    id: 's3',
    title: 'Artist Spotlight',
    description: 'Deep dive into the careers and catalogs of legendary funk artists.',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkUrl: '/artists'
  },
  {
    id: 's4',
    title: 'Funk Evolution',
    description: 'Discover how funk has evolved and influenced modern music through the decades.',
    imageUrl: 'https://images.pexels.com/photos/2118045/pexels-photo-2118045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkUrl: '/evolution'
  }
];

export const featuredArtists = mockArtists.slice(0, 4);
export const trendingSongs = [...mockSongs].sort(() => 0.5 - Math.random()).slice(0, 8);
export const classicFunk = mockSongs.filter(song => song.genre?.includes('Funk') && song.genre?.includes('Soul'));
export const newReleases = [...mockSongs].sort(() => 0.5 - Math.random()).slice(0, 8);