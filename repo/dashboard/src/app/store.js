import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "../slice/city";
// import { provinceSlice } from "../slices/province"

const store = configureStore({
    reducer: {
    city: citySlice.reducer,
    // province: provinceSlice.reducer,
},
});

export default store;
