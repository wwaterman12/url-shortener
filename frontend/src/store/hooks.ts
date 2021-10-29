import {
  TypedUseSelectorHook,
  useDispatch as useLibDispatch,
  useSelector as useLibSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => useLibDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useLibSelector;
