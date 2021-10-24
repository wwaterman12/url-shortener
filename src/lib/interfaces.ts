export interface PostParams {
  url: string;
  slug?: string;
}

export interface PostResponse {
  fullUrl: string;
  shortUrl: string;
  slug: string;
}
