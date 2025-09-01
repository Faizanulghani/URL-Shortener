import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shorturl from "./src/routes/shortUrl.route.js";
import auth from "./src/routes/auth.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(attachUser);

app.use("/api/auth", auth);
app.use("/api/create", shorturl);
app.get("/:id", redirectFromShortUrl);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDB();
});
