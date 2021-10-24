import { API_URL } from "../lib/constants";
import { PostParams, ShortenedUrl } from "../lib/interfaces";

const postNewUrl = async ({ url, slug }: PostParams): Promise<ShortenedUrl> => {
  const response = await fetch(API_URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "GB-Access-Token": "95b583f22efb9a03314b2764584efc44",
    },
    body: JSON.stringify({ url, slug }),
  });
  const data = await response.json();
  return { fullUrl: data.url, shortUrl: data.short_url, slug: data.slug };
};

const API = { postNewUrl };
export default API;
