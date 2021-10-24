import { API_URL } from "../lib/constants";
import { APIResponseFormat, PostParams, ShortenedUrl } from "../lib/interfaces";

// default values
const headers = {
  "Content-Type": "application/json",
  "GB-Access-Token": "95b583f22efb9a03314b2764584efc44",
};
const mode = "cors";

const cleanData = (data: APIResponseFormat) => ({
  fullUrl: data.url,
  shortUrl: data.short_url,
  slug: data.slug,
});

async function postNewUrl({ url, slug }: PostParams): Promise<ShortenedUrl> {
  const response = await fetch(API_URL, {
    method: "POST",
    mode,
    headers,
    body: JSON.stringify({ url, slug }),
  });
  const data = await response.json();
  return cleanData(data);
}

async function fetchPreviousUrls(): Promise<ShortenedUrl[]> {
  const response = await fetch(API_URL, {
    method: "GET",
    mode,
    headers,
  });
  const responseData = await response.json();
  return responseData.map((data: APIResponseFormat) => cleanData(data));
}

const API = { postNewUrl, fetchPreviousUrls };
export default API;
