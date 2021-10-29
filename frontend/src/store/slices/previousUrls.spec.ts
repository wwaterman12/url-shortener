import previousUrlsReducer, { addUrl, PreviousUrlsState } from "./previousUrls";

describe("latest url reducer", () => {
  const newUrl = {
    shortUrl: "http://bely.me/GOOGLE",
    slug: "GOOGLE",
    fullUrl: "https://www.google.com",
  };
  const initialState: PreviousUrlsState = {
    previousUrlsList: [
      {
        shortUrl: "http://bely.me/ART",
        slug: "ART",
        fullUrl: "https://www.artbygreta.org/",
      },
    ],
  };

  it("should handle initial state", () => {
    expect(previousUrlsReducer(undefined, { type: "unknown" })).toEqual({
      previousUrlsList: [],
    });
  });

  it("should handle adding a new URL", () => {
    const actual = previousUrlsReducer(initialState, addUrl(newUrl));
    expect(actual.previousUrlsList[0].slug).toEqual("GOOGLE");
  });
});
