import mongoose, { model } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    caption: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    mention: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post",postSchema) 

export  default Post