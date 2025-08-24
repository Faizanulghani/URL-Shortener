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

export const getShortUrl = async (shortUrl) => {
  const url = await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
  return url.full_url;
};
