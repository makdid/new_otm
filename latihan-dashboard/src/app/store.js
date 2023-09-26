import { configureStore } from "@reduxjs/toolkit";

import { appSlice } from "../slices/app";
import { authSlice } from "../slices/auth";
import { wbSlice } from "../slices/wb";
import apiSlice from "../slices/apiSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    wb: wbSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
