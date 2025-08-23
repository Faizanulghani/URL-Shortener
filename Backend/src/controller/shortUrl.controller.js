import { createShortUrlWithoutServices } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutServices(url);
  res.send(process.env.APP_URL + shortUrl);
};
