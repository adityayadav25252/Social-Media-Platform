import bcrypt from "bcryptjs";
import { createuser, userFind, userFindOne } from "../dao/user.dao.js";
import { config } from "../config/config.js";
import jwt from "jsonwebtoken";

export async function registerController(req, res) {
  const { username, password, email } = req.body;

  const userexit = await userFindOne({
    $or: [
      {
        username,
      },
      {
        email,
      },
    ],
  });
  if (userexit) {
    return res.status(401).json({
      message: "User already exists",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await createuser({
    username,
    email,
    password: hashPassword,
  });

  const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days in ms
  });

  return res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      bio: user.bio,
      image: user.image,
    },
    token,
  });
}
