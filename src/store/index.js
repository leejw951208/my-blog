import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./detail-slice";

const store = configureStore({
  reducer: { detail: detailSlice.reducer },
});

export default store;
