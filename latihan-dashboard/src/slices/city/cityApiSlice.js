import { createAsyncThunk } from "@reduxjs/toolkit";
import cityApi from "../../data/cityApi";

export const getCities = createAsyncThunk("city/getCities", async (arg, thunkAPI) => {
    try {
    const response = await cityApi.get("/");

    return response.data;
} catch (error) {
    const message = (error?.response && error.response?.data) || error?.message;

    // rejectWithValue sends the error message as a payload
    return thunkAPI.rejectWithValue(message);
}
});

export const getCityByCode = createAsyncThunk("city/getCityByCode", async (arg, thunkAPI) => {
    try {
    const response = await cityApi.get(`/alpha/${arg}`);

    return response.data;
} catch (error) {
    const message = (error?.response && error.response?.data) || error?.message;

    // rejectWithValue sends the error message as a payload
    return thunkAPI.rejectWithValue(message);
}
});