import dotenv from "dotenv"

dotenv.config()

export const config={
  MONGODB_URL:process.env.MONGODB_URL,
   JWT_SECRET: process.env.JWT_SECRET,
   IMGKIT_PUBLIC_KEY: process.env.IMGKIT_PUBLIC_KEY,
   IMGKIT_PRIVATE_KEY: process.env.IMGKIT_PRIVATE_KEY,
   IMGKIT_ENDPOINT_URL: process.env.IMGKIT_ENDPOINT_URL,
}