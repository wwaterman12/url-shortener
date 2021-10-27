import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PostParams } from "../../lib/interfaces";
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
    const response = await API.postNewUrl(postParams);
    return response;
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
    resetStatus: (state) => {
      state.status = "idle";
      state.errorMessage = "";
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
      .addCase(postNewUrl.rejected, (state) => {
        state.errorMessage = "This URL has already been shortened";
        state.status = "failed";
      });
  },
});

export const { resetLatestUrl, resetStatus } = latestUrlSlice.actions;

export const selectStatus = (state: RootState) => state.latestUrl.status;
export const selectErrorMessage = (state: RootState) =>
  state.latestUrl.errorMessage;
export const selectLatestUrl = (state: RootState) => ({
  fullUrl: state.latestUrl.fullUrl,
  shortUrl: state.latestUrl.shortUrl,
  slug: state.latestUrl.slug,
});

export default latestUrlSlice.reducer;
