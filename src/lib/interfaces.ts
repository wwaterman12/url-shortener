export interface PostParams {
  url: string;
  slug?: string;
}

export interface ShortenedUrl {
  fullUrl: string;
  shortUrl: string;
  slug: string;
}

export interface APIResponseFormat {
  url: string;
  short_url: string;
  slug: string;
}

export type VisibleUrlType = "shortUrl" | "fullUrl";
