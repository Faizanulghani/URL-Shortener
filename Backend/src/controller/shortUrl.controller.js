import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutServices } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutServices(url);
  res.send(process.env.APP_URL + shortUrl);
};

export const redirectFromShortUrl = async (req, res) => {
  const shortUrl = req.params.id;
  const url = await getShortUrl(shortUrl);
  res.redirect(url);
};
