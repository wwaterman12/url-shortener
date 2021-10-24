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
}

const initialState: LatestUrlState = {
  shortUrl: "",
  slug: "",
  fullUrl: "",
  status: "idle",
};

export const postNewLink = createAsyncThunk(
  "counter/fetchCount",
  async (postParams: PostParams, { rejectWithValue }) => {
    const response = await Promise.all([
      API.postNewLink(postParams),
      delay(2000),
    ]);
    return response[0];
  }
);

export const latestUrlSlice = createSlice({
  name: "latestUrl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postNewLink.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postNewLink.fulfilled, (state, action) => {
        const { shortUrl, fullUrl, slug } = action.payload;
        state.status = "idle";
        state.shortUrl = shortUrl;
        state.fullUrl = fullUrl;
        state.slug = slug;
      });
  },
});

export const selectStatus = (state: RootState) => state.latestUrl.status;
export const selectLatestUrl = (state: RootState) => ({
  fullUrl: state.latestUrl.fullUrl,
  shortUrl: state.latestUrl.shortUrl,
  slug: state.latestUrl.slug,
});

export default latestUrlSlice.reducer;
