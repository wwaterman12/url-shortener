export interface PostParams {
  url: string;
  slug?: string;
}

export interface PostResponse {
  url: string;
  shortUrl: string;
  slug: string;
}
