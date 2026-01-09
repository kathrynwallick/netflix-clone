import mongoose from 'mongoose';
import type { Movie } from '../types';

const movieSchema = new mongoose.Schema<Movie>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    genre: [
      {
        type: String,
        required: true,
      },
    ],
    releaseYear: {
      type: Number,
      required: [true, 'Release year is required'],
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 0,
      max: 10,
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    trailerUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    category: {
      type: String,
      enum: ['movie', 'series'],
      required: [true, 'Category is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    trending: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema);