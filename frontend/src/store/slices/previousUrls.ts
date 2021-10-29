import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ShortenedUrl } from "../../lib/interfaces";
import API from "../../api";

export interface PreviousUrlsState {
  previousUrlsList: ShortenedUrl[];
}

const initialState: PreviousUrlsState = {
  previousUrlsList: [],
};

export const fetchPreviousUrls = createAsyncThunk(
  "previousUrls/fetchPreviousUrls",
  async () => {
    const response = await API.fetchPreviousUrls();
    return response;
  }
);

export const deletePreviousUrl = createAsyncThunk(
  "previousUrls/deletePreviousUrl",
  async (slug: string) => {
    await API.deletePreviousUrl(slug);
    return slug;
  }
);

export const previousUrlsSlice = createSlice({
  name: "previousUrls",
  initialState,
  reducers: {
    addUrl: (state, action: PayloadAction<ShortenedUrl>) => {
      state.previousUrlsList = [action.payload, ...state.previousUrlsList];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPreviousUrls.fulfilled, (state, action) => {
        state.previousUrlsList = action.payload;
      })
      .addCase(deletePreviousUrl.fulfilled, (state, action) => {
        state.previousUrlsList = state.previousUrlsList.filter(
          (url) => url.slug !== action.payload
        );
      });
  },
});

export const { addUrl } = previousUrlsSlice.actions;

export const selectPreviousUrls = (state: RootState) =>
  state.previousUrls.previousUrlsList;
export const selectPreviousUrlSlugs = (state: RootState) =>
  state.previousUrls.previousUrlsList.map((url) => url.slug);

export default previousUrlsSlice.reducer;
