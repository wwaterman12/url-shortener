import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PostParams } from "../../lib/interfaces";
import { delay } from "../../lib/utils";
import API from "../../api";

export interface LatestUrlState {
  shortUrl: string;
  slug: string;
  fullUrl: string;
  status: "idle" | "loading" | "failed";
  errorMessage: string;
}

const initialState: LatestUrlState = {
  shortUrl: "",
  slug: "",
  fullUrl: "",
  status: "idle",
  errorMessage: "",
};

export const postNewUrl = createAsyncThunk(
  "latestUrl/postNewUrl",
  async (postParams: PostParams) => {
    const response = await Promise.all([
      API.postNewUrl(postParams),
      delay(2000),
    ]);
    return response[0];
  }
);

export const latestUrlSlice = createSlice({
  name: "latestUrl",
  initialState,
  reducers: {
    resetLatestUrl: (state) => {
      state.shortUrl = "";
      state.fullUrl = "";
      state.slug = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postNewUrl.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postNewUrl.fulfilled, (state, action) => {
        const { shortUrl, fullUrl, slug } = action.payload;
        state.status = "idle";
        state.shortUrl = shortUrl;
        state.fullUrl = fullUrl;
        state.slug = slug;
      })
      .addCase(postNewUrl.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message || "";
      });
  },
});

export const { resetLatestUrl } = latestUrlSlice.actions;

export const selectStatus = (state: RootState) => state.latestUrl.status;
export const selectLatestUrl = (state: RootState) => ({
  fullUrl: state.latestUrl.fullUrl,
  shortUrl: state.latestUrl.shortUrl,
  slug: state.latestUrl.slug,
});

export default latestUrlSlice.reducer;
