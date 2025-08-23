import { saveShortUrl } from "../dao/shortUrl.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithoutServices = async (url) => {
  const shortUrl = generateNanoId(7);
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};
export const createShortUrlWithServices = async (url, userId) => {
  const shortUrl = generateNanoId(7);
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
