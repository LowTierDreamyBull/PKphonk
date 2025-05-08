export interface SongData {
  id: string;
  title: string;
  artist: string;
  album?: string;
  coverImage: string;
  audioSrc?: string;
  duration?: number;
  rating: number;
  releaseDate?: string;
  genre?: string[];
}

export interface ArtistData {
  id: string;
  name: string;
  image: string;
  bio?: string;
  popularSongs?: SongData[];
}

export interface UserData {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  favorites?: string[]; // song ids
}

export interface CommentData {
  id: string;
  userId: string;
  username: string;
  text: string;
  timestamp: string;
  likes: number;
}