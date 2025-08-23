import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";

export const createShortUrlServices = async (url) => {
  const shortUrl = await generateNanoId(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  newUrl.save();
  return shortUrl;
};
