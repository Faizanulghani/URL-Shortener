import urlSchema from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longurl, userId) => {
  try {
    const newUrl = new urlSchema({
      full_url: longurl,
      short_url: shortUrl,
    });
    if (userId) {
      newUrl.user_id = userId;
    }
    await newUrl.save();
  } catch (err) {
    if (err.code == 11000) {
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(err);
  }
};

export const getShortUrl = async (shortUrl) => {
  const url = await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
  return url.full_url;
};
