import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutServices } from "../services/shortUrl.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutServices(url);
  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const shortUrl = req.params.id;
  const url = await getShortUrl(shortUrl);
  if (!url) throw new Error("Short URL not found");
  res.redirect(url);
});
