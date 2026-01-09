import mongoose from 'mongoose';
import type { User } from '../types';

const userSchema = new mongoose.Schema<User>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    subscription: {
      type: String,
      enum: ['basic', 'standard', 'premium'],
      default: 'basic',
    },
    watchlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', userSchema);