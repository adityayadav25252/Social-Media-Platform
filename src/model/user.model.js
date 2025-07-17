import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://www.pngitem.com/pimgs/m/551-5510463_default-user-image-png-transparent-png.png",
    trim: true,
  },
  bio: {
    type: String,
    default: "",
    trim: true,
  },
});

const userModel = mongoose.model("User",userSchema);

export default userModel
