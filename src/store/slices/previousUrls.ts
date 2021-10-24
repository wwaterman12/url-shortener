import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ShortenedUrl } from "../../lib/interfaces";
import { delay } from "../../lib/utils";
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
    const response = await Promise.all([API.fetchPreviousUrls(), delay(2000)]);
    return response[0];
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
    builder.addCase(fetchPreviousUrls.fulfilled, (state, action) => {
      state.previousUrlsList = action.payload;
    });
  },
});

export const selectPreviousUrls = (state: RootState) =>
  state.previousUrls.previousUrlsList;

export default previousUrlsSlice.reducer;
