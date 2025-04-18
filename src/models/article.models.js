import { Schema, model } from "mongoose";

const Article = new Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  tag: {
    type: String,
    required: true,
    trim: true,
  },
  nickname: {
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
