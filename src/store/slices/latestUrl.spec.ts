import latestUrlReducer, {
  LatestUrlState,
  resetLatestUrl,
  resetStatus,
} from "./latestUrl";

describe("latest url reducer", () => {
  const initialState: LatestUrlState = {
    shortUrl: "http://bely.me/ART",
    slug: "ART",
    fullUrl: "https://www.artbygreta.org/",
    status: "loading",
    errorMessage: "",
  };

  it("should handle initial state", () => {
    expect(latestUrlReducer(undefined, { type: "unknown" })).toEqual({
      shortUrl: "",
      slug: "",
      fullUrl: "",
      status: "idle",
      errorMessage: "",
    });
  });

  it("should handle reset status", () => {
    const actual = latestUrlReducer(initialState, resetStatus());
    expect(actual.status).toEqual("idle");
  });

  it("should handle reset latestUrl", () => {
    const actual = latestUrlReducer(initialState, resetLatestUrl());
    expect(actual.slug).toEqual("");
  });
});
