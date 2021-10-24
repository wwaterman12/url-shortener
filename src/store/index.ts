import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import latestUrlReducer from "./slices/latestUrl";
import previousUrlsReducer from "./slices/previousUrls";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    latestUrl: latestUrlReducer,
    previousUrls: previousUrlsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
