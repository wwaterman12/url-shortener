export interface PostParams {
  url: string;
  slug?: string;
}

export interface ShortenedUrl {
  fullUrl: string;
  shortUrl: string;
  slug: string;
}
