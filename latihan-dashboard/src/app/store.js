import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "../slices/city";
import { provinceSlice } from "../slices/province"

const store = configureStore({
    reducer: {
    city: citySlice.reducer,
    province: provinceSlice.reducer,
},
});

export default store;
