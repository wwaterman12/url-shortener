import { API_URL, API_ACCESS_TOKEN } from "../lib/constants";
import { APIResponseFormat, PostParams, ShortenedUrl } from "../lib/interfaces";

// default values
const headers = {
  "Content-Type": "application/json",
  "GB-Access-Token": API_ACCESS_TOKEN,
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
