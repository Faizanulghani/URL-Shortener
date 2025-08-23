import urlSchema from "../models/shorturl.model.js";

export const saveShortUrl = async (shortUrl, longurl, userId) => {
  const newUrl = new urlSchema({
    full_url: longurl,
    short_url: shortUrl,
  });
  if (userId) {
    newUrl.user_id = userId;
  }
  newUrl.save();
};
