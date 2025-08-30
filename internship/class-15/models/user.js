import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  age: {
    type: Number,
    min: 0,
    max: 125
  },
  available: {
    type: Boolean,
    default: false
  },
  arr: [
    {
      type: String
    }
  ]
});

export const User = mongoose.model("User", userSchema);
