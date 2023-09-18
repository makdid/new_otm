import { createAsyncThunk } from "@reduxjs/toolkit";
import provinceApi from "../../data/provinceApi";

export const getProvinces = createAsyncThunk("province/getProvinces", async (arg, thunkAPI) => {
    try {
    const response = await provinceApi.get("/");

    return response.data;
} catch (error) {
    const message = (error?.response && error.response?.data) || error?.message;

    // rejectWithValue sends the error message as a payload
    return thunkAPI.rejectWithValue(message);
}
});

export const getProvinceByCode = createAsyncThunk("province/getProvinceByCode", async (arg, thunkAPI) => {
    try {
    const response = await provinceApi.get(`/alpha/${arg}`);

    return response.data;
} catch (error) {
    const message = (error?.response && error.response?.data) || error?.message;

    // rejectWithValue sends the error message as a payload
    return thunkAPI.rejectWithValue(message);
}
});