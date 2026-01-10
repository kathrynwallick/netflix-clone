import type { Movie } from '../types';

export const sampleMovies: Omit<Movie, '_id' | 'createdAt'>[] = [
  {
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.',
    genre: ['Sci-Fi', 'Drama', 'Horror'],
    releaseYear: 2016,
    duration: 51,
    rating: 8.7,
    imageUrl: 'https://images',
    category: 'series',
    featured: true,
    trending: true,
  },
  {
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins.',
    genre: ['Action', 'Adventure', 'Drama'],
    releaseYear: 2019,
    duration: 181,
    rating: 8.4,
    imageUrl: 'https://images',
    category: 'movie',
    featured: true,
    trending: false,
  },
];