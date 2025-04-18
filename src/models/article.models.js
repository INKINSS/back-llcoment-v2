import { Schema, model } from "mongoose";

const Article = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default model("Article", Article);
